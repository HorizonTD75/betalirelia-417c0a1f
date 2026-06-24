import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const FormulaireRetractation = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Formulaire de rétractation sous 14 jours | LirElia"
        description="Modèle de formulaire de rétractation LirElia : exercez votre droit de rétractation sous 14 jours après réception du produit, en toute simplicité."
        canonicalPath="/formulaire-retractation"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formulaire de rétractation
            </h1>
            <p className="text-base text-muted-foreground mb-10">Dernière mise à jour : 08/06/2026</p>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Vous disposez d'un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour exercer ce droit, vous pouvez nous envoyer une déclaration claire indiquant votre volonté de vous rétracter.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous pouvez utiliser le modèle ci-dessous.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Modèle de formulaire de rétractation</h2>

            <p className="text-lg text-foreground leading-relaxed mb-2">À l'attention de :</p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lirelia — Service retours<br />
              4 rue Léon Blum<br />
              ZAE Les Glaises<br />
              91120 Palaiseau<br />
              France
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Email : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a>
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Je vous notifie par la présente ma rétractation du contrat portant sur la vente du produit suivant :
            </p>

            <div className="bg-muted/40 border border-border rounded-md p-6 mb-6 text-lg text-foreground leading-relaxed space-y-3">
              <p><strong>Produit commandé :</strong><br />[Nom du produit]</p>
              <p><strong>Commandé le :</strong><br />[Date de commande]</p>
              <p><strong>Reçu le :</strong><br />[Date de réception]</p>
              <p><strong>Nom du client :</strong><br />[Nom et prénom]</p>
              <p><strong>Adresse du client :</strong><br />[Adresse complète]</p>
              <p><strong>Email utilisé pour la commande :</strong><br />[Email]</p>
              <p><strong>Numéro de commande, si disponible :</strong><br />[Numéro de commande]</p>
              <p><strong>Date :</strong><br />[Date]</p>
              <p><strong>Signature du client :</strong><br />[Signature uniquement en cas d'envoi papier]</p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Comment envoyer votre demande ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">Vous pouvez envoyer votre demande de rétractation :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>par email à <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a> ;</li>
              <li>ou par courrier à l'adresse suivante :</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              HORIZON TD — Retours Lirelia.fr<br />
              4-6 rue Pierre Louÿs<br />
              75116 Paris<br />
              France
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Retour du produit</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Après nous avoir informés de votre rétractation, le produit doit être retourné à l'adresse indiquée, sauf instruction différente communiquée par Lirelia.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le produit doit être retourné dans un état permettant sa remise en vente, avec ses accessoires, notices et protections, dans la mesure du possible.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Remboursement</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de rétractation valable, Lirelia rembourse les sommes dues dans un délai maximum de 14 jours à compter de la date à laquelle Lirelia est informé de votre décision de vous rétracter.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le remboursement peut être différé jusqu'à récupération du produit ou jusqu'à réception d'une preuve d'expédition du produit retourné.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le remboursement est réalisé via le moyen de paiement utilisé lors de la commande, sauf accord contraire avec le client.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Contact</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Pour toute question :<br /><br />
              Lirelia — Service client<br />
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

export default FormulaireRetractation;
