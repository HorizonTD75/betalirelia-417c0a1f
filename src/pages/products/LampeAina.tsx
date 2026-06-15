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
import imgNoirBlanche from "@/assets/products/lampe-tour-cou-aina-noir-blanche.jpg";
import imgLecture from "@/assets/products/lampe-tour-cou-aina-lecture.jpg";
import imgChaude from "@/assets/products/lampe-tour-cou-aina-chaude.jpg";
import imgReglages from "@/assets/products/lampe-tour-cou-aina-reglages.jpg";

const STRIPE_URL = "https://buy.stripe.com/4gMbJ2fiK5dJ9xRb3L2Fa0d";

const images = [
  { src: imgNoirBlanche, alt: "La lampe tour de coup proposée en deux couleurs, Blanc et noir" },
  { src: imgLecture, alt: "Lampe tour de cou AINA, portée, éclairant un livre pour DMLA" },
  { src: imgChaude, alt: "Lampe de lecture AINA, basse vision, posée sur une table éclairant un livre" },
  { src: imgReglages, alt: "Réglage de l'intensité et de la température de couleur de la lampe tour de cou AINA pour malvoyants" },
];

const shortPoints = [
  "2 modes d'éclairage : diffus large et spot concentré",
  "3 températures de couleur : chaud, neutre, froid",
  "Mains libres : portée autour du cou ou posée sur la table",
  "Batterie rechargeable USB — jusqu'à 10 h d'autonomie",
];

const keyPoints = [
  "2 modes d'éclairage : lumière diffuse large (1 500 lux à 20 cm) et spot concentré (8 200 lux à 20 cm)",
  "3 températures de couleur : blanc chaud (idéal le soir), blanc neutre, blanc froid (précision et contraste)",
  "Col de cygne flexible sur chaque bras (≈24 cm) — lumière orientée précisément où il faut",
  "Mains totalement libres — portée autour du cou ou posée sur la table, bras repliés",
  "Jusqu'à 10 h d'autonomie sur batterie rechargeable via câble USB",
  "Un seul bouton par bras pour régler l'intensité et la couleur — simple même avec une vision réduite",
  "Légère et silencieuse — LED sans scintillement, sans chaleur, pas de remplacement de piles",
  "Double usage : tour de cou ou lampe de table — un seul produit pour toutes les situations",
  "Disponible en Blanc ou Noir",
];

const specs = [
  { label: "Bras souples", value: "2 bras col de cygne gainés silicone, ~24 cm chacun" },
  { label: "Source diffuse", value: "Éclairage rectangulaire large — 1 500 lux à 20 cm" },
  { label: "Source spot", value: "Éclairage ponctuel concentré — 8 200 lux à 20 cm" },
  { label: "Températures de couleur", value: "3 niveaux : blanc chaud / blanc neutre / blanc froid" },
  { label: "Intensité", value: "Réglable sur plusieurs niveaux par bouton poussoir sur chaque bras" },
  { label: "Batterie", value: "Intégrée rechargeable" },
  { label: "Recharge", value: "Câble USB fourni" },
  { label: "Autonomie", value: "Jusqu'à 10 h" },
  { label: "Port", value: "USB" },
  { label: "Positionnement", value: "Tour de cou / posée sur la table (bras repliés)" },
  { label: "Coloris", value: "Blanc, Noir" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La lampe AINA s'adresse aux personnes malvoyantes atteintes de DMLA, de cataracte, de glaucome ou de toute autre pathologie visuelle, ainsi qu'aux seniors dont la vision a naturellement baissé et qui ont besoin d'un éclairage renforcé pour leurs activités du quotidien. Elle convient également à toute personne souhaitant lire ou travailler sans immobiliser ses mains ni dépendre d'une lampe de bureau.",
    ],
  },
  {
    title: "Pourquoi l'éclairage de proximité change tout en basse vision",
    paragraphs: [
      "Pour une personne atteinte de DMLA ou de basse vision, augmenter l'éclairage sur la zone de lecture peut être aussi efficace que d'augmenter le grossissement. La difficulté ne vient pas toujours de la taille des caractères — elle vient souvent du manque de contraste, lui-même causé par une lumière insuffisante sur le document. La lampe AINA délivre jusqu'à 8 200 lux en mode spot à 20 cm, une intensité bien supérieure à celle d'une lampe de chevet classique, dirigée précisément là où l'œil en a besoin, sans éblouir le reste de la pièce.",
    ],
  },
  {
    title: "Lire au lit ou dans son fauteuil — sans contrainte et sans déranger",
    paragraphs: [
      "C'est l'usage pour lequel la lampe AINA est la plus appréciée. Posée autour du cou, elle suit les mouvements naturels du corps — que l'on soit allongé, à demi-redressé ou assis dans un fauteuil — sans avoir à déplacer ou à réorienter quoi que ce soit. La lumière reste toujours orientée vers le livre ou la tablette.",
      "Pour les personnes qui partagent leur chambre avec un conjoint, la lampe AINA est une solution idéale : son éclairage ciblé n'illumine pas toute la pièce, préservant le sommeil du partenaire. Une bonne lampe de lecture au lit doit proposer un éclairage blanc chaud (2 800–3 000 K) pour le soir — la AINA le propose parmi ses 3 températures de couleur.",
      "Pour les personnes à mobilité réduite ou alitées, l'absence de câble d'alimentation et la batterie de 10 h d'autonomie garantissent une totale liberté de position, sans risque de tirer sur un câble en se retournant.",
    ],
  },
  {
    title: "Couture, broderie et travaux manuels",
    paragraphs: [
      "Enfiler une aiguille, suivre un patron, repriser un vêtement : ces gestes minutieux requièrent un éclairage direct et puissant. La lampe AINA se porte autour du cou et dirige son faisceau précisément sur les mains et l'ouvrage, les deux mains restant complètement libres pour manipuler tissu, fil et aiguille. En mode spot (8 200 lux), le contraste des détails fins est considérablement augmenté — un atout décisif pour les personnes malvoyantes.",
    ],
  },
  {
    title: "Bricolage et petits travaux de précision",
    paragraphs: [
      "Vissage, assemblage, réparation d'un objet, jardinage en bac : toutes ces activités nécessitent de voir précisément ce que l'on fait avec ses mains. La lampe AINA posée sur la nuque libère les deux bras et dirige la lumière sur la zone de travail — comme une lampe frontale, mais sans le bandeau sur le front, plus discret et plus confortable pour un usage prolongé.",
    ],
  },
  {
    title: "Sécurité lors des déplacements nocturnes",
    paragraphs: [
      "Pour une personne âgée ou malvoyante se levant la nuit, le risque de chute dans un couloir ou une salle de bain mal éclairée est réel. Portée autour du cou, la lampe AINA éclaire naturellement le sol devant le porteur, les deux mains restant libres pour s'appuyer sur une rampe ou une canne. C'est une aide à la mobilité nocturne simple et immédiatement efficace.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "En tour de cou : glissez les deux bras flexibles autour de votre cou. Orientez chaque bras vers la zone à éclairer. Un bouton sur chaque bras permet de choisir le type d'éclairage (diffus ou spot), l'intensité et la température de couleur.",
      "Posée sur la table : repliez les deux bras vers le bas. La lampe tient seule sur son col, éclairant le plan de travail, le clavier ou un document.",
      "La recharge s'effectue via le câble USB fourni, branché sur n'importe quel chargeur USB standard.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "Évitez de diriger le faisceau spot directement dans les yeux — 8 200 lux à 20 cm est très puissant. Ne pliez pas les bras col de cygne au-delà de leur limite naturelle pour ne pas endommager les câbles internes. Éteignez la lampe lorsqu'elle n'est pas utilisée pour préserver l'autonomie de la batterie.",
    ],
  },
];

const LampeAina = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lampe tour de cou AINA pour lecture basse vision | LirElia"
        description="Lampe tour de cou AINA : éclairage de lecture mains libres pour livres, documents et activités du quotidien en basse vision, DMLA ou vision réduite."
        canonicalPath="/produits/lampe-tour-cou-aina"
        ogImage={imgNoirBlanche}
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/produits/lampe-tour-cou-aina#product", name: "Lampe tour de cou AINA", description: "Lampe de lecture mains libres AINA, portée autour du cou ou posée sur la table — 2 modes d'éclairage, 3 températures de couleur, batterie rechargeable.", image: [`https://lirelia.fr${imgNoirBlanche}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/produits/lampe-tour-cou-aina", priceCurrency: "EUR", price: "49.20", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Lampe tour de cou AINA", item: "https://lirelia.fr/produits/lampe-tour-cou-aina" },
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
            <span className="text-foreground font-semibold">Lampe tour de cou AINA</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lampe tour de cou AINA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une lampe de lecture légère et flexible qui se porte autour du cou ou se pose sur la table — mains libres, éclairage réglable, 10 h d'autonomie — idéale pour la lecture au lit, en fauteuil, la couture, le bricolage et les déplacements nocturnes.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">49,20 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter la lampe AINA
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground">Paiement en 2×, 3× ou 4× disponible.</p>
            </div>
          </div>
        </section>

        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Points forts</h2>
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Pratique et confortable pour lire dans toutes les situations — sur table, au lit ou en fauteuil — et adaptée aux personnes malvoyantes atteintes de DMLA ou d'autres pathologies visuelles.
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

        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Choix de la couleur</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La lampe AINA est disponible en <strong>2 coloris</strong> : <strong>Blanc</strong> et <strong>Noir</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement la couleur souhaitée dans le champ « Commentaire » lors de votre commande (ex. : <em>« Lampe AINA — coloris Noir »</em>). Nous traiterons votre demande en priorité.
            </p>
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
              <div key={block.title} className="bg-card rounded-2xl border-2 border-primary/30 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-xl text-foreground leading-loose mb-4 last:mb-0">{p}</p>
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
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter la lampe AINA<ArrowRight className="w-5 h-5" /></a>
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

export default LampeAina;
