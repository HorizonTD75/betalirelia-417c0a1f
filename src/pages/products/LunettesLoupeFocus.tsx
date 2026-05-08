import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Glasses } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import ProductTrustBanner from "@/components/products/ProductTrustBanner";
import productImage from "@/assets/products/lunettes-loupes-focus_DMLA.jpg";

const STRIPE_URL = "https://buy.stripe.com/14A00k0nQ5dJ6lF4Fn2Fa01";
const shortPoints = ['Grossissement modéré de x 2,5', 'Réglage de dioptrie indépendant pour chaque œil', 'Lunettes loupes légères'];
const keyPoints = ['Grossissement x 2,5 — vision précise pour les tâches de près', 'Conçues pour des distances de 25 à 45 cm', 'Réglage de dioptrie indépendant pour chaque œil via molette blanche sur chaque branche', 'Molette noire de verrouillage pour stabiliser le réglage', 'Mains libres — portées sur le nez comme des lunettes ordinaires', 'Légères et confortables, même sur de longues périodes', 'Fournies avec un étui rigide'];
const specs = [{'label': 'Grossissement', 'value': '~2,5×'}, {'label': "Distance d'utilisation", 'value': '25 à 45 cm'}, {'label': 'Distance inter-pupillaire', 'value': '60 à 68 mm'}, {'label': 'Réglage dioptrie', 'value': '±4 dioptries (indépendant par œil)'}, {'label': 'Verrouillage du réglage', 'value': 'Oui (molette noire)'}, {'label': 'Correction cylindres', 'value': 'Non possible'}, {'label': 'Matériaux', 'value': 'Lentilles acrylique, monture ABS'}, {'label': 'Poids', 'value': '70 g'}, {'label': 'Accessoire inclus', 'value': 'Étui rigide'}];
const descriptionBlocks = [{'title': "À qui s'adressent ces lunettes ?", 'paragraphs': ["Les lunettes loupe FOCUS s'adressent aux personnes malvoyantes, presbytes ou atteintes de DMLA qui souhaitent effectuer des activités de près avec plus de confort. Elles se portent à la place des lunettes de vue habituelles."]}, {'title': 'Quand les utiliser ?', 'paragraphs': ['Ces lunettes sont conçues pour toutes les activités nécessitant une vision nette à courte distance (25 à 45 cm) : lecture de livres, de notices de médicaments, de courrier, consultation du téléphone, mots croisés, couture, bricolage, peinture, philatélie, modélisme.', 'Elles sont aussi pratiques dans un bureau, en classe ou en bibliothèque pour consulter des documents.']}, {'title': 'Comment ça fonctionne ?', 'paragraphs': ['Chaque branche est équipée de deux molettes :', 'Le réglage prend quelques secondes. Après une courte période d’adaptation de quelques heures, la plupart des utilisateurs trouvent ces lunettes très confortables.'], 'items': ['Molette blanche : règle la dioptrie de –4 à +4, indépendamment pour chaque œil', 'Molette noire : verrouille le réglage pour plus de stabilité']}, {'title': 'L’avantage des lunettes loupe vs loupe à main', 'paragraphs': ['Portées sur le nez, les lunettes loupe libèrent les deux mains pour tenir un livre, manipuler un objet ou réaliser un travail de précision — contrairement à une loupe tenue à la main.']}];
const notes = ['La correction des cylindres (astigmatisme) n’est pas possible. En cas de corrections multiples ou spécifiques, les lunettes FOCUS peuvent ne pas convenir.', 'Pour les écrans d’ordinateur, elles sont utilisables si la distance entre les yeux et l’écran est d’environ 25 cm.'];

const LunettesLoupeFocus = () => {
  return (
    <div className="min-h-screen">
      <SEOHead title="Lunettes Loupe FOCUS pour Voir de Près | LirElia" description="Lunettes loupe FOCUS : grossissement 2,5x, réglage indépendant et mains libres pour lecture, couture, bricolage et activités de près." canonicalPath="/boutique/lunettes-loupe-focus" />
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
            <span className="text-foreground font-semibold">Lunettes Loupe FOCUS</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                <img src={productImage} alt="Lunettes loupes Focus adaptées DMLA et malvoyance" className="w-full aspect-square object-contain bg-muted" loading="eager" width={720} height={720} />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lunettes Loupe FOCUS</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">Lunettes loupes pour la lecture, les travaux manuels, la couture, la philatélie — idéales pour voir de près avec les mains libres.</p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">89 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter ce produit<ArrowRight className="w-5 h-5" /></a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">Avec les lunettes loupes FOCUS, les petits travaux manuels, la consultation de boîtes de médicaments, notices, signatures, sont plus faciles avec ces loupes posées sur le nez, plutôt qu'avec une loupe tenue à la main.</p>
                <ul className="space-y-2">
                  {shortPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /><span>{point}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-12">
          <div className="max-w-5xl mx-auto">
            <ProductTrustBanner />
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
          <div className="space-y-6">
            {descriptionBlocks.map((block) => <div key={block.title} className="bg-card rounded-2xl border-2 border-border p-6 md:p-8"><h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>{block.paragraphs.map((paragraph) => <p key={paragraph} className="text-xl text-foreground leading-loose mb-4 last:mb-0">{paragraph}</p>)}{block.items && <ul className="space-y-3 mt-4">{block.items.map((item) => <li key={item} className="flex items-start gap-3 text-xl text-foreground leading-relaxed"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /><span>{item}</span></li>)}</ul>}</div>)}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Caractéristiques techniques</h2>
          <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
            {specs.map((row) => <div key={row.label} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] border-b border-border last:border-b-0"><div className="bg-muted px-5 py-4 font-bold text-foreground text-lg">{row.label}</div><div className="px-5 py-4 text-lg text-foreground leading-relaxed">{row.value}</div></div>)}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Points clés</h2>
          <Card variant="elevated"><CardContent className="p-6 md:p-8"><ul className="space-y-3">
            {keyPoints.map((point) => <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /><span>{point}</span></li>)}
          </ul></CardContent></Card>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto grid gap-6">
          <Card variant="elevated"><CardContent className="p-6 md:p-8"><div className="flex items-center gap-3 mb-5"><div className="p-3 rounded-xl bg-primary/10 text-primary"><Glasses className="w-6 h-6" /></div><h2 className="font-serif text-2xl font-bold text-foreground">À noter</h2></div><ul className="space-y-3">{notes.map((item) => <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /><span>{item}</span></li>)}</ul></CardContent></Card>
          <ProductTrustGrid />
        </div></div></section>

        <section className="py-16 bg-muted"><div className="container"><div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Besoin d'un conseil personnalisé ?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button variant="default" size="lg" asChild><a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Accéder au paiement sécurisé<ArrowRight className="w-5 h-5" /></a></Button><Button variant="outline" size="lg" asChild><Link to="/aides-lecture-bassevision/lunettes-loupes"><ArrowLeft className="w-5 h-5" />Toutes les lunettes loupes</Link></Button></div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default LunettesLoupeFocus;
