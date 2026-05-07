import { Lightbulb } from "lucide-react";
import CategoryPageLayout from "@/components/products/CategoryPageLayout";
import lampeBureau from "@/assets/products/lampe-bureau-daylight.jpg";
import lampeSurPied from "@/assets/products/lampe-sur-pied.jpg";
import lampeLoupe from "@/assets/products/lampe-loupe.jpg";
import heroImage from "@/assets/lampe-lecture.jpg";

const products = [
  {
    name: "Lampe de bureau lumière du jour",
    slug: "lampe-bureau-daylight",
    image: lampeBureau,
    imageAlt: "Illustration aquarelle d'une lampe de bureau LED moderne au-dessus d'un livre",
    description:
      "Lampe à poser, avec éclairage LED « lumière du jour » ajustable. Reproduit une lumière confortable et bien orientée pour améliorer la lecture sans éblouissement excessif. Découvrez notamment la lampe basse vision EIRA, pliable et rechargeable.",
    features: [
      "Température de couleur ajustable du blanc chaud au blanc froid",
      "Intensité réglable en continu",
      "Bras articulé orientable",
      "Faible consommation LED",
      "Pas de scintillement",
    ],
    idealFor: [
      "Lecture prolongée au bureau ou en fauteuil",
      "Modèles transportables si batterie rechargeable selon version",
      "Personnes sensibles aux lumières inadaptées",
      "Complément à une loupe optique ou électronique",
    ],
    priceRange: "À partir de 45 €",
    shopLink: "/boutique/lampe-basse-vision-eira",
    shopLabel: "Voir la lampe EIRA",
  },
  {
    name: "Lampe sur pied de lecture",
    slug: "lampe-sur-pied",
    image: lampeSurPied,
    imageAlt: "Illustration aquarelle d'un lampadaire sur pied à côté d'un fauteuil",
    description:
      "Lampadaire sur pied avec tête orientable, conçu pour éclairer une zone de lecture depuis le fauteuil. Position haute pour un éclairage ciblé sans ombre portée.",
    features: [
      "Hauteur ajustable (1,20 m à 1,70 m)",
      "Tête orientable à 360°",
      "LED dimmable, du blanc chaud au blanc froid",
      "Socle stable et discret",
      "Interrupteur accessible (pied ou variateur)",
    ],
    idealFor: [
      "Lecture en fauteuil ou dans le canapé",
      "Personnes à mobilité réduite (pas de lampe à déplacer)",
      "Salon ou chambre avec un éclairage général insuffisant",
    ],
    priceRange: "À partir de 80 €",
  },
  {
    name: "Lampe-loupe à pince",
    slug: "lampe-loupe",
    image: lampeLoupe,
    imageAlt: "Illustration aquarelle d'une lampe-loupe à pince fixée sur un bureau",
    description:
      "Combine éclairage LED puissant et lentille grossissante. Se fixe au bureau par pince ou base lestée. Idéale pour la lecture et les travaux de précision.",
    features: [
      "Lentille grossissante de ×3 à ×5 intégrée",
      "Éclairage LED annulaire anti-ombre",
      "Fixation simple par pince",
      "Bras articulé orientable",
      "Mains libres pour lire ou écrire",
    ],
    idealFor: [
      "Lecture et écriture simultanées",
      "Travaux de précision (couture, modélisme, bricolage)",
      "Personnes avec tremblements (mains libres)",
    ],
    priceRange: "À partir de 55 €",
    shopLink: "/boutique/lampe-loupe-astrid",
    shopLabel: "Voir la lampe loupe ASTRID",
  },
];

const buyingGuide = {
  title: "Comment choisir son éclairage de lecture ?",
  intro:
    "En basse vision, un bon éclairage est souvent le premier facteur d'amélioration du confort. Il ne s'agit pas d'éclairer plus, mais d'éclairer mieux : la bonne lumière, bien orientée, sans éblouissement.",
  criteria: [
    {
      title: "Une lumière réglable",
      description:
        "Plutôt qu'une seule température « idéale », privilégiez une lampe dont la teinte est ajustable du blanc chaud au blanc froid. Chaque personne a sa propre sensibilité, qui varie aussi selon l'heure de la journée.",
    },
    {
      title: "Orientation de la lumière",
      description:
        "La lumière doit être dirigée sur le document, jamais vers les yeux. Un bras articulé et une tête orientable sont indispensables pour adapter l'éclairage à chaque situation de lecture.",
    },
    {
      title: "Anti-éblouissement",
      description:
        "Privilégiez les LED sans scintillement, avec un diffuseur, pour réduire les reflets sur le papier ou sur l'écran. C'est essentiel pour limiter la fatigue visuelle.",
    },
    {
      title: "Combinaison loupe + lampe",
      description:
        "Une lampe-loupe combine les deux fonctions et libère les mains. C'est une solution particulièrement utile pour les travaux de précision ou en cas de tremblements.",
    },
  ],
};

const Lampes = () => (
  <CategoryPageLayout
    icon={Lightbulb}
    heroImage={heroImage}
    title="Lampes de lecture adaptées"
    subtitle="Voir mieux grâce à un éclairage maîtrisé, sans éblouissement"
    intro="Un éclairage inadapté est l'une des premières causes de fatigue visuelle chez les personnes malvoyantes. Une bonne lampe de lecture ne se contente pas d'éclairer : elle améliore le contraste, réduit les reflets et permet de lire plus longtemps sans douleur. C'est souvent le premier complément utile à une loupe ou à un agrandisseur électronique."
    semanticKeywords=""
    products={products}
    buyingGuide={buyingGuide}
    heroCta="Avoir de l'aide pour le choix d'une lampe adaptée"
    bottomCta="Demandez-nous des informations sur les lampes adaptées"
    contactSubject="eclairage-basse-vision"
    ctaText="Optimiser mon éclairage de lecture"
    seo={{
      title: "Lampes Basse Vision – Éclairage Adapté | LirElia",
      description: "Un bon éclairage change tout. Découvrez nos lampes lumière du jour, orientables et sans éblouissement, conçues pour la lecture en basse vision.",
      canonicalPath: "/aides-lecture-bassevision/lampes",
    }}
  />
);

export default Lampes;
