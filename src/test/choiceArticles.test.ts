import { describe, it, expect } from "vitest";
import { CHOICE_ARTICLES, parseChoiceArticle, getChoiceArticle } from "@/content/choix-loupes/articles";
import { getPageGraph } from "@/lib/structuredData/registry";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";

describe("Choice-loupe V5.1 publication boundaries", () => {
  it("registers only the seven validated paths", () => {
    expect(CHOICE_ARTICLES.map((a) => a.path)).toEqual([
      "/choisir-loupe-lecture/", "/choisir-loupe-lecture/personne-agee/",
      "/choisir-loupe-lecture/loupe-optique-ou-electronique/", "/choisir-loupe-lecture/loupe-sur-lunettes/",
      "/choisir-loupe-lecture/lire-mains-libres/", "/choisir-loupe-lecture/loupe-eclairante-ou-lampe/",
      "/choisir-loupe-lecture/loupe-portable-ou-grand-ecran/",
    ]);
    expect(getChoiceArticle("/choisir-loupe-lecture/inconnu/")).toBeUndefined();
  });
  it("never exposes editorial notes outside the public delimiters", () => {
    const raw = `---\nh1: Titre\nurl_cible: https://lirelia.fr/choisir-loupe-lecture/\ntitle_seo: Titre SEO\nmeta_description: Description\nfil_ariane: Accueil > Guide\n---\nSecret avant\n<!-- DEBUT_CONTENU_PUBLIC -->\n# Titre\nTexte autorisé\n<!-- FIN_CONTENU_PUBLIC -->\nSecret après`;
    expect(parseChoiceArticle(raw).body).toBe("Texte autorisé");
  });
  it("rejects an article without a complete public boundary", () => {
    expect(() => parseChoiceArticle("---\nh1: Titre\n---\nTexte sans bornes")).toThrow();
  });
  it("keeps all seven routes noindex and out of structured-data publication", () => {
    for (const article of CHOICE_ARTICLES) {
      expect(ROUTE_META[article.path.replace(/\/$/, "")]?.noindex).toBe(true);
      expect(getPageGraph(article.path)).toBeNull();
    }
  });
});