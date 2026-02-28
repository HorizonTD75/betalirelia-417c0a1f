import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  AlertTriangle, 
  Users, 
  ArrowRight,
  ChevronRight,
  Dna,
  Droplets,
  Sun
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import comprendreHeroImage from "@/assets/comprendre-basse-vision-hero.jpg";
import amslerGridImage from "@/assets/amsler-grid.jpg";

const MaladiesYeux = () => {
  const mainDiseases = [
    {
      id: "dmla",
      title: "La DMLA",
      subtitle: "Dégénérescence Maculaire Liée à l'Âge",
      stat: "8% de la population après 50 ans",
      statDetail: "soit 1,5 million de personnes en France",
      description: "La DMLA est une maladie oculaire qui affecte la macula, la partie centrale de la rétine. Elle est souvent associée au vieillissement et peut entraîner une perte de vision centrale.",
      extra: "La grille d'Amsler est le premier test simple qui informe sur la possibilité d'une DMLA.",
      link: "/maladies-yeux/dmla"
    },
    {
      id: "glaucome",
      title: "Le Glaucome",
      subtitle: "Atteinte du nerf optique",
      stat: "1 à 2% de la population de plus de 40 ans",
      statDetail: "400 000 à 500 000 personnes seraient porteuses sans le savoir",
      description: "Le glaucome est souvent causé par une pression intraoculaire élevée et peut être asymptomatique pendant des années. Il affecte le nerf optique et peut entraîner une perte de vision progressive.",
      link: "/maladies-yeux/glaucome"
    },
    {
      id: "cataracte",
      title: "La Cataracte",
      subtitle: "Opacification du cristallin",
      stat: "Très courante avec l'âge",
      statDetail: "Peut aussi être causée par le tabagisme, le diabète, les UV",
      description: "La cataracte se produit lorsque le cristallin devient opaque, ce qui rend la vision floue ou trouble. Elle est souvent associée au vieillissement."
    },
    {
      id: "retinopathie",
      title: "Les Rétinopathies",
      subtitle: "Dont la rétinopathie diabétique",
      stat: "30% des personnes diabétiques",
      statDetail: "soit 1 million de personnes en France",
      description: "La rétinopathie diabétique est une complication du diabète qui endommage les vaisseaux sanguins de la rétine. Cette maladie peut entraîner une perte de vision si elle n'est pas traitée."
    },
    {
      id: "nystagmus",
      title: "Le Nystagmus",
      subtitle: "Mouvement involontaire des yeux",
      stat: "Maladie neurologique",
      statDetail: "Mouvements incontrôlables et involontaires des yeux",
      description: "Le nystagmus se manifeste par un mouvement incontrôlable et involontaire des yeux, pouvant affecter la stabilité de la vision."
    }
  ];

  const refractionDefects = [
    {
      title: "La Myopie",
      description: "L'œil est trop long ou la cornée trop courbée. La lumière se focalise en avant de la rétine. Les objets éloignés apparaissent flous, les objets proches sont clairs."
    },
    {
      title: "L'Hypermétropie",
      description: "L'œil est trop court ou la cornée trop plate. La lumière se focalise derrière la rétine. Les objets proches apparaissent flous, les objets éloignés sont plus clairs."
    },
    {
      title: "L'Astigmatisme",
      description: "La courbure de la cornée ou du cristallin est irrégulière. La lumière se focalise sur plusieurs points. Les objets peuvent apparaître dédoublés, flous ou distordus."
    },
    {
      title: "La Presbytie",
      description: "Le cristallin perd de son élasticité avec l'âge, rendant difficile la vision de près. Symptômes : difficulté à lire, fatigue oculaire, maux de tête."
    }
  ];

  const hereditaryDiseases = [
    {
      title: "La maladie de Leber",
      description: "Maladie génétique rare qui affecte la rétine. Elle provoque une perte progressive de la vision centrale et peut entraîner la cécité. Elle se développe généralement chez les jeunes adultes."
    },
    {
      title: "La maladie de Stargardt",
      description: "Maladie héréditaire de la rétine qui touche la vision centrale à un âge relativement jeune en attaquant la macula. Elle se caractérise par une perte progressive de la vision centrale."
    },
    {
      title: "L'achromatopsie",
      description: "Maladie héréditaire rare qui affecte la vision des couleurs et la vision de la lumière vive. Elle peut également causer une perte de l'acuité visuelle."
    },
    {
      title: "Le syndrome d'Usher",
      description: "Maladie génétique rare qui affecte à la fois l'ouïe et la vision. Elle peut causer une perte de la vision périphérique et une perte de l'audition."
    },
    {
      title: "L'Aniridie",
      description: "Maladie congénitale rare caractérisée par l'absence totale ou partielle de l'iris. La pupille ne peut pas se contracter normalement, entraînant photophobie et vision réduite."
    }
  ];

  const otherDiseases = [
    {
      title: "L'Uvéite",
      description: "Inflammation de la couche intermédiaire de l'œil (uvea). Peut être causée par une infection, une maladie auto-immune ou une réaction allergique."
    },
    {
      title: "La Conjonctivite",
      description: "Infection ou inflammation de la conjonctive, la membrane qui recouvre la surface de l'œil. Peut être causée par une infection bactérienne ou virale, une allergie."
    },
    {
      title: "Le syndrome de l'œil sec",
      description: "Se produit lorsque les yeux ne produisent pas suffisamment de larmes ou lorsqu'elles s'évaporent trop rapidement. Cause yeux rouges, démangeaisons, brûlures et vision floue."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Maladies des Yeux – DMLA, Glaucome, Rétinopathie & Autres"
        description="Découvrez les principales maladies oculaires responsables de la basse vision : DMLA, glaucome, rétinopathie diabétique, cataracte et plus encore."
        canonicalPath="/maladies-yeux"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Les maladies des yeux entraînant une basse vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Les yeux sont des organes vulnérables à de nombreuses maladies. Bien comprendre les causes et conséquences de ces affections permet de mieux appréhender le domaine de la basse vision.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">4</p>
                <p className="text-lg text-foreground">Défauts de réfraction courants</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">3M</p>
                <p className="text-lg text-foreground">Français concernés par la basse vision</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">5+</p>
                <p className="text-lg text-foreground">Maladies héréditaires identifiées</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-2">∞</p>
                <p className="text-lg text-foreground">Solutions d'accompagnement</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Dans cette page</h2>
              <Card className="p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Les principales maladies causant une basse vision",
                    "La DMLA, le Glaucome, la Cataracte",
                    "Le Nystagmus et les Rétinopathies",
                    "Les défauts de réfraction de l'œil",
                    "Les maladies héréditaires et génétiques",
                    "Autres maladies des yeux"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-secondary" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Diseases Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Intro with illustration */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Les principales maladies causant une basse vision
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    L'œil est un organe complexe qui peut être touché par différentes maladies, silencieuses, d'évolution lente, certaines pouvant aboutir sans traitement à une diminution importante de la vue.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={comprendreHeroImage} 
                    alt="Illustration des différentes maladies des yeux" 
                    className="w-full rounded-2xl shadow-card"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                {mainDiseases.map((disease, diseaseIndex) => (
                  <Card key={disease.id} variant="elevated" className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                        <Eye className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                          {disease.title}
                        </h3>
                        <p className="text-lg text-secondary font-semibold mb-4">
                          {disease.subtitle}
                        </p>
                        <p className="text-lg text-foreground mb-4 leading-relaxed">
                          {disease.description}
                        </p>
                        {disease.extra && (
                          <div className="flex items-start gap-4">
                            <p className="text-lg text-muted-foreground italic flex-1">
                              {disease.extra}
                            </p>
                            {diseaseIndex === 0 && (
                              <img 
                                src={amslerGridImage} 
                                alt="Grille d'Amsler pour le test de la DMLA" 
                                className="w-24 h-24 rounded-lg object-cover shadow-sm"
                              />
                            )}
                          </div>
                        )}
                      </div>
                      <div className="lg:w-64 shrink-0 space-y-3">
                        <Card variant="highlighted" className="p-4">
                          <p className="font-bold text-foreground text-lg">{disease.stat}</p>
                          <p className="text-muted-foreground">{disease.statDetail}</p>
                        </Card>
                        {disease.link && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <Link to={disease.link}>
                              En savoir plus
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Refraction Defects Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Sun className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Les défauts de réfraction de l'œil
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Problèmes courants corrigeables par lunettes, lentilles ou chirurgie
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {refractionDefects.map((defect, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {defect.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {defect.description}
                    </p>
                  </Card>
                ))}
              </div>

              <Card variant="muted" className="mt-8 p-6">
                <p className="text-lg text-foreground">
                  Ces défauts de réfraction peuvent être corrigés avec des lunettes, des lentilles de contact ou une intervention chirurgicale. Il est important de faire régulièrement des examens de la vue pour les détecter et les traiter efficacement.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Hereditary Diseases Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Dna className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Les maladies héréditaires et génétiques
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Plus rares mais prévisibles si vos parents les ont développées
                  </p>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {hereditaryDiseases.map((disease, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border-2 border-border px-6">
                    <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline">
                      {disease.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                      {disease.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card variant="highlighted" className="mt-8 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    Il est important de consulter un spécialiste des yeux si vous avez des antécédents familiaux de maladies des yeux héréditaires, afin de détecter et traiter toute maladie le plus tôt possible.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Diseases Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Autres maladies des yeux
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Affections diverses pouvant affecter la vision
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {otherDiseases.map((disease, index) => (
                  <Card key={index} variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {disease.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {disease.description}
                    </p>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground mt-8 text-center max-w-3xl mx-auto">
                Toutes ces maladies des yeux peuvent entraîner une déficience visuelle, une basse vision en raison des conséquences directes sur le fonctionnement de l'œil. Elles peuvent atteindre la rétine, le vitré, l'iris ou le nerf optique.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Un bilan pour mieux comprendre votre situation
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Le bilan basse vision est un état des lieux fonctionnel pour mieux comprendre ce que vous pouvez encore faire avec votre vue, ce qui vous gêne le plus, et quelles pistes concrètes peuvent vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/#bilans">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/vivre-basse-vision">
                    Vivre au quotidien
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaladiesYeux;
