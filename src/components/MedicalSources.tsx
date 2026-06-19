import { ExternalLink } from "lucide-react";

export interface MedicalSource {
  institution: string;
  title: string;
  url: string;
}

interface MedicalSourcesProps {
  sources: MedicalSource[];
}

/**
 * Bloc bibliographique générique affiché en bas des pages médicales.
 * Ne modifie jamais le contenu éditorial. Présente uniquement des
 * sources françaises de référence.
 */
const MedicalSources = ({ sources }: MedicalSourcesProps) => {
  if (!sources || sources.length === 0) return null;

  return (
    <section
      aria-labelledby="sources-medicales-title"
      className="py-12 bg-muted/30 border-t border-border"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2
            id="sources-medicales-title"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Sources et références médicales
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Pour approfondir le sujet, vous pouvez consulter les sources françaises de référence suivantes.
          </p>

          <ul className="space-y-4 mb-8">
            {sources.map((s, i) => (
              <li key={i} className="text-lg leading-relaxed">
                <span className="font-semibold text-foreground">{s.institution}</span>
                {" — "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {s.title}
                  <ExternalLink className="inline-block w-4 h-4 ml-1 align-text-bottom" aria-hidden="true" />
                  <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-base text-muted-foreground leading-relaxed italic">
            Ces ressources sont proposées à titre documentaire. Les informations présentes sur LirElia ne remplacent pas un diagnostic, un traitement ni l'avis personnalisé d'un ophtalmologiste ou d'un autre professionnel de santé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalSources;
