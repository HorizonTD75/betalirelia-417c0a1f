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
import imgNoire from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import imgBlanche from "@/assets/products/lampe-loupe-astrid-blanche.jpg";
import imgTemperatures from "@/assets/products/lampe-loupe-astrid-temperatures.webp";
import imgLivre from "@/assets/products/lampe-loupe-astrid-livre.jpg";

const STRIPE_URL = "https://buy.stripe.com/5kQ5kEc6yfSn5hBfk12Fa08";

const images = [
  { src: imgNoire, alt: "La lampe loupe à fixer sur le bord d’un bureau grâce à sa pince" },
  { src: imgBlanche, alt: "Lampe loupe Astrid blanche avec grossissement pour lecture" },
  { src: imgTemperatures, alt: "Lampe loupe Astrid avec réglage de température de lumière" },
  { src: imgLivre, alt: "Lampe loupe Astrid en utilisation pour la lecture" },
];

const shortPoints = [
  "Grossissement x3 (+8D), grande lentille de 10,5 cm de diamètre",
  "Éclairage LED avec intensité ajustable (10 niveaux)",
  "3 températures de couleur : blanc chaud, neutre, blanc froid",
  "Fixation par pince sur le bord d'une table, grand débattement du bras",
];

const keyPoints = [
  "Grande lentille de 10,5 cm — grossissement x3 (+8D) pour un large champ de vision",
  "Éclairage LED de 6000 lux à 12 cm, uniforme autour de la lentille, sans ombre portée",
  "10 niveaux d'intensité lumineuse et 3 températures de couleur réglables indépendamment",
  "Double bras articulé à grand débattement — positionnement précis au-dessus du document",
  "Fixation par pince sur plateau jusqu'à 6 cm d'épaisseur — libère toute la surface de travail",
  "Utilisable avec ou sans éclairage : simple loupe ou lampe loupe selon les besoins",
  "Structure métallique robuste, disponible en Blanc ou Noir",
];

const specs = [
  { label: "Grossissement", value: "3x" },
  { label: "Puissance optique", value: "+8 Dioptries" },
  { label: "Diamètre de la lentille", value: "10,5 cm" },
  { label: "Hauteur d'utilisation optimale", value: "12 cm" },
  { label: "Éclairage maximum", value: "6000 lux (à 12 cm)" },
  { label: "Niveaux d'intensité lumineuse", value: "10 niveaux" },
  { label: "Températures de couleur", value: "3000 K (blanc chaud) / 4500 K (lumière du jour) / 6000 K (blanc froid)" },
  { label: "Épaisseur de bureau maximum", value: "6 cm" },
  { label: "Alimentation", value: "Câble USB (5V, 2A en éclairage maximum)" },
  { label: "Poids", value: "850 g" },
  { label: "Coloris disponibles", value: "Blanc, Noir" },
  { label: "Accessoire inclus", value: "Câble USB" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[]; items?: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La lampe loupe ASTRID est conçue pour les personnes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de glaucome, de cataracte ou de toute autre pathologie entraînant une basse vision. Elle répond aux besoins de toute personne ayant un faible besoin de grossissement optique (jusqu'à 3x) et souhaitant retrouver une autonomie confortable pour les activités de proximité.",
      "Elle convient également aux personnes presbytes ou à toute personne souhaitant réduire la fatigue visuelle lors de travaux minutieux prolongés.",
    ],
  },
  {
    title: "Pourquoi l'éclairage est essentiel en basse vision ?",
    paragraphs: [
      "En cas de DMLA ou de basse vision, le besoin en lumière est souvent 2 à 3 fois supérieur à celui d'une personne normo-voyante. Un éclairage insuffisant réduit drastiquement le contraste perçu, rendant la lecture ou les travaux manuels très difficiles. La lampe loupe ASTRID apporte jusqu'à 6000 lux directement sur la zone de travail, sans éblouissement, grâce aux LED disposées en couronne autour de la lentille. Le choix de la température de couleur permet d'adapter l'éclairage à la sensibilité de chacun — blanc chaud pour un rendu doux et reposant, lumière du jour pour maximiser les contrastes, blanc froid pour les travaux de précision.",
    ],
  },
  {
    title: "Quand utiliser la lampe loupe ASTRID ?",
    paragraphs: [
      "La lampe loupe ASTRID accompagne un large spectre d'activités du quotidien et de loisirs :",
      "Lecture et tâches administratives : lecture de livres, journaux, magazines, courriers, ordonnances et notices de médicaments, grilles de mots croisés ou de Sudoku, consultation de photos de famille. La grande lentille de 10,5 cm permet de lire plusieurs mots en un seul coup d'œil, sans avoir à déplacer continuellement la loupe.",
      "Travaux manuels de précision : couture, broderie, tricot, reprise de vêtements. Pour une personne malvoyante, enfiler une aiguille ou suivre un patron devient un défi quotidien — la lampe loupe ASTRID éclaire précisément la zone de travail et grossit les détails sans qu'il soit nécessaire de tenir quoi que ce soit à la main.",
      "Bricolage et loisirs créatifs : petite électronique, montage de modèles réduits, peinture fine, philatélie, numismatique, horlogerie d'amateur. Le bras articulé permet de positionner la lentille à l'angle exact souhaité, les deux mains restant entièrement libres.",
      "Manucure et soins personnels : soins des ongles, maquillage de précision — activités pour lesquelles la vision des détails fins est indispensable.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "La pince de fixation s'installe en quelques secondes sur le bord d'une table ou d'un bureau jusqu'à 6 cm d'épaisseur. Le double bras articulé se positionne librement au-dessus de votre document ou de votre ouvrage.",
      "L'interrupteur à 4 boutons sur le câble permet de contrôler l'ensemble des réglages :",
    ],
    items: [
      "Bouton 1 : mise en marche / arrêt",
      "Boutons 2 et 3 : réglage de l'intensité lumineuse (10 niveaux, du minimum au maximum de 6000 lux)",
      "Bouton 4 : sélection de la température de couleur (blanc chaud 3000 K, lumière du jour 4500 K, blanc froid 6000 K)",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "La lampe loupe ASTRID offre un grossissement optique de 3x maximum. Elle est adaptée aux besoins de grossissement léger à modéré. Si vous utilisez déjà un téléagrandisseur ou une loupe électronique, la lampe loupe ASTRID n'offrira pas de performance supérieure en termes de grossissement. Pour des besoins importants (DMLA évoluée, acuité très réduite), un téléagrandisseur électronique sera plus adapté.",
    ],
  },
];

const LampeAstrid = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lampe loupe ASTRID — bras articulé, lentille 10,5 cm | LirElia"
        description="Lampe loupe ASTRID : grossissement x3, lentille 10,5 cm, éclairage LED 6000 lux, 3 températures de couleur, fixation par pince — pour la lecture et les travaux de précision en basse vision."
        canonicalPath="/boutique/lampe-loupe-astrid"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/lampe-loupe-astrid#product", name: "Lampe loupe ASTRID", description: "Lampe loupe ASTRID à bras articulé : grossissement x3, lentille 10,5 cm, éclairage LED 6 000 lux, 3 températures de couleur.", image: [`https://lirelia.fr${imgNoire}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/lampe-loupe-astrid", priceCurrency: "EUR", price: "148.00", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Lampe loupe ASTRID", item: "https://lirelia.fr/boutique/lampe-loupe-astrid" },
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
            <Link to="/aides-lecture-bassevision/lampes" className="hover:text-primary transition-colors">Lampes basse vision</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Lampe loupe ASTRID</span>
          </nav>
        </div>

        {/* Top product section : 2 columns on desktop */}
        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
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

            {/* Right column: title, price, CTA, points forts */}
            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lampe loupe ASTRID</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une lampe loupe de bureau à bras articulé, grande lentille et éclairage réglable — conçue pour la lecture, la couture, le bricolage et tous les travaux de précision en basse vision et DMLA.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">148,00 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              {/* Points forts */}
              <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-5 md:p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">Points forts</h2>
                <ul className="space-y-2">
                  {shortPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-base md:text-lg text-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Choix de la couleur — full width */}
        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Choix de la couleur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La lampe loupe ASTRID est disponible en <strong>2 coloris</strong> : <strong>Blanc</strong> et <strong>Noir</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement la couleur souhaitée dans le champ « Commentaire » lors de votre commande (ex. : <em>« Lampe ASTRID — coloris Noir »</em>). Nous traiterons votre demande en priorité.
            </p>
          </div>
        </section>

        {/* Réassurance compact */}
        <section className="container pb-12">
          <div className="max-w-5xl mx-auto">
            <ProductTrustBanner />
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
          <div className="space-y-6">
            {descriptionBlocks.map((block) => (
              <div key={block.title} className="bg-card rounded-2xl border-2 border-primary/30 p-6 md:p-8">
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

        {/* Caractéristiques techniques */}
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

        {/* Points clés */}
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

        {/* Réassurance finale */}
        <section className="py-12 lg:py-16"><div className="container"><div className="max-w-4xl mx-auto">
          <ProductTrustGrid />
        </div></div></section>

        {/* Conseil personnalisé */}
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

export default LampeAstrid;
