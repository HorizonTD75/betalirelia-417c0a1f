import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { seoPrerender } from "./vite-plugin-seo-prerender";

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
    seoPrerender([
      {
        path: "/maladies-yeux/glaucome",
        title: "Le Glaucome – Comprendre, Dépister et Agir | LirElia",
        description: "Tout savoir sur le glaucome : formes, symptômes, dépistage, traitements et conseils pour vivre avec cette maladie des yeux.",
        canonical: "/maladies-yeux/glaucome",
        ogType: "article",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Le Glaucome",
          "description": "Tout savoir sur le glaucome : formes, symptômes, dépistage, traitements et conseils pour vivre avec cette maladie des yeux.",
          "url": "https://betalirelia.lovable.app/maladies-yeux/glaucome",
          "about": {
            "@type": "MedicalCondition",
            "name": "Glaucome",
            "description": "Maladie de l'œil caractérisée par une atteinte du nerf optique, souvent liée à une pression intraoculaire élevée."
          }
        }
      },
    ]),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
}));
