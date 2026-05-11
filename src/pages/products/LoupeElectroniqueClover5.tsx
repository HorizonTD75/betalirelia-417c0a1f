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
import imgPoignee from "@/assets/products/loupe-electronique-clover-5-poignee.jpg";
import imgDMLA from "@/assets/products/loupe-electronique-clover-5-DMLA.jpg";
import imgLecture from "@/assets/products/loupe-electronique-clover-5-basse-vision-lecture.jpg";
import imgMalvoyant from "@/assets/products/loupe-electronique-clover-5-malvoyant.jpg";

const STRIPE_URL = "https://buy.stripe.com/bJe3cwdaC0XteSb5Jr2Fa0a";

const images = [
  { src: imgPoignee, alt: "loupe électronique de lecture avec poignée CLOVER 5" },
  { src: imgDMLA, alt: "loupe électronique CLOVER 5 pour lire avec une DMLA" },
  { src: imgLecture, alt: "loupe électronique CLOVER 5 pour lire des livres" },
  { src: imgMalvoyant, alt: "loupe de lecture CLOVER 5 pour malvoyants" },
];

const shortPoints = [
  "Grossissement de 4x à 20x",
  "Écran de 5\" (12,7 cm) et prise pour connexion sur écran de télévision",
  "S'utilise posée ou tenue par la poignée",
  "Légère, compacte, livrée dans une housse molletonnée",
  "4 h d'autonomie",
];

const keyPoints = [
  "Grossissement de 4x à 20x — bien au-delà des loupes optiques classiques (3x à 6x maximum)",
  "Écran HD 5 pouces (12,7 cm) — image nette, sans déformation, sur grande surface",
  "Poignée intégrée repliable — se tient comme une loupe classique, se pose comme un téléagrandisseur",
  "Larges boutons colorés — utilisables même avec une vision très réduite, prise en main immédiate",
  "Modes forts contrastes : Jaune/Noir, Blanc/Noir, Noir/Blanc et couleurs réelles",
  "Gel d'image — capture et fige l'image pour l'observer sans maintenir l'appareil",
  "4 h d'autonomie — utilisable toute la journée en déplacement",
  "Connexion TV via câble Cinch — transforme le salon en espace de lecture grand format",
  "Légère : 200 g — plus légère qu'un smartphone, tient dans un sac à main",
  "Garantie 2 ans",
];

const specs = [
  { label: "Écran", value: "5'' (12,7 cm), haute résolution" },
  { label: "Grossissement", value: "4x à 20x" },
  { label: "Caméra", value: "Autofocus, centrée" },
  { label: "Modes de visualisation", value: "Couleurs réelles + forts contrastes (Jaune/Noir, Blanc/Noir, Noir/Blanc)" },
  { label: "Contraste / Luminosité", value: "Ajustables" },
  { label: "Éclairage", value: "LED (ON / OFF)" },
  { label: "Fonction gel d'image", value: "Oui" },
  { label: "Mémorisation des réglages", value: "Oui (derniers réglages mémorisés)" },
  { label: "Poignée", value: "Intégrée, repliable" },
  { label: "Support écriture", value: "Intégré (posé sur document)" },
  { label: "Connexion externe", value: "Prise Cinch (TV)" },
  { label: "Batterie", value: "Lithium-ion rechargeable" },
  { label: "Autonomie", value: "~4 h" },
  { label: "Arrêt automatique", value: "Après 3 minutes d'inactivité" },
  { label: "Dimensions", value: "9 × 7 × 1,8 cm (env.)" },
  { label: "Poids", value: "200 g" },
  { label: "Garantie", value: "2 ans" },
  { label: "Accessoire inclus", value: "Housse molletonnée avec fermeture éclair" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[]; items?: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La loupe électronique CLOVER 5 est conçue pour les personnes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de glaucome, de cataracte, de rétinite pigmentaire ou de toute autre pathologie entraînant une basse vision. Elle convient également à toute personne dont le grossissement fourni par une loupe optique classique n'est plus suffisant.",
      "Contrairement aux loupes optiques qui se limitent généralement à 3x–6x (au-delà, la lentille devient trop lourde et l'image se déforme), la CLOVER 5 offre un grossissement numérique propre et sans déformation jusqu'à 20x — tout en restant légère et maniable.",
    ],
  },
  {
    title: "Pourquoi la loupe électronique plutôt qu'une loupe optique ?",
    paragraphs: [
      "La loupe optique classique a une limite : plus le grossissement est fort, plus la lentille est petite, lourde et coûteuse, et plus l'image se déforme sur les bords. La loupe électronique CLOVER 5 s'affranchit de ces contraintes en projetant une image numérique agrandie, nette et sans distorsion sur un écran de 5 pouces — soit une surface de lecture beaucoup plus grande et confortable.",
      "De plus, la CLOVER 5 ajoute ce qu'aucune loupe optique ne peut offrir : le mode fort contraste. Pour une personne atteinte de DMLA, passer le texte en mode Jaune sur Noir ou Blanc sur Noir peut faire toute la différence dans la lisibilité, indépendamment du grossissement.",
    ],
  },
  {
    title: "Quand utiliser la CLOVER 5 ?",
    paragraphs: [
      "Lecture quotidienne à domicile : journaux, livres, romans, courriers, ordonnances, notices de médicaments, étiquettes alimentaires — la CLOVER 5 se glisse au-dessus du document comme une loupe classique. L'autofocus fait la mise au point instantanément. La lecture sur l'écran est plus fluide et moins fatigante qu'à travers une lentille optique.",
      "En déplacement et en extérieur : au restaurant pour lire la carte, en magasin pour déchiffrer les étiquettes de prix ou les compositions, à la pharmacie pour lire les notices, à la banque pour signer des documents. Avec ses 200 g et sa housse molletonnée, la CLOVER 5 se transporte facilement dans un sac à main ou un sac à dos — elle est prête en une seconde.",
      "Loisirs et activités manuelles : couture, broderie, philatélie, numismatique, lecture de partitions de musique, modélisme — la CLOVER 5 se pose sur l'ouvrage, laissant les deux mains libres pour travailler sous grossissement. La fonction gel d'image est particulièrement utile pour observer un détail précis sans devoir maintenir l'appareil immobile.",
      "Consultation de photos et souvenirs : la CLOVER 5 grossit les photos imprimées pour en retrouver les détails — visages, inscriptions au dos des tirages — et les partager en famille. Connectée à la télévision via le câble Cinch fourni, elle transforme le salon en espace de consultation grand format.",
      "Écriture et gestion du quotidien : posée sur le document, la CLOVER 5 sert de support d'écriture — remplir un chèque, signer un formulaire, rédiger une liste de courses — des gestes du quotidien que la basse vision complique, et que la CLOVER 5 rend à nouveau accessibles.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "La CLOVER 5 s'utilise de deux façons :",
    ],
    items: [
      "Tenue à la main par la poignée : comme une loupe classique, passée au-dessus du texte. L'autofocus maintient l'image nette en permanence.",
      "Posée sur le document : la CLOVER 5 se pose à plat sur la page, les mains libres, et glisse au-dessus du texte comme un téléagrandisseur miniature.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "Les larges boutons colorés en façade permettent de régler le grossissement et le mode de couleur sans tâtonner — une conception spécialement pensée pour les personnes à vision réduite. La mémorisation des derniers réglages évite de reconfigurer l'appareil à chaque mise en marche.",
      "La CLOVER 5 offre jusqu'à 4 h d'autonomie en utilisation continue. Elle peut également s'utiliser branchée sur son chargeur pour des sessions de lecture prolongées à domicile. L'arrêt automatique après 3 minutes d'inactivité préserve la batterie. Pour des besoins d'écriture assistée avec support dédié ou un écran plus grand, les modèles CLOVER 7 et CLOVER 10 sont disponibles en complément de gamme.",
    ],
  },
];

const LoupeElectroniqueClover5 = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupe électronique CLOVER 5 — basse vision et DMLA | LirElia"
        description="Loupe électronique CLOVER 5 : grossissement 4x à 20x, écran HD 5'', modes forts contrastes, poignée repliable et 4 h d'autonomie — pour lire confortablement avec une DMLA ou une basse vision."
        canonicalPath="/boutique/loupe-electronique-clover-5"
      />
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
            <span className="text-foreground font-semibold">Loupe électronique CLOVER 5</span>
          </nav>
        </div>

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

            {/* Right column */}
            <div className="flex flex-col order-1 lg:order-2">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Loupe électronique CLOVER 5</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une loupe électronique transportable légère et simple d'utilisation — conçue pour les personnes malvoyantes atteintes de DMLA, glaucome ou basse vision, utilisable partout au quotidien.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Une loupe électronique pour DMLA qui remplace avantageusement une loupe en verre. Pratique avec la poignée, simple d'utilisation, complète et légère, la CLOVER 5 s'utilise partout (magasin, maison, école, loisir, etc.). La lecture sur l'écran est plus rapide et confortable que sur une loupe optique.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">539,00 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

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
              <Link to="/aides-lecture-bassevision/loupes-electroniques"><ArrowLeft className="w-5 h-5" />Toutes les loupes électroniques</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default LoupeElectroniqueClover5;
