import { GtinSpecRows } from "@/components/products/GtinSpecRows";
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
import imgLecture from "@/assets/products/loupe-main-nora-lecture.jpg";
import imgX6 from "@/assets/products/loupe-main-nora-x6.jpeg";

const STRIPE_URL = "https://buy.stripe.com/6oU3cw0nQ6hNbFZefX2Fa05";

const images = [
  { src: imgLecture, alt: "La loupe à man de lecture NORA, pour malvoyants léger, DMLA, glaucome." },
  { src: imgX6, alt: "Loupe à main Nora grossissement x6 pour malvoyants" },
];

const shortPoints = [
  "Grande lentille rectangulaire avec grossissements x2 (+4D) et x6 (+20D) avec lentille ronde de 25 mm",
  "Éclairage uniforme et puissant avec 3 niveaux d'intensité",
  "Légère et simple",
];

const keyPoints = [
  "Double grossissement : grande lentille x2 (11 × 6,5 cm) et petite lentille x6 (25 mm) incrustée",
  "50 LED réparties autour de la lentille pour un éclairage uniforme sans ombre",
  "3 niveaux d'intensité lumineux réglables en un seul bouton tactile",
  "Poignée ergonomique pour une prise en main confortable sur la durée",
  "La forme rectangulaire couvre une grande surface en un coup d'œil — lecture plus fluide",
  "Légère : 190 g",
  "Fonctionne avec 3 piles AAA (non fournies) — faciles à trouver et à changer",
];

const specs = [
  { label: "Grande lentille — dimensions", value: "110 mm × 65 mm" },
  { label: "Grande lentille — grossissement", value: "2x (+4 Dioptries)" },
  { label: "Grande lentille — distance d'utilisation", value: "25 cm" },
  { label: "Petite lentille — diamètre", value: "25 mm" },
  { label: "Petite lentille — grossissement", value: "6x (+20 Dioptries)" },
  { label: "Petite lentille — distance d'utilisation", value: "5 cm" },
  { label: "Éclairage", value: "50 LED, 3 niveaux d'intensité" },
  { label: "Réglage de la luminosité", value: "Oui — bouton tactile sur la poignée" },
  { label: "Alimentation", value: "3 piles AAA (non fournies)" },
  { label: "Poids", value: "190 g" },
  { label: "Accessoire inclus", value: "Aucun" },
];

const descriptionBlocks = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La loupe NORA est conçue pour les personnes malvoyantes, atteintes de DMLA, de forte presbytie, ou souhaitant simplement un outil pratique pour lire et observer des détails. Elle s'adresse aussi bien à l'utilisateur lui-même qu'à ses proches qui cherchent une aide visuelle simple à offrir.",
    ],
  },
  {
    title: "Quand l'utiliser ?",
    paragraphs: [
      "La loupe NORA est idéale pour toutes les situations du quotidien nécessitant une vision agrandie : lecture de livres, journaux, courrier et notices de médicaments, lecture d'étiquettes alimentaires ou de boîtes de conserve, consultation de documents, observation de détails fins sur des objets, mots croisés, philatélie, modélisme.",
      "L'éclairage LED est particulièrement utile pour les personnes atteintes de DMLA qui ont besoin d'un contraste plus élevé en complément du grossissement.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: ["La loupe dispose de deux lentilles :", "Un seul bouton tactile sur la poignée permet d'allumer la loupe et de faire défiler les 3 niveaux d'intensité lumineuse. Les 50 LED répartis autour de la lentille garantissent un éclairage uniforme sans ombre ni reflet gênant."],
    items: [
      "La grande lentille rectangulaire (x2) permet une lecture confortable sur une large surface — idéale pour les textes continus.",
      "La petite lentille ronde (x6) incrustée dans la grande est dédiée aux détails très fins — étiquettes, petits caractères, numéros de série.",
    ],
  },
];

const notes = [
  "Cette loupe offre un grossissement optique de 2x sur la grande lentille et 6x sur la petite. Elle n'est pas conçue pour remplacer un téléagrandisseur ou une loupe électronique. Plus le grossissement utilisé est élevé, plus la distance entre les yeux et l'objet doit être courte (5 cm pour le 6x). Les piles AAA ne sont pas fournies.",
];

const LoupeMainNora = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupe à main NORA rectangulaire éclairante LED | LirElia"
        description="Loupe à main NORA : grande lentille rectangulaire ×2 et petite lentille ×6, 50 LED avec 3 intensités. Idéale DMLA, malvoyance, presbytie et lecture quotidienne."
        canonicalPath="/boutique/loupe-main-nora"
      />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/loupes-verre" className="hover:text-primary transition-colors">Loupes en verre</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Loupe à main NORA</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Loupe à main NORA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une grande loupe de lecture rectangulaire et éclairante — idéale pour les malvoyants et les personnes atteintes de DMLA.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">87,50 €</p>
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
                  Améliorez votre vision avec notre loupe à main éclairante rectangulaire. Avec son éclairage LED à trois niveaux et son design ergonomique, elle est parfaite pour les malvoyants et les personnes atteintes de DMLA.
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
          <div className="max-w-md lg:ml-auto lg:mr-0">
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
                  <p key={p} className="text-lg text-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
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
            <GtinSpecRows />
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
              <Link to="/aides-lecture-bassevision/loupes-verre"><ArrowLeft className="w-5 h-5" />Toutes les loupes en verre</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default LoupeMainNora;
