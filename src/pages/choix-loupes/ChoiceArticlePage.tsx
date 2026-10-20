import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import ChoiceImages from "@/components/choix-loupes/ChoiceImages";
import { CHOICE_HUB, getChoiceArticle } from "@/content/choix-loupes/articles";
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
const components: Components = {
  p: ({ children }) => <p className="text-xl leading-relaxed mb-5">{children}</p>,
  h2: ({ children }) => <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 leading-snug">{children}</h2>,
  h3: ({ children }) => <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 leading-snug">{children}</h3>,
  ul: ({ children }) => <ul className="list-disc pl-7 space-y-3 text-xl leading-relaxed mb-6 marker:text-primary">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-7 space-y-3 text-xl leading-relaxed mb-6 marker:font-bold marker:text-primary">{children}</ol>,
  a: ({ href = "", children }) => <a href={href.replace(/^https:\/\/lirelia\.fr(?=\/)/, "")} className="text-primary font-semibold underline underline-offset-4 decoration-2 hover:decoration-secondary">{children}</a>,
  table: ({ children }) => <div className="choice-table my-8"><table className="w-full border-collapse text-lg bg-card">{children}</table></div>,
  th: ({ children }) => <th scope="col" className="bg-primary text-primary-foreground font-bold p-4 text-left align-top">{children}</th>,
  td: ({ children, ...props }) => <td data-label={(props as Record<string, unknown>)["data-label"] as string} className="p-4 border border-border align-top leading-relaxed">{children}</td>,
};
const Markdown = ({ source }: { source: string }) => <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[tableLabels]} components={components}>{source}</ReactMarkdown>;

export default function ChoiceArticlePage() {
  const { pathname } = useLocation();
  const article = getChoiceArticle(pathname);
  if (!article) return <NotFound />;
  const segments = article.body.split(/\[choice-image:([^\]]+)\]/);
  return <div className="min-h-screen">
    <SEOHead /><Header />
    <main id="main-content" className="choice-article">
      <nav className="bg-muted border-b border-border py-3" aria-label="Fil d’Ariane">
        <ol className="container flex flex-wrap gap-x-2 gap-y-1 text-lg leading-relaxed">
          {article.crumbs.map((crumb, i) => <li key={crumb} className="inline-flex gap-2 items-start">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i === article.crumbs.length - 1 ? <span aria-current="page" className="font-semibold">{crumb}</span> : <a href={i === 0 ? "/" : CHOICE_HUB} className="text-primary underline underline-offset-4">{crumb}</a>}
          </li>)}
        </ol>
      </nav>
      <header className="bg-primary text-primary-foreground py-10 md:py-12">
        <div className="container"><div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-snug">{article.h1}</h1>
        </div></div>
      </header>
      <article className="container py-8 md:py-10"><div className="max-w-4xl mx-auto">
        {segments.map((segment, i) => {
          if (i % 2 === 0) return <div key={i} className={article.path === CHOICE_HUB ? "choice-hub-text" : undefined}><Markdown source={segment} /></div>;
          const zone = article.zones.find((z) => z.id === segment);
          return zone ? <ChoiceImages key={zone.id} zone={zone} first={zone.id === article.zones[0]?.id} /> : null;
        })}
        <p className="mt-10 pt-6 border-t border-border text-lg"><a href="/qui-sommes-nous/" className="text-primary underline underline-offset-4">Qui sommes-nous ?</a></p>
      </div></article>
    </main><Footer />
  </div>;
}