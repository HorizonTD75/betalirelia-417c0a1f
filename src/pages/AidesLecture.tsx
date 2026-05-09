import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight, Search, Lightbulb, Monitor, Eye, Glasses } from "lucide-react";
import { Link } from "react-router-dom";
import aidesLectureHero from "@/assets/aides-lecture-hero.jpg";
import loupeVerre from "@/assets/loupe-verre.jpg";
import loupeElectronique from "@/assets/loupe-electronique.jpg";
import lampeLecture from "@/assets/lampe-lecture.jpg";
import teleAgrandisseur from "@/assets/tele-agrandisseur.jpg";
import lunettesLoupes from "@/assets/lunettes-loupes.jpg";

const CALENDLY_URL = "https://calendly.com/lirelia/bilan_basse_vision";

// Palette rotative inspirée de la home (PathwaysSection) pour redonner
// de la chaleur visuelle au silo : bleu, jaune, vert/teal, rouge doux, primaire.
const categoryAccents = [
  { iconBg: "bg-accent/15", iconColor: "text-accent", border: "border-accent/30", hoverBg: "group-hover:bg-accent/25" },
  { iconBg: "bg-primary/10", iconColor: "text-primary", border: "border-primary/30", hoverBg: "group-hover:bg-primary/20" },
  { iconBg: "bg-secondary/25", iconColor: "text-secondary-foreground", border: "border-secondary/40", hoverBg: "group-hover:bg-secondary/40" },
  { iconBg: "bg-destructive/10", iconColor: "text-destructive", border: "border-destructive/30", hoverBg: "group-hover:bg-destructive/20" },
  { iconBg: "bg-accent/15", iconColor: "text-accent", border: "border-accent/30", hoverBg: "group-hover:bg-accent/25" },
];

// Icônes solides pour les blocs détaillés (en-têtes de chaque section catégorie)
const sectionIconStyles = [
  "bg-accent text-accent-foreground",
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-destructive text-destructive-foreground",
  "bg-accent text-accent-foreground",
];

const categories = [
  {
    id: "loupe-verre",
    shortLabel: "Loupes en verre",
    shortDesc: "Grossissement optique simple, sans batterie, pour la lecture ponctuelle.",
    link: "/aides-lecture-bassevision/loupes-verre",
    icon: Search,
    title: "Loupes en verre : grossissement optique simple et immédiat",
    image: loupeVerre,
    imageAlt: "Illustration aquarelle d'une loupe en verre posée sur un livre ouvert",
    intro: `La loupe en verre reste l'aide à la lecture la plus connue, et souvent la première à laquelle on pense quand la vue baisse. Sa lentille convergente offre un grossissement immédiat, sans électronique, pour relire un courrier, vérifier une étiquette ou suivre quelques lignes d'un livre.`,
    usages: [
      "Lire son courrier, ses factures, une notice",
      "Consulter une étiquette de médicament ou de boîte de conserve",
      "Faire un repérage rapide sur un document à plat",
    ],
    avantages: [
      "Personnes ayant encore une vision exploitable de près",
      "Besoin ponctuel d'un grossissement d'appoint",
      "Recherche d'un outil simple, sans batterie ni réglage",
    ],
    limites: [
      "Grossissement fixe, non réglable",
      "Confort de lecture très dépendant de l'éclairage",
    ],
    cta: "Découvrir les loupes en verre",
  },
  {
    id: "loupe-electronique",
    shortLabel: "Loupes électroniques",
    shortDesc: "Zoom réglable et contraste renforcé sur écran, à la maison ou en déplacement.",
    link: "/aides-lecture-bassevision/loupes-electroniques",
    icon: Monitor,
    title: "Loupes électroniques : grossissement variable et contraste renforcé",
    image: loupeElectronique,
    imageAlt: "Illustration aquarelle d'une loupe électronique portable affichant du texte agrandi",
    intro: `La loupe électronique, ou loupe numérique, utilise une caméra et un écran pour afficher le texte agrandi. Elle permet un zoom puissant, des contrastes adaptés à la basse vision et une lecture beaucoup plus longue que ce qu'autorise une loupe optique classique. Elle existe en version de poche, transportable ou de bureau.`,
    usages: [
      "Lire un journal, un livre ou un document long sans fatigue excessive",
      "Consulter prix, menus ou étiquettes en magasin ou au restaurant",
      "Régler finement zoom et contraste selon le moment de la journée",
    ],
    avantages: [
      "Vision plus altérée ou atteinte centrale (DMLA, par exemple)",
      "Besoin de réglages fins et de forts grossissements",
      "Lecture régulière à domicile ou en déplacement",
    ],
    limites: [
      "Nécessite une batterie ou une alimentation",
      "Investissement plus élevé qu'une loupe optique",
    ],
    cta: "Découvrir les loupes électroniques",
  },
  {
    id: "lampes",
    shortLabel: "Lampes adaptées",
    shortDesc: "Un éclairage maîtrisé pour réduire l'éblouissement et la fatigue visuelle.",
    link: "/aides-lecture-bassevision/lampes",
    icon: Lightbulb,
    title: "Lampes de lecture : voir mieux grâce à un éclairage maîtrisé",
    image: lampeLecture,
    imageAlt: "Illustration aquarelle d'une lampe de bureau éclairant un livre ouvert",
    intro: `En basse vision, on cherche souvent à voir plus grand alors qu'il faudrait d'abord voir mieux. Un éclairage adapté change radicalement le confort de lecture : il réduit la fatigue, limite l'éblouissement et fait ressortir les contrastes du texte. Une bonne lampe est souvent le complément le plus utile à une loupe ou à un agrandisseur.`,
    usages: [
      "Éclairer précisément la zone de lecture sans éblouir",
      "Régler la température de couleur et l'intensité selon le moment",
      "Compléter une loupe ou une loupe électronique pour gagner en confort",
    ],
    avantages: [
      "Personnes sensibles à la lumière ou à l'éblouissement",
      "Lectures prolongées en fauteuil, au bureau ou au lit",
      "Compagnon indispensable de toute aide visuelle",
    ],
    limites: [
      "Ne corrige pas le grossissement à elle seule",
      "Demande un bon positionnement pour éviter les reflets",
    ],
    cta: "Découvrir les lampes adaptées",
  },
  {
    id: "tele-agrandisseur",
    shortLabel: "Télé-agrandisseurs",
    shortDesc: "Grand écran et confort maximal pour lire, écrire et travailler longtemps.",
    link: "/aides-lecture-bassevision/tele-agrandisseurs",
    icon: Eye,
    title: "Télé-agrandisseurs : confort maximal pour lire et écrire longtemps",
    image: teleAgrandisseur,
    imageAlt: "Illustration aquarelle d'une personne utilisant un télé-agrandisseur avec grand écran",
    intro: `Le télé-agrandisseur est une station de lecture posée sur un bureau, avec un grand écran et un plateau mobile sous une caméra. Il est particulièrement utile pour lire un journal, remplir un formulaire, écrire une lettre ou faire des mots croisés. Sa stabilité, son grand champ de vision et sa posture confortable en font un véritable outil du quotidien pour les déficiences visuelles plus marquées.`,
    usages: [
      "Lire longuement journaux, livres, documents administratifs",
      "Écrire à la main ou remplir un formulaire avec confort",
      "Faire des mots croisés, suivre une partition, regarder des photos",
    ],
    avantages: [
      "Lecture quotidienne et prolongée à domicile",
      "Besoin d'un fort grossissement et d'une grande stabilité",
      "Recherche d'une posture confortable, mains libres",
    ],
    limites: [
      "Encombrement plus important qu'une loupe portable",
      "Investissement financier conséquent",
    ],
    cta: "Découvrir les télé-agrandisseurs",
  },
  {
    id: "lunettes-loupes",
    shortLabel: "Lunettes loupes",
    shortDesc: "Un grossissement mains libres pour la lecture, le bricolage ou la vision de loin.",
    link: "/aides-lecture-bassevision/lunettes-loupes",
    icon: Glasses,
    title: "Lunettes loupes : un grossissement mains libres, près ou de loin",
    image: lunettesLoupes,
    imageAlt: "Illustration aquarelle d'une paire de lunettes loupes posée sur un livre ouvert",
    intro: `Les lunettes loupes apportent un grossissement mains libres, à une distance de travail bien définie. Certaines sont conçues pour les activités de près — lecture, couture, bricolage — d'autres pour mieux distinguer une scène, un tableau ou un écran à distance. Leur efficacité dépend très étroitement du choix du modèle et de l'usage prévu.`,
    usages: [
      "Lire, coudre, bricoler ou faire de petits travaux minutieux mains libres",
      "Suivre un cours, une conférence, une scène de théâtre ou de cinéma",
      "Compléter une autre aide visuelle pour des usages spécifiques",
    ],
    avantages: [
      "Personnes recherchant une solution mains libres",
      "Activités à distance de travail constante (couture, modélisme)",
      "Usages ciblés en vision de loin, dans un cadre stable et assis",
    ],
    limites: [
      "Choix très dépendant de la distance d'usage",
      "Demande souvent un bon conseil avant achat",
      "Les modèles de vision de loin ne sont pas adaptés à la conduite",
    ],
    cta: "Découvrir les lunettes loupes",
  },
];

const AidesLecture = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Aides à la Lecture Basse Vision : loupes, lampes, lunettes loupes | LirElia"
        description="Loupes en verre, loupes électroniques, lampes adaptées, télé-agrandisseurs et lunettes loupes : trouvez l'aide à la lecture la mieux adaptée à votre basse vision."
        canonicalPath="/aides-lecture-bassevision"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Aides à la lecture pour malvoyants",
          "description": "Conseil et accompagnement dans le choix d'aides à la lecture pour personnes malvoyantes : loupes en verre, loupes électroniques, lampes adaptées, télé-agrandisseurs, lunettes loupes.",
          "provider": { "@type": "Organization", "name": "LirElia" },
          "serviceType": "Conseil en aides visuelles basse vision"
        }}
      />
      <Header />
      <main id="main-content">
        {/* HERO — version compacte */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={aidesLectureHero}
              alt="Solutions et aides techniques pour la lecture en basse vision"
              className="w-full h-full object-cover opacity-15"
              aria-hidden="true" loading="eager" decoding="async" width={1440} height={400} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Aides à la lecture <span className="text-secondary">pour malvoyants</span>
              </h1>
              <p className="font-serif text-xl md:text-2xl text-primary-foreground/90 mb-5">
                Retrouver le confort de lire, même en cas de basse vision
              </p>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-6">
                Loupes, lampes, télé-agrandisseurs ou lunettes loupes : chaque aide répond à un besoin différent.
                L'objectif est simple : lire plus facilement, avec moins de fatigue.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {[
                  "Agrandir les caractères",
                  "Améliorer le contraste",
                  "Réduire la fatigue visuelle",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-base md:text-lg text-primary-foreground">
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact-conseil?sujet=aide-choix">
                  Être conseillé(e) pour choisir mon aide
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Vague */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* PANORAMA — fond teinté + cartes compactes */}
        <section className="py-10 md:py-14 bg-gradient-to-b from-muted/40 to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Les grandes familles d'aides à la lecture
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Chaque aide répond à un usage précis : lire quelques lignes, travailler longtemps,
                mieux éclairer une page ou garder les mains libres.
              </p>
            </div>

            {/* Grille des 5 catégories en cartes résumées — palette rotative */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {categories.map((cat, i) => {
                const accent = categoryAccents[i % categoryAccents.length];
                return (
                  <Link key={cat.id} to={cat.link} className="group">
                    <Card
                      variant="elevated"
                      className={`h-full text-center border-2 ${accent.border} hover:-translate-y-1 transition-transform`}
                    >
                      <CardHeader className="items-center pb-2 p-4 sm:p-5">
                        <div
                          className={`w-14 h-14 rounded-xl ${accent.iconBg} flex items-center justify-center mb-2 ${accent.hoverBg} transition-colors`}
                        >
                          <cat.icon className={`w-7 h-7 ${accent.iconColor}`} aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg md:text-xl">{cat.shortLabel}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-5 pt-0">
                        <p className="text-base text-muted-foreground">{cat.shortDesc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Sections détaillées — fond alterné + icône colorée */}
            {categories.map((cat, index) => {
              const iconStyle = sectionIconStyles[index % sectionIconStyles.length];
              const isAlt = index % 2 === 1;
              return (
                <section
                  key={cat.id}
                  id={cat.id}
                  className={`py-8 md:py-10 px-4 md:px-6 my-6 rounded-2xl ${
                    isAlt ? "bg-muted/50" : "bg-card border-2 border-border shadow-card"
                  }`}
                >
                  {/* Image + Icon/Title row */}
                  <div className="flex flex-col md:flex-row gap-5 mb-6 items-start">
                    <div className="w-full md:w-56 lg:w-64 shrink-0 rounded-xl overflow-hidden shadow-card border-2 border-border">
                      <img
                        src={cat.image}
                        alt={cat.imageAlt}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl ${iconStyle} flex items-center justify-center shrink-0 shadow-card`}>
                          <cat.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                          {cat.title}
                        </h2>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {cat.intro}
                      </p>
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                        Usages concrets
                      </h3>
                      <ul className="space-y-2">
                        {cat.usages.map((usage, i) => (
                          <li key={i} className="flex items-start gap-2 text-base">
                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{usage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-3">Pour qui ?</h3>
                      <ul className="space-y-2">
                        {cat.avantages.map((av, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-foreground">
                            <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <span>{av}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-3">Limites</h3>
                      <ul className="space-y-2">
                        {cat.limites.map((lim, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                            <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="default" size="lg" asChild>
                    <Link to={cat.link}>
                      {cat.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </section>
              );
            })}
          </div>
        </section>

        <ComparisonSection />

        {/* ACCOMPAGNEMENT FINAL — pleine largeur, fond bleu profond */}
        <section className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Une aide à la lecture efficace commence par un bon conseil
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-4">
                Chaque personne malvoyante a des besoins différents. Avant de choisir une loupe, une lampe
                ou un téléagrandisseur, il est souvent utile d'être conseillé selon votre vision,
                vos habitudes et vos usages réels.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Chez LirElia, nous privilégions l'évaluation des besoins réels, les essais concrets
                et un accompagnement humain et progressif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact-conseil?sujet=aide-choix">
                    Demander un conseil personnalisé
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/bilans-bassevision">
                    Découvrir les bilans basse vision
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

export default AidesLecture;
