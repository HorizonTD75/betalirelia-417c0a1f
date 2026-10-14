/**
 * Cocon « Aides financières » — the six V3.1 Markdown articles are the ONLY
 * source of the public content of these pages. The YAML frontmatter is an
 * SEO specification: it is parsed here and never rendered as visible text.
 */
import { parse } from "yaml";

const RAW = import.meta.glob("./*.md", { eager: true, query: "?raw", import: "default" }) as Record<
  string,
  string
>;

export interface CoconCrumb {
  label: string;
  url: string;
}

export interface CoconArticle {
  /** Route without trailing slash, e.g. "/aides-financieres-basse-vision". */
  path: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  breadcrumb: CoconCrumb[];
  /** Markdown body WITHOUT the frontmatter and WITHOUT the H1 line. */
  body: string;
}

const stripSlash = (p: string) => p.replace(/\/+$/, "") || "/";

const parseArticle = (raw: string): CoconArticle => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Article sans frontmatter");
  const fm = parse(match[1]) as Record<string, unknown>;
  const body = match[2].replace(/^\s*#\s+.+\r?\n/, "").trim();
  return {
    path: stripSlash(String(fm.slug)),
    slug: String(fm.slug),
    title: String(fm.title),
    description: String(fm.meta_description),
    h1: String(fm.h1),
    breadcrumb: (fm.breadcrumb as CoconCrumb[]) ?? [],
    body,
  };
};

export const COCON_ARTICLES: CoconArticle[] = Object.keys(RAW)
  .sort()
  .map((k) => parseArticle(RAW[k]));

export const getCoconArticle = (path: string): CoconArticle | undefined =>
  COCON_ARTICLES.find((a) => a.path === stripSlash(path));

export const COCON_HUB_PATH = "/aides-financieres-basse-vision";
