import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Glasses } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import ProductTrustBanner from "@/components/products/ProductTrustBanner";
import imgGrossissement from "@/assets/products/lunettes-loupe_max-tv_grossissement_basse_vision.jpg";
import imgMolette from "@/assets/products/lunettes-loupe_maxtv-molette_mal_voyant.jpg";
import imgSenior from "@/assets/products/senior-television-lunettes-max-tv.jpeg";

const images = [
  { src: imgGrossissement, alt: "Lunette loupe MAX-TV avec sa housse, pour regarder la TV, aller au cinéma" },
  { src: imgMolette, alt: "Lunettes loupes Max TV avec molette de réglage du grossissement" },
  { src: imgSenior, alt: "Senior utilisant les lunettes loupes Max TV pour regarder la télévision" },
];

const STRIPE_URL = "https://buy.stripe.com/bJe00k9Yq21xeSb8VD2Fa02";
const shortPoints = ['Facteur de rapprochement / grossissement x 2,1', '2 modèles disponibles, pour myopie et pour presbytie', 'Réglage indépendant de la dioptrie pour chaque œil', 'Lunettes loupes légères et discrètes'];
const keyPoints = ["Grossissement x 2,1 — l'écran vous semble deux fois plus proche et plus grand", '2 modèles disponibles : Myopie et Presbytie', 'Réglage de dioptrie indépendant pour chaque œil via une molette sur chaque branche', 'Lunettes légères (49 g) et discrètes', 'Remplacent les lunettes de vue habituelles', 'Période d’adaptation courte : quelques heures suffisent'];
const specs = [{'label': 'Grossissement', 'value': '2,1×'}, {'label': "Distance d'utilisation", 'value': '2 à 5 m'}, {'label': 'Distance inter-pupillaire', 'value': '60 à 68 mm'}, {'label': 'Champ de vision', 'value': '9°'}, {'label': 'Réglage Myopie', 'value': '–3 D à 0 (par œil, indépendant)'}, {'label': 'Réglage Presbytie', 'value': '0 à +3 D (par œil, indépendant)'}, {'label': 'Correction cylindres', 'value': 'Non possible'}, {'label': 'Lentilles', 'value': 'Asphériques PXM®'}, {'label': 'Poids', 'value': '49 g'}];
const descriptionBlocks = [{'title': "À qui s'adressent ces lunettes ?", 'paragraphs': ['Les lunettes MAX TV s’adressent aux personnes malvoyantes atteintes de DMLA ou d’autres pathologies visuelles nécessitant un grossissement modéré. Elles permettent de regarder la télévision ou tout écran situé entre 2 et 5 mètres avec un confort visuel considérable.']}, {'title': 'Comment ça fonctionne ?', 'paragraphs': ["Grâce au grossissement de 2,1×, l'écran paraît deux fois plus grand et deux fois plus proche. Chaque branche est équipée d'une molette permettant de régler la dioptrie indépendamment pour chaque œil — le réglage prend quelques secondes.", 'Le modèle Presbytie permet un réglage de 0 à +3 Dioptries par œil.', 'Le modèle Myopie permet un réglage de –3 D à 0 par œil.']}, {'title': 'Usages', 'paragraphs': [], 'items': ['Regarder la télévision depuis son fauteuil', 'Suivre des sous-titres et détails d’images', 'Utilisation en bureau ou salle de réunion (écrans de présentation, collègues éloignés)']}];
const notes = ['La correction des cylindres (astigmatisme) n’est pas possible. En cas de corrections multiples ou spécifiques, les lunettes MAX TV pourraient ne pas convenir.'];
const options = [{'label': 'Myopie', 'value': '–3 D à 0'}, {'label': 'Presbytie', 'value': '0 à +3 D'}];

const LoupeMaxTv = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="min-h-screen">
      <SEOHead title="Lunettes loupe Max-TV pour télévision et vision de loin" description="Lunettes loupe Max-TV : grossissement 2,1x pour regarder la télévision ou un écran à 2 à 5 mètres, avec réglage indépendant des deux yeux. Mains libres." canonicalPath="/boutique/loupe-max-tv" jsonLd={[
        { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/loupe-max-tv#product", name: "Lunettes loupe Max-TV", description: "Lunettes loupe Max-TV : grossissement 2,1x pour regarder la télévision ou un écran à 2 à 5 mètres, avec réglage indépendant.", image: [`https://lirelia.fr${imgGrossissement}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/loupe-max-tv", priceCurrency: "EUR", price: "87.00", availability: "https://schema.org/InStock" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
          { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
          { "@type": "ListItem", position: 3, name: "Lunettes loupe Max-TV", item: "https://lirelia.fr/boutique/loupe-max-tv" },
        ] },
      ]} />
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
            <span className="text-foreground font-semibold">Lunettes loupe Max-TV</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="w-full aspect-square object-contain bg-muted" loading="eager" width={720} height={720} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button key={i} type="button" onClick={() => setSelectedImage(i)} className={`rounded-xl overflow-hidden border-2 ${selectedImage === i ? 'border-primary' : 'border-border'} bg-card`} aria-label={`Voir image ${i + 1}`}>
                    <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lunettes loupe Max-TV</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">Des lunettes loupe adaptées pour regarder la télévision — idéales pour les personnes atteintes de DMLA ou de basse vision.</p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">87,00 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter ce produit<ArrowRight className="w-5 h-5" /></a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">Avec un grossissement de x2, ces lunettes MAX TV vous « rapprochent » de votre écran. La télévision vous semble plus grosse, plus proche.</p>
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
              <h3 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Options disponibles</h3>
              <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
                {options.map((row) => (
                  <div key={row.label} className="grid sm:grid-cols-2 border-b border-border last:border-b-0">
                    <div className="bg-muted px-5 py-4 font-bold text-foreground text-lg">{row.label}</div>
                    <div className="px-5 py-4 text-lg text-foreground leading-relaxed">{row.value}</div>
                  </div>
                ))}
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

export default LoupeMaxTv;
