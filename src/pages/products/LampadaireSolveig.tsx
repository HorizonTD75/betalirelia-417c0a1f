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
import imgNoir from "@/assets/products/lampadaire-solveig-noir.jpg";
import imgTemperatures from "@/assets/products/lampadaire-solveig-temperatures.jpg";
import imgDetails from "@/assets/products/lampadaire-solveig-details.jpg";
import imgSalon from "@/assets/products/lampadaire-solveig-salon.jpg";
import imgPiano from "@/assets/products/lampadaire-solveig-piano.jpg";

const STRIPE_URL = "https://buy.stripe.com/dRm4gAgmO6hNfWf4Fn2Fa09";

const images = [
  { src: imgNoir, alt: "Lampadaire de lecture SOLVEIG noir pour basse vision" },
  { src: imgTemperatures, alt: "Lampadaire SOLVEIG : 3 températures de couleur et intensité réglable" },
  { src: imgDetails, alt: "Lampadaire SOLVEIG : détails de la lampe, du mât, de la base et de la commande" },
  { src: imgSalon, alt: "Lampadaire SOLVEIG installé dans un salon à côté d'un canapé" },
  { src: imgPiano, alt: "Lampadaire SOLVEIG utilisé pour éclairer un piano" },
];

const shortPoints = [
  "Réglage fin de la température de couleur et de l'intensité lumineuse",
  "Flexible facilitant le positionnement de la tête éclairante",
  "Commande sur le mât et sur la télécommande",
  "Alimentation sur secteur",
];

const keyPoints = [
  "3 températures de couleur réglables : du blanc chaud (ambiance) au blanc froid (précision)",
  "5 niveaux d'intensité lumineuse, jusqu'à 5 000 lux à 30 cm — bien au-dessus du seuil recommandé de 1 000 lux pour la lecture en basse vision",
  "84 LED à tête orientable dans toutes les directions — lumière ciblée exactement où vous en avez besoin",
  "Hauteur réglable de 70 cm à 1,4 m — s'adapte à la lecture en fauteuil, au bureau ou à table",
  "Double commande : 4 boutons sur le mât ET télécommande complète avec préréglages et mise en veille",
  "Pied tripode ultra-stable qui se glisse sous les meubles — aucun encombrement de l'espace de travail",
  "Très léger (1,3 kg), structure aluminium et fer — se déplace facilement de pièce en pièce",
];

const specs = [
  { label: "Source lumineuse", value: "84 LED" },
  { label: "Intensité maximale", value: "5 000 lux (à 30 cm)" },
  { label: "Niveaux d'intensité", value: "5 niveaux" },
  { label: "Températures de couleur", value: "3 niveaux — blanc chaud à blanc froid" },
  { label: "Tête éclairante", value: "Orientable dans toutes les directions" },
  { label: "Hauteur réglable", value: "70 cm à 1,4 m" },
  { label: "Commande principale", value: "4 boutons sur le mât (ON/OFF, intensité, couleur)" },
  { label: "Télécommande", value: "Oui — préréglages, mise en veille, ON/OFF, intensité, couleur" },
  { label: "Alimentation", value: "Secteur 220V / 5V 2A" },
  { label: "Puissance", value: "10 W" },
  { label: "Longueur du câble", value: "1,5 m" },
  { label: "Matière", value: "Aluminium et fer" },
  { label: "Coloris", value: "Noir" },
  { label: "Poids", value: "1,3 kg" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[]; items?: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "Le lampadaire SOLVEIG est conçu pour les personnes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de cataracte, de glaucome, de rétinite pigmentaire ou de toute autre pathologie entraînant une basse vision. Il s'adresse plus généralement à toute personne — senior ou non — ressentant le besoin d'un éclairage puissant, orientable et personnalisable pour ses activités du quotidien.",
    ],
  },
  {
    title: "Pourquoi un lampadaire spécial basse vision ?",
    paragraphs: [
      "Un éclairage adapté est souvent aussi important qu'une loupe grossissante pour une personne malvoyante. En cas de DMLA ou de basse vision, le besoin en lumière peut être 2 à 3 fois supérieur à celui d'une personne normo-voyante : les spécialistes recommandent un minimum de 1 000 lux sur la page lue pour la lecture en basse vision. Le lampadaire SOLVEIG délivre jusqu'à 5 000 lux à 30 cm — bien au-delà de ce seuil — tout en restant doux pour les yeux grâce à son éclairage LED uniforme et sans scintillement.",
      "Par ailleurs, les personnes malvoyantes sont souvent sensibles à l'éblouissement. La tête orientable du SOLVEIG permet de diriger précisément la lumière sur le document ou l'ouvrage, sans éblouir les yeux ni créer d'ombres parasites.",
    ],
  },
  {
    title: "Pour qui est la lecture en fauteuil ?",
    paragraphs: [
      "Le lampadaire SOLVEIG excelle dans les situations où une lampe de bureau ne suffit pas, notamment la lecture en fauteuil ou dans un canapé. Sa hauteur réglable de 1 m à 1,8 m et son pied tripode permettent de le positionner à côté du siège, à la bonne hauteur, sans câble gênant ni encombrement. La télécommande fournie permet de régler l'intensité et la température de couleur sans se lever — un confort précieux pour les personnes à mobilité réduite.",
    ],
  },
  {
    title: "Quand utiliser le lampadaire SOLVEIG ?",
    paragraphs: [
      "Lecture prolongée : livres, romans, magazines, journaux, courriers, ordonnances — la grande plage de réglage en intensité (5 niveaux) permet d'adapter l'éclairage à la fatigue visuelle du moment. Après quelques heures de lecture, réduire légèrement l'intensité soulage significativement les yeux.",
      "Couture et travaux d'aiguille : enfiler une aiguille, suivre un patron, repriser un vêtement — ces gestes minutieux nécessitent un éclairage puissant et directionnel. La tête orientable du SOLVEIG se positionne directement au-dessus de l'ouvrage posé sur les genoux ou sur une table basse, les deux mains restant entièrement libres.",
      "Peinture et loisirs créatifs : dessin, aquarelle, coloriage, maquettes — la température de couleur joue ici un rôle crucial. Choisir un blanc neutre ou un blanc lumière du jour garantit un rendu fidèle des couleurs, évitant les déconvenues dues à un éclairage trop jaune ou trop bleu. Le SOLVEIG offre 5 niveaux de température pour un rendu chromatique optimal selon l'activité.",
      "Éclairage d'ambiance : le soir, à faible intensité et en blanc chaud, le SOLVEIG se transforme en lampadaire d'ambiance agréable pour le salon — sans avoir besoin de ranger ou de déplacer quoi que ce soit.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Le pied tripode se déplie et se pose au sol en quelques secondes. La hauteur du mât se règle par coulissement. La tête éclairante s'oriente librement dans toutes les directions.",
      "Les 4 boutons sur le mât permettent un réglage simple et rapide :",
    ],
    items: [
      "ON/OFF",
      "Intensité (5 niveaux)",
      "Température de couleur (3 niveaux, du blanc chaud au blanc froid)",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "Le lampadaire SOLVEIG est alimenté sur secteur (220V) — il n'est pas sur batterie, ce qui garantit une puissance constante à pleine intensité, sans limite de durée. Le câble d'alimentation mesure 1,5 m.",
      "La télécommande complète offre en plus des préréglages mémorisables et une fonction mise en veille — idéale pour éviter de se lever du fauteuil.",
    ],
  },
];

const LampadaireSolveig = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lampadaire SOLVEIG — lampe de lecture basse vision | LirElia"
        description="Lampadaire SOLVEIG : 5 000 lux, 84 LED, 3 températures de couleur, hauteur réglable et télécommande — pour la lecture en fauteuil, la couture et les loisirs en cas de DMLA ou basse vision."
        canonicalPath="/boutique/lampadaire-solveig"
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
            <span className="text-foreground font-semibold">Lampadaire SOLVEIG</span>
          </nav>
        </div>

        {/* Top product section : 2 columns on desktop */}
        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="order-2 lg:order-1">
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
            <div className="flex flex-col order-1 lg:order-2">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lampadaire SOLVEIG</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Un lampadaire basse vision léger et discret, à éclairage réglable en intensité et en température de couleur — idéal pour la lecture en fauteuil, la couture, la peinture et tous les travaux du quotidien en cas de DMLA ou basse vision.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">179,00 €</p>
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

export default LampadaireSolveig;
