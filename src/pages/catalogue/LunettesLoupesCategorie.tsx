import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import {
  CLIP_LUNETTES,
  LUNETTES_MAXTV,
  LUNETTES_FOCUS,
  LUNETTES_ALVA,
} from "@/data/products/catalogueCategories";

const LunettesLoupesCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/lunettes-loupes"
    seoTitle="Lunettes loupes pour voir de près ou de loin | LirElia"
    seoDescription="Comparez quatre lunettes loupes pour lire, bricoler ou mieux voir la télévision : grossissement, distance de travail, éclairage, poids et prix."
    breadcrumbLabel="Lunettes loupes"
    h1="Lunettes loupes"
    h1Highlight="pour la vision de près ou de loin"
    subtitle="Gardez les mains libres pour lire, bricoler ou regarder un écran"
    intro="Les lunettes loupes offrent un grossissement adapté à une distance précise. Certains modèles facilitent les activités de près, comme la lecture ou la couture. D’autres sont conçus pour regarder la télévision ou une scène à distance. Le choix doit toujours tenir compte de l’usage, du grossissement, de la correction visuelle et de la distance de travail."
    guide={{
      href: "/aides-lecture-bassevision/lunettes-loupes",
      label: "Mieux comprendre les lunettes loupes",
    }}
    productsHeading="Nos lunettes loupes"
    productsIntro="Quatre modèles pour un grossissement léger à modéré, avec des usages très différents."
    products={[CLIP_LUNETTES, LUNETTES_MAXTV, LUNETTES_FOCUS, LUNETTES_ALVA]}
    comparisonTitle="Comparer nos lunettes loupes"
    comparisonIntro="Ces modèles ne sont pas interchangeables : certains sont conçus pour la vision de près et un seul pour la vision de loin."
    comparison={{
      rows: [
        {
          label: "Usage",
          values: ["vision de près", "vision de loin", "vision de près", "vision de près"],
        },
        {
          label: "Grossissement",
          values: [
            "1,4× / 1,7× / 2×",
            "2,1×",
            "environ 2,5×",
            "1× à 3,5×",
          ],
        },
        {
          label: "Distance",
          values: [
            "25 à 50 cm",
            "2 à 5 m",
            "25 à 45 cm",
            "16 à 55,5 cm selon lentille",
          ],
        },
        {
          label: "Réglage par œil",
          values: ["correction conservée", "oui", "oui", "non"],
        },
        {
          label: "Éclairage intégré",
          values: ["non", "non", "non", "oui"],
        },
        { label: "Poids", values: ["14 g", "49 g", "70 g", "75 g"] },
      ],
    }}
    choiceCards={[
      {
        title: "Choisissez le clip pour un petit grossissement ponctuel",
        text: "Le clip convient si votre correction actuelle est utile et que vous souhaitez simplement ajouter un grossissement léger pour lire, signer un document ou réaliser un petit travail de près. Son système relevable évite de retirer constamment l’accessoire.",
        ctaLabel: "Voir le clip lunettes loupe",
        href: "/boutique/clip-lunettes-loupe",
      },
      {
        title: "Choisissez Max-TV pour regarder à plusieurs mètres",
        text: "Max-TV est le seul modèle de cette sélection destiné à la vision de loin. Il peut faciliter la télévision, le théâtre ou une conférence, depuis une position assise ou stable. Il n’est pas adapté à la lecture de près ni à la conduite.",
        ctaLabel: "Voir les Max-TV",
        href: "/boutique/loupe-max-tv",
      },
      {
        title: "Choisissez FOCUS pour une activité de près régulière",
        text: "FOCUS est adaptée aux personnes qui travaillent à une distance comprise entre 25 et 45 cm et souhaitent conserver les deux mains libres. Le réglage indépendant des deux yeux peut améliorer le confort lorsque la correction sphérique diffère d’un œil à l’autre.",
        ctaLabel: "Voir les lunettes FOCUS",
        href: "/boutique/lunettes-loupe-focus",
      },
      {
        title: "Choisissez ALVA pour varier le grossissement et ajouter de la lumière",
        text: "ALVA convient aux travaux de précision dont la distance peut changer. Les lentilles interchangeables permettent d’adapter le grossissement, tandis que l’éclairage intégré aide lorsque la zone de travail manque de lumière.",
        ctaLabel: "Voir la lunette ALVA",
        href: "/boutique/lunettes-loupe-frontale-alva",
      },
    ]}
    benefitsTitle="Pourquoi choisir des lunettes loupes ?"
    benefits={[
      {
        title: "Garder les deux mains libres",
        text: "Le grossissement est porté devant les yeux : on peut tenir un livre, manipuler un objet, coudre ou bricoler sans tenir une loupe.",
      },
      {
        title: "Utiliser une solution ciblée",
        text: "Chaque modèle est conçu pour une distance précise. Une fois bien choisi, il peut devenir très pratique pour une activité régulière et clairement définie.",
      },
      {
        title: "Bénéficier d’un appareil léger",
        text: "Les lunettes loupes restent plus légères et plus simples à transporter qu’un agrandisseur électronique.",
      },
      {
        title: "Compléter d’autres aides visuelles",
        text: "Elles peuvent être utilisées pour un usage particulier, tandis qu’une loupe électronique ou un téléagrandisseur reste disponible pour les textes plus difficiles.",
      },
    ]}
    cautionText="La distance de travail est le premier critère. Des lunettes conçues pour lire à 25 cm ne permettent pas de regarder la télévision, et les Max-TV ne sont pas adaptées à la lecture de près. Les modèles Max-TV et FOCUS ne corrigent pas l’astigmatisme ; les lunettes de vision de loin doivent être utilisées assis ou immobile et ne sont jamais destinées à la conduite."
    guideSectionTitle="Besoin de mieux comprendre les différents modèles ?"
    guideSectionText="Notre guide explique les différences entre lunettes de près, lunettes de loin, clips et modèles éclairants. Il détaille le rôle du grossissement, de la distance de travail, du champ visuel et de la correction optique."
    related={[
      {
        title: "Loupes électroniques",
        text: "Pour un grossissement plus important, un zoom réglable et des modes de forts contrastes.",
        href: "/catalogue-aides-basse-vision/loupes-electroniques",
        label: "Voir les loupes électroniques",
      },
      {
        title: "Lampes basse vision",
        text: "Pour éclairer précisément la lecture, la couture ou le bricolage et améliorer les contrastes.",
        href: "/catalogue-aides-basse-vision/lampes-basse-vision",
        label: "Voir les lampes basse vision",
      },
      {
        title: "Loupes en verre",
        text: "Pour une aide optique simple à tenir ou à poser, sans réglage électronique.",
        href: "/catalogue-aides-basse-vision/loupes-verre",
        label: "Voir les loupes en verre",
      },
    ]}
    faqTitle="Questions fréquentes sur les lunettes loupes"
    faqItems={[
      {
        q: "Quelle différence entre lunettes loupes de près et de loin ?",
        a: "Les modèles de près sont réglés pour une distance courte, généralement comprise entre 16 et 50 cm. Ils servent à lire ou travailler avec les mains. Les Max-TV sont conçues pour une distance de 2 à 5 mètres afin de regarder un écran ou une scène. Un même modèle ne couvre pas correctement ces deux usages.",
      },
      {
        q: "Peut-on porter des lunettes loupes par-dessus ses lunettes de vue ?",
        a: "Le clip est précisément conçu pour être fixé sur une monture existante. Les modèles FOCUS et Max-TV se portent à la place des lunettes habituelles. Pour ALVA, le confort dépend de la morphologie et du mode de port choisi.",
      },
      {
        q: "Comment choisir le grossissement ?",
        a: "Choisissez le plus faible grossissement qui permet d’effectuer l’activité. Un grossissement élevé rapproche la distance de travail et réduit le champ de vision. Pour lire plusieurs lignes ou manipuler un objet, le confort de lecture compte autant que la puissance.",
      },
      {
        q: "Ces lunettes corrigent-elles l’astigmatisme ?",
        a: "Non. Les modèles Max-TV et FOCUS ne corrigent pas l’astigmatisme. Si votre correction cylindrique est importante, demandez conseil avant tout achat ou privilégiez une aide compatible avec vos lunettes correctrices.",
      },
      {
        q: "Peut-on conduire avec les Max-TV ?",
        a: "Non. Les Max-TV sont destinées à une utilisation assise ou immobile, pour regarder un écran ou une scène à distance. Elles ne sont jamais conçues pour la conduite ni pour les déplacements.",
      },
    ]}
    finalCtaTitle="Découvrez nos lunettes loupes"
    finalCtaText="Comparez les quatre modèles pour choisir une aide adaptée à votre distance d’utilisation et à votre activité."
    finalCtaButtons={[
      { label: "Voir le clip lunettes loupe", href: "/boutique/clip-lunettes-loupe" },
      { label: "Voir la lunette ALVA", href: "/boutique/lunettes-loupe-frontale-alva" },
    ]}
  />
);

export default LunettesLoupesCategorie;
