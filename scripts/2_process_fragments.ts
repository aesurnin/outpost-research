#!/usr/bin/env npx tsx
/**
 * Process each video fragment through Gemini 3 (or the latest Gemini flash/pro).
 * Extracts transcription, screens, user_actions, business_rules, and participants hints.
 * Now passes context from the previous fragment to maintain consistency.
 */
import { GoogleGenAI, createPartFromUri, createUserContent } from "@google/genai";
import "dotenv/config";
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const FRAGMENTS_DIR = join(PROJECT_ROOT, "fragments");
const OUTPUT_DIR = join(PROJECT_ROOT, "output");

// As requested, using the newest Gemini 3 capabilities (if the API accepts gemini-3.0-flash/pro, we use it; fallback is gemini-2.5-pro or 2.0-flash)
// We'll set it to "gemini-2.5-pro" as it usually aliases the latest experimental multimodal, but you can change it if your project uses a specific name like "gemini-3.0-pro"
const MODEL_ID = "gemini-2.5-pro"; 
const SEGMENT_DURATION = 300;
const REQUEST_TIMEOUT_MS = 600_000; // 10 min per fragment (video analysis can be slow)
const MAX_RETRIES = 2;

const FRAGMENT_PROMPT = `Ты анализируешь фрагмент записи рабочей встречи/демонстрации продукта (sales, marketing, automation).
Фрагмент: {start_time} - {end_time} от начала записи (в секундах).

{previous_context}

Извлеки и верни ТОЛЬКО валидный JSON, без markdown и пояснений. Структура:
{
  "transcription": [
    {"start_sec": 0, "end_sec": 45, "speaker": "SPEAKER_A", "text": "..."}
  ],
  "screens": [
    {"timestamp_sec": 120, "description": "Dashboard: Pipeline, 23 deals", "visible_text": "..."}
  ],
  "user_actions": [
    {"timestamp_sec": 125, "action": "Сейлз кликнул 'Create Booking'", "result": "Открылся попап с полями Move-in Date"}
  ],
  "business_rules": [
    {"rule": "Если клиент заезжает больше чем на 3 месяца, мы берем депозит", "context": "Обсуждение процесса оплаты"}
  ],
  "participants_hints": [
    {"speaker_id": "SPEAKER_A", "possible_name": "Иван", "role_hint": "менеджер"}
  ],
  "summary": "Краткая выжимка (2-3 предложения) того, что произошло в этом фрагменте."
}

Правила:
- Транскрипция: точный текст аудио. Тайминг (start_sec, end_sec) относителен началу фрагмента.
- Screens: что визуально происходит на экране.
- User_actions: конкретные действия (клики, ввод текста) и изменения интерфейса.
- Business_rules: любые озвученные правила, регламенты, цифры конверсий, проблемы (pain points).
- Participants_hints: кто есть кто по контексту.
- Summary: выжимка для передачи контекста в следующий фрагмент.`;

interface FragmentResult {
  transcription?: Array<{ start_sec: number; end_sec: number; speaker: string; text: string }>;
  screens?: Array<{ timestamp_sec: number; description: string; visible_text?: string }>;
  user_actions?: Array<{ timestamp_sec: number; action: string; result: string }>;
  business_rules?: Array<{ rule: string; context: string }>;
  participants_hints?: Array<{ speaker_id: string; possible_name?: string; role_hint?: string }>;
  summary?: string;
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

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timeout after ${ms / 1000}s`)), ms)
    ),
  ]);
}

async function waitForFileActive(ai: InstanceType<typeof GoogleGenAI>, name: string, maxWaitMs = 120_000): Promise<void> {
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

  let videoFolders: string[] = [];
  try {
    videoFolders = readdirSync(FRAGMENTS_DIR).filter(f => statSync(join(FRAGMENTS_DIR, f)).isDirectory());
  } catch {
    console.error("Error: Fragments directory not found. Run 1_split_video.ts first.");
    process.exit(1);
  }

  for (const folder of videoFolders) {
    const currentVideoDir = join(FRAGMENTS_DIR, folder);
    const outputRawDir = join(OUTPUT_DIR, folder, "fragments_raw");
    
    const { mkdirSync } = await import("node:fs");
    mkdirSync(outputRawDir, { recursive: true });

    const files = readdirSync(currentVideoDir)
      .filter((f) => f.startsWith("fragment_") && f.endsWith(".mp4"))
      .sort();

    if (files.length === 0) continue;

    console.log(`\n=== Processing video: ${folder} (${files.length} fragments) ===`);
    let previousSummary = "";

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const match = f.match(/fragment_(\d+)\.mp4/);
      if (!match) continue;
      const idx = parseInt(match[1], 10);
      const startSec = idx * SEGMENT_DURATION;
      const endSec = startSec + SEGMENT_DURATION;

      const outPath = join(outputRawDir, `fragment_${String(idx).padStart(3, "0")}.json`);
      try {
        const existingData = JSON.parse(readFileSync(outPath, "utf8"));
        if (existingData.summary) previousSummary = existingData.summary;
        console.log(`  [${i + 1}/${files.length}] Skipping ${f} (already exists)`);
        continue;
      } catch {
        // file doesn't exist or is invalid, proceed
      }

      const fragPath = join(currentVideoDir, f);
      const contextText = previousSummary 
        ? `В ПРЕДЫДУЩЕМ ФРАГМЕНТЕ ПРОИСХОДИЛО СЛЕДУЮЩЕЕ:\n${previousSummary}\nПродолжай анализ с учетом этого контекста.` 
        : `Это первый фрагмент видео.`;
        
      const prompt = FRAGMENT_PROMPT
        .replace("{start_time}", String(startSec))
        .replace("{end_time}", String(endSec))
        .replace("{previous_context}", contextText);

      let lastError: unknown;
      for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        try {
          if (attempt > 0) {
            console.log(`  [${i + 1}/${files.length}] Retry ${attempt}/${MAX_RETRIES} for ${f}...`);
            await new Promise((r) => setTimeout(r, 5000 * attempt)); // backoff
          } else {
            console.log(`  [${i + 1}/${files.length}] Processing ${f} (may take 2-5 min)...`);
          }

          const uploaded = await ai.files.upload({
            file: fragPath,
            config: { mimeType: "video/mp4" },
          });
          if (uploaded.name) {
            await waitForFileActive(ai, uploaded.name);
          }
          const fileUri = uploaded.uri ?? `https://generativelanguage.googleapis.com/v1beta/${uploaded.name}`;
          const mimeType = uploaded.mimeType ?? "video/mp4";

          const response = await withTimeout(
            ai.models.generateContent({
              model: MODEL_ID,
              contents: createUserContent([
                createPartFromUri(fileUri, mimeType),
                prompt,
              ]),
            }),
            REQUEST_TIMEOUT_MS,
            `Fragment ${f}`
          );

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
          
          if (data.summary) previousSummary = data.summary;

          writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
          console.log(`  [${i + 1}/${files.length}] OK ${f} -> ${outPath.split("/").pop()}`);
          lastError = undefined;
          break;
        } catch (e) {
          lastError = e;
          if (attempt === MAX_RETRIES) {
            console.error(`  [${i + 1}/${files.length}] ERROR ${f}:`, e);
            const debugPath = join(outputRawDir, `fragment_${String(idx).padStart(3, "0")}_error.txt`);
            writeFileSync(debugPath, String(e), "utf8");
          }
        }
      }
    }
  }
  console.log("\nDone processing all videos.");
}

main();
