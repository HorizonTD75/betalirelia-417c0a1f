/// <reference lib="dom" />
export interface HeadMetadata {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogType: string;
  ogImage?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export interface StoredMetadata {
  t: string;
  d: string;
  short?: string;
  og?: string;
  img?: string;
  imgAlt?: string;
  noindex?: boolean;
}

export const HEAD_BASE_URL = "https://lirelia.fr";
export function createHeadMetadata(path: string, value: StoredMetadata): HeadMetadata {
  const normalized = path.replace(/\/+$/, "") || "/";
  const clean = normalized === "/" ? "/" : `${normalized}/`;
  const image = value.img ?? (normalized.startsWith("/choisir-loupe-lecture") ? "/og-choisir-loupe.png" : "/og-image.png");
  return {
    path: clean, title: value.t, description: value.d,
    canonical: HEAD_BASE_URL + clean,
    ogType: value.og ?? "website", noindex: value.noindex === true,
    ogImage: image.startsWith("https://") ? image : HEAD_BASE_URL + image,
    imageAlt: value.imgAlt ?? (normalized.startsWith("/choisir-loupe-lecture")
      ? "LIRELIA — Quelle loupe de lecture choisir ? Photos de NORA et Amélie, présentées séparément"
      : "LIRELIA — Basse vision, bilans et aides à la lecture"),
  };
}

/** Self-contained: also serialized by the Vite plugin for the first document load. */
export function applyHeadMetadata(meta: HeadMetadata) {
  const head = document.head;
  const single = (selector: string, tag: string, attributes: Record<string, string>) => {
    const existing = Array.from(head.querySelectorAll(selector));
    const element = existing.shift() ?? document.createElement(tag);
    existing.forEach((duplicate) => duplicate.remove());
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
    if (!element.parentNode) head.appendChild(element);
    return element;
  };
  single("title", "title", {}).textContent = meta.title;
  single('link[rel="canonical"]', "link", { rel: "canonical", href: meta.canonical });
  const tags: [string, string, string][] = [
    ["name", "description", meta.description],
    ["name", "robots", meta.noindex ? "noindex, follow" : "index, follow"],
    ["name", "googlebot", meta.noindex ? "noindex, follow" : "index, follow"],
    ["name", "author", "LIRELIA"],
    ["property", "og:title", meta.title], ["property", "og:description", meta.description],
    ["property", "og:url", meta.canonical], ["property", "og:type", meta.ogType],
    ["property", "og:site_name", "LIRELIA"], ["property", "og:locale", "fr_FR"],
    ["name", "twitter:card", meta.ogImage ? "summary_large_image" : "summary"],
    ["name", "twitter:title", meta.title], ["name", "twitter:description", meta.description],
  ];
  head.querySelectorAll('meta[name="twitter:site"],meta[property="og:image"],meta[property="og:image:alt"],meta[name="twitter:image"],meta[name="twitter:image:alt"]').forEach((tag) => tag.remove());
  if (meta.ogImage) {
    tags.push(["property", "og:image", meta.ogImage], ["name", "twitter:image", meta.ogImage]);
    if (meta.imageAlt) tags.push(["property", "og:image:alt", meta.imageAlt], ["name", "twitter:image:alt", meta.imageAlt]);
  }
  tags.forEach(([attribute, key, value]) => single(`meta[${attribute}="${key}"]`, "meta", { [attribute]: key, content: value }));
  head.querySelectorAll('link[hreflang]').forEach((tag) => tag.setAttribute("href", meta.canonical));
}