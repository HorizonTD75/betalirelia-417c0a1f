import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import ProductTrustBanner from "@/components/products/ProductTrustBanner";
import imgAmelie from "@/assets/products/loupe-electronique-amelie.jpg";
import imgAmelieProduct from "@/assets/products/loupe-electronique-amelie-product.jpeg";
import imgAmelieGrossissements from "@/assets/products/loupe-electronique-amelie-grossissements.jpeg";

const STRIPE_URL = "https://buy.stripe.com/dRm28s7QidKfaBVdbT2Fa00";

const images = [
  {
    src: imgAmelie,
    alt: "Loupe électronique Amélie tenue à la main pour la lecture en cas de DMLA",
  },
  {
    src: imgAmelieProduct,
    alt: "Loupe de lecture électronique Amélie — vue de face avec écran de 11 cm",
  },
  {
    src: imgAmelieGrossissements,
    alt: "Loupe Amélie : illustration des 3 grossissements 3×, 6× et 9× pour la basse vision",
  },
];


const shortPoints = [
  "Un seul bouton pour choisir entre les grossissements 3×, 6× et 9×",
  "Écran lumineux de 11 cm, léger et ergonomique",
  "S'utilise tenue à la main comme une loupe en verre classique",
  "Éclairage et batterie rechargeable intégrés",
];

const keyPoints = [
  "Trois grossissements optiques : 3×, 6× et 9×",
  "Écran LCD couleur de 11 cm pour une lecture confortable",
  "Mode haute lisibilité : possibilité d'inverser les contrastes (texte clair sur fond foncé)",
  "Éclairage LED intégré, idéal en cas de DMLA, glaucome ou cataracte",
  "Batterie rechargeable — autonomie pensée pour la lecture quotidienne",
  "Poignée ergonomique, prise en main simple et rassurante",
  "Format compact, facile à poser sur un livre, un journal ou du courrier",
];

const specs = [
  { label: "Grossissements", value: "3× / 6× / 9× (commutés par un seul bouton)" },
  { label: "Écran", value: "LCD couleur de 11 cm (4,3 pouces)" },
  { label: "Modes d'affichage", value: "Couleurs réelles et contrastes inversés (texte clair sur fond foncé)" },
  { label: "Éclairage", value: "LED intégrées autour de la caméra" },
  { label: "Alimentation", value: "Batterie rechargeable intégrée (câble fourni)" },
  { label: "Utilisation", value: "Tenue à la main par sa poignée ergonomique" },
  { label: "Usage recommandé", value: "Lecture du courrier, notices, journaux, étiquettes, livres" },
];

const descriptionBlocks = [
  {
    title: "À qui s'adresse cette loupe ?",
    paragraphs: [
      "La loupe électronique Amélie a été pensée pour les personnes malvoyantes — notamment celles qui vivent avec une DMLA, un glaucome ou une cataracte — qui souhaitent continuer à lire confortablement leur courrier, leurs notices de médicaments, leurs livres ou leur journal.",
      "Elle convient aussi aux proches aidants qui cherchent une aide à la lecture simple à utiliser, sans réglages compliqués, pour la personne qu'ils accompagnent.",
    ],
  },
  {
    title: "Quand l'utiliser ?",
    paragraphs: [
      "Amélie est idéale pour toutes les situations du quotidien qui demandent d'agrandir un texte : lecture du courrier, des étiquettes alimentaires, des notices de médicaments, des mots croisés, des partitions ou de petits caractères dans un livre.",
      "Son éclairage intégré et le mode contrastes inversés apportent un vrai confort de lecture en cas de basse vision, lorsque l'éclairage de la pièce ne suffit pas.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Vous posez la loupe sur le texte, vous l'allumez, et l'image s'affiche en grand sur l'écran lumineux de 11 cm. Un seul bouton permet de passer du grossissement 3× au 6× puis au 9× : pas de menus, pas de paramètres à mémoriser.",
    ],
    items: [
      "Grossissement 3× — pour suivre un texte long, comme un livre ou un journal.",
      "Grossissement 6× — pour les caractères plus petits, étiquettes et notices.",
      "Grossissement 9× — pour les détails fins : numéros, dates, mentions légales.",
    ],
  },
];

const notes = [
  "La loupe Amélie est une aide à la lecture électronique : elle ne remplace pas un téléagrandisseur de bureau ni un bilan en basse vision. Plus le grossissement utilisé est élevé, plus la zone visible à l'écran est réduite. Pour choisir le grossissement adapté à votre vision, n'hésitez pas à demander conseil.",
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Loupe électronique Amélie",
  image: ["https://lirelia.fr/og-image.png"],
  description:
    "Loupe de lecture électronique ultra-compacte avec trois grossissements (3×, 6×, 9×), écran lumineux de 11 cm et éclairage LED intégré. Idéale pour DMLA, glaucome ou cataracte.",
  brand: { "@type": "Brand", name: "LirElia" },
  offers: {
    "@type": "Offer",
    url: "https://lirelia.fr/boutique/loupe-amelie",
    priceCurrency: "EUR",
    price: "188.00",
    availability: "https://schema.org/InStock",
  },
};

const LoupeAmelie = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead jsonLd={productJsonLd} />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/loupes-electroniques" className="hover:text-primary transition-colors">Loupes électroniques</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Loupe Amélie</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full aspect-square object-contain bg-white"
                  loading="eager"
                  width={720}
                  height={720}
                />
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        i === selectedImage ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                      aria-label={`Voir image ${i + 1}`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Loupe électronique Amélie
              </h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Loupe de lecture électronique avec grossissements 3×, 6× et 9× — pensée pour la basse vision, la DMLA et la lecture du quotidien.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">188,00 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  <strong>Idéale pour les personnes vivant avec une DMLA, un glaucome ou une cataracte</strong>, la loupe Amélie facilite la lecture du courrier, des notices et des journaux grâce à un écran lumineux et trois grossissements simples à utiliser.
                </p>
                <ul className="space-y-2">
                  {shortPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
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
            {descriptionBlocks.map((block) => (
              <div key={block.title} className="bg-card rounded-2xl border-2 border-border p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-xl text-foreground leading-loose mb-4 last:mb-0">{p}</p>
                ))}
                {block.items && (
                  <ul className="space-y-3 mt-4">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Caractéristiques techniques</h2>
          <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
            {specs.map((row) => (
              <div key={row.label} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] border-b border-border last:border-b-0">
                <div className="bg-muted px-5 py-4 font-bold text-foreground text-lg">{row.label}</div>
                <div className="px-5 py-4 text-lg text-foreground leading-relaxed">{row.value}</div>
              </div>
            ))}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Points clés</h2>
          <Card variant="elevated"><CardContent className="p-6 md:p-8"><ul className="space-y-3">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul></CardContent></Card>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto grid gap-6">
          <Card variant="elevated"><CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-primary/10 text-primary"><Search className="w-6 h-6" /></div>
              <h2 className="font-serif text-2xl font-bold text-foreground">À noter</h2>
            </div>
            <ul className="space-y-3">
              {notes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent></Card>
          <ProductTrustGrid />
        </div></div></section>

        <section className="py-16 bg-muted"><div className="container"><div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Besoin d'un conseil personnalisé ?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Accéder au paiement sécurisé<ArrowRight className="w-5 h-5" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/aides-lecture-bassevision/loupes-electroniques"><ArrowLeft className="w-5 h-5" />Toutes les loupes électroniques</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default LoupeAmelie;
