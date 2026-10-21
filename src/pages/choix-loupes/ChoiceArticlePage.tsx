import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Check, Eye, Hand, Mail, PenLine, Search, Sun, Tag } from "lucide-react";
import { CHOICE_PRESENTATION, splitChoiceSections } from "@/content/choix-loupes/presentation";
import ChoiceImages, { PHOTOS } from "@/components/choix-loupes/ChoiceImages";
import { CHOICE_HUB, CHOICE_ARTICLES, getChoiceArticle, type ChoiceArticle } from "@/content/choix-loupes/articles";
import ChoiceEditorialContext from "@/components/choix-loupes/ChoiceEditorialContext";
import { HERO_PHOTO_ZONES } from "@/content/choix-loupes/editorialMode";
import PhotoBriefSlot from "@/components/choix-loupes/PhotoBriefSlot";
import { ContrastModesHTML, FieldOfViewHTML, FunctionCards, GuideOpening, SectionCues } from "@/components/choix-loupes/TeachingModules";
import "./choice-article.css";

type HtmlNode = { type: string; tagName?: string; value?: string; children?: HtmlNode[]; properties?: Record<string, unknown> };
const nodeText = (node: HtmlNode): string => node.type === "text" ? node.value ?? "" : (node.children ?? []).map(nodeText).join("");
function tableLabels() {
  return (tree: HtmlNode) => {
    const visit = (node: HtmlNode) => {
      if (node.tagName === "table") {
        const rows: HtmlNode[] = [];
        const collect = (n: HtmlNode) => { if (n.tagName === "tr") rows.push(n); else n.children?.forEach(collect); };
        collect(node);
        const headers = rows[0]?.children?.filter((n) => n.tagName === "th").map(nodeText) ?? [];
        rows.slice(1).forEach((row) => row.children?.filter((n) => n.tagName === "td").forEach((cell, i) => { cell.properties = { ...cell.properties, dataLabel: headers[i] }; }));
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
const localHref = (href = "") => href.replace(/^https:\/\/lirelia\.fr(?=\/)/, "");
const components: Components = {
  p: ({ children }) => <p className="text-xl leading-relaxed mb-5">{children}</p>,
  h2: ({ children }) => <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 leading-snug">{children}</h2>,
  h3: ({ children }) => <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 leading-snug">{children}</h3>,
  ul: ({ children }) => <ul className="list-disc pl-7 space-y-3 text-xl leading-relaxed mb-6 marker:text-primary">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-7 space-y-3 text-xl leading-relaxed mb-6 marker:font-bold marker:text-primary">{children}</ol>,
  a: ({ href = "", children }) => <a href={localHref(href)} className="text-primary font-semibold underline underline-offset-4 decoration-2 hover:decoration-secondary">{children}</a>,
  table: ({ children }) => <div className="choice-table my-8"><table className="w-full border-collapse text-lg bg-card">{children}</table></div>,
  th: ({ children }) => <th scope="col" className="bg-primary text-primary-foreground font-bold p-4 text-left align-top">{children}</th>,
  td: ({ children, ...props }) => <td data-label={(props as Record<string, unknown>)["data-label"] as string} className="p-4 border border-border align-top leading-relaxed">{children}</td>,
};
const Markdown = ({ source }: { source: string }) => <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[tableLabels]} components={components}>{source}</ReactMarkdown>;

/** Markdown text with IMAGE_ZONE markers placed at their editorial position. */
function Content({ article, source }: { article: ChoiceArticle; source: string }) {
  return <>{source.split(/\[choice-image:([^\]]+)\]/).map((segment, i) => {
    if (i % 2 === 0) return segment.trim() ? <Markdown key={i} source={segment} /> : null;
    const zone = article.zones.find((item) => item.id === segment);
    const heroZone = HERO_PHOTO_ZONES[CHOICE_ARTICLES.indexOf(article)];
    return zone && zone.id !== heroZone ? <ChoiceImages key={zone.id} zone={zone} first={false} /> : null;
  })}</>;
}
const splitH3 = (content: string) => {
  const [intro, ...parts] = content.split(/^### /m);
  return { intro, items: parts.map((part) => { const nl = part.indexOf("\n"); return { title: part.slice(0, nl).trim(), body: part.slice(nl + 1) }; }) };
};
const stripStrong = (s: string) => s.replace(/\*\*/g, "").trim();
const takeZones = (source: string) => ({ text: source.replace(/\[choice-image:[^\]]+\]/g, ""), ids: [...source.matchAll(/\[choice-image:([^\]]+)\]/g)].map((m) => m[1]) });

const SectionTitle = ({ id, children }: { id?: string; children: React.ReactNode }) => <h2 id={id} className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-snug">{children}</h2>;

const USAGE_LINKS = [
  { icon: Tag, slug: "loupe-optique-ou-electronique/", title: "Étiquette ou prix", summary: "Une loupe à main peut suffire pour quelques mots." },
  { icon: Mail, slug: "personne-agee/", title: "Courrier ou facture", summary: "Suivre une ligne et retrouver facilement la suivante." },
  { icon: BookOpen, slug: "loupe-portable-ou-grand-ecran/", title: "Livre ou journal", summary: "Lire plusieurs paragraphes sans perdre le fil." },
  { icon: PenLine, slug: "lire-mains-libres/", title: "Écrire, coudre ou bricoler", summary: "Garder de la place pour les mains et les outils." },
];
const FAMILIES = [
  { photo: PHOTOS.nora, href: "/aides-lecture-bassevision/loupes-verre/", label: "Voir les loupes optiques" },
  { photo: PHOTOS.lina, href: "/aides-lecture-bassevision/loupes-verre/", label: "Voir les loupes optiques" },
  { photo: PHOTOS.amelie, href: "/aides-lecture-bassevision/loupes-electroniques/", label: "Voir les loupes électroniques" },
  { photo: PHOTOS.clip, href: "/aides-lecture-bassevision/lunettes-loupes/", label: "Voir les lunettes loupes" },
  { photo: PHOTOS.mezzo, href: "/aides-lecture-bassevision/tele-agrandisseurs/", label: "Voir les téléagrandisseurs" },
];

function HubBody({ article, sections }: { article: ChoiceArticle; sections: ReturnType<typeof splitChoiceSections> }) {
  const find = (re: RegExp) => sections.find((s) => re.test(s.title));
  const intro = sections.find((s) => !s.title);
  const usage = find(/^Quelle loupe pour quel usage/);
  const compare = find(/^Loupes optiques, électroniques/);
  const power = find(/^Pourquoi la loupe la plus puissante/);
  const lowVision = find(/^Loupe pour malvoyant/);
  const guides = find(/^Nos guides/);
  const faq = sections.find((s) => s.faq);
  const advice = find(/^Besoin d’un conseil/);
  const handled = [intro, usage, compare, power, lowVision, guides, faq, advice];
  const others = sections.filter((s) => !handled.includes(s));

  const tableLines = compare?.content.split("\n").filter((l) => /^\|/.test(l)) ?? [];
  const rows = tableLines.slice(2).map((l) => l.split("|").slice(1, -1).map((c) => c.trim()));
  const compareRest = compare?.content.split("\n").filter((l) => !/^\|/.test(l)).join("\n") ?? "";
  const guideItems = [...(guides?.content.matchAll(/^- \[([^\]]+)\]\(([^)]+)\)\s*—\s*(.+)$/gm) ?? [])];
  const guideRest = guides?.content.replace(/^- \[.+$/gm, "") ?? "";
  const powerParts = power ? takeZones(power.content) : null;

  return <>
    {usage && (() => { const { intro: u, items } = splitH3(usage.content); return <section id="usages" aria-labelledby="usages-title" className="bg-muted/50 border-y border-border py-12 scroll-mt-28">
      <div className="container max-w-6xl">
        <SectionTitle id="usages-title">Que souhaitez-vous lire ou faire ?</SectionTitle>
        {u.trim() && <div className="choice-prose"><Markdown source={u} /></div>}
        <ul className="choice-use-grid">
          {items.map((item, i) => { const link = USAGE_LINKS[i]; const target = CHOICE_ARTICLES.find((a) => a.path === CHOICE_HUB + link?.slug); const Icon = link?.icon ?? Search;
            return <li key={item.title} className="choice-card min-w-0 flex flex-col bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3"><span className="choice-icon shrink-0" aria-hidden="true"><Icon className="w-7 h-7" /></span><h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">{link?.title ?? item.title}</h3></div>
              <p className="text-xl leading-relaxed flex-1 mb-3">{link?.summary}</p>
              {target && <a href={target.path} className="choice-card-link mt-2 inline-flex items-start gap-2 text-lg font-bold text-primary underline underline-offset-4" aria-label={`Lire le guide : ${target.h1}`}><span>Lire le guide</span><ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0 mt-1" /></a>}
            </li>; })}
        </ul>
        <div className="choice-prose mx-auto mt-8">
          <div className="choice-usage-details"><SectionTitle>{usage.title}</SectionTitle>
            {intro && <Content article={article} source={intro.content} />}
            <Markdown source={usage.content} />
          </div>
        </div>
      </div>
    </section>; })()}

    {compare && <section id="comparatif" aria-labelledby="comparatif-title" className="container max-w-6xl py-12 scroll-mt-28">
      <SectionTitle id="comparatif-title">{compare.title}</SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {rows.map((row, i) => { const family = FAMILIES[i]; return <li key={row[0]} className="choice-card min-w-0 flex flex-col bg-card border border-border rounded-lg overflow-hidden">
           {family && <img src={family.photo.src} alt={family.photo.alt} width={family.photo.width} height={family.photo.height} loading="lazy" decoding="async" className="w-full h-32 object-contain bg-card border-b border-border" />}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-primary leading-snug mb-3">{stripStrong(row[0])}</h3>
             <p className="text-lg leading-relaxed mb-2"><strong>Adaptée à :</strong> {row[1]}</p>
            <p className="text-lg leading-relaxed mb-4 flex-1"><strong>À vérifier :</strong> {row[2]}</p>
            {family && <a href={family.href} className="inline-flex items-start gap-2 text-lg font-bold text-primary underline underline-offset-4">{family.label}<ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0 mt-1" /></a>}
          </div>
        </li>; })}
      </ul>
      <div className="choice-prose mx-auto"><Content article={article} source={compareRest} /></div>
    </section>}

    {power && powerParts && <section aria-labelledby="puissance-title" className="bg-muted/50 border-y border-border py-12">
       <div className="container max-w-6xl choice-teaching-layout">
        <div className="min-w-0"><p className="choice-step">Repère 1 · Grossissement et largeur de texte</p><SectionTitle id="puissance-title">{power.title}</SectionTitle><Markdown source={powerParts.text} /></div>
        <div className="min-w-0">{powerParts.ids.map((id) => { const zone = article.zones.find((z) => z.id === id); return zone ? <ChoiceImages key={id} zone={zone} first={false} /> : null; })}<FieldOfViewHTML /></div>
      </div>
    </section>}

    {lowVision && <section aria-labelledby="contraste-title" className="container max-w-6xl py-12">
       <div className="min-w-0"><p className="choice-step">Repère 2 · Grossir et contraster : deux fonctions distinctes</p><SectionTitle id="contraste-title">{lowVision.title}</SectionTitle>
         <FunctionCards /><ContrastModesHTML />
         <div className="choice-prose"><Content article={article} source={lowVision.content} /></div>
      </div>
    </section>}

    <section aria-labelledby="criteres-title" className="bg-primary text-primary-foreground py-12">
      <div className="container max-w-6xl">
        <h2 id="criteres-title" className="text-2xl md:text-3xl font-bold mb-8 leading-snug">Trois critères à retenir</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ icon: Eye, t: "Le champ de lecture", d: "Un grossissement suffisant sans perdre le fil de la lecture." },
            { icon: Sun, t: "Le contraste et l’éclairage", d: "Un reflet ou une lampe mal orientée peut gêner davantage qu’une différence de puissance." },
            { icon: Hand, t: "La maniabilité", d: "Facile à tenir, à déplacer et à utiliser chaque jour." }].map((c, i) => <li key={c.t} className="choice-criterion min-w-0 rounded-lg p-6">
            <span className="flex items-center gap-3 mb-3"><span className="choice-num" aria-hidden="true">{i + 1}</span><c.icon aria-hidden="true" className="w-7 h-7 text-secondary" /></span>
            <p className="text-xl font-bold mb-2">{c.t}</p><p className="text-lg leading-relaxed">{c.d}</p>
          </li>)}
        </ol>
      </div>
    </section>

    {others.map((s) => <section key={s.title} className="container py-10"><div className="choice-prose mx-auto">{s.title && <SectionTitle>{s.title}</SectionTitle>}<Content article={article} source={s.content} /></div></section>)}

    {guides && <section id="guides" aria-labelledby="guides-title" className="container max-w-6xl py-12 scroll-mt-28">
      <SectionTitle id="guides-title">{guides.title}</SectionTitle>
      <div className="choice-prose"><Markdown source={guides.content.split(/^- /m)[0]} /></div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {guideItems.map((m) => <li key={m[2]} className="min-w-0"><a href={localHref(m[2])} className="choice-guide-card h-full flex flex-col bg-card border border-border rounded-lg p-6">
          <span className="choice-icon mb-4" aria-hidden="true"><BookOpen /></span><span className="text-xl font-bold text-primary leading-snug mb-3">{m[1]}</span>
          <span className="text-lg leading-relaxed text-foreground flex-1">{m[3].replace(/\.$/, "")}.</span>
          <span className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-primary underline underline-offset-4">Lire le guide<ArrowRight aria-hidden="true" className="w-5 h-5" /></span>
        </a></li>)}
      </ul>
      <div className="choice-prose"><Markdown source={guideRest.replace(/^Chaque guide[^\n]*\n/m, "")} /></div>
    </section>}

    {faq && <section aria-labelledby="faq-title" className="container max-w-4xl py-10"><div className="choice-faq rounded-lg">
      <SectionTitle id="faq-title">{faq.title}</SectionTitle><Faq article={article} section={faq} />
    </div></section>}

    {advice && <section aria-labelledby="conseil-title" className="container max-w-4xl pb-14"><div className="choice-cta rounded-lg border border-border p-6 md:p-8">
      <SectionTitle id="conseil-title">{advice.title}</SectionTitle><Markdown source={advice.content} />
    </div></section>}
  </>;
}

function Faq({ article, section }: { article: ChoiceArticle; section: ReturnType<typeof splitChoiceSections>[number] }) {
  const intro = section.content.split(/^### /m)[0];
  return <>
    {intro.trim() && <Markdown source={intro} />}
    {section.questions.map((item) => <details key={item.q} className="choice-faq-item">
      <summary className="text-xl font-bold text-primary">{item.q}</summary>
      <div className="choice-faq-answer"><Content article={article} source={item.a} /></div>
    </details>)}
  </>;
}

const sectionKind = (title: string, content: string) => {
  if (/^Pour aller plus loin/.test(title)) return "further";
  if (/vérif|essai|Comparer|comparer/.test(title)) return "check";
  if (/^\|/m.test(content)) return "table";
  return "plain";
};

function GuideBody({ article, sections }: { article: ChoiceArticle; sections: ReturnType<typeof splitChoiceSections> }) {
  const siblings = CHOICE_ARTICLES.filter((a) => a.path !== article.path);
  const pageIndex = CHOICE_ARTICLES.indexOf(article);
  // V5.5 placement supersedes historical IMAGE_ZONE positions without changing editorial text.
  const slotFor = (title: string) => {
    if (pageIndex === 1 && /^Essayez avec/.test(title)) return "pa-02";
    if (pageIndex === 2 && !title) return "oe-01";
    if (pageIndex === 2 && /^La loupe électronique :/.test(title)) return "oe-02";
    if (pageIndex === 3 && /^Comment fonctionne/.test(title)) return "ls-02";
    if (pageIndex === 4 && /^Pour lire et écrire/.test(title)) return "ml-02";
    if (pageIndex === 5 && /^Quand choisir/.test(title)) return "el-02";
    if (pageIndex === 5 && /^Vérifier d’abord/.test(title)) return "el-03";
    if (pageIndex === 6 && /^La taille de la zone/.test(title)) return "te-01";
    if (pageIndex === 6 && /^Le grand écran n’est/.test(title)) return "te-03";
    return undefined;
  };
  return <article className="container max-w-6xl py-8 md:py-10">
    {sections.map((section, index) => {
      if (section.faq) return <section key={index} aria-label={section.title} className="choice-faq rounded-lg my-10 choice-prose mx-auto"><SectionTitle>{section.title}</SectionTitle><Faq article={article} section={section} /></section>;
      const content = takeZones(section.content).text;
      const kind = sectionKind(section.title, content);
      const slot = slotFor(section.title);
      const functions = /^La loupe électronique :/.test(section.title);
      const activity = /Pour lire à plat|Pour coudre|Pour travailler sous une lentille/.test(section.title);
      return <section key={index} className={`choice-section choice-${kind}${slot ? " choice-teaching" : ""}${activity ? " choice-activity" : ""}${functions ? " choice-distinct-functions" : ""}${slot ? "" : " choice-prose mx-auto"}`}>
        {kind === "check" && <p className="choice-badge">À vérifier</p>}
        {section.title && <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-6 leading-snug">{section.title}</h2>}
        <SectionCues title={section.title} />
        {functions && <FunctionCards />}
        <div className={slot ? "choice-teaching-layout" : ""}>
          <div className="min-w-0"><Content article={article} source={content} /></div>
          {slot && <div className="min-w-0"><PhotoBriefSlot id={slot} />{functions && <ContrastModesHTML />}</div>}
        </div>
        {!section.title && <GuideOpening index={pageIndex} />}
      </section>;
    })}
    <nav aria-labelledby="autres-guides" className="mt-12 pt-8 border-t border-border">
      <h2 id="autres-guides" className="text-2xl font-bold text-primary mb-5">Les autres guides du dossier</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {siblings.map((a) => <li key={a.path} className="min-w-0"><a href={a.path} className="choice-guide-card h-full flex items-start justify-between gap-3 bg-card border border-border rounded-lg p-5 text-lg font-bold text-primary leading-snug">
          <span>{a.path === CHOICE_HUB ? `Guide principal : ${a.h1}` : a.h1}</span><ArrowRight aria-hidden="true" className="w-5 h-5 shrink-0 mt-1" />
        </a></li>)}
      </ul>
    </nav>
  </article>;
}

export default function ChoiceArticlePage() {
  const { pathname } = useLocation();
  const article = getChoiceArticle(pathname);
  if (!article) return <NotFound />;
  const isHub = article.path === CHOICE_HUB;
  const presentation = CHOICE_PRESENTATION[CHOICE_ARTICLES.indexOf(article)] ?? CHOICE_PRESENTATION[0];
  const photo = PHOTOS[presentation.photo];
  const sections = splitChoiceSections(article.body);
  const heroZoneId = HERO_PHOTO_ZONES[CHOICE_ARTICLES.indexOf(article)];
  const heroZone = article.zones.find((zone) => zone.id === heroZoneId);
  const introText = sections[0]?.content.replace(/\*\*/g, "").trim() ?? "";
  const repeatedLead = introText.startsWith(presentation.lead);
  return <div className="min-h-screen">
    <SEOHead /><Header />
    <main id="main-content" className="choice-article">
      <ChoiceEditorialContext key={article.path}>
      <nav className="bg-muted border-b border-border py-3" aria-label="Fil d’Ariane">
        <ol className="container flex flex-wrap gap-x-2 gap-y-1 text-lg leading-relaxed">
          {article.crumbs.map((crumb, i) => <li key={crumb} className="inline-flex gap-2 items-start">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i === article.crumbs.length - 1 ? <span aria-current="page" className="font-semibold">{crumb}</span> : <a href={i === 0 ? "/" : CHOICE_HUB} className="text-primary underline underline-offset-4">{crumb}</a>}
          </li>)}
        </ol>
      </nav>
      <header className="choice-hero py-8 md:py-12">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-center">
          <div className="min-w-0">
            <p className="text-primary font-bold text-lg mb-3">{isHub ? "Le guide LIRELIA des aides à la lecture" : "Bien choisir son aide à la lecture"}</p>
             <h1 className="text-3xl md:text-4xl text-primary font-bold leading-snug mb-5">{article.h1.replace(/\s+([?!:;])/g, "\u00a0$1")}</h1>
             {!isHub && !repeatedLead && <p className="text-xl leading-relaxed mb-6">{presentation.lead}</p>}
            {isHub && <p className="text-xl leading-relaxed mb-6">Étiquette, courrier, livre ou travail manuel : partez de ce que vous voulez lire, puis comparez les solutions.</p>}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button variant="secondary" asChild><a href={isHub ? "#usages" : "#essentiel"}>{isHub ? "Choisir selon mon usage" : "Les points à vérifier"}<ArrowRight aria-hidden="true" /></a></Button>
              {isHub && <a href="#comparatif" className="text-lg font-semibold underline underline-offset-4 decoration-secondary">Comparer les solutions</a>}
            </div>
          </div>
           <div className="min-w-0">
             {heroZone ? <ChoiceImages zone={heroZone} first /> : <figure className="min-w-0">
               <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="eager" className="choice-hero-photo w-full object-contain bg-card rounded-lg" />
               <figcaption className="text-lg mt-3">{photo.caption} — illustration du matériel</figcaption>
             </figure>}
           </div>
        </div>
      </header>
      {!isHub && <section id="essentiel" className="bg-muted/50 border-b border-border py-8 scroll-mt-28" aria-labelledby="choice-essentials">
        <div className="container max-w-4xl">
          <h2 id="choice-essentials" className="text-2xl font-bold text-primary mb-5">En un coup d’œil</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {presentation.essentials.map((item) => <li key={item} className="flex items-start gap-3 text-xl leading-relaxed"><Check className="text-primary w-6 h-6 shrink-0 mt-1" aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>}
      {isHub ? <HubBody article={article} sections={sections} /> : <GuideBody article={article} sections={sections} />}
      </ChoiceEditorialContext>
    </main><Footer />
  </div>;
}
