import { Search } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import loupeClassique from "@/assets/products/loupe-classique.jpg";
import loupeEclairante from "@/assets/products/loupe-eclairante.jpg";
import loupeDome from "@/assets/products/loupe-dome.jpg";
import heroImage from "@/assets/loupe-verre.jpg";

const products = [
  {
    name: "Loupe de lecture classique",
    slug: "loupe-classique",
    image: loupeClassique,
    imageAlt: "Illustration aquarelle d'une loupe de lecture classique en verre",
    description:
      "Loupe à main avec lentille en verre optique de qualité. Grossissement fixe, idéale pour un usage ponctuel : courrier, étiquette de médicament, notice ou ticket de caisse.",
    features: [
      "Grossissement de ×2 à ×5 selon modèle",
      "Lentille en verre minéral traité anti-reflets",
      "Manche ergonomique antidérapant",
      "Légère, sans batterie ni branchement",
    ],
    idealFor: [
      "Lecture rapide d'un courrier ou d'une étiquette",
      "Consultation ponctuelle d'une notice ou d'un emballage",
      "Première aide à la lecture quand la vision de près baisse",
    ],
    priceRange: "À partir de 15 €",
  },
  {
    name: "Loupe éclairante rectangulaire",
    slug: "loupe-eclairante",
    image: loupeEclairante,
    imageAlt: "Illustration aquarelle d'une loupe rectangulaire avec éclairage LED intégré",
    description:
      "Loupe de format rectangulaire, avec éclairage LED intégré. La lentille rectangulaire améliore le confort de lecture sur des textes denses et permet de mieux suivre la ligne.",
    features: [
      "Format rectangulaire améliorant la qualité d'image",
      "Éclairage LED intégré (piles ou rechargeable)",
      "Grossissement fixe de ×2,5 à ×6 selon modèle",
      "Large champ de vision pour la lecture de journaux",
    ],
    idealFor: [
      "Lecture de textes, d'étiquettes, de boîtes de conserve",
      "Mise en œuvre instantanée, sans réglage",
      "Besoin d'un grossissement d'appoint à la maison ou en déplacement",
      "Utilisation prolongée en tous lieux",
    ],
    priceRange: "À partir de 25 €",
    shopLink: "/boutique/loupe-main-nora",
    shopLabel: "Voir la Loupe à main NORA",
  },
  {
    name: "Loupe dôme et règle",
    slug: "loupe-dome",
    image: loupeDome,
    imageAlt: "Illustration aquarelle d'une loupe dôme posée sur une page de livre",
    description:
      "Loupe à poser directement sur le texte. De format dôme ou règle, elle permet un positionnement naturel au-dessus du texte d'intérêt, sans effort de maintien.",
    features: [
      "Se pose directement sur la page",
      "Pas de tremblement : vision stable",
      "Grossissement de ×2 à ×5",
      "Idéale pour les mains peu agiles",
    ],
    idealFor: [
      "Personnes ayant des tremblements ou les mains qui fatiguent",
      "Lecture prolongée sans tenir la loupe à bout de bras",
      "Documents posés à plat : courrier, formulaire, mots croisés",
    ],
    priceRange: "À partir de 20 €",
    shopLink: "/boutique/loupe-dome-eclairante-lina",
    shopLabel: "Découvrir la loupe LINA",
  },
];

const buyingGuide = {
  title: "Comment choisir sa loupe en verre ?",
  intro:
    "Le choix d'une loupe optique dépend avant tout de votre usage : un appoint rapide, une lecture prolongée, ou un confort sans avoir à tenir la loupe.",
  criteria: [
    {
      title: "Le grossissement",
      description:
        "Plus le grossissement est élevé, plus le champ de vision se réduit. Un ×2 à ×3 suffit pour un courrier ou une notice ; un ×4 à ×6 devient utile pour les petits caractères.",
    },
    {
      title: "Le format",
      description:
        "Ronde pour un usage ponctuel et rapide, rectangulaire pour suivre les lignes d'un journal, dôme ou règle pour poser sur le texte sans avoir à la maintenir en main.",
    },
    {
      title: "L'éclairage intégré",
      description:
        "Un éclairage LED intégré change radicalement le confort, surtout dans une pièce mal éclairée ou en fin de journée. Il limite aussi la fatigue visuelle.",
    },
    {
      title: "L'ergonomie",
      description:
        "Poids, taille du manche, matière antidérapante : essayez avant d'acheter, surtout en cas de tremblements ou si la main fatigue rapidement.",
    },
  ],
};

const LoupesVerre = () => (
  <CategoryPageLayout
    icon={Search}
    heroImage={heroImage}
    title="Loupes en verre"
    subtitle="Une aide à la lecture simple, immédiate et sans technologie"
    intro="La loupe en verre reste l'aide à la lecture la plus simple et la plus accessible. Avec une lentille convergente de qualité, elle offre un grossissement immédiat pour lire un courrier, une étiquette de médicament, une notice ou un document imprimé. Légère, sans batterie et facile à prendre en main, c'est souvent la première solution adoptée quand la vision de près commence à baisser."
    semanticKeywords=""
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une loupe en verre"
    bottomCta="Demandez-nous des informations sur les loupes en verre"
    contactSubject="loupes-verre"
    seo={{
      title: "Loupes en Verre pour Malvoyants | LirElia",
      description: "Loupe classique, éclairante ou dôme : trouvez la loupe en verre adaptée à votre vue. Grossissements de ×2 à ×6, conseil personnalisé gratuit.",
      canonicalPath: "/aides-lecture-bassevision/loupes-verre",
    }}
    ctaText="Être conseillé(e) pour choisir ma loupe"
  />
);

export default LoupesVerre;
