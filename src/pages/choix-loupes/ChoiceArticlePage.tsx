import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { CHOICE_PRESENTATION, splitChoiceSections } from "@/content/choix-loupes/presentation";
import { PHOTOS } from "@/components/choix-loupes/ChoiceImages";
import ChoiceImages from "@/components/choix-loupes/ChoiceImages";
import { CHOICE_HUB, CHOICE_ARTICLES, getChoiceArticle } from "@/content/choix-loupes/articles";
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
  const presentation = CHOICE_PRESENTATION[CHOICE_ARTICLES.indexOf(article)] ?? CHOICE_PRESENTATION[0];
  const photo = PHOTOS[presentation.photo];
  const sections = splitChoiceSections(article.body);
  const renderContent = (content: string) => content.split(/\[choice-image:([^\]]+)\]/).map((segment, i) => {
    if (i % 2 === 0) return <Markdown key={i} source={segment} />;
    const zone = article.zones.find((item) => item.id === segment);
    return zone ? <ChoiceImages key={zone.id} zone={zone} first={false} /> : null;
  });
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
      <header className="choice-hero bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-center">
          <div>
            <p className="text-secondary font-bold text-lg mb-3">Bien choisir son aide à la lecture</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-5">{article.h1}</h1>
            <p className="text-xl leading-relaxed mb-6">{presentation.lead}</p>
            <Button variant="secondary" asChild><a href={article.path === CHOICE_HUB ? "#usages" : "#essentiel"}>{article.path === CHOICE_HUB ? "Choisir selon mon usage" : "Les points à vérifier"}<ArrowRight aria-hidden="true" /></a></Button>
          </div>
          <figure className="min-w-0">
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="eager" className="w-full h-56 md:h-80 object-contain bg-card" />
            <figcaption className="text-lg mt-3">{photo.caption}</figcaption>
          </figure>
        </div>
      </header>
      <section id="essentiel" className="bg-muted/50 border-b border-border py-8 scroll-mt-28" aria-labelledby="choice-essentials">
        <div className="container max-w-5xl">
          <h2 id="choice-essentials" className="text-2xl font-bold text-primary mb-5">En un coup d’œil</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {presentation.essentials.map((item) => <li key={item} className="flex items-start gap-3 text-xl leading-relaxed"><Check className="text-primary w-6 h-6 shrink-0 mt-1" aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>
      {article.path === CHOICE_HUB && <section id="usages" className="container py-10 scroll-mt-28">
        <h2 className="text-3xl font-bold text-primary mb-6">Que souhaitez-vous lire ou faire ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ title: "Une étiquette ou un prix", slug: "loupe-optique-ou-electronique/", photo: PHOTOS.nora }, { title: "Un courrier ou une facture", slug: "personne-agee/", photo: PHOTOS.lina }, { title: "Un livre ou le journal", slug: "loupe-portable-ou-grand-ecran/", photo: PHOTOS.amelie }, { title: "Écrire, coudre, bricoler", slug: "lire-mains-libres/", photo: PHOTOS.astrid }].map((usage) => <a key={usage.slug} href={CHOICE_HUB + usage.slug} className="group border border-border rounded-lg overflow-hidden bg-card focus-visible:ring-4 focus-visible:ring-ring">
            <img src={usage.photo.src} alt={usage.photo.alt} width={usage.photo.width} height={usage.photo.height} loading="lazy" className="w-full h-40 object-contain" />
            <span className="block p-5 text-xl font-bold text-primary leading-snug border-t border-border">{usage.title}<ArrowRight aria-hidden="true" className="mt-3 w-5 h-5" /></span>
          </a>)}
        </div>
      </section>}
      <article className="container py-8 md:py-10"><div className="max-w-4xl mx-auto">
        {sections.map((section, index) => <section key={index} className={`choice-section ${section.faq ? "choice-faq" : ""} ${article.path === CHOICE_HUB ? "choice-hub-text" : ""}`}>
          {section.title && <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-6 leading-snug">{section.title}</h2>}
          {section.faq ? <>
            {section.content.split(/^### /m)[0].trim() && <Markdown source={section.content.split(/^### /m)[0]} />}
            {section.questions.map((item) => <details key={item.q} className="choice-faq-item border-b border-border py-2"><summary className="cursor-pointer text-xl font-bold text-primary py-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-ring focus-visible:outline-offset-2">{item.q}</summary><div className="pt-3 pb-2">{renderContent(item.a)}</div></details>)}
          </> : renderContent(section.content)}
        </section>)}
        <p className="mt-10 pt-6 border-t border-border text-lg"><a href="/qui-sommes-nous/" className="text-primary underline underline-offset-4">Qui sommes-nous ?</a></p>
      </div></article>
    </main><Footer />
  </div>;
}