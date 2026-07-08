import { Monitor } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import loupePoche from "@/assets/products/loupe-electronique-poche.jpg";
import loupePortable from "@/assets/products/loupe-electronique-clover-5-poignee.jpg";
import loupeBureau from "@/assets/products/loupe-electronique-bureau.jpg";
import heroImage from "@/assets/loupe-electronique.jpg";

const products = [
  {
    name: "Loupe électronique de poche",
    slug: "loupe-electronique-poche",
    image: loupePoche,
    imageAlt: "Illustration aquarelle d'une loupe électronique de poche tenue en main",
    description:
      "Ultra-compacte et légère, cette loupe numérique se glisse dans une poche ou dans un sac. Idéale pour un usage ponctuel et discret en extérieur : étiquette en magasin, menu au restaurant, prix sur un produit.",
    features: [
      "Légère (< 200 g)",
      "Écran 3,5\" à 5\"",
      "Zoom de ×2 à ×12",
      "Éclairage intégré",
      "Fort contraste",
      "Rechargeable par USB",
    ],
    idealFor: [
      "Usage discret en public",
      "Confort de lecture augmenté",
      "Lecture d'étiquettes, de menus, de prix en magasin",
      "Complément utile à un agrandisseur de bureau",
    ],
    priceRange: "À partir de 150 €",
    shopLink: "/boutique/loupe-amelie",
    shopLabel: "Découvrir la Loupe Amélie",
  },
  {
    name: "Loupe électronique transportable",
    slug: "loupe-electronique-portable",
    image: loupePortable,
    imageAlt: "La loupe électronique CLOVER 5 tenue à la main et grossissant une partie du texte d’un magazine.",
    description:
      "Loupe numérique compacte avec écran intégré de 5 à 7 pouces. Zoom continu, multiples modes de contraste, fonctions avancées et autonomie de plusieurs heures. Se glisse dans un sac. Découvrez notamment la loupe électronique CLOVER 5, légère, transportable et à grossissement 4x à 20x.",
    features: [
      "Zoom continu de ×2 à ×20",
      "Modes de contraste : blanc/noir, jaune/noir, inversé, etc.",
      "Écran HD 5\" à 7\" antireflet",
      "Autonomie 3 à 5 heures (rechargeable USB)",
      "Poids : 150 à 500 g",
    ],
    idealFor: [
      "Lecture en déplacement : restaurant, magasin, transport",
      "Lecture approfondie à la maison de documents variés",
      "Personnes ayant besoin de grossissements élevés",
    ],
    priceRange: "À partir de 250 €",
    shopLink: "/boutique/loupe-electronique-clover-5",
    shopLabel: "Voir la loupe électronique CLOVER 5",
  },
  {
    name: "Loupe électronique de bureau",
    slug: "loupe-electronique-bureau",
    image: loupeBureau,
    imageAlt: "Illustration aquarelle d'une station de lecture électronique de bureau",
    description:
      "Station de lecture avec écran large (8 à 14 pouces). Conçue pour la lecture prolongée et l'écriture, avec une qualité d'image supérieure et un confort maximal au quotidien.",
    features: [
      "Écran large 8\" à 14\" haute définition",
      "Zoom jusqu'à ×60",
      "Toutes les fonctions des loupes électroniques utiles au quotidien",
      "Capture et gel d'image",
      "Fonctions évoluées possibles : sauvegarde d'images, lecture vocale, vision de loin, connexion à un grand écran externe, etc.",
    ],
    idealFor: [
      "Lecture prolongée à domicile : livres, journaux",
      "Suivre des cours, des conférences",
      "Rédaction de courrier, remplissage de formulaires, mots croisés",
      "Déficiences visuelles modérées à sévères",
    ],
    priceRange: "À partir de 600 €",
  },
];

const buyingGuide = {
  title: "Comment choisir sa loupe électronique ?",
  intro:
    "Le choix dépend avant tout de votre usage : mobile ou fixe, ponctuel ou prolongé, lecture courte d'étiquettes ou lecture longue à la maison. Le niveau de grossissement nécessaire dépend ensuite de votre vision résiduelle.",
  criteria: [
    {
      title: "Taille de l'écran",
      description:
        "Plus l'écran est grand, plus la lecture est confortable sur la durée. Un écran 4\" se glisse dans une poche, 5 à 7\" reste transportable, 8\" et plus est dédié à la maison.",
    },
    {
      title: "Plage de zoom",
      description:
        "Un zoom de ×10 couvre la majorité des besoins. Au-delà de ×20, il s'adresse aux déficiences visuelles plus sévères (DMLA avancée, rétinopathie sévère).",
    },
    {
      title: "Modes de contraste",
      description:
        "Le contraste inversé (texte clair sur fond sombre) réduit fortement la fatigue visuelle. Vérifiez la présence d'au moins 4 modes pour s'adapter à chaque type de document.",
    },
    {
      title: "Mobilité ou confort",
      description:
        "Pour un usage en extérieur, privilégiez un modèle léger (< 200 g) avec une bonne autonomie. Pour la maison, un grand écran posé sera bien plus confortable au quotidien.",
    },
  ],
};

const LoupesElectroniques = () => (
  <CategoryPageLayout
    icon={Monitor}
    heroImage={heroImage}
    heroImageAlt="loupe électronique tenue à la main"
    heroImageWidth={896}
    heroImageHeight={512}
    title="Loupes électroniques pour basse vision et DMLA"
    subtitle="Grossissement variable et contraste renforcé pour lire sans compromis"
    intro="La loupe électronique, ou loupe numérique, utilise une caméra et un écran pour afficher le texte agrandi avec des contrastes optimisés. Avec un zoom réglable de ×2 à ×60 et plusieurs modes de contraste pensés pour la basse vision, elle apporte un confort de lecture incomparable, à la maison comme en déplacement."
    semanticKeywords=""
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une loupe électronique"
    bottomCta="Demandez-nous des informations sur les loupes électroniques"
    contactSubject="loupe-electronique"
    ctaText="Être orienté(e) vers une loupe électronique adaptée"
    catalogueCta={{
      title: "Vous souhaitez comparer les modèles disponibles ?",
      text: "Consultez les loupes électroniques actuellement proposées par LirElia et comparez leurs caractéristiques, leurs usages et leurs prix.",
      label: "Comparer les loupes électroniques disponibles",
      href: "/catalogue-aides-basse-vision/loupes-electroniques",
    }}
    seo={{
      title: "Loupes Électroniques pour Basse Vision | LirElia",
      description: "Zoom réglable, contraste renforcé et écran HD : découvrez les loupes électroniques de poche, transportables ou de bureau. Conseil gratuit personnalisé.",
      canonicalPath: "/aides-lecture-bassevision/loupes-electroniques",
    }}
  />
);

export default LoupesElectroniques;
