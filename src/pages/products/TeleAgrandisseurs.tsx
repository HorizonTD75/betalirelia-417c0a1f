import { Eye } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import teleAgrandisseurBureau from "@/assets/products/tele-agrandisseur-bureau.jpg";
import teleAgrandisseurPortable from "@/assets/products/tele-agrandisseur-portable.jpg";
import teleAgrandisseurTv from "@/assets/products/tele-agrandisseur-tv.jpg";
import heroImage from "@/assets/tele-agrandisseur.jpg";

const products = [
  {
    name: "Télé-agrandisseur de bureau",
    slug: "tele-agrandisseur-bureau",
    image: teleAgrandisseurBureau,
    imageAlt: "Illustration aquarelle d'un télé-agrandisseur de bureau avec grand écran",
    description:
      "Station de lecture professionnelle avec écran haute définition de 19 à 24 pouces, plateau coulissant XY et grossissement jusqu'à ×60. Pensée pour la lecture longue, l'écriture et le travail administratif quotidien.",
    features: [
      "Écran HD 19\" à 24\" avec traitement antireflet",
      "Grossissement continu de ×2 à ×60",
      "Plateau coulissant XY pour suivre les lignes sans effort",
      "Modes de contraste multiples (16+ combinaisons)",
      "Ligne de lecture et masque de fenêtre",
      "Autofocus permanent",
    ],
    idealFor: [
      "Lecture prolongée quotidienne : livres, journaux, magazines",
      "Rédaction de courrier, remplissage de formulaires administratifs",
      "Mots croisés, sudoku, travaux d'écriture manuscrite",
      "Déficiences visuelles sévères (DMLA avancée, rétinopathie)",
    ],
    priceRange: "À partir de 1 500 €",
    shopLink: "/produits/teleagrandisseur-mezzo-focus",
    shopLabel: "Voir le téléagrandisseur Mezzo Focus",
  },
  {
    name: "Télé-agrandisseur portable",
    slug: "tele-agrandisseur-portable",
    image: teleAgrandisseurPortable,
    imageAlt: "Illustration aquarelle d'un télé-agrandisseur portable pliable",
    description:
      "Modèle compact et pliable avec écran intégré de 10 à 13 pouces. Conçu pour voyager, changer de pièce ou être posé temporairement, tout en gardant un confort de lecture supérieur à une loupe électronique.",
    features: [
      "Écran 10\" à 13\" pliable",
      "Grossissement de ×2 à ×30",
      "Poids : 1,5 à 2,5 kg",
      "Autonomie 3 à 4 heures sur batterie",
      "Modes lecture, distance et miroir",
      "Connexion HDMI vers un écran externe",
    ],
    idealFor: [
      "Usage en déplacement (séjour, week-end, vacances)",
      "Lecture dans plusieurs pièces de la maison",
      "Personnes actives qui veulent garder une vraie autonomie",
    ],
    priceRange: "À partir de 1 200 €",
  },
  {
    name: "Caméra de lecture sur TV",
    slug: "tele-agrandisseur-tv",
    image: teleAgrandisseurTv,
    imageAlt: "Illustration aquarelle d'une caméra de lecture projetant un document sur un grand écran TV",
    description:
      "Caméra compacte qui projette le document agrandi sur votre téléviseur existant. Solution économique pour profiter d'un grand écran sans investir dans un télé-agrandisseur complet.",
    features: [
      "Se branche sur un téléviseur (HDMI)",
      "Grossissement selon la taille de l'écran TV",
      "Caméra HD avec autofocus",
      "Modes de contraste intégrés",
      "Très compact et léger",
      "Télécommande simple d'utilisation",
    ],
    idealFor: [
      "Personnes disposant déjà d'un grand écran TV",
      "Budget limité pour un premier équipement",
      "Lecture installée dans le salon ou la chambre",
    ],
    priceRange: "À partir de 158 €",
    secondaryShopLink: "/produits/souris-loupe-electronique-vera",
    secondaryShopLabel: "Voir la souris loupe électronique VERA",
  },
];

const buyingGuide = {
  title: "Comment choisir son télé-agrandisseur ?",
  intro:
    "Le télé-agrandisseur est un investissement structurant : c'est souvent l'aide qui permet de retrouver une vraie autonomie de lecture et d'écriture. Le bon choix dépend de votre vision résiduelle, de vos usages quotidiens et de la place disponible chez vous.",
  criteria: [
    {
      title: "Taille et qualité de l'écran",
      description:
        "Un grand écran HD avec traitement antireflet réduit la fatigue et permet une lecture plus longue. C'est l'élément qui change le plus le confort au quotidien.",
    },
    {
      title: "Mobilité ou confort",
      description:
        "Un modèle de bureau offre le meilleur confort mais reste fixe. Un portable est plus polyvalent, idéal si vous changez de pièce ou si vous partez en séjour.",
    },
    {
      title: "Plateau coulissant",
      description:
        "Le plateau XY avec freins est essentiel pour suivre les lignes d'un livre ou d'un journal sans effort. Sa fluidité fait une vraie différence pour la lecture longue.",
    },
    {
      title: "Financement et prise en charge",
      description:
        "Certains télé-agrandisseurs sont pris en charge partiellement par la MDPH ou l'assurance maladie. Renseignez-vous sur les aides possibles avant l'achat.",
    },
  ],
};

const TeleAgrandisseurs = () => (
  <CategoryPageLayout
    icon={Eye}
    heroImage={heroImage}
    title="Télé-agrandisseurs"
    subtitle="Le confort d'un grand écran pour lire et écrire longtemps, même avec une vision très réduite"
    intro="Le télé-agrandisseur, ou vidéo-agrandisseur, est l'aide à la lecture la plus aboutie pour les personnes atteintes de basse vision modérée à sévère. Avec son grand écran, son zoom puissant et son plateau coulissant, il rend possible la lecture longue, l'écriture, les mots croisés ou la consultation de documents administratifs — là où une simple loupe ou une loupe électronique portable atteint vite ses limites. C'est l'outil qui permet de retrouver une vraie autonomie quotidienne à la maison."
    semanticKeywords=""
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'un télé-agrandisseur"
    bottomCta="Demandez-nous des informations sur les télé-agrandisseurs"
    contactSubject="tele-agrandisseur"
    ctaText="Découvrir les télé-agrandisseurs"
    seo={{
      title: "Télé-agrandisseurs pour Basse Vision | LirElia",
      description: "Lisez et écrivez longtemps, confortablement, grâce aux télé-agrandisseurs : grand écran, zoom puissant, plateau XY. Idéal DMLA et basse vision sévère.",
      canonicalPath: "/aides-lecture-bassevision/tele-agrandisseurs",
    }}
  />
);

export default TeleAgrandisseurs;
