#!/usr/bin/env npx tsx
/**
 * Generate sales department schema document from merged transcription and participants.
 */
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(PROJECT_ROOT, "output");

const MODEL_ID = "gemini-2.0-flash";

const SCHEMA_PROMPT = `На основе транскрипции встречи sales-команды и карты участников сгенерируй структурированный документ по sales-департаменту.

Структура документа (markdown):
1. **Люди** — роли, зоны ответственности, упомянутые имена
2. **Стек технологий** — CRM, дашборды, инструменты (из экранов и речи)
3. **Процессы** — этапы воронки, handoffs, регламенты
4. **Воронки** — метрики, стадии, конверсии (из дашбордов и обсуждений)
5. **Pain points** — проблемы, блокеры, улучшения

Добавь Mermaid-диаграммы где уместно (оргструктура, воронка, процессы).
Пиши на русском.`;

async function main(): Promise<void> {
  const apiKey = process.env.GOOGLE_API;
  if (!apiKey) {
    console.error("Error: GOOGLE_API not set in .env");
    process.exit(1);
  }

  const transcriptionPath = join(OUTPUT_DIR, "01_transcription_full.md");
  const participantsPath = join(OUTPUT_DIR, "02_participants_map.md");

  let transcription = "";
  let participants = "";
  try {
    transcription = readFileSync(transcriptionPath, "utf8");
  } catch {
    console.error("Error: Run 3_merge_results.ts first to create 01_transcription_full.md");
    process.exit(1);
  }
  try {
    participants = readFileSync(participantsPath, "utf8");
  } catch {
    console.warn("Warning: 02_participants_map.md not found, proceeding without it");
  }

  const ai = new GoogleGenAI({ apiKey });

  const fullPrompt = `${SCHEMA_PROMPT}

---
## Транскрипция
${transcription}

---
## Участники
${participants}
`;

  console.log("Generating sales department schema...");
  const response = await ai.models.generateContent({
    model: MODEL_ID,
    contents: fullPrompt,
  });

  const text =
    (response as { text?: string }).text ??
    (response as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> })
      ?.candidates?.[0]?.content?.parts?.[0]?.text ??
    String(response);

  const outPath = join(OUTPUT_DIR, "03_sales_department_schema.md");
  writeFileSync(outPath, text, "utf8");
  console.log(`Saved: ${outPath}`);
}

main();
