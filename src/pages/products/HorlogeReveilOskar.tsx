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
import imgPrincipale from "@/assets/products/horloge-reveil-gros-chiffres-oskar.jpg";
import imgChevet from "@/assets/products/horloge-reveil-gros-chiffres-oskar-table-chevet.jpg";
import imgLumineux from "@/assets/products/horloge-reveil-gros-chiffres-oskar-lumineux.jpg";

const STRIPE_URL = "https://buy.stripe.com/7sYeVefiKbC77pJb3L2Fa0b";

const images = [
  { src: imgPrincipale, alt: "Le réveil gros chiffres OSKAR affiche 10:40 en chiffres blanc sur fond noir." },
  { src: imgChevet, alt: "Le réveil gros chiffres OSKAR affiche 10:40 en chiffres blanc sur fond noir." },
  { src: imgLumineux, alt: "Le réveil gros chiffres OSKAR affiche 10:40 en chiffres blanc sur fond noir." },
];

const shortPoints = [
  "Compact, discret, peu de place prise sur la table de chevet",
  "Affichage Blanc adapté en cas de DMLA, de glaucome, etc.",
  "Alimentation sur secteur et sur piles",
];

const keyPoints = [
  "Chiffres de 45 mm de hauteur — parmi les plus grands du marché, lisibles de loin et de côté",
  "Contraste élevé chiffres lumineux sur fond noir — bien supérieur aux afficheurs LCD gris traditionnels",
  "2 couleurs au choix : Blanc/Noir (recommandé DMLA) ou Vert/Noir",
  "Thermomètre intégré — affiche heure, date et température ambiante en alternance",
  "Luminosité réglable manuellement (fort/faible) et automatiquement (diminution entre 18h et 6h)",
  "Large angle de vue — lisible sans être face à l'horloge, idéal depuis le lit",
  "Double alimentation : secteur USB + 3 piles AAA de secours en cas de coupure de courant",
  "Alarme réveil avec bouton Snooze pour reporter la sonnerie",
  "Format compact 17 × 8 × 3,5 cm — discret sur une table de chevet",
];

const specs = [
  { label: "Hauteur des chiffres", value: "45 mm" },
  { label: "Taille de l'écran", value: "170 × 70 mm" },
  { label: "Couleurs disponibles", value: "Chiffres Blancs / Fond Noir — Chiffres Verts / Fond Noir" },
  { label: "Affichage", value: "Heure, Date, Température" },
  { label: "Mode d'affichage cyclique", value: "Heure (10 s) → Date (3 s) → Température (3 s)" },
  { label: "Format heure", value: "12h ou 24h (au choix)" },
  { label: "Luminosité", value: "Ajustable manuellement (2 niveaux)" },
  { label: "Diminution automatique", value: "Oui — entre 18h et 6h (option activable)" },
  { label: "Alarme", value: "Oui, avec bouton Snooze" },
  { label: "Bouton large arrêt sonnerie", value: "Oui, sur le dessus" },
  { label: "Alimentation principale", value: "Bloc secteur 220V/5V USB fourni" },
  { label: "Alimentation secours", value: "3 piles AAA (non fournies)" },
  { label: "Dimensions", value: "17 × 8 × 3,5 cm" },
  { label: "Design", value: "Concave, effet miroir" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "L'horloge réveil OSKAR est conçue pour les personnes malvoyantes atteintes de DMLA, de glaucome, de cataracte ou de toute autre pathologie entraînant une basse vision. Elle s'adresse également aux seniors dont la vision a naturellement diminué avec l'âge, et qui peinent à lire l'heure sur un réveil ou une horloge classique à affichage LCD gris.",
      "Elle fait un excellent cadeau pratique et attentionné pour un proche en perte d'autonomie visuelle.",
    ],
  },
  {
    title: "Pourquoi les afficheurs classiques ne conviennent plus en basse vision ?",
    paragraphs: [
      "La plupart des réveils et horloges du commerce utilisent des afficheurs LCD aux chiffres gris, peu contrastés sur fond gris clair. Pour une personne normo-voyante, cela est suffisant. Pour une personne atteinte de DMLA ou de basse vision, ce faible contraste rend la lecture de l'heure difficile voire impossible — y compris avec des lunettes.",
      "L'horloge OSKAR utilise des LED lumineuses à fort contraste : chiffres blancs (ou verts) sur fond noir profond. La différence de contraste est radicale et immédiatement perceptible. Les chiffres de 45 mm de hauteur se lisent d'un coup d'œil, même depuis l'autre côté de la pièce ou depuis le lit.",
    ],
  },
  {
    title: "L'usage au quotidien et en période d'alitement",
    paragraphs: [
      "Pour une personne âgée ou convalescente passant du temps allongée, savoir l'heure sans effort est un besoin essentiel qui touche à l'autonomie et à la dignité quotidienne. Se lever pour vérifier l'heure sur un téléphone, tâtonner dans l'obscurité ou déranger un proche sont autant de situations que l'horloge OSKAR évite.",
      "Posée sur la table de chevet, l'OSKAR se lit depuis le lit grâce à son large angle de vue — l'affichage reste parfaitement lisible même en regardant l'horloge de côté, sans avoir à se redresser. La luminosité automatique qui diminue à partir de 18h évite l'éblouissement nocturne tout en maintenant une lisibilité confortable.",
      "En cas de réveil nocturne — fréquent chez les seniors — un simple coup d'œil suffit pour connaître l'heure sans allumer la lumière ni manipuler quoi que ce soit.",
    ],
  },
  {
    title: "Les autres usages dans la maison",
    paragraphs: [
      "L'horloge OSKAR ne se limite pas à la chambre. Sa forme compacte et son design effet miroir lui permettent de trouver sa place naturellement dans le salon, le bureau ou la cuisine. Son thermomètre intégré en fait un outil utile au quotidien : la température de la pièce s'affiche automatiquement en alternance avec l'heure et la date, pratique pour surveiller le confort thermique — particulièrement important pour les personnes âgées sensibles aux écarts de température.",
    ],
  },
  {
    title: "Fiabilité en cas de coupure de courant",
    paragraphs: [
      "L'alimentation principale est assurée par le secteur (câble et bloc USB fournis). En cas de coupure de courant, les 3 piles AAA de secours prennent le relais : l'horloge OSKAR continue d'afficher l'heure (10 secondes par appui sur le bouton Light) et maintient ses réglages — alarme, heure, préférences d'affichage — sans avoir à tout reconfigurer au retour du courant.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Les réglages s'effectuent via les boutons situés sur le dessus de l'appareil :",
      "• Bouton UP : règle le niveau de luminosité (fort / faible)",
      "• Bouton Mode : bascule l'affichage entre heure, date et température",
      "• Grand bouton (dessus) : arrête la sonnerie du réveil / affiche la température à la demande",
      "• Diminution automatique de la luminosité entre 18h et 6h : option activable pour le confort nocturne",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "En mode piles uniquement (sans alimentation secteur), l'affichage s'allume 10 secondes puis s'éteint pour préserver les batteries. Un appui sur le bouton Light rallume l'affichage pour 10 secondes. Les piles AAA ne sont pas fournies.",
      "L'horloge OSKAR est disponible en 2 versions : Chiffres Blancs / Fond Noir et Chiffres Verts / Fond Noir. Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement la version souhaitée dans le champ « Commentaire » lors de votre commande (ex. : « Horloge OSKAR — chiffres Blancs »). Nous traiterons votre demande en priorité.",
    ],
  },
];

const HorlogeReveilOskar = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Horloge réveil OSKAR gros chiffres pour DMLA | LirElia"
        description="Horloge réveil OSKAR : gros chiffres lumineux blancs ou verts sur fond noir, 45 mm, thermomètre intégré et double alimentation. Pour seniors et basse vision."
        canonicalPath="/boutique/horloge-reveil-gros-chiffres-oskar"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/horloge-reveil-gros-chiffres-oskar#product", name: "Horloge réveil gros chiffres OSKAR", description: "Horloge réveil OSKAR : gros chiffres lumineux 45 mm sur fond noir, thermomètre intégré et double alimentation, pour la basse vision et la DMLA.", image: [`https://lirelia.fr${imgPrincipale}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/horloge-reveil-gros-chiffres-oskar", priceCurrency: "EUR", price: "38.40", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Horloge réveil gros chiffres OSKAR", item: "https://lirelia.fr/boutique/horloge-reveil-gros-chiffres-oskar" },
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
            <span className="text-foreground font-semibold">Horloge réveil gros chiffres OSKAR</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Horloge réveil gros chiffres OSKAR</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une horloge réveil à gros chiffres lumineux très contrastés — conçue pour les seniors et les personnes malvoyantes atteintes de DMLA ou de basse vision.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Un réveil moderne, de forme concave, avec de gros chiffres lumineux blanc ou vert bien contrastés. La lecture de l'heure est agréable à tout moment de la journée et de la nuit.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">38,40 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× sans frais (commande &lt; 2 500 €).</p>

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
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter ce produit<ArrowRight className="w-5 h-5" /></a>
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

export default HorlogeReveilOskar;
