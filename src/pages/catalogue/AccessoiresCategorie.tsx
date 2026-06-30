import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import {
  REVEIL_IVAR,
  HORLOGE_FRIDA,
  HORLOGE_OSKAR,
} from "@/data/products/catalogueCategories";

const AccessoiresCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/accessoires"
    seoTitle="Accessoires pour malvoyants et basse vision | LirElia"
    seoDescription="Comparez les réveils et horloges à gros chiffres IVAR, FRIDA et OSKAR : taille d’affichage, couleurs, luminosité, date, température et prix."
    breadcrumbLabel="Accessoires utiles"
    h1="Accessoires utiles"
    h1Highlight="pour les personnes malvoyantes"
    subtitle="Lire l’heure plus facilement grâce à de grands chiffres contrastés"
    intro="Les horloges et réveils à gros chiffres peuvent faciliter le repérage dans le temps lorsque les afficheurs classiques deviennent trop petits ou insuffisamment contrastés. LirElia propose trois modèles lumineux sur fond noir, avec des tailles, des couleurs et des fonctions différentes pour la chambre, le salon ou un hébergement médicalisé."
    guide={{
      href: "/vivre-basse-vision",
      label: "Découvrir les conseils pour vivre avec une basse vision",
    }}
    productsHeading="Nos accessoires utiles"
    productsIntro="Trois modèles pour choisir la taille des chiffres et les informations réellement utiles au quotidien."
    products={[REVEIL_IVAR, HORLOGE_FRIDA, HORLOGE_OSKAR]}
    comparisonTitle="Comparer nos horloges et réveils à gros chiffres"
    comparisonIntro="Le choix dépend principalement de la distance de lecture, de la taille disponible sur le meuble et de la couleur d’affichage la mieux perçue."
    comparison={{
      rows: [
        { label: "Hauteur des chiffres", values: ["27 mm", "52 mm", "45 mm"] },
        {
          label: "Taille de l’écran",
          values: ["90 × 45 mm", "160 × 60 mm", "170 × 70 mm"],
        },
        {
          label: "Couleurs",
          values: [
            "blanc sur noir",
            "blanc, rouge, vert, orange ou bleu sur noir",
            "blanc ou vert sur noir",
          ],
        },
        {
          label: "Informations",
          values: [
            "heure, température à la demande",
            "heure, date, température",
            "heure, date, température",
          ],
        },
        { label: "Affichage cyclique", values: ["non", "oui", "oui"] },
        {
          label: "Luminosité nocturne",
          values: [
            "diminution automatique",
            "réglable et automatique",
            "réglable et automatique",
          ],
        },
        {
          label: "Alimentation",
          values: [
            "secteur + 3 piles AAA",
            "secteur + 3 piles AAA",
            "secteur + 3 piles AAA",
          ],
        },
      ],
    }}
    choiceCards={[
      {
        title: "Choisissez IVAR pour un petit espace et un budget contenu",
        text: "IVAR convient à une table de chevet étroite, à une chambre médicalisée ou à une personne qui souhaite principalement lire l’heure et utiliser une alarme. Ses chiffres sont moins grands que ceux des deux autres modèles, mais son format est nettement plus compact.",
        ctaLabel: "Voir le réveil IVAR",
        href: "/boutique/reveil-gros-chiffres-ivar",
      },
      {
        title: "Choisissez FRIDA pour les plus grands chiffres et le choix de la couleur",
        text: "FRIDA est particulièrement intéressante si la taille des caractères est prioritaire ou si certaines couleurs sont mieux perçues que d’autres. Son affichage de 52 mm est le plus grand de la sélection et cinq teintes sont proposées.",
        ctaLabel: "Voir l’horloge FRIDA",
        href: "/boutique/horloge-gros-chiffres-frida",
      },
      {
        title: "Choisissez OSKAR pour un grand écran concave et deux contrastes simples",
        text: "OSKAR offre un affichage large, lisible de côté, avec des chiffres blancs ou verts. Il convient à une chambre, un salon ou un bureau lorsque l’on souhaite voir alternativement l’heure, la date et la température.",
        ctaLabel: "Voir l’horloge OSKAR",
        href: "/boutique/horloge-reveil-gros-chiffres-oskar",
      },
    ]}
    benefitsTitle="Pourquoi choisir une horloge à gros chiffres ?"
    benefits={[
      {
        title: "Un contraste supérieur",
        text: "Les chiffres lumineux sur fond noir sont généralement plus faciles à distinguer que des caractères gris sur un écran LCD peu contrasté.",
      },
      {
        title: "Un repérage plus autonome",
        text: "Lire l’heure sans chercher un téléphone, allumer une lampe ou solliciter un proche peut apporter davantage de sérénité au quotidien et pendant la nuit.",
      },
      {
        title: "Une luminosité adaptable",
        text: "La réduction automatique ou manuelle de la luminosité limite l’éblouissement nocturne tout en conservant un affichage visible.",
      },
      {
        title: "Des informations utiles réunies",
        text: "Selon le modèle, l’heure, la date et la température peuvent être affichées sur le même appareil, avec une alarme et une alimentation de secours.",
      },
    ]}
    cautionText="La taille des chiffres doit être mise en relation avec la distance réelle entre l’horloge et vos yeux. La couleur la plus lisible varie selon les personnes : blanc sur noir reste polyvalent, mais le vert, l’orange ou le rouge peuvent être mieux perçus dans certaines situations. Sans secteur, l’écran peut s’éteindre après quelques secondes afin de préserver les piles."
    guideSectionTitle="Besoin de conseils pour faciliter le quotidien ?"
    guideSectionText="Notre guide « Vivre avec la basse vision » présente des solutions concrètes pour mieux lire, organiser le domicile, renforcer les contrastes, adapter l’éclairage et préserver son autonomie."
    related={[
      {
        title: "Lampes basse vision",
        text: "Pour mieux éclairer un livre, un réveil, un plan de travail ou une activité du quotidien.",
        href: "/catalogue-aides-basse-vision/lampes-basse-vision",
        label: "Voir les lampes basse vision",
      },
      {
        title: "Loupes électroniques",
        text: "Pour agrandir les courriers, les étiquettes, les notices et les petits caractères sur un écran réglable.",
        href: "/catalogue-aides-basse-vision/loupes-electroniques",
        label: "Voir les loupes électroniques",
      },
      {
        title: "Loupes en verre",
        text: "Pour une lecture ponctuelle avec une aide simple, sans batterie ni écran.",
        href: "/catalogue-aides-basse-vision/loupes-verre",
        label: "Voir les loupes en verre",
      },
    ]}
    faqTitle="Questions fréquentes sur les horloges à gros chiffres"
    faqItems={[
      {
        q: "Quelle hauteur de chiffres choisir ?",
        a: "IVAR affiche des chiffres de 27 mm et convient surtout à une lecture proche. OSKAR atteint 45 mm et FRIDA 52 mm, plus adaptés à une lecture depuis le lit ou à quelques mètres. La meilleure taille dépend toutefois de votre vision et du contraste choisi.",
      },
      {
        q: "Quelle couleur est la plus lisible en basse vision ?",
        a: "Le blanc sur fond noir offre un contraste élevé et reste un choix courant. Certaines personnes préfèrent le vert, l’orange ou le rouge. FRIDA permet de choisir parmi cinq couleurs, tandis qu’OSKAR existe en blanc ou vert et IVAR en blanc.",
      },
      {
        q: "L’affichage reste-t-il allumé en cas de coupure de courant ?",
        a: "Les piles de secours conservent l’heure et les réglages. Selon le modèle, l’affichage peut rester éteint et se rallumer temporairement après un appui afin d’économiser les piles. Le fonctionnement permanent de l’écran nécessite généralement l’alimentation secteur.",
      },
      {
        q: "Ces modèles affichent-ils la date et la température ?",
        a: "FRIDA et OSKAR peuvent faire défiler l’heure, la date et la température. IVAR affiche principalement l’heure et montre la température à la demande avec le bouton supérieur.",
      },
      {
        q: "La luminosité peut-elle gêner pendant la nuit ?",
        a: "Les trois modèles permettent de réduire la luminosité. Ils disposent également d’une diminution automatique sur une plage nocturne, ce qui évite un affichage trop intense dans une chambre sombre.",
      },
      {
        q: "Les piles sont-elles fournies ?",
        a: "Non. Les trois appareils utilisent des piles AAA comme alimentation de secours, mais celles-ci ne sont pas fournies. Le bloc secteur ou le câble d’alimentation indiqué sur la fiche produit est inclus.",
      },
    ]}
    finalCtaTitle="Découvrez nos accessoires utiles"
    finalCtaText="Comparez IVAR, FRIDA et OSKAR selon la taille des chiffres, la couleur d’affichage et les informations que vous souhaitez consulter."
    finalCtaButtons={[
      { label: "Voir le réveil IVAR", href: "/boutique/reveil-gros-chiffres-ivar" },
      { label: "Voir l’horloge FRIDA", href: "/boutique/horloge-gros-chiffres-frida" },
      { label: "Voir l’horloge OSKAR", href: "/boutique/horloge-reveil-gros-chiffres-oskar" },
    ]}
  />
);

export default AccessoiresCategorie;
