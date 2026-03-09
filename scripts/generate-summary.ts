#!/usr/bin/env npx tsx
/**
 * Generate structured summary from content.md + tree.json for a KB folder.
 * Writes summary.md and summary_tree.json.
 *
 * Usage: npx tsx scripts/generate-summary.ts [kb_folder_id]
 * If no id given, processes all kb folders that have content.md but no summary.md.
 *
 * Requires: GOOGLE_GENERATIVE_AI_API_KEY in .env
 */
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { TreeNode } from "./tree-types.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const KB_DIR = join(PROJECT_ROOT, "kb");
const MODEL_ID = "gemini-2.5-pro";

const GENERATE_SUMMARY_PROMPT = `Generate a structured summary of the meeting/document in Markdown. Include ALL sections below; use "N/A" or omit content for sections with no relevant data.

Sections (in order):
## Company Structure — org chart, roles, teams
## Processes — workflows, funnels, stages
## Meeting Dynamics — attendees, who did what, chronology
## Screens / Presentations — what was shown on screen
## Topics for Further Detail — themes needing deeper exploration (include node_id from tree)
## Source Links — quotes in format [Text](/knowledge/DOC_ID?lines=X-Y)
## Key Decisions & Action Items — who does what, when, deadlines
## Risks & Concerns — risks mentioned, concerns raised
## Metrics & KPIs — numbers, conversion rates, targets
## Technology Stack / Tools — systems, APIs, tools mentioned
## Open Questions — unresolved questions, follow-ups needed
## Next Steps — agreed next meetings, deliverables
## Pain Points — specific problems mentioned
## Opportunities — opportunities identified
## Dependencies — blockers, dependencies on other teams/systems
## Glossary / Terminology — domain-specific terms used
## Context / Background — what led to this meeting, prior context

Use the content and tree below. For each quote, use correct line numbers from the tree. Use DOC_ID placeholder for doc id in links.

---
content_md:
{content_md}

---
tree_index_json:
{tree_json}
---`;

function parseSummaryToTree(summaryMd: string): TreeNode[] {
  const lines = summaryMd.split("\n");
  const structure: TreeNode[] = [];
  let nodeCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^##\s+(.+)$/);
    if (!match) continue;

    nodeCounter++;
    const title = match[1].trim();
    const lineNum = i + 1;

    let summary = "";
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      const t = lines[j].trim();
      if (t && !t.startsWith("#")) {
        summary = t.slice(0, 200);
        if (t.length > 200) summary += "...";
        break;
      }
    }

    structure.push({
      node_id: `0000-${nodeCounter}`,
      title,
      summary: summary || title,
      line_num: lineNum,
    });
  }

  return structure;
}

async function generateSummaryForFolder(kbId: string): Promise<boolean> {
  const kbFolder = join(KB_DIR, kbId);
  const contentPath = join(kbFolder, "content.md");
  const treePath = join(kbFolder, "tree.json");

  if (!existsSync(contentPath) || !existsSync(treePath)) {
    console.log(`   Skip ${kbId}: missing content.md or tree.json`);
    return false;
  }

  const contentMd = readFileSync(contentPath, "utf-8");
  const treeJson = readFileSync(treePath, "utf-8");

  const prompt = GENERATE_SUMMARY_PROMPT
    .replace("{content_md}", contentMd)
    .replace("{tree_json}", treeJson);

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_GENERATIVE_AI_API_KEY required in .env");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: MODEL_ID,
    contents: prompt,
    config: {
      temperature: 0.3,
      maxOutputTokens: 8192,
    },
  });

  const text = response.text;
  if (!text) {
    console.error(`   No response for ${kbId}`);
    return false;
  }

  const summaryMd = text.trim();
  const summaryTree = parseSummaryToTree(summaryMd);
  const summaryTreeJson = JSON.stringify({ structure: summaryTree }, null, 2);

  writeFileSync(join(kbFolder, "summary.md"), summaryMd, "utf-8");
  writeFileSync(join(kbFolder, "summary_tree.json"), summaryTreeJson, "utf-8");

  console.log(`   Generated: ${kbId}`);
  return true;
}

async function main() {
  const targetId = process.argv[2];

  if (targetId) {
    const kbFolder = join(KB_DIR, targetId);
    if (!existsSync(kbFolder)) {
      console.error(`Folder not found: ${kbFolder}`);
      process.exit(1);
    }
    await generateSummaryForFolder(targetId);
    return;
  }

  const ids = readdirSync(KB_DIR).filter((f) => {
    const p = join(KB_DIR, f);
    return (
      existsSync(join(p, "content.md")) &&
      existsSync(join(p, "tree.json")) &&
      !existsSync(join(p, "summary.md"))
    );
  });

  console.log(`Generating summaries for ${ids.length} folders...\n`);

  for (const id of ids) {
    await generateSummaryForFolder(id);
  }

  console.log("\nDone.");
}

main().catch(console.error);
