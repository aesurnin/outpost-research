# Knowledge Base Architecture

## Overview

```
raw_data/           SOURCES (flat, any file type, ASCII names only)
  file1.pdf
  file2.mp4
  meeting-notes.rtf
  ...

kb/                 DESCRIPTIONS (one folder per source)
  {id}/
    content.md      Transcription / text for LLM
    tree.json       PageIndex tree for RAG search
    source.json     Link to raw_data file
    summary.md      Structured summary (optional)
    summary_tree.json  PageIndex tree for summary sections (optional)
```

## Rules

1. **raw_data** — flat folder. No subdirs. Any format: video, PDF, image, RTF, MD, etc.
2. **raw_data** — ASCII filenames only (no Cyrillic). Use `slugify` for transliteration.
3. **kb/{id}/** — one folder per source. `id` = basename of source file (without extension), ASCII.
4. **source.json** — `{ "file": "filename.ext", "path": "raw_data/filename.ext" }`
5. **content.md** — full text for LLM (transcript, summary, etc.). No YAML frontmatter.
6. **tree.json** — `{ "structure": [ { "node_id", "title", "summary", "line_num", "nodes?" } ] }` — PageIndex format.
7. **summary.md** — structured Markdown with `## Section` headers (Company Structure, Processes, etc.). Optional.
8. **summary_tree.json** — `{ "structure": [ { "node_id": "0000-1", "title", "summary", "line_num" } ] }` — parsed from summary.md. Optional.

## Mapping

| raw_data file          | kb folder                    |
|------------------------|------------------------------|
| `2026-02-25-integraciya-june-outpost.md` | `kb/2026-02-25-integraciya-june-outpost/` |
| `impromptu-google-meet-mar-4-2026.mp4`   | `kb/impromptu-google-meet-mar-4-2026/`    |

Same basename (without ext) = same id.

## DB Sync (Outpost)

When syncing to Outpost knowledge_documents:

- **source** → upload to R2, store `source_s3_key`
- **content.md** → `content_md`
- **tree.json** → `tree_index_json`
- **summary.md** → `summary_md` (optional)
- **summary_tree.json** → `summary_tree_json` (optional)

## Migration

To migrate from old structure (kb/meetings, kb/video_demos):

```bash
npx tsx scripts/6_migrate_to_new_architecture.ts
```

Note: Pipeline scripts (1_split_video, 3_merge_results, 5_convert_texts_to_kb) need to be updated to output to the new kb/{id}/ structure.
