#!/usr/bin/env npx tsx
/**
 * Merge fragment JSONs into unified transcription, participants map, and screens.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(PROJECT_ROOT, "output");
const FRAGMENTS_RAW_DIR = join(OUTPUT_DIR, "fragments_raw");

interface TranscriptionSegment {
  start_sec: number;
  end_sec: number;
  speaker: string;
  text: string;
}

interface ScreenEntry {
  timestamp_sec: number;
  description: string;
  visible_text?: string;
}

interface ParticipantHint {
  speaker_id: string;
  possible_name?: string;
  role_hint?: string;
}

interface FragmentData {
  transcription?: TranscriptionSegment[];
  screens?: ScreenEntry[];
  participants_hints?: ParticipantHint[];
  _meta?: { fragment_idx: number; start_sec: number; end_sec: number; source: string };
}

function formatTime(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function main(): void {
  const files = readdirSync(FRAGMENTS_RAW_DIR)
    .filter((f) => f.startsWith("fragment_") && f.endsWith(".json") && !f.includes("_error"))
    .sort();

  if (files.length === 0) {
    console.error("Error: No fragment JSONs found in", FRAGMENTS_RAW_DIR);
    console.error("Run 2_process_fragments.ts first.");
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const allTranscription: Array<TranscriptionSegment & { global_start_sec: number; global_end_sec: number }> = [];
  const allScreens: Array<ScreenEntry & { global_timestamp_sec: number }> = [];
  const participantsMap = new Map<
    string,
    { names: Set<string>; roles: Set<string>; mentions: number }
  >();

  for (const f of files) {
    const path = join(FRAGMENTS_RAW_DIR, f);
    let data: FragmentData;
    try {
      data = JSON.parse(readFileSync(path, "utf8")) as FragmentData;
    } catch (e) {
      console.warn(`Skipping ${f}: invalid JSON`);
      continue;
    }

    const offset = data._meta?.start_sec ?? 0;

    for (const seg of data.transcription ?? []) {
      allTranscription.push({
        ...seg,
        global_start_sec: offset + seg.start_sec,
        global_end_sec: offset + seg.end_sec,
      });
    }

    for (const screen of data.screens ?? []) {
      allScreens.push({
        ...screen,
        global_timestamp_sec: offset + screen.timestamp_sec,
      });
    }

    for (const hint of data.participants_hints ?? []) {
      const existing = participantsMap.get(hint.speaker_id) ?? {
        names: new Set<string>(),
        roles: new Set<string>(),
        mentions: 0,
      };
      if (hint.possible_name) existing.names.add(hint.possible_name);
      if (hint.role_hint) existing.roles.add(hint.role_hint);
      existing.mentions++;
      participantsMap.set(hint.speaker_id, existing);
    }
  }

  allTranscription.sort((a, b) => a.global_start_sec - b.global_start_sec);
  allScreens.sort((a, b) => a.global_timestamp_sec - b.global_timestamp_sec);

  // Build 01_transcription_full.md
  const mdLines: string[] = ["# Полная транскрипция встречи\n"];
  for (const seg of allTranscription) {
    mdLines.push(`[${formatTime(seg.global_start_sec)}] ${seg.speaker}: ${seg.text}`);
  }
  mdLines.push("\n## Экраны / дашборды\n");
  for (const s of allScreens) {
    mdLines.push(`[${formatTime(s.global_timestamp_sec)}] ${s.description}`);
    if (s.visible_text) mdLines.push(`   Текст: ${s.visible_text}`);
  }
  writeFileSync(join(OUTPUT_DIR, "01_transcription_full.md"), mdLines.join("\n"), "utf8");

  // Build 01_transcription.json
  const jsonData = {
    transcription: allTranscription.map((s) => ({
      start_sec: s.global_start_sec,
      end_sec: s.global_end_sec,
      speaker: s.speaker,
      text: s.text,
    })),
    screens: allScreens.map((s) => ({
      timestamp_sec: s.global_timestamp_sec,
      description: s.description,
      visible_text: s.visible_text,
    })),
  };
  writeFileSync(
    join(OUTPUT_DIR, "01_transcription.json"),
    JSON.stringify(jsonData, null, 2),
    "utf8"
  );

  // Build 02_participants_map.md
  const participantsLines: string[] = [
    "# Участники встречи\n",
    "| SPEAKER_ID | Имя | Роль | Упоминаний |",
    "|------------|-----|------|------------|",
  ];
  for (const [id, info] of [...participantsMap.entries()].sort()) {
    const name = [...info.names].join(", ") || "—";
    const role = [...info.roles].join(", ") || "—";
    participantsLines.push(`| ${id} | ${name} | ${role} | ${info.mentions} |`);
  }
  writeFileSync(join(OUTPUT_DIR, "02_participants_map.md"), participantsLines.join("\n"), "utf8");

  console.log("Merged results:");
  console.log(`  - 01_transcription_full.md (${allTranscription.length} segments)`);
  console.log(`  - 01_transcription.json`);
  console.log(`  - 02_participants_map.md (${participantsMap.size} participants)`);
  console.log(`Output: ${OUTPUT_DIR}`);
}

main();
