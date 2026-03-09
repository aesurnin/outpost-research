#!/usr/bin/env npx tsx
/**
 * Merge fragment JSONs into a unified KB Markdown document for each video.
 * Incorporates screens, user actions, business rules, and links to screenshots.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(PROJECT_ROOT, "output");
const KB_DIR = join(PROJECT_ROOT, "kb", "video_demos");

interface TranscriptionSegment {
  start_sec: number; end_sec: number; speaker: string; text: string;
}
interface ScreenEntry {
  timestamp_sec: number; description: string; visible_text?: string;
}
interface UserAction {
  timestamp_sec: number; action: string; result: string;
}
interface BusinessRule {
  rule: string; context: string;
}
interface ParticipantHint {
  speaker_id: string; possible_name?: string; role_hint?: string;
}

interface FragmentData {
  transcription?: TranscriptionSegment[];
  screens?: ScreenEntry[];
  user_actions?: UserAction[];
  business_rules?: BusinessRule[];
  participants_hints?: ParticipantHint[];
  summary?: string;
  _meta?: { fragment_idx: number; start_sec: number; end_sec: number; source: string };
}

function formatTime(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function getScreenshotPath(videoBasename: string, global_sec: number): string {
  // 1 frame every 15 seconds. Frame index starts at 1 usually.
  // sec = 0 -> frame 1. sec = 15 -> frame 2.
  const frameIdx = Math.floor(global_sec / 15) + 1;
  const frameStr = String(frameIdx).padStart(4, "0");
  // Relative path from kb/video_demos to fragments/videoBasename/screenshots/
  return `../../fragments/${videoBasename}/screenshots/screen_${frameStr}.jpg`;
}

function main(): void {
  mkdirSync(KB_DIR, { recursive: true });

  let videoFolders: string[] = [];
  try {
    videoFolders = readdirSync(OUTPUT_DIR).filter(f => statSync(join(OUTPUT_DIR, f)).isDirectory() && f !== "fragments_raw");
    // Also include backward compatibility if "fragments_raw" is directly in output/
    if (statSync(join(OUTPUT_DIR, "fragments_raw")).isDirectory()) {
       videoFolders.push("legacy_video"); 
    }
  } catch (e) {
    //
  }

  const allVideoFolders = readdirSync(OUTPUT_DIR).filter(f => {
    try {
      return statSync(join(OUTPUT_DIR, f, "fragments_raw")).isDirectory();
    } catch { return false; }
  });

  for (const videoName of allVideoFolders) {
    const rawDir = join(OUTPUT_DIR, videoName, "fragments_raw");
    const files = readdirSync(rawDir)
      .filter((f) => f.startsWith("fragment_") && f.endsWith(".json") && !f.includes("_error"))
      .sort();

    if (files.length === 0) continue;

    const allTranscription: any[] = [];
    const allScreens: any[] = [];
    const allActions: any[] = [];
    const allRules: any[] = [];
    const participantsMap = new Map<string, { names: Set<string>; roles: Set<string>; mentions: number }>();

    for (const f of files) {
      const data = JSON.parse(readFileSync(join(rawDir, f), "utf8")) as FragmentData;
      const offset = data._meta?.start_sec ?? 0;

      for (const seg of data.transcription ?? []) {
        allTranscription.push({ ...seg, global_start_sec: offset + seg.start_sec });
      }
      for (const screen of data.screens ?? []) {
        allScreens.push({ ...screen, global_timestamp_sec: offset + screen.timestamp_sec });
      }
      for (const action of data.user_actions ?? []) {
        allActions.push({ ...action, global_timestamp_sec: offset + action.timestamp_sec });
      }
      for (const rule of data.business_rules ?? []) {
        allRules.push({ ...rule });
      }
      for (const hint of data.participants_hints ?? []) {
        const existing = participantsMap.get(hint.speaker_id) ?? { names: new Set(), roles: new Set(), mentions: 0 };
        if (hint.possible_name) existing.names.add(hint.possible_name);
        if (hint.role_hint) existing.roles.add(hint.role_hint);
        existing.mentions++;
        participantsMap.set(hint.speaker_id, existing);
      }
    }

    allTranscription.sort((a, b) => a.global_start_sec - b.global_start_sec);
    allScreens.sort((a, b) => a.global_timestamp_sec - b.global_timestamp_sec);
    allActions.sort((a, b) => a.global_timestamp_sec - b.global_timestamp_sec);

    const participantsList = Array.from(participantsMap.entries()).map(([id, info]) => {
      const name = [...info.names].filter(Boolean).join(" / ") || id;
      return name;
    });

    const mdLines: string[] = [
      `---`,
      `id: ${videoName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      `date: ${new Date().toISOString().split('T')[0]}`,
      `type: video_demo`,
      `tags: [video, transcription, processed]`,
      `participants: [${participantsList.map(p => `"${p}"`).join(", ")}]`,
      `status: processed`,
      `---`,
      ``,
      `# Разбор видео: ${videoName}`,
      ``,
      `## 🎯 TL;DR (Executive Summary)`,
      `Здесь обсуждались процессы и интерфейсы. Разобрано ${allTranscription.length} реплик, найдено ${allScreens.length} экранов и ${allActions.length} UI-действий.`,
      ``,
      `## 📌 Озвученные Бизнес-правила (Business Rules)`,
    ];

    if (allRules.length > 0) {
      for (const rule of allRules) {
        mdLines.push(`- **Правило**: ${rule.rule}`);
        mdLines.push(`  - *Контекст*: ${rule.context}`);
      }
    } else {
      mdLines.push(`- Явные бизнес-правила не были выделены.`);
    }

    mdLines.push(``, `## 🎬 Полный лог (Аудио + Интерфейсы)`, ``);

    // Merge everything sequentially based on timestamp
    // We create a unified timeline of events
    const timeline: { type: string; time: number; content: string }[] = [];
    
    for (const t of allTranscription) {
      timeline.push({ type: 'audio', time: t.global_start_sec, content: `**🗣 ${t.speaker}**: ${t.text}` });
    }
    for (const s of allScreens) {
      const screenPath = getScreenshotPath(videoName, s.global_timestamp_sec);
      timeline.push({ type: 'screen', time: s.global_timestamp_sec, content: `**👁 Экран**: ${s.description} ${s.visible_text ? `\n  - *Текст на экране*: ${s.visible_text}` : ''}\n  - 🖼 *Скриншот*: ![Скриншот](${screenPath})` });
    }
    for (const a of allActions) {
      const screenPath = getScreenshotPath(videoName, a.global_timestamp_sec);
      timeline.push({ type: 'action', time: a.global_timestamp_sec, content: `**🖱 UI-Действие**: ${a.action}\n  - *Результат*: ${a.result}\n  - 🖼 *Скриншот*: ![Скриншот](${screenPath})` });
    }

    timeline.sort((a, b) => a.time - b.time);

    let currentMinute = -1;
    for (const event of timeline) {
      const minute = Math.floor(event.time / 60);
      if (minute > currentMinute) {
        mdLines.push(`\n### [${formatTime(minute * 60)}]`);
        currentMinute = minute;
      }
      mdLines.push(`- [${formatTime(event.time)}] ${event.content}`);
    }

    const outPath = join(KB_DIR, `${videoName}.md`);
    writeFileSync(outPath, mdLines.join("\n"), "utf8");
    console.log(`Created KB document: ${outPath}`);
  }
}

main();
