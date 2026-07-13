import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const CGV = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conditions générales de vente (CGV) du site LirElia"
        description="Conditions générales de vente LirElia : commandes, paiement par Stripe, livraison, droit de rétractation 14 jours, garanties, retours et service client."
        canonicalPath="/cgv"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
              Conditions générales de vente (CGV)
            </h1>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Dernière mise à jour : 08/06/2026
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1. Identité du vendeur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Les présentes CGV sont proposées par :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              HORIZON TD — Société par actions simplifiée (SAS)<br />
              Siège social : 2 rue Pierre Louÿs, 75116 Paris, France<br />
              SIREN : 840 698 039 — SIRET (siège) : 840 698 039 00012<br />
              TVA intracommunautaire : FR39840698039<br />
              Email : contact@lirelia.fr
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              (ci-après « le Vendeur »)
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2. Objet — Champ d'application</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Les présentes CGV régissent :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-2 space-y-1">
              <li>la vente en ligne de produits (ex. loupes, lunettes, aides visuelles, accessoires),</li>
              <li>la vente de services (ex. consultations de conseil/orientation en basse vision),</li>
              <li>la vente de formations et/ou contenus numériques (le cas échéant),</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              proposés sur le site LirElia.fr (ci-après « le Site »). Elles s'appliquent aux ventes conclues à distance auprès de consommateurs et, sauf stipulation contraire, auprès de professionnels (des règles spécifiques peuvent s'appliquer aux professionnels).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3. Informations précontractuelles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les caractéristiques essentielles, le prix, et le cas échéant les informations d'utilisation/compatibilité (formations/numérique), figurent sur les fiches du Site. En cas de contradiction, les présentes CGV prévalent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4. Commande</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La commande est validée lorsque :
            </p>
            <ol className="list-decimal pl-6 text-lg text-foreground leading-relaxed mb-2 space-y-1">
              <li>le Client sélectionne les produits/services,</li>
              <li>vérifie le récapitulatif (prix, quantités, frais),</li>
              <li>accepte les CGV,</li>
              <li>procède au paiement,</li>
              <li>reçoit une confirmation de commande (email).</li>
            </ol>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Vendeur se réserve le droit de refuser/annuler une commande en cas de motif légitime (ex. fraude, incident de paiement, informations manifestement erronées).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5. Prix</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les prix sont indiqués en euros, TTC, hors frais de livraison éventuels (précisés avant validation). Le Vendeur peut modifier ses prix à tout moment ; le prix applicable est celui affiché au moment de la commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">6. Paiement</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le paiement est effectué en ligne par carte bancaire ou tout autre moyen proposé au moment de la commande, via une interface de paiement sécurisée Stripe.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              La commande est considérée comme définitive après validation du paiement et confirmation de la commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">7. Livraison des produits</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.1 Zone et délais</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Produits livrés : France métropolitaine. Délais indicatifs : 5 jours ouvrés à compter de l'expédition (variables selon transporteurs).
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.2 Frais et transfert des risques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les frais de livraison sont indiqués avant la validation. Le transfert des risques intervient à la remise au Client (ou au tiers désigné), conformément au droit applicable.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">7.3 Réserves</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Client est invité à vérifier l'état du colis à la livraison et à formuler toute réserve utile auprès du transporteur et du Vendeur dans les meilleurs délais.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">8. Prestations de services (consultations) et formations</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.1 Nature des consultations</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les consultations proposées sur le Site sont des prestations de conseil, d'information et d'orientation liées à la basse vision. Elles ne constituent pas un acte médical, ni un diagnostic, ni une prise en charge d'urgence. En cas d'urgence médicale : composer le 15 ou le 112.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.2 Réservation</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La réservation se fait en ligne via le Site. Le Client choisit un créneau et procède au paiement si la prestation est payante.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.3 Conditions techniques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le Client est responsable de disposer d'un équipement et d'une connexion internet compatibles. En cas d'impossibilité technique imputable au Client, la prestation peut être considérée comme réalisée (voir 8.4).
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.4 Report / annulation / retard / absence</h3>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Politique standard (à adapter) :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>Annulation / report possible jusqu'à 48h avant le créneau.</li>
              <li>En-deçà : avoir partiel.</li>
              <li>En cas de retard du Client : la prestation peut être écourtée sans réduction de prix.</li>
              <li>En cas de non-présentation : prestation due.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">8.5 Formations et contenus numériques</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Lorsque la formation inclut un accès numérique (vidéos, PDF, espace membre), les modalités d'accès sont précisées sur la page de vente : durée d'accès, prérequis, restrictions de partage, etc.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">9. Droit de rétractation et retours</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le consommateur dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à motiver sa décision.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour exercer ce droit, le client peut contacter Lirelia par email à <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a> ou utiliser le <a href="/formulaire-retractation" className="text-primary underline underline-offset-4 hover:text-primary/80">formulaire de rétractation</a> disponible sur le site.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de rétractation valable, Lirelia rembourse les sommes dues dans un délai maximum de 14 jours à compter de la date à laquelle Lirelia est informé de la décision du client de se rétracter.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le remboursement peut être différé jusqu'à récupération du produit ou jusqu'à réception d'une preuve d'expédition du produit retourné.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf erreur de Lirelia, produit défectueux ou produit non conforme, les frais de retour sont à la charge du client.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Adresse de retour (sauf instruction différente communiquée) :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lirelia — Service retours<br />
              4 rue Léon Blum<br />
              ZAE Les Glaises<br />
              91120 Palaiseau<br />
              France
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Pour plus de détails, consultez les pages <a href="/retours-remboursements" className="text-primary underline underline-offset-4 hover:text-primary/80">Retours et remboursements</a>, <a href="/formulaire-retractation" className="text-primary underline underline-offset-4 hover:text-primary/80">Formulaire de rétractation</a> et <a href="/sav-garanties" className="text-primary underline underline-offset-4 hover:text-primary/80">SAV et garanties</a>.
            </p>


            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">10. Garanties légales (produits)</h2>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">10.1 Garantie légale de conformité</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le consommateur bénéficie de la garantie légale de conformité (biens neufs, d'occasion, reconditionnés) : le vendeur doit délivrer un bien conforme et répond des défauts de conformité.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">10.2 Garantie des vices cachés</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le consommateur bénéficie également de la garantie légale des vices cachés (Code civil, art. 1641).
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">11. Service après-vente — Réclamations</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Pour toute question, réclamation, SAV ou retour : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4 hover:text-primary/80">contact@lirelia.fr</a>.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Client est invité à préciser : numéro de commande, produit/service concerné, description, photos si utile.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">12. Médiation de la consommation (B2C)</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Conformément au Code de la consommation, le consommateur peut recourir gratuitement à un médiateur de la consommation après démarche préalable écrite auprès du Vendeur.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">13. Données personnelles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Les traitements de données personnelles sont décrits dans la page <a href="/politique-de-confidentialite" className="text-primary underline underline-offset-4 hover:text-primary/80">Politique de confidentialité</a> (RGPD) du Site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">14. Force majeure</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Aucune partie ne pourra être tenue responsable d'un manquement dû à un événement de force majeure au sens de la jurisprudence française.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">15. Modification des CGV</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Vendeur peut modifier les CGV à tout moment. Les CGV applicables sont celles en vigueur au jour de la commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">16. Droit applicable — Litiges</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Les CGV sont soumises au droit français. À défaut d'accord amiable et après recours éventuel à la médiation (B2C), les tribunaux compétents seront saisis conformément aux règles de droit commun.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
