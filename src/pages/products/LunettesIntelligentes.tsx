import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check, Sparkles, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lunettes-intelligentes.jpg";
import imgIA from "@/assets/products/lunettes-ia-grand-public.jpg";
import imgVocale from "@/assets/products/lunettes-camera-vocale.jpg";
import imgAgrandisseur from "@/assets/products/casque-lunettes-agrandisseur.jpg";

import { getHeroSrcSet as __getHeroSrcSet } from "@/lib/heroSrcSet";
const families = [
  {
    name: "Lunettes IA grand public",
    slug: "lunettes-ia-grand-public",
    image: imgIA,
    imageAlt: "Illustration aquarelle de lunettes intelligentes grand public avec petite caméra intégrée",
    examples: "Ray-Ban Meta, Oakley Meta",
    description:
      "Les lunettes IA grand public intègrent caméra, micro et écouteurs. Portées sur le visage, elles permettent d'obtenir une aide vocale sans tenir son téléphone : décrire une scène, lire un texte court, appeler un proche ou utiliser Be My Eyes mains libres.",
    features: [
      "Caméra, micro, écouteurs ouverts",
      "Commandes vocales et assistant IA",
      "Connexion smartphone (iOS / Android)",
      "Discrètes : aspect lunettes classiques",
      "Disponibles en France (250 à 500 €)",
    ],
    idealFor: [
      "Lire une étiquette ou un menu court",
      "Décrire rapidement une scène",
      "Appel mains libres ou Be My Eyes",
      "Aide ponctuelle, discrète",
      "Premier équipement, budget limité",
    ],
    limit: "Non adaptées à la lecture longue ni à la mobilité autonome.",
  },
  {
    name: "Lunettes et caméras vocales spécialisées",
    slug: "lunettes-cameras-vocales",
    image: imgVocale,
    imageAlt: "Illustration aquarelle d'une petite caméra vocale fixée sur une paire de lunettes",
    examples: "OrCam MyEye, OrCam Read, Envision Glasses",
    description:
      "Ces aides spécialisées basse vision sont conçues dès l'origine pour lire, reconnaître et transmettre vocalement les informations visuelles. OrCam peut fonctionner sans connexion internet, ce qui la rend utilisable partout.",
    features: [
      "Lecture vocale fiable (imprimé, écran)",
      "Reconnaissance d'objets et de codes-barres",
      "OrCam : fonctionne sans connexion",
      "Se fixe sur des lunettes existantes",
      "Disponibles auprès de revendeurs spécialisés",
    ],
    idealFor: [
      "Lire courriers, notices, étiquettes",
      "Reconnaître produits et emballages",
      "Autonomie de lecture à domicile",
      "Personnes peu à l'aise avec un smartphone",
      "DMLA, glaucome, rétinite pigmentaire",
    ],
    limit: "Prix élevé (1 490 à 4 750 €). Essai impératif avant achat.",
  },
  {
    name: "Casques et lunettes agrandisseurs",
    slug: "casques-lunettes-agrandisseurs",
    image: imgAgrandisseur,
    imageAlt: "Illustration aquarelle d'un casque visuel agrandisseur porté sur le visage",
    examples: "Arc-Vision, ViewPoint, eSight, Luna Glass",
    description:
      "Ces solutions cherchent à exploiter la vision résiduelle en agrandissant et contrastant l'image directement devant les yeux. Utiles pour regarder la télévision, travailler sur ordinateur ou lire depuis une position stable.",
    features: [
      "Agrandissement réel (×2 à ×20 et plus)",
      "Contraste et luminosité réglables",
      "Écran intégré devant les yeux",
      "Modes vision de près et de loin",
      "Disponibles auprès de revendeurs spécialisés",
    ],
    idealFor: [
      "Regarder la télévision",
      "Travailler sur ordinateur",
      "Lire en position assise, stable",
      "Vision résiduelle à exploiter",
      "Déficience visuelle sévère",
    ],
    limit: "Usage statique uniquement. Non adaptés à la marche (risque de chute).",
  },
];

const buyingGuide = [
  {
    title: "Partir du besoin, pas du produit",
    description:
      "Définir d'abord ce que l'on veut faire : lire un courrier court, reconnaître un objet, regarder la télévision, travailler sur ordinateur, ou simplement obtenir une aide ponctuelle. Le besoin détermine la famille de lunettes.",
  },
  {
    title: "Tester avant d'acheter",
    description:
      "Faire tester le produit avec ses propres documents, dans son logement, avec ses lunettes correctives habituelles. Plusieurs revendeurs spécialisés proposent un prêt ou une démonstration personnalisée avant achat.",
  },
  {
    title: "Aide ponctuelle ou aide principale ?",
    description:
      "Les lunettes IA grand public conviennent pour une aide discrète et ponctuelle. Pour un besoin quotidien ou plus intense, les solutions spécialisées (OrCam, casques) sont plus adaptées mais demandent un apprentissage.",
  },
  {
    title: "Une mention importante",
    description:
      "Les lunettes intelligentes ne remplacent pas une loupe électronique pour la lecture longue, ni une canne blanche pour la mobilité. Elles ne corrigent pas la DMLA, le glaucome ou la rétinite pigmentaire.",
  },
];

const LunettesIntelligentes = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Lunettes intelligentes pour malvoyants",
          description:
            "Découvrez les lunettes intelligentes pour malvoyants : lunettes IA, caméras vocales spécialisées et casques agrandisseurs pour lire, reconnaître et mieux percevoir.",
          url: "https://lirelia.fr/aides-lecture-bassevision/lunettes-intelligentes",
        }}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img src={(__getHeroSrcSet(heroImage)?.src) ?? heroImage} srcSet={__getHeroSrcSet(heroImage)?.srcSet} sizes="100vw"
              alt="Illustration d’une paire de lunettes intelligentes connectées posée sur un livre ouvert"
              className="w-full h-full object-cover opacity-20"
              aria-hidden="true"
              loading="eager" fetchPriority="high"
              width={800}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-5xl">
              <Link
                to="/aides-lecture-bassevision"
                className="inline-flex items-center gap-2 text-base text-primary-foreground/80 hover:text-primary-foreground mb-5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux aides à la lecture
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  <span className="text-secondary">Lunettes intelligentes</span> pour basse vision et malvoyance
                </h1>
              </div>
              <p className="font-serif text-xl md:text-2xl text-primary-foreground/90 mb-5 font-semibold">
                Des solutions numériques portées sur le visage pour lire, reconnaître et mieux percevoir — sans tenir son téléphone
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-6 max-w-3xl">
                Les lunettes intelligentes permettent à une personne malvoyante d'obtenir une aide vocale mains libres : lire une étiquette ou un courrier court, reconnaître un objet, décrire une scène, appeler un proche ou utiliser Be My Eyes. Il en existe trois grandes familles qui ne répondent ni aux mêmes besoins, ni aux mêmes budgets. Elles ne rendent pas la vue, mais peuvent compléter utilement le quotidien.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact-conseil?produit=lunettes-intelligentes">
                  Être conseillé(e) sur les lunettes intelligentes
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* SECTION FAMILLES */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/40 text-sm font-semibold mb-4">
                Notre sélection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre sélection en cours de constitution
              </h2>
              <p className="text-xl text-muted-foreground">
                Chaque famille répond à un usage différent. Aucun produit n'est universellement meilleur — le bon choix dépend du besoin réel, du budget, de l'aisance technologique et d'un essai préalable.
              </p>
            </div>

            {/* Bandeau "en cours de constitution" */}
            <div className="max-w-4xl mx-auto mb-12 rounded-2xl border-2 border-secondary/50 bg-secondary/10 p-5 md:p-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                <strong>Cette sélection est en cours de constitution.</strong> Les solutions présentées sont actuellement en évaluation et en test chez Lirelia.{" "}
                <Link to="/contact-conseil?produit=lunettes-intelligentes" className="underline font-semibold hover:text-primary">
                  Contactez-nous pour être conseillé(e)
                </Link>{" "}
                avant tout achat.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {families.map((f) => (
                <Card key={f.slug} variant="elevated" className="h-full flex flex-col border-t-4 border-t-secondary overflow-hidden">
                  <div className="rounded-t-2xl overflow-hidden border-b-2 border-border bg-muted/30">
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{f.name}</CardTitle>
                    <p className="text-sm text-muted-foreground italic">Exemples : {f.examples}</p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">{f.description}</p>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">Caractéristiques</h3>
                      <ul className="space-y-2">
                        {f.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-base">
                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">Idéal pour</h3>
                      <ul className="space-y-1">
                        {f.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                            <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl bg-accent/10 border border-accent/30 p-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                        <strong>À savoir :</strong> {f.limit}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    {f.slug === "lunettes-ia-grand-public" && (
                      <Button variant="default" className="w-full" asChild>
                        <Link to="/aides-lecture-bassevision/lunettes-intelligentes/ray-ban-meta">
                          Découvrir les Ray-Ban Meta
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/contact-conseil?produit=${f.slug}`}>
                        Être conseillé(e)
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDE D'ACHAT */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-sm font-semibold mb-4">
                  Guide d'achat
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Comment choisir ses lunettes intelligentes ?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Le choix ne doit pas partir du produit, mais du besoin. Deux personnes ayant la même pathologie peuvent obtenir des résultats très différents. Un essai dans les conditions réelles du quotidien est indispensable avant tout achat.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {buyingGuide.map((c, i) => {
                  const tints = [
                    "bg-accent/5 border-accent/30",
                    "bg-secondary/10 border-secondary/40",
                    "bg-primary/5 border-primary/30",
                    "bg-muted border-border",
                  ];
                  const tint = tints[i % tints.length];
                  return (
                    <div key={i} className={`rounded-2xl border-2 p-6 shadow-sm ${tint}`}>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                        <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                        {c.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Message de prudence */}
              <div className="mt-10 rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Les lunettes intelligentes <strong>ne rendent pas la vue</strong>. Elles peuvent aider dans certaines situations précises, mais elles doivent être choisies selon l'usage réel et <strong>testées avant achat</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Avant de choisir des lunettes intelligentes, un échange avec notre équipe vous permettra d'évaluer si elles correspondent vraiment à votre besoin — et lesquelles essayer en priorité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                <Button variant="default" size="lg" className="text-xl whitespace-normal text-center h-auto py-3" asChild>
                  <Link to="/contact-conseil?produit=lunettes-intelligentes">
                    Demandez-nous un conseil sur les lunettes intelligentes
                    <ArrowRight className="w-6 h-6 shrink-0" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="whitespace-normal text-center h-auto py-3" asChild>
                  <Link to="/aides-lecture-bassevision">
                    <ArrowLeft className="w-5 h-5 shrink-0" />
                    Toutes les aides à la lecture
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

export default LunettesIntelligentes;
