#!/usr/bin/env npx tsx
/**
 * Split all videos in raw_data into 5-minute fragments.
 * Also extracts screenshots every 15 seconds to create a visual library.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const RAW_DATA = join(PROJECT_ROOT, "raw_data");
const FRAGMENTS_DIR = join(PROJECT_ROOT, "fragments");

const SEGMENT_DURATION = 300; // 5 minutes

function main(): void {
  let files: string[] = [];
  try {
    files = readdirSync(RAW_DATA).filter((f) => f.endsWith(".mp4") || f.endsWith(".mov"));
  } catch (e) {
    console.error("Error reading raw_data directory");
    return;
  }

  if (files.length === 0) {
    console.log("No videos found in raw_data.");
    return;
  }

  for (const file of files) {
    const videoPath = join(RAW_DATA, file);
    const videoBasename = basename(file, extname(file));
    const outputDir = join(FRAGMENTS_DIR, videoBasename);
    const screenshotsDir = join(outputDir, "screenshots");

    // Skip if already processed
    try {
      if (statSync(outputDir).isDirectory() && readdirSync(outputDir).some(f => f.startsWith("fragment_"))) {
        console.log(`Skipping ${file}, fragments already exist.`);
        continue;
      }
    } catch (e) {
      // Directory doesn't exist, proceed
    }

    mkdirSync(outputDir, { recursive: true });
    mkdirSync(screenshotsDir, { recursive: true });

    const outputPattern = join(outputDir, "fragment_%03d.mp4");
    const screenshotPattern = join(screenshotsDir, "screen_%04d.jpg");

    console.log(`\n=== Processing ${file} ===`);
    
    // 1. Splitting video
    const splitArgs = [
      "-y",
      "-i", videoPath,
      "-c", "copy",
      "-map", "0",
      "-segment_time", String(SEGMENT_DURATION),
      "-reset_timestamps", "1",
      "-f", "segment",
      outputPattern,
    ];
    console.log(`[1/2] Splitting into ${SEGMENT_DURATION}s fragments...`);
    const splitResult = spawnSync("ffmpeg", splitArgs, { stdio: "inherit" });
    if (splitResult.status !== 0) {
      console.error(`Failed to split ${file}`);
      continue;
    }

    // 2. Extracting screenshots (1 frame every 15 seconds)
    const fps = 1 / 15;
    const screenArgs = [
      "-y",
      "-i", videoPath,
      "-vf", `fps=${fps}`,
      "-q:v", "2", // high quality jpeg
      screenshotPattern
    ];
    console.log(`[2/2] Extracting screenshots (1 frame every 15s)...`);
    spawnSync("ffmpeg", screenArgs, { stdio: "inherit" });
  }
  console.log("\nDone all videos.");
}

main();
