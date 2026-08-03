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
import imgPrincipale from "@/assets/products/horloge-reveil-pour-malvoyant-frida.jpg";
import imgBlanc from "@/assets/products/horloge-reveil-frida-basse-vision-chiffres-blanc.jpg";
import imgVert from "@/assets/products/horloge-reveil-frida-chiffres-vert.jpg";
import imgOrange from "@/assets/products/horloge-pour-malvoyant-frida-orange-dmla.jpg";
import imgRouge from "@/assets/products/horloge-reveil-malvoyant-frida-rouge.jpg";
import imgBleu from "@/assets/products/horloge-pour-malvoyant-frida-chiffres-bleu.jpg";

import VariantChoiceGrid from "@/components/products/VariantChoiceGrid";
import AvailabilityBadge from "@/components/products/AvailabilityBadge";
import { AVAILABILITY, aggregateStatus, ProductVariant } from "@/components/products/availability";

const colorVariants: ProductVariant[] = [
  { id: "blanc", label: "FRIDA chiffres blancs", description: "Horloge réveil gros chiffres avec affichage blanc sur fond noir.", price: "37 €", image: imgBlanc, imageAlt: "Horloge réveil FRIDA avec gros chiffres blancs", swatch: "#ffffff", buyLabel: "Acheter FRIDA blanc", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres blancs", stripeUrl: "https://buy.stripe.com/aFa5kEeeGbC711lgo52Fa0h", status: "available" },
  { id: "rouge", label: "FRIDA chiffres rouges", description: "Horloge réveil gros chiffres avec affichage rouge sur fond noir.", price: "37 €", image: imgRouge, imageAlt: "Horloge réveil FRIDA avec gros chiffres rouges", swatch: "#e53935", buyLabel: "Acheter FRIDA rouge", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres rouges", stripeUrl: "https://buy.stripe.com/eVq8wQb2ufSn9xR6Nv2Fa0i", status: "available" },
  { id: "vert", label: "FRIDA chiffres verts", description: "Horloge réveil gros chiffres avec affichage vert sur fond noir.", price: "37 €", image: imgVert, imageAlt: "Horloge réveil FRIDA avec gros chiffres verts", swatch: "#43a047", buyLabel: "Acheter FRIDA vert", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres verts", stripeUrl: "https://buy.stripe.com/7sY6oIc6y6hNbFZ2xf2Fa0j", status: "available" },
  { id: "orange", label: "FRIDA chiffres orange", description: "Horloge réveil gros chiffres avec affichage orange sur fond noir.", price: "37 €", image: imgOrange, imageAlt: "Horloge réveil FRIDA avec gros chiffres orange", swatch: "#fb8c00", buyLabel: "Acheter FRIDA orange", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres orange", stripeUrl: "https://buy.stripe.com/fZufZi5Ia0XtdO77Rz2Fa0l", status: "available" },
  { id: "bleu", label: "FRIDA chiffres bleus", description: "Horloge réveil gros chiffres avec affichage bleu sur fond noir.", price: "37 €", image: imgBleu, imageAlt: "Horloge réveil FRIDA avec gros chiffres bleus", swatch: "#42a5f5", buyLabel: "Acheter FRIDA bleu", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres bleus", stripeUrl: "https://buy.stripe.com/14A3cw7QicGb6lF2xf2Fa0k", status: "available" },
];


const productStatus = aggregateStatus(colorVariants);
const productMeta = AVAILABILITY[productStatus];

const images = [
  { src: imgPrincipale, alt: "Le réveil FRIDA affiche 6:00 en gros caractères blancs sur fond noir" },
  { src: imgBlanc, alt: "L'horloge FRIDA en caractères blancs très lisibles pour personnes atteintes de DMLA" },
  { src: imgVert, alt: "Horloge FRIDA, gros caractères verts pour basse vision" },
  { src: imgOrange, alt: "Horloge FRIDA avec gros chiffres orange, basse vision, DMLA" },
  { src: imgRouge, alt: "Horloge FRIDA avec gros chiffres rouges, basse vision, DMLA" },
  { src: imgBleu, alt: "Horloge FRIDA avec gros chiffres bleus, malvoyance, DMLA" },
];

const shortPoints = [
  "Compact, discret, peu de place prise sur la table de chevet",
  "Grand affichage lumineux ajustable pour une lecture toujours facilitée, surtout avec une DMLA",
  "Alimentation sur secteur et sur piles",
];

const keyPoints = [
  "Très grands chiffres de 52 mm — parmi les plus lisibles du marché, visibles de loin et de côté",
  "5 couleurs au choix : Blanc, Rouge, Vert, Orange, Bleu — toujours sur fond noir profond",
  "Luminosité réglable sur 3 niveaux manuellement + diminution automatique entre 18h et 6h",
  "Large angle de vue — lisible depuis le lit sans se redresser, même de côté",
  "Affichage cyclique automatique : heure (10 s) → date (3 s) → température (3 s)",
  "Thermomètre intégré — affichable à la demande ou en mode cyclique",
  "Alarme réveil avec bouton Snooze",
  "Double alimentation : secteur USB + 3 piles AAA de secours",
  "Grand écran LED 160 × 60 mm — surface d'affichage généreuse",
];

const specs = [
  { label: "Hauteur des chiffres", value: "52 mm" },
  { label: "Taille de l'écran LED", value: "160 × 60 mm" },
  { label: "Couleurs disponibles", value: "Blancs / Rouges / Verts / Oranges / Bleus — Fond Noir" },
  { label: "Affichage", value: "Heure, Date, Température" },
  { label: "Mode cyclique", value: "Heure (10 s) → Date (3 s) → Température (3 s)" },
  { label: "Format heure", value: "12h ou 24h" },
  { label: "Luminosité", value: "3 niveaux, réglage manuel (touche UP)" },
  { label: "Diminution automatique", value: "Oui — entre 18h et 6h par défaut (horaires ajustables)" },
  { label: "Alarme", value: "Oui, avec bouton Snooze" },
  { label: "Alimentation principale", value: "Bloc secteur 220V/5V USB fourni" },
  { label: "Alimentation secours", value: "3 piles AAA (non fournies)" },
  { label: "Dimensions", value: "16 × 6 × 3 cm" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "L'horloge réveil FRIDA est conçue pour les personnes malvoyantes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de glaucome, de cataracte, de rétinite pigmentaire ou de toute autre pathologie entraînant une basse vision. Elle s'adresse également aux seniors dont la vision a naturellement diminué avec l'âge, et pour qui les afficheurs classiques sont devenus insuffisants.",
      "Son choix de 5 couleurs d'affichage la distingue : chaque personne malvoyante a une sensibilité visuelle différente. Certaines distinguent mieux le rouge ou l'orange, d'autres le vert ou le blanc. La FRIDA s'adapte à chaque profil.",
    ],
  },
  {
    title: "Pourquoi la couleur d'affichage compte autant que la taille des chiffres",
    paragraphs: [
      "En basse vision, le cerveau ne traite pas toutes les couleurs de la même façon. Les personnes atteintes de DMLA présentent souvent une sensibilité accrue au contraste dans certaines longueurs d'onde. Un affichage en rouge sur fond noir sera perçu plus facilement par certaines personnes, tandis que le blanc ou l'orange conviendra mieux à d'autres. Les personnes atteintes de photophobie (sensibilité accrue à la lumière) sont généralement plus à l'aise avec les fonds noirs, ce que la FRIDA propose dans toutes ses variantes.",
      "Par rapport aux afficheurs LCD gris standard, les chiffres lumineux LED de la FRIDA offrent un contraste radicalement supérieur. Les horloges digitales à LED sont bien plus visibles que les horloges traditionnelles, grâce au contraste fort et aux gros caractères qui permettent aux déficients visuels de lire l'heure de loin sans effort.",
    ],
  },
  {
    title: "Un usage conçu pour le quotidien au lit et en chambre",
    paragraphs: [
      "Pour une personne âgée ou convalescente, connaître l'heure sans effort est un besoin fondamental qui touche à l'autonomie et à la dignité. La FRIDA y répond de plusieurs façons :",
      "Depuis le lit : ses chiffres de 52 mm se lisent depuis l'oreiller, et son grand angle de vue permet une lecture parfaite même en regardant l'horloge de côté — sans se redresser. La luminosité se réduit automatiquement le soir pour ne pas éblouir pendant la nuit.",
      "Lors des réveils nocturnes : fréquents chez les seniors et les personnes sous traitement, ces moments de désorientation sont soulagés par un simple coup d'œil sur l'horloge FRIDA — sans allumer la lumière ni manipuler quoi que ce soit.",
      "En EHPAD ou résidence médicalisée : le format compact (16 × 6 × 3 cm) et la table de chevet souvent exiguë trouvent ici une solution discrète et efficace. L'alimentation secteur assure un fonctionnement permanent, les piles prennent le relais en cas de déplacement ou de coupure.",
    ],
  },
  {
    title: "L'affichage cyclique : heure, date et température en un clin d'œil",
    paragraphs: [
      "La FRIDA peut afficher en alternance automatique l'heure, la date et la température ambiante. Ce cycle aide les personnes âgées désorientées — ou simplement peu sûres d'elles — à se repérer dans le temps et dans leur environnement sans effort. Un affichage de la date peut aider les seniors qui perdent parfois leurs repères temporels pendant la journée, en leur permettant de préserver une plus grande autonomie.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Les réglages s'effectuent via les boutons situés à l'arrière :",
      "• Réglage de l'heure, du format (12h/24h), de l'alarme",
      "• Activation de la diminution automatique de luminosité nocturne (plage horaire ajustable)",
      "• Activation du mode cyclique heure / date / température",
      "La touche UP sur le dessus règle la luminosité sur 3 niveaux. La touche Mode affiche la température à la demande.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "En mode piles uniquement (sans secteur), l'affichage s'allume 10 secondes puis s'éteint pour préserver les batteries. Un appui sur le dessus du boîtier rallume l'affichage pour 10 secondes. Les piles AAA ne sont pas fournies.",
      "Différence avec le réveil IVAR : la FRIDA propose des chiffres plus grands (52 mm vs 27 mm), un écran plus large (160 × 60 mm vs 90 × 45 mm), 5 couleurs d'affichage au choix, un affichage cyclique automatique et 3 niveaux de luminosité — pour un confort visuel supérieur. Le réveil IVAR reste la solution idéale pour un budget plus serré ou un espace très limité.",
    ],
  },
];

const HorlogeReveilFrida = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Horloge FRIDA très gros chiffres en 5 couleurs | LirElia"
        description="Horloge réveil FRIDA : très gros chiffres lumineux 52 mm en 5 couleurs, affichage cyclique, thermomètre et double alimentation. Pour seniors et basse vision."
        canonicalPath="/boutique/horloge-gros-chiffres-frida"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/horloge-gros-chiffres-frida#product", name: "Horloge gros chiffres FRIDA", description: "Horloge réveil FRIDA pour basse vision : très gros chiffres lumineux de 52 mm en 5 couleurs au choix, affichage cyclique, thermomètre et double alimentation.", image: [`https://lirelia.fr${imgPrincipale}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/horloge-gros-chiffres-frida", priceCurrency: "EUR", price: "37.00", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Horloge gros chiffres FRIDA", item: "https://lirelia.fr/boutique/horloge-gros-chiffres-frida" },
          ] },
        ]}
      />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue-aides-basse-vision" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Horloge gros chiffres FRIDA</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Horloge gros chiffres FRIDA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une horloge réveil moderne à très gros chiffres lumineux, disponible en 5 couleurs — conçue pour les seniors et les personnes malvoyantes atteintes de DMLA ou de basse vision.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Une horloge discrète, moderne, avec de gros chiffres lumineux très bien contrastés. La lecture de l'heure est agréable à tout moment de la journée et de la nuit.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">37 €</p>
                {productMeta.purchasable ? (
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#choix-couleur">
                      Choisir la couleur
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                ) : (
                  <>
                    <AvailabilityBadge status={productStatus} />
                    <Button variant="secondary" size="lg" disabled>{productMeta.buttonLabel}</Button>
                  </>
                )}
              </div>
              {!productMeta.purchasable && productMeta.message && (
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">{productMeta.message}</p>
              )}
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

        <section id="choix-couleur" className="container pb-12 scroll-mt-32">
          <VariantChoiceGrid title="Choisissez la couleur des chiffres" variants={colorVariants} />
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
              <div key={block.title} className="bg-card rounded-2xl border-2 border-primary/30 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-base md:text-lg text-foreground leading-relaxed mb-3 last:mb-0">{p}</p>
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
                <div className="bg-muted px-5 py-4 font-bold text-foreground text-base md:text-lg">{row.label}</div>
                <div className="px-5 py-4 text-base md:text-lg text-foreground leading-relaxed">{row.value}</div>
              </div>
            ))}
          </div>
        </div></div></section>

        <section className="py-12 lg:py-16 bg-muted"><div className="container"><div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Points clés</h2>
          <Card variant="elevated" className="border-l-8 border-l-secondary"><CardContent className="p-6 md:p-8"><ul className="space-y-3">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base md:text-lg text-foreground leading-relaxed">
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
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild={productMeta.purchasable} disabled={!productMeta.purchasable}>
              {productMeta.purchasable ? (
                <a href="#choix-couleur">Choisir la couleur<ArrowRight className="w-5 h-5" /></a>
              ) : (
                productMeta.buttonLabel
              )}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/catalogue-aides-basse-vision"><ArrowLeft className="w-5 h-5" />Retour au catalogue</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default HorlogeReveilFrida;
