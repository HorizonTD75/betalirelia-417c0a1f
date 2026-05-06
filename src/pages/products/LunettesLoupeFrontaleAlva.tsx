import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Glasses } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import ProductTrustBanner from "@/components/products/ProductTrustBanner";
import productImage from "@/assets/products/lunette-loupe-frontale-alva-sacoche.jpeg";

const STRIPE_URL = "https://buy.stripe.com/aFadRa8UmbC7bFZdbT2Fa04";

const shortPoints = [
  "5 niveaux de grossissement interchangeables : 1x, 1,5x, 2x, 2,5x, 3,5x",
  "Éclairage LED intégré orientable, 2 niveaux de puissance",
  "Mains libres : branches classiques ou bandeau élastique",
  "Batterie rechargeable via câble USB fourni",
  "Très légère : 75 g",
];

const keyPoints = [
  "5 niveaux de grossissement interchangeables : 1x, 1,5x, 2x, 2,5x, 3,5x",
  "Éclairage LED intégré orientable, 2 niveaux de puissance — idéal en faible luminosité",
  "Mains libres : branches classiques ou bandeau élastique au choix",
  "Batterie rechargeable via câble USB fourni — plus de piles",
  "Très légère : 75 g",
  "Sacoche de protection rigide en tissu renforcé incluse",
  "Conçue pour la basse vision et la DMLA",
];

const specs = [
  { label: "Grossissements disponibles", value: "1x, 1,5x, 2x, 2,5x, 3,5x" },
  { label: "Distances de travail correspondantes", value: "555 mm, 380 mm, 280 mm, 180 mm, 160 mm" },
  { label: "Taille des lentilles", value: "95 mm × 34 mm" },
  { label: "Traitement des lentilles", value: "Traitement dureté" },
  { label: "Éclairage", value: "2 LED orientables verticalement, 2 niveaux de puissance" },
  { label: "Alimentation", value: "Batterie rechargeable intégrée" },
  { label: "Recharge", value: "Câble USB Micro – USB A fourni, alimentation 5V USB" },
  { label: "Port", value: "USB Micro" },
  { label: "Poids", value: "75 g" },
  { label: "Accessoires inclus", value: "Sacoche de protection en tissu renforcé, câble USB" },
];

const descriptionBlocks = [
  {
    title: "À qui s'adresse ce produit ?",
    paragraphs: [
      "La lunette loupe frontale ALVA s'adresse aux personnes malvoyantes ou atteintes de DMLA (dégénérescence maculaire liée à l'âge) qui souhaitent réaliser des activités de près en conservant leurs deux mains libres. Elle convient aussi aux personnes ayant simplement besoin d'un grossissement d'appoint pour des tâches précises.",
    ],
  },
  {
    title: "Quand l'utiliser ?",
    paragraphs: [
      "Cette lunette est conçue pour toutes les activités nécessitant une vision nette de près avec les mains libres :",
    ],
    items: [
      "Travaux manuels et de précision : couture, broderie, bricolage fin, peinture, dessin",
      "Tâches du quotidien : lecture de notices de médicaments, d'étiquettes alimentaires, de courrier",
      "Loisirs créatifs : modélisme, numismatique, philatélie, loisirs variés",
    ],
  },
  {
    title: "Comment ça fonctionne ?",
    paragraphs: [
      "Les 5 lentilles sont interchangeables en quelques secondes. Choisissez le niveau de grossissement adapté à votre activité, puis réglez la position des LED pour un éclairage optimal. Le bandeau élastique réglable s'adapte à toutes les morphologies. La batterie se recharge via le câble USB fourni.",
    ],
  },
  {
    title: "À noter",
    paragraphs: [
      "Ces lunettes loupe offrent un grossissement optique jusqu'à 3,5x maximum. Elles ne sont pas adaptées pour remplacer un téléagrandisseur ou une loupe électronique. Plus le grossissement est élevé, plus la distance de travail entre les yeux et l'objet doit être courte (ex. : 160 mm pour le 3,5x).",
    ],
  },
];

const LunettesLoupeFrontaleAlva = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lunette Loupe Frontale ALVA — LED, 5 grossissements | LirElia"
        description="Lunette loupe frontale ALVA à LED : 5 grossissements (1x à 3,5x), mains libres, batterie rechargeable. Idéale basse vision, DMLA, travaux de précision."
        canonicalPath="/boutique/lunettes-loupe-frontale-alva"
      />
      <Header />
      <main id="main-content">
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/lunettes-loupes" className="hover:text-primary transition-colors">Lunettes loupes</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Lunette Loupe Frontale ALVA</span>
          </nav>
        </div>

        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                <img
                  src={productImage}
                  alt="Lunette loupe frontale ALVA dans sa sacoche de protection avec lentilles interchangeables et câble USB"
                  className="w-full aspect-square object-contain bg-white"
                  loading="eager"
                  width={720}
                  height={720}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Lunette Loupe Frontale ALVA</h1>
              <p className="text-lg font-semibold text-muted-foreground mb-4">
                Lunette loupe frontale éclairante à LED — idéale pour les travaux de précision, la lecture et les loisirs créatifs en basse vision et DMLA.
              </p>
              <div className="flex items-center gap-6 mb-4 flex-wrap">
                <p className="text-3xl font-bold text-primary m-0">94 €</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Commander ce produit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-base font-semibold text-muted-foreground mb-6">Paiement en 2×, 3× ou 4× disponible.</p>

              <div className="mb-6">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  Travaux de précision, lecture ou loisirs créatifs : cette lunette loupe frontale à LED mains libres est votre alliée idéale. Conçue pour les malvoyants et les personnes atteintes de DMLA, elle offre un confort visuel optimal grâce à ses grossissements ajustables et son éclairage LED intégré.
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

              <ProductTrustBanner />
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
              <div className="space-y-6">
                {descriptionBlocks.map((block) => (
                  <div key={block.title} className="bg-card rounded-2xl border-2 border-border p-6 md:p-8">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{block.title}</h3>
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-xl text-foreground leading-loose mb-4 last:mb-0">{paragraph}</p>
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
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Caractéristiques techniques</h2>
              <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
                {specs.map((row) => (
                  <div key={row.label} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] border-b border-border last:border-b-0">
                    <div className="bg-muted px-5 py-4 font-bold text-foreground text-lg">{row.label}</div>
                    <div className="px-5 py-4 text-lg text-foreground leading-relaxed">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Points clés</h2>
              <Card variant="elevated">
                <CardContent className="p-6 md:p-8">
                  <ul className="space-y-3">
                    {keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-xl text-foreground leading-relaxed">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ProductTrustGrid />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Besoin d'un conseil personnalisé ?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Accéder au paiement sécurisé
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision/lunettes-loupes">
                    <ArrowLeft className="w-5 h-5" />
                    Toutes les lunettes loupes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LunettesLoupeFrontaleAlva;
