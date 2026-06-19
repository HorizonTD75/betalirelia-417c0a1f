import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-foreground leading-relaxed mb-4">{children}</p>
);
const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
    {children}
  </h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">{children}</h3>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-foreground leading-relaxed">
    {children}
  </ul>
);
const Mail = () => (
  <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">
    contact@lirelia.fr
  </a>
);

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Politique de confidentialité | LirElia"
        description="Politique de confidentialité LirElia : données collectées, finalités, bases légales, conservation, droits RGPD et contact pour exercer vos droits."
        canonicalPath="/politique-de-confidentialite"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <article className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Politique de confidentialité de LirElia
            </h1>
            <p className="text-base text-muted-foreground italic mb-8">
              Dernière mise à jour : 19 juin 2026
            </p>

            <P>
              La présente politique explique comment LirElia collecte, utilise, conserve et protège les données personnelles des visiteurs, prospects, clients, bénéficiaires de bilans, participants au Club LirElia et utilisateurs du site <strong>LirElia.fr</strong>.
            </P>
            <P>
              Elle s'applique notamment à la navigation sur le site, aux formulaires de contact et de prise de rendez-vous, aux demandes de conseil, aux commandes, aux bilans basse vision, au service après-vente et aux inscriptions au Club LirElia.
            </P>

            <H2>1. Responsable du traitement</H2>
            <P>Le responsable des traitements de données personnelles réalisés au moyen du site est :</P>
            <P>
              <strong>HORIZON TD</strong>, société par actions simplifiée<br />
              Siège social : <strong>2 rue Pierre Louÿs, 75016 Paris, France</strong><br />
              SIREN : <strong>840 698 039</strong><br />
              Adresse électronique : <Mail /><br />
              Téléphone : <strong>07 68 47 42 35</strong>
            </P>
            <P>LirElia est une marque et un nom commercial exploités par HORIZON TD.</P>

            <H2>2. Principes appliqués</H2>
            <P>LirElia s'engage à :</P>
            <UL>
              <li>ne collecter que les données utiles aux finalités annoncées ;</li>
              <li>informer clairement les personnes concernées ;</li>
              <li>traiter les données de manière loyale, licite et transparente ;</li>
              <li>limiter l'accès aux seules personnes autorisées ;</li>
              <li>conserver les informations pendant une durée proportionnée ;</li>
              <li>mettre en œuvre des mesures de sécurité adaptées ;</li>
              <li>respecter les choix et les droits des utilisateurs.</li>
            </UL>

            <H2>3. Données personnelles susceptibles d'être collectées</H2>

            <H3>3.1 Données d'identification et de contact</H3>
            <P>Selon le service utilisé, LirElia peut collecter :</P>
            <UL>
              <li>le nom et le prénom ;</li>
              <li>l'adresse électronique ;</li>
              <li>le numéro de téléphone ;</li>
              <li>l'adresse postale, de facturation ou de livraison ;</li>
              <li>la qualité de la personne : personne concernée, proche ou aidant ;</li>
              <li>les informations nécessaires pour répondre à une demande.</li>
            </UL>

            <H3>3.2 Données fournies dans les formulaires</H3>
            <P>Les formulaires peuvent comprendre :</P>
            <UL>
              <li>le sujet de la demande ;</li>
              <li>le type de bilan ou de prestation souhaité ;</li>
              <li>le produit ou la catégorie de produit concerné ;</li>
              <li>le contenu d'un message ;</li>
              <li>la description d'une difficulté quotidienne ;</li>
              <li>les créneaux ou sessions choisis ;</li>
              <li>les thèmes d'intérêt ;</li>
              <li>une demande d'aide pour utiliser Zoom ;</li>
              <li>les informations nécessaires à un retour, une garantie, une réclamation ou un service après-vente.</li>
            </UL>
            <P>Les champs obligatoires sont signalés dans les formulaires. Les autres champs sont facultatifs.</P>
            <P>Lorsque les informations obligatoires ne sont pas fournies, LirElia peut ne pas être en mesure de traiter la demande ou d'exécuter le service demandé.</P>

            <H3>3.3 Données relatives à la situation visuelle ou à la santé</H3>
            <P>Dans le cadre d'une demande de conseil, d'un bilan basse vision ou d'une inscription au Club LirElia, une personne peut choisir de communiquer des informations concernant :</P>
            <UL>
              <li>une déficience ou une difficulté visuelle ;</li>
              <li>une DMLA, un glaucome, une cataracte ou une autre affection visuelle ;</li>
              <li>les conséquences de cette situation dans la vie quotidienne ;</li>
              <li>des difficultés de lecture, de déplacement ou d'utilisation d'un équipement ;</li>
              <li>les aides techniques déjà utilisées ou envisagées.</li>
            </UL>
            <P>Ces informations peuvent constituer des <strong>données concernant la santé</strong>, qui bénéficient d'une protection renforcée au titre du Règlement général sur la protection des données, ou RGPD.</P>
            <P>LirElia demande de ne transmettre que les informations strictement nécessaires. Il est déconseillé d'envoyer spontanément un dossier médical complet, une ordonnance ou un compte rendu médical.</P>
            <P>LirElia ne réalise pas de diagnostic médical et ne constitue pas de dossier médical au sens du Code de la santé publique.</P>

            <H3>3.4 Données relatives aux commandes et aux paiements</H3>
            <P>Lors d'un achat, les données suivantes peuvent notamment être traitées :</P>
            <UL>
              <li>l'identité et les coordonnées du client ;</li>
              <li>l'adresse de facturation et de livraison ;</li>
              <li>le produit ou service commandé ;</li>
              <li>le montant, la date et la référence de la transaction ;</li>
              <li>le statut du paiement ;</li>
              <li>les informations relatives à la livraison ;</li>
              <li>les échanges concernant la commande, un retour, un remboursement ou une garantie.</li>
            </UL>
            <P>Les paiements en ligne peuvent être réalisés au moyen des services de <strong>Stripe</strong>. Les données bancaires sont saisies et traitées directement par ce prestataire. LirElia n'a pas accès au numéro complet de la carte bancaire ni à son cryptogramme.</P>

            <H3>3.5 Données collectées lors d'un bilan ou d'un accompagnement</H3>
            <P>LirElia peut conserver des notes strictement nécessaires pour :</P>
            <UL>
              <li>comprendre les besoins exprimés ;</li>
              <li>préparer et réaliser le bilan ou l'accompagnement ;</li>
              <li>assurer le suivi de la prestation ;</li>
              <li>formuler des recommandations pratiques ;</li>
              <li>conseiller une aide technique ou une orientation adaptée.</li>
            </UL>
            <P>Ces notes sont limitées aux besoins fonctionnels et pratiques de l'accompagnement. Elles ne remplacent pas un dossier médical.</P>

            <H3>3.6 Données liées au Club LirElia</H3>
            <P>Pour organiser les visioconférences du Club LirElia, les données suivantes peuvent être traitées :</P>
            <UL>
              <li>l'identité et les coordonnées des participants ;</li>
              <li>la session choisie ;</li>
              <li>les thèmes préférés ;</li>
              <li>les demandes d'assistance à la connexion ;</li>
              <li>les informations nécessaires à l'envoi du lien et des rappels ;</li>
              <li>l'image et la voix lorsque le participant active volontairement sa caméra ou son microphone.</li>
            </UL>
            <P>Les sessions ne sont pas enregistrées par LirElia, sauf information préalable claire et recueil de l'accord nécessaire.</P>
            <P>Chaque participant reste responsable des informations qu'il choisit de partager pendant une réunion. Il lui est demandé de respecter la confidentialité des échanges et de ne pas enregistrer, reproduire ou diffuser les propos, images ou données concernant les autres participants.</P>

            <H3>3.7 Données techniques et de navigation</H3>
            <P>Lors de la consultation du site, certaines informations techniques peuvent être traitées :</P>
            <UL>
              <li>l'adresse IP ;</li>
              <li>le type d'appareil ;</li>
              <li>le navigateur et le système d'exploitation ;</li>
              <li>la date et l'heure de connexion ;</li>
              <li>les pages visitées ;</li>
              <li>la provenance de la visite ;</li>
              <li>les interactions avec les pages ;</li>
              <li>les journaux techniques, erreurs et événements de sécurité ;</li>
              <li>les préférences relatives aux cookies.</li>
            </UL>
            <P>Les données issues d'outils de mesure d'audience ne sont collectées qu'en fonction des choix exprimés par l'utilisateur lorsque son consentement est requis.</P>

            <H2>4. Finalités et bases légales des traitements</H2>

            <H3>4.1 Répondre aux demandes de contact et de conseil</H3>
            <P>Les données sont utilisées pour prendre connaissance de la demande, répondre à la personne et l'orienter vers une solution adaptée.</P>
            <P>Le traitement repose, selon le contexte, sur :</P>
            <UL>
              <li>l'exécution de mesures précontractuelles demandées par la personne ;</li>
              <li>l'intérêt légitime de LirElia à répondre aux demandes reçues.</li>
            </UL>
            <P>Lorsque le message contient des données relatives à la santé, leur traitement repose également sur le <strong>consentement explicite</strong> de la personne concernée.</P>

            <H3>4.2 Organiser les rendez-vous, bilans et accompagnements</H3>
            <P>Les données sont utilisées pour :</P>
            <UL>
              <li>enregistrer et confirmer une demande de rendez-vous ;</li>
              <li>déterminer la prestation demandée ;</li>
              <li>préparer, réaliser et suivre un bilan ou un accompagnement ;</li>
              <li>contacter la personne dans le cadre du service.</li>
            </UL>
            <P>Le traitement repose sur l'exécution de mesures précontractuelles ou du contrat conclu avec le client.</P>
            <P>Le traitement de données relatives à la santé repose également, lorsque cela est nécessaire, sur le consentement explicite de la personne concernée.</P>

            <H3>4.3 Gérer les commandes, paiements et livraisons</H3>
            <P>Les données sont utilisées pour :</P>
            <UL>
              <li>enregistrer et exécuter les commandes ;</li>
              <li>traiter ou vérifier les paiements ;</li>
              <li>préparer et livrer les produits ;</li>
              <li>envoyer les confirmations et informations de suivi ;</li>
              <li>gérer les retours, remboursements, garanties et réclamations ;</li>
              <li>respecter les obligations comptables et fiscales ;</li>
              <li>prévenir les fraudes et défendre les droits de LirElia.</li>
            </UL>
            <P>Ces traitements reposent sur :</P>
            <UL>
              <li>l'exécution du contrat ;</li>
              <li>le respect d'obligations légales ;</li>
              <li>l'intérêt légitime de LirElia à sécuriser ses transactions et défendre ses droits.</li>
            </UL>

            <H3>4.4 Organiser le Club LirElia</H3>
            <P>Les données sont utilisées pour :</P>
            <UL>
              <li>gérer les inscriptions ;</li>
              <li>envoyer les invitations, liens de connexion et rappels ;</li>
              <li>organiser et modérer les sessions ;</li>
              <li>fournir une assistance technique ;</li>
              <li>informer les personnes des sessions qu'elles ont demandé à suivre.</li>
            </UL>
            <P>Le traitement repose sur l'exécution du service demandé.</P>
            <P>Lorsque l'inscription ou les échanges révèlent une information relative à une déficience visuelle ou à la santé, le traitement repose également sur le consentement explicite de la personne concernée.</P>

            <H3>4.5 Assurer le service après-vente</H3>
            <P>Les données sont utilisées pour traiter :</P>
            <UL>
              <li>les demandes d'assistance ;</li>
              <li>les retours et remboursements ;</li>
              <li>les réclamations ;</li>
              <li>les garanties ;</li>
              <li>les éventuels différends.</li>
            </UL>
            <P>Le traitement repose sur l'exécution du contrat, le respect des obligations légales et l'intérêt légitime de LirElia à assurer la qualité de son service et la défense de ses droits.</P>

            <H3>4.6 Envoyer des communications d'information ou commerciales</H3>
            <P>LirElia peut envoyer des informations relatives à ses actualités, produits, services, événements ou formations :</P>
            <UL>
              <li>lorsque la personne a expressément demandé à les recevoir ;</li>
              <li>ou, dans les cas autorisés par la réglementation, à ses clients pour des produits ou services analogues.</li>
            </UL>
            <P>Chaque communication non indispensable au service comporte un moyen simple de s'opposer aux envois futurs.</P>

            <H3>4.7 Mesurer l'audience et améliorer le site</H3>
            <P>Sous réserve des préférences de cookies, LirElia peut utiliser des outils tels que <strong>Ahrefs Analytics</strong> et <strong>Microsoft Clarity</strong> pour :</P>
            <UL>
              <li>mesurer la fréquentation ;</li>
              <li>comprendre les parcours de navigation ;</li>
              <li>détecter des difficultés d'utilisation ;</li>
              <li>améliorer l'ergonomie et l'accessibilité ;</li>
              <li>corriger des erreurs techniques ;</li>
              <li>évaluer la performance des contenus.</li>
            </UL>
            <P>Lorsque la réglementation l'exige, ces outils ne sont activés qu'après le consentement de l'utilisateur.</P>

            <H3>4.8 Sécuriser le site</H3>
            <P>Certaines données techniques peuvent être traitées pour prévenir les intrusions, détecter les erreurs, lutter contre les abus et assurer la disponibilité du site.</P>
            <P>Ce traitement repose sur l'intérêt légitime de HORIZON TD à protéger son site, ses utilisateurs et ses systèmes d'information.</P>

            <H2>5. Consentement au traitement des données sensibles</H2>
            <P>Lorsque des informations relatives à la santé ou à la déficience visuelle sont volontairement fournies, LirElia recueille un consentement explicite au moyen d'une action positive, notamment une case dédiée non précochée dans le formulaire concerné.</P>
            <P>Le consentement peut être retiré à tout moment en écrivant à <strong><Mail /></strong>.</P>
            <P>Le retrait du consentement ne remet pas en cause la licéité des traitements effectués avant ce retrait. Il peut toutefois empêcher LirElia de poursuivre un conseil ou un accompagnement lorsque les informations concernées sont indispensables au service demandé.</P>

            <H2>6. Informations communiquées par un proche ou un aidant</H2>
            <P>Un proche ou un aidant peut contacter LirElia pour le compte d'une personne malvoyante.</P>
            <P>Dans ce cas, il lui est demandé :</P>
            <UL>
              <li>de ne communiquer que les informations nécessaires ;</li>
              <li>d'informer la personne concernée de la démarche lorsque cela est possible ;</li>
              <li>de s'assurer qu'il est autorisé à transmettre ces informations ;</li>
              <li>de ne pas communiquer de document médical sans nécessité.</li>
            </UL>
            <P>Lorsque cela est nécessaire, LirElia informe directement la personne concernée de l'utilisation de ses données au plus tard lors du premier échange avec elle.</P>

            <H2>7. Destinataires des données</H2>
            <P>Les données sont accessibles uniquement aux personnes autorisées qui en ont besoin pour accomplir leurs missions.</P>
            <P>Elles peuvent être transmises, dans la limite de ce qui est nécessaire, aux catégories de destinataires suivantes :</P>
            <UL>
              <li>dirigeants et collaborateurs habilités de HORIZON TD ;</li>
              <li><strong>OVH SAS — OVHcloud</strong>, pour l'hébergement du site et de ses données techniques ;</li>
              <li>prestataires de maintenance, de sécurité, de messagerie ou de gestion des formulaires ;</li>
              <li><strong>Stripe</strong>, pour le traitement des paiements ;</li>
              <li>transporteurs et prestataires logistiques, pour la livraison ;</li>
              <li><strong>Zoom</strong>, pour l'organisation des visioconférences ;</li>
              <li><strong>Ahrefs</strong> et <strong>Microsoft</strong>, lorsque les outils de mesure d'audience correspondants sont autorisés ;</li>
              <li>prestataires comptables, administratifs, juridiques ou assureurs ;</li>
              <li>autorités administratives ou judiciaires légalement habilitées ;</li>
              <li>professionnels ou partenaires vers lesquels une personne demande à être orientée, après information et lorsque cela est nécessaire.</li>
            </UL>
            <P>Les données personnelles ne sont ni vendues ni louées à des tiers.</P>

            <H2>8. Hébergement et transferts internationaux</H2>
            <P>Le site LirElia.fr est hébergé par :</P>
            <P>
              <strong>OVH SAS — OVHcloud</strong><br />
              2 rue Kellermann<br />
              59100 Roubaix — France
            </P>
            <P>Certains prestataires distincts de l'hébergeur, notamment Stripe, Zoom, Microsoft ou Ahrefs, peuvent traiter des données depuis des pays situés en dehors de l'Espace économique européen.</P>
            <P>Lorsque de tels transferts existent, ils doivent être encadrés par un mécanisme reconnu par la réglementation, tel que :</P>
            <UL>
              <li>une décision d'adéquation de la Commission européenne ;</li>
              <li>le Cadre de protection des données UE–États-Unis lorsqu'il est applicable ;</li>
              <li>les clauses contractuelles types de la Commission européenne ;</li>
              <li>ou toute autre garantie appropriée prévue par le RGPD.</li>
            </UL>
            <P>Des informations complémentaires peuvent être demandées à <strong><Mail /></strong>.</P>

            <H2>9. Durées de conservation</H2>
            <P>LirElia conserve les données uniquement pendant la durée nécessaire à la finalité concernée, puis les supprime ou les archive avec un accès limité lorsque la loi l'exige.</P>

            <H3>9.1 Demandes de contact et de conseil sans prestation</H3>
            <P>Les coordonnées et échanges sont conservés pendant une durée maximale de <strong>trois ans à compter du dernier contact actif</strong>.</P>
            <P>Les informations relatives à la santé qui ne donnent lieu à aucune prestation sont supprimées ou anonymisées lorsqu'elles ne sont plus nécessaires et, en principe, au plus tard <strong>douze mois après la clôture de la demande</strong>.</P>

            <H3>9.2 Demandes de rendez-vous non suivies d'une prestation</H3>
            <P>Les données sont conservées pendant une durée maximale de <strong>douze mois après le dernier échange</strong>, sauf demande de suppression plus précoce ou nécessité de conserver une preuve.</P>

            <H3>9.3 Bilans et accompagnements</H3>
            <P>Les données sont conservées pendant la durée de l'accompagnement.</P>
            <P>Les éléments nécessaires à la preuve de la prestation ou à la défense des droits de LirElia peuvent ensuite être archivés pendant la durée de prescription applicable.</P>
            <P>Les notes contenant des données relatives à la santé sont supprimées dès qu'elles ne sont plus nécessaires et, en principe, au plus tard <strong>trois ans après la dernière prestation</strong>, sauf obligation légale, litige ou demande justifiée de conservation.</P>

            <H3>9.4 Commandes, clients et facturation</H3>
            <P>Les données nécessaires à la gestion de la relation commerciale sont conservées pendant la durée de celle-ci, puis pendant la durée nécessaire à la constatation, à l'exercice ou à la défense de droits en justice.</P>
            <P>Les factures et pièces comptables sont conservées pendant <strong>dix ans</strong> conformément aux obligations légales.</P>

            <H3>9.5 Prospection commerciale</H3>
            <P>Les données utilisées à des fins de prospection sont conservées :</P>
            <UL>
              <li>jusqu'au retrait du consentement ou à l'opposition de la personne ;</li>
              <li>et au maximum pendant <strong>trois ans à compter du dernier contact actif ou de la fin de la relation commerciale</strong>, selon le cas.</li>
            </UL>
            <P>La preuve du consentement peut être conservée pendant la durée nécessaire à la démonstration du respect des obligations légales.</P>

            <H3>9.6 Club LirElia</H3>
            <P>Les données d'inscription sont conservées tant que la personne souhaite participer au Club ou recevoir les informations demandées.</P>
            <P>Elles sont supprimées au plus tard <strong>douze mois après la dernière participation ou la demande de désinscription</strong>, sauf nécessité de conserver une preuve du consentement ou de gérer un différend.</P>

            <H3>9.7 Journaux techniques et de sécurité</H3>
            <P>Les journaux techniques sont généralement conservés pendant une durée maximale de <strong>douze mois</strong>, sauf nécessité particulière liée à un incident de sécurité.</P>

            <H3>9.8 Cookies et traceurs</H3>
            <P>Les durées applicables aux cookies et autres traceurs sont précisées dans la <strong>Politique de cookies</strong> et dans le gestionnaire de préférences du site.</P>

            <H2>10. Sécurité et confidentialité</H2>
            <P>LirElia met en œuvre des mesures techniques et organisationnelles adaptées aux risques, notamment :</P>
            <UL>
              <li>la limitation des accès aux seules personnes habilitées ;</li>
              <li>l'utilisation de mots de passe robustes et de moyens d'authentification adaptés ;</li>
              <li>le chiffrement des échanges au moyen du protocole HTTPS ;</li>
              <li>la mise à jour des logiciels et composants ;</li>
              <li>la sauvegarde et la sécurisation des données ;</li>
              <li>la sélection de prestataires présentant des garanties suffisantes ;</li>
              <li>la limitation des informations demandées dans les formulaires ;</li>
              <li>le masquage ou l'exclusion des champs sensibles dans les outils d'analyse ;</li>
              <li>la suppression ou l'archivage sécurisé des données devenues inutiles.</li>
            </UL>
            <P>Aucun système informatique ne pouvant garantir une sécurité absolue, LirElia s'engage à réagir de manière appropriée en cas d'incident et, lorsque la réglementation l'impose, à informer la CNIL et les personnes concernées.</P>

            <H2>11. Cookies et outils de mesure d'audience</H2>
            <P>Le site utilise des cookies ou technologies similaires :</P>
            <UL>
              <li>indispensables à son fonctionnement ;</li>
              <li>destinés à mémoriser les choix de consentement ;</li>
              <li>et, avec l'accord de l'utilisateur lorsque celui-ci est requis, destinés à mesurer l'audience ou analyser la navigation.</li>
            </UL>
            <P>Les outils de mesure d'audience ne doivent pas enregistrer le contenu librement saisi dans les formulaires ni les informations sensibles communiquées par les utilisateurs.</P>
            <P>L'utilisateur peut accepter, refuser ou modifier ses préférences à tout moment au moyen du lien <strong>Gérer mes cookies</strong> présent sur le site.</P>
            <P>Pour plus d'informations, il peut consulter la <strong>Politique de cookies</strong>.</P>

            <H2>12. Droits des personnes</H2>
            <P>Conformément au RGPD et à la loi Informatique et Libertés, toute personne concernée peut, selon les conditions applicables, exercer les droits suivants :</P>
            <UL>
              <li>droit d'accès à ses données ;</li>
              <li>droit de rectification des données inexactes ou incomplètes ;</li>
              <li>droit à l'effacement ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit d'opposition aux traitements fondés sur l'intérêt légitime ;</li>
              <li>droit de retirer son consentement à tout moment ;</li>
              <li>droit à la portabilité des données lorsque les conditions légales sont réunies ;</li>
              <li>droit de définir des directives relatives au sort de ses données après son décès ;</li>
              <li>droit de ne pas faire l'objet d'une décision exclusivement automatisée produisant des effets juridiques ou significatifs.</li>
            </UL>
            <P>Pour exercer ces droits, la personne peut écrire à :</P>
            <P><strong><Mail /></strong></P>
            <P>ou par courrier à :</P>
            <P>
              <strong>HORIZON TD — LirElia</strong><br />
              2 rue Pierre Louÿs<br />
              75016 Paris — France
            </P>
            <P>La demande doit permettre d'identifier suffisamment son auteur. Un justificatif d'identité ne sera demandé qu'en cas de doute raisonnable sur son identité.</P>
            <P>LirElia répond dans les délais prévus par la réglementation, en principe dans un délai d'un mois à compter de la réception d'une demande complète.</P>

            <H2>13. Réclamation auprès de la CNIL</H2>
            <P>Toute personne estimant que ses droits ne sont pas respectés peut adresser une réclamation à :</P>
            <P>
              <strong>Commission nationale de l'informatique et des libertés — CNIL</strong><br />
              3 place de Fontenoy<br />
              TSA 80715<br />
              75334 Paris Cedex 07 — France
            </P>

            <H2>14. Décisions automatisées</H2>
            <P>LirElia ne prend aucune décision produisant des effets juridiques ou significatifs à l'égard d'une personne sur le seul fondement d'un traitement automatisé ou d'un profilage.</P>

            <H2>15. Modification de la politique</H2>
            <P>La présente politique peut être modifiée pour tenir compte :</P>
            <UL>
              <li>d'une évolution du site ou des services proposés ;</li>
              <li>de l'ajout, du remplacement ou du retrait d'un prestataire ;</li>
              <li>d'une modification des traitements de données ;</li>
              <li>d'une évolution légale ou réglementaire ;</li>
              <li>d'une recommandation de la CNIL.</li>
            </UL>
            <P>La date de la dernière mise à jour est indiquée en haut de la page.</P>
            <P>En cas de modification importante, une information spécifique pourra être affichée sur le site ou adressée aux personnes concernées.</P>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
