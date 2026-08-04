/**
 * Single source of truth for the FAQs that are FULLY VISIBLE on a page.
 *
 * Consumed by:
 *   • the pages themselves (accordion rendering);
 *   • src/lib/structuredData/registry.ts (FAQPage JSON-LD).
 *
 * RULE: only add an entry here when the page really displays every question
 * AND every answer. Never craft a FAQ that exists only in the structured data.
 */

export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQ_BY_ROUTE: Record<string, FaqEntry[]> = {
  "/bilans-bassevision": [
    { q: "Dois-je voir mon ophtalmologiste avant ?", a: "Idéalement oui, car le bilan basse vision s’appuie sur votre diagnostic. Mais si vous n’avez pas de rendez-vous ophtalmologique récent, nous pouvons commencer et vous orienter ensuite." },
    { q: "Le bilan ne sert-il qu’à mieux lire ?", a: "Non. Le bilan basse vision ne concerne pas seulement la lecture. Il aide aussi à mieux comprendre les difficultés rencontrées dans les déplacements, l’éclairage, les contrastes, l’organisation du domicile, l’usage des aides visuelles et, plus largement, l’autonomie au quotidien." },
    { q: "Est-ce remboursé ?", a: "Le bilan basse vision n’est pas un acte médical et n’est pas remboursé par la Sécurité sociale. Certaines mutuelles proposent un forfait « bien-être » ou « prévention » qui peut couvrir une partie. Renseignez-vous auprès de votre complémentaire santé." },
    { q: "Puis-je venir avec un proche ?", a: "Oui, c’est fortement recommandé. L’aidant (conjoint, enfant, proche) peut assister à l’ensemble de la séance et recevoir des conseils adaptés." },
    { q: "Combien de temps dure une séance ?", a: "En moyenne 1 h 15 à 1 h 30, toujours à votre rythme. Le Visiopraticien prend le temps nécessaire." },
    { q: "Quelle est la différence avec un bilan chez l’ophtalmologiste ?", a: "L’ophtalmologiste diagnostique et traite la maladie de l’œil. Le bilan basse vision réalisé par le Visiopraticien LirElia est un état des lieux fonctionnel : il se concentre sur votre quotidien et votre autonomie." }],
  "/aidants": [
    {
      q: "Comment aider un proche malvoyant sans l'infantiliser ?",
      a: "Proposez votre aide sans l'imposer. Demandez toujours à la personne ce qu'elle souhaite faire elle-même. Respectez son rythme et valorisez chaque progrès, même petit. L'objectif est de préserver son autonomie, pas de faire à sa place.",
    },
    {
      q: "DMLA : comment continuer à lire au quotidien ?",
      a: "Plusieurs solutions existent : loupes éclairantes, télé-agrandisseurs, réglages d'accessibilité sur smartphone ou tablette, éclairage adapté. Un bilan basse vision permet de déterminer les aides les plus adaptées à la situation.",
    },
    {
      q: "Quels outils simples mettre en place à la maison ?",
      a: "Commencez par l'éclairage (lampe de lecture orientable), les contrastes (étiquettes contrastées, repères colorés), et l'organisation (rangement fixe, repères tactiles). Ces gestes simples améliorent le quotidien sans tout bouleverser.",
    },
    {
      q: "Faut-il un diagnostic médical avant un bilan basse vision ?",
      a: "Idéalement, un suivi ophtalmologique est recommandé. Mais un bilan basse vision peut être réalisé à tout moment pour évaluer les besoins fonctionnels et proposer des solutions concrètes. Il ne remplace pas le suivi médical.",
    },
    {
      q: "L'aidant peut-il assister au bilan basse vision ?",
      a: "Oui, c'est même fortement recommandé. L'aidant — conjoint, enfant ou proche — reçoit des conseils personnalisés pour accompagner au mieux la personne malvoyante dans son quotidien.",
    },
    {
      q: "Quelles aides financières existent pour les personnes malvoyantes ?",
      a: "Certaines mutuelles proposent des forfaits « bien-être » ou « prévention ». La MDPH peut intervenir pour le financement d'aides techniques. Renseignez-vous auprès de votre complémentaire santé et de votre mairie.",
    },
    {
      q: "Comment sécuriser le domicile d'une personne malvoyante ?",
      a: "Améliorez l'éclairage aux endroits stratégiques (escalier, cuisine, entrée), ajoutez des contrastes visuels sur les marches et les interrupteurs, fixez les tapis et éliminez les obstacles au sol. Des repères tactiles aident aussi à se repérer.",
    },
    {
      q: "Comment préserver mon propre équilibre en tant qu'aidant ?",
      a: "Le rôle d'aidant est exigeant. Accordez-vous des pauses, parlez de vos difficultés à un professionnel ou à une association. Vous n'êtes pas seul(e) : des structures de répit et de soutien existent pour les aidants.",
    },
  ],
  "/contact-conseil": [
    {
      q: "À qui s'adresse ce formulaire ?",
      a: "Ce formulaire s'adresse aux personnes malvoyantes, à leurs proches aidants, et à toute personne qui cherche un premier conseil sur les aides visuelles, l'éclairage, les loupes, les télé-agrandisseurs ou l'intérêt d'un bilan basse vision.",
    },
    {
      q: "Puis-je faire la demande pour un proche ?",
      a: "Oui. Un aidant peut tout à fait remplir ce formulaire pour une personne malvoyante. Nous adapterons ensuite notre orientation à la situation réelle et aux besoins exprimés.",
    },
    {
      q: "Que se passe-t-il après l'envoi du formulaire ?",
      a: "Après réception de votre demande, nous vous recontactons rapidement afin d'échanger sur votre situation et de vous orienter de la façon la plus utile : conseil simple, bilan, aide technique, ou autre solution adaptée.",
    },
    {
      q: "Êtes-vous obligés de proposer un produit ou un bilan ?",
      a: "Non. Notre objectif est d'abord de vous guider de manière utile et honnête. Selon les cas, cela peut conduire vers un bilan, un produit, le Club LirElia, ou simplement vers un conseil ponctuel sans autre démarche.",
    },
  ],
  "/expert-basse-vision-visiopraticien": [
    {
      q: "Qu'est-ce que la basse vision ?",
      a: "La basse vision désigne une baisse importante de la vue qui ne peut pas être entièrement corrigée par des lunettes classiques, des lentilles ou un traitement médical. Elle résulte souvent d'une DMLA, d'un glaucome ou d'autres pathologies oculaires."
    },
    {
      q: "Le Visiopraticien remplace-t-il un ophtalmologiste ?",
      a: "Non. Le suivi médical est indispensable pour diagnostiquer et traiter la pathologie (DMLA, glaucome, cataracte…). Le Visiopraticien LirElia intervient en complément, pour l'adaptation pratique du quotidien et l'autonomie dans la lecture."
    },
    {
      q: "DMLA : quelles solutions pour continuer à lire ?",
      a: "Dans de nombreux cas, la lecture reste possible avec une DMLA. Avec les bonnes aides — loupes adaptées, télé-agrandisseurs, éclairage optimisé, stratégies de lecture — le Visiopraticien LirElia aide à retrouver un confort de lecture."
    },
    {
      q: "À partir de quel moment consulter un Visiopraticien ?",
      a: "Dès que la vision ne permet plus de lire confortablement, d'utiliser un téléphone, de reconnaître des visages ou d'effectuer des tâches quotidiennes sans difficulté. Il n'est pas nécessaire d'attendre une perte totale de vision."
    },
    {
      q: "Quelles aides pour retrouver l'autonomie au quotidien ?",
      a: "Le Visiopraticien évalue votre situation et propose des solutions adaptées : loupes, lampes d'appoint, télé-agrandisseurs, aménagement de l'éclairage et de l'espace, méthodes de lecture adaptées, conseils numériques. L'objectif est de préserver au maximum votre indépendance."
    },
    {
      q: "Le Visiopraticien travaille-t-il avec les aidants ?",
      a: "Oui. Les proches jouent un rôle essentiel. Le bilan peut inclure des conseils spécifiques pour les aidants familiaux, afin qu'ils comprennent mieux la situation et sachent comment accompagner au quotidien."
    },
    {
      q: "Les aides visuelles sont-elles vraiment efficaces ?",
      a: "Oui, à condition qu'elles soient adaptées à la situation précise. Une loupe ou un appareil mal choisi peut être inefficace ou abandonné. L'objectif du bilan basse vision est justement d'éviter ces erreurs et de proposer des solutions réellement utiles."
    },
    {
      q: "La cataracte est-elle concernée ?",
      a: "Lorsque la cataracte est opérée et que des troubles visuels persistent, ou lorsqu'une chirurgie n'est pas possible immédiatement, un accompagnement en basse vision peut être utile pour améliorer le confort visuel."
    }],
  "/livre-dmla-votre-vie-ne-sarrete-pas": [
    {
      q: "Qu'est-ce que la DMLA ?",
      a: "La dégénérescence maculaire liée à l'âge (DMLA) est une maladie de la rétine qui affecte la vision centrale. Elle touche principalement les personnes de plus de 50 ans et peut rendre la lecture, la conduite ou la reconnaissance des visages difficile.",
    },
    {
      q: "Comment continuer à lire avec une basse vision ?",
      a: "Plusieurs solutions existent : loupes optiques ou électroniques, téléagrandisseurs, éclairage adapté, livres en gros caractères, liseuses numériques avec taille de police réglable. Ce livre détaille chaque option pour vous aider à choisir.",
    },
    {
      q: "Ce livre est-il adapté aux personnes malvoyantes ?",
      a: "Oui. Il est imprimé en police agrandie, avec une mise en page aérée et des contrastes élevés. Chaque page est conçue pour être lue confortablement, même avec une basse vision.",
    },
    {
      q: "À qui s'adresse ce livre ?",
      a: "Aux personnes diagnostiquées DMLA, à leurs proches aidants (conjoints, enfants), et aux professionnels de santé (orthoptistes, ergothérapeutes, opticiens) qui souhaitent un outil à recommander.",
    },
    {
      q: "Quelles aides financières existent pour la basse vision ?",
      a: "Le livre détaille les aides disponibles en 2026 : PCH, AAH, APA, CMI, MaPrimeAdapt' (jusqu'à 70 % de prise en charge pour adapter le logement), les mutuelles et les caisses de retraite.",
    },
    {
      q: "Où se procurer ce livre ?",
      a: "Le livre est disponible sur Amazon. Vous pouvez également contacter LirElia pour plus d'informations.",
    },
  ],
  "/livre-aider-proche-dmla": [
    {
      q: "Ce livre remplace-t-il un suivi ophtalmologique ?",
      a: "Non. Ce guide pratique complète le suivi médical de votre proche mais ne s'y substitue pas. Il vous aide à mieux comprendre la DMLA et à accompagner au quotidien, en lien avec les professionnels de santé.",
    },
    {
      q: "Mon proche peut-il aussi lire ce livre ?",
      a: "Absolument. Ce livre est complémentaire de « DMLA – Votre vie ne s'arrête pas ». Les deux ouvrages partagent le même vocabulaire et les mêmes repères pour construire les solutions ensemble.",
    },
    {
      q: "Je suis aide à domicile, ce livre est-il utile pour moi ?",
      a: "Oui. Le livre s'adresse à tous les accompagnants : conjoints, enfants, amis, voisins et professionnels (auxiliaire de vie, aide à domicile). Vous y trouverez des conseils concrets de communication et d'accompagnement.",
    },
    {
      q: "Comment accompagner une personne malvoyante sans l'infantiliser ?",
      a: "Le livre propose des formulations à privilégier, des erreurs fréquentes à éviter et une méthode en trois temps (demander, proposer, vérifier) pour respecter l'autonomie tout en sécurisant le quotidien.",
    },
    {
      q: "Quelles aides financières existent pour aménager le logement ?",
      a: "Le guide détaille les dispositifs disponibles : PCH, APA, CMI, MaPrimeAdapt' et les démarches MDPH, avec des modèles de courriers prêts à l'emploi pour simplifier vos démarches.",
    },
  ],
  "/aides-financieres-basse-vision": [
      {
        q: "Une loupe électronique est-elle remboursée ?",
        a: "Il n’existe pas un remboursement national identique pour toutes les loupes électroniques. La prise en charge dépend du modèle, de son éventuelle inscription sur la Liste des produits et prestations remboursables, de votre situation et des financeurs sollicités. Une demande de PCH ou d’autres financements peut être étudiée.",
      },
      {
        q: "La PCH peut-elle financer un téléagrandisseur ?",
        a: "Un téléagrandisseur peut être présenté comme une aide technique dans un dossier de PCH lorsqu’il répond à un besoin de compensation clairement établi. L’accord, le montant et le reste à charge dépendent toutefois de l’évaluation de la MDPH et du plan de compensation.",
      },
      {
        q: "Puis-je acheter le matériel avant la réponse de la MDPH ?",
        a: "Vérifiez les règles auprès de la MDPH avant tout achat. En pratique, il est recommandé de déposer la demande et d’obtenir une confirmation écrite avant d’acquérir le matériel.",
      },
      {
        q: "Peut-on demander une aide après 60 ans ?",
        a: "Certaines aides restent accessibles après 60 ans, mais les règles diffèrent selon la PCH, l’APA, les caisses de retraite ou MaPrimeAdapt’. La situation doit être étudiée individuellement, notamment selon l’âge auquel les critères du handicap étaient remplis et le niveau de perte d’autonomie.",
      },
      {
        q: "Combien de temps faut-il pour obtenir une aide ?",
        a: "Le délai dépend de l’organisme et de la complexité du dossier. L’évaluation, la recherche de cofinancements, la décision puis la commande du matériel peuvent prendre plusieurs mois. Il est préférable d’anticiper et de prévoir une solution temporaire.",
      },
      {
        q: "Qui peut m’aider à remplir un dossier ?",
        a: "Vous pouvez solliciter la MDPH, un travailleur social, le CCAS de votre commune, une association spécialisée, un centre de basse vision ou, selon le dossier, votre CPAM, votre caisse de retraite, Cap emploi ou le référent handicap de votre établissement.",
      },
    ],
  "/aides-financieres-basse-vision/financer-aide-visuelle": [
    {
      q: "Une loupe électronique est-elle remboursée par l’Assurance Maladie ?",
      a: "Il n’existe pas de remboursement identique pour toutes les loupes électroniques. Il faut vérifier si le modèle possède un code LPP et s’il respecte les conditions prévues. Lorsqu’il n’est pas pris en charge par l’Assurance Maladie, d’autres financements peuvent être recherchés.",
    },
    {
      q: "La PCH peut-elle financer un téléagrandisseur ?",
      a: "Oui, un téléagrandisseur peut être présenté comme une aide technique lorsqu’il répond à un besoin de compensation clairement établi. L’accord et le montant dépendent toutefois de l’évaluation de la MDPH et du plan de compensation.",
    },
    {
      q: "Puis-je acheter le matériel avant la réponse ?",
      a: "Il est préférable de ne pas acheter avant d’avoir vérifié les règles de chaque financeur. Certains organismes exigent que la demande soit déposée, voire acceptée, avant l’achat.",
    },
    {
      q: "Une mutuelle rembourse-t-elle les aides basse vision ?",
      a: "Cela dépend du contrat. Certaines mutuelles prévoient un forfait, un remboursement complémentaire ou un fonds d’action sociale. Demandez une réponse écrite portant sur le modèle précis.",
    },
    {
      q: "Plusieurs aides peuvent-elles être cumulées ?",
      a: "Oui, plusieurs financements peuvent parfois être associés, mais leur total ne peut pas dépasser le prix réel du matériel. Les organismes doivent être informés des autres aides demandées ou obtenues.",
    },
    {
      q: "Où essayer une aide visuelle avant de demander un financement ?",
      a: "Vous pouvez vous adresser à un opticien spécialisé en basse vision, un centre de basse vision, un service de réadaptation, une association ou un professionnel disposant de plusieurs matériels d’essai.",
    },
    {
      q: "Combien de temps les démarches prennent-elles ?",
      a: "Le délai varie selon les organismes. L’évaluation, la recherche des cofinancements, la décision et la commande peuvent prendre plusieurs mois. Il est utile d’anticiper et de prévoir une solution temporaire.",
    },
  ],
  "/catalogue-aides-basse-vision/loupes-verre": [
    {
      q: "Peut-on utiliser une loupe avec ses lunettes habituelles ?",
      a: "Oui, une loupe peut généralement être utilisée avec les lunettes habituelles. Le résultat dépend toutefois de la correction portée, de la vision restante et du grossissement choisi.",
    },
    {
      q: "Quelle est la différence entre une loupe à main et une loupe dôme ?",
      a: "Une loupe à main se tient au-dessus du document et convient bien aux consultations ponctuelles. Une loupe dôme se pose directement sur le texte, ce qui apporte davantage de stabilité et évite d'avoir à maintenir une distance précise.",
    },
    {
      q: "Faut-il choisir le grossissement le plus élevé ?",
      a: "Pas nécessairement. Un grossissement plus fort permet de voir des caractères plus petits, mais réduit généralement la largeur de la zone visible. Il faut rechercher un équilibre entre agrandissement et confort de lecture.",
    },
    {
      q: "Quand préférer une loupe électronique ?",
      a: "Une loupe électronique peut être plus adaptée lorsqu'une loupe en verre ne grossit pas suffisamment ou lorsqu'il devient nécessaire de modifier le contraste, la luminosité ou la taille du texte sur un écran.",
    },
  ],
  "/catalogue-aides-basse-vision/loupes-electroniques": [
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
      ],
  "/catalogue-aides-basse-vision/lunettes-intelligentes": [
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
      ],
  "/catalogue-aides-basse-vision/lampes-basse-vision": [
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
      ],
  "/catalogue-aides-basse-vision/lunettes-loupes": [
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
      ],
  "/catalogue-aides-basse-vision/accessoires": [
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
      ],
};

export const getFaq = (path: string): FaqEntry[] | undefined =>
  FAQ_BY_ROUTE[path.replace(/\/+$/, "") || "/"];
