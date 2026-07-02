import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import {
  LAMPE_AINA,
  LAMPE_ASTRID,
  LAMPE_EIRA,
  LAMPADAIRE_SOLVEIG,
} from "@/data/products/catalogueCategories";

const LampesCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/lampes-basse-vision"
    seoTitle="Lampes de lecture pour basse vision et DMLA | LirElia"
    seoDescription="Comparez nos lampes basse vision : tour de cou, lampe pliable, lampe loupe et lampadaire réglable pour mieux lire avec un éclairage adapté chez soi."
    breadcrumbLabel="Lampes basse vision"
    h1="Lampes basse vision"
    h1Highlight="pour la lecture"
    subtitle="Une lumière réglable et bien orientée pour mieux distinguer les textes"
    intro="Un éclairage adapté peut améliorer le contraste d’un document et rendre la lecture plus confortable. La sélection LirElia comprend une lampe tour de cou mains libres, une lampe de bureau pliable, une lampe loupe pour les travaux de précision et un lampadaire de lecture réglable. Chaque format répond à une position et à un usage différents."
    guide={{
      href: "/aides-lecture-bassevision/lampes",
      label: "Mieux comprendre l’éclairage basse vision",
    }}
    productsHeading="Nos lampes basse vision"
    productsIntro="Quatre solutions pour éclairer une activité de près, au bureau, au fauteuil ou en déplacement."
    products={[LAMPE_AINA, LAMPE_ASTRID, LAMPE_EIRA, LAMPADAIRE_SOLVEIG]}
    comparisonTitle="Comparer nos lampes basse vision"
    comparisonIntro="Le bon modèle dépend surtout de votre position de lecture, de la nécessité de garder les mains libres et du besoin éventuel de grossissement."
    comparison={{
      rows: [
        {
          label: "Format",
          values: [
            "tour de cou / table",
            "lampe loupe à pince",
            "lampe de bureau pliable",
            "lampadaire de lecture",
          ],
        },
        {
          label: "Intensité maximale",
          values: [
            "spot 8 200 lux à 20 cm",
            "6 000 lux à 12 cm",
            "1 600 lux à 27 cm",
            "5 000 lux à 30 cm",
          ],
        },
        { label: "Températures de couleur", values: ["3", "3", "3", "3"] },
        { label: "Grossissement", values: ["non", "3×", "non", "non"] },
        {
          label: "Alimentation",
          values: ["batterie USB", "USB", "batterie + USB", "secteur"],
        },
        {
          label: "Usage principal",
          values: [
            "lecture mobile et mains libres",
            "précision et petits travaux",
            "bureau et déplacements dans la maison",
            "fauteuil, canapé ou table",
          ],
        },
      ],
    }}
    choiceCards={[
      {
        title: "Choisissez AINA pour lire au lit ou garder les mains libres",
        text: "La lampe AINA est la plus mobile de la sélection. Elle suit votre position, n’occupe pas de place sur la table et éclaire directement un livre, une tablette ou un travail manuel. Elle convient aussi lorsque vous changez souvent de pièce.",
        ctaLabel: "Voir la lampe AINA",
        href: "/boutique/lampe-tour-cou-aina",
      },
      {
        title: "Choisissez ASTRID pour grossir et éclairer un travail précis",
        text: "ASTRID est adaptée à la couture, au modélisme, à la lecture ou aux petits travaux qui demandent les deux mains. Sa lentille 3× reste fixe au-dessus de la zone observée et son éclairage annulaire limite les ombres.",
        ctaLabel: "Voir la lampe ASTRID",
        href: "/boutique/lampe-loupe-astrid",
      },
      {
        title: "Choisissez EIRA pour un éclairage de bureau transportable",
        text: "EIRA convient à une personne qui souhaite une vraie lampe de lecture, facilement pliable et rechargeable. Elle peut rester sur un bureau ou être déplacée vers une table de chevet, une cuisine ou un fauteuil.",
        ctaLabel: "Voir la lampe EIRA",
        href: "/boutique/lampe-basse-vision-eira",
      },
      {
        title: "Choisissez SOLVEIG pour lire longtemps dans un fauteuil",
        text: "SOLVEIG offre une puissance importante, une position stable et des réglages accessibles à distance. Il est particulièrement adapté à un poste de lecture régulier dans un salon ou une chambre.",
        ctaLabel: "Voir le lampadaire SOLVEIG",
        href: "/boutique/lampadaire-solveig",
      },
    ]}
    benefitsTitle="Pourquoi choisir une lampe adaptée à la basse vision ?"
    benefits={[
      {
        title: "Améliorer le contraste du document",
        text: "Une lumière suffisamment forte et dirigée vers la page peut rendre les caractères plus distincts sans augmenter leur taille.",
      },
      {
        title: "Adapter la teinte de la lumière",
        text: "Blanc chaud, neutre ou froid : la température la plus confortable varie selon les personnes, l’activité et le moment de la journée.",
      },
      {
        title: "Limiter les ombres et les reflets",
        text: "Une tête orientable permet d’éclairer la zone utile sans envoyer la lumière directement vers les yeux ou créer un reflet sur le papier.",
      },
      {
        title: "Compléter une loupe ou un agrandisseur",
        text: "Une loupe ne donne de bons résultats que si le document est correctement éclairé. Une lampe adaptée améliore souvent l’efficacité de l’aide visuelle déjà utilisée.",
      },
    ]}
    cautionText="Une lampe très puissante n’est pas nécessairement confortable à pleine intensité. Commencez avec un réglage modéré, dirigez la lumière vers le document et augmentez progressivement jusqu’à obtenir le meilleur contraste sans éblouissement. La lampe loupe ASTRID apporte un grossissement modéré, mais ne remplace pas une loupe électronique lorsque le besoin d’agrandissement est important."
    guideSectionTitle="Besoin de mieux comprendre l’éclairage basse vision ?"
    guideSectionText="Notre guide explique comment choisir l’intensité, la température de couleur, le format et le positionnement d’une lampe selon votre sensibilité à la lumière et votre activité."
    related={[
      {
        title: "Loupes électroniques",
        text: "Pour agrandir les textes et renforcer les contrastes sur un écran réglable.",
        href: "/catalogue-aides-basse-vision/loupes-electroniques",
        label: "Voir les loupes électroniques",
      },
      {
        title: "Loupes en verre",
        text: "Pour une aide optique simple, immédiate et sans batterie, à utiliser avec un bon éclairage.",
        href: "/catalogue-aides-basse-vision/loupes-verre",
        label: "Voir les loupes en verre",
      },
      {
        title: "Téléagrandisseurs",
        text: "Pour lire et écrire plus longtemps sur un grand écran, avec une installation stable à domicile.",
        href: "/catalogue-aides-basse-vision/teleagrandisseurs",
        label: "Voir les téléagrandisseurs",
      },
    ]}
    faqTitle="Questions fréquentes sur les lampes basse vision"
    faqItems={[
      {
        q: "Faut-il choisir une lumière chaude ou froide ?",
        a: "Il n’existe pas une température de couleur idéale pour tout le monde. Une lumière chaude peut être agréable le soir, tandis qu’une lumière neutre ou plus froide peut mieux faire ressortir les détails. Les quatre modèles proposés permettent d’essayer plusieurs teintes et de retenir celle qui convient le mieux.",
      },
      {
        q: "Plus de lumière permet-elle toujours de mieux voir ?",
        a: "Une lumière plus forte peut améliorer le contraste, mais elle peut aussi augmenter l’éblouissement si elle est mal orientée. La lampe doit éclairer le document et non les yeux. Il est préférable d’utiliser un variateur et d’ajuster progressivement l’intensité.",
      },
      {
        q: "Quelle lampe choisir pour lire dans un fauteuil ?",
        a: "Le lampadaire SOLVEIG est conçu pour cet usage régulier. La lampe AINA peut aussi convenir si vous souhaitez une solution légère, mobile et portée autour du cou. Le choix dépend de la durée de lecture et de la place disponible autour du fauteuil.",
      },
      {
        q: "Une lampe loupe remplace-t-elle une loupe électronique ?",
        a: "Non. La lampe ASTRID offre un grossissement optique fixe de 3×, adapté à un besoin léger ou modéré. Une loupe électronique permet généralement un grossissement plus important et des contrastes réglables. Les deux solutions ne répondent pas au même niveau de basse vision.",
      },
      {
        q: "Les lampes rechargeables fonctionnent-elles pendant la charge ?",
        a: "EIRA peut fonctionner sur batterie ou reliée à son alimentation USB. AINA se recharge par USB et s’utilise sans câble une fois chargée. Pour préserver la batterie, il est conseillé de suivre les indications figurant sur chaque fiche produit.",
      },
      {
        q: "Une lampe adaptée peut-elle supprimer la fatigue visuelle ?",
        a: "Elle peut améliorer le confort lorsque l’éclairage est insuffisant ou mal orienté, mais elle ne supprime pas toutes les causes de fatigue visuelle. Il reste utile d’adapter la durée de lecture, la posture, la taille des caractères et de faire des pauses régulières.",
      },
    ]}
    finalCtaTitle="Découvrez nos lampes basse vision"
    finalCtaText="Comparez les quatre formats pour choisir une lumière adaptée à votre position, à votre activité et à votre besoin de mobilité."
    finalCtaButtons={[
      { label: "Voir la lampe AINA", href: "/boutique/lampe-tour-cou-aina" },
      { label: "Voir le lampadaire SOLVEIG", href: "/boutique/lampadaire-solveig" },
    ]}
  />
);

export default LampesCategorie;
