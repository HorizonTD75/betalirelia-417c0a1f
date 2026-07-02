import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check, X, AlertTriangle, Info, Sparkles, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/products/ray-ban-meta-marron.jpg";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/lib/seo";

const CANONICAL = "/boutique/ray-ban-meta";

const apports = [
  "Lire une étiquette ou un prix en magasin",
  "Comprendre un texte court (affiche, menu, notice)",
  "Se faire lire quelques lignes d'un courrier",
  "Identifier un objet ou un produit du quotidien",
  "Demander une description de la scène devant soi",
  "Appeler, dicter ou demander une information à la voix",
  "Obtenir une aide mains libres sans sortir le smartphone",
];

const usages = [
  {
    usage: "Lire une étiquette",
    interet: "Très utile en ponctuel",
    vigilance: "Bon cadrage et bonne lumière nécessaires",
  },
  {
    usage: "Lire un courrier court",
    interet: "Possible si le texte est net",
    vigilance: "Peu adapté aux longs documents",
  },
  {
    usage: "Décrire une scène",
    interet: "Peut aider à comprendre l'environnement",
    vigilance: "Réponse de l'IA à vérifier",
  },
  {
    usage: "Identifier un objet",
    interet: "Utile à domicile ou en magasin",
    vigilance: "Résultat variable selon l'objet",
  },
  {
    usage: "Lire longtemps",
    interet: "Usage limité",
    vigilance: "Préférer une aide dédiée (loupe électronique, téléagrandisseur)",
  },
];

const limites = [
  "Nécessite un smartphone compatible iOS ou Android",
  "Nécessite l'application Meta AI et un compte utilisateur",
  "Certaines fonctions dépendent du pays, de la langue et des mises à jour",
  "Les fonctions d'intelligence artificielle nécessitent souvent une connexion Internet",
  "Il faut être à l'aise avec les commandes vocales",
  "Il faut orienter correctement la tête vers le texte ou l'objet",
  "Ce n'est pas un dispositif médical basse vision",
];

const pourQui = [
  "Personnes atteintes de DMLA qui veulent une aide vocale ponctuelle",
  "Personnes malvoyantes en difficulté avec les petits textes",
  "Personnes qui souhaitent compléter une loupe électronique ou un téléagrandisseur",
  "Aidants qui cherchent une solution simple à tester",
  "Utilisateurs à l'aise avec un smartphone et les commandes vocales",
  "Personnes qui veulent une aide discrète et non médicalisée",
];

const pasPrioritaire = [
  "Personne peu à l'aise avec les applications mobiles",
  "Besoin principal de lecture longue (livre, dossier)",
  "Besoin d'un grossissement visuel direct",
  "Refus de créer un compte en ligne",
  "Absence de connexion Internet fiable",
  "Besoin d'un dispositif médical validé en basse vision",
];

const RayBanMeta = () => {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Aides à la lecture", path: "/aides-lecture-bassevision" },
    { name: "Lunettes intelligentes", path: "/aides-lecture-bassevision/lunettes-intelligentes" },
    { name: "Ray-Ban Meta", path: CANONICAL },
  ]);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ray-Ban Meta et basse vision",
    description:
      "Présentation des lunettes connectées Ray-Ban Meta pour la basse vision : usages possibles, limites et avis Lirelia. Produit en évaluation, non vendu sur Lirelia.",
    url: `${SITE_URL}${CANONICAL}`,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: "LirElia", url: SITE_URL },
    about: { "@type": "Thing", name: "Ray-Ban Meta — lunettes intelligentes grand public" },
  };

  return (
    <div className="min-h-screen">
      <SEOHead jsonLd={[webPageJsonLd, breadcrumb]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70 overflow-hidden">
          <div className="container relative z-10">
            <Link
              to="/aides-lecture-bassevision/lunettes-intelligentes"
              className="inline-flex items-center gap-2 text-base text-primary-foreground/80 hover:text-primary-foreground mb-5 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux lunettes intelligentes
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground border-2 border-secondary mb-5 font-bold text-sm">
                  <FlaskConical className="w-4 h-4" aria-hidden="true" />
                  Produit en évaluation
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
                  Ray-Ban Meta : <span className="text-secondary">lunettes intelligentes</span> grand public et basse vision
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6 font-semibold">
                  Une aide vocale ponctuelle, discrète et prometteuse pour lire, identifier ou comprendre certaines situations du quotidien.
                </p>
                <div className="rounded-2xl bg-primary-foreground/10 border-2 border-primary-foreground/20 p-5 mb-6">
                  <p className="text-lg text-primary-foreground leading-relaxed">
                    <strong>Notre position :</strong> solution prometteuse, à tester selon le besoin réel. Les Ray-Ban Meta ne remplacent pas un bilan basse vision ni une aide optique spécialisée.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contact-conseil?produit=ray-ban-meta">
                      Demander un avis Lirelia
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10" asChild>
                    <Link to="/aides-lecture-bassevision/lunettes-intelligentes">
                      Voir les autres lunettes intelligentes
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden bg-background/95 border-4 border-secondary/40 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Lunettes intelligentes Ray-Ban Meta avec monture marron"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={720}
                  height={386}
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* APPORTS */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/40 text-sm font-semibold mb-4">
                Usages réalistes
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Ce que les Ray-Ban Meta peuvent apporter
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Grâce à leur caméra, leurs micros, leurs haut-parleurs ouverts et leur assistant vocal, ces lunettes peuvent rendre certains gestes du quotidien plus simples — sans avoir à sortir son téléphone.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {apports.map((a) => (
                <div key={a} className="flex items-start gap-3 rounded-xl border-2 border-secondary/30 bg-secondary/5 p-4">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-lg text-foreground leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LECTURE PONCTUELLE */}
        <section className="py-14 md:py-16 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pour la lecture ponctuelle
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              Les Ray-Ban Meta peuvent lire à voix haute, via l'assistant Meta AI, un texte capté par leur caméra. C'est une forme simple de reconnaissance de texte (OCR) couplée à une synthèse vocale.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-5">
              Cela peut être utile pour&nbsp;:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {["une affiche", "un menu", "une étiquette", "un emballage", "une notice courte", "quelques lignes d'un courrier"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-lg text-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /> {i}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-5 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-lg text-foreground leading-relaxed">
                <strong>À retenir&nbsp;:</strong> pour lire longtemps, lire un livre, remplir un dossier ou travailler sur un document long, une loupe électronique, un téléagrandisseur, une tablette adaptée ou une solution OCR spécialisée reste souvent plus confortable.
              </p>
            </div>
          </div>
        </section>

        {/* TABLEAU USAGES */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Usages réalistes en basse vision
            </h2>
            <div className="overflow-x-auto rounded-2xl border-2 border-border shadow-sm">
              <table className="w-full text-left text-base md:text-lg">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th scope="col" className="p-4 font-bold">Usage</th>
                    <th scope="col" className="p-4 font-bold">Intérêt potentiel</th>
                    <th scope="col" className="p-4 font-bold">Point de vigilance</th>
                  </tr>
                </thead>
                <tbody>
                  {usages.map((u, i) => (
                    <tr key={u.usage} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="p-4 font-semibold text-foreground align-top">{u.usage}</td>
                      <td className="p-4 text-foreground align-top">{u.interet}</td>
                      <td className="p-4 text-muted-foreground align-top">{u.vigilance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* LIMITES */}
        <section className="py-14 md:py-16 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
              Les limites à connaître
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sans dramatiser, voici les points à anticiper avant tout achat&nbsp;:
            </p>
            <ul className="space-y-3">
              {limites.map((l) => (
                <li key={l} className="flex items-start gap-3 rounded-xl bg-background border border-border p-4">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-lg text-foreground leading-snug">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POUR QUI / PAS PRIORITAIRE */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="elevated" className="border-t-4 border-t-secondary">
                <CardContent className="p-6 md:p-7">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-start gap-3">
                    <Sparkles className="w-7 h-7 text-secondary shrink-0 mt-1" aria-hidden="true" />
                    Pour qui cela peut être intéressant&nbsp;?
                  </h2>
                  <ul className="space-y-2.5">
                    {pourQui.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-lg text-foreground">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card variant="elevated" className="border-t-4 border-t-accent">
                <CardContent className="p-6 md:p-7">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-start gap-3">
                    <AlertTriangle className="w-7 h-7 text-accent shrink-0 mt-1" aria-hidden="true" />
                    Pour qui ce n'est pas prioritaire&nbsp;?
                  </h2>
                  <ul className="space-y-2.5">
                    {pasPrioritaire.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-lg text-foreground">
                        <X className="w-5 h-5 text-accent shrink-0 mt-1" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AVIS LIRELIA */}
        <section className="py-14 md:py-16 bg-primary/5">
          <div className="container max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/30 text-sm font-semibold mb-4">
              L'avis Lirelia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
              Une solution prometteuse, mais à tester en situation réelle
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed">
              <p>
                Les Ray-Ban Meta ne sont <strong>pas encore une solution basse vision complète</strong>. Elles n'agrandissent pas l'image, ne corrigent pas la vision et ne sont pas conçues comme un dispositif médical.
              </p>
              <p>
                Elles restent cependant intéressantes comme <strong>aide connectée ponctuelle</strong>, notamment pour la lecture courte, la description d'une scène et l'identification d'objets. Leur discrétion — elles ressemblent à des lunettes classiques — est aussi un atout réel pour beaucoup de personnes.
              </p>
              <p>
                Avant toute recommandation, nous préférons les <strong>tester dans des situations réelles</strong>&nbsp;: à votre domicile, avec vos documents, en tenant compte de votre pathologie, de votre niveau d'autonomie numérique et de vos besoins concrets.
              </p>
            </div>
          </div>
        </section>

        {/* À RETENIR */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="rounded-3xl border-4 border-secondary/50 bg-secondary/10 p-6 md:p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Info className="w-7 h-7 text-secondary" aria-hidden="true" />
                À retenir
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Les <strong>Ray-Ban Meta</strong> sont des lunettes intelligentes grand public prometteuses pour certaines personnes malvoyantes. Elles peuvent aider à lire un texte court, décrire une scène ou identifier un objet. Mais elles <strong>ne remplacent ni un bilan basse vision, ni une aide optique ou électronique spécialisée</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
              Vous hésitez à essayer&nbsp;?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Un échange avec notre équipe vous permettra d'évaluer si cette solution peut vous convenir — ou d'identifier une aide plus adaptée à votre besoin réel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
              <Button variant="default" size="lg" className="whitespace-normal h-auto py-3" asChild>
                <Link to="/contact-conseil?produit=ray-ban-meta">
                  Demander un conseil Lirelia
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="whitespace-normal h-auto py-3" asChild>
                <Link to="/aides-lecture-bassevision/lunettes-intelligentes">
                  Découvrir les lunettes intelligentes
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="whitespace-normal h-auto py-3" asChild>
                <Link to="/aides-lecture-bassevision">
                  <ArrowLeft className="w-5 h-5 shrink-0" />
                  Comparer avec les autres aides
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RayBanMeta;
