import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const RetoursRemboursements = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Retours et remboursements | LirElia"
        description="Politique de retour LirElia : 14 jours de rétractation, modalités de retour, adresse, frais et délais de remboursement."
        canonicalPath="/retours-remboursements"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retours et remboursements
            </h1>
            <p className="text-base text-muted-foreground mb-10">Dernière mise à jour : 08/06/2026</p>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lirelia souhaite proposer une politique de retour claire, simple et accessible.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous disposez d'un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation ou demander un retour, sans avoir à justifier votre décision.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Produits concernés</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La politique de retour s'applique aux produits commandés en ligne sur Lirelia.fr, sous réserve qu'ils soient retournés dans un état permettant leur remise en vente.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le produit doit être retourné avec, dans la mesure du possible :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>ses accessoires ;</li>
              <li>ses notices ;</li>
              <li>ses éléments de protection ;</li>
              <li>son emballage d'origine ou un emballage équivalent permettant un transport sécurisé.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le produit ne doit pas avoir été endommagé ou utilisé d'une manière dépassant les manipulations nécessaires pour l'essayer ou en vérifier les caractéristiques.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Comment demander un retour ?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour demander un retour, contactez-nous à :<br />
              <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a>
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Merci d'indiquer :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>votre nom ;</li>
              <li>votre email de commande ;</li>
              <li>le numéro de commande si vous l'avez ;</li>
              <li>le produit concerné ;</li>
              <li>la date de réception du produit ;</li>
              <li>le motif du retour si vous souhaitez nous le préciser.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous pouvez également utiliser la page <Link to="/formulaire-retractation" className="text-primary underline underline-offset-4">Formulaire de rétractation</Link> disponible sur le site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Adresse de retour</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf instruction contraire communiquée par email, les produits doivent être retournés à l'adresse suivante :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              HORIZON TD — Retours Lirelia.fr<br />
              4-6 rue Pierre Louÿs<br />
              75116 Paris<br />
              France
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Frais de retour</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf erreur de notre part, produit défectueux ou produit non conforme, les frais de retour sont à la charge du client.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              En cas de produit défectueux, abîmé ou non conforme à la commande, contactez-nous avant tout renvoi afin que nous puissions vous indiquer la marche à suivre.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Remboursement</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de rétractation valable, Lirelia rembourse les sommes dues dans un délai maximum de 14 jours à compter de la date à laquelle Lirelia est informé de votre décision de vous rétracter.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le remboursement peut être différé jusqu'à récupération du produit ou jusqu'à réception d'une preuve d'expédition du produit retourné.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le remboursement est effectué avec le même moyen de paiement que celui utilisé lors de la commande, sauf accord contraire avec le client.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Produits défectueux ou erreur de commande</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Si le produit reçu est défectueux, abîmé ou ne correspond pas à votre commande, contactez-nous rapidement à :<br />
              <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a>
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Merci de joindre si possible :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>des photos du produit ;</li>
              <li>des photos de l'emballage ;</li>
              <li>une description du problème constaté ;</li>
              <li>votre numéro ou email de commande.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Nous vous indiquerons ensuite la solution la plus adaptée : échange, réparation, remplacement ou remboursement selon la situation.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Contact</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Pour toute question liée à un retour ou un remboursement :<br /><br />
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

export default RetoursRemboursements;
