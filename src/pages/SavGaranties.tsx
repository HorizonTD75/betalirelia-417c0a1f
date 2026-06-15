import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const SavGaranties = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="SAV et garanties des produits LirElia basse vision"
        description="Service après-vente LirElia : aide à l'utilisation, garantie légale de conformité, vices cachés, garantie fabricant et retour sous 14 jours après réception."
        canonicalPath="/sav-garanties"
      />
      <Header />
      <main id="main-content">
        <div className="container py-16 lg:py-20">
          <div className="max-w-3xl mx-auto prose-lg">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              SAV et garanties
            </h1>
            <p className="text-base text-muted-foreground mb-10">Dernière mise à jour : 08/06/2026</p>

            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lirelia accompagne les personnes malvoyantes, leurs proches et les professionnels dans le choix de solutions d'aide à la lecture et de confort visuel.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Notre service après-vente a pour objectif de vous aider en cas de question, de difficulté d'utilisation, de panne, de produit défectueux ou de demande de retour.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Nous contacter</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Pour toute demande de SAV, contactez-nous à :<br />
              Email : <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a><br />
              Téléphone : 07 68 47 42 35
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">Merci d'indiquer dans votre message :</p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>votre nom ;</li>
              <li>votre email de commande ;</li>
              <li>le produit concerné ;</li>
              <li>la date d'achat ;</li>
              <li>le problème rencontré ;</li>
              <li>des photos ou vidéos si cela peut aider à comprendre la situation.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Aide à l'utilisation</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Certains produits d'aide visuelle nécessitent un temps d'adaptation.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Avant de conclure qu'un produit ne convient pas, vous pouvez nous contacter afin que nous vous aidions à vérifier :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-4 space-y-1">
              <li>les réglages de base ;</li>
              <li>le niveau de grossissement ;</li>
              <li>le contraste ;</li>
              <li>l'éclairage ;</li>
              <li>le branchement ou la recharge ;</li>
              <li>la bonne utilisation selon votre besoin.</li>
            </ul>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Notre objectif est de vous orienter de façon simple, utile et concrète.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Produit défectueux ou non conforme</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Si le produit reçu présente un défaut, ne fonctionne pas correctement ou ne correspond pas à votre commande, contactez-nous rapidement.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Après analyse de votre demande, nous pourrons proposer, selon la situation :
            </p>
            <ul className="list-disc pl-6 text-lg text-foreground leading-relaxed mb-6 space-y-1">
              <li>une aide à distance ;</li>
              <li>un échange ;</li>
              <li>une réparation ;</li>
              <li>un remplacement ;</li>
              <li>un remboursement.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Garantie légale de conformité</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Les produits vendus sur Lirelia.fr bénéficient de la garantie légale de conformité prévue par le Code de la consommation.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Cette garantie s'applique lorsque le produit n'est pas conforme à l'usage attendu ou à la description donnée sur le site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Garantie des vices cachés</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Le client bénéficie également de la garantie légale des vices cachés prévue par le Code civil.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Cette garantie peut s'appliquer lorsqu'un défaut caché rend le produit impropre à l'usage auquel il est destiné, ou diminue fortement cet usage.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Garantie fabricant</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Certains produits peuvent également bénéficier d'une garantie fabricant.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Lorsque c'est le cas, les conditions, la durée et les modalités de cette garantie peuvent varier selon le fabricant ou le fournisseur du produit.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              La garantie fabricant ne remplace pas les garanties légales dont bénéficie le consommateur.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Retour sous 14 jours</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En complément des garanties légales, vous disposez d'un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Pour en savoir plus, consultez la page <Link to="/retours-remboursements" className="text-primary underline underline-offset-4">Retours et remboursements</Link>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Adresse de retour SAV</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Sauf instruction différente communiquée par email, les retours doivent être adressés à :
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              HORIZON TD — Retours Lirelia.fr<br />
              4-6 rue Pierre Louÿs<br />
              75116 Paris<br />
              France
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Avant tout renvoi, nous vous conseillons de nous contacter à <a href="mailto:contact@lirelia.fr" className="text-primary underline underline-offset-4">contact@lirelia.fr</a> afin de faciliter le traitement de votre demande.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavGaranties;
