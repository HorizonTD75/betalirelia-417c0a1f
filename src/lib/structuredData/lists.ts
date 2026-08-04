/**
 * ItemList content of the listing pages — ORDER MATCHES THE VISIBLE ORDER.
 *
 * Only routes that really display a list of products, categories, services or
 * guides appear here. `name` overrides the ROUTE_META label when the visible
 * card title differs.
 */

export interface ListEntry {
  path: string;
  name: string;
}

export const ITEM_LISTS: Record<string, ListEntry[]> = {
  // Catalogue → categories, in the order of the cards.
  "/catalogue-aides-basse-vision": [
    { path: "/catalogue-aides-basse-vision/lunettes-loupes", name: "Lunettes loupes" },
    { path: "/catalogue-aides-basse-vision/lunettes-intelligentes", name: "Lunettes intelligentes" },
    { path: "/catalogue-aides-basse-vision/loupes-verre", name: "Loupes en verre" },
    { path: "/catalogue-aides-basse-vision/loupes-electroniques", name: "Loupes électroniques" },
    { path: "/catalogue-aides-basse-vision/lampes-basse-vision", name: "Lampes basse vision" },
    { path: "/catalogue-aides-basse-vision/teleagrandisseurs", name: "Téléagrandisseurs" },
    { path: "/catalogue-aides-basse-vision/accessoires", name: "Accessoires utiles" },
  ],

  // Category pages → the products displayed, in card order.
  "/catalogue-aides-basse-vision/lunettes-loupes": [
    { path: "/boutique/clip-lunettes-loupe", name: "Clip lunettes loupe" },
    { path: "/boutique/loupe-max-tv", name: "Lunettes loupe Max-TV" },
    { path: "/boutique/lunettes-loupe-focus", name: "Lunettes loupe FOCUS" },
    { path: "/boutique/lunettes-loupe-frontale-alva", name: "Lunette loupe frontale ALVA" },
  ],
  "/catalogue-aides-basse-vision/lunettes-intelligentes": [
    { path: "/boutique/ray-ban-meta", name: "Ray-Ban Meta" },
  ],
  "/catalogue-aides-basse-vision/loupes-verre": [
    { path: "/boutique/loupe-main-nora", name: "Loupe à main NORA" },
    { path: "/boutique/loupe-dome-eclairante-lina", name: "Loupe dôme éclairante rechargeable LINA" },
  ],
  "/catalogue-aides-basse-vision/loupes-electroniques": [
    { path: "/boutique/loupe-amelie", name: "Loupe électronique Amélie" },
    { path: "/boutique/loupe-electronique-clover-5", name: "Loupe électronique CLOVER 5" },
  ],
  "/catalogue-aides-basse-vision/lampes-basse-vision": [
    { path: "/boutique/lampe-tour-cou-aina", name: "Lampe tour de cou AINA" },
    { path: "/boutique/lampe-loupe-astrid", name: "Lampe loupe ASTRID" },
    { path: "/boutique/lampe-basse-vision-eira", name: "Lampe basse vision EIRA" },
    { path: "/boutique/lampadaire-solveig", name: "Lampadaire SOLVEIG" },
  ],
  "/catalogue-aides-basse-vision/teleagrandisseurs": [
    { path: "/boutique/souris-loupe-electronique-vera", name: "Souris loupe électronique VERA" },
    { path: "/boutique/teleagrandisseur-mezzo-focus", name: "Téléagrandisseur Mezzo Focus" },
  ],
  "/catalogue-aides-basse-vision/accessoires": [
    { path: "/boutique/reveil-gros-chiffres-ivar", name: "Réveil gros chiffres IVAR" },
    { path: "/boutique/horloge-gros-chiffres-frida", name: "Horloge gros chiffres FRIDA" },
    { path: "/boutique/horloge-reveil-gros-chiffres-oskar", name: "Horloge réveil gros chiffres OSKAR" },
  ],

  // Advice hub → the six guides.
  "/aides-lecture-bassevision": [
    { path: "/aides-lecture-bassevision/loupes-verre", name: "Loupes en verre" },
    { path: "/aides-lecture-bassevision/loupes-electroniques", name: "Loupes électroniques" },
    { path: "/aides-lecture-bassevision/lampes", name: "Lampes basse vision" },
    { path: "/aides-lecture-bassevision/tele-agrandisseurs", name: "Télé-agrandisseurs" },
    { path: "/aides-lecture-bassevision/lunettes-loupes", name: "Lunettes loupes" },
    { path: "/aides-lecture-bassevision/lunettes-intelligentes", name: "Lunettes intelligentes" },
  ],

  // Bilans hub → the offers presented on the page.
  "/bilans-bassevision": [
    { path: "/bilans-bassevision/essentiel", name: "Bilan Essentiel" },
    { path: "/bilans-bassevision/expert", name: "Bilan Expert" },
    { path: "/bilans-bassevision/suivi", name: "Pack Suivi" },
    { path: "/bilans-bassevision/visites-domicile", name: "Bilan à domicile" },
  ],

  // Diseases hub → the pathologies listed on the page.
  "/maladies-yeux": [
    { path: "/maladies-yeux/dmla", name: "La DMLA" },
    { path: "/maladies-yeux/glaucome", name: "Le glaucome" },
    { path: "/maladies-yeux/cataracte", name: "La cataracte" },
    { path: "/maladies-yeux/retinopathie-diabetique", name: "La rétinopathie diabétique" },
    { path: "/maladies-yeux/retinite-pigmentaire", name: "La rétinite pigmentaire" },
    { path: "/maladies-yeux/nystagmus", name: "Le nystagmus" },
    { path: "/maladies-yeux/myopie", name: "La myopie" },
    { path: "/maladies-yeux/hypermetropie", name: "L'hypermétropie" },
    { path: "/maladies-yeux/astigmatisme", name: "L'astigmatisme" },
    { path: "/maladies-yeux/presbytie", name: "La presbytie" },
    { path: "/maladies-yeux/maladies-hereditaires", name: "Maladies héréditaires et génétiques" },
  ],
  "/maladies-yeux/maladies-hereditaires": [
    { path: "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire", name: "Rétinite pigmentaire héréditaire" },
    { path: "/maladies-yeux/maladies-hereditaires/maladie-de-leber", name: "La maladie de Leber" },
    { path: "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt", name: "La maladie de Stargardt" },
    { path: "/maladies-yeux/maladies-hereditaires/achromatopsie", name: "L'achromatopsie" },
    { path: "/maladies-yeux/maladies-hereditaires/syndrome-usher", name: "Le syndrome d'Usher" },
    { path: "/maladies-yeux/maladies-hereditaires/aniridie", name: "L'aniridie" },
  ],

  // Financial aid hub → only the child page that really exists.
  "/aides-financieres-basse-vision": [
    {
      path: "/aides-financieres-basse-vision/financer-aide-visuelle",
      name: "Financer une aide visuelle",
    },
  ],
};

export const getItemList = (path: string): ListEntry[] | undefined => ITEM_LISTS[path];
