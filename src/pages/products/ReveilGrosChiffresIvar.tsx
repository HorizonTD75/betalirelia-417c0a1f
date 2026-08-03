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
import imgPrincipale from "@/assets/products/reveil-gros-chiffres-blanc-ivar.jpg";
import imgNoir from "@/assets/products/reveil-gros-chiffres-noir-ivar.jpg";
import imgBoutons from "@/assets/products/reveil-gros-chiffres-ivar-boutons.jpg";
import imgTemperature from "@/assets/products/reveil-gros-chiffres-ivar-temperature.jpg";

import VariantChoiceGrid from "@/components/products/VariantChoiceGrid";
import AvailabilityBadge from "@/components/products/AvailabilityBadge";
import { AVAILABILITY, aggregateStatus, ProductVariant } from "@/components/products/availability";

const colorVariants: ProductVariant[] = [
  {
    id: "blanche",
    label: "IVAR coque blanche",
    description: "Réveil parlant gros chiffres avec coque blanche.",
    price: "26,40 €",
    image: imgPrincipale,
    imageAlt: "Réveil parlant IVAR avec gros chiffres et coque blanche",
    buyLabel: "Acheter IVAR blanc",
    buyAriaLabel: "Acheter le réveil IVAR avec coque blanche",
    stripeUrl: "https://buy.stripe.com/4gM5kE9Yq9tZfWfc7P2Fa0c",
    status: "available",
  },
  {
    id: "noire",
    label: "IVAR coque noire",
    description: "Réveil parlant gros chiffres avec coque noire.",
    price: "26,40 €",
    image: imgNoir,
    imageAlt: "Réveil parlant IVAR avec gros chiffres et coque noire",
    buyLabel: "Acheter IVAR noir",
    buyAriaLabel: "Acheter le réveil IVAR avec coque noire",
    stripeUrl: "https://buy.stripe.com/5kQ00k7Qi35B7pJdbT2Fa0m",
    status: "available",
  },
];

const productStatus = aggregateStatus(colorVariants);
const productMeta = AVAILABILITY[productStatus];


const images = [
  { src: imgPrincipale, alt: "Le réveil gros chiffre IVAR posé sur un meuble et affichant 7h09 en gros caractères." },
  { src: imgNoir, alt: "Un réveil pour malvoyant avec de gros caractères lumineux" },
  { src: imgBoutons, alt: "Détail des boutons du réveil IVAR destinés aux personnes atteintes de DMLA ou de basse vision" },
  { src: imgTemperature, alt: "affichage de la température en gros chiffres sur le réveil IVAR" },
];

const shortPoints = [
  "Compact, discret, peu de place prise sur la table de chevet",
  "Affichage adapté pour une DMLA, un glaucome, etc.",
  "Alimentation sur secteur et piles",
  "Deux coloris au choix : coque Blanche ou coque Noire",
];

const keyPoints = [
  "Chiffres de 27 mm lumineux, blancs sur fond noir — contraste élevé, bien supérieur aux LCD gris",
  "Format ultra-compact (10 × 5 × 3 cm) — tient dans la paume, ne prend presque pas de place sur la table de chevet",
  "Thermomètre intégré — affiche la température ambiante à la demande d'un simple appui",
  "Luminosité réglable manuellement et automatiquement (diminution entre 18h et 7h)",
  "Alarme 60 dB avec bouton Snooze — report de sonnerie de 5 minutes",
  "Double alimentation : secteur USB + 3 piles AAA de secours en cas de coupure de courant",
  "2 coloris : coque Blanche ou coque Noire, chiffres blancs sur fond noir dans les deux cas",
  "Réglages simplifiés : 3 boutons discrets à l'arrière, grand bouton sur le dessus",
];

const specs = [
  { label: "Hauteur des chiffres", value: "27 mm" },
  { label: "Taille de l'écran LED", value: "90 × 45 mm" },
  { label: "Coloris disponibles", value: "Coque Blanche / Coque Noire (chiffres toujours Blancs / Fond Noir)" },
  { label: "Affichage", value: "Heure, Température (à la demande)" },
  { label: "Format heure", value: "12h ou 24h (au choix)" },
  { label: "Luminosité", value: "Ajustable manuellement" },
  { label: "Diminution automatique", value: "Oui — entre 18h et 7h" },
  { label: "Alarme", value: "Oui, 60 dB, avec bouton Snooze (+5 min)" },
  { label: "Grand bouton (dessus)", value: "Arrêt sonnerie + affichage température" },
  { label: "Boutons de réglage", value: "3 boutons à l'arrière (heure, alarme)" },
  { label: "Alimentation principale", value: "Bloc secteur 220V/5V USB fourni" },
  { label: "Alimentation secours", value: "3 piles AAA (non fournies)" },
  { label: "Dimensions", value: "10 × 5 × 3 cm" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "Le réveil IVAR est conçu pour les personnes malvoyantes atteintes de DMLA, de glaucome, de cataracte ou de toute autre pathologie entraînant une basse vision. Il s'adresse également aux seniors dont la vision a naturellement baissé avec l'âge, et qui peinent à déchiffrer l'heure sur un réveil classique à affichage LCD gris.",
      "Son format compact et son prix accessible en font aussi un cadeau pratique et attentionné pour un proche entrant en EHPAD ou en maison de retraite, où la surface disponible sur la table de chevet est souvent réduite.",
    ],
  },
  {
    title: "Pourquoi le contraste est décisif pour une personne malvoyante ?",
    paragraphs: [
      "Les réveils du commerce utilisent le plus souvent des afficheurs LCD aux chiffres gris clair sur fond gris foncé. Ce manque de contraste est parfaitement gérable pour une personne normo-voyante, mais il devient un obstacle majeur en cas de DMLA ou de basse vision : même avec une correction optique, la lecture de l'heure peut devenir laborieuse, voire impossible.",
      "Le réveil IVAR utilise des LED lumineuses à fort contraste : chiffres blancs lumineux sur fond noir profond. Ce mode d'affichage est cliniquement reconnu comme le plus lisible pour les personnes atteintes de DMLA ou présentant une sensibilité accrue aux contrastes. La différence se ressent dès le premier coup d'œil.",
    ],
  },
  {
    title: "L'usage au quotidien et lors des nuits difficiles",
    paragraphs: [
      "Pour une personne âgée ou convalescente, savoir l'heure sans effort est un besoin élémentaire qui touche directement à l'autonomie et à la sérénité quotidienne. Se lever pour chercher un téléphone, tâtonner dans le noir ou dépendre d'un proche pour connaître l'heure sont des situations que le réveil IVAR permet d'éviter.",
      "Posé sur la table de chevet, le réveil IVAR se lit d'un coup d'œil depuis l'oreiller. Sa luminosité automatiquement réduite entre 18h et 7h évite l'éblouissement nocturne tout en maintenant une lisibilité suffisante. Lors des réveils nocturnes — fréquents chez les seniors — un simple regard suffit pour s'orienter dans le temps sans allumer la lumière.",
      "Son format miniature (10 × 5 × 3 cm) est un vrai atout : il ne gêne pas les autres objets sur la table de chevet, ne s'accroche pas au bras lors des retournements nocturnes, et convient parfaitement aux petits espaces des chambres médicalisées ou des hébergements seniors.",
    ],
  },
  {
    title: "Le thermomètre : un confort au quotidien pour les seniors",
    paragraphs: [
      "Les personnes âgées sont particulièrement sensibles aux écarts de température, et leur perception de la chaleur ou du froid est souvent altérée — ce qui peut créer des risques lors des épisodes de canicule ou de grand froid. Un appui sur le grand bouton du dessus affiche instantanément la température ambiante de la pièce, sans manipulation complexe.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Les réglages s'effectuent via les 3 boutons discrets situés à l'arrière de l'appareil :",
      "• Réglage de l'heure et du format (12h / 24h)",
      "• Réglage de l'alarme",
      "• Activation / désactivation de la diminution automatique de luminosité nocturne",
      "Le grand bouton sur le dessus remplit deux fonctions :",
      "• Arrêt de la sonnerie du réveil (ou report de 5 minutes avec Snooze)",
      "• Affichage de la température ambiante à la demande",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "En mode piles uniquement (sans alimentation secteur), le réveil maintient ses réglages mais l'écran reste éteint pour préserver les batteries. Les piles AAA ne sont pas fournies. La sonnerie est réglée à 60 dB — suffisamment audible pour la plupart des utilisateurs, y compris les personnes ayant une légère déficience auditive.",
      "Différence avec l'horloge OSKAR : si vous souhaitez un affichage plus grand (chiffres de 45 mm, écran de 170 × 70 mm) avec affichage cyclique automatique de l'heure, de la date et de la température, ainsi qu'un design effet miroir, l'Horloge OSKAR est la version supérieure de la gamme.",
    ],
  },
  {
    title: "Choix du coloris",
    paragraphs: [
      "Le réveil IVAR est disponible en 2 versions : coque Blanche ou coque Noire — dans les deux cas, les chiffres sont blancs sur fond noir.",
      "Comment passer votre commande ? Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement le coloris souhaité dans le champ « Commentaire » lors de votre commande (ex. : « Réveil IVAR — coque Noire »). Nous traiterons votre demande en priorité.",
    ],
  },
];

const ReveilGrosChiffresIvar = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Réveil gros chiffres IVAR pour basse vision et DMLA"
        description="Réveil IVAR : gros chiffres lumineux blancs sur fond noir, format ultra-compact, thermomètre intégré et double alimentation. Pensé pour seniors et basse vision."
        canonicalPath="/boutique/reveil-gros-chiffres-ivar"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/reveil-gros-chiffres-ivar#product", name: "Réveil gros chiffres IVAR", description: "Réveil IVAR : gros chiffres lumineux blancs sur fond noir, ultra-compact, thermomètre intégré et double alimentation, pour basse vision et DMLA.", image: [`https://lirelia.fr${imgPrincipale}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/reveil-gros-chiffres-ivar", priceCurrency: "EUR", price: "26.40", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Réveil gros chiffres IVAR", item: "https://lirelia.fr/boutique/reveil-gros-chiffres-ivar" },
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
            <span className="text-foreground font-semibold">Réveil gros chiffres IVAR</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Réveil gros chiffres IVAR</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Un réveil discret et très lisible, à gros chiffres lumineux blancs contrastés — conçu pour les seniors et les personnes malvoyantes atteintes de DMLA ou de basse vision.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Un réveil discret avec de gros chiffres lumineux blanc bien contrastés. Facilite la lecture de l'heure à tout moment de la journée et de la nuit.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">26,40 €</p>
                {productMeta.purchasable ? (
                  <Button variant="secondary" size="lg" asChild>
                    <a href="#choix-coloris">
                      Choisir le coloris
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
            <Button variant="secondary" size="lg" asChild>
              <a href="#choix-coloris">Choisir le coloris<ArrowRight className="w-5 h-5" /></a>
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

export default ReveilGrosChiffresIvar;
