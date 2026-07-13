import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mentions légales | LirElia"
        description="Mentions légales du site LirElia : éditeur HORIZON TD, hébergeur OVHcloud, propriété intellectuelle, responsabilité et coordonnées légales."
        canonicalPath="/mentions-legales"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <article className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Mentions légales du site LirElia
            </h1>
            <p className="text-base text-muted-foreground italic mb-10">
              Dernière mise à jour : 19 juin 2026
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1. Éditeur du site</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le site <strong>LirElia.fr</strong> est édité par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              <strong>HORIZON TD</strong>, société par actions simplifiée (SAS) au capital de <strong>1 000 euros</strong><br />
              Siège social : <strong>2 rue Pierre Louÿs, 75116 Paris, France</strong><br />
              SIREN : <strong>840 698 039</strong><br />
              SIRET du siège : <strong>840 698 039 00012</strong><br />
              Immatriculation : <strong>RCS Paris 840 698 039</strong><br />
              Numéro de TVA intracommunautaire : <strong>FR39 840 698 039</strong><br />
              Code APE : <strong>4791B — Vente à distance sur catalogue spécialisé</strong>
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              LirElia est une marque et un nom commercial exploités par HORIZON TD.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Téléphone : <strong>07 68 47 42 35</strong><br />
              Adresse électronique : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2. Directeur de la publication</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le directeur de la publication est :<br />
              <strong>Sylvain DE JOUSSINEAU DE TOURDONNET</strong>, président de HORIZON TD.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3. Hébergement du site</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le site LirElia.fr est hébergé par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>OVH SAS — OVHcloud</strong><br />
              Société par actions simplifiée au capital de <strong>50 000 000 euros</strong><br />
              Siège social : <strong>2 rue Kellermann, 59100 Roubaix, France</strong><br />
              SIREN : <strong>424 761 419</strong><br />
              SIRET : <strong>424 761 419 00045</strong><br />
              RCS Lille Métropole<br />
              Numéro de TVA intracommunautaire : <strong>FR22 424 761 419</strong><br />
              Téléphone : <strong>1007 depuis la France</strong> ou <strong>+33 9 72 10 10 07 depuis l'étranger</strong>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf mention contraire, l'ensemble des éléments accessibles sur le site LirElia.fr, notamment les textes, articles, photographies, illustrations, vidéos, logos, icônes, éléments graphiques, documents téléchargeables, bases de données, arborescences, structure et code du site, est protégé par les dispositions françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Ces éléments sont la propriété exclusive de HORIZON TD ou sont utilisés avec l'autorisation de leurs titulaires respectifs.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Toute reproduction, représentation, adaptation, traduction, extraction, diffusion ou exploitation, totale ou partielle, sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de HORIZON TD, sauf dans les cas expressément autorisés par la loi.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les courtes citations sont autorisées sous réserve d'indiquer clairement le nom de l'auteur, la source et un lien vers la page d'origine.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5. Informations relatives à la basse vision et à la santé</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les contenus publiés sur LirElia.fr ont une vocation informative, pédagogique et pratique.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Ils ne constituent ni un diagnostic médical, ni une prescription, ni un avis médical personnalisé. Ils ne remplacent pas une consultation auprès d'un médecin ophtalmologiste ou de tout autre professionnel de santé compétent.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les bilans, conseils et accompagnements proposés par LirElia portent sur les besoins fonctionnels, l'autonomie, les usages quotidiens et les aides techniques. Ils ne se substituent pas à un examen médical.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              En cas de symptôme inhabituel, de baisse brutale de la vision, de douleur oculaire ou de situation urgente, l'utilisateur doit consulter rapidement un professionnel de santé ou contacter les services d'urgence.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">6. Responsabilité</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              HORIZON TD s'efforce de fournir sur LirElia.fr des informations fiables, compréhensibles et régulièrement mises à jour. Elle ne peut toutefois garantir l'exactitude, l'exhaustivité ou l'actualité permanente de l'ensemble des contenus.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              L'utilisateur reste responsable de l'usage qu'il fait des informations, conseils et ressources accessibles sur le site.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              HORIZON TD ne pourra être tenue responsable :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-foreground leading-relaxed">
              <li>d'une erreur, omission ou indisponibilité temporaire d'une information ;</li>
              <li>d'une interruption, d'un dysfonctionnement ou d'une incompatibilité du site ;</li>
              <li>d'un dommage direct ou indirect résultant de l'utilisation du site ou de l'impossibilité d'y accéder ;</li>
              <li>d'une utilisation inadaptée d'un produit ou d'une aide technique ;</li>
              <li>du contenu, du fonctionnement ou de la sécurité d'un site tiers accessible au moyen d'un lien externe.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              HORIZON TD met en œuvre des moyens raisonnables pour sécuriser le site, sans pouvoir garantir une sécurité absolue des échanges sur Internet.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">7. Liens hypertextes</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le site peut contenir des liens vers des sites, services ou ressources édités par des tiers.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              HORIZON TD n'exerce aucun contrôle sur ces contenus externes et ne saurait être tenue responsable de leur disponibilité, de leur exactitude, de leurs pratiques commerciales ou de leur politique de protection des données.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La création d'un lien vers une page du site LirElia.fr est autorisée à condition :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-foreground leading-relaxed">
              <li>de ne pas présenter le contenu de manière trompeuse ;</li>
              <li>de ne pas laisser entendre l'existence d'un partenariat non autorisé ;</li>
              <li>de respecter les droits de propriété intellectuelle ;</li>
              <li>de ne pas intégrer les pages du site dans un autre site au moyen d'une technique de cadrage susceptible de créer une confusion.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">8. Données personnelles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les modalités de collecte, d'utilisation, de conservation et de protection des données personnelles sont décrites dans la page <a href="/politique-de-confidentialite" className="text-primary underline underline-offset-4 hover:text-primary/80"><strong>Politique de confidentialité</strong></a> du site.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Pour toute question ou demande relative à vos données personnelles, vous pouvez écrire à :<br />
              <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80"><strong>contact@lirelia.fr</strong></a>
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">9. Cookies et traceurs</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le site peut utiliser des cookies ou technologies similaires nécessaires à son fonctionnement ainsi que, sous réserve du consentement de l'utilisateur, des outils de mesure d'audience.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les informations relatives aux traceurs utilisés et aux moyens de gérer les préférences sont précisées dans la page <a href="/politique-cookies" className="text-primary underline underline-offset-4 hover:text-primary/80"><strong>Politique de cookies</strong></a>.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              L'utilisateur peut modifier ses choix à tout moment au moyen du lien <strong>Gérer mes cookies</strong> présent sur le site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">10. Droit applicable</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le site et les présentes mentions légales sont soumis au droit français.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              En cas de différend, les parties rechercheront en priorité une solution amiable. À défaut, le litige sera porté devant la juridiction compétente selon les règles de droit commun applicables.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">11. Contact</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour toute question concernant le site ou son contenu :
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>HORIZON TD — LirElia</strong><br />
              2 rue Pierre Louÿs<br />
              75116 Paris — France<br />
              Téléphone : <strong>07 68 47 42 35</strong><br />
              Adresse électronique : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
