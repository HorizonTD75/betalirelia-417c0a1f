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
import imgMain from "@/assets/products/clip-lunette-loupe.jpg";
import imgMontage from "@/assets/products/clip-lunette-loupe-montage.jpeg";
import imgReleve from "@/assets/products/clip-lunette-loupe-releve.jpeg";
import imgBaisse from "@/assets/products/clip-lunette-loupe-baisse.jpeg";

const STRIPE_URL = "https://buy.stripe.com/7sY3cwc6y5dJaBVfk12Fa06";

const images = [
  { src: imgMain, alt: "Un clip lunettes loupe posé sur le bureau" },
  { src: imgMontage, alt: "Montage du clip lunette loupe sur lunettes de vue" },
  { src: imgReleve, alt: "Clip lunette loupe relevé en position repos" },
  { src: imgBaisse, alt: "Clip lunette loupe en position basse pour lecture" },
];

const shortPoints = [
  "Se clipse sur toutes les paires de lunettes de vue et lunettes de soleil",
  "Le clip ajoute un grossissement à vos lunettes de 1,4x, 1,7x ou 2x (selon modèle choisi)",
  "Apporte un confort de vision pour un faible besoin de grossissement",
  "Solution très légère",
];

const keyPoints = [
  "3 grossissements disponibles : 1,4x (+2 D), 1,7x (+3 D), 2x (+4 D)",
  "S'abaisse et se relève en un geste — pas besoin de retirer le clip",
  "Compatible avec toutes les paires de lunettes de vue et de soleil",
  "Les corrections existantes (astigmatisme, etc.) restent actives",
  "Vision binoculaire pour un meilleur confort",
  "Très léger : 14 g — se porte en permanence sans gêne",
];

const specs = [
  { label: "Grossissements disponibles", value: "1,4x / 1,7x / 2x" },
  { label: "Dioptries correspondantes", value: "+2 D / +3 D / +4 D" },
  { label: "Distance de travail — 1,4x", value: "50 cm" },
  { label: "Distance de travail — 1,7x", value: "33 cm" },
  { label: "Distance de travail — 2x", value: "25 cm" },
  { label: "Largeur totale", value: "125 mm" },
  { label: "Largeur des verres", value: "55 mm" },
  { label: "Hauteur des verres", value: "36 mm" },
  { label: "Fixation", value: "Clip pince sur la monture" },
  { label: "Articulé (relevable)", value: "Oui" },
  { label: "Vision", value: "Binoculaire" },
  { label: "Poids", value: "14 g" },
  { label: "Accessoire inclus", value: "Aucun" },
];

const descriptionBlocks = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "Le clip lunettes loupe convient aux personnes presbytes ou ayant un faible besoin de grossissement pour les activités du quotidien. Il s'utilise en complément de la correction optique déjà fournie par les lunettes de vue habituelles — les corrections d'astigmatisme restent actives.",
    ],
  },
  {
    title: "Quand l'utiliser ?",
    paragraphs: [
      "Ce clip est idéal pour toutes les situations nécessitant un grossissement léger et ponctuel à courte distance (25 à 50 cm selon le modèle) : lecture d'un magazine ou d'une notice, signature de chèques, couture, broderie, modélisme, peinture, philatélie, travaux de précision.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [],
    items: [
      "Clipsez le clip au centre de la monture, au-dessus du nez.",
      "Abaissez les lentilles pour passer en mode loupe.",
      "Relevez-les à tout moment pour retrouver l'usage classique de vos lunettes — sans retirer le clip.",
      "Ajustez la distance entre vos yeux et l'objet selon le grossissement choisi (voir tableau ci-dessus).",
    ],
  },
];

const notes = [
  "Ce clip offre un grossissement optique maximal de 2x. Il n'est pas conçu pour remplacer un téléagrandisseur ou une loupe électronique. Au-delà de 2x de grossissement, le champ de vision se réduit et la distance de travail devient très courte — c'est pourquoi aucun modèle plus puissant n'est proposé.",
];

const ClipLunettesLoupe = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Clip lunettes loupe à clipser sur monture | LirElia"
        description="Surlunette loupe à clipser sur monture existante : grossissements 1,4x, 1,7x ou 2x, relevable, vision binoculaire et seulement 14 g pour la lecture quotidienne."
        canonicalPath="/boutique/clip-lunettes-loupe"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/clip-lunettes-loupe#product", name: "Clip lunettes loupe", description: "Surlunette loupe à clipser sur monture : grossissements 1,4x, 1,7x ou 2x, relevable, vision binoculaire, 14 g.", image: [`https://lirelia.fr${imgMain}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/clip-lunettes-loupe", priceCurrency: "EUR", price: "24.50", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Clip lunettes loupe", item: "https://lirelia.fr/boutique/clip-lunettes-loupe" },
          ] },
        ]}
      />
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
            <span className="text-foreground font-semibold">Clip lunettes loupe</span>
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
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Clip lunettes loupe</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une surlunette loupe à clipser sur vos lunettes de vue — grossissement d'appoint léger pour la lecture, les travaux manuels et les activités du quotidien.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">24,50 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  Ce clip de lunette s'abaisse et se relève très facilement pour passer de votre correction optique habituelle au mode loupe : lecture ponctuelle, travaux manuels, signature de chèques, etc.
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

              <div className="mb-6 rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-5">
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Choix du grossissement</h2>
                <p className="text-lg text-foreground leading-relaxed mb-2">
                  Ce produit est disponible en <strong>3 versions de grossissement</strong> : <strong>1,4x</strong>, <strong>1,7x</strong> et <strong>2x</strong>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement le grossissement souhaité dans le champ « Commentaire » lors de votre commande (ex. : <em>« Clip lunette loupe — grossissement 1,7x »</em>). Nous traiterons votre demande en priorité.
                </p>
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
                  <ol className="space-y-3 mt-4 list-decimal list-inside">
                    {block.items.map((item) => (
                      <li key={item} className="text-xl text-foreground leading-relaxed">{item}</li>
                    ))}
                  </ol>
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
              <div className="p-3 rounded-xl bg-primary/10 text-primary"><Glasses className="w-6 h-6" /></div>
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
              <Link to="/aides-lecture-bassevision/lunettes-loupes"><ArrowLeft className="w-5 h-5" />Toutes les lunettes loupes</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default ClipLunettesLoupe;
