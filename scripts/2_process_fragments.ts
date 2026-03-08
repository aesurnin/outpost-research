#!/usr/bin/env npx tsx
/**
 * Process each video fragment through Gemini 3 Flash.
 * Extracts transcription, screens, and participants hints.
 */
import {
  GoogleGenAI,
  createPartFromUri,
  createUserContent,
} from "@google/genai";
import "dotenv/config";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const FRAGMENTS_DIR = join(PROJECT_ROOT, "fragments");
const OUTPUT_DIR = join(PROJECT_ROOT, "output");
const FRAGMENTS_RAW_DIR = join(OUTPUT_DIR, "fragments_raw");

const MODEL_ID = "gemini-2.0-flash";
const SEGMENT_DURATION = 300;

const FRAGMENT_PROMPT = `Ты анализируешь фрагмент записи встречи Google Meet (sales-команда).
Фрагмент: {start_time} - {end_time} от начала записи (в секундах).

Извлеки и верни ТОЛЬКО валидный JSON, без markdown и пояснений:
{
  "transcription": [
    {"start_sec": 0, "end_sec": 45, "speaker": "SPEAKER_A", "text": "..."},
    ...
  ],
  "screens": [
    {"timestamp_sec": 120, "description": "Dashboard: Pipeline, 23 deals", "visible_text": "..."},
    ...
  ],
  "participants_hints": [
    {"speaker_id": "SPEAKER_A", "possible_name": "Иван", "role_hint": "менеджер"},
    ...
  ]
}

Транскрипция: дословно текст из аудио с таймингом относительно начала фрагмента (start_sec, end_sec в секундах).
Screens: описание экранов, дашбордов, UI — что видно на экране.
Participants_hints: по контексту речи — кто к кому обращается, имена, роли.`;

interface FragmentResult {
  transcription?: Array<{ start_sec: number; end_sec: number; speaker: string; text: string }>;
  screens?: Array<{ timestamp_sec: number; description: string; visible_text?: string }>;
  participants_hints?: Array<{
    speaker_id: string;
    possible_name?: string;
    role_hint?: string;
  }>;
  _meta?: { fragment_idx: number; start_sec: number; end_sec: number; source: string };
}

function extractJsonFromResponse(text: string): FragmentResult {
  let cleaned = text.trim();
  const jsonMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    cleaned = jsonMatch[1].trim();
  }
  return JSON.parse(cleaned) as FragmentResult;
}

async function waitForFileActive(
  ai: InstanceType<typeof GoogleGenAI>,
  name: string,
  maxWaitMs = 120_000
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const file = await ai.files.get({ name });
    if (file.state === "ACTIVE") return;
    if (file.state === "FAILED") {
      throw new Error(`File processing failed: ${name}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error(`File processing timeout: ${name}`);
}

async function main(): Promise<void> {
  const apiKey = process.env.GOOGLE_API;
  if (!apiKey) {
    console.error("Error: GOOGLE_API not set in .env");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  const files = readdirSync(FRAGMENTS_DIR)
    .filter((f) => f.startsWith("fragment_") && f.endsWith(".mp4"))
    .sort();
  if (files.length === 0) {
    console.error("Error: No fragments found in", FRAGMENTS_DIR);
    process.exit(1);
  }

  const { mkdirSync } = await import("node:fs");
  mkdirSync(FRAGMENTS_RAW_DIR, { recursive: true });

  console.log(`Using model: ${MODEL_ID}`);
  console.log(`Processing ${files.length} fragments...`);

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const match = f.match(/fragment_(\d+)\.mp4/);
    if (!match) continue;
    const idx = parseInt(match[1], 10);
    const startSec = idx * SEGMENT_DURATION;
    const endSec = startSec + SEGMENT_DURATION;

    const outPath = join(FRAGMENTS_RAW_DIR, `fragment_${String(idx).padStart(3, "0")}.json`);
    try {
      readFileSync(outPath, "utf8");
      console.log(`  [${i + 1}/${files.length}] Skipping ${f} (already exists)`);
      continue;
    } catch {
      // file doesn't exist, proceed
    }

    const fragPath = join(FRAGMENTS_DIR, f);
    const prompt = FRAGMENT_PROMPT.replace("{start_time}", String(startSec)).replace(
      "{end_time}",
      String(endSec)
    );

    try {
      const uploaded = await ai.files.upload({
        file: fragPath,
        config: { mimeType: "video/mp4" },
      });
      if (uploaded.name) {
        await waitForFileActive(ai, uploaded.name);
      }
      const fileUri = uploaded.uri ?? `https://generativelanguage.googleapis.com/v1beta/${uploaded.name}`;
      const mimeType = uploaded.mimeType ?? "video/mp4";

      const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: createUserContent([
          createPartFromUri(fileUri, mimeType),
          prompt,
        ]),
      });

      const text =
        (response as { text?: string }).text ??
        (response as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> })
          ?.candidates?.[0]?.content?.parts?.[0]?.text ??
        String(response);

      const data = extractJsonFromResponse(text);
      data._meta = {
        fragment_idx: idx,
        start_sec: startSec,
        end_sec: endSec,
        source: f,
      };
      writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
      console.log(`  [${i + 1}/${files.length}] OK ${f} -> ${outPath.split("/").pop()}`);
    } catch (e) {
      console.error(`  [${i + 1}/${files.length}] ERROR ${f}:`, e);
      const debugPath = join(FRAGMENTS_RAW_DIR, `fragment_${String(idx).padStart(3, "0")}_error.txt`);
      writeFileSync(debugPath, String(e), "utf8");
    }
  }

  console.log("Done.");
  console.log(`Results in ${FRAGMENTS_RAW_DIR}`);
}

main();
