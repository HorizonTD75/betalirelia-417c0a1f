import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { seoPrerender } from "./vite-plugin-seo-prerender";
import { readFileSync, readdirSync } from "node:fs";
import { parse } from "yaml";

import { createHeadMetadata } from "./src/lib/headMetadata";
const routeSource = readFileSync("src/lib/structuredData/routeMeta.ts", "utf8");
const prerenderRoutes = [...routeSource.matchAll(/^  "([^"]+)": (\{.*\}),?$/gm)].map((match) => {
  const r = JSON.parse(match[2]);
  return createHeadMetadata(match[1], {t:r.title,d:r.description,noindex:r.noindex,og:r.ogType,img:r.image,imgAlt:r.imageAlt});
});
const choiceRoutes = readdirSync("src/content/choix-loupes").filter((name) => /^0[0-6]_.*\.md$/.test(name)).sort().map((name) => {
  const raw = readFileSync(`src/content/choix-loupes/${name}`, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`Guide sans métadonnées : ${name}`);
  const fm = parse(match[1]) as Record<string, string>;
  return createHeadMetadata(new URL(fm.url_cible).pathname, {t:fm.title_seo,d:fm.meta_description,noindex:true,og:"website",img:"/og-choisir-loupe.png"});
});

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
