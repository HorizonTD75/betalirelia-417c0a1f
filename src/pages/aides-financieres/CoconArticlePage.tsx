import { Link, useLocation } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowRight, ArrowLeft, ChevronRight, Info, ScanSearch, FileText, Scale, Home, Briefcase, ListChecks, type LucideIcon,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { COCON_HUB_PATH, getCoconArticle } from "@/content/aides-financieres/articles";

/* ------------------------------------------------------------------ */
/* Markdown rendering                                                  */
/* ------------------------------------------------------------------ */
type HNode = { type: string; tagName?: string; children?: HNode[]; properties?: Record<string, unknown>; value?: string };
const textOf = (n: HNode): string => (n.type === "text" ? n.value ?? "" : (n.children ?? []).map(textOf).join(""));
const rehypeTableLabels = () => (tree: HNode) => {
  const visit = (n: HNode) => {
    if (n.tagName === "table") {
      const rows: HNode[] = [];
      const collect = (x: HNode) => (x.tagName === "tr" ? rows.push(x) : (x.children ?? []).forEach(collect));
      collect(n);
      const head = rows[0]?.children?.filter((c) => c.tagName === "th").map(textOf) ?? [];
      rows.slice(1).forEach((r) =>
        r.children?.filter((c) => c.tagName === "td").forEach((td, i) => {
          td.properties = { ...(td.properties ?? {}), dataLabel: head[i] ?? "" };
        }),
      );
    }
    n.children?.forEach(visit);
  };
  visit(tree);
};

const isInternal = (href = "") => href.startsWith("/") || href.startsWith("#");
const linkCls = "font-semibold text-primary underline underline-offset-4 decoration-2 hover:decoration-secondary";

const components: Components = {
  h3: ({ children }) => (
    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-10 mb-3 leading-snug">{children}</h3>
  ),
  p: ({ children }) => <p className="text-lg md:text-xl leading-[1.65] text-foreground mb-5">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-7 space-y-2 mb-6 text-lg md:text-xl leading-[1.65]">{children}</ul>,
  ol: ({ children }) => <ol className="cocon-steps mb-6 text-lg md:text-xl leading-[1.6]">{children}</ol>,
  strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
  blockquote: ({ children }) => (
    <aside className="my-8 rounded-xl border-l-8 border-secondary bg-card border border-border p-5 md:p-6 [&_p]:mb-0 [&_p+p]:mt-3">
      <div className="flex gap-3">
        <Info className="w-7 h-7 shrink-0 text-primary mt-1" aria-hidden="true" />
        <div className="min-w-0">{children}</div>
      </div>
    </aside>
  ),
  a: ({ href = "", children }) =>
    isInternal(href) ? (
      href.startsWith("#") ? <a href={href} className={linkCls}>{children}</a> : <Link to={href} className={linkCls}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${linkCls} break-words`}>
        {children}
        <span className="sr-only"> (ouvre un nouvel onglet)</span>
      </a>
    ),
  table: ({ children }) => (
    <div className="cocon-table my-8 md:overflow-x-auto">
      <table className="w-full border-collapse text-lg bg-card">{children}</table>
    </div>
  ),
  th: ({ children, style }) => (
    <th scope="col" style={style} className="bg-primary text-primary-foreground font-bold p-4 align-top">{children}</th>
  ),
  td: ({ children, style, ...props }) => (
    <td style={style} data-label={(props as Record<string, unknown>)["data-label"] as string} className="border border-border p-4 align-top leading-relaxed text-foreground">
      {children}
    </td>
  ),
};

const Markdown = ({ source }: { source: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeTableLabels]} components={components}>
    {source}
  </ReactMarkdown>
);

/** Inline markdown (no wrapping <p>). */
const Inline = ({ source }: { source: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ ...components, p: ({ children }) => <>{children}</> }}>
    {source}
  </ReactMarkdown>
);

/* ------------------------------------------------------------------ */
/* Body parsing: H2 sections, tables                                   */
/* ------------------------------------------------------------------ */
const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "-")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

interface Section { title: string; id: string; md: string }
const splitSections = (body: string) => {
  const parts = body.split(/^## /m);
  const intro = parts.shift() ?? "";
  const sections: Section[] = parts.map((p) => {
    const nl = p.indexOf("\n");
    const title = (nl === -1 ? p : p.slice(0, nl)).trim();
    return { title, id: slugify(title), md: nl === -1 ? "" : p.slice(nl + 1).trim() };
  });
  return { intro: intro.trim(), sections };
};

/** First paragraph of the intro becomes the hero lede (moved, not duplicated). */
const extractLede = (intro: string) => {
  const blocks = intro.split(/\n\s*\n/);
  if (blocks[0] && !/^[>#|-]/.test(blocks[0].trim())) {
    return { lede: blocks[0].trim(), rest: blocks.slice(1).join("\n\n").trim() };
  }
  return { lede: "", rest: intro };
};

interface Table { head: string[]; rows: string[][]; raw: string }
type Segment = { kind: "md"; md: string } | { kind: "table"; table: Table };
const cells = (line: string) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
const splitTables = (md: string): Segment[] => {
  const lines = md.split("\n");
  const out: Segment[] = [];
  let buf: string[] = [];
  let i = 0;
  const flush = () => { if (buf.join("").trim()) out.push({ kind: "md", md: buf.join("\n") }); buf = []; };
  while (i < lines.length) {
    if (lines[i].trim().startsWith("|") && lines[i + 1]?.trim().match(/^\|[\s:|-]+\|$/)) {
      flush();
      const tl: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) tl.push(lines[i++]);
      out.push({ kind: "table", table: { head: cells(tl[0]), rows: tl.slice(2).map(cells), raw: tl.join("\n") } });
    } else buf.push(lines[i++]);
  }
  flush();
  return out;
};
/** Tables whose rows start with a bold label read better as comparison panels. */
const isPanelTable = (t: Table) => t.head.length <= 3 && t.rows.length <= 6 && t.rows.every((r) => r[0]?.startsWith("**"));

const panelId = (label: string) => `profil-${slugify(label.replace(/\*\*/g, "").split("—")[0])}`;

const Panels = ({ table, anchors }: { table: Table; anchors?: boolean }) => (
  <>
    {anchors && (
      <nav aria-label="Accès par situation" className="my-6">
        <p className="font-bold text-lg mb-3">Votre situation :</p>
        <ul className="flex flex-wrap gap-3 list-none p-0">
          {table.rows.map((r) => (
            <li key={r[0]}>
              <a href={`#${panelId(r[0])}`} className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                {r[0].replace(/\*\*/g, "")}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 list-none p-0">
      {table.rows.map((r) => (
        <li key={r[0]} id={anchors ? panelId(r[0]) : undefined} className="min-w-0 rounded-xl bg-card border-2 border-border border-t-4 border-t-primary p-5">
          <p className="font-serif text-xl font-bold text-primary mb-3 leading-snug [&_strong]:text-primary"><Inline source={r[0]} /></p>
          <dl className="space-y-3">
            {r.slice(1).map((c, i) => (
              <div key={i}>
                <dt className="text-base font-bold uppercase tracking-wide text-muted-foreground">{table.head[i + 1]}</dt>
                <dd className="text-lg leading-relaxed mt-1"><Inline source={c} /></dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  </>
);

const SectionBody = ({ md, anchors }: { md: string; anchors?: boolean }) => (
  <>
    {splitTables(md).map((s, i) =>
      s.kind === "md" ? <Markdown key={i} source={s.md} /> : isPanelTable(s.table) ? <Panels key={i} table={s.table} anchors={anchors} /> : <Markdown key={i} source={s.table.raw} />,
    )}
  </>
);

/* ------------------------------------------------------------------ */
/* Presentation map (UI labels only — no editorial content)            */
/* ------------------------------------------------------------------ */
const H = (p: string) => `${COCON_HUB_PATH}${p}`;
const PAGE_UI: Record<string, { kicker: string; cta?: { label: string; match: RegExp } }> = {
  [COCON_HUB_PATH]: { kicker: "Guide des aides financières" },
  [H("/financer-aide-visuelle")]: { kicker: "Financer un équipement", cta: { label: "Comparer les pistes de financement", match: /autres pistes/i } },
  [H("/dossier-mdph-pch")]: { kicker: "Dossier MDPH / PCH", cta: { label: "Voir les démarches", match: /formulaires/i } },
  [H("/aides-sociales-droits")]: { kicker: "Droits et allocations", cta: { label: "Comparer les dispositifs", match: /différences/i } },
  [H("/adapter-logement")]: { kicker: "Adapter son logement", cta: { label: "Voir le parcours des démarches", match: /parcours concret/i } },
  [H("/travail-etudes")]: { kicker: "Travail, études et formation", cta: { label: "Trouver mon interlocuteur", match: /interlocuteur/i } },
};
const CARD_ICONS: Record<string, LucideIcon> = {
  "financer-aide-visuelle": ScanSearch, "dossier-mdph-pch": FileText, "aides-sociales-droits": Scale,
  "adapter-logement": Home, "travail-etudes": Briefcase,
};
const iconFor = (href: string) => CARD_ICONS[href.split("/").filter(Boolean).pop() ?? ""] ?? ArrowRight;

/** MDPH page: navigation strip pointing to the existing sections. */
const MDPH_STEPS: { label: string; match: RegExp }[] = [
  { label: "Comprendre et décrire les besoins", match: /expliquer concrètement/i },
  { label: "Réunir les pièces", match: /formulaires/i },
  { label: "Déposer le dossier", match: /déposer/i },
  { label: "Suivre la décision", match: /instruction/i },
];

const sectionVariant = (s: Section) => {
  if (/^questions fréquentes/i.test(s.title)) return "faq";
  if (/^sources/i.test(s.title)) return "sources";
  if (/pendant (les délais|l'attente|l'instruction)|et pendant/i.test(s.title)) return "reassure";
  if (/^\s*\|/m.test(s.md) || /^\d\. /m.test(s.md)) return "band";
  return "plain";
};

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="cocon-h2 font-serif text-2xl md:text-3xl font-bold text-foreground mb-5 leading-snug">{children}</h2>
);

const ArticleSection = ({ s, anchors }: { s: Section; anchors?: boolean }) => {
  const v = sectionVariant(s);
  const wrap: Record<string, string> = {
    plain: "mt-14",
    band: "mt-14 rounded-2xl bg-muted/60 px-5 py-8 md:px-8 -mx-1 md:-mx-4",
    reassure: "mt-14 rounded-2xl bg-card border-2 border-border border-l-8 border-l-secondary px-5 py-7 md:px-8",
    faq: "mt-16 rounded-2xl bg-muted/60 px-5 py-8 md:px-8 cocon-faq",
    sources: "mt-14 pt-8 border-t-2 border-border cocon-sources",
  };
  return (
    <section aria-labelledby={s.id} className={wrap[v]}>
      <H2 id={s.id}>{s.title}</H2>
      <SectionBody md={s.md} anchors={anchors} />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Hub page                                                            */
/* ------------------------------------------------------------------ */
interface PathCard { title: string; text: string; href: string; cta: string; tags: string[] }

const HubPage = ({ rest, sections }: { rest: string; sections: Section[] }) => {
  const pathIdx = sections.findIndex((s) => /^quelle aide correspond/i.test(s.title));
  const namesIdx = sections.findIndex((s) => /connaissez déjà le nom/i.test(s.title));
  const stepsIdx = sections.findIndex((s) => /comment avancer/i.test(s.title));
  const names = namesIdx >= 0 ? splitTables(sections[namesIdx].md).find((x) => x.kind === "table") : undefined;
  const nameRows = names?.kind === "table" ? names.table.rows.map((r) => {
    const link = r[1].match(/\[(.+?)\]\((.+?)\)/);
    return { tags: r[0].replace(/\*\*/g, "").split(/,\s*/), label: link?.[1] ?? r[1], href: link?.[2] ?? COCON_HUB_PATH };
  }) : [];

  const pathSec = sections[pathIdx];
  const blocks = pathSec ? pathSec.md.split(/^### /m) : [];
  const pathIntro = blocks.shift()?.trim() ?? "";
  const cards: PathCard[] = blocks.map((b) => {
    const [titleLine, ...r] = b.split("\n");
    const content = r.join("\n").trim();
    const link = content.match(/\[\*\*(.+?)\*\*\]\((\/[^)]+)\)/);
    const href = link?.[2] ?? COCON_HUB_PATH;
    const tags = nameRows.find((n) => n.href.replace(/\/$/, "") === href.replace(/\/$/, ""))?.tags.slice(0, 3) ?? [];
    return { title: titleLine.trim(), text: content.replace(/\[\*\*.+?\*\*\]\(\/[^)]+\)/, "").trim(), href, cta: link?.[1] ?? "", tags };
  });

  const others = sections.filter((_, i) => i !== pathIdx && i !== namesIdx && i !== stepsIdx);
  const steps = sections[stepsIdx];

  return (
    <div className="container py-10 md:py-14">
      <div className="max-w-6xl mx-auto min-w-0">
        {rest && <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-10 lg:items-start [&>aside]:lg:my-0 [&>p:last-of-type]:mb-0"><Markdown source={rest} /></div>}

        {pathSec && (
          <section id="parcours" aria-labelledby={pathSec.id} className="mt-10">
            <H2 id={pathSec.id}>{pathSec.title}</H2>
            <div className="max-w-3xl"><Markdown source={pathIntro} /></div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 list-none p-0">
              {cards.map((c, i) => {
                const Icon = iconFor(c.href);
                return (
                  <li key={c.href} className={`min-w-0 relative flex flex-col rounded-2xl border-2 border-border bg-card p-6 md:p-7 transition-colors hover:border-primary focus-within:border-primary focus-within:ring-4 focus-within:ring-secondary ${i === cards.length - 1 && cards.length % 2 === 1 ? "md:col-span-2" : ""}`}>
                    <div className="flex items-start gap-4 mb-3">
                      <span className="w-14 h-14 shrink-0 rounded-full bg-secondary/25 text-primary flex items-center justify-center" aria-hidden="true">
                        <Icon className="w-7 h-7" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug pt-2">
                        <Link to={c.href} className="focus:outline-none after:absolute after:inset-0 after:rounded-2xl">{c.title}</Link>
                      </h3>
                    </div>
                    <div className="[&_p]:text-lg [&_p]:mb-4 flex-1"><Markdown source={c.text} /></div>
                    {c.tags.length > 0 && (
                      <p className="text-base font-semibold text-muted-foreground mb-3">{c.tags.join(" · ")}</p>
                    )}
                    <span className="inline-flex items-center gap-2 font-bold text-primary text-lg" aria-hidden="true">
                      {c.cta} <ArrowRight className="w-5 h-5" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {namesIdx >= 0 && (
          <section aria-labelledby={sections[namesIdx].id} className="mt-16">
            <H2 id={sections[namesIdx].id}>{sections[namesIdx].title}</H2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
              {nameRows.map((n) => (
                <li key={n.href} className="min-w-0">
                  <Link to={n.href} className="group flex h-full flex-col justify-between gap-2 min-h-[44px] rounded-xl border-2 border-border bg-card px-5 py-4 hover:border-primary">
                    <span className="font-bold text-lg text-foreground">{n.tags.join(", ")}</span>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-lg underline underline-offset-4">
                      {n.label} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {steps && (
          <section aria-labelledby={steps.id} className="mt-16 rounded-2xl bg-muted/60 px-5 py-8 md:px-10 md:py-10 cocon-hub-steps">
            <H2 id={steps.id}>{steps.title}</H2>
            <SectionBody md={steps.md} />
          </section>
        )}

        <div className="max-w-3xl">
          {others.map((s) => <ArticleSection key={s.id} s={s} />)}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Child article page                                                  */
/* ------------------------------------------------------------------ */
const Toc = ({ sections }: { sections: Section[] }) => (
  <ol className="space-y-1 list-none p-0">
    {sections.map((s) => (
      <li key={s.id}>
        <a href={`#${s.id}`} className="block min-h-[44px] py-2 pl-3 border-l-4 border-transparent hover:border-secondary text-lg leading-snug text-foreground hover:text-primary underline-offset-4 hover:underline">
          {s.title}
        </a>
      </li>
    ))}
  </ol>
);

const BackLink = () => (
  <Link to={`${COCON_HUB_PATH}/`} className="inline-flex items-center gap-2 font-bold text-primary text-lg underline underline-offset-4 min-h-[44px]">
    <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" /> Retour à toutes les aides
  </Link>
);

const ChildPage = ({ path, rest, sections }: { path: string; rest: string; sections: Section[] }) => {
  const toc = sections.filter((s) => !/^sources/i.test(s.title)).slice(0, 8);
  const isMdph = path.endsWith("/dossier-mdph-pch");
  const isWork = path.endsWith("/travail-etudes");
  const mdphSteps = isMdph ? MDPH_STEPS.map((st) => ({ ...st, id: sections.find((s) => st.match.test(s.title))?.id })).filter((s) => s.id) : [];

  return (
    <div className="container py-10 md:py-14">
      <div className="max-w-6xl mx-auto xl:grid xl:grid-cols-[minmax(0,46rem)_18rem] xl:gap-16 xl:justify-between">
        <div className="min-w-0 max-w-3xl">
          <details className="xl:hidden mb-8 rounded-xl border-2 border-border bg-card">
            <summary className="flex items-center gap-2 cursor-pointer min-h-[52px] px-5 font-bold text-lg text-primary">
              <ListChecks className="w-6 h-6" aria-hidden="true" /> Dans cet article
            </summary>
            <div className="px-4 pb-4"><Toc sections={toc} /></div>
          </details>

          {rest && <Markdown source={rest} />}

          {mdphSteps.length > 0 && (
            <nav aria-label="Les étapes du dossier" className="my-10">
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                {mdphSteps.map((st, i) => (
                  <li key={st.label} className="min-w-0">
                    <a href={`#${st.id}`} className="flex h-full items-start gap-3 min-h-[44px] rounded-xl border-2 border-border bg-card p-4 hover:border-primary">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                      <span className="font-semibold text-lg leading-snug text-foreground"><span className="sr-only">Étape {i + 1} : </span>{st.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {sections.map((s, i) => <ArticleSection key={s.id} s={s} anchors={isWork && i === 0} />)}

          <p className="mt-12 pt-8 border-t-2 border-border text-lg">
            <Link to={`${COCON_HUB_PATH}/`} className="inline-flex items-center gap-2 font-bold text-primary underline underline-offset-4">
              Retour au guide des aides financières pour les personnes malvoyantes
            </Link>
          </p>
        </div>

        <aside className="hidden xl:block" aria-label="Navigation de l'article">
          <div className="sticky top-40 max-h-[calc(100vh-11rem)] overflow-y-auto rounded-2xl border-2 border-border bg-card p-5">
            <p className="font-serif text-xl font-bold text-foreground mb-3">Dans cet article</p>
            <Toc sections={toc} />
            <div className="mt-5 pt-4 border-t-2 border-border"><BackLink /></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
const CoconArticlePage = () => {
  const { pathname } = useLocation();
  const article = getCoconArticle(pathname);
  if (!article) return <NotFound />;

  const isHub = article.path === COCON_HUB_PATH;
  const { intro, sections } = splitSections(article.body);
  const { lede, rest } = extractLede(intro);
  const ui = PAGE_UI[article.path] ?? { kicker: "Guide des aides financières" };
  const ctaTarget = isHub ? "parcours" : ui.cta ? sections.find((s) => ui.cta!.match.test(s.title))?.id : undefined;
  const ctaLabel = isHub ? "Trouver l'aide adaptée" : ui.cta?.label;
  const crumbs = article.breadcrumb;

  return (
    <div className="min-h-screen overflow-x-hidden [&_main]:[word-break:normal] [&_main]:[overflow-wrap:anywhere]">
      <SEOHead />
      <Header />
      <main id="main-content">
        <section className="bg-primary text-primary-foreground py-8 md:py-10">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <nav aria-label="Fil d'Ariane" className="mb-4 text-base">
                <ol className="flex flex-wrap items-center gap-1.5 text-primary-foreground/90">
                  {crumbs.map((c, i) => {
                    const last = i === crumbs.length - 1;
                    return (
                      <li key={c.url} className="flex items-center gap-1.5">
                        {last ? (
                          <span aria-current="page" className="font-semibold">{c.label}</span>
                        ) : (
                          <>
                            <Link to={c.url} className="underline underline-offset-4 hover:text-secondary">{c.label}</Link>
                            <ChevronRight className="w-4 h-4" aria-hidden="true" />
                          </>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
              <p className="inline-flex items-center gap-2 text-secondary font-bold text-lg mb-3">
                <span className="w-8 h-1 rounded-full bg-secondary" aria-hidden="true" />
                {ui.kicker}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-4xl">{article.h1}</h1>
            </div>
          </div>
        </section>

        {(lede || ctaTarget) && (
          <div className="bg-card border-b-2 border-border">
            <div className="container py-7 md:py-8">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
                {lede && (
                  <div className="max-w-3xl text-xl md:text-[1.35rem] leading-[1.6] [&_p]:mb-0 [&_p]:text-[inherit] [&_p]:leading-[inherit]">
                    <Markdown source={lede} />
                  </div>
                )}
                {ctaTarget && ctaLabel && (
                  <a href={`#${ctaTarget}`} className="inline-flex shrink-0 self-start lg:self-center items-center gap-2 min-h-[52px] px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/90 lg:ml-auto">
                    {ctaLabel} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <article>
          {isHub ? <HubPage rest={rest} sections={sections} /> : <ChildPage path={article.path} rest={rest} sections={sections} />}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CoconArticlePage;
