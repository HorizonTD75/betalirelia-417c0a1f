import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Info,
} from "lucide-react";

const CANONICAL = "https://www.lirelia.fr/aides-financieres-basse-vision/financer-aide-visuelle/";

const financementRows: { financeur: string; apport: string; vigilance: string }[] = [
  { financeur: "Assurance Maladie", apport: "Remboursement d’un dispositif inscrit sur la LPP et prescrit dans les conditions prévues", vigilance: "Une ordonnance ne suffit pas si le produit n’est pas inscrit sur la LPP" },
  { financeur: "PCH", apport: "Participation à une aide technique intégrée au plan de compensation", vigilance: "Attribution individualisée après évaluation par la MDPH" },
  { financeur: "Fonds départemental de compensation", apport: "Réduction possible du reste à charge après les autres financements", vigilance: "Règles variables selon le département" },
  { financeur: "CPAM", apport: "Aide financière individuelle et ponctuelle", vigilance: "Facultative et étudiée au cas par cas" },
  { financeur: "Mutuelle", apport: "Remboursement complémentaire, forfait ou action sociale", vigilance: "Dépend entièrement du contrat" },
  { financeur: "Caisse de retraite", apport: "Aide d’action sociale ou de prévention de la perte d’autonomie", vigilance: "Dispositifs variables selon la caisse et le territoire" },
  { financeur: "APA ou aides locales liées à l’autonomie", apport: "Aide technique intégrée à un plan d’aide ou à une action locale", vigilance: "Dépend de la perte d’autonomie et des règles locales" },
  { financeur: "Agefiph ou FIPHFP", apport: "Matériel ou adaptation nécessaire pour l’emploi", vigilance: "Usage professionnel et procédure spécifique" },
  { financeur: "Collectivité, association ou fondation", apport: "Complément ponctuel", vigilance: "Aide locale ou exceptionnelle, non automatique" },
];

const pchBaremes = [
  { type: "Aide figurant sur la LPP", plein: "100 % du tarif applicable", partiel: "80 % du tarif applicable", plafond: "13 200 € sur 10 ans" },
  { type: "Aide ne figurant pas sur la LPP", plein: "75 % du tarif applicable", partiel: "75 % du tarif applicable", plafond: "13 200 € sur 10 ans" },
];

const faq = [
  {
    q: "Une loupe électronique est-elle remboursée par l’Assurance Maladie ?",
    a: "Il n’existe pas de remboursement identique pour toutes les loupes électroniques. Il faut vérifier si le modèle possède un code LPP et s’il respecte les conditions prévues. Lorsqu’il n’est pas pris en charge par l’Assurance Maladie, d’autres financements peuvent être recherchés.",
  },
  {
    q: "La PCH peut-elle financer un téléagrandisseur ?",
    a: "Oui, un téléagrandisseur peut être présenté comme une aide technique lorsqu’il répond à un besoin de compensation clairement établi. L’accord et le montant dépendent toutefois de l’évaluation de la MDPH et du plan de compensation.",
  },
  {
    q: "Puis-je acheter le matériel avant la réponse ?",
    a: "Il est préférable de ne pas acheter avant d’avoir vérifié les règles de chaque financeur. Certains organismes exigent que la demande soit déposée, voire acceptée, avant l’achat.",
  },
  {
    q: "Une mutuelle rembourse-t-elle les aides basse vision ?",
    a: "Cela dépend du contrat. Certaines mutuelles prévoient un forfait, un remboursement complémentaire ou un fonds d’action sociale. Demandez une réponse écrite portant sur le modèle précis.",
  },
  {
    q: "Plusieurs aides peuvent-elles être cumulées ?",
    a: "Oui, plusieurs financements peuvent parfois être associés, mais leur total ne peut pas dépasser le prix réel du matériel. Les organismes doivent être informés des autres aides demandées ou obtenues.",
  },
  {
    q: "Où essayer une aide visuelle avant de demander un financement ?",
    a: "Vous pouvez vous adresser à un opticien spécialisé en basse vision, un centre de basse vision, un service de réadaptation, une association ou un professionnel disposant de plusieurs matériels d’essai.",
  },
  {
    q: "Combien de temps les démarches prennent-elles ?",
    a: "Le délai varie selon les organismes. L’évaluation, la recherche des cofinancements, la décision et la commande peuvent prendre plusieurs mois. Il est utile d’anticiper et de prévoir une solution temporaire.",
  },
];

const sources = [
  { label: "Service-Public — Prestation de compensation du handicap", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14202" },
  { label: "Mon Parcours Handicap — Financements des aides techniques", url: "https://www.monparcourshandicap.gouv.fr/aides-techniques/quels-financements-pour-les-aides-techniques" },
  { label: "Mon Parcours Handicap — Les 8 étapes clés", url: "https://www.monparcourshandicap.gouv.fr/aides-techniques/aide-technique-quelles-sont-les-8-etapes-cles-connaitre" },
  { label: "Assurance Maladie — Aides financières individuelles", url: "https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/aides-financieres-individuelles" },
  { label: "Assurance Maladie — Prise en charge des lunettes", url: "https://www.ameli.fr/assure/remboursements/rembourse/soins-protheses-dentaires-optique-audition/lunettes-lentilles" },
  { label: "Agefiph — Aide technique en compensation du handicap", url: "https://www.agefiph.fr/aides-financieres/aide-technique-en-compensation-du-handicap" },
  { label: "FIPHFP — Catalogue des interventions", url: "https://www.fiphfp.fr/employeurs/nos-aides-financieres/catalogue-des-interventions" },
];

const FinancerAideVisuelle = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Comment financer une loupe électronique ou une aide visuelle ?",
      url: CANONICAL,
      inLanguage: "fr-FR",
      description:
        "PCH, Assurance Maladie, mutuelle ou CPAM : découvrez les financements possibles pour une loupe électronique, un téléagrandisseur ou une machine à lire.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.lirelia.fr/" },
        { "@type": "ListItem", position: 2, name: "Vivre avec la basse vision", item: "https://www.lirelia.fr/vivre-basse-vision/" },
        { "@type": "ListItem", position: 3, name: "Aides financières", item: "https://www.lirelia.fr/aides-financieres-basse-vision/" },
        { "@type": "ListItem", position: 4, name: "Financer une aide visuelle", item: CANONICAL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container relative z-10">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm md:text-base text-primary-foreground/80">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link to="/" className="hover:underline">Accueil</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-4 h-4 inline" /></li>
                <li><Link to="/vivre-basse-vision" className="hover:underline">Vivre avec la basse vision</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-4 h-4 inline" /></li>
                <li><Link to="/aides-financieres-basse-vision" className="hover:underline">Aides financières</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-4 h-4 inline" /></li>
                <li aria-current="page" className="text-primary-foreground font-semibold">Financer une aide visuelle</li>
              </ol>
            </nav>
            <div className="max-w-5xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Comment financer une <span className="text-secondary">loupe électronique</span> ou une aide visuelle ?
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-3xl">
                Une loupe électronique, un téléagrandisseur, une machine à lire ou un logiciel d’agrandissement peut redonner une autonomie très concrète. Plusieurs financements sont parfois mobilisables, mais aucun remboursement automatique n’existe.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Retour + intro + Réponse rapide + CTA + Sommaire */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Link to="/aides-financieres-basse-vision" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                <ArrowLeft className="w-4 h-4" /> Retour aux aides financières
              </Link>

              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Ces équipements peuvent représenter une dépense importante. Plusieurs financements sont parfois mobilisables, mais il n’existe pas un remboursement automatique applicable à toutes les personnes malvoyantes et à tous les appareils.
                </p>
                <p>La prise en charge dépend notamment :</p>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>du matériel précis ;</li>
                  <li>de son éventuelle inscription sur la <strong>LPP</strong> (Liste des produits et prestations remboursables) ;</li>
                  <li>des conséquences de votre déficience visuelle dans la vie quotidienne ;</li>
                  <li>de votre âge et de votre situation ;</li>
                  <li>de vos ressources pour certains dispositifs ;</li>
                  <li>de l’usage personnel, professionnel ou scolaire du matériel ;</li>
                  <li>de la décision de chaque organisme sollicité.</li>
                </ul>
              </div>

              <Card className="p-4 sm:p-6 lg:p-8 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h2 className="font-serif text-xl font-bold text-foreground mb-3">Réponse rapide</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      Une prescription médicale ne garantit pas, à elle seule, le remboursement d’une aide visuelle. Avant d’acheter, demandez au fournisseur si le modèle possède un code LPP, obtenez un devis détaillé et vérifiez les financements possibles auprès de la MDPH et des autres organismes concernés.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision">
                    Découvrir les aides visuelles adaptées à mon besoin
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <nav aria-label="Dans cette page" className="rounded-2xl border-2 border-border bg-muted p-4 sm:p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">Dans cette page</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base">
                  <li><a href="#quelles-aides-visuelles" className="text-primary hover:underline font-medium">Les aides visuelles concernées</a></li>
                  <li><a href="#principaux-financements" className="text-primary hover:underline font-medium">Les principaux financements possibles</a></li>
                  <li><a href="#assurance-maladie" className="text-primary hover:underline font-medium">L’Assurance Maladie et la LPP</a></li>
                  <li><a href="#pch" className="text-primary hover:underline font-medium">La PCH pour une aide visuelle</a></li>
                  <li><a href="#etapes" className="text-primary hover:underline font-medium">Les 7 étapes pour préparer le financement</a></li>
                  <li><a href="#erreurs" className="text-primary hover:underline font-medium">Les erreurs à éviter</a></li>
                  <li><a href="#pendant-demarches" className="text-primary hover:underline font-medium">Les solutions pendant les démarches</a></li>
                  <li><a href="#faq" className="text-primary hover:underline font-medium">Questions fréquentes</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Parcours 4 étapes + point de vigilance */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Le parcours le plus sûr en 4 étapes
              </h2>
              <ol className="space-y-4">
                {[
                  { t: "1. Définir le besoin réel", p: "Lire le courrier, utiliser un ordinateur, remplir des documents, travailler, étudier ou rester autonome à domicile." },
                  { t: "2. Tester le matériel avant de demander un financement", p: "Loupe électronique, téléagrandisseur, machine à lire, logiciel ou éclairage adapté." },
                  { t: "3. Obtenir un devis détaillé", p: "Modèle exact, prix, accessoires, formation, installation et éventuel code LPP." },
                  { t: "4. Déposer les demandes avant l’achat", p: "MDPH, Assurance Maladie, CPAM, mutuelle, caisse de retraite, Agefiph ou FIPHFP selon la situation." },
                ].map((s) => (
                  <Card key={s.t} className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{s.t}</h3>
                    <p className="text-base text-foreground leading-relaxed">{s.p}</p>
                  </Card>
                ))}
              </ol>
              <Card className="p-5 mt-6 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">Point de vigilance</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Le bon ordre est souvent plus important que le choix du financeur. Un achat trop rapide ou un devis imprécis peut compliquer la prise en charge.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Quelles aides visuelles */}
        <section id="quelles-aides-visuelles" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quelles aides visuelles peuvent être concernées ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Une demande peut porter sur différents matériels destinés à compenser une déficience visuelle.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">Aides optiques et éclairage</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground">
                    <li>loupe à main ou loupe sur pied ;</li>
                    <li>lunettes-loupes ;</li>
                    <li>filtres ou sur-lunettes ;</li>
                    <li>lampe de lecture adaptée ;</li>
                    <li>éclairage spécifique pour une activité.</li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">Aides électroniques</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground">
                    <li>loupe électronique portable ;</li>
                    <li>loupe électronique transportable ;</li>
                    <li>téléagrandisseur de bureau ;</li>
                    <li>caméra de lecture reliée à un écran ;</li>
                    <li>machine à lire avec reconnaissance de caractères et synthèse vocale ;</li>
                    <li>dispositif électronique spécialisé pour la lecture.</li>
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">Solutions numériques et informatiques</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground">
                    <li>logiciel d’agrandissement ;</li>
                    <li>logiciel de lecture d’écran ou synthèse vocale ;</li>
                    <li>écran de grande taille ;</li>
                    <li>scanner ou caméra de documents ;</li>
                    <li>clavier contrasté ;</li>
                    <li>équipement informatique adapté.</li>
                  </ul>
                </Card>
              </div>

              <p className="text-lg text-foreground leading-relaxed mt-6">
                Le fait qu’un matériel soit utile ne signifie pas qu’il sera automatiquement financé. Le dossier doit montrer qu’il répond à une difficulté réelle et qu’il apporte un bénéfice concret dans la vie quotidienne.
              </p>
            </div>
          </div>
        </section>

        {/* Tableau des financements */}
        <section id="principaux-financements" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les principaux financements possibles
              </h2>

              <div className="hidden md:block overflow-x-auto rounded-2xl border-2 border-border bg-background">
                <table className="w-full text-left text-base">
                  <caption className="sr-only">Financeurs et dispositifs pouvant participer à l’achat d’une aide visuelle</caption>
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">Financeur ou dispositif</th>
                      <th scope="col" className="p-4 font-semibold">Ce qu’il peut apporter</th>
                      <th scope="col" className="p-4 font-semibold">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financementRows.map((row, i) => (
                      <tr key={i} className="border-t border-border align-top odd:bg-muted/40">
                        <th scope="row" className="p-4 font-semibold text-foreground text-left">{row.financeur}</th>
                        <td className="p-4 text-foreground">{row.apport}</td>
                        <td className="p-4 text-foreground">{row.vigilance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4">
                {financementRows.map((row, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Financeur</p>
                    <p className="text-base text-foreground font-semibold mb-3">{row.financeur}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Ce qu’il peut apporter</p>
                    <p className="text-base text-foreground mb-3">{row.apport}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Point de vigilance</p>
                    <p className="text-base text-foreground">{row.vigilance}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Assurance Maladie */}
        <section id="assurance-maladie" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-foreground leading-relaxed">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                L’Assurance Maladie : vérifier la LPP du matériel
              </h2>
              <p>
                L’Assurance Maladie prend en charge certains dispositifs lorsqu’ils figurent sur la <strong>Liste des produits et prestations remboursables</strong>, couramment appelée LPP ou LPPR.
              </p>
              <p>La prise en charge dépend notamment :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>du code LPP précis ;</li>
                <li>de l’indication prévue ;</li>
                <li>de la prescription lorsqu’elle est exigée ;</li>
                <li>du professionnel autorisé à prescrire ;</li>
                <li>d’un éventuel accord préalable ;</li>
                <li>du tarif de responsabilité fixé.</li>
              </ul>
              <p>
                Si le matériel ne figure pas sur la LPP, il n’est pas remboursé par l’Assurance Maladie obligatoire au titre de cette liste, même s’il est recommandé ou prescrit.
              </p>

              <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Les questions à poser au fournisseur</h3>
              <p>Ne vous contentez pas de la formule « ce matériel peut être remboursé ». Demandez par écrit :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>le <strong>code LPP exact</strong> du modèle ;</li>
                <li>le tarif servant de base à la prise en charge ;</li>
                <li>la part estimée de l’Assurance Maladie ;</li>
                <li>le prix total TTC ;</li>
                <li>le reste à charge avant intervention de la mutuelle ;</li>
                <li>l’existence éventuelle d’un accord préalable.</li>
              </ul>
              <p>Le nom commercial de l’appareil ne suffit pas. Deux produits d’apparence proche peuvent relever de règles différentes.</p>

              <Card className="p-5 mt-4 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">À ne pas confondre</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Le dispositif « 100 % Santé » en optique concerne certains équipements de lunettes correctrices. Il ne signifie pas qu’une loupe électronique, un téléagrandisseur ou une machine à lire est automatiquement financé sans reste à charge.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* PCH */}
        <section id="pch" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-foreground leading-relaxed">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                La PCH peut-elle financer une loupe électronique ?
              </h2>
              <p>
                La <strong>PCH</strong> (Prestation de compensation du handicap) peut contribuer au financement d’une aide technique destinée à maintenir ou améliorer l’autonomie.
              </p>
              <p>
                La demande est étudiée par la <strong>MDPH</strong> (Maison départementale des personnes handicapées). La décision dépend de votre situation, de vos difficultés fonctionnelles et de l’intégration du matériel dans votre plan de compensation.
              </p>

              <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Ce que la MDPH évalue</h3>
              <p>Le diagnostic est important, mais il ne suffit pas. L’équipe cherche surtout à comprendre les conséquences de la déficience visuelle :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>pouvez-vous lire seul votre courrier ?</li>
                <li>pouvez-vous consulter vos factures et documents importants ?</li>
                <li>pouvez-vous identifier vos médicaments ?</li>
                <li>pouvez-vous lire assez longtemps pour vos activités habituelles ?</li>
                <li>pouvez-vous utiliser un ordinateur ou effectuer vos démarches en ligne ?</li>
                <li>avez-vous besoin d’une aide humaine pour des tâches qu’un équipement pourrait faciliter ?</li>
              </ul>
              <p>Une DMLA, un glaucome ou une autre pathologie visuelle ne donne donc pas automatiquement droit à une aide financière. Le besoin doit être décrit et évalué.</p>

              <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Barèmes PCH des aides techniques en 2026</h3>
              <div className="hidden md:block overflow-x-auto rounded-2xl border-2 border-border bg-background">
                <table className="w-full text-left text-base">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">Type d’aide technique</th>
                      <th scope="col" className="p-4 font-semibold">Taux plein</th>
                      <th scope="col" className="p-4 font-semibold">Taux partiel</th>
                      <th scope="col" className="p-4 font-semibold">Plafond</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pchBaremes.map((r, i) => (
                      <tr key={i} className="border-t border-border align-top">
                        <th scope="row" className="p-4 font-semibold text-foreground text-left">{r.type}</th>
                        <td className="p-4">{r.plein}</td>
                        <td className="p-4">{r.partiel}</td>
                        <td className="p-4">{r.plafond}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden space-y-3">
                {pchBaremes.map((r, i) => (
                  <Card key={i} className="p-4">
                    <p className="font-semibold text-foreground mb-2">{r.type}</p>
                    <p className="text-base"><strong>Taux plein :</strong> {r.plein}</p>
                    <p className="text-base"><strong>Taux partiel :</strong> {r.partiel}</p>
                    <p className="text-base"><strong>Plafond :</strong> {r.plafond}</p>
                  </Card>
                ))}
              </div>

              <p>
                Pour une aide inscrite sur la LPP et tarifée au moins 3 000 €, le plafond peut être majoré selon les règles applicables après déduction de la prise en charge de l’Assurance Maladie.
              </p>
              <p>Le taux de prise en charge varie selon les ressources annuelles prises en compte :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>jusqu’à <strong>31 162,62 €</strong> : taux plein ;</li>
                <li>au-delà : taux partiel.</li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Que signifie « pris en charge à 100 % » ?</h3>
              <p>
                Cela signifie 100 % du <strong>tarif ou du plafond prévu par la PCH</strong>, et non obligatoirement 100 % du prix facturé. Un appareil vendu 3 000 € n’est donc pas automatiquement financé à hauteur de 3 000 €. Un reste à charge peut subsister.
              </p>

              <h3 className="font-serif text-xl font-bold text-foreground mt-6 mb-3">Quels matériels peuvent être présentés ?</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>une loupe électronique ;</li>
                <li>un téléagrandisseur ;</li>
                <li>une machine à lire ;</li>
                <li>un logiciel d’agrandissement ou de lecture vocale ;</li>
                <li>un équipement informatique adapté ;</li>
                <li>un autre matériel compensant directement le handicap visuel.</li>
              </ul>
              <p className="italic">
                Ce matériel peut être intégré à une demande de PCH selon votre situation et l’évaluation de la MDPH.
              </p>

              <div className="pt-2">
                <Button variant="secondary" asChild>
                  <Link to="/aides-financieres-basse-vision/dossier-mdph-pch">
                    Préparer un dossier MDPH et PCH
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fonds départemental / CPAM / Mutuelle / Retraite / Locales / Emploi */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-10 text-lg text-foreground leading-relaxed">

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Le Fonds départemental peut-il réduire le reste à charge ?
                </h2>
                <p>
                  Après la mobilisation des premiers financements, le <strong>Fonds départemental de compensation du handicap</strong> peut parfois contribuer à réduire le reste à charge.
                </p>
                <p className="mt-3">Son fonctionnement dépend :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>du département ;</li>
                  <li>des ressources de la personne ;</li>
                  <li>des partenaires qui alimentent le fonds ;</li>
                  <li>de la nature de la dépense ;</li>
                  <li>des critères définis localement ;</li>
                  <li>des crédits disponibles.</li>
                </ul>
                <p className="mt-3">Il n’existe donc pas de montant national unique.</p>
                <h3 className="font-serif text-lg font-bold text-foreground mt-4 mb-2">À demander à votre MDPH</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Le Fonds départemental intervient-il pour les aides techniques ?</li>
                  <li>La demande est-elle automatique ou séparée ?</li>
                  <li>Quelles pièces faut-il fournir ?</li>
                  <li>Une condition de ressources s’applique-t-elle ?</li>
                  <li>Faut-il attendre la décision avant l’achat ?</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Une aide individuelle peut-elle être demandée à la CPAM ?
                </h2>
                <p>
                  La CPAM peut, dans le cadre de son action sanitaire et sociale, accorder une <strong>aide financière individuelle</strong> pour certaines dépenses insuffisamment remboursées.
                </p>
                <p className="mt-3">Cette aide est facultative. Elle est étudiée en fonction de la situation sociale, des ressources, du caractère justifié de la dépense et des autres financements sollicités.</p>
                <p className="mt-3">Pour déposer une demande, il peut notamment être nécessaire de fournir :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>un devis ;</li>
                  <li>une prescription ou un justificatif médical ;</li>
                  <li>les accords ou refus des autres organismes ;</li>
                  <li>les justificatifs de ressources et de charges ;</li>
                  <li>une explication de l’utilité du matériel.</li>
                </ul>
                <p className="mt-3 italic">
                  « Puis-je présenter une demande d’aide financière individuelle pour cet équipement lié à ma déficience visuelle ? »
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  La mutuelle peut-elle participer ?
                </h2>
                <p>Une complémentaire santé peut intervenir de plusieurs manières :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>complément d’un remboursement relevant de la LPP ;</li>
                  <li>forfait optique ;</li>
                  <li>forfait pour un équipement non remboursé ;</li>
                  <li>fonds d’action sociale ;</li>
                  <li>aide exceptionnelle.</li>
                </ul>
                <p className="mt-3">Les garanties diffèrent fortement. Un forfait « optique » peut ne couvrir que les lunettes et les lentilles.</p>
                <h3 className="font-serif text-lg font-bold text-foreground mt-4 mb-2">Questions à poser</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Le contrat couvre-t-il uniquement les lunettes ?</li>
                  <li>Existe-t-il un forfait pour les aides techniques ?</li>
                  <li>Le fonds d’action sociale peut-il être sollicité ?</li>
                  <li>Un code LPP est-il obligatoire ?</li>
                  <li>Une demande préalable est-elle nécessaire ?</li>
                  <li>La participation peut-elle se cumuler avec la PCH ?</li>
                </ul>
                <p className="mt-3">Pour un achat important, demandez une réponse écrite.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Les caisses de retraite et les aides liées à l’âge
                </h2>
                <p>Les caisses de retraite de base ou complémentaire peuvent proposer des aides d’action sociale destinées à prévenir la perte d’autonomie et à favoriser le maintien à domicile.</p>
                <p className="mt-3">Selon la caisse et le territoire, cela peut prendre la forme :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>d’une évaluation à domicile ;</li>
                  <li>d’une participation à un équipement ;</li>
                  <li>d’un plan d’aide ;</li>
                  <li>d’un prêt de matériel ;</li>
                  <li>d’une orientation vers un autre financeur.</li>
                </ul>
                <p className="mt-3">Il n’existe pas de montant national unique spécifiquement consacré aux loupes électroniques ou aux téléagrandisseurs.</p>
                <p className="mt-3">Pour une personne de 60 ans ou plus en perte d’autonomie, une aide technique peut également être intégrée dans un plan d’<strong>APA</strong> (Allocation personnalisée d’autonomie). La PCH et l’APA ne se cumulent pas : un accompagnement individualisé peut être utile pour comparer les deux dispositifs.</p>
                <div className="pt-3">
                  <Button variant="outline" asChild>
                    <Link to="/aides-financieres-basse-vision/aides-sociales-droits">
                      Comprendre les aides sociales et les droits
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Les aides locales, associatives ou caritatives
                </h2>
                <p>Lorsque les dispositifs principaux ne couvrent pas toute la dépense, d’autres interlocuteurs peuvent parfois intervenir :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>CCAS ou CIAS ;</li>
                  <li>conseil départemental ;</li>
                  <li>commune ou région ;</li>
                  <li>association spécialisée ;</li>
                  <li>fondation ;</li>
                  <li>organisme caritatif.</li>
                </ul>
                <p className="mt-3">Ces aides sont variables, ponctuelles et souvent accordées après examen des autres financements.</p>
                <p className="mt-3">Un travailleur social peut vous aider à identifier les dispositifs réellement disponibles dans votre territoire.</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Pour un besoin professionnel ou scolaire
                </h2>
                <p>Un équipement nécessaire pour travailler, rechercher un emploi, étudier ou suivre une formation relève d’un parcours spécifique.</p>
                <p className="mt-3">Selon votre statut, vous pouvez contacter :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>votre employeur ;</li>
                  <li>Cap emploi ;</li>
                  <li>l’Agefiph dans le secteur privé ;</li>
                  <li>votre employeur public ou référent handicap ;</li>
                  <li>le FIPHFP dans la fonction publique ;</li>
                  <li>la mission handicap de votre établissement ;</li>
                  <li>le référent handicap de votre organisme de formation.</li>
                </ul>
                <p className="mt-3">Un matériel utilisé personnellement à domicile et une adaptation du poste de travail ne suivent pas nécessairement les mêmes règles.</p>
                <div className="pt-3">
                  <Button variant="outline" asChild>
                    <Link to="/aides-financieres-basse-vision/travail-etudes">
                      Voir les aides pour travailler ou étudier
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 étapes */}
        <section id="etapes" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les 7 étapes pour préparer votre financement
              </h2>
              <ol className="space-y-4">
                {[
                  { t: "1. Définir l’usage avant de choisir l’appareil", p: "Ne partez pas seulement du nom d’un produit. Définissez d’abord ce que vous souhaitez faire : lire quelques prix en magasin, lire quotidiennement votre courrier, parcourir un journal, remplir des formulaires, écrire sous une caméra, écouter un document grâce à la synthèse vocale, utiliser le matériel à domicile et en déplacement. Une petite loupe électronique peut convenir à un usage ponctuel, mais être insuffisante pour une lecture prolongée." },
                  { t: "2. Faire évaluer votre besoin", p: "Un bilan basse vision ou une évaluation fonctionnelle peut préciser la vision encore utilisable, la sensibilité aux contrastes, l’éblouissement, la distance de lecture confortable, le grossissement réellement utile, l’intérêt de la lecture vocale, la posture et la fatigue. Cette évaluation peut associer un ophtalmologiste, un orthoptiste, un ergothérapeute, un opticien spécialisé ou un centre de basse vision." },
                  { t: "3. Tester plusieurs matériels", p: "Essayez les appareils avec vos propres documents : courrier, facture, ordonnance, livre, journal, emballage, écran d’ordinateur. Vérifiez la qualité de l’image, la largeur du champ visible, les contrastes, la simplicité des boutons, la vitesse de mise au point, la posture, le poids, l’autonomie et la qualité de la lecture vocale." },
                  { t: "4. Obtenir un devis détaillé", p: "Le devis doit préciser la marque et le modèle, les accessoires, le prix de chaque élément, le prix total TTC, le code LPP (s’il existe), la base de remboursement éventuelle, la livraison, l’installation, la formation, la garantie et la durée de validité." },
                  { t: "5. Réunir les justificatifs", p: "Selon le financeur, il peut être nécessaire de joindre prescription médicale, bilan ophtalmologique ou fonctionnel, certificat médical MDPH, compte rendu d’essai, devis, justificatifs de ressources, description des activités devenues difficiles, réponses des premiers organismes sollicités." },
                  { t: "6. Déposer les demandes avant l’achat", p: "C’est un point essentiel. Certains financeurs refusent d’intervenir lorsque le matériel a déjà été commandé ou payé. Demandez une confirmation avant d’engager la dépense." },
                  { t: "7. Conserver et suivre le dossier", p: "Gardez ensemble les copies des formulaires, devis, prescriptions, courriers, dates d’envoi, accusés de réception, accords, refus et facture finale." },
                ].map((s) => (
                  <Card key={s.t} className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{s.t}</h3>
                    <p className="text-base text-foreground leading-relaxed">{s.p}</p>
                  </Card>
                ))}
              </ol>

              <div className="mt-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Le devis idéal : 10 informations à vérifier
                </h2>
                <ol className="list-decimal pl-6 space-y-1 text-base text-foreground">
                  <li>votre nom ;</li>
                  <li>la date et la durée de validité ;</li>
                  <li>la désignation exacte du produit ;</li>
                  <li>la marque et la référence ;</li>
                  <li>les accessoires compris ;</li>
                  <li>le prix de chaque élément ;</li>
                  <li>le prix total TTC ;</li>
                  <li>le code LPP et la base de remboursement, lorsqu’ils existent ;</li>
                  <li>les prestations d’installation ou de formation ;</li>
                  <li>les conditions de garantie et de service après-vente.</li>
                </ol>
                <p className="mt-3 text-base text-foreground">Un devis portant seulement la mention « loupe électronique » risque d’être insuffisant.</p>
              </div>

              <div className="mt-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Peut-on cumuler plusieurs financements ?
                </h2>
                <p className="text-base text-foreground leading-relaxed mb-3">Oui, plusieurs aides peuvent parfois être associées. Un plan de financement peut réunir l’Assurance Maladie, la PCH, la mutuelle, le Fonds départemental de compensation, une aide individuelle de la CPAM, une caisse de retraite, une aide professionnelle, une aide locale ou associative, un apport personnel.</p>
                <p className="text-base text-foreground leading-relaxed">Le total des aides ne peut pas dépasser le coût réel du matériel. Chaque organisme doit être informé des autres financements demandés ou obtenus.</p>
                <h3 className="font-serif text-lg font-bold text-foreground mt-4 mb-2">Ordre pratique possible</h3>
                <ol className="list-decimal pl-6 space-y-1 text-base text-foreground">
                  <li>vérifier la LPP et la part éventuelle de l’Assurance Maladie ;</li>
                  <li>déposer le dossier MDPH-PCH si votre situation le permet ;</li>
                  <li>interroger la mutuelle ;</li>
                  <li>rechercher les financements complémentaires ;</li>
                  <li>finaliser le plan de financement avant l’achat.</li>
                </ol>
                <p className="mt-3 text-base text-foreground">Cet ordre peut varier selon l’âge, l’urgence et la situation professionnelle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Erreurs fréquentes */}
        <section id="erreurs" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les erreurs les plus fréquentes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ["Acheter avant d’avoir vérifié les règles", "Une facture déjà payée peut être refusée par certains organismes."],
                  ["Choisir le produit avant d’avoir défini le besoin", "Un fort grossissement ne garantit pas une lecture confortable. Le champ visible, la posture, les contrastes et la simplicité comptent autant."],
                  ["Demander seulement « une loupe »", "Le dossier doit préciser le modèle, l’usage et le bénéfice attendu."],
                  ["Croire qu’une ordonnance garantit le remboursement", "La prescription peut être nécessaire, mais le code LPP et les autres conditions restent déterminants."],
                  ["Confondre le prix avec le tarif de prise en charge", "Le financement peut être calculé à partir d’un tarif ou d’un plafond inférieur au prix réel."],
                  ["Ne pas conserver les refus", "Un organisme complémentaire peut demander la réponse d’un premier financeur."],
                  ["Minimiser les difficultés", "Décrivez la réalité avec précision. Pouvoir distinguer quelques gros caractères ne signifie pas pouvoir lire seul un courrier ou une ordonnance."],
                ].map(([t, p]) => (
                  <Card key={t} className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-serif text-lg font-bold text-foreground mb-1">{t}</h3>
                        <p className="text-base text-foreground leading-relaxed">{p}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pendant les démarches */}
        <section id="pendant-demarches" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-foreground leading-relaxed">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pendant les démarches, ne restez pas sans solution
              </h2>
              <p>La recherche de financement, l’étude du dossier et la commande peuvent prendre plusieurs mois. Pendant ce temps, les besoins de lecture restent présents.</p>
              <p>Des solutions provisoires peuvent apporter une aide immédiate :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>améliorer l’éclairage ;</li>
                <li>incliner et rapprocher le document ;</li>
                <li>agrandir les caractères ;</li>
                <li>utiliser la loupe du smartphone ;</li>
                <li>activer la lecture vocale ;</li>
                <li>essayer une loupe optique simple ;</li>
                <li>emprunter ou louer un appareil ;</li>
                <li>rechercher du matériel reconditionné ;</li>
                <li>demander une aide ponctuelle pour les documents urgents.</li>
              </ul>
              <p>Une solution temporaire n’a pas besoin d’être parfaite. Elle doit répondre aux besoins les plus urgents sans compromettre la demande principale.</p>

              <Card className="p-5 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">Avant tout achat provisoire coûteux</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Vérifiez auprès des financeurs qu’il ne compromettra pas le dossier en cours.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="pt-2">
                <Button variant="secondary" asChild>
                  <Link to="/aides-lecture-bassevision">
                    Découvrir les différentes aides à la lecture
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Relier matériel au besoin */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-foreground leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Comment relier le matériel à votre besoin ?
              </h2>
              <p>Une demande claire ne se limite pas à écrire :</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                « Je souhaite acheter un téléagrandisseur. »
              </blockquote>
              <p>Elle explique la difficulté, la solution testée et le bénéfice attendu :</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                « Ma déficience visuelle ne me permet plus de lire seul mon courrier, mes factures et les documents administratifs. Les loupes optiques testées offrent un champ trop réduit et provoquent une fatigue rapide. Lors de l’essai, ce téléagrandisseur m’a permis de suivre les lignes, de modifier les contrastes et d’écrire sous la caméra. Il me permettrait de gérer à nouveau une partie de mes démarches sans aide humaine. »
              </blockquote>
              <p>Cette présentation doit rester fidèle à votre situation. Elle aide l’évaluateur à comprendre pourquoi le matériel est utile.</p>
            </div>
          </div>
        </section>

        {/* Livre */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 md:p-8 border-primary/30 bg-primary/5">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Le livre LirElia pour comprendre l’ensemble du parcours
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-2">
                  Le financement n’est qu’une étape. Il faut aussi choisir une aide adaptée, organiser les essais, préserver son autonomie et adapter son quotidien.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-5">
                  Le livre <strong><em>DMLA — Votre vie ne s’arrête pas</em></strong> consacre plusieurs chapitres aux aides visuelles, aux financements, aux démarches administratives et aux adaptations utiles à domicile.
                </p>
                <Button variant="secondary" asChild>
                  <Link to="/livre-dmla-votre-vie-ne-sarrete-pas">
                    Découvrir le livre et consulter son contenu
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {faq.map((f) => (
                  <Card key={f.q} className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{f.q}</h3>
                    <p className="text-base text-foreground leading-relaxed">{f.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* À lire aussi */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">À lire aussi</h2>
              <ul className="space-y-3 text-base">
                <li><Link to="/aides-financieres-basse-vision" className="text-primary font-semibold hover:underline">Aides financières pour les personnes malvoyantes</Link></li>
                <li><Link to="/aides-financieres-basse-vision/dossier-mdph-pch" className="text-primary font-semibold hover:underline">Préparer un dossier MDPH et PCH</Link></li>
                <li><Link to="/aides-financieres-basse-vision/aides-sociales-droits" className="text-primary font-semibold hover:underline">Aides sociales et droits des personnes malvoyantes</Link></li>
                <li><Link to="/aides-financieres-basse-vision/travail-etudes" className="text-primary font-semibold hover:underline">Aides pour travailler ou étudier avec un handicap visuel</Link></li>
                <li><Link to="/aides-lecture-bassevision" className="text-primary font-semibold hover:underline">Découvrir les aides à la lecture</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Informations + Sources */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-5 border-primary/30 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div className="text-base text-foreground leading-relaxed space-y-2">
                    <p><strong>Informations vérifiées en juin 2026.</strong></p>
                    <p>Les montants, critères et pratiques locales peuvent évoluer. Vérifiez votre situation auprès de l’organisme concerné avant tout achat.</p>
                    <p>LirElia présente les principaux dispositifs existants, mais ne décide pas de leur attribution et ne peut garantir l’obtention d’un financement.</p>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Sources officielles</h2>
                <ul className="space-y-2 text-base">
                  {sources.map((s) => (
                    <li key={s.url} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline break-words">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancerAideVisuelle;
