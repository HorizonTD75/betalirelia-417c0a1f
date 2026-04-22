import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Glasses, Hand, Ruler, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import focusImage from "@/assets/products/lunettes-loupes-pres.jpg";

const STRIPE_FOCUS_URL = "https://buy.stripe.com/14A00k0nQ5dJ6lF4Fn2Fa01";

const usages = [
  "Lire un courrier, une notice, une étiquette ou quelques pages avec les mains libres.",
  "Coudre, broder, tricoter, bricoler ou réaliser de petits travaux minutieux.",
  "Manipuler un objet, tenir un outil ou suivre une ligne de texte sans tenir une loupe à la main.",
  "Retrouver une posture plus stable pour les activités de près, sur une durée raisonnable.",
];

const caracteristiques = [
  "Solution optique mains libres, portée comme une paire de lunettes.",
  "Conçue pour les activités de près à une distance de travail définie.",
  "Grossissement adapté aux usages de lecture, couture, bricolage et précision.",
  "Format léger et simple à mettre en place pour une utilisation ponctuelle ou régulière.",
];

const publicCible = [
  "Personnes qui ont besoin de garder les deux mains libres.",
  "Personnes gênées par le maintien d'une loupe classique.",
  "Aidants recherchant une solution simple à proposer pour les activités de près.",
  "Utilisateurs acceptant de respecter une distance de travail précise.",
];

const limites = [
  "La distance de travail doit être respectée pour obtenir une image nette.",
  "Un temps d'adaptation peut être nécessaire au début.",
  "Ce type de lunettes n'est pas adapté à tous les usages ni à toutes les visions.",
  "Un conseil personnalisé reste préférable avant l'achat si la gêne visuelle est importante.",
];

const LunettesLoupeFocus = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lunettes Loupe FOCUS pour Voir de Près | LirElia"
        description="Lunettes loupe FOCUS : solution mains libres pour lire, coudre, bricoler et réaliser des activités de près avec plus de confort."
        canonicalPath="/boutique/lunettes-loupe-focus"
      />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/lunettes-loupes" className="hover:text-primary transition-colors">Lunettes loupes</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Lunettes loupe FOCUS</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                <img
                  src={focusImage}
                  alt="Lunettes loupe FOCUS pour activités de près"
                  className="w-full aspect-square object-cover bg-muted"
                  loading="eager"
                  width={720}
                  height={720}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Link
                to="/aides-lecture-bassevision/lunettes-loupes"
                className="inline-flex items-center gap-2 text-lg text-primary hover:underline mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux lunettes loupes
              </Link>
              <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/40 mb-4">
                <Glasses className="w-5 h-5" />
                <span className="font-semibold">Voir de près avec les mains libres</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Lunettes loupe FOCUS
              </h1>
              <p className="text-xl font-semibold text-muted-foreground mb-6">
                Une solution simple pour lire, coudre, bricoler ou réaliser des activités de précision sans tenir de loupe.
              </p>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Les lunettes loupe FOCUS s'adressent aux personnes qui ont besoin d'un grossissement de près tout en gardant les mains libres. Elles peuvent aider dans les gestes concrets du quotidien : consulter un courrier, suivre une couture, manipuler une petite pièce ou travailler sur un détail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_FOCUS_URL} target="_blank" rel="noopener noreferrer">
                    Commander ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact-conseil?produit=lunettes-loupe-focus">Être conseillé(e)</Link>
                </Button>
              </div>

              <div className="bg-muted rounded-2xl border-2 border-border p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Paiement sécurisé</p>
                    <p className="text-base text-muted-foreground">Règlement direct via Stripe, sans panier Shopify.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Produit orienté usages de près</p>
                    <p className="text-base text-muted-foreground">Lecture, couture, bricolage et petits travaux minutieux.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Bénéfices et usages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {usages.map((item) => (
                <Card key={item} variant="elevated">
                  <CardContent className="p-6 flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-6">
              <InfoBlock icon={Ruler} title="Caractéristiques" items={caracteristiques} />
              <InfoBlock icon={Hand} title="Pour qui ?" items={publicCible} />
              <InfoBlock icon={Shield} title="À savoir" items={limites} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Une solution à tester selon votre distance de travail</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Les lunettes loupes sont très utiles lorsque le besoin est bien ciblé. Si vous hésitez, demandez conseil avant de commander.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href={STRIPE_FOCUS_URL} target="_blank" rel="noopener noreferrer">Accéder au paiement sécurisé</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/aides-lecture-bassevision/lunettes-loupes">Voir la catégorie lunettes loupes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const InfoBlock = ({ icon: Icon, title, items }: { icon: typeof Ruler; title: string; items: string[] }) => (
  <Card variant="elevated" className="h-full">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
            <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default LunettesLoupeFocus;