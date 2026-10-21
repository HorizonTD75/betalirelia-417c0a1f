import { describe, it, expect } from "vitest";
import { CHOICE_ARTICLES, parseChoiceArticle, getChoiceArticle } from "@/content/choix-loupes/articles";
import { getPageGraph } from "@/lib/structuredData/registry";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";
import { ACTIVE_PHOTO_ZONES, defaultChoiceMode, isActivePhotoZone, canPreparePhotos } from "@/content/choix-loupes/editorialMode";
import { PHOTO_REGISTRY, getPhotoBrief } from "@/content/choix-loupes/photoRegistry";

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
describe("Choice-loupe V5.4 photographic plan", () => {
  it.each([
    [0, ["pm-01", "pm-03"]], [1, ["pa-01", "pa-02"]], [2, ["oe-01", "oe-02"]],
    [3, ["ls-01", "ls-02"]], [4, ["ml-01", "ml-02"]], [5, ["el-02", "el-03"]], [6, ["te-01", "te-03"]],
  ])("keeps only the revised active zones for guide %i", (index, expected) => {
    expect(CHOICE_ARTICLES[Number(index)].zones.filter((zone) => isActivePhotoZone(zone.id)).map((zone) => zone.id)).toEqual(expected);
    expect(ACTIVE_PHOTO_ZONES[Number(index)]).toEqual(expected);
  });
  it("keeps distance-of-work photography in reserve", () => {
    expect(isActivePhotoZone("ls-03")).toBe(false);
  });
  it("defaults to photo preparation only in preview", () => {
    expect(defaultChoiceMode(true)).toBe("photos");
    expect(defaultChoiceMode(false)).toBe("reading");
  });
  it("excludes photo preparation from production", () => {
    expect(canPreparePhotos(false)).toBe(false);
    expect(canPreparePhotos(true)).toBe(true);
  });
});

describe("V5.5 exact photographic requirements", () => {
  it("registers exactly the fourteen prescribed ids", () => {
    expect(PHOTO_REGISTRY.map((entry) => entry.id)).toEqual(["pm-01", "pm-03", "pa-01", "pa-02", "oe-01", "oe-02", "ls-01", "ls-02", "ml-01", "ml-02", "el-02", "el-03", "te-01", "te-03"]);
  });
  it("keeps the sewing scene prescribed for ml-01", () => {
    expect(getPhotoBrief("ml-01")?.scene).toBe("des mains cousent ou brodent sous une lampe loupe allumée ; les deux mains sont effectivement disponibles, le support tient la loupe ; position du tissu et de la lentille réaliste.");
  });
  it("never assigns unverified bicolour modes to Amélie", () => {
    expect(getPhotoBrief("oe-02")?.produits).toContain("Ne pas utiliser Amélie pour inventer un affichage inversé/bicolore.");
    expect(getPhotoBrief("oe-02")?.statut).toBe("bloc gris à réaliser");
  });
  it("keeps comparisons as separately photographed views", () => {
    expect(getPhotoBrief("pa-02")?.vues).toBe(3);
    expect(getPhotoBrief("oe-01")?.vues).toBe(2);
    expect(getPhotoBrief("oe-02")?.vues).toBe(3);
    expect(getPhotoBrief("ls-02")?.vues).toBe(2);
  });
});
