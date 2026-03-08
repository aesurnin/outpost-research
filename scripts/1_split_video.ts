#!/usr/bin/env npx tsx
/**
 * Split video into 5-minute fragments for Gemini processing.
 * Uses ffmpeg with -c copy for fast splitting without re-encoding.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const RAW_DATA = join(PROJECT_ROOT, "raw_data");
const FRAGMENTS_DIR = join(PROJECT_ROOT, "fragments");

const VIDEO_NAME = "Impromptu Google Meet Meeting - Mar 5 2026.mp4";
const SEGMENT_DURATION = 300; // 5 minutes

function main(): void {
  const videoPath = join(RAW_DATA, VIDEO_NAME);
  try {
    statSync(videoPath);
  } catch {
    console.error(`Error: Video not found at ${videoPath}`);
    process.exit(1);
  }

  mkdirSync(FRAGMENTS_DIR, { recursive: true });
  const outputPattern = join(FRAGMENTS_DIR, "fragment_%03d.mp4");

  const args = [
    "-y",
    "-i",
    videoPath,
    "-c",
    "copy",
    "-map",
    "0",
    "-segment_time",
    String(SEGMENT_DURATION),
    "-reset_timestamps",
    "1",
    "-f",
    "segment",
    outputPattern,
  ];

  console.log(`Splitting ${videoPath} into ${SEGMENT_DURATION}s fragments...`);
  const result = spawnSync("ffmpeg", args, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(1);
  }

  const files = readdirSync(FRAGMENTS_DIR)
    .filter((f) => f.startsWith("fragment_") && f.endsWith(".mp4"))
    .sort();
  console.log(`Created ${files.length} fragments in ${FRAGMENTS_DIR}`);
  for (const f of files) {
    const sizeMb = statSync(join(FRAGMENTS_DIR, f)).size / (1024 * 1024);
    console.log(`  ${f}: ${sizeMb.toFixed(1)} MB`);
  }
}

main();
