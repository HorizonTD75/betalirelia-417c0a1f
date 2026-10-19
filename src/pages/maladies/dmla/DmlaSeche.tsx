import { Link } from "react-router-dom";
import DmlaChildLayout, { P, H3, Section, KeyPoint, Alert, linkCls, ulCls, olCls } from "@/components/maladies/DmlaChildLayout";

/**
 * Page fille du cocon DMLA — texte intégral validé (lirelia_dmla_fille_seche_2026-10-19.md).
 * JSX statique volontaire (pas de .map sur du contenu) pour le convertisseur HTML.
 */
const DmlaSeche = () => (
  <DmlaChildLayout crumb="DMLA sèche" title="DMLA sèche : symptômes, évolution, traitements et solutions au quotidien">
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto min-w-0">
              <P>La <strong>DMLA sèche</strong>, appelée aussi <strong>DMLA atrophique</strong> lorsqu'elle atteint un stade avancé, est une forme de dégénérescence maculaire liée à l'âge. Elle touche la macula, la partie de la rétine qui sert à voir les détails, lire et reconnaître les visages. Sa progression est souvent lente, mais elle peut entraîner une gêne visuelle importante.</P>
              <P>Comprendre ce qui se passe dans l'œil, respecter le suivi ophtalmologique et adapter ses habitudes permet de mieux faire face aux difficultés. Cette page distingue ce que la médecine peut surveiller de ce que les aides visuelles peuvent faciliter au quotidien.</P>
              <KeyPoint><strong>À retenir :</strong> la DMLA sèche atteint surtout la <strong>vision centrale</strong>. La vision périphérique est généralement conservée. Les lésions de la rétine ne sont pas corrigées par une loupe ou des lunettes ordinaires, mais des solutions peuvent aider à utiliser la vision restante.</KeyPoint>
              <Alert><strong>Attention à tout changement récent :</strong> une nouvelle déformation des lignes, une tache centrale ou une baisse de vision, même chez une personne suivie pour une DMLA sèche, impose de contacter rapidement un ophtalmologiste. Une forme humide peut apparaître ou coexister. Selon l'Assurance Maladie, le bilan doit être réalisé en moins d'une semaine devant des symptômes évocateurs, et une baisse d'acuité chez une personne porteuse de drusen nécessite une consultation dans les 48 heures.</Alert>
            </div>
          </div>
        </section>

        <Section id="qu-est-ce-que-la-dmla-seche" title="Qu'est-ce que la DMLA sèche ?" muted>
          <P>La macula est une petite région située au centre de la rétine. Elle participe à la vision fine : lire des caractères, regarder une photo, identifier une personne ou distinguer un détail à distance.</P>
          <P>Dans la <strong>DMLA atrophique</strong>, certaines cellules indispensables à la vision disparaissent progressivement au niveau de cette région. Les zones concernées ne fonctionnent plus normalement, ce qui réduit la qualité de la vision centrale. À un stade avancé, on parle notamment d'<strong>atrophie géographique</strong>.</P>
          <H3>MLA et DMLA sèche : est-ce la même chose ?</H3>
          <P>Non, il faut distinguer les stades :</P>
          <ul className={ulCls}>
            <li><strong>MLA (maculopathie liée à l'âge)</strong> : un stade précoce, souvent découvert lors d'un examen du fond d'œil. On peut observer des dépôts appelés <em>drusen</em>. La vision peut encore être peu ou pas gênée, et la situation peut rester stable.</li>
            <li><strong>DMLA sèche atrophique</strong> : une forme tardive dans laquelle des cellules de la macula dégénèrent et des zones d'atrophie apparaissent, avec une atteinte de la vision centrale plus marquée.</li>
          </ul>
          <P>Le terme « DMLA sèche » est parfois employé de façon large dans le langage courant. Pour comprendre votre situation, demandez à votre ophtalmologiste <strong>quel stade précis a été constaté</strong> et comment il doit être surveillé.</P>
          <P>Pour une vue d'ensemble des différentes formes, consultez notre <Link to="/maladies-yeux/dmla/" className={linkCls}>page de référence sur la DMLA</Link>.</P>
        </Section>

        <Section id="quels-sont-les-symptomes-d-une-dmla-seche" title="Quels sont les symptômes d'une DMLA sèche ?">
          <P>Les signes sont variables selon le stade et l'emplacement des lésions. Ils peuvent être discrets au début, surtout si un seul œil est atteint.</P>
          <P>Parmi les difficultés possibles :</P>
          <ul className={ulCls}>
            <li>lire de petits caractères devient plus lent et demande davantage d'efforts ;</li>
            <li>distinguer les détails ou reconnaître les visages devient difficile ;</li>
            <li>les contrastes semblent moins marqués et un éclairage mieux adapté devient nécessaire ;</li>
            <li>des lettres paraissent incomplètes ou disparaissent au milieu d'un mot ;</li>
            <li>une zone floue ou manquante apparaît au centre du regard, parfois appelée <em>scotome</em>.</li>
          </ul>
          <P>La DMLA sèche avancée affecte la vision de près <strong>et</strong> de loin. Elle n'agit pas comme une simple presbytie que de nouvelles lunettes suffiraient à corriger.</P>
          <Alert><strong>N'attribuez pas automatiquement une baisse soudaine de vision à votre DMLA sèche.</strong> Une modification rapide doit faire rechercher une complication ou une autre maladie de l'œil.</Alert>
        </Section>

        <Section id="comment-evolue-la-dmla-seche" title="Comment évolue la DMLA sèche ?" muted>
          <P>La progression est souvent lente, sur plusieurs années, mais elle est <strong>très variable d'une personne à l'autre</strong>. L'étendue des zones d'atrophie, leur proximité du centre de la macula et l'atteinte éventuelle de l'autre œil influencent les difficultés rencontrées.</P>
          <P>Une personne peut encore se déplacer sans difficulté majeure grâce à sa vision périphérique tout en ayant beaucoup de mal à lire. À l'inverse, des lésions initialement éloignées du centre peuvent occasionner peu de gêne.</P>
          <H3>La DMLA sèche peut-elle devenir humide ?</H3>
          <P>Oui. Une atteinte néovasculaire, dite <strong>DMLA humide</strong>, peut apparaître au cours de l'évolution. Les deux mécanismes peuvent aussi coexister. Cela ne se produit pas systématiquement, mais explique l'importance d'une surveillance régulière et de l'attention portée aux nouveaux symptômes.</P>
          <P>Découvrez également <Link to="/maladies-yeux/dmla/humide/" className={linkCls}>ce qui caractérise la DMLA humide</Link>.</P>
        </Section>

        <Section id="comment-la-dmla-seche-est-elle-diagnostiquee-et-suivie" title="Comment la DMLA sèche est-elle diagnostiquée et suivie ?">
          <P>Le diagnostic et la classification du stade reposent sur l'examen réalisé par l'ophtalmologiste. Il peut comprendre :</P>
          <ul className={ulCls}>
            <li>un contrôle de l'acuité visuelle, de près et de loin ;</li>
            <li>l'observation du <strong>fond d'œil</strong>, pour examiner la macula ;</li>
            <li>une <strong>tomographie par cohérence optique (OCT)</strong>, imagerie en coupe de la rétine ;</li>
            <li>d'autres examens lorsque le médecin veut préciser les lésions ou rechercher des néovaisseaux.</li>
          </ul>
          <P>La fréquence des consultations dépend de votre état et du suivi proposé. <strong>Même en l'absence de plainte nouvelle, ne supprimez pas les rendez-vous de contrôle.</strong></P>
          <H3>La grille d'Amsler à domicile</H3>
          <P>Cette grille aide à remarquer certaines modifications de la vision centrale. Testez <strong>un œil après l'autre</strong>, avec vos lunettes de près habituelles si vous en portez, en fixant le point central. Les lignes paraissent-elles désormais déformées, interrompues ou masquées ?</P>
          <P>Pour une DMLA diagnostiquée, l'Assurance Maladie recommande une <strong>autosurveillance hebdomadaire</strong>. Une grille normale n'exclut toutefois pas un problème oculaire : elle ne remplace pas les examens médicaux.</P>
        </Section>

        <Section id="existe-t-il-un-traitement-de-la-dmla-seche" title="Existe-t-il un traitement de la DMLA sèche ?" muted>
          <KeyPoint><strong>À la date de vérification de cette page (19 octobre 2026), il n'existe pas de traitement médicamenteux curatif approuvé en France pour la DMLA atrophique avancée.</strong> Cela ne signifie pas qu'il n'y a rien à faire : suivi, prise en charge des facteurs de risque, aides visuelles et réadaptation restent utiles.</KeyPoint>
          <H3>Que faut-il penser des nouveaux traitements annoncés ?</H3>
          <P>Des médicaments visant à ralentir l'extension de l'atrophie géographique ont été autorisés aux États-Unis. Leur statut en Europe est différent : l'Agence européenne des médicaments a confirmé son refus d'autorisation pour <strong>Syfovre (pegcetacoplan)</strong> en 2024 ; la demande concernant <strong>Izelvay (avacincaptad pegol)</strong> a été retirée en 2024.</P>
          <P>Il faut donc distinguer <strong>un essai clinique</strong>, <strong>une autorisation à l'étranger</strong> et <strong>un traitement effectivement autorisé en France</strong>. Les annonces concernant des implants rétiniens ou d'autres technologies expérimentales ne constituent pas des solutions couramment disponibles. Demandez à votre ophtalmologiste ce qui s'applique réellement à votre situation.</P>
          <H3>Les vitamines et compléments alimentaires sont-ils utiles ?</H3>
          <P>Certaines formulations spécifiques, étudiées notamment dans les essais <strong>AREDS2</strong>, peuvent réduire le risque de progression <strong>à certains stades intermédiaires de la dégénérescence maculaire</strong> ou lorsque l'autre œil présente une forme tardive. Ce résultat ne signifie pas que les vitamines guérissent une atrophie déjà installée, ni que tout le monde devrait se supplémenter.</P>
          <P>Les produits, doses et précautions doivent être discutés avec votre ophtalmologiste et, si nécessaire, votre médecin traitant. N'achetez pas de complément présenté comme « traitement miracle de la DMLA ».</P>
          <H3>Quels gestes de prévention conservent leur intérêt ?</H3>
          <P>Éviter le tabac, privilégier une alimentation variée, pratiquer une activité physique adaptée et faire suivre les facteurs cardiovasculaires sont des mesures bénéfiques pour la santé et recommandées dans la prise en charge globale. Elles ne font pas disparaître les lésions existantes.</P>
        </Section>

        <Section id="comment-mieux-lire-avec-une-dmla-seche" title="Comment mieux lire avec une DMLA sèche ?">
          <P>Quand la vision centrale diminue, grossir les caractères peut aider, <strong>mais le grossissement ne suffit pas toujours</strong>. Il faut aussi tenir compte de la taille du champ visible, des contrastes, de l'éclairage et de la fatigue pendant la lecture.</P>
          <P>Voici une démarche simple :</P>
          <ol className={olCls}>
            <li><strong>Identifiez l'activité</strong> qui devient difficile : lire un courrier, une facture, un journal, un roman ou une étiquette.</li>
            <li><strong>Améliorez l'environnement</strong> : éclairage réglable, limitation des reflets, texte suffisamment contrasté.</li>
            <li><strong>Essayez différents modes d'accès</strong> : caractères agrandis sur tablette, loupe optique, loupe électronique ou téléagrandisseur selon le besoin.</li>
            <li><strong>Envisagez la lecture vocale</strong> si le texte agrandi reste trop lent ou fatigant.</li>
          </ol>
          <P>Il n'existe pas de « meilleure loupe DMLA » valable pour tous. Un test avec un document habituel est plus utile qu'un choix fondé seulement sur le grossissement annoncé.</P>
          <P>Pour comparer les familles de matériel, consultez notre <Link to="/aides-lecture-bassevision/" className={linkCls}>guide des aides à la lecture en basse vision</Link>.</P>
        </Section>

        <Section id="conserver-son-autonomie-au-quotidien" title="Conserver son autonomie au quotidien" muted>
          <P>Les adaptations les plus utiles sont souvent concrètes : placer une lampe orientable près du fauteuil, agrandir les caractères du téléphone, utiliser des étiquettes contrastées et garder les objets aux mêmes endroits.</P>
          <P>Lorsque les difficultés deviennent importantes, un <strong>bilan et une réadaptation basse vision</strong> peuvent aider à identifier les activités prioritaires, les stratégies de vision excentrée et les équipements adaptés. Ces démarches complètent les soins ophtalmologiques, sans les remplacer.</P>
          <P><Link to="/bilans-bassevision/" className={linkCls}>LirElia présente ses bilans et conseils en aides visuelles</Link>. Le choix d'un équipement dépend de vos besoins et de votre vision fonctionnelle ; il ne résulte pas du seul diagnostic médical.</P>
        </Section>

        <Section id="faq" title="Questions fréquentes sur la DMLA sèche">
          <H3>La DMLA sèche rend-elle aveugle ?</H3>
          <P>Elle peut altérer fortement la <strong>vision centrale</strong>, mais la vision périphérique reste généralement présente. La gêne peut être très importante pour lire ou reconnaître des visages sans correspondre à une perte totale de toute perception visuelle. D'autres maladies oculaires peuvent toutefois s'ajouter.</P>
          <H3>Peut-on avoir une DMLA sèche sur un seul œil ?</H3>
          <P>Oui. Un œil peut être atteint avant l'autre. Surveiller la vision séparément pour chaque œil aide à repérer un changement masqué lorsque les deux yeux sont ouverts.</P>
          <H3>La DMLA sèche évolue-t-elle toujours vers une DMLA humide ?</H3>
          <P>Non. Une forme humide peut apparaître, mais ce n'est pas une évolution systématique. Toute baisse soudaine de vision ou déformation nouvelle nécessite malgré tout un avis ophtalmologique rapide.</P>
          <H3>Existe-t-il des lunettes spéciales qui soignent la DMLA sèche ?</H3>
          <P>Non. Des lunettes peuvent corriger une myopie ou une presbytie associée ; des aides grossissantes ou électroniques peuvent faciliter certaines tâches. Elles ne réparent pas la macula.</P>
          <H3>Que faire après l'annonce d'une DMLA sèche ?</H3>
          <P>Demandez à l'ophtalmologiste le <strong>stade exact</strong>, le calendrier des contrôles, les signes d'alerte et l'intérêt éventuel de mesures préventives. Notez vos difficultés concrètes de lecture ou de déplacement afin de rechercher des solutions adaptées.</P>
        </Section>

        <Section id="pour-approfondir-un-guide-pratique-sur-la-vie-avec-une-dmla" title="Pour approfondir : un guide pratique sur la vie avec une DMLA" muted>
          <P><strong>DMLA – Votre vie ne s'arrête pas</strong>, de Thierry DUCROS, aborde notamment la compréhension de la maladie, les aides visuelles, l'organisation du quotidien et le maintien de l'autonomie. Il s'agit d'un complément pratique à l'information médicale, et non d'un guide de traitement.</P>
          <P><Link to="/livre-dmla-votre-vie-ne-sarrete-pas/" className={linkCls}>Découvrir le livre sur LirElia</Link>.</P>
        </Section>

        <Section id="sources" title="Sources et informations éditoriales">
          <P>Cette page présente des informations générales et des pistes d'adaptation en basse vision. <strong>Elle ne permet pas de poser un diagnostic, de choisir un traitement ou d'interpréter des examens médicaux.</strong> Ces décisions reviennent au médecin ophtalmologiste.</P>
          <ul className={ulCls}>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/comprendre-dmla" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — Comprendre la DMLA</a></li>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/symptomes-diagnostic" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — Symptômes et diagnostic</a></li>
            <li><a href="https://www.ameli.fr/assure/sante/themes/dmla/dmla-vivre-maladie" target="_blank" rel="noopener noreferrer" className={linkCls}>Assurance Maladie — Vivre avec la DMLA</a></li>
            <li><a href="https://www.inserm.fr/dossier/degenerescence-maculaire-liee-age-dmla/" target="_blank" rel="noopener noreferrer" className={linkCls}>Inserm — Dégénérescence maculaire liée à l'âge</a></li>
            <li><a href="https://www.has-sante.fr/jcms/p_3383781/fr/degenerescence-maculaire-liee-a-l-age" target="_blank" rel="noopener noreferrer" className={linkCls}>HAS — Recommandations DMLA</a></li>
            <li><a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration/nutritional-supplements-age-related-macular-degeneration" target="_blank" rel="noopener noreferrer" className={linkCls}>National Eye Institute — Compléments AREDS2</a></li>
            <li><a href="https://www.ema.europa.eu/en/medicines/human/EPAR/syfovre" target="_blank" rel="noopener noreferrer" className={linkCls}>EMA — Syfovre, décision d'autorisation</a></li>
            <li><a href="https://www.ema.europa.eu/en/medicines/human/EPAR/izelvay" target="_blank" rel="noopener noreferrer" className={linkCls}>EMA — Izelvay, retrait de la demande</a></li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-6"><em>Rédaction : LirElia — conseils pratiques en basse vision. Vérification documentaire : 19 octobre 2026. Toute mise à jour sur les traitements doit être contrôlée avant publication.</em></p>
        </Section>
  </DmlaChildLayout>
);

export default DmlaSeche;
