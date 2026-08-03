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
import imgMain from "@/assets/products/loupe-dome-eclairante-lina.jpg";
import imgMotCroise from "@/assets/products/loupe-dome-eclairante-rechargeable-dmla-mot-croise.jpeg";
import imgMagazine from "@/assets/products/loupe-dome-eclairante-rechargeable-dmla.jpeg";

const STRIPE_URL = "https://buy.stripe.com/9B614oc6ycGbh0j2xf2Fa0g";

const images = [
  { src: imgMain, alt: "La loupe dome de lecture posée sur une table" },
  { src: imgMotCroise, alt: "Loupe dôme éclairante rechargeable utilisée sur des mots croisés par une personne malvoyante" },
  { src: imgMagazine, alt: "Loupe dôme éclairante rechargeable posée sur un magazine pour faciliter la lecture en cas de DMLA" },
];

const shortPoints = [
  "Loupe à poser stable, plus confortable qu'une loupe à main",
  "Grossissement ajustable d'environ x2 à x3",
  "Éclairage LED intégré et batterie rechargeable USB",
];

const keyPoints = [
  "Loupe dôme à poser directement sur le document, plus stable qu'une loupe à main",
  "Grossissement ajustable d'environ x2 à x3 selon la hauteur",
  "Éclairage LED blanc intégré pour renforcer le contraste",
  "Batterie rechargeable par USB — pas de piles à remplacer",
  "Format compact (≈ 92 mm) facile à déplacer d'une pièce à l'autre",
  "Idéale pour le courrier, les notices, les factures, les étiquettes et les mots croisés",
  "Arrêt automatique après environ 10 minutes pour préserver l'autonomie",
];

const specs = [
  { label: "Type de produit", value: "Loupe dôme / loupe à poser éclairante" },
  { label: "Grossissement", value: "Ajustable environ x2 à x3" },
  { label: "Diamètre de la lentille", value: "69 mm" },
  { label: "Diamètre extérieur", value: "Environ 92 mm" },
  { label: "Hauteur", value: "Réglable d'environ 50 à 71 mm" },
  { label: "Éclairage", value: "3 LED blanches" },
  { label: "Alimentation", value: "Batterie rechargeable" },
  { label: "Recharge", value: "USB / micro-USB selon modèle" },
  { label: "Temps de charge", value: "Jusqu'à 2 heures" },
  { label: "Autonomie", value: "Jusqu'à 3 heures selon usage" },
  { label: "Arrêt automatique", value: "Après environ 10 minutes" },
  { label: "Poids", value: "Environ 186 g" },
  { label: "Accessoires", value: "Étui de transport, câble USB, chiffon de nettoyage selon conditionnement" },
];

const descriptionBlocks = [
  {
    title: "Une loupe stable pour lire sans trembler",
    paragraphs: [
      "La loupe LINA se pose directement sur le texte. Cette stabilité apporte un vrai confort aux personnes qui fatiguent vite, qui tremblent légèrement ou qui ont du mal à maintenir une loupe classique à la bonne distance.",
      "Elle accompagne naturellement le mouvement de lecture : il suffit de la faire glisser sur le document pour suivre une ligne, une grille de mots croisés ou une petite zone imprimée.",
    ],
  },
  {
    title: "Un éclairage intégré pour renforcer le contraste",
    paragraphs: [
      "En basse vision, le grossissement ne suffit pas toujours. La qualité de l'éclairage joue un rôle essentiel. La loupe LINA intègre un éclairage LED blanc qui aide à mieux distinguer les caractères et les détails imprimés.",
      "Cet éclairage est particulièrement utile pour lire dans une pièce insuffisamment éclairée, sur un papier peu contrasté ou lorsque la fatigue visuelle apparaît.",
    ],
  },
  {
    title: "Rechargeable et simple à utiliser",
    paragraphs: [
      "La loupe LINA fonctionne avec une batterie rechargeable. Elle évite donc d'avoir à changer des piles, ce qui peut être difficile pour une personne âgée ou malvoyante.",
      "Elle convient bien à une utilisation ponctuelle, plusieurs fois dans la journée : lire un courrier, vérifier une date, regarder une notice, consulter une facture ou faire quelques mots croisés.",
    ],
  },
  {
    title: "Pour quels usages ?",
    paragraphs: ["La loupe dôme LINA est adaptée pour :"],
    items: [
      "lire un courrier ou une facture",
      "consulter une notice de médicament",
      "lire une étiquette, une date ou un prix",
      "faire des mots croisés ou des mots fléchés",
      "lire un journal ou un magazine par petites zones",
      "observer une photo ou un détail imprimé",
    ],
  },
  {
    title: "À qui convient cette loupe ?",
    paragraphs: [
      "Cette loupe convient particulièrement aux personnes qui ont besoin d'une aide simple pour les petits caractères, avec un grossissement modéré et une bonne stabilité.",
      "Elle peut être utile en cas de basse vision légère à modérée, de DMLA débutante ou modérée, de presbytie importante ou de fatigue visuelle lors de la lecture.",
    ],
  },
];

const notes = [
  "La loupe LINA est une aide ponctuelle. Elle ne remplace pas une loupe électronique ou un téléagrandisseur lorsque la personne a besoin de lire longtemps, d'obtenir un très fort grossissement ou de modifier fortement les contrastes. Pour une DMLA avancée ou une lecture prolongée, il peut être préférable de tester une loupe électronique ou un téléagrandisseur.",
];

const LoupeDomeLina = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupe dôme éclairante rechargeable LINA x2 à x3 | LirElia"
        description="Loupe dôme éclairante rechargeable LINA : grossissement ×2 à ×3, à poser pour lire courrier, notices, mots croisés et petits caractères en basse vision."
        canonicalPath="/boutique/loupe-dome-eclairante-lina"
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
            <span className="text-foreground font-semibold">Loupe dôme LINA</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Loupe dôme éclairante rechargeable LINA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une loupe à poser stable, lumineuse et rechargeable pour lire plus facilement les petits caractères du quotidien.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">86,20 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter la loupe LINA
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  La loupe dôme éclairante rechargeable LINA est conçue pour les personnes malvoyantes, les personnes atteintes de DMLA ou de forte presbytie qui souhaitent retrouver du confort pour les petites lectures du quotidien. Elle se pose directement sur le document et se fait glisser sur la page, ce qui évite de devoir tenir une loupe à bout de bras.
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
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter la loupe LINA<ArrowRight className="w-5 h-5" /></a>
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

export default LoupeDomeLina;
