import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight, ChevronRight, Lightbulb, Clock, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import amslerGridImage from "@/assets/grille-amsler-dessin-300.jpeg";
import coverDmla from "@/assets/couverture-dmla-votre-vie-2026.jpg";
import coverDmla400 from "@/assets/couverture-dmla-votre-vie-2026-400.webp";
import coverDmla800 from "@/assets/couverture-dmla-votre-vie-2026-800.webp";
import coverAidant from "@/assets/couverture-aider-proche-2026.jpg";
import coverAidant400 from "@/assets/couverture-aider-proche-2026-400.webp";
import coverAidant800 from "@/assets/couverture-aider-proche-2026-800.webp";

const linkCls = "text-primary font-semibold underline underline-offset-4 hover:text-primary/80";
const P = ({ children }: { children: ReactNode }) => (
  <p className="text-lg text-foreground leading-relaxed mb-4 last:mb-0">{children}</p>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 scroll-mt-28">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 mt-8 first:mt-0">{children}</h3>
);
const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-3 mb-4">
    {items.map((it, i) => (
      <li key={i} className="flex items-start gap-3 text-lg text-foreground leading-relaxed">
        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
        <span className="min-w-0">{it}</span>
      </li>
    ))}
  </ul>
);
const Section = ({ id, title, muted, children }: { id: string; title: string; muted?: boolean; children: ReactNode }) => (
  <section className={`py-14 ${muted ? "bg-muted" : "bg-background"}`} aria-labelledby={id}>
    <div className="container">
      <div className="max-w-4xl mx-auto min-w-0">
        <H2 id={id}>{title}</H2>
        {children}
      </div>
    </div>
  </section>
);

const books = [
  {
    img: coverDmla, srcSet: `${coverDmla400} 400w, ${coverDmla800} 800w`, w: 900, h: 1356,
    title: "DMLA - Votre vie ne s'arrête pas",
    sub: "Comprendre la DMLA, s’équiper, s’organiser… et garder le moral.",
    desc: "Un ouvrage consacré aux difficultés du quotidien, aux aides visuelles et à l’autonomie.",
    alt: "Couverture du livre DMLA - Votre vie ne s'arrête pas, Thierry Ducros",
    to: "/livre-dmla-votre-vie-ne-sarrete-pas/",
  },
  {
    img: coverAidant, srcSet: `${coverAidant400} 400w, ${coverAidant800} 800w`, w: 900, h: 1379,
    title: "DMLA, Aider un proche sans s'épuiser",
    sub: "Guide pratique des aidants pour comprendre la basse vision et préserver l’autonomie.",
    desc: "Un ouvrage destiné aux proches qui veulent accompagner avec attention, sans négliger leur propre équilibre.",
    alt: "Couverture du livre DMLA, Aider un proche sans s'épuiser, Thierry Ducros",
    to: "/livre-aider-proche-dmla/",
  },
];

const faq = [
  { q: "La DMLA rend-elle totalement aveugle ?", a: <>La DMLA atteint essentiellement la vision centrale. La vision périphérique reste généralement utilisable, même lorsque l'atteinte centrale est importante. D'autres maladies oculaires associées peuvent toutefois modifier la situation.</> },
  { q: "Peut-on avoir une DMLA sur un seul œil ?", a: <>Oui. Un œil peut être atteint avant l'autre. C'est pourquoi il est utile de surveiller chaque œil séparément et de respecter le suivi prescrit.</> },
  { q: "Peut-on continuer à lire avec une DMLA ?", a: <>Souvent, oui, en adaptant les caractères, l'éclairage ou les aides visuelles. Si la lecture visuelle devient trop pénible, les outils de lecture vocale constituent une autre possibilité.</> },
  { q: "Les lunettes classiques corrigent-elles la DMLA ?", a: <>Les lunettes corrigent les défauts de réfraction associés, mais ne réparent pas les lésions de la macula. Un accompagnement en basse vision peut aider à choisir des solutions complémentaires.</> },
  { q: "Quand demander un bilan basse vision ?", a: <>Lorsque les activités comme la lecture, l'écriture ou l'utilisation des écrans deviennent difficiles malgré la correction habituelle. Le bilan d'aides visuelles complète le suivi médical : il ne remplace pas l'examen ophtalmologique. <Link to="/bilans-bassevision/" className={linkCls}>Découvrir les bilans LirElia</Link>.</> },
];

const sources = [
  ["Assurance Maladie — Comprendre la DMLA", "https://www.ameli.fr/assure/sante/themes/dmla/comprendre-dmla"],
  ["Assurance Maladie — Symptômes et diagnostic", "https://www.ameli.fr/assure/sante/themes/dmla/symptomes-diagnostic"],
  ["Assurance Maladie — Traitement de la DMLA humide", "https://www.ameli.fr/assure/sante/themes/dmla/dmla-humide-traitement"],
  ["Assurance Maladie — Vivre avec la DMLA", "https://www.ameli.fr/assure/sante/themes/dmla/dmla-vivre-maladie"],
  ["Inserm — Dégénérescence maculaire liée à l'âge", "https://www.inserm.fr/dossier/degenerescence-maculaire-liee-age-dmla/"],
  ["Haute Autorité de santé — Repérage précoce de la DMLA", "https://www.has-sante.fr/jcms/p_3383775/fr/des-recommandations-pour-un-reperage-plus-precoce-de-la-dmla"],
];

const DMLA = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <main id="main-content">
        <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
          <div className="container">
            <ol className="flex items-center gap-2 text-lg flex-wrap">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <li><Link to="/maladies-yeux/" className="text-muted-foreground hover:text-primary transition-colors">Maladies des yeux</Link></li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <li><span className="text-foreground font-semibold" aria-current="page">La DMLA</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-14 md:py-16">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-secondary font-semibold text-lg mb-3">Maladie des yeux</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                DMLA : symptômes, traitements et solutions pour mieux vivre
              </h1>
              <nav aria-label="Accès rapide" className="flex flex-wrap gap-3">
                {[["#symptomes", "Symptômes"], ["#vivre-avec-dmla", "Vivre avec la DMLA"], ["#aider-proche", "Aider un proche"]].map(([href, label]) => (
                  <a key={href} href={href} className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/60 px-5 py-2 text-lg font-semibold hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary">
                    {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <P>La <strong>DMLA (dégénérescence maculaire liée à l’âge)</strong> est une maladie de la rétine qui altère la vision centrale, celle qui permet de lire, de distinguer les détails et de reconnaître un visage. Elle survient généralement après 50 ans. Selon son stade et sa forme, son évolution peut être lente ou rapide.</P>
              <P>Un diagnostic de DMLA soulève de nombreuses questions : peut-on continuer à lire ? Quels traitements existent ? Comment préserver son autonomie ? Cette page vous aide à comprendre les principaux repères médicaux et à découvrir des solutions concrètes pour le quotidien.</P>
              <Card variant="highlighted" className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-lg text-foreground leading-relaxed"><strong>À retenir :</strong> la DMLA affecte surtout la vision centrale. La vision périphérique reste généralement préservée, même lorsque la lecture devient difficile. Des aides visuelles et un accompagnement adapté peuvent faciliter de nombreuses activités.</p>
                </div>
              </Card>
              <div role="note" className="rounded-xl border-l-8 border-destructive bg-card border border-border p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-lg text-foreground leading-relaxed"><strong>Un changement récent de vision ?</strong> Des lignes qui ondulent soudainement, une nouvelle tache au centre du regard ou une baisse de vision doivent conduire à contacter rapidement un ophtalmologiste, sans attendre une consultation programmée. Devant des symptômes évocateurs de DMLA, l’Assurance Maladie recommande un bilan en moins d’une semaine. En cas de baisse d’acuité chez une personne porteuse de drusen (MLA), elle recommande une consultation dans les 48 heures.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="definition" title="Qu’est-ce que la DMLA ?" muted>
          <P>La rétine capte la lumière au fond de l’œil. En son centre se trouve la <strong>macula</strong>, une petite zone essentielle à la vision précise. C’est grâce à elle que nous distinguons les lettres d’un livre, les détails d’une photographie ou les traits d’un visage.</P>
          <P>La DMLA touche cette région. Elle peut provoquer une baisse de netteté, des déformations, une diminution des contrastes et, à un stade avancé, une zone floue ou absente au centre du regard, appelée <em>scotome</em>.</P>
          <P>La maladie n’atteint généralement pas la vision périphérique : on peut donc continuer à percevoir son environnement tout en ayant de grandes difficultés pour lire ou reconnaître quelqu’un. La gêne varie beaucoup d’une personne à l’autre.</P>
          <P>Au début, l’ophtalmologiste peut identifier une <strong>maculopathie liée à l’âge (MLA)</strong>, notamment par la présence de dépôts appelés <em>drusen</em>. Ce stade précoce peut rester stable ; il justifie néanmoins une surveillance adaptée.</P>
        </Section>

        <Section id="symptomes" title="Quels sont les symptômes de la DMLA ?">
          <P>Les premiers signes peuvent être discrets, parfois présents sur un seul œil. L’autre œil peut alors masquer une partie des difficultés. Soyez attentif notamment à :</P>
          <List items={[
            <>des <strong>lignes droites qui paraissent ondulées</strong> ou déformées ;</>,
            <>une <strong>baisse de la vision centrale</strong>, de près comme de loin ;</>,
            <>des <strong>lettres qui semblent manquer</strong> ou une tache au centre du texte ;</>,
            <>une diminution des contrastes, un besoin de plus de lumière ou une gêne à l’éblouissement ;</>,
            <>une difficulté nouvelle à reconnaître les visages ou à distinguer les détails.</>,
          ]} />
          <P>Ces symptômes ne suffisent pas à diagnostiquer une DMLA : d’autres maladies oculaires peuvent aussi les provoquer. <strong>L’apparition ou l’aggravation de tels signes nécessite un avis ophtalmologique rapide.</strong></P>
        </Section>

        <Section id="formes" title="DMLA sèche et DMLA humide : quelles différences ?" muted>
          <P>Il existe deux grandes formes de DMLA tardive. Elles n’évoluent pas de la même manière et ne bénéficient pas des mêmes traitements.</P>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card variant="elevated" className="p-6 min-w-0">
              <Clock className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
              <H3>DMLA sèche, ou atrophique</H3>
              <P>La <strong>DMLA sèche avancée</strong> correspond à une disparition progressive de cellules de la macula. La perte de vision centrale est généralement lente, souvent sur plusieurs années. Les difficultés concernent notamment la lecture, les détails et les contrastes.</P>
              <P>À ce jour, aucun traitement médicamenteux curatif de cette forme n’est disponible en France. Le suivi ophtalmologique, les conseils de prévention, la réadaptation et les aides visuelles gardent donc une place importante.</P>
            </Card>
            <Card variant="elevated" className="p-6 min-w-0">
              <Droplets className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
              <H3>DMLA humide, ou exsudative</H3>
              <P>La <strong>DMLA humide</strong> est liée au développement de vaisseaux sanguins anormaux sous ou dans la rétine. Ces vaisseaux peuvent laisser passer du liquide ou du sang, perturbant rapidement la vision centrale.</P>
              <P>Cette forme peut évoluer en quelques jours ou semaines. Des injections intraoculaires de médicaments, notamment les <strong>anti-VEGF</strong>, permettent souvent de freiner son évolution et parfois d’améliorer la vision. La rapidité de la prise en charge est déterminante.</P>
            </Card>
          </div>
          <Card variant="muted" className="p-6">
            <p className="text-lg text-foreground leading-relaxed"><strong>Important :</strong> « sèche » ne signifie pas nécessairement bénigne et « humide » ne signifie pas perte inévitable de la vision. Le pronostic dépend du stade, des lésions et du suivi. Une forme peut aussi évoluer ou coexister avec l’autre.</p>
          </Card>
        </Section>

        <Section id="facteurs" title="Quels facteurs favorisent la DMLA ?">
          <P>La DMLA a plusieurs facteurs de risque. Certains ne peuvent pas être modifiés, notamment <strong>l’âge</strong> et la <strong>prédisposition familiale</strong>. Le <strong>tabagisme</strong> est un facteur de risque majeur sur lequel il est possible d’agir.</P>
          <P>Une alimentation équilibrée, une activité physique adaptée, l’arrêt du tabac et le suivi des facteurs cardiovasculaires sont des mesures favorables à la santé générale et oculaire. Elles ne permettent toutefois ni de garantir l’absence de DMLA ni de remplacer un traitement.</P>
          <P>Les compléments alimentaires ne doivent pas être pris systématiquement : leur intérêt dépend notamment du stade de la maladie et de la situation de chaque personne. Demandez conseil à votre ophtalmologiste avant d’en prendre.</P>
        </Section>

        <Section id="diagnostic" title="Comment la DMLA est-elle diagnostiquée et surveillée ?" muted>
          <P>Le diagnostic repose sur un examen ophtalmologique. Selon les besoins, le spécialiste réalise notamment un <strong>fond d’œil</strong> et une <strong>tomographie par cohérence optique (OCT)</strong>, examen d’imagerie qui montre les différentes couches de la rétine. D’autres examens peuvent être indiqués pour rechercher des vaisseaux anormaux.</P>
          <H3>À quoi sert la grille d’Amsler ?</H3>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <figure className="shrink-0">
              <img src={amslerGridImage} alt="Dessin illustratif d'une grille d'Amsler : quadrillage avec un point central" className="w-32 h-auto rounded-lg border border-border" width={300} height={384} loading="lazy" decoding="async" />
              <figcaption className="text-base text-muted-foreground mt-2 max-w-[8rem]">Illustration, non utilisable comme test.</figcaption>
            </figure>
            <div className="min-w-0">
              <P>La grille d’Amsler est un quadrillage muni d’un point central. Elle peut aider à repérer l’apparition de déformations dans la vision centrale.</P>
              <P>Pour l’utiliser, placez-la à environ <strong>25 cm</strong>, avec vos lunettes de lecture si vous en portez. Couvrez un œil, fixez le point central, puis recommencez avec l’autre œil. Vérifiez si certaines lignes paraissent courbes, interrompues ou masquées.</P>
              <P>Pour une DMLA déjà diagnostiquée, l’Assurance Maladie conseille une <strong>autosurveillance chaque semaine</strong>, selon les recommandations du médecin. Un changement nouveau doit conduire à consulter rapidement. <strong>Le test d’Amsler ne remplace jamais les examens ophtalmologiques.</strong></P>
            </div>
          </div>
        </Section>

        <Section id="traitements" title="Quels traitements existent contre la DMLA ?">
          <P>Les traitements dépendent de la forme de la maladie et de son activité.</P>
          <P><strong>Pour la DMLA humide</strong>, le traitement de référence repose principalement sur des injections intravitréennes de médicaments anti-VEGF. Ils limitent le développement et la perméabilité des vaisseaux anormaux. Ils ne « cautérisent » pas la rétine et ne guérissent pas définitivement la maladie. Le rythme des injections et des examens est défini par l’ophtalmologiste.</P>
          <P><strong>Pour la DMLA sèche avancée</strong>, il n’existe pas actuellement de traitement curatif autorisé en France. Certaines approches sont étudiées à l’international, mais il faut distinguer les résultats de recherche, les autorisations obtenues dans d’autres pays et les soins réellement disponibles en France.</P>
          <P>Dans tous les cas, un suivi régulier est indispensable. Si une baisse de vision persiste, l’accompagnement en basse vision ne doit pas attendre la fin du parcours médical : il peut aider à retrouver des possibilités concrètes au quotidien.</P>
        </Section>

        <Section id="vivre-avec-dmla" title="Comment continuer à vivre avec une DMLA ?" muted>
          <P>La DMLA change parfois la manière de réaliser des gestes ordinaires. Elle ne signifie pas nécessairement devoir renoncer à ses activités préférées. L’objectif est de <strong>repérer les difficultés précises</strong>, puis d’essayer des adaptations appropriées.</P>
          <H3>Lire, écrire et utiliser ses écrans</H3>
          <P>Agrandir les caractères, améliorer le contraste, ajuster la lumière et adapter la distance de lecture peuvent aider. Une loupe convient à certaines tâches courtes ; un téléagrandisseur ou une lecture vocale peuvent être plus adaptés à d’autres situations. Le choix dépend de la vision restante et de l’activité, pas seulement du diagnostic.</P>
          <H3>Rendre son logement plus confortable</H3>
          <P>Un éclairage orientable, des objets rangés à des places fixes, des repères contrastés sur les commandes et un espace dégagé peuvent faciliter les gestes du quotidien. Il est utile de tester les changements progressivement, en commençant par les activités qui posent le plus de difficultés.</P>
          <H3>Préserver ses déplacements et ses relations</H3>
          <P>Sortir, reconnaître des personnes ou suivre une conversation dans un lieu animé peut devenir plus fatigant. Un accompagnement adapté, des stratégies de repérage et, si nécessaire, une rééducation basse vision peuvent aider. Le soutien des proches doit respecter les habitudes et les choix de la personne concernée.</P>
        </Section>

        <Section id="aides-visuelles" title="Quelles aides visuelles peuvent être utiles ?">
          <P>Il n’existe pas <strong>une loupe universelle pour toutes les personnes atteintes de DMLA</strong>. Le bon outil dépend de la taille des caractères, de la durée de lecture, de la sensibilité aux contrastes, des gestes à effectuer et du grossissement utile.</P>
          <P>Parmi les solutions possibles :</P>
          <List items={[
            <><strong>Loupes optiques</strong>, avec ou sans éclairage, pour certains besoins ponctuels ;</>,
            <><strong>Loupes électroniques</strong>, qui permettent d’ajuster le grossissement et parfois les contrastes ;</>,
            <><strong>Téléagrandisseurs</strong>, pour travailler sur des documents plus grands ou lire longtemps ;</>,
            <><strong>Lampes adaptées</strong>, utiles pour mieux diriger l’éclairage et limiter les reflets ;</>,
            <><strong>Lecture vocale et fonctions d’accessibilité</strong>, lorsque la lecture visuelle est trop difficile ou fatigante.</>,
          ]} />
          <P>Aucun appareil ne restaure les cellules de la rétine atteintes. Un essai en situation réelle reste la meilleure façon de savoir ce qui vous apporte un bénéfice.</P>
          <Card variant="highlighted" className="p-6">
            <p className="text-lg text-foreground leading-relaxed"><strong>À découvrir :</strong> <Link to="/aides-lecture-bassevision/" className={linkCls}>les aides à la lecture en basse vision</Link>, avec les différentes familles de solutions et leurs usages.</p>
          </Card>
        </Section>

        <Section id="aider-proche" title="Comment aider un proche atteint de DMLA ?" muted>
          <P>L'entourage joue souvent un rôle important, mais aider ne signifie pas tout faire à la place de l'autre. Commencez par lui demander <strong>ce qui est devenu difficile</strong> et ce qu'il souhaite continuer à faire seul.</P>
          <P>Vous pouvez, par exemple, améliorer l'éclairage, agrandir les réglages de son téléphone, rendre les objets plus faciles à repérer ou l'accompagner pour essayer une aide visuelle. Évitez de déplacer ses affaires sans le prévenir ou de décider systématiquement à sa place.</P>
          <P>Pour approfondir : <Link to="/aidants/" className={linkCls}>nos conseils aux proches aidants</Link>.</P>
        </Section>

        <Section id="livres" title="Deux guides pratiques pour aller plus loin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((b) => (
              <Card key={b.to} variant="elevated" className="p-6 flex flex-col sm:flex-row md:flex-col gap-6 min-w-0">
                <Link to={b.to} aria-label={`Voir la page du livre ${b.title}`} className="shrink-0 self-center rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring">
                  <img src={b.img} srcSet={b.srcSet} sizes="160px" alt={b.alt} width={b.w} height={b.h} loading="lazy" decoding="async"
                    className="w-40 h-auto object-contain rounded-md shadow-lg border border-border" />
                </Link>
                <div className="min-w-0 flex flex-col">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-lg italic text-foreground mb-3">{b.sub}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
                  <Button variant="default" asChild className="mt-auto self-start">
                    <Link to={b.to}>Découvrir ce livre <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="faq" title="Questions fréquentes sur la DMLA" muted>
          <div className="space-y-4">
            {faq.map((f) => (
              <Card key={f.q} className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">{f.q}</h3>
                <p className="text-lg text-foreground leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </Section>

        <section className="py-16 bg-primary text-primary-foreground" aria-labelledby="besoin-aide">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="besoin-aide" className="font-serif text-3xl md:text-4xl font-bold mb-6">Besoin d’aide pour choisir une solution adaptée ?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">Vous avez déjà un diagnostic ou un suivi ophtalmologique, mais certaines activités restent difficiles ? LirElia peut vous aider à identifier les aides visuelles à essayer selon vos besoins de lecture et votre environnement. Cette démarche est complémentaire de votre prise en charge médicale.</p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/bilans-bassevision/">Découvrir nos bilans basse vision <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <Section id="sources" title="Sources et informations éditoriales">
          <P>Cette page propose une information générale et des conseils d'adaptation du quotidien. Elle ne permet pas d'établir un diagnostic et ne remplace ni un traitement ni l'avis d'un professionnel de santé.</P>
          <ul className="space-y-2 mb-6">
            {sources.map(([label, url]) => (
              <li key={url} className="text-lg"><a href={url} target="_blank" rel="noopener noreferrer" className={linkCls}>{label}</a></li>
            ))}
          </ul>
          <p className="text-base italic text-muted-foreground">Contenu éditorial LirElia — informations médicales vérifiées le 19 octobre 2026 à partir des sources ci-dessus ; conseils pratiques dédiés à la basse vision.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default DMLA;
