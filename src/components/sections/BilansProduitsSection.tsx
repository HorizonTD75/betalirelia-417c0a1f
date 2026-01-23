import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Package, Check, ArrowRight } from "lucide-react";

const BilansProduitsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background" id="bilans-produits">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bilans & produits : deux aides complémentaires
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Vous pouvez commencer par un bilan (pour clarifier les priorités), 
            ou par des produits utiles (quand le besoin est évident).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bilan */}
          <Card variant="highlighted" className="relative overflow-hidden bg-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full" />
            <CardHeader>
              <div className="w-16 h-16 rounded-xl bg-secondary/40 text-primary flex items-center justify-center mb-4">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-foreground">1) Bilan basse vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Objectifs de vie (ce que vous voulez refaire)",
                  "Essais d'aides \"standard\"",
                  "Compte-rendu simple et actionnable",
                  "Orientation vers l'opticien partenaire si utile",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-foreground/80">
                    <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3">
              <Button variant="secondary" className="border-2 border-secondary-foreground/20">
                Demander un rendez-vous
              </Button>
              <Button variant="outline" className="border-2 border-primary">
                Comparer les Bilans
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>

          {/* Produits */}
          <Card variant="elevated" className="relative overflow-hidden bg-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
            <CardHeader>
              <div className="w-16 h-16 rounded-xl bg-secondary/40 text-primary flex items-center justify-center mb-4">
                <Package className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl text-foreground">2) Aides & produits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Lire / écrire (loupes, agrandisseurs)",
                  "Écrans (ordinateur, tablette…)",
                  "Maison / cuisine (étiquetage, repères)",
                  "Déplacements / loisirs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-foreground/80">
                    <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="border-2 border-secondary-foreground/20">
                Voir les produits
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Praticiens info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6">
            <h3 className="font-serif text-xl font-bold mb-3 text-primary">
              Votre visiopraticien (Palaiseau)
            </h3>
            <p className="text-lg text-muted-foreground">
              Accompagnement, essais d'aides "standard", organisation du quotidien, 
              et plan d'action clair. Bilan au cabinet ou à domicile selon la situation.
            </p>
          </div>
          <div className="bg-card rounded-2xl border-2 border-secondary/30 p-6">
            <h3 className="font-serif text-xl font-bold mb-3 text-accent">
              Opticien-optométriste partenaire (Antony)
            </h3>
            <p className="text-lg text-muted-foreground">
              Quand il faut aller plus loin : bilan optométrique détaillé, 
              essais de lunettes "basse vision", filtres, lunettes de sport.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="link" size="lg" className="text-xl text-primary">
            Découvrez votre visiopraticien
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BilansProduitsSection;