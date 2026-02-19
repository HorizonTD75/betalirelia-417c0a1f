import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ClipboardList, Package, Heart, ArrowRight } from "lucide-react";

const pathways = [
  {
    icon: Eye,
    title: "Je veux comprendre ma basse vision",
    description:
      "Découvrez les causes, les symptômes et les solutions pour mieux vivre avec une basse vision au quotidien.",
    cta: "En savoir plus",
    href: "#comprendre",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: ClipboardList,
    title: "Je veux faire un bilan personnalisé",
    description: "Évaluez vos besoins avec un bilan fonctionnel adapté à votre situation et à vos objectifs de vie.",
    cta: "Découvrir les bilans",
    href: "#bilans",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "Je cherche des matériels adaptés",
    description: "Loupes électroniques, télé-agrandisseurs, scanners vocaux... des outils concrets pour le quotidien.",
    cta: "Voir les produits",
    href: "#produits",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
  {
    icon: Heart,
    title: "Je suis aidant(e) : par où commencer ?",
    description: "Guide pas à pas pour accompagner un proche atteint de basse vision sans s'épuiser.",
    cta: "Guide aidant",
    href: "#aidant",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-background" id="parcours">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Par où commencer ?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez la situation la plus proche de la vôtre pour trouver les réponses adaptées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Card key={index} variant="elevated" className="group cursor-pointer">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${pathway.bgColor} ${pathway.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl">{pathway.title}</CardTitle>
                  <CardDescription className="text-lg">{pathway.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="card" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    {pathway.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
