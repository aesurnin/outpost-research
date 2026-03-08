# Outpost Research — Video Extraction Pipeline

Извлечение информации из записей встреч Google Meet через Gemini 3 Flash.

## Требования

- Node.js 20+
- ffmpeg
- `GOOGLE_API` в `.env`

## Установка

```bash
npm install
```

## Использование

```bash
# 1. Нарезка видео на 5-минутные фрагменты
npm run split

# 2. Обработка каждого фрагмента через Gemini 3 Flash
npm run process

# 3. Сборка транскрипции и карты участников
npm run merge

# 4. Генерация документа по sales-департаменту
npm run schema

# Или весь пайплайн сразу
npm run pipeline
```

## Выходные файлы

- `output/01_transcription_full.md` — транскрипция + экраны с таймингом
- `output/01_transcription.json` — структурированные сегменты
- `output/02_participants_map.md` — кто есть кто
- `output/03_sales_department_schema.md` — схема sales-департамента
