import CommercialCategoryPage from "@/components/catalogue/CommercialCategoryPage";
import { RAYBAN_META } from "@/data/products/catalogueCategories";

const LunettesIntelligentesCategorie = () => (
  <CommercialCategoryPage
    path="/catalogue-aides-basse-vision/lunettes-intelligentes"
    seoTitle="Lunettes intelligentes pour basse vision | LirElia"
    seoDescription="Découvrez les Ray-Ban Meta évaluées pour la basse vision : lecture vocale ponctuelle, identification d’objets, description de scène et limites à connaître."
    breadcrumbLabel="Lunettes intelligentes"
    h1="Lunettes intelligentes"
    h1Highlight="et basse vision"
    subtitle="Une aide vocale mains libres pour certaines situations du quotidien"
    intro="Les lunettes intelligentes associent une caméra, des micros, des haut-parleurs et un assistant vocal. Elles peuvent apporter une aide ponctuelle pour lire une étiquette, identifier un objet, décrire une scène ou appeler un proche sans sortir son téléphone. Leur intérêt en basse vision reste très dépendant de l’usage, de la connexion et de l’aisance avec les commandes vocales."
    guide={{
      href: "/aides-lecture-bassevision/lunettes-intelligentes",
      label: "Mieux comprendre les lunettes intelligentes",
    }}
    isCommerce={false}
    productsHeading="Notre produit actuellement en évaluation"
    productsIntro="LirElia présente les Ray-Ban Meta à titre informatif. Elles ne sont pas actuellement vendues sur le site et ne remplacent pas une aide basse vision spécialisée."
    products={[RAYBAN_META]}
    choiceCardsTitle="Pour quels usages envisager les Ray-Ban Meta ?"
    choiceCards={[
      {
        title: "Pour lire un texte court sans tenir le téléphone",
        text: "Les lunettes peuvent être intéressantes pour consulter une étiquette, un prix, une affiche, un emballage ou quelques lignes d’un courrier. Le résultat dépend du cadrage, de la lumière, de la qualité d’impression et de la disponibilité de la fonction dans la langue utilisée.",
        ctaLabel: "Voir l’évaluation Ray-Ban Meta",
        href: "/aides-lecture-bassevision/lunettes-intelligentes/ray-ban-meta",
      },
      {
        title: "Pour identifier un objet ou obtenir une description",
        text: "Une commande vocale peut demander le nom d’un produit ou une description générale de la scène. Cette aide peut compléter la vision restante, mais les réponses d’une intelligence artificielle doivent être considérées comme indicatives et vérifiées lorsqu’une erreur aurait des conséquences.",
        ctaLabel: "Voir l’évaluation Ray-Ban Meta",
        href: "/aides-lecture-bassevision/lunettes-intelligentes/ray-ban-meta",
      },
      {
        title: "Pour communiquer les mains libres",
        text: "Les microphones et haut-parleurs permettent d’appeler un proche, dicter un message ou poser une question sans manipuler le smartphone. Cette fonction peut être utile lorsque lire l’écran ou viser une petite icône est difficile.",
        ctaLabel: "Voir l’évaluation Ray-Ban Meta",
        href: "/aides-lecture-bassevision/lunettes-intelligentes/ray-ban-meta",
      },
    ]}
    benefitsTitle="Pourquoi s’intéresser aux lunettes intelligentes ?"
    benefits={[
      {
        title: "Une aide portée sur le visage",
        text: "La caméra suit naturellement l’orientation de la tête. L’utilisateur n’a pas à tenir un smartphone devant un texte ou un objet.",
      },
      {
        title: "Des commandes vocales",
        text: "La voix peut remplacer certaines manipulations tactiles devenues difficiles sur un écran de téléphone.",
      },
      {
        title: "Un format grand public discret",
        text: "Les Ray-Ban Meta ressemblent à des lunettes classiques et peuvent être plus faciles à accepter qu’un équipement visiblement médicalisé.",
      },
      {
        title: "Un complément, pas un remplacement",
        text: "Elles peuvent compléter une loupe électronique, un téléagrandisseur ou une application spécialisée pour des besoins courts et mobiles.",
      },
    ]}
    cautionText="Les Ray-Ban Meta nécessitent un smartphone compatible, l’application Meta AI, un compte utilisateur et, pour de nombreuses fonctions, une connexion Internet. Elles ne proposent pas un grossissement visuel direct et ne sont pas un dispositif médical basse vision. Les descriptions générées par l’intelligence artificielle peuvent être inexactes et ne doivent jamais être utilisées seules pour une décision liée à la sécurité, à la santé ou aux déplacements."
    guideSectionTitle="Besoin de mieux comprendre les lunettes intelligentes ?"
    guideSectionText="Notre guide présente les deux grandes familles de lunettes intelligentes : les modèles grand public avec assistant vocal et les aides électroniques spécialisées pour la basse vision. Il explique leurs usages, leurs limites et les points à vérifier avant un essai."
    related={[
      {
        title: "Loupes électroniques",
        text: "Pour agrandir visuellement un texte, régler le contraste et lire plus confortablement sur un écran dédié.",
        href: "/catalogue-aides-basse-vision/loupes-electroniques",
        label: "Voir les loupes électroniques",
      },
      {
        title: "Téléagrandisseurs",
        text: "Pour la lecture longue, l’écriture et les documents administratifs sur un grand écran stable.",
        href: "/catalogue-aides-basse-vision/teleagrandisseurs",
        label: "Voir les téléagrandisseurs",
      },
      {
        title: "Lunettes loupes",
        text: "Pour un grossissement optique de près ou de loin, sans assistant vocal ni connexion Internet.",
        href: "/catalogue-aides-basse-vision/lunettes-loupes",
        label: "Voir les lunettes loupes",
      },
    ]}
    faqTitle="Questions fréquentes sur les lunettes intelligentes"
    faqItems={[
      {
        q: "Les Ray-Ban Meta peuvent-elles lire un texte à voix haute ?",
        a: "Elles peuvent utiliser leur caméra et l’assistant Meta AI pour interpréter certains textes courts, comme une étiquette, un menu, une affiche ou quelques lignes. La qualité dépend de la lumière, du cadrage, de la connexion et de la fonction disponible au moment de l’utilisation.",
      },
      {
        q: "Peuvent-elles remplacer une loupe électronique ?",
        a: "Non. Elles ne grossissent pas directement l’image devant les yeux. Elles peuvent lire ou décrire ponctuellement, mais une loupe électronique reste mieux adaptée pour suivre visuellement un texte, choisir un contraste et lire plusieurs paragraphes.",
      },
      {
        q: "Faut-il un smartphone et Internet ?",
        a: "Oui, un smartphone compatible, une application et un compte sont nécessaires pour la configuration et l’utilisation de nombreuses fonctions. Plusieurs services d’intelligence artificielle ont également besoin d’une connexion Internet active.",
      },
      {
        q: "Sont-elles adaptées à toutes les personnes malvoyantes ?",
        a: "Non. Elles sont surtout pertinentes pour une personne à l’aise avec les commandes vocales et recherchant une aide ponctuelle. Elles sont moins prioritaires si le besoin principal est un fort grossissement, une lecture longue ou une solution fonctionnant sans compte ni connexion.",
      },
      {
        q: "Les descriptions de l’intelligence artificielle sont-elles toujours exactes ?",
        a: "Non. Elles peuvent comporter des erreurs, omettre un élément ou mal interpréter une scène. Les réponses doivent être vérifiées, particulièrement pour un médicament, un danger, une traversée, une orientation ou toute décision importante.",
      },
      {
        q: "LirElia vend-il actuellement les Ray-Ban Meta ?",
        a: "Non. Le produit est présenté comme une solution prometteuse en cours d’évaluation. La page vise à donner une information factuelle sur ses usages possibles et ses limites pour les personnes malvoyantes.",
      },
    ]}
    finalCtaTitle="Découvrir notre évaluation des Ray-Ban Meta"
    finalCtaText="Consultez la page détaillée pour comprendre ce que ces lunettes peuvent apporter aujourd’hui, les conditions nécessaires et les situations dans lesquelles une aide spécialisée reste préférable."
    finalCtaButtons={[
      {
        label: "Découvrir les Ray-Ban Meta",
        href: "/aides-lecture-bassevision/lunettes-intelligentes/ray-ban-meta",
      },
    ]}
  />
);

export default LunettesIntelligentesCategorie;
