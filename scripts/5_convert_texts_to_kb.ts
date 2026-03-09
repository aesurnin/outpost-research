#!/usr/bin/env npx tsx
/**
 * Convert text meeting logs (md, rtf) to KB format with YAML frontmatter.
 * Uses Gemini to extract TL;DR, entities, tags and produce unified Markdown.
 */
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const RAW_DATA = join(PROJECT_ROOT, "raw_data");
const KB_MEETINGS = join(PROJECT_ROOT, "kb", "meetings");

const MODEL_ID = "gemini-2.5-pro";

const CONVERT_PROMPT = `Ты конвертируешь лог встречи в единый формат Базы Знаний для AI-агентов.

Исходный текст (markdown или plain text):

---
{content}
---

Верни ОДИН markdown-документ со следующей структурой. БЕЗ пояснений до или после — только готовый документ.

---
id: {id}
date: {date}
type: meeting_transcript
tags: [sales, automation, hubspot, crm, ...]
participants: [Имя1, Имя2, ...]
status: processed
---

# {title}

## 🎯 TL;DR (Executive Summary)
Краткая выжимка на 3-4 предложения: о чём встреча, ключевые решения, главные боли.

## 🛠 Упомянутые системы (Entities)
- **CRM/Tools**: HubSpot, Stripe, Zendesk, Obligo, Calendly, ...
- **Метрики**: occupancy, response time, ...
(список всех систем, инструментов, метрик из текста)

## 📌 Ключевые решения и инсайты
- [Инсайт 1]
- [Инсайт 2]
...

## 📄 Полный контент
(сохрани весь оригинальный контент — Summary, Chapters, темы — без потерь, можно слегка почистить ссылки read.ai)

Правила:
- id: lowercase, дефисы вместо пробелов (напр. outpost-vibe-2026-02-27)
- date: YYYY-MM-DD из текста встречи
- tags: релевантные темы из обсуждения
- participants: имена из текста
- Сохраняй всю содержательную информацию, не сокращай детали`;

function extractTextFromRtf(rtfPath: string): string {
  try {
    return execSync(`textutil -convert txt -stdout "${rtfPath}"`, {
      encoding: "utf8",
      maxBuffer: 2 * 1024 * 1024,
    });
  } catch {
    return readFileSync(rtfPath, "utf8").replace(/\\[a-z]+\d*\s?/g, " ").replace(/[{}]/g, "");
  }
}

function getContent(filePath: string): string {
  const ext = filePath.toLowerCase().slice(-4);
  if (ext === ".rtf") {
    return extractTextFromRtf(filePath);
  }
  return readFileSync(filePath, "utf8");
}

function deriveIdAndDate(filename: string, content: string): { id: string; date: string; title: string } {
  const isoMatch = content.match(/(\d{4})-(\d{2})-(\d{2})/);
  let date = new Date().toISOString().slice(0, 10);
  if (isoMatch) date = isoMatch[0];
  const nameBase = filename.replace(/\.(md|rtf)$/i, "").trim();
  const id = nameBase
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
  return { id, date, title: nameBase };
}

async function main(): Promise<void> {
  const apiKey = process.env.GOOGLE_API;
  if (!apiKey) {
    console.error("Error: GOOGLE_API not set in .env");
    process.exit(1);
  }

  mkdirSync(KB_MEETINGS, { recursive: true });

  const files = readdirSync(RAW_DATA).filter(
    (f) => f.endsWith(".md") || f.endsWith(".rtf")
  );

  const ai = new GoogleGenAI({ apiKey });

  for (const file of files) {
    const filePath = join(RAW_DATA, file);
    const outName = file.replace(/\.(md|rtf)$/i, ".md");
    const outPath = join(KB_MEETINGS, outName);

    try {
      const existing = readFileSync(outPath, "utf8");
      if (existing.includes("status: processed")) {
        console.log(`Skip ${file} (already exists)`);
        continue;
      }
    } catch {
      // file doesn't exist, proceed
    }

    console.log(`Processing ${file}...`);
    let content = getContent(filePath);
    if (content.length > 900_000) {
      content = content.slice(0, 900_000) + "\n\n[... truncated for context limit ...]";
    }

    const { id, date, title } = deriveIdAndDate(file, content);

    const prompt = CONVERT_PROMPT
      .replace("{content}", content)
      .replace("{id}", id)
      .replace("{date}", date)
      .replace("{title}", title);

    try {
      const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: prompt,
      });

      const text =
        (response as { text?: string }).text ??
        (response as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> })
          ?.candidates?.[0]?.content?.parts?.[0]?.text ??
        String(response);

      let cleaned = text.trim();
      const fmMatch = cleaned.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
      if (fmMatch) {
        writeFileSync(outPath, cleaned, "utf8");
      } else {
        writeFileSync(outPath, cleaned, "utf8");
      }
      console.log(`  OK -> ${outPath}`);
    } catch (e) {
      console.error(`  ERROR ${file}:`, e);
    }
  }
  console.log("\nDone.");
}

main();
