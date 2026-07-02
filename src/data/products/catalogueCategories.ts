/**
 * Données partagées pour les pages filles commerciales du catalogue.
 *
 * Source unique consommée par les six pages catégorie sous
 * /catalogue-aides-basse-vision/. Les prix, images et URL produit
 * doivent rester synchronisés avec les fiches produit.
 *
 * Les loupes en verre conservent leur source dédiée
 * (src/data/products/loupesVerre.ts) et ne sont pas dupliquées ici.
 */

// Images existantes du projet (chemins déjà utilisés ailleurs)
import loupeAmelieImg from "@/assets/products/loupe-electronique-amelie.jpg";
import clover5Img from "@/assets/products/loupe-electronique-clover-5-poignee.jpg";
import lampeAinaImg from "@/assets/products/lampe-tour-cou-aina-noir-blanche.jpg";
import lampeAstridImg from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import lampeEiraImg from "@/assets/products/lampe-eira-blanche-livre.jpg";
import lampadaireSolveigImg from "@/assets/products/lampadaire-solveig-noir.jpg";
import sourisVeraImg from "@/assets/products/souris-loupe-electronique-vera-journal.jpg";
import mezzoFocusImg from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";
import clipImg from "@/assets/products/clip-lunette-loupe.jpg";
import lunettesMaxTv from "@/assets/products/lunettes-loupe-max-tv-grossissement-basse-vision.jpg";
import lunettesFocusImg from "@/assets/products/lunettes-loupes-focus-dmla.jpg";
import alvaImg from "@/assets/products/lunette-loupe-frontale-alva-sacoche.jpeg";
import rayBanMetaImg from "@/assets/products/ray-ban-meta-marron.jpg";
import oskarImg from "@/assets/products/horloge-reveil-gros-chiffres-oskar.jpg";
import ivarImg from "@/assets/products/reveil-gros-chiffres-blanc-ivar.jpg";
import fridaImg from "@/assets/products/horloge-reveil-pour-malvoyant-frida.jpg";

export type CatalogueProduct = {
  name: string;
  image: string;
  alt: string;
  shortDescription: string;
  keyFeatures: string[];
  /** Chaîne formatée affichée (vide si non vendu). */
  price?: string;
  /** Statut commercial (ex. « Produit en évaluation »). */
  status?: string;
  productUrl: string;
  /** Libellé du bouton principal de la carte produit. */
  ctaLabel: string;
};

// === LOUPES ÉLECTRONIQUES =====================================================

export const LOUPE_AMELIE: CatalogueProduct = {
  name: "Loupe électronique Amélie",
  image: loupeAmelieImg,
  alt: "Loupe électronique Amélie tenue au-dessus d’une carte, avec le texte agrandi sur son écran.",
  shortDescription:
    "Une loupe simple à prendre en main : écran couleur de 11 cm et trois grossissements accessibles d’un seul bouton.",
  keyFeatures: [
    "Trois grossissements : 3×, 6× et 9×",
    "Écran LCD couleur de 11 cm",
    "Couleurs réelles ou contrastes inversés",
    "Éclairage LED et batterie rechargeable",
  ],
  price: "188,00 €",
  productUrl: "/boutique/loupe-amelie",
  ctaLabel: "Découvrir la loupe Amélie",
};

export const LOUPE_CLOVER5: CatalogueProduct = {
  name: "Loupe électronique CLOVER 5",
  image: clover5Img,
  alt: "Loupe électronique CLOVER 5 tenue à la main et grossissant le texte d’un magazine.",
  shortDescription:
    "Une loupe transportable avec écran 5 pouces, grossissement de 4× à 20× et plusieurs modes de forts contrastes.",
  keyFeatures: [
    "Grossissement réglable de 4× à 20×",
    "Écran haute résolution de 5 pouces (12,7 cm)",
    "Couleurs naturelles et modes de forts contrastes",
    "Poignée repliable, ~4 h d’autonomie, housse incluse",
  ],
  price: "539,00 €",
  productUrl: "/boutique/loupe-electronique-clover-5",
  ctaLabel: "Découvrir la CLOVER 5",
};

// === LAMPES ===================================================================

export const LAMPE_AINA: CatalogueProduct = {
  name: "Lampe tour de cou AINA",
  image: lampeAinaImg,
  alt: "Lampe tour de cou AINA présentée en blanc et en noir pour éclairer un livre les mains libres.",
  shortDescription:
    "Une lampe à porter autour du cou ou à poser, avec deux bras flexibles pour orienter la lumière.",
  keyFeatures: [
    "Éclairage diffus ou spot concentré",
    "Trois températures de couleur",
    "Mains libres, autour du cou ou posée",
    "Batterie USB, jusqu’à 10 h d’autonomie",
  ],
  price: "49,20 €",
  productUrl: "/boutique/lampe-tour-cou-aina",
  ctaLabel: "Découvrir la lampe AINA",
};

export const LAMPE_ASTRID: CatalogueProduct = {
  name: "Lampe loupe ASTRID",
  image: lampeAstridImg,
  alt: "Lampe loupe ASTRID fixée au bord d’un bureau avec sa grande lentille éclairante.",
  shortDescription:
    "Une lampe loupe à pince qui associe une grande lentille 3× et un éclairage LED réglable.",
  keyFeatures: [
    "Lentille de 10,5 cm avec grossissement 3×",
    "Éclairage jusqu’à 6 000 lux",
    "10 niveaux d’intensité, 3 températures",
    "Fixation par pince et double bras articulé",
  ],
  price: "148,00 €",
  productUrl: "/boutique/lampe-loupe-astrid",
  ctaLabel: "Découvrir la lampe ASTRID",
};

export const LAMPE_EIRA: CatalogueProduct = {
  name: "Lampe basse vision EIRA",
  image: lampeEiraImg,
  alt: "Lampe basse vision EIRA posée sur un bureau et éclairant un livre ouvert.",
  shortDescription:
    "Une lampe de bureau pliable et rechargeable, réglable de 100 à 1 600 lux.",
  keyFeatures: [
    "3 températures de couleur : 3 000, 4 000 et 5 000 K",
    "Intensité réglable de 100 à 1 600 lux",
    "Batterie rechargeable, 4 à 10 h d’autonomie",
    "Format pliable, 285 g",
  ],
  price: "178,00 €",
  productUrl: "/boutique/lampe-basse-vision-eira",
  ctaLabel: "Découvrir la lampe EIRA",
};

export const LAMPADAIRE_SOLVEIG: CatalogueProduct = {
  name: "Lampadaire SOLVEIG",
  image: lampadaireSolveigImg,
  alt: "Lampadaire de lecture SOLVEIG noir avec tête orientable et télécommande.",
  shortDescription:
    "Un lampadaire de lecture puissant à placer près d’un fauteuil, hauteur et tête orientables.",
  keyFeatures: [
    "Jusqu’à 5 000 lux à 30 cm",
    "5 niveaux d’intensité et 3 températures",
    "Hauteur et tête d’éclairage réglables",
    "Alimentation secteur et télécommande",
  ],
  price: "179,00 €",
  productUrl: "/boutique/lampadaire-solveig",
  ctaLabel: "Découvrir le lampadaire SOLVEIG",
};

// === TÉLÉAGRANDISSEURS ========================================================

export const SOURIS_VERA: CatalogueProduct = {
  name: "Souris loupe électronique VERA",
  image: sourisVeraImg,
  alt: "Souris loupe électronique VERA posée sur un magazine, avec le texte agrandi sur un téléviseur.",
  shortDescription:
    "Une souris loupe à brancher sur votre téléviseur pour utiliser un grand écran comme aide à la lecture.",
  keyFeatures: [
    "Grossissement de 15× à 60× sur TV 50 cm",
    "Modes couleurs, blanc/noir et noir/blanc",
    "4 boutons et roulettes pour suivre les lignes",
    "Connexion Cinch ou HDMI selon la version",
  ],
  price: "158,00 €",
  productUrl: "/boutique/souris-loupe-electronique-vera",
  ctaLabel: "Découvrir la souris VERA",
};

export const MEZZO_FOCUS: CatalogueProduct = {
  name: "Téléagrandisseur Mezzo Focus",
  image: mezzoFocusImg,
  alt: "Téléagrandisseur Mezzo Focus affichant sur son écran l’image agrandie d’un magazine posé sur le plateau.",
  shortDescription:
    "Un poste de lecture et d’écriture complet : caméra Full HD, écran 20 ou 24 pouces, commandes simplifiées.",
  keyFeatures: [
    "Écran de 20 ou 24 pouces",
    "Grossissement étendu, jusqu’à ~50×",
    "Caméra Full HD, autofocus, forts contrastes",
    "Trois commandes principales, plateaux de lecture en option",
  ],
  price: "À partir de 2 582,00 €",
  productUrl: "/boutique/teleagrandisseur-mezzo-focus",
  ctaLabel: "Découvrir le Mezzo Focus",
};

// === LUNETTES LOUPES ==========================================================

export const CLIP_LUNETTES: CatalogueProduct = {
  name: "Clip lunettes loupe",
  image: clipImg,
  alt: "Clip lunettes loupe relevable posé sur un bureau, prêt à être fixé sur une monture.",
  shortDescription:
    "Un clip à fixer sur vos lunettes habituelles pour ajouter un grossissement léger et relevable.",
  keyFeatures: [
    "3 grossissements : 1,4× / 1,7× / 2×",
    "Distances de travail : 50, 33 ou 25 cm",
    "Système relevable",
    "Très léger : 14 g",
  ],
  price: "24,50 €",
  productUrl: "/boutique/clip-lunettes-loupe",
  ctaLabel: "Découvrir le clip lunettes loupe",
};

export const LUNETTES_MAXTV: CatalogueProduct = {
  name: "Lunettes loupe Max-TV",
  image: lunettesMaxTv,
  alt: "Lunettes loupe Max-TV avec leur housse pour regarder la télévision ou une scène à distance.",
  shortDescription:
    "Des lunettes 2,1× pour mieux distinguer la télévision ou une scène à distance, avec réglage indépendant par œil.",
  keyFeatures: [
    "Grossissement 2,1×",
    "Distance d’utilisation : 2 à 5 m",
    "Réglage indépendant pour chaque œil",
    "Poids : 49 g",
  ],
  price: "87,00 €",
  productUrl: "/boutique/loupe-max-tv",
  ctaLabel: "Découvrir les Max-TV",
};

export const LUNETTES_FOCUS: CatalogueProduct = {
  name: "Lunettes loupe FOCUS",
  image: lunettesFocusImg,
  alt: "Lunettes loupe FOCUS de lecture présentées dans leur étui de protection.",
  shortDescription:
    "Des lunettes ~2,5× pour la lecture, la couture ou le bricolage, avec réglage de dioptrie par œil.",
  keyFeatures: [
    "Grossissement ~2,5×",
    "Distance d’utilisation : 25 à 45 cm",
    "Réglage indépendant et verrouillable par œil",
    "Étui rigide inclus",
  ],
  price: "89,00 €",
  productUrl: "/boutique/lunettes-loupe-focus",
  ctaLabel: "Découvrir les lunettes FOCUS",
};

export const LUNETTES_ALVA: CatalogueProduct = {
  name: "Lunette loupe frontale ALVA",
  image: alvaImg,
  alt: "Sacoche de la lunette loupe frontale ALVA avec ses lentilles interchangeables et son câble de recharge.",
  shortDescription:
    "Une lunette loupe frontale avec 5 lentilles interchangeables et un éclairage LED orientable.",
  keyFeatures: [
    "5 grossissements : 1× / 1,5× / 2× / 2,5× / 3,5×",
    "Éclairage LED orientable à 2 niveaux",
    "Branches ou bandeau élastique",
    "Batterie rechargeable, 75 g",
  ],
  price: "94,00 €",
  productUrl: "/boutique/lunettes-loupe-frontale-alva",
  ctaLabel: "Découvrir la lunette ALVA",
};

// === LUNETTES INTELLIGENTES ===================================================

export const RAYBAN_META: CatalogueProduct = {
  name: "Ray-Ban Meta",
  image: rayBanMetaImg,
  alt: "Lunettes intelligentes Ray-Ban Meta utilisables par une personne malvoyante pour une lecture vocale ponctuelle.",
  shortDescription:
    "Caméra, micros, haut-parleurs et assistant vocal : une aide ponctuelle pour lire, identifier ou décrire.",
  keyFeatures: [
    "Lire une étiquette, un prix, un menu ou quelques lignes",
    "Identifier un objet ou un produit du quotidien",
    "Demander une description simple de la scène",
    "Appeler, dicter ou obtenir une information à la voix",
  ],
  status: "Produit présenté et en cours d’évaluation par LirElia — non vendu sur le site.",
  productUrl: "/boutique/ray-ban-meta",
  ctaLabel: "Découvrir l’évaluation des Ray-Ban Meta",
};

// === ACCESSOIRES UTILES =======================================================

export const REVEIL_IVAR: CatalogueProduct = {
  name: "Réveil gros chiffres IVAR",
  image: ivarImg,
  alt: "Réveil gros chiffres IVAR posé sur un meuble et affichant 7 h 09 en caractères blancs sur fond noir.",
  shortDescription:
    "Un réveil compact aux chiffres blancs lumineux de 27 mm sur fond noir, avec température à la demande.",
  keyFeatures: [
    "Chiffres blancs de 27 mm sur fond noir",
    "Format compact : 10 × 5 × 3 cm",
    "Luminosité réglable, diminution nocturne",
    "Alarme, température, secteur + piles de secours",
  ],
  price: "26,40 €",
  productUrl: "/boutique/reveil-gros-chiffres-ivar",
  ctaLabel: "Découvrir le réveil IVAR",
};

export const HORLOGE_FRIDA: CatalogueProduct = {
  name: "Horloge gros chiffres FRIDA",
  image: fridaImg,
  alt: "Horloge FRIDA affichant 6 h 00 en très gros caractères lumineux blancs sur fond noir.",
  shortDescription:
    "Une horloge aux très grands chiffres de 52 mm avec cinq couleurs au choix sur fond noir.",
  keyFeatures: [
    "Très grands chiffres de 52 mm",
    "5 couleurs d’affichage sur fond noir",
    "3 niveaux de luminosité, diminution nocturne",
    "Heure, date, température, alarme, piles de secours",
  ],
  price: "37,00 €",
  productUrl: "/boutique/horloge-gros-chiffres-frida",
  ctaLabel: "Découvrir l’horloge FRIDA",
};

export const HORLOGE_OSKAR: CatalogueProduct = {
  name: "Horloge réveil gros chiffres OSKAR",
  image: oskarImg,
  alt: "Horloge réveil OSKAR affichant 10 h 40 en gros chiffres blancs sur fond noir.",
  shortDescription:
    "Une horloge réveil à grand écran concave et chiffres de 45 mm, lisible de loin et de côté.",
  keyFeatures: [
    "Chiffres de 45 mm, écran 170 × 70 mm",
    "Affichage blanc ou vert sur fond noir",
    "Heure, date et température en cycle",
    "Luminosité réglable, alarme, piles de secours",
  ],
  price: "38,40 €",
  productUrl: "/boutique/horloge-reveil-gros-chiffres-oskar",
  ctaLabel: "Découvrir l’horloge OSKAR",
};
