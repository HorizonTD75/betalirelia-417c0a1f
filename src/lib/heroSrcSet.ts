// Auto-build responsive srcSets for hero images.
// Variants are generated in src/assets/responsive/ as <base>-<width>.webp
const modules = import.meta.glob("@/assets/responsive/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Variant = { url: string; width: number };
const grouped: Record<string, Variant[]> = {};

for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  const m = file.match(/^(.+)-(\d+)\.webp$/);
  if (!m) continue;
  const [, base, w] = m;
  (grouped[base] ||= []).push({ url, width: Number(w) });
}
for (const k of Object.keys(grouped)) grouped[k].sort((a, b) => a.width - b.width);

/**
 * Returns { srcSet, src } for a hero image identified by its source basename
 * (e.g. "hero-basse-vision-accueil.jpg"). Returns null if no variants exist.
 */
export function getHeroSrcSet(input: string): { srcSet: string; src: string; widths: number[] } | null {
  const file = input.split("/").pop() ?? input;
  const cleaned = file.replace(/-[A-Za-z0-9_-]{8,}\.(jpg|jpeg|png|webp)$/i, ".$1");
  const base = cleaned.replace(/\.[^.]+$/, "");
  const variants = grouped[base];
  if (!variants || variants.length === 0) return null;
  const srcSet = variants.map((v) => `${v.url} ${v.width}w`).join(", ");
  const largest = variants[variants.length - 1];
  return { srcSet, src: largest.url, widths: variants.map((v) => v.width) };
}
