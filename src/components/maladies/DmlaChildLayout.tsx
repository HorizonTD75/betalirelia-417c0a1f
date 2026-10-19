import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, ChevronRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/** Shared shell for DMLA cocoon child pages (sèche, humide…). */
export const linkCls = "text-primary font-semibold underline underline-offset-4 hover:text-primary/80";
export const ulCls =
  "list-disc pl-7 space-y-3 mb-5 text-lg text-foreground leading-relaxed marker:text-secondary";
export const olCls =
  "list-decimal pl-7 space-y-3 mb-5 text-lg text-foreground leading-relaxed marker:font-bold marker:text-primary";

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-lg text-foreground leading-relaxed mb-4 last:mb-0">{children}</p>
);
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 mt-8 first:mt-0">{children}</h3>
);
export const Section = ({ id, title, muted, children }: { id: string; title: string; muted?: boolean; children: ReactNode }) => (
  <section className={`py-14 ${muted ? "bg-muted" : "bg-background"}`} aria-labelledby={id}>
    <div className="container">
      <div className="max-w-4xl mx-auto min-w-0">
        <h2 id={id} className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 scroll-mt-28">{title}</h2>
        {children}
      </div>
    </div>
  </section>
);
export const KeyPoint = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border-2 border-primary/30 bg-card p-6 my-6">
    <div className="flex items-start gap-4">
      <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
      <p className="text-lg text-foreground leading-relaxed min-w-0">{children}</p>
    </div>
  </div>
);
export const Alert = ({ children }: { children: ReactNode }) => (
  <div role="note" className="rounded-xl border border-border border-l-8 border-l-destructive bg-card p-6 my-6">
    <div className="flex items-start gap-4">
      <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
      <p className="text-lg text-foreground leading-relaxed min-w-0">{children}</p>
    </div>
  </div>
);

const crumbLink = "text-muted-foreground hover:text-primary transition-colors";

const DmlaChildLayout = ({ crumb, title, children }: { crumb: string; title: string; children: ReactNode }) => (
  <div className="min-h-screen overflow-x-hidden">
    <SEOHead />
    <Header />
    <main id="main-content">
      <nav className="bg-muted py-3 border-b border-border" aria-label="Fil d'Ariane">
        <div className="container">
          <ol className="flex items-center gap-2 text-lg flex-wrap">
            <li><Link to="/" className={crumbLink}>Accueil</Link></li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <li><Link to="/maladies-yeux/" className={crumbLink}>Maladies des yeux</Link></li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <li><Link to="/maladies-yeux/dmla/" className={crumbLink}>DMLA</Link></li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <li><span className="text-foreground font-semibold" aria-current="page">{crumb}</span></li>
          </ol>
        </div>
      </nav>
      <section className="bg-primary text-primary-foreground py-12 md:py-14">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-secondary font-semibold text-lg mb-3">Maladie des yeux · DMLA</p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold break-words">{title}</h1>
          </div>
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </div>
);

export default DmlaChildLayout;
