import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { seoPrerender } from "./vite-plugin-seo-prerender";

// Per-route HTML prerender — bakes correct <title>, description, canonical,
// og:* and twitter:* into route-specific index.html so social crawlers and
// view-source see the right metadata without waiting for JS.
const prerenderRoutes = [
  {
    path: "/boutique/ray-ban-meta",
    canonical: "/boutique/ray-ban-meta",
    title: "Ray-Ban Meta et basse vision : usages et limites | LirElia",
    description:
      "Découvrez les usages possibles des Ray-Ban Meta pour une personne malvoyante, leurs fonctions actuelles, leurs limites et leur potentiel en basse vision.",
    ogType: "product",
  },
  {
    path: "/aides-lecture-bassevision/lunettes-intelligentes",
    canonical: "/aides-lecture-bassevision/lunettes-intelligentes",
    title: "Lunettes intelligentes pour malvoyants et basse vision | Lirelia",
    description:
      "Découvrez les lunettes intelligentes pour malvoyants : lecture de textes, reconnaissance visuelle et aides à l’autonomie en cas de basse vision.",
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
    seoPrerender(prerenderRoutes),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
}));
