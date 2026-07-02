import { Glasses } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import lunettesPres from "@/assets/products/lunettes-loupes-pres.jpg";
import lunettesLoin from "@/assets/products/lunettes-loupes-loin.jpg";
import heroImage from "@/assets/lunettes-loupes.jpg";

const products = [
  {
    name: "Lunettes loupes pour voir de près",
    slug: "lunettes-loupes-pres",
    image: lunettesPres,
    imageAlt: "Illustration aquarelle de lunettes loupes posées au-dessus d'un livre, avec une bobine de fil",
    description:
      "Conçues pour les activités de près, ces lunettes loupes offrent un grossissement mains libres à une distance de travail définie. Idéales lorsque l'on souhaite lire, coudre ou bricoler sans tenir une loupe à la main.",
    features: [
      "Grossissement variable selon le modèle (généralement ×2 à ×6)",
      "Distance de travail précise (souvent 15 à 30 cm)",
      "Légères, à porter comme une paire de lunettes",
      "Mains libres pendant l'activité",
      "Temps d'adaptation parfois nécessaire",
    ],
    idealFor: [
      "Lecture ponctuelle de livres ou de courrier",
      "Couture, broderie, tricot",
      "Bricolage, modélisme, petits travaux de précision",
      "Lecture d'étiquettes ou de notices à plat",
    ],
    shopLink: "/boutique/lunettes-loupe-focus",
    shopLabel: "Découvrir les lunettes loupe FOCUS",
    secondaryShopLink: "/boutique/clip-lunettes-loupe",
    secondaryShopLabel: "Voir le Clip lunettes loupe",
  },
  {
    name: "Lunettes loupes pour voir de loin",
    slug: "lunettes-loupes-loin",
    image: lunettesLoin,
    imageAlt: "Illustration aquarelle de lunettes grossissantes pour voir de loin, type lunettes télescopiques",
    description:
      "Ces lunettes grossissantes pour la vision de loin permettent de mieux distinguer un tableau, une scène, un écran ou un intervenant à distance. Elles sont utiles dans certaines situations de loisir ou d'apprentissage, en position assise ou stable.",
    features: [
      "Grossissement adapté à la vision de loin",
      "Usage ponctuel ou ciblé selon la situation",
      "Choix dépendant de la distance et du champ visuel souhaité",
      "À utiliser dans un cadre stable (assis le plus souvent)",
    ],
    idealFor: [
      "Cinéma, théâtre, opéra",
      "Salle de cours, conférence, formation",
      "Suivre une scène ou un écran à distance",
      "Observation à distance dans un cadre statique",
    ],
    shopLink: "/boutique/loupe-max-tv",
    shopLabel: "Découvrir les Lunettes loupe Max-TV",
  },
  {
    name: "Lunettes loupes éclairantes",
    slug: "lunettes-loupes-eclairantes",
    image: lunettesPres,
    imageAlt: "Illustration de lunettes loupes avec éclairage intégré pour travaux de précision",
    description:
      "Les lunettes loupes éclairantes s'utilisent comme des lunettes loupes de lecture classiques, pour lire, écrire, bricoler, coudre ou réaliser un travail manuel de précision. Elles apportent en plus un éclairage intégré, utile lorsque la lumière ambiante est insuffisante ou mal orientée.",
    features: [
      "Grossissement de près mains libres",
      "Éclairage LED intégré orientable",
      "Utiles quand la lumière ambiante est insuffisante",
      "Légères, à porter comme une paire de lunettes",
      "Idéales pour les travaux de précision prolongés",
    ],
    idealFor: [
      "Lecture en faible luminosité",
      "Couture, broderie, tricot fin",
      "Bricolage et modélisme de précision",
      "Travaux manuels minutieux",
    ],
    shopLink: "/boutique/lunettes-loupe-frontale-alva",
    shopLabel: "Voir les lunettes loupe frontale ALVA",
  },
];

const buyingGuide = {
  title: "Comment choisir ses lunettes loupes ?",
  intro:
    "Le choix dépend essentiellement de la distance d'usage et de l'activité visée. Une paire conçue pour lire à 25 cm ne conviendra pas pour regarder la télévision, et inversement. Un essai préalable et un conseil personnalisé sont vivement recommandés.",
  criteria: [
    {
      title: "La distance d'usage",
      description:
        "Lecture, couture ou bricolage à 20-30 cm pour les modèles de près. Télévision, scène ou tableau à plusieurs mètres pour les modèles de loin. La distance détermine le modèle.",
    },
    {
      title: "Le grossissement",
      description:
        "Plus le grossissement est élevé, plus le champ de vision se réduit et plus la distance de travail devient courte. Mieux vaut un grossissement bien adapté qu'un grossissement maximal.",
    },
    {
      title: "Le confort de port",
      description:
        "Poids, équilibre, qualité optique : ces lunettes se portent parfois plusieurs minutes d'affilée. Le confort est un critère décisif pour une utilisation régulière.",
    },
    {
      title: "Une mention importante",
      description:
        "Les modèles de vision de loin ne sont en aucun cas destinés à la conduite. Ils s'utilisent uniquement dans un cadre stable, assis ou immobile.",
    },
  ],
};

const LunettesLoupes = () => (
  <CategoryPageLayout
    icon={Glasses}
    heroImage={heroImage}
    heroImageWidth={1024}
    heroImageHeight={768}
    title="Lunettes loupes pour malvoyants : près et loin"
    subtitle="Un grossissement mains libres pour la lecture, le bricolage, la couture ou la vision à distance"
    intro="Les lunettes loupes permettent d'obtenir un grossissement mains libres pour certaines activités de près ou de loin. Elles peuvent être utiles pour lire, bricoler, coudre, regarder un écran, suivre une conférence ou voir plus confortablement à distance, à condition de bien choisir le modèle selon l'usage et la distance de travail."
    semanticKeywords="lunettes loupes, lunettes grossissantes, lunettes loupe malvoyant, lunettes loupe lecture, lunettes loupe couture, lunettes loupe bricolage, lunettes télescopiques basse vision, lunettes vision de loin malvoyant, Max TV, Focus"
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix de mes lunettes loupes"
    bottomCta="Demandez-nous des informations sur les lunettes loupes"
    contactSubject="lunettes-loupes"
    ctaText="Être conseillé(e) sur les lunettes loupes"
    catalogueCta={{
      title: "Vous souhaitez comparer les modèles disponibles ?",
      text: "Consultez les lunettes loupes actuellement proposées par LirElia et comparez leurs caractéristiques, leurs usages et leurs prix.",
      label: "Comparer les lunettes loupes disponibles",
      href: "/catalogue-aides-basse-vision/lunettes-loupes",
    }}
    seo={{
      title: "Lunettes Loupes pour Malvoyants — Près et Loin | LirElia",
      description: "Lunettes loupes pour lire, coudre, bricoler ou voir de loin (cinéma, conférence). Conseil personnalisé gratuit pour bien choisir selon la distance.",
      canonicalPath: "/aides-lecture-bassevision/lunettes-loupes",
    }}
  />
);

export default LunettesLoupes;
