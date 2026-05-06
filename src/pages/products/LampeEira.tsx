import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import ProductTrustBanner from "@/components/products/ProductTrustBanner";
import imgBlancheLivre from "@/assets/products/lampe-eira-blanche-livre.jpg";
import imgBlanchePliee from "@/assets/products/lampe-eira-blanche-pliee.jpg";
import imgNoirePliee from "@/assets/products/lampe-eira-noire-pliee.jpg";
import imgNoireLivre from "@/assets/products/lampe-eira-noire-livre.jpg";
import imgOrdinateur from "@/assets/products/lampe-eira-ordinateur.jpg";
import imgTemperatures from "@/assets/products/lampe-eira-temperatures.jpg";

const STRIPE_URL = "https://buy.stripe.com/6oU4gA0nQbC711l9ZH2Fa07";

const images = [
  { src: imgBlancheLivre, alt: "Lampe basse vision EIRA blanche éclairant un livre ouvert" },
  { src: imgBlanchePliee, alt: "Lampe basse vision EIRA blanche pliée sur sa base" },
  { src: imgNoirePliee, alt: "Lampe basse vision EIRA grise pliée sur sa base" },
  { src: imgNoireLivre, alt: "Lampe basse vision EIRA grise éclairant un magazine de mots croisés" },
  { src: imgOrdinateur, alt: "Lampe basse vision EIRA grise utilisée à côté d'un ordinateur portable" },
  { src: imgTemperatures, alt: "Trois températures de couleur de la lampe EIRA : 6000K, 4000K et 3000K" },
];

const shortPoints = [
  "3 températures de couleurs",
  "Forte puissance avec variateur précis de l'intensité lumineuse",
  "Autonomie de plus de 6 h sur batterie",
  "Alimentation sur batterie et sur secteur",
];

const keyPoints = [
  "3 températures de couleur : blanc chaud (3000 K), blanc neutre (4000 K), blanc lumière du jour (5000 K)",
  "Variateur d'intensité de 100 à 1600 lux — réglage précis via bouton tactile",
  "Batterie rechargeable intégrée — autonomie de 4 à 10 h selon l'intensité",
  "Recharge via câble USB fourni (compatible chargeurs USB 5V / 1A et batteries portables)",
  "Pliable et légère (285 g) — se déplace facilement de pièce en pièce",
  "Support téléphone intégré sur le bras vertical — idéal pour les appels en visio",
  "Disponible en Blanc ou Gris pour s'adapter à votre intérieur",
];

const specs = [
  { label: "Températures de couleur", value: "3000 K (chaud) / 4000 K (neutre) / 5000 K (lumière du jour)" },
  { label: "Intensité lumineuse", value: "100 à 1600 lux (à 27 cm)" },
  { label: "Réglage de l'intensité", value: "Bouton tactile en façade sur la base" },
  { label: "Alimentation", value: "Batterie intégrée + secteur via câble USB" },
  { label: "Autonomie", value: "4 à 10 h selon l'intensité" },
  { label: "Temps de charge", value: "5 h" },
  { label: "Dimensions (pliée)", value: "28 × 7 × 4,5 cm" },
  { label: "Dimensions (dépliée)", value: "30 × 20 × 4,6 cm" },
  { label: "Poids", value: "285 g" },
  { label: "Coloris disponibles", value: "Blanc, Gris" },
  { label: "Accessoires inclus", value: "Câble USB de recharge" },
];

const descriptionBlocks = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La lampe EIRA est conçue pour les personnes atteintes de DMLA (dégénérescence maculaire liée à l'âge) ou de toute autre pathologie entraînant une basse vision. Elle répond aux besoins spécifiques de lecture et d'écriture qui nécessitent un éclairage puissant, réglable et adapté à la sensibilité visuelle de chacun.",
    ],
  },
  {
    title: "Quand l'utiliser ?",
    paragraphs: [
      "La lampe EIRA accompagne toutes les activités du quotidien nécessitant un bon éclairage de proximité : lecture de livres, journaux, courrier et notices de médicaments, écriture, mots croisés, couture, travaux manuels. Sa batterie intégrée et son format pliable lui permettent de se déplacer facilement d'une pièce à l'autre — sur un bureau, une table de salon, une table de chevet ou un plan de travail de cuisine.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "La lampe EIRA se déplie en un geste pour être prête à l'emploi. Un seul bouton tactile en façade permet de :",
    ],
    items: [
      "Choisir la température de couleur (chaud, neutre, lumière du jour)",
      "Régler l'intensité lumineuse de façon linéaire, du minimum au maximum (1600 lux)",
    ],
    extra: [
      "La recharge s'effectue via le câble USB fourni, branché sur n'importe quel chargeur USB 5V / 1A, une prise secteur ou une batterie portable pour smartphone.",
      "Le support téléphone intégré sur le bras vertical permet de poser son mobile pour être bien éclairé lors des appels en visio avec la famille ou des proches.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "L'autonomie varie selon le niveau d'intensité utilisé : de 4 h à pleine puissance jusqu'à 10 h à faible intensité. Le temps de charge complet est de 5 h.",
    ],
  },
];

const LampeEira = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lampe basse vision EIRA — pliable, rechargeable | LirElia"
        description="Lampe de lecture EIRA pour basse vision et DMLA : 3 températures de couleur, 100 à 1600 lux, batterie 6 h, pliable. Disponible en Blanc ou Gris."
        canonicalPath="/boutique/lampe-basse-vision-eira"
      />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/lampes" className="hover:text-primary transition-colors">Lampes basse vision</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Lampe basse vision EIRA</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-primary/30 bg-card mb-4">
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lampe basse vision EIRA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une lampe de lecture pliable et rechargeable, à intensité et température de couleur réglables — conçue pour la basse vision et la DMLA.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">178,00 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground">Paiement en 2×, 3× ou 4× sans frais pour toute commande inférieure à 2 500 €.</p>
            </div>
          </div>
        </section>

        {/* Points forts en pleine largeur */}
        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Points forts</h2>
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Une lampe de lecture compacte proposée en 2 couleurs (Blanc ou Gris) pour s'intégrer harmonieusement dans votre intérieur.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {shortPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg text-foreground leading-relaxed">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Choix de la couleur en pleine largeur */}
        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Choix de la couleur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La lampe EIRA est disponible en <strong>2 coloris</strong> : <strong>Blanc</strong> et <strong>Gris</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement la couleur souhaitée dans le champ « Commentaire » lors de votre commande (ex. : <em>« Lampe EIRA — coloris Gris »</em>). Nous traiterons votre demande en priorité.
            </p>
          </div>
        </section>

        {/* Bandeau réassurance compact */}
        <section className="container pb-12">
          <div className="max-w-5xl mx-auto">
            <ProductTrustBanner />
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
          <div className="space-y-6">
            {descriptionBlocks.map((block) => (
              <div key={block.title} className="bg-card rounded-2xl border-2 border-primary/30 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-xl text-foreground leading-loose mb-4 last:mb-0">{p}</p>
                ))}
                {(block as any).items && (
                  <ul className="space-y-3 mt-4">
                    {(block as any).items.map((item: string) => (
                      <li key={item} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {(block as any).extra && (block as any).extra.map((p: string) => (
                  <p key={p} className="text-xl text-foreground leading-loose mt-4">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Caractéristiques techniques</h2>
          <div className="bg-card rounded-2xl border-2 border-primary/30 overflow-hidden">
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
          <Card variant="elevated" className="border-l-8 border-l-secondary"><CardContent className="p-6 md:p-8"><ul className="space-y-3">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                <Lightbulb className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul></CardContent></Card>
        </div></div></section>

        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto">
          <ProductTrustGrid />
        </div></div></section>

        <section className="py-16 bg-muted"><div className="container"><div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Besoin d'un conseil personnalisé ?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter ce produit<ArrowRight className="w-5 h-5" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/aides-lecture-bassevision/lampes"><ArrowLeft className="w-5 h-5" />Toutes les lampes basse vision</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default LampeEira;
