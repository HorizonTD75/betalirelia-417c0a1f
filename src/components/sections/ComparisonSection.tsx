import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const criteria = [
  {
    label: "Grossissement",
    loupeVerre: "×2 à ×5 (fixe)",
    loupeElec: "×2 à ×25 (réglable)",
    lampe: "Aucun (complément)",
    teleAgr: "×2 à ×60 (réglable)",
  },
  {
    label: "Contraste renforcé",
    loupeVerre: false,
    loupeElec: true,
    lampe: false,
    teleAgr: true,
  },
  {
    label: "Éclairage intégré",
    loupeVerre: "Certains modèles",
    loupeElec: "Rétro-éclairage écran",
    lampe: "Oui (fonction principale)",
    teleAgr: "Oui",
  },
  {
    label: "Mains libres",
    loupeVerre: "Loupe dôme uniquement",
    loupeElec: "Modèles de bureau",
    lampe: true,
    teleAgr: true,
  },
  {
    label: "Lecture prolongée",
    loupeVerre: false,
    loupeElec: "Modèles de bureau",
    lampe: true,
    teleAgr: true,
  },
  {
    label: "Portable / mobile",
    loupeVerre: true,
    loupeElec: "Modèles portables",
    lampe: false,
    teleAgr: "Modèles portables",
  },
  {
    label: "Sans batterie",
    loupeVerre: true,
    loupeElec: false,
    lampe: "Secteur",
    teleAgr: "Secteur",
  },
  {
    label: "Budget indicatif",
    loupeVerre: "15 – 60 €",
    loupeElec: "150 – 800 €",
    lampe: "45 – 120 €",
    teleAgr: "500 – 3 500 €",
  },
];

const columns = [
  { key: "loupeVerre" as const, label: "Loupes en verre", link: "/aides-lecture/loupes-verre" },
  { key: "loupeElec" as const, label: "Loupes électroniques", link: "/aides-lecture/loupes-electroniques" },
  { key: "lampe" as const, label: "Lampes adaptées", link: "/aides-lecture/lampes" },
  { key: "teleAgr" as const, label: "Télé-agrandisseurs", link: "/aides-lecture/tele-agrandisseurs" },
];

const CellContent = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="w-6 h-6 text-accent mx-auto" aria-label="Oui" />;
  if (value === false) return <X className="w-6 h-6 text-destructive mx-auto" aria-label="Non" />;
  return <span>{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comparatif des aides à la lecture
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Chaque catégorie répond à des besoins différents. Ce tableau vous aide 
            à identifier rapidement la solution la plus adaptée à votre situation.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse" role="table">
            <caption className="sr-only">
              Comparatif des 4 catégories d'aides à la lecture pour malvoyants
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-left text-lg font-bold text-foreground p-4 bg-card border-2 border-border rounded-tl-xl"
                >
                  Critère
                </th>
                {columns.map((col, i) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={`text-center text-lg font-bold text-primary-foreground p-4 bg-primary ${
                      i === columns.length - 1 ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, ri) => (
                <tr key={row.label} className={ri % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <th
                    scope="row"
                    className="text-left text-lg font-semibold text-foreground p-4 border-2 border-border"
                  >
                    {row.label}
                  </th>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="text-center text-lg text-foreground p-4 border-2 border-border"
                    >
                      <CellContent value={row[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4 border-2 border-border bg-card rounded-bl-xl" />
                {columns.map((col, i) => (
                  <td
                    key={col.key}
                    className={`p-4 border-2 border-border bg-card text-center ${
                      i === columns.length - 1 ? "rounded-br-xl" : ""
                    }`}
                  >
                    <Button variant="outline" size="lg" asChild>
                      <Link to={col.link}>
                        Voir la sélection
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-8">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-card rounded-2xl border-2 border-border overflow-hidden"
            >
              <div className="bg-primary p-4">
                <h3 className="text-xl font-bold text-primary-foreground text-center">
                  {col.label}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {criteria.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-2 border-b border-border last:border-0"
                  >
                    <span className="text-lg font-semibold text-foreground">
                      {row.label}
                    </span>
                    <span className="text-lg text-foreground text-right shrink-0">
                      <CellContent value={row[col.key]} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 pt-0">
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to={col.link}>
                    Voir la sélection
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
