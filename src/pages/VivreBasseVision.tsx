import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Home, 
  BookOpen,
  Tv,
  Sun,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Heart,
  Coffee,
  Smartphone,
  Lamp,
  Palette,
  ShoppingBag
} from "lucide-react";
import { Link } from "react-router-dom";
import readingMagnifierImage from "@/assets/reading-magnifier.jpg";
import tabletAccessibilityImage from "@/assets/tablet-accessibility.jpg";
import accessibleKitchenImage from "@/assets/accessible-kitchen.jpg";
import seniorWomanStreetImage from "@/assets/senior-woman-street.png";

const VivreBasseVision = () => {
  const dailyActivities = [
    {
      icon: BookOpen,
      title: "Lire et Écrire",
      tips: [
        "Utiliser des loupes électroniques ou optiques adaptées",
        "Privilégier un éclairage directionnel sur le document",
        "Agrandir les caractères sur les écrans et tablettes",
        "Utiliser des supports inclinés pour réduire la fatigue",
        "Prendre des pauses régulières pour reposer les yeux"
      ]
    },
    {
      icon: Tv,
      title: "Regarder la télévision",
      tips: [
        "S'asseoir à une distance adaptée de l'écran",
        "Utiliser des télé-agrandisseurs si nécessaire",
        "Régler le contraste et la luminosité de l'écran",
        "Éviter les reflets sur l'écran",
        "Utiliser les sous-titres en gros caractères"
      ]
    },
    {
      icon: Smartphone,
      title: "Utiliser les écrans",
      tips: [
        "Activer le mode d'accessibilité sur vos appareils",
        "Augmenter la taille des polices et icônes",
        "Utiliser le mode sombre si la lumière vous gêne",
        "Activer la fonction loupe intégrée",
        "Utiliser la synthèse vocale pour les textes longs"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Faire ses courses",
      tips: [
        "Préparer une liste avec de gros caractères",
        "Utiliser une loupe portative pour lire les étiquettes",
        "Privilégier les magasins bien éclairés",
        "Demander de l'aide au personnel si nécessaire",
        "Utiliser des applications de lecture à haute voix"
      ]
    }
  ];

  const homeAdaptations = [
    {
      icon: Lamp,
      title: "L'éclairage",
      description: "Un bon éclairage est essentiel. Privilégiez les lampes directionnelles pour la lecture, évitez les zones d'ombre et les éblouissements.",
      tips: [
        "Lampe de bureau orientable sur chaque poste de lecture",
        "Éclairage uniforme dans les couloirs et escaliers",
        "Éviter les ampoules trop blanches qui peuvent éblouir",
        "Installer des variateurs d'intensité"
      ]
    },
    {
      icon: Palette,
      title: "Les contrastes",
      description: "Utiliser des contrastes forts aide à mieux repérer les objets et les limites des espaces.",
      tips: [
        "Marquer les marches d'escalier avec des bandes contrastées",
        "Utiliser de la vaisselle de couleur contrastante",
        "Choisir des interrupteurs de couleur différente du mur",
        "Placer des repères tactiles ou colorés sur les appareils"
      ]
    },
    {
      icon: Home,
      title: "L'organisation",
      description: "Une maison bien organisée réduit la fatigue et le stress liés à la recherche d'objets.",
      tips: [
        "Toujours ranger les objets au même endroit",
        "Dégager les passages et éviter les obstacles au sol",
        "Utiliser des boîtes étiquetées en gros caractères",
        "Installer des mains courantes dans les zones de circulation"
      ]
    }
  ];

  const outdoorTips = [
    {
      title: "Les déplacements",
      items: [
        "Porter des lunettes filtrantes contre l'éblouissement",
        "Utiliser une canne blanche si le champ visuel est réduit",
        "Repérer les trajets habituels et leurs points de repère",
        "Éviter les heures de forte affluence si possible"
      ]
    },
    {
      title: "Les transports",
      items: [
        "Demander les titres de transport en gros caractères",
        "Utiliser les applications d'aide au transport accessibles",
        "Signaler sa situation au personnel si besoin d'aide",
        "Repérer les lignes et arrêts réguliers à l'avance"
      ]
    },
    {
      title: "Les activités sociales",
      items: [
        "Prévenir vos interlocuteurs de votre déficience visuelle",
        "Demander aux gens de se présenter quand ils vous abordent",
        "Se placer à un endroit bien éclairé pour voir les visages",
        "Ne pas hésiter à demander de l'aide pour lire un menu"
      ]
    }
  ];

  const leisureActivities = [
    {
      icon: BookOpen,
      title: "Lecture",
      description: "Livres audio, liseuses à gros caractères, livres en grands caractères"
    },
    {
      icon: Tv,
      title: "Cinéma & Théâtre",
      description: "Audiodescription, places adaptées, accompagnement"
    },
    {
      icon: Coffee,
      title: "Cuisine & Jardinage",
      description: "Ustensiles adaptés, repères tactiles, éclairage ciblé"
    },
    {
      icon: Users,
      title: "Rencontres",
      description: "Clubs basse vision, visioconférences, groupes de parole"
    }
  ];

  const services = [
    {
      title: "En combinant",
      items: [
        "Un suivi médical sérieux (ophtalmo)",
        "Une correction optique optimisée (opticien)",
        "Un accompagnement personnalisé (visiopraticien)"
      ]
    },
    {
      title: "On peut souvent",
      items: [
        "Retrouver le plaisir de lire, même différemment",
        "Sécuriser les déplacements à l'intérieur et à l'extérieur",
        "Adapter les loisirs (télé, jeux, couture, jardinage)",
        "Réduire la fatigue visuelle et le stress"
      ]
    },
    {
      title: "Lors d'un bilan",
      items: [
        "Analyser vos besoins réels",
        "Tester différentes aides visuelles",
        "Identifier si des lunettes spécifiques vous aideraient",
        "Construire un plan d'adaptation au quotidien"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Vivre au quotidien avec une basse vision
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Des solutions concrètes et des conseils pratiques pour maintenir votre autonomie et votre qualité de vie malgré une déficience visuelle.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card variant="highlighted" className="p-8">
                <div className="flex items-start gap-4">
                  <Heart className="w-10 h-10 text-secondary shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      La basse vision n'est pas une fatalité
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      Même si la maladie de l'œil ne peut pas toujours être guérie, on peut adapter l'environnement, le matériel et les habitudes pour mieux utiliser la vision qui reste. Ce guide vous propose des solutions concrètes pour chaque aspect de votre vie quotidienne.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Daily Activities Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Intro with images */}
              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={readingMagnifierImage} 
                    alt="Personne utilisant une loupe pour lire" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Lecture adaptée</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={tabletAccessibilityImage} 
                    alt="Utilisation d'une tablette avec accessibilité" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Écrans accessibles</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={accessibleKitchenImage} 
                    alt="Cuisine adaptée à la basse vision" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <span className="text-primary-foreground font-semibold">Maison sécurisée</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Les activités du quotidien
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Des adaptations simples pour continuer à profiter de vos activités préférées.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {dailyActivities.map((activity, index) => (
                  <Card key={index} variant="elevated" className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <activity.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {activity.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {activity.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-lg text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Home Adaptations Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Adapter son domicile
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Un environnement bien adapté réduit la fatigue visuelle et améliore l'autonomie.
              </p>
              
              <div className="space-y-8">
                {homeAdaptations.map((adaptation, index) => (
                  <Card key={index} className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                            <adaptation.icon className="w-6 h-6 text-secondary-foreground" />
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-foreground">
                            {adaptation.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {adaptation.description}
                        </p>
                      </div>
                      <div className="lg:w-2/3">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {adaptation.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-lg text-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
                <div className="lg:col-span-1">
                  <img 
                    src={seniorWomanStreetImage} 
                    alt="Illustration d'une senior avec une canne blanche traversant la rue" 
                    className="w-full rounded-2xl shadow-card"
                  />
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-foreground">
                        À l'extérieur
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Conseils pour se déplacer et maintenir une vie sociale active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {outdoorTips.map((section, index) => (
                  <Card key={index} variant="elevated" className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leisure Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Continuer ses loisirs
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                Avec les bonnes adaptations, vous pouvez continuer à profiter de vos passions.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {leisureActivities.map((activity, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <activity.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Ce que nous pouvons faire pour vous aider
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} variant={index === 1 ? "highlighted" : "default"} className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Prêt à retrouver votre autonomie ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Un bilan personnalisé vous permettra d'identifier les solutions les mieux adaptées à votre situation et à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/#bilans">
                    Découvrir nos bilans
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/#club">
                    Rejoindre le Club
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

export default VivreBasseVision;
