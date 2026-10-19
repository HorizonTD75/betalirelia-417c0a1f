import { Link } from "react-router-dom";
import DmlaChildLayout, { P, H3, Section, KeyPoint, Alert, linkCls, ulCls, olCls } from "@/components/maladies/DmlaChildLayout";

/**
 * Page fille du cocon DMLA — texte intégral validé (lirelia_dmla_fille_humide_2026-10-19.md).
 * JSX statique volontaire (pas de .map sur du contenu) pour le convertisseur HTML.
 */
const DmlaHumide = () => (
  <DmlaChildLayout crumb="DMLA humide" title="DMLA humide : symptômes, injections et suivi de la vision">
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto min-w-0">
              <P>La <strong>DMLA humide</strong>, également appelée <strong>DMLA exsudative ou néovasculaire</strong>, est une forme de dégénérescence maculaire liée à l'âge qui peut évoluer rapidement. Elle touche la macula, la partie centrale de la rétine indispensable à la lecture, à la reconnaissance des visages et à la perception des détails.</P>
              <P>Contrairement à la forme atrophique avancée, <strong>des traitements existent pour la DMLA humide</strong>. Leur objectif est de freiner l'activité de vaisseaux sanguins anormaux et, selon les situations, de stabiliser ou parfois d'améliorer la vision. La rapidité du diagnostic et la régularité du suivi sont essentielles.</P>
              <KeyPoint><strong>À retenir :</strong> des lignes qui se déforment, une nouvelle tache centrale ou une baisse de vision peuvent être des signes d'alerte. <strong>N'attendez pas un rendez-vous de contrôle déjà prévu.</strong> Contactez rapidement un ophtalmologiste pour organiser un examen.</KeyPoint>
            </div>
          </div>
        </section>

        <Section id="qu-est-ce-que-la-dmla-humide" title="Qu'est-ce que la DMLA humide ?" muted>
          <P>La macula est la zone de la rétine grâce à laquelle nous voyons les détails fins. Dans la DMLA humide, des <strong>vaisseaux sanguins anormaux</strong>, appelés <em>néovaisseaux</em>, se développent sous ou dans la rétine. Fragiles, ils peuvent laisser s'échapper du liquide ou du sang, provoquer un gonflement de la macula et altérer la vision centrale.</P>
          <P>Le mot « humide » décrit ce phénomène de fuite de liquide ; il ne désigne pas un œil qui pleure ou un excès de larmes.</P>
          <P>La maladie peut concerner un seul œil ou les deux. Un œil moins atteint peut masquer les premiers symptômes de l'autre, d'où l'intérêt de vérifier la vision <strong>œil par œil</strong>.</P>
          <H3>Quelle différence avec la DMLA sèche ?</H3>
          <ul className={ulCls}>
            <li><strong>DMLA humide</strong> : développement de néovaisseaux, avec une dégradation visuelle qui peut être rapide. Des traitements par injections intravitréennes peuvent agir sur l'activité de ces vaisseaux.</li>
            <li><strong>DMLA sèche atrophique</strong> : disparition progressive de cellules de la macula, le plus souvent sur plusieurs années. Les options de traitement disponibles sont différentes.</li>
          </ul>
          <P>Les deux mécanismes peuvent se succéder ou coexister. Lire notre page dédiée à la <Link to="/maladies-yeux/dmla/seche/" className={linkCls}>DMLA sèche et à son évolution</Link> ou notre <Link to="/maladies-yeux/dmla/" className={linkCls}>présentation générale de la DMLA</Link>.</P>
        </Section>

        <Section id="quels-symptomes-doivent-alerter" title="Quels symptômes doivent alerter ?">
          <P>Les troubles peuvent apparaître progressivement, mais parfois en quelques jours. Parmi les manifestations possibles :</P>
          <ul className={ulCls}>
            <li>les lignes d'une porte, d'une grille ou d'un texte semblent <strong>ondulées</strong> ;</li>
            <li>les objets ou les visages paraissent déformés ;</li>
            <li>une <strong>tache sombre ou floue</strong> gêne le centre du regard ;</li>
            <li>la lecture devient soudainement plus difficile ;</li>
            <li>la vision centrale baisse, de près comme de loin.</li>
          </ul>
          <P>Ces signes ne sont pas spécifiques à la DMLA : seul un examen ophtalmologique peut en déterminer la cause. Ils doivent néanmoins être pris au sérieux, en particulier si la personne a déjà une maculopathie liée à l'âge (MLA) ou une DMLA diagnostiquée.</P>
          <H3>Quand faut-il consulter ?</H3>
          <Alert><strong>Contactez un ophtalmologiste dès l'apparition d'un symptôme nouveau.</strong> L'Assurance Maladie recommande un bilan en <strong>moins d'une semaine</strong> devant des signes évocateurs de DMLA. Chez une personne déjà porteuse de <em>drusen</em> (MLA), une baisse d'acuité visuelle nécessite une consultation <strong>dans les 48 heures</strong>. En cas de perte visuelle brutale, demandez une orientation ophtalmologique en urgence sans attendre ces délais maximaux.</Alert>
          <P>Ces délais ne sont pas un motif pour attendre volontairement : <strong>plus tôt le problème est évalué, mieux il peut être pris en charge</strong>.</P>
        </Section>

        <Section id="comment-diagnostique-t-on-une-dmla-humide" title="Comment diagnostique-t-on une DMLA humide ?" muted>
          <P>L'ophtalmologiste examine la vision et le fond d'œil, puis recherche les signes de néovascularisation et de liquide dans la rétine. Il peut notamment pratiquer :</P>
          <ul className={ulCls}>
            <li>une mesure de l'<strong>acuité visuelle</strong> ;</li>
            <li>un <strong>fond d'œil</strong> ;</li>
            <li>une <strong>tomographie par cohérence optique (OCT)</strong>, qui montre les couches de la rétine et aide à repérer un œdème ;</li>
            <li>selon les cas, une <strong>angiographie</strong> ou d'autres examens d'imagerie vasculaire.</li>
          </ul>
          <P>L'OCT sert également à suivre l'évolution pendant le traitement. Ni les symptômes racontés par le patient ni une grille d'Amsler ne suffisent, à eux seuls, à poser le diagnostic.</P>
        </Section>

        <Section id="quel-traitement-existe-pour-la-dmla-humide" title="Quel traitement existe pour la DMLA humide ?">
          <P>Le traitement repose principalement sur des injections dans l'œil de médicaments <strong>anti-VEGF</strong>. Le sigle VEGF désigne un facteur impliqué dans la croissance des vaisseaux sanguins. Les traitements qui bloquent son action réduisent le développement et la perméabilité des néovaisseaux anormaux.</P>
          <P>Ces injections peuvent <strong>stabiliser</strong> la vision et parfois permettre une <strong>amélioration</strong>, selon le stade de la maladie et la réponse au traitement. Elles ne réparent pas toutes les lésions déjà constituées et ne constituent pas une guérison définitive.</P>
          <H3>En quoi consiste une injection intravitréenne ?</H3>
          <P>Le médicament est administré à l'intérieur de l'œil, dans le corps vitré, par un ophtalmologiste dans des conditions d'asepsie strictes. L'œil est préalablement anesthésié localement, généralement par des gouttes.</P>
          <P>Le rythme des injections et des contrôles est <strong>personnalisé</strong>. Certaines personnes reçoivent d'abord plusieurs injections rapprochées, puis des traitements espacés selon l'évolution observée à l'OCT et les décisions de leur spécialiste. Il n'existe pas de calendrier unique adapté à tous.</P>
          <Alert><strong>N'interrompez pas vous-même un traitement parce que la vision paraît meilleure.</strong> Une activité de la maladie peut persister ou réapparaître sans symptômes immédiatement évidents.</Alert>
          <H3>Quels résultats attendre ?</H3>
          <P>L'objectif prioritaire est d'éviter ou de limiter une perte supplémentaire de la vision centrale. Une amélioration peut être observée, mais elle n'est <strong>pas garantie</strong>. Le résultat dépend notamment de l'ancienneté des lésions, de la localisation des néovaisseaux, du stade initial et de la réponse individuelle.</P>
          <P>Il est utile de demander à l'ophtalmologiste comment sera évaluée l'efficacité : évolution de l'acuité, images OCT et présence ou absence de liquide.</P>
          <H3>Quelles précautions après une injection ?</H3>
          <P>Les complications graves sont rares, mais une infection à l'intérieur de l'œil nécessite une prise en charge rapide. <strong>Après une injection, contactez en urgence le service ophtalmologique</strong> si apparaissent une douleur croissante, une rougeur importante, une baisse de vision, une gêne marquée à la lumière ou une augmentation inhabituelle des corps flottants.</P>
          <P>Suivez en priorité la fiche de consignes remise par l'équipe soignante.</P>
        </Section>

        <Section id="la-dmla-humide-peut-elle-revenir-apres-un-traitement" title="La DMLA humide peut-elle revenir après un traitement ?" muted>
          <P>Oui. Même après une période de stabilisation, l'activité des néovaisseaux peut réapparaître. C'est pourquoi l'ophtalmologiste adapte la fréquence des visites et, si nécessaire, des injections.</P>
          <P>Il est important de <strong>respecter les rendez-vous</strong>, y compris lorsque la vision semble stable. Signalez rapidement toute évolution entre deux consultations.</P>
          <H3>La grille d'Amsler est-elle utile ?</H3>
          <P>La grille d'Amsler peut aider à repérer une déformation de la vision centrale. Utilisez-la avec vos lunettes habituelles pour voir de près et testez chaque œil séparément. Dans le cadre d'une DMLA diagnostiquée, l'Assurance Maladie recommande une surveillance à domicile <strong>chaque semaine</strong>, selon les conseils médicaux.</P>
          <P>Une grille d'Amsler rassurante ne remplace pas une consultation ni l'OCT. Tout changement nouveau justifie un contact rapide avec l'ophtalmologiste.</P>
        </Section>

        <Section id="peut-on-continuer-a-lire-et-a-vivre-normalement" title="Peut-on continuer à lire et à vivre normalement ?">
          <P>La gêne varie beaucoup. Certaines personnes conservent une lecture relativement confortable après stabilisation ; d'autres ont besoin d'adaptations, même lorsque le traitement médical est bien conduit.</P>
          <P>Selon les difficultés, on peut essayer :</P>
          <ul className={ulCls}>
            <li>une augmentation de la taille des caractères sur téléphone ou tablette ;</li>
            <li>un <strong>éclairage réglable</strong>, en limitant les reflets ;</li>
            <li>des supports de lecture avec davantage de contraste ;</li>
            <li>une aide grossissante, une loupe électronique ou un téléagrandisseur après essai ;</li>
            <li>la <strong>lecture vocale</strong> lorsque la lecture visuelle est devenue trop fatigante.</li>
          </ul>
          <P>Une aide visuelle <strong>ne traite pas les néovaisseaux</strong> et ne remplace jamais les injections prescrites. Son rôle est de faciliter les activités que la baisse de vision rend difficiles.</P>
          <P>LirElia présente les différentes solutions dans son <Link to="/aides-lecture-bassevision/" className={linkCls}>guide des aides à la lecture en basse vision</Link>. Un <Link to="/bilans-bassevision/" className={linkCls}>bilan des besoins visuels</Link> peut aider à orienter les essais d'équipements, en complément du suivi ophtalmologique.</P>
        </Section>

        <Section id="comment-accompagner-un-proche-atteint-de-dmla-humide" title="Comment accompagner un proche atteint de DMLA humide ?" muted>
          <P>Les consultations et les injections peuvent être fatigantes sur le plan pratique et émotionnel. L'aide la plus utile consiste souvent à organiser les déplacements, à noter les questions avant le rendez-vous, à faciliter l'accès aux documents et à respecter les choix de la personne.</P>
          <P>Évitez de promettre un résultat visuel ou de décider à sa place. Demandez-lui plutôt : « Qu'est-ce qui est difficile aujourd'hui, et comment puis-je vous aider ? »</P>
          <P>Pour approfondir cet aspect, découvrez les <Link to="/aidants/" className={linkCls}>ressources LirElia pour les proches aidants</Link> et le guide <strong>DMLA – Aider un proche sans s'épuiser</strong> : <Link to="/livre-aider-proche-dmla/" className={linkCls}>présentation du livre</Link>.</P>
        </Section>

        <Section id="faq" title="Questions fréquentes sur la DMLA humide">
          <H3>La DMLA humide est-elle plus grave que la DMLA sèche ?</H3>
          <P>Elle peut évoluer <strong>plus rapidement en l'absence de traitement</strong>, mais les situations individuelles diffèrent. La DMLA sèche avancée peut elle aussi entraîner une perte importante de vision centrale. Seul l'ophtalmologiste peut préciser le pronostic d'un œil donné.</P>
          <H3>Les injections dans l'œil sont-elles toujours nécessaires ?</H3>
          <P>Les anti-VEGF sont le traitement principal de nombreuses DMLA humides actives, mais la stratégie dépend des lésions et du bilan. Le spécialiste indique si des injections sont nécessaires, à quel rythme et avec quel suivi.</P>
          <H3>Une injection suffit-elle pour guérir une DMLA humide ?</H3>
          <P>En général, non. La prise en charge comporte souvent plusieurs injections et des contrôles répétés. Le but est de contrôler l'activité de la maladie, pas de promettre une guérison définitive.</P>
          <H3>Peut-on avoir une DMLA humide sur un seul œil ?</H3>
          <P>Oui. L'autre œil peut ne pas être atteint ou présenter un stade différent. Cela justifie la surveillance séparée de chaque œil.</P>
          <H3>Faut-il arrêter de lire ou d'utiliser un écran ?</H3>
          <P>Il n'y a pas de raison générale d'interdire la lecture ou les écrans à cause d'une DMLA humide. Le confort visuel peut cependant demander des pauses, un agrandissement ou un autre support. Les restrictions individuelles éventuelles, notamment autour d'une injection, sont précisées par l'équipe médicale.</P>
        </Section>

        <Section id="pour-en-savoir-plus-sur-la-dmla" title="Pour en savoir plus sur la DMLA" muted>
          <P>Retrouvez notre <Link to="/maladies-yeux/dmla/" className={linkCls}>guide général : DMLA, symptômes, traitements et solutions pour mieux vivre</Link>. Il explique également comment préserver son autonomie lorsque la vision centrale diminue.</P>
        </Section>

        <Section id="sources" title="Sources et informations éditoriales">
          <P>Cette page est informative et ne remplace pas une consultation médicale. <strong>LirElia n'établit pas de diagnostic et ne prescrit pas de traitement.</strong> Seul l'ophtalmologiste peut interpréter les examens et proposer une prise en charge.</P>
          <ul className={ulCls}>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/symptomes-diagnostic" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — Symptômes et diagnostic</a></li>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/dmla-humide-traitement" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — DMLA humide : traiter les néovaisseaux</a></li>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/dmla-vivre-maladie" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — Vivre avec la DMLA</a></li>
            <li><a href="https://www.inserm.fr/dossier/degenerescence-maculaire-liee-age-dmla/" target="_blank" rel="noopener noreferrer" className={linkCls}>Inserm — Comprendre la DMLA</a></li>
            <li><a href="https://www.has-sante.fr/jcms/p_3383781/fr/degenerescence-maculaire-liee-a-l-age" target="_blank" rel="noopener noreferrer" className={linkCls}>HAS — Recommandations DMLA</a></li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-6"><em>Rédaction : LirElia — conseils pratiques en basse vision. Vérification documentaire : 19 octobre 2026. Les informations relatives aux traitements doivent être revues lors des mises à jour réglementaires.</em></p>
        </Section>
  </DmlaChildLayout>
);

export default DmlaHumide;
