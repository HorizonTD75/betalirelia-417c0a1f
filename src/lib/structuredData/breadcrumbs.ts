/**
 * VISIBLE breadcrumb trails — mirror of the `<nav aria-label="Fil d'Ariane">`
 * blocks rendered by the pages.
 *
 * RULE (SEO): a BreadcrumbList is emitted ONLY for routes listed here, with
 * exactly the same labels, order and canonical URLs as the visible trail.
 * Never invent a JSON-LD-only breadcrumb.
 */

import { BreadcrumbItem } from "./entities";

const HOME: BreadcrumbItem = { name: "Accueil", path: "/" };
const READING: BreadcrumbItem = { name: "Aides à la lecture", path: "/aides-lecture-bassevision" };
const DISEASES: BreadcrumbItem = { name: "Maladies des yeux", path: "/maladies-yeux" };
const HEREDITARY: BreadcrumbItem = {
  name: "Maladies héréditaires",
  path: "/maladies-yeux/maladies-hereditaires",
};
const CATALOGUE_SHORT: BreadcrumbItem = { name: "Catalogue", path: "/catalogue-aides-basse-vision" };
const CATALOGUE_LONG: BreadcrumbItem = {
  name: "Catalogue des aides basse vision",
  path: "/catalogue-aides-basse-vision",
};
const LIVING: BreadcrumbItem = { name: "Vivre avec la basse vision", path: "/vivre-basse-vision" };
const FINANCIAL: BreadcrumbItem = {
  name: "Aides financières",
  path: "/aides-financieres-basse-vision",
};

const guide = (name: string, slug: string): BreadcrumbItem => ({
  name,
  path: `/aides-lecture-bassevision/${slug}`,
});

const LAMPS = guide("Lampes basse vision", "lampes");
const E_MAGNIFIERS = guide("Loupes électroniques", "loupes-electroniques");
const GLASS_MAGNIFIERS = guide("Loupes en verre", "loupes-verre");
const MAGNIFYING_GLASSES = guide("Lunettes loupes", "lunettes-loupes");
const DESKTOP_MAGNIFIERS = guide("Télé-agrandisseurs", "tele-agrandisseurs");

const leaf = (parents: BreadcrumbItem[], name: string, path: string): BreadcrumbItem[] => [
  ...parents,
  { name, path },
];

export const VISIBLE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  // ---- Catalogue ---------------------------------------------------------
  "/catalogue-aides-basse-vision": [HOME, { name: "Catalogue", path: "/catalogue-aides-basse-vision" }],
  "/catalogue-aides-basse-vision/loupes-verre": leaf([HOME, CATALOGUE_LONG], "Loupes en verre", "/catalogue-aides-basse-vision/loupes-verre"),
  "/catalogue-aides-basse-vision/loupes-electroniques": leaf([HOME, CATALOGUE_LONG], "Loupes électroniques", "/catalogue-aides-basse-vision/loupes-electroniques"),
  "/catalogue-aides-basse-vision/lampes-basse-vision": leaf([HOME, CATALOGUE_LONG], "Lampes basse vision", "/catalogue-aides-basse-vision/lampes-basse-vision"),
  "/catalogue-aides-basse-vision/teleagrandisseurs": leaf([HOME, CATALOGUE_LONG], "Téléagrandisseurs", "/catalogue-aides-basse-vision/teleagrandisseurs"),
  "/catalogue-aides-basse-vision/lunettes-loupes": leaf([HOME, CATALOGUE_LONG], "Lunettes loupes", "/catalogue-aides-basse-vision/lunettes-loupes"),
  "/catalogue-aides-basse-vision/lunettes-intelligentes": leaf([HOME, CATALOGUE_LONG], "Lunettes intelligentes", "/catalogue-aides-basse-vision/lunettes-intelligentes"),
  "/catalogue-aides-basse-vision/accessoires": leaf([HOME, CATALOGUE_LONG], "Accessoires utiles", "/catalogue-aides-basse-vision/accessoires"),

  // ---- Produits ----------------------------------------------------------
  "/boutique/clip-lunettes-loupe": leaf([HOME, READING, MAGNIFYING_GLASSES], "Clip lunettes loupe", "/boutique/clip-lunettes-loupe"),
  "/boutique/loupe-max-tv": leaf([HOME, READING, MAGNIFYING_GLASSES], "Lunettes loupe Max-TV", "/boutique/loupe-max-tv"),
  "/boutique/lunettes-loupe-focus": leaf([HOME, READING, MAGNIFYING_GLASSES], "Lunettes Loupe FOCUS", "/boutique/lunettes-loupe-focus"),
  "/boutique/lunettes-loupe-frontale-alva": leaf([HOME, READING, MAGNIFYING_GLASSES], "Lunette Loupe Frontale ALVA", "/boutique/lunettes-loupe-frontale-alva"),
  "/boutique/lampadaire-solveig": leaf([HOME, READING, LAMPS], "Lampadaire SOLVEIG", "/boutique/lampadaire-solveig"),
  "/boutique/lampe-tour-cou-aina": leaf([HOME, READING, LAMPS], "Lampe tour de cou AINA", "/boutique/lampe-tour-cou-aina"),
  "/boutique/lampe-loupe-astrid": leaf([HOME, READING, LAMPS], "Lampe loupe ASTRID", "/boutique/lampe-loupe-astrid"),
  "/boutique/lampe-basse-vision-eira": leaf([HOME, READING, LAMPS], "Lampe basse vision EIRA", "/boutique/lampe-basse-vision-eira"),
  "/boutique/loupe-amelie": leaf([HOME, READING, E_MAGNIFIERS], "Loupe Amélie", "/boutique/loupe-amelie"),
  "/boutique/loupe-electronique-clover-5": leaf([HOME, READING, E_MAGNIFIERS], "Loupe électronique CLOVER 5", "/boutique/loupe-electronique-clover-5"),
  "/boutique/loupe-main-nora": leaf([HOME, READING, GLASS_MAGNIFIERS], "Loupe à main NORA", "/boutique/loupe-main-nora"),
  "/boutique/loupe-dome-eclairante-lina": leaf([HOME, READING, GLASS_MAGNIFIERS], "Loupe dôme LINA", "/boutique/loupe-dome-eclairante-lina"),
  "/boutique/souris-loupe-electronique-vera": leaf([HOME, READING, DESKTOP_MAGNIFIERS], "Souris loupe électronique VERA", "/boutique/souris-loupe-electronique-vera"),
  "/boutique/teleagrandisseur-mezzo-focus": leaf([HOME, READING, DESKTOP_MAGNIFIERS], "Téléagrandisseur Mezzo Focus", "/boutique/teleagrandisseur-mezzo-focus"),
  "/boutique/horloge-gros-chiffres-frida": leaf([HOME, CATALOGUE_SHORT], "Horloge gros chiffres FRIDA", "/boutique/horloge-gros-chiffres-frida"),
  "/boutique/horloge-reveil-gros-chiffres-oskar": leaf([HOME, CATALOGUE_SHORT], "Horloge réveil gros chiffres OSKAR", "/boutique/horloge-reveil-gros-chiffres-oskar"),
  "/boutique/reveil-gros-chiffres-ivar": leaf([HOME, CATALOGUE_SHORT], "Réveil gros chiffres IVAR", "/boutique/reveil-gros-chiffres-ivar"),

  // ---- Maladies ----------------------------------------------------------
  "/maladies-yeux/dmla": leaf([HOME, DISEASES], "La DMLA", "/maladies-yeux/dmla"),
  "/maladies-yeux/glaucome": leaf([HOME, DISEASES], "Le Glaucome", "/maladies-yeux/glaucome"),
  "/maladies-yeux/cataracte": leaf([HOME, DISEASES], "La Cataracte", "/maladies-yeux/cataracte"),
  "/maladies-yeux/nystagmus": leaf([HOME, DISEASES], "Le Nystagmus", "/maladies-yeux/nystagmus"),
  "/maladies-yeux/myopie": leaf([HOME, DISEASES], "La Myopie", "/maladies-yeux/myopie"),
  "/maladies-yeux/hypermetropie": leaf([HOME, DISEASES], "L'Hypermétropie", "/maladies-yeux/hypermetropie"),
  "/maladies-yeux/astigmatisme": leaf([HOME, DISEASES], "L'Astigmatisme", "/maladies-yeux/astigmatisme"),
  "/maladies-yeux/presbytie": leaf([HOME, DISEASES], "La Presbytie", "/maladies-yeux/presbytie"),
  "/maladies-yeux/retinite-pigmentaire": leaf([HOME, DISEASES], "La Rétinite Pigmentaire", "/maladies-yeux/retinite-pigmentaire"),
  "/maladies-yeux/retinopathie-diabetique": leaf([HOME, DISEASES], "La Rétinopathie Diabétique", "/maladies-yeux/retinopathie-diabetique"),
  "/maladies-yeux/maladies-hereditaires": leaf([HOME, DISEASES], "Maladies héréditaires et génétiques", "/maladies-yeux/maladies-hereditaires"),
  "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire": leaf([HOME, DISEASES, HEREDITARY], "Rétinite pigmentaire héréditaire : génétique et transmission", "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire"),
  "/maladies-yeux/maladies-hereditaires/maladie-de-leber": leaf([HOME, DISEASES, HEREDITARY], "La maladie de Leber", "/maladies-yeux/maladies-hereditaires/maladie-de-leber"),
  "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt": leaf([HOME, DISEASES, HEREDITARY], "La maladie de Stargardt", "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt"),
  "/maladies-yeux/maladies-hereditaires/achromatopsie": leaf([HOME, DISEASES, HEREDITARY], "L'achromatopsie", "/maladies-yeux/maladies-hereditaires/achromatopsie"),
  "/maladies-yeux/maladies-hereditaires/syndrome-usher": leaf([HOME, DISEASES, HEREDITARY], "Le syndrome d'Usher", "/maladies-yeux/maladies-hereditaires/syndrome-usher"),
  "/maladies-yeux/maladies-hereditaires/aniridie": leaf([HOME, DISEASES, HEREDITARY], "L'aniridie", "/maladies-yeux/maladies-hereditaires/aniridie"),

  // ---- Aides financières -------------------------------------------------
  "/aides-financieres-basse-vision": leaf([HOME, LIVING], "Aides financières", "/aides-financieres-basse-vision"),
  "/aides-financieres-basse-vision/financer-aide-visuelle": leaf([HOME, LIVING, FINANCIAL], "Financer une aide visuelle", "/aides-financieres-basse-vision/financer-aide-visuelle"),
};

export const getVisibleBreadcrumb = (path: string): BreadcrumbItem[] | undefined =>
  VISIBLE_BREADCRUMBS[path];
