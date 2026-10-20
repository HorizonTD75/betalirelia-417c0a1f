import { parse } from "yaml";

export const CHOICE_HUB = "/choisir-loupe-lecture/";
export interface ChoiceImageZone { id: string; description: string }
export interface ChoiceArticle {
  path: string;
  h1: string;
  title: string;
  description: string;
  canonical: string;
  crumbs: string[];
  body: string;
  zones: ChoiceImageZone[];
}

/** Fail closed: neither frontmatter nor editorial notes can become public content. */
export function parseChoiceArticle(raw: string): ChoiceArticle {
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const publicContent = raw.match(/<!-- DEBUT_CONTENU_PUBLIC -->([\s\S]*?)<!-- FIN_CONTENU_PUBLIC -->/);
  if (!frontmatter || !publicContent) throw new Error("Guide sans métadonnées ou délimiteurs publics");
  const fm = parse(frontmatter[1]) as Record<string, unknown>;
  const required = (key: string) => {
    const value = fm[key];
    if (typeof value !== "string" || !value.trim()) throw new Error(`Métadonnée manquante : ${key}`);
    return value;
  };
  const canonical = required("url_cible");
  const path = new URL(canonical).pathname;
  if (!path.startsWith(CHOICE_HUB) || !path.endsWith("/")) throw new Error("Adresse de guide invalide");
  const zones: ChoiceImageZone[] = [];
  const body = publicContent[1].replace(/<!-- IMAGE_ZONE\s*([\s\S]*?)-->/g, (_match, fields: string) => {
    const id = fields.match(/^id:\s*(.+)$/m)?.[1]?.trim();
    const description = fields.match(/^description_visuelle:\s*(.+)$/m)?.[1]?.trim();
    if (!id || !description) throw new Error("Zone d’image invalide");
    zones.push({ id, description });
    return `\n\n[choice-image:${id}]\n\n`;
  }).replace(/<!--[^]*?-->/g, "").replace(/^\s*# .+\r?\n/, "").trim();
  return { path, canonical, h1: required("h1"), title: required("title_seo"),
    description: required("meta_description"), crumbs: required("fil_ariane").split(" > "), body, zones };
}

const RAW = import.meta.glob("./0[0-6]_*.md", { eager: true, query: "?raw", import: "default" }) as Record<string, string>;
export const CHOICE_ARTICLES = Object.keys(RAW).sort().map((key) => parseChoiceArticle(RAW[key]));
export const getChoiceArticle = (path: string) => CHOICE_ARTICLES.find((article) => article.path === `${path.replace(/\/+$/, "")}/`);