/**
 * Transliterate Cyrillic and special chars to ASCII for file/folder names.
 * Output: lowercase, a-z0-9, hyphens only.
 */
const CYRILLIC_MAP: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  і: "i", ї: "yi", є: "ye", ґ: "g",
};

export function slugify(name: string): string {
  let out = "";
  for (const c of name.toLowerCase()) {
    if (CYRILLIC_MAP[c] !== undefined) {
      out += CYRILLIC_MAP[c];
    } else if (/[a-z0-9]/.test(c)) {
      out += c;
    } else if (c === " " || c === "_" || c === "-" || c === "—" || c === "–") {
      if (out && out[out.length - 1] !== "-") out += "-";
    } else if (c === "+") {
      out += "-plus-";
    } else if (c === "&" || c === "и") {
      out += "-and-";
    } else if (/[.,;:!?'"()]/.test(c)) {
      // skip
    } else {
      out += c;
    }
  }
  return out.replace(/-+/g, "-").replace(/^-|-$/g, "");
}

export function toAsciiFilename(original: string): string {
  const base = original.replace(/\.[^.]+$/, "");
  const ext = original.includes(".") ? original.slice(original.lastIndexOf(".")) : "";
  return slugify(base) + ext.toLowerCase();
}
