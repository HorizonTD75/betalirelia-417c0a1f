import Header from "@/components/layout/Header";
import { FAQ_BY_ROUTE } from "@/lib/structuredData/faq";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wallet,
  FileText,
  Scale,
  Home as HomeIcon,
  Briefcase,
  Info,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const AidesFinancieres = () => {
  const canonical = "https://lirelia.fr/aides-financieres-basse-vision/";

  const orientationCards = [
    {
      icon: Wallet,
      slug: "financer-aide-visuelle",
      title: "Je veux financer une loupe électronique, un téléagrandisseur ou une aide visuelle",
      body:
        "Vous recherchez une aide pour acheter une loupe électronique, un téléagrandisseur, une machine à lire, un logiciel d’agrandissement ou un autre équipement adapté à la basse vision ? Selon le produit et votre situation, plusieurs pistes peuvent être étudiées : Assurance Maladie lorsque le dispositif répond aux conditions de la LPP (Liste des produits et prestations remboursables), PCH (Prestation de compensation du handicap), mutuelle, aide individuelle de la CPAM, caisse de retraite, Fonds départemental de compensation ou aide locale. Aucun de ces financements ne doit être considéré comme acquis avant l’étude de votre dossier.",
      cta: "Voir comment financer une aide visuelle",
    },
    {
      icon: FileText,
      slug: "dossier-mdph-pch",
      title: "Je dois préparer un dossier MDPH ou demander la PCH",
      body:
        "La MDPH (Maison départementale des personnes handicapées) est souvent l’interlocuteur central lorsqu’un handicap visuel réduit fortement l’autonomie. Elle peut évaluer vos besoins et ouvrir l’accès à différents droits, notamment à la PCH. Pour une aide technique, le dossier doit expliquer non seulement votre pathologie, mais surtout ce que vous ne pouvez plus faire seul ou ce qui est devenu très difficile : lire votre courrier, gérer vos documents, cuisiner, utiliser un ordinateur ou vous déplacer. Un certificat médical, des comptes rendus, un devis précis et une description concrète de votre vie quotidienne renforcent la compréhension du besoin.",
      cta: "Préparer mon dossier MDPH et PCH",
    },
    {
      icon: Scale,
      slug: "aides-sociales-droits",
      title: "Je veux comprendre mes droits : AAH, APA, CMI, RQTH",
      body:
        "L’AAH (Allocation aux adultes handicapés), l’APA (Allocation personnalisée d’autonomie), la CMI (Carte mobilité inclusion), la RQTH (Reconnaissance de la qualité de travailleur handicapé) et la PCH ne répondent pas au même besoin. Certaines prestations apportent un revenu minimal. D’autres financent une compensation du handicap, une aide humaine ou un plan d’aide lié à la perte d’autonomie. La CMI facilite certains déplacements, l’accès à des priorités ou le stationnement selon la mention accordée. Ces dispositifs ne constituent pas tous un remboursement direct d’un appareil de lecture.",
      cta: "Comprendre les aides sociales et les droits",
    },
    {
      icon: HomeIcon,
      slug: "adapter-logement",
      title: "Je veux adapter mon logement à la déficience visuelle",
      body:
        "Un logement mieux éclairé, plus contrasté et plus facile à parcourir peut préserver l’autonomie et réduire le risque de chute. Selon la nature du projet, la PCH, MaPrimeAdapt’, l’APA ou certaines aides locales peuvent participer au financement de travaux : sécurisation de la salle de bain, amélioration des circulations, éclairage à détection, installation de barres d’appui ou autres aménagements nécessaires. Les petits équipements mobiles et les travaux importants ne relèvent pas toujours des mêmes dispositifs.",
      cta: "Découvrir les aides pour adapter le logement",
    },
    {
      icon: Briefcase,
      slug: "travail-etudes",
      title: "Je cherche une aide pour travailler, étudier ou me former",
      body:
        "Une personne malvoyante peut avoir besoin d’un écran plus grand, d’un logiciel d’agrandissement, d’une synthèse vocale, d’un scanner, d’un éclairage particulier ou d’une organisation différente du poste de travail. Dans le secteur privé, l’employeur, Cap emploi et l’Agefiph peuvent intervenir. Dans la fonction publique, les démarches passent généralement par l’employeur public et le FIPHFP. Pour les études ou une formation, le référent handicap et l’établissement sont les premiers interlocuteurs.",
      cta: "Voir les aides pour travailler ou étudier",
    },
  ];

  const financementTable = [
    {
      besoin: "Acheter une loupe électronique, un téléagrandisseur ou une machine à lire",
      dispositifs: "LPP, PCH, mutuelle, CPAM, caisse de retraite, Fonds départemental",
      vigilance: "Le remboursement dépend du matériel, du dossier et de la décision du financeur",
      page: { label: "Financer une aide visuelle", href: "/aides-financieres-basse-vision/financer-aide-visuelle/" },
    },
    {
      besoin: "Demander une compensation du handicap",
      dispositifs: "PCH via la MDPH",
      vigilance: "La MDPH évalue les conséquences concrètes du handicap, pas seulement le diagnostic",
      page: { label: "Dossier MDPH et PCH", href: "/aides-financieres-basse-vision/dossier-mdph-pch/" },
    },
    {
      besoin: "Disposer d’un revenu ou d’un droit social",
      dispositifs: "AAH, APA, CMI, RQTH, aides locales",
      vigilance: "Ces droits ne financent pas tous directement un appareil basse vision",
      page: { label: "Aides sociales et droits", href: "/aides-financieres-basse-vision/aides-sociales-droits/" },
    },
    {
      besoin: "Adapter le logement",
      dispositifs: "MaPrimeAdapt’, PCH logement, APA, caisses de retraite, aides locales",
      vigilance: "Les travaux doivent souvent être validés avant leur démarrage",
      page: { label: "Adapter le logement", href: "/aides-financieres-basse-vision/adapter-logement/" },
    },
    {
      besoin: "Adapter un poste de travail ou une formation",
      dispositifs: "Agefiph, FIPHFP, employeur, Cap emploi, référent handicap",
      vigilance: "L’usage professionnel suit une procédure différente de l’usage personnel",
      page: { label: "Travail et études", href: "/aides-financieres-basse-vision/travail-etudes/" },
    },
  ];

  const interlocuteurs = [
    ["Acheter une aide visuelle", "Professionnel basse vision et MDPH", "Assurance Maladie, mutuelle, CPAM, caisse de retraite, Fonds départemental"],
    ["Demander la PCH ou une reconnaissance du handicap", "MDPH de votre département", "Travailleur social, association, centre de basse vision"],
    ["Faire face à une perte d’autonomie après 60 ans", "Service autonomie du département", "CLIC, CCAS, caisse de retraite, MDPH selon la situation"],
    ["Adapter le logement", "France Rénov’ ou opérateur MaPrimeAdapt’", "MDPH, département, caisse de retraite, aides locales"],
    ["Adapter un poste dans le secteur privé", "Employeur ou Cap emploi", "Agefiph, service de prévention et de santé au travail"],
    ["Adapter un poste dans la fonction publique", "Employeur public ou référent handicap", "FIPHFP, médecine du travail"],
    ["Étudier ou suivre une formation", "Référent ou mission handicap", "Établissement, organisme de formation, Agefiph ou FIPHFP selon le statut"],
    ["Être aidé pour constituer les dossiers", "Travailleur social", "CCAS, MDPH, CPAM, association spécialisée"],
  ];

  const faq = FAQ_BY_ROUTE["/aides-financieres-basse-vision"];

  const sources = [
    { label: "Service-Public — Prestation de compensation du handicap", url: "https://www.service-public.fr/particuliers/vosdroits/F14202" },
    { label: "Mon Parcours Handicap — Aides et démarches", url: "https://www.monparcourshandicap.gouv.fr/aides" },
    { label: "Mon Parcours Handicap — Financements des aides techniques", url: "https://www.monparcourshandicap.gouv.fr/aides-techniques/quels-financements-pour-les-aides-techniques" },
    { label: "Service-Public — MaPrimeAdapt’", url: "https://www.service-public.fr/particuliers/vosdroits/F37501" },
    { label: "Assurance Maladie — Aides financières individuelles", url: "https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/aides-financieres-individuelles" },
    { label: "Agefiph — Aide technique en compensation du handicap", url: "https://www.agefiph.fr/aides-financieres/aide-technique-en-compensation-du-handicap" },
    { label: "FIPHFP — Catalogue des interventions", url: "https://www.fiphfp.fr/employeurs/nos-aides-financieres/catalogue-des-interventions" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm md:text-base text-primary-foreground/80">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link to="/" className="hover:underline">Accueil</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-4 h-4 inline" /></li>
                <li><Link to="/vivre-basse-vision" className="hover:underline">Vivre avec la basse vision</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-4 h-4 inline" /></li>
                <li aria-current="page" className="text-primary-foreground font-semibold">Aides financières</li>
              </ol>
            </nav>
            <div className="max-w-5xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Aides financières pour les personnes <span className="text-secondary">malvoyantes</span>
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-3xl">
                Loupe électronique, téléagrandisseur, machine à lire, logiciel adapté ou travaux dans le logement : plusieurs aides peuvent contribuer à leur financement, mais il n’existe pas un remboursement unique accessible à toutes les personnes malvoyantes.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Intro + Réponse rapide + CTA */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Les possibilités dépendent notamment de votre âge, de votre situation personnelle ou professionnelle, de vos ressources, des conséquences concrètes de votre déficience visuelle et du matériel dont vous avez réellement besoin.
                </p>
                <p>
                  Cette page vous aide à identifier rapidement le bon parcours : financer une aide visuelle, préparer un dossier MDPH, comprendre la PCH, adapter votre logement, rechercher une aide pour le travail ou les études, ou trouver une solution temporaire pendant l’étude du dossier.
                </p>
              </div>

              {/* Réponse rapide */}
              <Card className="p-4 sm:p-6 lg:p-8 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h2 className="font-serif text-xl font-bold text-foreground mb-3">Réponse rapide</h2>
                    <p className="text-lg text-foreground leading-relaxed mb-3">
                      Vous cherchez surtout à financer une loupe électronique, un téléagrandisseur ou une machine à lire ? Commencez par vérifier le matériel, demander un devis détaillé, puis étudiez les pistes possibles : Assurance Maladie si le produit répond aux conditions de la LPP, PCH via la MDPH, mutuelle, CPAM, caisse de retraite, Fonds départemental de compensation ou aide liée au travail.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed">
                      Avant tout achat important, demandez une confirmation écrite au financeur concerné. Un achat réalisé trop tôt peut compromettre la prise en charge selon la procédure applicable.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="#quelle-aide-recherchez-vous">
                    Trouver l’aide correspondant à ma situation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Sommaire */}
              <nav aria-label="Dans cette page" className="rounded-2xl border-2 border-border bg-muted p-4 sm:p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">Dans cette page</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base">
                  <li><a href="#quelle-aide-recherchez-vous" className="text-primary hover:underline font-medium">Quelle aide recherchez-vous ?</a></li>
                  <li><a href="#parcours-4-etapes" className="text-primary hover:underline font-medium">Le parcours le plus sûr en 4 étapes</a></li>
                  <li><a href="#principaux-financements" className="text-primary hover:underline font-medium">Les principaux financements à connaître</a></li>
                  <li><a href="#pas-automatique" className="text-primary hover:underline font-medium">Pourquoi une aide n’est pas automatique</a></li>
                  <li><a href="#qui-contacter" className="text-primary hover:underline font-medium">Qui contacter selon votre situation ?</a></li>
                  <li><a href="#presenter-besoin" className="text-primary hover:underline font-medium">Comment présenter votre besoin dans un dossier ?</a></li>
                  <li><a href="#pendant-demarches" className="text-primary hover:underline font-medium">Pendant les démarches, ne restez pas sans solution</a></li>
                  <li><a href="#faq" className="text-primary hover:underline font-medium">Questions fréquentes</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* 5 cartes d'orientation */}
        <section id="quelle-aide-recherchez-vous" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Quelle aide recherchez-vous ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {orientationCards.map((card) => (
                  <Card key={card.slug} variant="elevated" className="p-6 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <card.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-base text-foreground leading-relaxed mb-6 flex-1">{card.body}</p>
                    <Button variant="secondary" asChild className="self-start">
                      <Link to={`/aides-financieres-basse-vision/${card.slug}/`}>
                        {card.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parcours 4 étapes */}
        <section id="parcours-4-etapes" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Le parcours le plus sûr en 4 étapes
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    t: "1. Décrire le besoin réel avant de chercher le financeur",
                    p: "Commencez par l’usage concret : lire le courrier, remplir un formulaire, consulter un écran, vérifier une ordonnance, cuisiner, suivre une formation, travailler sur ordinateur ou se déplacer en sécurité. Cette description est souvent plus utile qu’une simple phrase comme : « j’ai une DMLA » ou « je suis malvoyant ».",
                  },
                  {
                    t: "2. Tester la solution et demander un devis précis",
                    p: "Avant d’engager une dépense importante, testez le matériel si possible. Le devis doit préciser la marque, le modèle, les options, les accessoires, le prix, les frais éventuels d’installation ou de formation, et la durée de validité. Pour un matériel pouvant relever de la LPP, demandez aussi le code LPP exact et le tarif servant de base à la prise en charge.",
                  },
                  {
                    t: "3. Vérifier les financeurs avant l’achat",
                    p: "Selon la situation, les pistes peuvent être différentes : Assurance Maladie, PCH, mutuelle, CPAM, caisse de retraite, Agefiph, FIPHFP, APA, MaPrimeAdapt’, Fonds départemental de compensation, collectivité ou association. La démarche la plus sûre consiste à déposer les demandes nécessaires avant l’achat ou les travaux et à attendre les consignes écrites de l’organisme concerné.",
                  },
                  {
                    t: "4. Prévoir une solution temporaire pendant l’attente",
                    p: "Les démarches peuvent prendre plusieurs mois. Pendant ce temps, une lampe mieux placée, une loupe simple, une fonction d’accessibilité du smartphone, une application de lecture vocale, un prêt ou une location peuvent aider à conserver une partie de l’autonomie.",
                  },
                ].map((s) => (
                  <Card key={s.t} className="p-5 md:p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.t}</h3>
                    <p className="text-base text-foreground leading-relaxed">{s.p}</p>
                  </Card>
                ))}
              </ol>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/aides-lecture-bassevision">
                    Découvrir les solutions de lecture basse vision
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau principaux financements */}
        <section id="principaux-financements" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les principaux financements à connaître
              </h2>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border-2 border-border bg-background">
                <table className="w-full text-left text-base">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">Besoin</th>
                      <th scope="col" className="p-4 font-semibold">Dispositifs à examiner</th>
                      <th scope="col" className="p-4 font-semibold">Point de vigilance</th>
                      <th scope="col" className="p-4 font-semibold">Page utile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financementTable.map((row, i) => (
                      <tr key={i} className="border-t border-border align-top">
                        <td className="p-4 font-semibold text-foreground">{row.besoin}</td>
                        <td className="p-4 text-foreground">{row.dispositifs}</td>
                        <td className="p-4 text-foreground">{row.vigilance}</td>
                        <td className="p-4">
                          <Link to={row.page.href} className="text-primary font-semibold hover:underline">
                            {row.page.label}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {financementTable.map((row, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Besoin</p>
                    <p className="text-base text-foreground font-semibold mb-3">{row.besoin}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Dispositifs à examiner</p>
                    <p className="text-base text-foreground mb-3">{row.dispositifs}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Point de vigilance</p>
                    <p className="text-base text-foreground mb-3">{row.vigilance}</p>
                    <Link to={row.page.href} className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      {row.page.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pas automatique */}
        <section id="pas-automatique" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une aide financière n’est pas un remboursement automatique
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Il est fréquent d’entendre qu’un appareil est « remboursé par la MDPH » ou « pris en charge à 100 % ». Ces expressions sont souvent trop simplificatrices.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-3">En pratique :</p>
              <ul className="space-y-3 mb-6">
                {[
                  "la MDPH n’attribue pas automatiquement une aide en fonction du seul diagnostic ;",
                  "le besoin doit être évalué dans la vie quotidienne ;",
                  "chaque financeur applique ses propres conditions ;",
                  "le montant accordé peut être calculé sur un tarif ou un plafond, et non sur le prix réel du matériel ;",
                  "un reste à charge peut subsister ;",
                  "certains financements peuvent être combinés, sans dépasser le coût de la dépense ;",
                  "un achat réalisé avant l’accord peut compromettre une prise en charge selon la procédure appliquée.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Card className="p-5 border-primary/30 bg-primary/5">
                <p className="text-base text-foreground leading-relaxed mb-2">
                  La bonne question n’est donc pas seulement : <strong>« Cet appareil est-il remboursé ? »</strong>
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Il faut plutôt demander : <em>« Quels financements sont possibles pour ce matériel précis, compte tenu de mon besoin et de ma situation ? »</em>
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Qui contacter */}
        <section id="qui-contacter" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Qui contacter selon votre situation ?
              </h2>

              {/* Desktop */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border-2 border-border bg-background">
                <table className="w-full text-left text-base">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">Votre besoin</th>
                      <th scope="col" className="p-4 font-semibold">Premier interlocuteur utile</th>
                      <th scope="col" className="p-4 font-semibold">Autres pistes possibles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interlocuteurs.map((row, i) => (
                      <tr key={i} className="border-t border-border align-top">
                        <td className="p-4 font-semibold text-foreground">{row[0]}</td>
                        <td className="p-4 text-foreground">{row[1]}</td>
                        <td className="p-4 text-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="md:hidden space-y-4">
                {interlocuteurs.map((row, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Votre besoin</p>
                    <p className="text-base text-foreground font-semibold mb-3">{row[0]}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Premier interlocuteur utile</p>
                    <p className="text-base text-foreground mb-3">{row[1]}</p>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">Autres pistes possibles</p>
                    <p className="text-base text-foreground">{row[2]}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-5 mt-6 border-secondary/40 bg-secondary/5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">Conseil pratique</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Il n’est pas toujours nécessaire de contacter tous les organismes en même temps. Commencez par identifier précisément le besoin, puis demandez à un professionnel ou à un travailleur social quels financeurs correspondent réellement à votre situation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 7 étapes */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Les 7 étapes d’une demande de financement
              </h2>
              <div className="space-y-6">
                {[
                  { t: "1. Décrire ce qui est devenu difficile", p: "Partez de votre vie réelle : lire un courrier ou une facture ; suivre une ligne dans un livre ; consulter un écran ; remplir un formulaire ; reconnaître les produits dans la cuisine ; travailler sur ordinateur ; vous déplacer en sécurité. Cette description est souvent plus utile qu’une simple liste de symptômes." },
                  { t: "2. Faire évaluer vos besoins", p: "Selon votre situation, l’évaluation peut être réalisée ou complétée par un ophtalmologiste, un orthoptiste spécialisé en basse vision, un ergothérapeute, un opticien spécialisé, un centre de réadaptation ou un service d’accompagnement." },
                  { t: "3. Tester plusieurs solutions", p: "Un appareil très performant sur le papier peut ne pas vous convenir. Testez, autant que possible, la qualité de l’image, la taille de l’écran, le grossissement utile, les contrastes, la facilité des commandes, la position de lecture, le poids et le transport, ainsi que la lecture vocale lorsqu’elle existe." },
                  { t: "4. Demander un devis précis", p: "Le devis doit indiquer clairement la marque et le modèle, les options, les accessoires, le prix, les éventuels frais d’installation ou de formation et la durée de validité du devis." },
                  { t: "5. Identifier les financeurs possibles", p: "Selon votre situation, il peut s’agir de la MDPH, de l’Assurance Maladie, de votre mutuelle, de la CPAM, de votre caisse de retraite, de l’Agefiph, du FIPHFP ou d’une aide locale." },
                  { t: "6. Déposer les demandes avant l’achat", p: "La démarche la plus sûre consiste à déposer la demande avant l’achat et à attendre les consignes écrites de la MDPH ou du financeur. Un achat anticipé peut compromettre la prise en charge selon la nature de l’aide et la procédure appliquée. Conservez les copies du dossier, les devis, les prescriptions, les comptes rendus, les courriers, les accusés de réception et les notifications d’accord ou de refus." },
                  { t: "7. Relancer et suivre le dossier", p: "Les délais peuvent être longs. Notez les dates d’envoi et les coordonnées des interlocuteurs. Une relance courtoise permet parfois de repérer une pièce manquante ou un dossier resté incomplet." },
                ].map((s) => (
                  <Card key={s.t} className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{s.t}</h3>
                    <p className="text-base text-foreground leading-relaxed">{s.p}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/aides-financieres-basse-vision/dossier-mdph-pch/">
                    Comprendre en détail le dossier MDPH
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pendant les démarches */}
        <section id="pendant-demarches" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pendant les démarches, ne restez pas sans solution
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Une demande d’aide peut prendre plusieurs mois. Pendant ce temps, les difficultés de lecture restent bien présentes.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-3">Sans compromettre votre dossier principal, vous pouvez rechercher une solution transitoire :</p>
              <ul className="space-y-3 mb-6">
                {[
                  "améliorer l’éclairage et la position de lecture ;",
                  "essayer une loupe optique simple ;",
                  "utiliser la fonction loupe du smartphone ;",
                  "agrandir les caractères et renforcer les contrastes ;",
                  "utiliser une application de lecture vocale ;",
                  "demander un prêt ou une location de matériel ;",
                  "rechercher un appareil reconditionné ;",
                  "solliciter ponctuellement un proche ou une association pour les courriers urgents.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground leading-relaxed mb-6">
                Ces solutions ne remplacent pas nécessairement l’équipement définitif. Elles permettent simplement de préserver une partie de votre autonomie pendant l’instruction du dossier.
              </p>
              <Card className="p-5 border-destructive/30 bg-destructive/5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">Avant d’acheter une solution provisoire coûteuse</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Vérifiez qu’elle ne compromet pas la demande en cours. Certains financeurs peuvent refuser d’intervenir lorsque le matériel a déjà été acheté.
                    </p>
                  </div>
                </div>
              </Card>
              <Button variant="secondary" asChild>
                <Link to="/aides-lecture-bassevision">
                  Découvrir les solutions de lecture basse vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cumul financements */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Peut-on cumuler plusieurs financements ?</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Oui, plusieurs interventions peuvent parfois être associées pour diminuer le reste à charge. Par exemple, un projet peut mobiliser :
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "une éventuelle prise en charge par l’Assurance Maladie ;",
                  "la PCH ou un plan d’aide APA ;",
                  "la mutuelle ;",
                  "le Fonds départemental de compensation ;",
                  "une aide individuelle de la CPAM ;",
                  "une caisse de retraite ;",
                  "l’Agefiph ou le FIPHFP ;",
                  "une collectivité, une association ou une fondation.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground leading-relaxed">
                Chaque organisme doit connaître les autres financements demandés ou obtenus. Le total des aides ne peut pas dépasser le coût réel de l’équipement ou des travaux.
              </p>
            </div>
          </div>
        </section>

        {/* Présenter besoin */}
        <section id="presenter-besoin" className="py-12 md:py-16 bg-muted scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comment présenter votre besoin dans un dossier ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">Évitez une formulation trop générale comme :</p>
              <blockquote className="border-l-4 border-destructive/50 bg-destructive/5 p-4 mb-6 italic text-foreground">
                « J’ai une DMLA et j’ai besoin d’une loupe électronique. »
              </blockquote>
              <p className="text-lg text-foreground leading-relaxed mb-4">Expliquez plutôt :</p>
              <blockquote className="border-l-4 border-secondary bg-secondary/10 p-4 mb-6 italic text-foreground">
                « Je ne peux plus lire seul mon courrier administratif ni mes factures. Une loupe optique ne me permet pas de suivre plusieurs lignes et provoque une fatigue rapide. J’ai testé une loupe électronique avec un écran plus large et un contraste inversé. Elle me permet de lire mes documents, de vérifier mes ordonnances et de conserver une partie de mon autonomie. »
              </blockquote>
              <p className="text-lg text-foreground leading-relaxed mb-3">Un dossier compréhensible relie toujours :</p>
              <ol className="list-decimal pl-6 space-y-2 text-base text-foreground">
                <li>une difficulté réelle ;</li>
                <li>une activité importante ;</li>
                <li>la solution testée ;</li>
                <li>le bénéfice attendu dans la vie quotidienne.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Pourquoi LirElia */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Pourquoi LirElia traite ce sujet ?</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                LirElia accompagne les personnes malvoyantes, leurs proches et les aidants autour d’un objectif simple : rendre les solutions basse vision plus compréhensibles, plus concrètes et plus faciles à choisir.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Les aides financières ne doivent pas être abordées comme une promesse de remboursement. Elles font partie d’un parcours plus large : comprendre la déficience visuelle, tester les solutions, préparer les justificatifs, éviter les achats précipités et préserver l’autonomie pendant les démarches.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Cette approche repose sur l’expérience de terrain en basse vision, la connaissance des aides techniques et la volonté de guider sans remplacer les organismes officiels.
              </p>
            </div>
          </div>
        </section>

        {/* Guide livre */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Un guide pour avancer au-delà des démarches
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Les aides financières ne représentent qu’une partie du parcours. Il faut aussi comprendre la basse vision, choisir le bon matériel, adapter son logement et retrouver des habitudes qui facilitent la lecture et la vie quotidienne.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Le livre <em>DMLA — Votre vie ne s’arrête pas</em> rassemble ces sujets dans un guide pratique destiné aux personnes concernées et à leurs proches. Plusieurs chapitres sont consacrés aux aides disponibles, aux démarches administratives, à l’équipement et à l’adaptation du domicile.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/livre-dmla-votre-vie-ne-sarrete-pas">
                    Découvrir le livre et consulter son contenu
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.amazon.fr/dp/B0GXS47Q9B" target="_blank" rel="noopener noreferrer">
                    Voir le livre sur Amazon
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Questions fréquentes</h2>
              <div className="space-y-5">
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

        {/* Infos importantes */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-5 border-primary/30 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h2 className="font-serif text-xl font-bold text-foreground mb-3">Informations importantes</h2>
                    <p className="text-base text-foreground leading-relaxed mb-3">
                      Les informations de cette page ont été vérifiées en <strong>juin 2026</strong>.
                    </p>
                    <p className="text-base text-foreground leading-relaxed mb-3">
                      Les montants, critères et pratiques locales peuvent évoluer. Vérifiez toujours votre situation auprès de l’organisme concerné avant tout achat, dépôt de dossier ou début de travaux.
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                      LirElia présente les principaux dispositifs existants mais ne décide pas de leur attribution et ne peut garantir l’obtention d’un financement.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Sources officielles */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Sources officielles</h2>
              <ul className="space-y-3">
                {sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-start gap-2 text-base"
                    >
                      <ExternalLink className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                      <span>
                        {s.label}
                        <span className="sr-only"> (nouvel onglet)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AidesFinancieres;
