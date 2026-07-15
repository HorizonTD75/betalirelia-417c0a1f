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
import imgJournal from "@/assets/products/souris-loupe-electronique-vera-journal.jpg";
import imgDmla from "@/assets/products/souris-loupe-electronique-vera-dmla.jpg";
import imgJauneGrise from "@/assets/products/souris-loupe-electronique-vera-jaune-grise.jpg";
import imgVera from "@/assets/products/souris-loupe-electronique-vera.jpg";

const STRIPE_URL = "https://buy.stripe.com/6oUdRafiK5dJ7pJgo52Fa0e";

const images = [
  { src: imgJournal, alt: "La souris loupe électronique posée sur un magazine avec l’image grossie visible sur l’écran d’un téléviseur." },
  { src: imgDmla, alt: "Loupe électronique au format d'une souris pour DMLA" },
  { src: imgJauneGrise, alt: "Loupe électronique de la taille d'une souris d'ordinateur, pour malvoyant" },
  { src: imgVera, alt: "Souris loupe électronique pour basse vision, DMLA, glaucome" },
];

const shortPoints = [
  "Grossissement 15× à 60× sur un téléviseur de 50 cm",
  "Utilise votre téléviseur — pas d'écran supplémentaire à acheter",
  "3 modes : couleurs réelles, Blanc/Noir, Noir/Blanc",
  "Forme de souris familière, 4 boutons sous les doigts",
];

const keyPoints = [
  "Grossissement de 15× à 60× sur un écran de 50 cm — bien au-delà de toute loupe optique",
  "Utilise votre téléviseur comme écran d'affichage — pas besoin d'acheter un écran dédié",
  "3 modes d'affichage : couleurs réelles, fort contraste Blanc/Noir, fort contraste Noir/Blanc",
  "4 boutons sous les doigts, positionnés ergonomiquement — utilisables même avec une vision très réduite",
  "Roulettes de guidage sous la souris — déplacement horizontal facilité pour suivre une ligne de texte",
  "Fonction gel d'image — fige l'affichage pour observer un détail sans maintenir la souris immobile",
  "Compatible Cinch et HDMI (selon option choisie) — s'adapte à tous les téléviseurs",
  "Légère : 127 g — tenue en main prolongée sans fatigue",
  "Branchée sur secteur — puissance constante, pas de batterie à recharger",
];

const specs = [
  { label: "Grossissement", value: "15× à 60× (sur écran 50 cm / 20\")" },
  { label: "Largeur max. de texte capturée", value: "24 mm" },
  { label: "Modes d'affichage", value: "Couleurs réelles / Blanc sur Noir / Noir sur Blanc" },
  { label: "Fonction gel d'image", value: "Oui" },
  { label: "Connexion standard", value: "Prise Cinch (jaune) — téléviseur avec entrée vidéo" },
  { label: "Connexion option", value: "Adaptateur HDMI (écran ou TV HDMI)" },
  { label: "Boutons", value: "4 boutons ergonomiques (marche/arrêt, zoom, mode couleur, gel)" },
  { label: "Roulettes de guidage", value: "Oui — 4 roulettes, déplacement horizontal facilité" },
  { label: "Alimentation", value: "Secteur — bloc alimentation 220 V–240 V fourni" },
  { label: "Dimensions", value: "6 × 12 × 6,4 cm" },
  { label: "Poids", value: "127 g" },
];

const descriptionBlocks: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La souris loupe VERA est conçue pour les personnes malvoyantes atteintes de DMLA (dégénérescence maculaire liée à l'âge), de glaucome, de cataracte ou de toute autre pathologie entraînant une basse vision. Elle s'adresse tout particulièrement aux seniors qui souhaitent retrouver le plaisir de lire leurs journaux, magazines, courriers et ordonnances depuis leur fauteuil, sans investir dans un téléagrandisseur avec écran intégré.",
    ],
  },
  {
    title: "L'idée géniale : utiliser le téléviseur du salon comme écran",
    paragraphs: [
      "La plupart des téléagrandisseurs incluent leur propre écran — ce qui augmente significativement leur coût et leur encombrement. La souris VERA adopte une approche différente : elle utilise le téléviseur que vous avez déjà chez vous comme écran d'affichage. Résultat : un investissement bien plus accessible, et un affichage sur grand écran (50 cm ou plus) qui offre des grossissements exceptionnels, jusqu'à 60×.",
      "Pour les personnes dont la DMLA est avancée et qui ont besoin de très forts grossissements, c'est souvent la solution la plus accessible financièrement pour lire confortablement à domicile.",
    ],
  },
  {
    title: "Lire depuis son fauteuil — sans se lever, sans effort",
    paragraphs: [
      "C'est l'usage pour lequel la souris VERA est la plus appréciée. La personne s'installe dans son fauteuil habituel, face à la télévision. Elle pose le document (journal, magazine, courrier, programme TV) sur la table basse ou sur ses genoux, et fait glisser la souris VERA dessus. Le texte apparaît en grand sur le téléviseur. Une main sur la souris pour déplacer la vue, l'autre main libre pour tourner les pages.",
      "La souris VERA est alimentée sur secteur : pas de batterie à recharger, pas d'autonomie limitée. Elle est prête dès qu'elle est branchée, pour des sessions de lecture aussi longues que souhaité.",
    ],
  },
  {
    title: "Pourquoi le mode fort contraste est décisif pour la DMLA",
    paragraphs: [
      "En cas de DMLA, la zone centrale de la rétine est atteinte, ce qui réduit la perception des contrastes et des détails fins. Augmenter le grossissement aide, mais pas suffisamment pour tous les utilisateurs. Le mode fort contraste Blanc sur Noir — le plus apprécié des personnes atteintes de DMLA — transforme radicalement la lisibilité du texte en maximisant la différence entre les caractères et le fond, indépendamment du grossissement choisi.",
    ],
  },
  {
    title: "Une ergonomie pensée pour les mains seniors",
    paragraphs: [
      "La VERA a la forme d'une grosse souris d'ordinateur — un objet familier pour beaucoup de personnes. Sa forme arrondie et sa taille permettent une prise en main naturelle et stable. Les 4 boutons sont positionnés directement sous les doigts dans la position de tenue habituelle : le pouce active la marche/arrêt, l'index et le majeur contrôlent le zoom et le changement de mode couleur.",
      "Les 4 petites roulettes situées sous la souris facilitent le glissement sur le document. Elles favorisent le déplacement horizontal — naturel pour suivre une ligne de texte — et réduisent l'effort nécessaire pour guider la souris, ce qui est appréciable pour les personnes ayant un tremblement léger.",
    ],
  },
  {
    title: "Quand utiliser la souris VERA ?",
    paragraphs: [
      "Lecture de presse et magazines : journaux, magazines TV, revues — passez la souris sur le texte, choisissez le grossissement adapté et lisez directement sur le téléviseur. La largeur de capture de 24 mm permet de voir plusieurs mots à la fois.",
      "Courriers administratifs et ordonnances : les petits caractères des courriers bancaires, des notices de médicaments ou des formulaires administratifs deviennent parfaitement lisibles, grossis jusqu'à 60× sur l'écran.",
      "Photos et souvenirs : la fonction couleurs réelles permet de grossir des photographies imprimées pour en retrouver les détails — visages, inscriptions, dates — et les partager en famille autour du téléviseur.",
      "Consultation depuis le lit : la souris VERA est légère (127 g) et tient dans une seule main. Avec un câble suffisamment long ou une rallonge, elle peut être utilisée depuis le lit pour lire un document posé sur les genoux, le résultat s'affichant sur le téléviseur de la chambre.",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "1. Branchez le câble de la souris VERA sur la prise Cinch jaune de votre téléviseur (ou via l'adaptateur HDMI sur un téléviseur récent). 2. Branchez le bloc alimentation sur secteur. 3. Allumez la souris avec le bouton sous le pouce. 4. Posez la souris sur le document à lire et glissez-la pour faire défiler le texte. 5. Réglez le grossissement avec le bouton zoom, et choisissez le mode d'affichage selon votre préférence. 6. Utilisez le bouton gel pour figer l'image et observer un détail sans maintenir la souris en place.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "La connexion Cinch est compatible avec tous les téléviseurs possédant une entrée vidéo jaune (modèles jusqu'aux années 2015–2018 environ). Les téléviseurs récents ne disposant que d'entrées HDMI nécessitent l'option adaptateur HDMI, à préciser lors de votre commande. La connexion HDMI est compatible avec les écrans externes indépendants, mais pas avec les ordinateurs portables.",
    ],
  },
];

const SourisLoupeVera = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Souris loupe électronique VERA pour basse vision | LirElia"
        description="Souris loupe électronique VERA : caméra de lecture connectée au téléviseur pour agrandir textes, journaux et documents en basse vision et DMLA. Conseil gratuit."
        canonicalPath="/boutique/souris-loupe-electronique-vera"
        ogImage={imgJournal}
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Product", "@id": "https://lirelia.fr/boutique/souris-loupe-electronique-vera#product", name: "Souris loupe électronique VERA", description: "Souris loupe électronique VERA : caméra de lecture connectée à la télévision pour agrandir textes, journaux et documents en basse vision.", image: [`https://lirelia.fr${imgJournal}`], brand: { "@type": "Brand", name: "LirElia" }, offers: { "@type": "Offer", url: "https://lirelia.fr/boutique/souris-loupe-electronique-vera", priceCurrency: "EUR", price: "158.00", availability: "https://schema.org/InStock" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Catalogue aides basse vision", item: "https://lirelia.fr/catalogue-aides-basse-vision" },
            { "@type": "ListItem", position: 3, name: "Souris loupe électronique VERA", item: "https://lirelia.fr/boutique/souris-loupe-electronique-vera" },
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
            <span className="text-foreground font-semibold">Souris loupe électronique VERA</span>
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Souris loupe électronique VERA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Une loupe électronique en forme de souris qui se connecte directement sur votre téléviseur — grossissement jusqu'à 60× sur grand écran, simple à utiliser, idéale pour lire depuis son fauteuil en cas de DMLA ou de basse vision.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0 whitespace-nowrap">158 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Acheter la souris loupe VERA
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
              Une souris vidéo loupe très maniable, simple et pratique, pour lire à la maison journaux, magazines et courriers en cas de DMLA ou de basse vision.
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
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Choix de la connexion</h2>
            <p className="text-lg text-foreground leading-relaxed mb-2">
              La souris VERA est disponible en <strong>2 versions</strong> : <strong>sans adaptateur HDMI</strong> (connexion Cinch jaune) ou <strong>avec adaptateur HDMI</strong> (téléviseurs et écrans récents).
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚠️ <strong>Comment passer votre commande ?</strong> Notre site ne gère pas la sélection de variante en ligne. Indiquez simplement la version souhaitée dans le champ « Commentaire » lors de votre commande (ex. : <em>« Souris VERA — avec adaptateur HDMI »</em>). Nous traiterons votre demande en priorité.
            </p>
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
                  <p key={p} className="text-lg text-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
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
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">Acheter la souris loupe VERA<ArrowRight className="w-5 h-5" /></a>
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

export default SourisLoupeVera;
