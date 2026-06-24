import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const RetoursRemboursements = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Retours et remboursements sous 14 jours chez LirElia"
        description="Politique de retour LirElia : droit de rétractation 14 jours après réception, modalités de retour par voie postale, adresse à utiliser, frais et délais de remboursement."
        canonicalPath="/retours-remboursements"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retours et remboursements
            </h1>
            <p className="text-base text-muted-foreground mb-10">Dernière mise à jour : 24/06/2026</p>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lirelia souhaite proposer une politique de retour claire, simple et accessible.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Vous disposez d'un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation ou demander un retour, sans avoir à justifier votre décision.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Produits concernés</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              La politique de retour s'applique aux produits commandés en ligne sur Lirelia.fr, sous réserve qu'ils soient retournés dans un état permettant leur remise en vente comme produit neuf.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">État des produits retournés</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Les produits doivent être retournés :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>dans leur emballage d'origine ;</li>
              <li>avec l'ensemble des accessoires, notices, câbles, protections et éléments initialement fournis ;</li>
              <li>complets ;</li>
              <li>propres ;</li>
              <li>non dégradés ;</li>
              <li>non endommagés ;</li>
              <li>sans trace d'utilisation excessive ;</li>
              <li>dans un état permettant leur remise en vente comme produit neuf.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Un produit incomplet, dégradé, sali, endommagé ou présentant des traces d'utilisation allant au-delà d'une simple vérification de son fonctionnement pourra faire l'objet d'une diminution du remboursement, conformément aux dispositions applicables.
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

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Méthode de retour</h2>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>le retour doit être effectué par voie postale ;</li>
              <li>le client doit envoyer le produit à l'adresse de retour indiquée ci-dessous ;</li>
              <li>il est recommandé au client d'utiliser un envoi suivi ou avec preuve de dépôt ;</li>
              <li>le client reste responsable du colis jusqu'à sa réception par Lirelia.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Adresse de retour</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf instruction contraire communiquée par email, les produits doivent être retournés à l'adresse suivante :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Lirelia — Service retours<br />
              4 rue Léon Blum<br />
              ZAE Les Glaises<br />
              91120 Palaiseau<br />
              France
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Frais de retour</h2>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>les frais d'expédition liés au retour sont à la charge du client ;</li>
              <li>aucun frais supplémentaire de traitement ou de remise en stock n'est facturé au client ;</li>
              <li>seuls les frais directs d'expédition du produit retourné restent à sa charge.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              En cas de produit défectueux, abîmé ou non conforme à la commande, contactez-nous avant tout renvoi afin que nous puissions vous indiquer la marche à suivre.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Remboursement</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En cas de rétractation valable, Lirelia procède au remboursement dans un délai maximum de 10 jours après la réception et la vérification du produit retourné.
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
