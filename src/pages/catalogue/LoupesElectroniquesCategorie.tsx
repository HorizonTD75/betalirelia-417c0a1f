import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import { LOUPE_AMELIE, LOUPE_CLOVER5 } from "@/data/products/catalogueCategories";

const LoupesElectroniquesCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/loupes-electroniques"
    seoTitle="Loupes électroniques basse vision : modèles | LirElia"
    seoDescription="Comparez les loupes électroniques Amélie et CLOVER 5 : écran, grossissement, contrastes, mobilité et prix pour mieux lire avec une basse vision."
    breadcrumbLabel="Loupes électroniques"
    h1="Loupes électroniques"
    h1Highlight="pour basse vision"
    subtitle="Agrandissez les textes et adaptez les contrastes à votre vision"
    intro="Les loupes électroniques affichent les textes et les images sur un écran lumineux avec un grossissement réglable. Elles peuvent faciliter la lecture du courrier, des notices, des étiquettes, des journaux ou des livres lorsque la loupe optique ne suffit plus. LirElia propose deux modèles complémentaires : la loupe Amélie, très simple à utiliser, et la CLOVER 5, plus complète et facilement transportable."
    guide={{
      href: "/aides-lecture-bassevision/loupes-electroniques",
      label: "Mieux comprendre les loupes électroniques",
    }}
    productsHeading="Nos loupes électroniques"
    productsIntro="Deux modèles pour répondre à des besoins différents : simplicité immédiate ou réglages plus étendus pour la maison et les déplacements."
    products={[LOUPE_AMELIE, LOUPE_CLOVER5]}
    comparisonTitle="Comparer nos loupes électroniques"
    comparisonIntro="La loupe Amélie privilégie la simplicité. La CLOVER 5 propose davantage de grossissements, de contrastes et de possibilités d’utilisation."
    comparison={{
      rows: [
        { label: "Écran", values: ["4,3 pouces / 11 cm", "5 pouces / 12,7 cm"] },
        { label: "Grossissement", values: ["3×, 6× ou 9×", "réglable de 4× à 20×"] },
        {
          label: "Affichages",
          values: [
            "couleurs réelles, contraste inversé",
            "couleurs réelles, jaune/noir, blanc/noir, noir/blanc",
          ],
        },
        {
          label: "Utilisation",
          values: ["tenue à la main", "tenue par la poignée ou posée sur le document"],
        },
        { label: "Gel d’image", values: ["non mise en avant", "oui"] },
        { label: "Autonomie", values: ["batterie rechargeable", "environ 4 heures"] },
        {
          label: "Usage principal",
          values: [
            "lecture simple et ponctuelle",
            "lecture régulière, à domicile et en déplacement",
          ],
        },
      ],
    }}
    choiceCards={[
      {
        title: "Choisissez la loupe Amélie pour une utilisation simple",
        text: "La loupe Amélie convient particulièrement à une personne qui souhaite allumer l’appareil, le poser sur le texte et choisir rapidement entre trois niveaux de grossissement. Elle est adaptée à la lecture du courrier, des notices, des étiquettes et de petits documents, sans avoir à apprendre de nombreux réglages.",
        ctaLabel: "Voir la loupe Amélie",
        href: "/boutique/loupe-amelie",
      },
      {
        title: "Choisissez la CLOVER 5 pour davantage de réglages et de mobilité",
        text: "La CLOVER 5 est plus adaptée si vous souhaitez ajuster précisément le grossissement, tester plusieurs contrastes ou emporter votre loupe pour lire un menu, un prix ou une étiquette. Elle convient également à une lecture plus régulière grâce à son écran plus grand et à son utilisation posée sur le document.",
        ctaLabel: "Voir la CLOVER 5",
        href: "/boutique/loupe-electronique-clover-5",
      },
    ]}
    benefitsTitle="Pourquoi choisir une loupe électronique ?"
    benefits={[
      {
        title: "Un grossissement adaptable",
        text: "Le zoom peut être ajusté selon la taille du texte et votre vision, contrairement à une loupe en verre dont le grossissement reste fixe.",
      },
      {
        title: "Des contrastes plus lisibles",
        text: "Les modes blanc sur noir, noir sur blanc ou jaune sur noir peuvent faciliter la lecture lorsque les contrastes naturels du document sont insuffisants.",
      },
      {
        title: "Une image lumineuse et stable",
        text: "L’écran rétroéclairé et la mise au point automatique offrent une image nette sans dépendre uniquement de l’éclairage ambiant.",
      },
      {
        title: "Une aide polyvalente",
        text: "Courrier, journaux, notices, menus, prix, photos ou petits travaux : une même loupe électronique peut accompagner plusieurs activités du quotidien.",
      },
    ]}
    cautionText="Un grossissement plus élevé ne donne pas toujours une lecture plus confortable. Plus le texte est agrandi, plus la zone visible à l’écran se réduit. La taille de l’écran, la facilité des boutons et la manière de tenir l’appareil sont aussi importantes que le grossissement maximal. Selon votre vision et votre usage, un essai ou un conseil peut éviter un achat inadapté."
    guideSectionTitle="Besoin de mieux comprendre les différents modèles ?"
    guideSectionText="Notre guide explique les différences entre une loupe électronique de poche, transportable ou de bureau. Il présente aussi les critères utiles : taille d’écran, grossissement, contrastes, autonomie et type de lecture."
    related={[
      {
        title: "Téléagrandisseurs",
        text: "Pour lire plus longtemps sur un grand écran, écrire ou remplir des documents avec une installation stable à domicile.",
        href: "/catalogue-aides-basse-vision/teleagrandisseurs",
        label: "Voir les téléagrandisseurs",
      },
      {
        title: "Lampes basse vision",
        text: "Un éclairage bien orienté peut améliorer le contraste du texte et compléter efficacement une loupe électronique.",
        href: "/catalogue-aides-basse-vision/lampes-basse-vision",
        label: "Voir les lampes basse vision",
      },
      {
        title: "Loupes en verre",
        text: "Pour un besoin de grossissement plus modéré, ponctuel et sans batterie.",
        href: "/catalogue-aides-basse-vision/loupes-verre",
        label: "Voir les loupes en verre",
      },
    ]}
    faqTitle="Questions fréquentes sur les loupes électroniques"
    faqItems={[
      {
        q: "Quelle différence entre une loupe électronique et une loupe en verre ?",
        a: "Une loupe en verre propose un grossissement fixe. Une loupe électronique utilise une caméra et un écran pour agrandir davantage le texte, modifier les contrastes et parfois figer une image. Elle demande une alimentation ou une batterie, mais offre généralement plus de réglages et de confort lorsque la basse vision est plus marquée.",
      },
      {
        q: "Quel grossissement choisir ?",
        a: "Le bon grossissement dépend de votre vision et de la taille du texte. Il est préférable de commencer par le niveau le plus faible permettant de lire, afin de conserver un champ de vision assez large. Un grossissement trop fort peut ralentir la lecture en n’affichant que quelques lettres à la fois.",
      },
      {
        q: "Une loupe électronique convient-elle en cas de DMLA ?",
        a: "Elle peut être utile en cas de DMLA, notamment grâce au grossissement et aux modes de forts contrastes. Son efficacité varie toutefois selon la vision restante, la taille du scotome central et l’usage recherché. Elle ne remplace pas le suivi ophtalmologique ni un bilan basse vision.",
      },
      {
        q: "Peut-on emporter une loupe électronique à l’extérieur ?",
        a: "Oui. Les deux modèles sont rechargeables et transportables. La CLOVER 5 est particulièrement adaptée aux déplacements grâce à sa poignée repliable, sa housse et ses réglages étendus. Il faut néanmoins penser à recharger l’appareil avant de partir.",
      },
      {
        q: "Peut-on lire un livre entier avec ces modèles ?",
        a: "Cela dépend du niveau de vision et du confort recherché. Ces loupes peuvent faciliter la lecture de documents courts ou de quelques pages. Pour une lecture longue et quotidienne, un téléagrandisseur ou un écran plus grand peut offrir une posture et un champ de lecture plus confortables.",
      },
    ]}
    finalCtaTitle="Découvrez nos loupes électroniques"
    finalCtaText="Comparez la simplicité de la loupe Amélie et les fonctions plus complètes de la CLOVER 5 pour choisir l’aide la plus adaptée à votre lecture."
    finalCtaButtons={[
      { label: "Découvrir la loupe Amélie", href: "/boutique/loupe-amelie" },
      { label: "Découvrir la CLOVER 5", href: "/boutique/loupe-electronique-clover-5" },
    ]}
  />
);

export default LoupesElectroniquesCategorie;
