import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Mountain, Heart, ArrowRight, Users } from "lucide-react";

const pathways = [
  {
    icons: [Eye, Users],
    title: "Je n'arrive plus à lire comme avant",
    description: "Courriers, notices, écrans... La lecture devient difficile. Trouvez des solutions adaptées.",
    cta: "Solutions à bilan",
    href: "#comprendre",
    iconBg: ["bg-primary/20", "bg-secondary/40"],
    iconColor: ["text-primary", "text-primary"],
  },
  {
    icons: [Mountain, Eye],
    title: "Je suis sportif et ma vue change",
    description: "Course, ski, golf... Gardez votre activité avec des aides adaptées.",
    cta: "Lunettes et bilan",
    href: "#sports",
    iconBg: ["bg-primary/20", "bg-secondary/40"],
    iconColor: ["text-primary", "text-primary"],
  },
  {
    icons: [Heart, Users],
    title: "Je suis aidant, par où commencer ?",
    description: "Accompagner un proche atteint de basse vision sans s'épuiser.",
    cta: "Lunettes et bilan",
    href: "#aidants",
    iconBg: ["bg-primary/20", "bg-secondary/40"],
    iconColor: ["text-primary", "text-primary"],
  },
];

const PathwaysSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted" id="parcours">
      <div className="container">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            Par où commencer ?
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg">
              i
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => {
            return (
              <Card
                key={index}
                variant="elevated"
                className="group cursor-pointer bg-secondary/40 border-secondary/50 hover:bg-secondary/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex gap-3 mb-4">
                    {pathway.icons.map((Icon, iconIndex) => (
                      <div 
                        key={iconIndex}
                        className={`w-14 h-14 rounded-xl ${pathway.iconBg[iconIndex]} ${pathway.iconColor[iconIndex]} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    ))}
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-foreground">{pathway.title}</CardTitle>
                  <CardDescription className="text-lg text-foreground/70">{pathway.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    variant="secondary" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground border-2 border-secondary-foreground/30"
                  >
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