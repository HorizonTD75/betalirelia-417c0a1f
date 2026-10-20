import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { seoPrerender } from "./vite-plugin-seo-prerender";
import { readFileSync, readdirSync } from "node:fs";
import { parse } from "yaml";

const choiceRoutes = readdirSync("src/content/choix-loupes").filter((name) => /^0[0-6]_.*\.md$/.test(name)).sort().map((name) => {
  const raw = readFileSync(`src/content/choix-loupes/${name}`, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`Guide sans métadonnées : ${name}`);
  const fm = parse(match[1]) as Record<string, string>;
  const canonical = new URL(fm.url_cible).pathname;
  return { path: canonical.replace(/\/$/, ""), canonical, title: fm.title_seo, description: fm.meta_description, ogType: "website", noindex: true, noImage: true };
});

// Per-route HTML prerender — bakes correct <title>, description, canonical,
// og:* and twitter:* into route-specific index.html so social crawlers and
// view-source see the right metadata without waiting for JS.
const prerenderRoutes = [
  {
    path: "/boutique/ray-ban-meta",
    canonical: "/boutique/ray-ban-meta/",
    title: "Ray-Ban Meta et basse vision : usages et limites | LirElia",
    description:
      "Découvrez les usages possibles des Ray-Ban Meta pour une personne malvoyante, leurs fonctions actuelles, leurs limites et leur potentiel en basse vision.",
    ogType: "product",
  },
  {
    path: "/aides-lecture-bassevision/lunettes-intelligentes",
    canonical: "/aides-lecture-bassevision/lunettes-intelligentes/",
    title: "Lunettes intelligentes et basse vision : guide | LirElia",
    description:
      "Comment les lunettes intelligentes peuvent-elles aider une personne malvoyante ? Découvrez leurs usages, leurs limites et les différentes familles de solutions.",
    ogType: "article",
  },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    seoPrerender([...prerenderRoutes, ...choiceRoutes]),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
}));
