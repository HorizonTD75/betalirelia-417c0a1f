import { Link, useLocation } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowRight, ChevronRight, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { COCON_HUB_PATH, getCoconArticle } from "@/content/aides-financieres/articles";

/* ---- rehype: copy each column header into data-label (mobile cards) ---- */
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

const isInternal = (href = "") => href.startsWith("/");

const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-14 mb-5 leading-snug">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-9 mb-3 leading-snug">{children}</h3>
  ),
  p: ({ children }) => <p className="text-lg md:text-xl leading-relaxed text-foreground mb-5">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-7 space-y-2 mb-6 text-lg md:text-xl leading-relaxed">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-7 space-y-3 mb-6 text-lg md:text-xl leading-relaxed">{children}</ol>,
  strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
  blockquote: ({ children }) => (
    <aside className="cocon-callout my-8 rounded-xl border-l-8 border-secondary bg-secondary/10 p-5 md:p-6 [&_p]:mb-0 [&_p+p]:mt-3">
      <div className="flex gap-3">
        <Info className="w-7 h-7 shrink-0 text-primary mt-1" aria-hidden="true" />
        <div>{children}</div>
      </div>
    </aside>
  ),
  a: ({ href = "", children }) =>
    isInternal(href) ? (
      <Link to={href} className="font-semibold text-primary underline underline-offset-4 decoration-2 hover:decoration-secondary">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary underline underline-offset-4 decoration-2 hover:decoration-secondary break-words"
      >
        {children}
        <span className="sr-only"> (ouvre un nouvel onglet)</span>
      </a>
    ),
  table: ({ children }) => (
    <div className="cocon-table my-8 md:overflow-x-auto">
      <table className="w-full border-collapse text-lg">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th scope="col" className="bg-primary text-primary-foreground text-left font-bold p-4 align-top">
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td data-label={(props as Record<string, unknown>)["data-label"] as string} className="border border-border p-4 align-top leading-relaxed text-foreground">
      {children}
    </td>
  ),
};

const Markdown = ({ source }: { source: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeTableLabels]} components={components}>
    {source}
  </ReactMarkdown>
);

/* ---- Hub: turn the « Quelle aide correspond… » H3 blocks into 5 cards ---- */
interface PathCard { title: string; text: string; href: string; cta: string }
const splitHub = (body: string) => {
  const re = /(^## Quelle aide correspond[^\n]*\n)([\s\S]*?)(?=^## )/m;
  const m = body.match(re);
  if (!m || m.index === undefined) return null;
  const blocks = m[2].split(/^### /m);
  const intro = blocks.shift()!.trim();
  const cards: PathCard[] = blocks.map((b) => {
    const [titleLine, ...rest] = b.split("\n");
    const content = rest.join("\n").trim();
    const link = content.match(/\[\*\*(.+?)\*\*\]\((\/[^)]+)\)/);
    return {
      title: titleLine.trim(),
      text: content.replace(/\[\*\*.+?\*\*\]\(\/[^)]+\)/, "").trim(),
      href: link?.[2] ?? COCON_HUB_PATH,
      cta: link?.[1] ?? "",
    };
  });
  return {
    before: body.slice(0, m.index),
    heading: m[1].replace(/^## /, "").trim(),
    intro,
    cards,
    after: body.slice(m.index + m[0].length),
  };
};

const PathCards = ({ cards }: { cards: PathCard[] }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 list-none p-0">
    {cards.map((c) => (
      <li key={c.href} className="min-w-0 relative rounded-2xl border-2 border-border bg-card p-6 shadow-sm transition-colors hover:border-primary focus-within:border-primary focus-within:ring-4 focus-within:ring-secondary">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
          <Link to={c.href} className="focus:outline-none after:absolute after:inset-0 after:rounded-2xl">
            {c.title}
          </Link>
        </h3>
        <div className="[&_p]:text-lg [&_p]:mb-4">
          <Markdown source={c.text} />
        </div>
        <span className="inline-flex items-center gap-2 font-bold text-primary text-lg" aria-hidden="true">
          {c.cta} <ArrowRight className="w-5 h-5" />
        </span>
      </li>
    ))}
  </ul>
);

const CoconArticlePage = () => {
  const { pathname } = useLocation();
  const article = getCoconArticle(pathname);
  if (!article) return <NotFound />;

  const isHub = article.path === COCON_HUB_PATH;
  const hub = isHub ? splitHub(article.body) : null;
  const crumbs = article.breadcrumb;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead />
      <Header />
      <main id="main-content">
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-base md:text-lg">
              <ol className="flex flex-wrap items-center gap-1.5">
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
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">{article.h1}</h1>
          </div>
        </section>

        <article className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto min-w-0">
            {hub ? (
              <>
                <Markdown source={hub.before} />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-14 mb-5 leading-snug">{hub.heading}</h2>
                <Markdown source={hub.intro} />
                <PathCards cards={hub.cards} />
                <Markdown source={hub.after} />
              </>
            ) : (
              <Markdown source={article.body} />
            )}

            {!isHub && (
              <p className="mt-12 pt-8 border-t-2 border-border text-lg">
                <Link to={`${COCON_HUB_PATH}/`} className="inline-flex items-center gap-2 font-bold text-primary underline underline-offset-4">
                  Retour au guide des aides financières pour les personnes malvoyantes
                </Link>
              </p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CoconArticlePage;
