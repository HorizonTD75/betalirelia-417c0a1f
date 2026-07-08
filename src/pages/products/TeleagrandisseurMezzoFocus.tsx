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
import imgMain from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";
import imgLecture from "@/assets/products/teleagrandisseur-dmla-mezzo-focus-24.jpg";
import imgPlie from "@/assets/products/teleagrandisseur-mezzo-focus-plie-dmla.jpg";

const STRIPE_URL = "https://buy.stripe.com/9B64gAb2ufSn25p9ZH2Fa0f";

const images = [
  { src: imgMain, alt: "Le téléagrandisseur Mezzo affiche l’image agrandie de la photo d’une murène présente dans le magazine posé sur le plateau de lecture." },
  { src: imgLecture, alt: "Une personne âgée atteinte de basse vision lit grâce au téléagrandisseur MEZZO" },
  { src: imgPlie, alt: "Téléagrandisseur MEZZO plié, facilement transportable" },
];

const shortPoints = [
  "Grossissement de 1,2× à 43× — selon version et réglages",
  "Caméra Full HD avec autofocus performant",
  "Trois boutons sous l'écran — prise en main immédiate",
  "Pliable et transportable (version 20'') dans sa sacoche",
];

const keyPoints = [
  "Grossissement de 1,2× à 43× — couvre tous les besoins, des faibles aux forts grossissements",
  "Caméra Full HD avec autofocus débrayable — image nette, couleurs vives, sans effort de mise au point",
  "Seulement 3 boutons sous l'écran — prise en main en quelques minutes, même sans expérience informatique",
  "Modes forts contrastes : Noir/Blanc, Blanc/Noir et autres combinaisons — décisifs pour la DMLA",
  "Écran LED mat à hauteur et inclinaison ajustables — aucun reflet, position idéale pour chaque utilisateur",
  "Plateau XY avec frein (option) — suit la ligne de texte pour une lecture fluide",
  "Pliable et transportable (version 20'') dans sa sacoche — emportez-le chez un proche ou en déplacement",
  "Fonction localisateur — retrouve instantanément un objet posé sur le plateau",
  "Lignage et fenêtrage — guide le regard sur la ligne lue, réduit la fatigue visuelle",
  "Fabrication allemande Reinecker — fiabilité et longévité reconnues depuis plus de 40 ans",
];

const specs = [
  { label: "Taille d'écran", value: "20'' (51 cm) ou 24'' (61 cm)" },
  { label: "Résolution", value: "1366 × 768 px (20'') / 1920 × 1080 px (24'')" },
  { label: "Grossissement standard", value: "3× à 33× (20'') / 3,6× à 44× (24'')" },
  { label: "Grossissement étendu (menu)", value: "1,2× à 42× (20'') / 1,4× à 50× (24'')" },
  { label: "Caméra", value: "Full HD, autofocus débrayable" },
  { label: "Modes d'affichage", value: "Couleurs naturelles + forts contrastes" },
  { label: "Écran", value: "LED mat, hauteur et inclinaison ajustables" },
  { label: "Commandes", value: "3 boutons sous l'écran" },
  { label: "Fonctions", value: "Localisateur, lignage, fenêtrage, luminosité, menu de personnalisation" },
  { label: "Poids (20'' sans plateau)", value: "6,2 kg" },
  { label: "Poids (24'' avec plateau XY)", value: "10,5 kg" },
  { label: "Matière", value: "Aluminium" },
  { label: "Fabricant", value: "Reinecker (Allemagne)" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse le Mezzo Focus ?",
    paragraphs: [
      "Le Mezzo Focus est conçu pour les personnes malvoyantes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de glaucome, de rétinopathie diabétique, de rétinite pigmentaire ou de toute autre pathologie entraînant une basse vision modérée à sévère. Il s'adresse tout particulièrement aux seniors souhaitant retrouver une autonomie dans leurs activités quotidiennes de lecture et d'écriture, à leur domicile.",
      "Il convient également aux étudiants malvoyants, aux actifs et à toute personne dont le besoin en grossissement dépasse les capacités d'une loupe optique ou d'une loupe électronique portable.",
    ],
  },
  {
    title: "Pourquoi le téléagrandisseur de bureau est la solution la plus confortable pour une lecture longue",
    paragraphs: [
      "Les modèles de bureau se présentent avec un écran plus large et un système de zoom multipoint, parfaits pour les sessions de lecture longues ou le travail à domicile. Contrairement à une loupe électronique portable dont l'écran de 5 pouces impose une fenêtre de lecture réduite, le Mezzo Focus affiche le texte sur un écran de 51 cm (20'') ou 61 cm (24'') — une surface suffisante pour lire plusieurs lignes à la fois, sans déplacer continuellement l'appareil ni fatiguer les yeux.",
      "Les téléagrandisseurs de bureau combinent confort et efficacité pour une utilisation prolongée à la maison ou au travail. Le Mezzo Focus est pensé pour des sessions de lecture de plusieurs heures : écran mat sans reflet, position ajustable, lignage pour guider le regard, et luminosité réglable pour s'adapter aux conditions lumineuses de la pièce.",
    ],
  },
  {
    title: "Retrouver l'autonomie au quotidien",
    paragraphs: [
      "Grâce à un téléagrandisseur installé à son bureau, une personne malvoyante peut participer à la gestion familiale, suivre les actualités et poursuivre ses passions, sans assistance. Son quotidien s'en trouve radicalement transformé, avec un sentiment renforcé de maîtrise sur sa vie.",
      "Lire son journal chaque matin, consulter ses relevés bancaires, écrire une lettre, faire des mots croisés, lire les notices de médicaments, vérifier une ordonnance : toutes ces activités du quotidien redeviennent accessibles avec le Mezzo Focus, sans avoir besoin de solliciter un proche à chaque fois.",
    ],
  },
  {
    title: "Simple comme 3 boutons — accessible à tous les seniors",
    paragraphs: [
      "Le Mezzo Focus a été conçu avec une obsession : la simplicité. Trois boutons seulement, placés sous l'écran dans une position naturelle pour les doigts : changement du mode de couleur, réglage du grossissement, réglage de la luminosité.",
      "Pas d'écran tactile, pas de menu complexe pour l'usage courant. Les personnes peu familières avec la technologie prennent en main le Mezzo en quelques minutes. Les réglages avancés (grossissement min/max, couleur du lignage, combinaisons de contrastes personnalisées) restent accessibles via un menu, mais optionnels.",
    ],
  },
  {
    title: "Le plateau XY avec frein : la lecture sans effort",
    paragraphs: [
      "Le plateau de lecture XY (option A3 avec frein) est l'accessoire qui transforme radicalement le confort de lecture. Posé sur le plateau, le document se déplace en douceur, guidé horizontalement et verticalement par les rails. Le frein permet de bloquer le déplacement vertical pour que le regard reste sur la même ligne — comme un guide de lecture physique. Plus besoin de forcer pour avancer d'une ligne à l'autre : le geste devient naturel et fluide, même pour les mains dont la précision est réduite par l'âge ou un tremblement.",
    ],
  },
  {
    title: "La qualité d'image Reinecker : une réputation de 40 ans",
    paragraphs: [
      "Le Mezzo Focus est fabriqué par Reinecker, fabricant allemand de téléagrandisseurs pour malvoyants depuis plus de 40 ans, reconnu mondialement pour la qualité de ses optiques et de ses électroniques. La caméra Full HD associée à l'éclairage LED à spectre complet délivre une image aux couleurs vives et fidèles, sans scintillement ni déformation — y compris aux forts grossissements. La structure en aluminium garantit légèreté et robustesse pour des années d'usage intensif.",
    ],
  },
  {
    title: "Pliable et transportable : la liberté du 20''",
    paragraphs: [
      "La version 20'' se plie en un geste pour être glissée dans sa sacoche dédiée (option). Que ce soit pour un rendez-vous médical, une visite chez un proche, un cours ou un déplacement professionnel, le Mezzo 20'' accompagne son utilisateur hors de chez lui sans contrainte. Une sacoche avec sangle d'épaule est disponible en option.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "Le Mezzo Focus est un téléagrandisseur de bureau, pensé pour une installation fixe sur un bureau ou une table. Pour un usage principalement nomade (magasin, transports, extérieur), une loupe électronique portable comme la CLOVER 5 sera plus adaptée. Les deux appareils sont complémentaires : le Mezzo pour la maison, la loupe électronique pour les déplacements.",
    ],
  },
];

const TeleagrandisseurMezzoFocus = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Téléagrandisseur Mezzo Focus pour basse vision | LirElia"
        description="Téléagrandisseur Mezzo Focus : station de lecture HD pour DMLA et basse vision sévère, grand écran, zoom puissant et forts contrastes pour lire et écrire."
        canonicalPath="/boutique/teleagrandisseur-mezzo-focus"
        ogImage={imgMain}
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/teleagrandisseur-mezzo-focus#product", name: "Téléagrandisseur Mezzo Focus", description: "Téléagrandisseur Mezzo Focus : solution de lecture pour les personnes atteintes de basse vision, DMLA ou troubles visuels importants.", image: [`https://lirelia.fr${imgMain}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/teleagrandisseur-mezzo-focus", priceCurrency: "EUR", price: "2582.00", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Téléagrandisseur Mezzo Focus", item: "https://lirelia.fr/boutique/teleagrandisseur-mezzo-focus" },
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
            <Link to="/aides-lecture-bassevision/tele-agrandisseurs" className="hover:text-primary transition-colors">Télé-agrandisseurs</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Téléagrandisseur Mezzo Focus</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Téléagrandisseur Mezzo Focus</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Un téléagrandisseur de bureau compact, pliable et simple à utiliser — qualité d'image Full HD, grossissement jusqu'à 43×, conçu pour une utilisation quotidienne en cas de DMLA, glaucome, rétinopathie ou basse vision.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">À partir de 2 582 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter le Mezzo Focus
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground">
                Paiement en 2×, 3× ou 4× disponible pour toute commande inférieure à 2 500 €.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-secondary/40 bg-secondary/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Points forts</h2>
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Disponible en 20'' (51 cm) ou 24'' (61 cm), avec ou sans plateau de lecture, le Mezzo Focus possède toutes les fonctionnalités utiles pour la lecture et la consultation de documents — pour un rapport qualité/prix exceptionnel.
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
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Configurations disponibles</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              Le Mezzo Focus se configure selon vos besoins : <strong>taille d'écran 20'' ou 24''</strong>, <strong>sans plateau</strong> (20'' uniquement), <strong>plateau amovible A4+</strong> ou <strong>plateau XY A3 avec frein</strong>. Une <strong>sacoche de transport</strong> est disponible pour la version 20''.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez la configuration souhaitée (taille d'écran + plateau) dans le champ « Commentaire » lors de votre commande, ou contactez-nous pour être guidé dans votre choix.
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
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter le Mezzo Focus<ArrowRight className="w-5 h-5" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/aides-lecture-bassevision/tele-agrandisseurs"><ArrowLeft className="w-5 h-5" />Tous les télé-agrandisseurs</Link>
            </Button>
          </div>
        </div></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default TeleagrandisseurMezzoFocus;
