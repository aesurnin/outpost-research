#!/usr/bin/env npx tsx
/**
 * Migrate to new architecture:
 *   raw_data/     - flat, ASCII filenames only (SOURCES)
 *   kb/{id}/      - content.md + tree.json + source.json (DESCRIPTIONS)
 *
 * Run: npx tsx scripts/6_migrate_to_new_architecture.ts
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, renameSync, existsSync, unlinkSync, rmdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildTreeFromMarkdown } from "./build-tree-from-md.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const RAW_DATA = join(ROOT, "raw_data");
const KB = join(ROOT, "kb");

// Mapping: old filename -> new id (ASCII slug without extension)
const RENAME_MAP: [string, string][] = [
  ["2026-02-25 - Интеграция June и Outpost.md", "2026-02-25-integraciya-june-outpost"],
  ["2026-02-27 - Outpost+Vibe.md", "2026-02-27-outpost-vibe"],
  ["Meeting Summary_ Outpost + Vibe — Sales & Automation Discovery Call.rtf", "meeting-summary-outpost-vibe-sales-automation"],
  ["Impromptu Google Meet Meeting - Mar 3 2026.mp4", "impromptu-google-meet-mar-3-2026"],
  ["Impromptu Google Meet Meeting - Mar 4 2026.mp4", "impromptu-google-meet-mar-4-2026"],
  ["Impromptu Google Meet Meeting - Mar 5 2026.mp4", "impromptu-google-meet-mar-5-2026"],
  ["2026-03-05 16-45-31.mov", "2026-03-05-16-45-31"],
  ["2026-03-05 16-50-21.mov", "2026-03-05-16-50-21"],
  ["2026-03-05 16-59-27.mov", "2026-03-05-16-59-27"],
];

// Old kb path -> new id
const KB_MIGRATION: [string, string][] = [
  ["kb/meetings/2026-02-25 - Интеграция June и Outpost.md", "2026-02-25-integraciya-june-outpost"],
  ["kb/meetings/2026-02-27 - Outpost+Vibe.md", "2026-02-27-outpost-vibe"],
  ["kb/meetings/Meeting Summary_ Outpost + Vibe — Sales & Automation Discovery Call.md", "meeting-summary-outpost-vibe-sales-automation"],
  ["kb/video_demos/Impromptu Google Meet Meeting - Mar 3 2026.md", "impromptu-google-meet-mar-3-2026"],
  ["kb/video_demos/Impromptu Google Meet Meeting - Mar 4 2026.md", "impromptu-google-meet-mar-4-2026"],
  ["kb/video_demos/Impromptu Google Meet Meeting - Mar 5 2026.md", "impromptu-google-meet-mar-5-2026"],
  ["kb/video_demos/2026-03-05 16-45-31.md", "2026-03-05-16-45-31"],
  ["kb/video_demos/2026-03-05 16-50-21.md", "2026-03-05-16-50-21"],
  ["kb/video_demos/2026-03-05 16-59-27.md", "2026-03-05-16-59-27"],
];

function stripFrontmatter(md: string): string {
  if (md.startsWith("```markdown\n")) md = md.slice(12);
  if (md.startsWith("---\n")) {
    const end = md.indexOf("\n---\n");
    if (end !== -1) md = md.slice(end + 5);
  }
  if (md.startsWith("---\n")) {
    const end = md.indexOf("\n---\n");
    if (end !== -1) md = md.slice(end + 5);
  }
  if (md.endsWith("\n```")) md = md.slice(0, -4);
  return md.trim();
}

function main() {
  console.log("Migrating to new architecture...\n");

  // 1. Rename raw_data files to ASCII
  console.log("1. Renaming raw_data files to ASCII");
  for (const [oldName, newId] of RENAME_MAP) {
    const oldPath = join(RAW_DATA, oldName);
    const ext = oldName.includes(".") ? oldName.slice(oldName.lastIndexOf(".")) : "";
    const newName = newId + ext;
    const newPath = join(RAW_DATA, newName);

    if (existsSync(oldPath)) {
      if (oldPath !== newPath) {
        renameSync(oldPath, newPath);
        console.log(`   ${oldName} -> ${newName}`);
      }
    } else {
      console.log(`   (skip, not found: ${oldName})`);
    }
  }

  // 2. Create kb/{id}/content.md, tree.json, source.json
  console.log("\n2. Creating kb structure");
  for (const [oldKbPath, id] of KB_MIGRATION) {
    const fullPath = join(ROOT, oldKbPath);
    if (!existsSync(fullPath)) {
      console.log(`   (skip, not found: ${oldKbPath})`);
      continue;
    }

    const kbDir = join(KB, id);
    mkdirSync(kbDir, { recursive: true });

    let rawMd = readFileSync(fullPath, "utf8");
    const contentMd = stripFrontmatter(rawMd);

    const { structure } = buildTreeFromMarkdown(contentMd);

    writeFileSync(join(kbDir, "content.md"), contentMd, "utf8");
    writeFileSync(join(kbDir, "tree.json"), JSON.stringify({ structure }, null, 2), "utf8");

    const [oldName] = RENAME_MAP.find(([, rid]) => rid === id) ?? [""];
    const sourceExt = oldName.includes(".") ? oldName.slice(oldName.lastIndexOf(".")) : ".md";
    const sourceFile = id + sourceExt;
    writeFileSync(
      join(kbDir, "source.json"),
      JSON.stringify({ file: sourceFile, path: `raw_data/${sourceFile}` }, null, 2),
      "utf8"
    );

    console.log(`   ${id}/`);
  }

  // 3. Remove old kb/meetings and kb/video_demos
  console.log("\n3. Removing old kb/meetings and kb/video_demos");
  const oldMeetings = join(ROOT, "kb", "meetings");
  const oldVideoDemos = join(ROOT, "kb", "video_demos");
  if (existsSync(oldMeetings)) {
    for (const f of readdirSync(oldMeetings)) {
      unlinkSync(join(oldMeetings, f));
    }
    rmdirSync(oldMeetings);
    console.log("   Removed kb/meetings/");
  }
  if (existsSync(oldVideoDemos)) {
    for (const f of readdirSync(oldVideoDemos)) {
      unlinkSync(join(oldVideoDemos, f));
    }
    rmdirSync(oldVideoDemos);
    console.log("   Removed kb/video_demos/");
  }

  console.log("\nDone.");
}

main();
