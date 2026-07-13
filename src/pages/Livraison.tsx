import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const Livraison = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Livraison gratuite en France métropolitaine | LirElia"
        description="Conditions de livraison LirElia : livraison gratuite en France métropolitaine, délais d'expédition, suivi de commande et vérification du colis à la réception."
        canonicalPath="/livraison"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Livraison gratuite en France métropolitaine
            </h1>
            <p className="text-base text-muted-foreground mb-10">Dernière mise à jour : 08/06/2026</p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Chez Lirelia, nous attachons une grande importance à la clarté des conditions de livraison. Les produits proposés sur le site sont principalement destinés aux personnes malvoyantes, à leurs proches aidants ou aux professionnels qui les accompagnent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Zone de livraison</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les produits commandés sur Lirelia.fr sont livrés en France métropolitaine.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour une livraison en Corse, en Outre-mer ou à l'étranger, nous vous invitons à nous contacter avant de commander afin de vérifier la faisabilité, les délais et les frais éventuels.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Contact :<br />
              <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a><br />
              07 68 47 42 35
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Délais de traitement et d'expédition</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les commandes sont préparées après validation du paiement.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf indication contraire sur la fiche produit ou dans l'email de confirmation, le délai indicatif de livraison est d'environ 5 jours ouvrés à compter de l'expédition.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Ce délai peut varier selon :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>la disponibilité réelle du produit ;</li>
              <li>le transporteur ;</li>
              <li>l'adresse de livraison ;</li>
              <li>les périodes de forte activité ;</li>
              <li>les contraintes exceptionnelles indépendantes de Lirelia.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              En cas de retard significatif, vous pouvez nous contacter afin que nous vérifiions la situation de votre commande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Frais de livraison</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les frais de livraison éventuels sont indiqués avant la validation de la commande.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Si des frais de livraison s'appliquent, ils sont clairement affichés avant le paiement. Le client peut ainsi vérifier le montant total de sa commande avant de confirmer son achat.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Suivi de commande</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lorsque le mode d'expédition le permet, un numéro de suivi peut être communiqué au client par email.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour toute question sur une commande en cours, vous pouvez nous écrire à :<br />
              <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a>
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Merci d'indiquer dans votre message :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>votre nom ;</li>
              <li>votre email de commande ;</li>
              <li>le produit commandé ;</li>
              <li>la date de commande ;</li>
              <li>toute information utile.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Vérification du colis à la livraison</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              À la réception du colis, nous vous conseillons de vérifier l'état apparent de l'emballage et du produit.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Si le colis est visiblement endommagé, vous pouvez :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>émettre des réserves auprès du transporteur ;</li>
              <li>prendre des photos du colis et du produit ;</li>
              <li>contacter Lirelia rapidement à <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a>.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Ces éléments nous aideront à traiter plus efficacement votre demande.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Contact</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">Lirelia est édité par :</p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              HORIZON TD — SAS<br />
              2 rue Pierre Louÿs<br />
              75116 Paris<br />
              France
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Email : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a><br />
              Téléphone : 07 68 47 42 35
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Livraison;
