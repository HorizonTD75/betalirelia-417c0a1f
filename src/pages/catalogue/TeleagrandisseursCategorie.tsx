import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import { SOURIS_VERA, MEZZO_FOCUS } from "@/data/products/catalogueCategories";

const TeleagrandisseursCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/teleagrandisseurs"
    seoTitle="Téléagrandisseurs basse vision à comparer | LirElia"
    seoDescription="Comparez la souris loupe VERA et le téléagrandisseur Mezzo Focus : écran, grossissement, contrastes, confort de lecture et prix pour la maison."
    breadcrumbLabel="Téléagrandisseurs"
    h1="Téléagrandisseurs"
    h1Highlight="pour basse vision"
    subtitle="Lire sur un grand écran avec un grossissement et des contrastes adaptés"
    intro="Les téléagrandisseurs utilisent une caméra pour afficher un document agrandi sur un écran. Ils peuvent faciliter la lecture d’un journal, d’un courrier ou d’une ordonnance et, selon le modèle, permettre d’écrire ou de remplir un formulaire. LirElia propose une solution économique utilisant votre téléviseur et un téléagrandisseur de bureau complet pour un usage régulier."
    guide={{
      href: "/aides-lecture-bassevision/tele-agrandisseurs",
      label: "Mieux comprendre les téléagrandisseurs",
    }}
    productsHeading="Nos téléagrandisseurs"
    productsIntro="Deux solutions très différentes par leur équipement, leur encombrement et leur niveau de confort."
    products={[SOURIS_VERA, MEZZO_FOCUS]}
    comparisonTitle="Comparer nos téléagrandisseurs"
    comparisonIntro="VERA constitue une solution compacte utilisant un écran existant. Le Mezzo Focus forme un poste de lecture complet et plus confortable pour un usage fréquent."
    comparison={{
      rows: [
        {
          label: "Écran",
          values: ["téléviseur de l’utilisateur", "écran intégré de 20 ou 24 pouces"],
        },
        {
          label: "Grossissement",
          values: [
            "15× à 60× sur TV 50 cm",
            "environ 1,2× à 50× selon version et réglages",
          ],
        },
        {
          label: "Affichages",
          values: [
            "couleurs, blanc/noir, noir/blanc",
            "couleurs naturelles et forts contrastes",
          ],
        },
        {
          label: "Mise au point",
          values: ["caméra intégrée", "caméra Full HD avec autofocus débrayable"],
        },
        {
          label: "Lecture",
          values: [
            "déplacement manuel de la souris",
            "document déplacé à la main ou sur plateau",
          ],
        },
        {
          label: "Écriture sous caméra",
          values: ["limitée", "oui, selon le plateau choisi"],
        },
        {
          label: "Mobilité",
          values: [
            "très compacte, reliée au téléviseur",
            "version 20 pouces pliable, usage principalement fixe",
          ],
        },
      ],
    }}
    choiceCards={[
      {
        title: "Choisissez VERA pour utiliser votre téléviseur à moindre coût",
        text: "VERA convient si vous possédez déjà un écran adapté et souhaitez surtout lire des journaux, des courriers, des ordonnances ou regarder des photos. Elle demande de faire glisser la souris sur le document et de disposer d’une connexion compatible avec le téléviseur.",
        ctaLabel: "Voir la souris VERA",
        href: "/boutique/souris-loupe-electronique-vera",
      },
      {
        title: "Choisissez Mezzo Focus pour lire et écrire régulièrement",
        text: "Le Mezzo Focus est plus adapté à une personne qui souhaite un poste dédié, stable et confortable. Son écran intégré, ses trois commandes et ses plateaux en option facilitent la lecture prolongée, l’écriture, les formulaires et les activités réalisées sur une table.",
        ctaLabel: "Voir le Mezzo Focus",
        href: "/boutique/teleagrandisseur-mezzo-focus",
      },
    ]}
    benefitsTitle="Pourquoi choisir un téléagrandisseur ?"
    benefits={[
      {
        title: "Un grand champ de lecture",
        text: "L’écran permet de visualiser davantage de texte qu’avec une loupe optique puissante et de conserver une image nette à différents niveaux de zoom.",
      },
      {
        title: "Des contrastes personnalisables",
        text: "Les modes de forts contrastes peuvent faciliter la lecture lorsque le texte imprimé manque de netteté ou que la sensibilité aux contrastes est réduite.",
      },
      {
        title: "Une posture plus confortable",
        text: "Le document reste posé sur une table ou sur les genoux tandis que l’image est affichée à une hauteur plus naturelle pour le regard.",
      },
      {
        title: "Une aide polyvalente",
        text: "Lire, écrire, remplir un formulaire, faire des mots croisés ou regarder des photographies : un téléagrandisseur peut devenir un poste polyvalent à domicile.",
      },
    ]}
    cautionText="VERA dépend de votre téléviseur, de sa taille, de son emplacement et de sa connectique. Un adaptateur HDMI peut être nécessaire avec un téléviseur récent. Le Mezzo Focus demande une place stable sur une table ou un bureau et un conseil préalable est recommandé pour choisir une configuration proportionnée à votre vision et à vos activités."
    guideSectionTitle="Besoin de mieux comprendre les différents modèles ?"
    guideSectionText="Notre guide présente les téléagrandisseurs de bureau, les modèles transportables et les caméras reliées à un téléviseur. Il explique les critères de choix : écran, plateau, grossissement, contrastes, place disponible et fréquence d’utilisation."
    related={[
      {
        title: "Loupes électroniques",
        text: "Pour consulter des textes courts à domicile ou en déplacement avec un appareil compact et rechargeable.",
        href: "/catalogue-aides-basse-vision/loupes-electroniques",
        label: "Voir les loupes électroniques",
      },
      {
        title: "Lampes basse vision",
        text: "Pour mieux éclairer le document et compléter une aide optique ou électronique.",
        href: "/catalogue-aides-basse-vision/lampes-basse-vision",
        label: "Voir les lampes basse vision",
      },
      {
        title: "Lunettes loupes",
        text: "Pour certains usages ciblés de près ou de loin, avec les mains libres et sans écran.",
        href: "/catalogue-aides-basse-vision/lunettes-loupes",
        label: "Voir les lunettes loupes",
      },
    ]}
    faqTitle="Questions fréquentes sur les téléagrandisseurs"
    faqItems={[
      {
        q: "Quelle différence entre un téléagrandisseur et une loupe électronique ?",
        a: "Une loupe électronique portable possède généralement un écran plus petit et se transporte facilement. Un téléagrandisseur offre un écran plus grand et une installation plus stable, mieux adaptée à la lecture longue, à l’écriture et aux documents de grand format. La souris VERA constitue une solution intermédiaire en utilisant un téléviseur existant.",
      },
      {
        q: "Peut-on écrire avec un téléagrandisseur ?",
        a: "Oui avec un modèle de bureau conçu pour laisser un espace sous la caméra, comme le Mezzo Focus. Un plateau adapté facilite le déplacement du document et le positionnement d’un stylo. Avec VERA, l’usage est surtout orienté vers la lecture et la consultation d’images.",
      },
      {
        q: "Quelle taille d’écran choisir ?",
        a: "Un grand écran offre une image plus confortable et peut afficher davantage de texte, mais il demande plus de place. Le choix entre 20 et 24 pouces dépend de votre vision, de la distance de lecture et de l’espace disponible sur le bureau.",
      },
      {
        q: "Un fort grossissement est-il toujours préférable ?",
        a: "Non. Un très fort grossissement réduit la quantité de texte visible et oblige à déplacer davantage le document. Le meilleur réglage est le plus faible qui permet une lecture suffisamment nette et fluide.",
      },
      {
        q: "La souris VERA fonctionne-t-elle avec tous les téléviseurs ?",
        a: "Elle existe avec une connexion vidéo Cinch ou avec un adaptateur HDMI. Il faut vérifier les entrées disponibles sur votre téléviseur avant de choisir la version. La taille de l’écran influence également le grossissement obtenu.",
      },
      {
        q: "Faut-il essayer un téléagrandisseur avant l’achat ?",
        a: "Un essai est particulièrement utile pour un téléagrandisseur de bureau, car le confort dépend de la vision, de la posture, du plateau et de la facilité des commandes. Pour VERA, il faut surtout vérifier la connectique et l’organisation de l’espace autour du téléviseur.",
      },
    ]}
    finalCtaTitle="Découvrez nos téléagrandisseurs"
    finalCtaText="Comparez la solution compacte VERA et le poste de lecture Mezzo Focus selon votre budget, votre écran et la fréquence de vos lectures."
    finalCtaButtons={[
      { label: "Découvrir la souris VERA", href: "/boutique/souris-loupe-electronique-vera" },
      {
        label: "Découvrir le Mezzo Focus",
        href: "/boutique/teleagrandisseur-mezzo-focus",
      },
    ]}
  />
);

export default TeleagrandisseursCategorie;
