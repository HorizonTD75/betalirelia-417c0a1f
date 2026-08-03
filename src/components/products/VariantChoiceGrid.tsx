import { ArrowRight } from "lucide-react";
import { AVAILABILITY, ProductVariant } from "./availability";
import AvailabilityBadge from "./AvailabilityBadge";
import { Button } from "@/components/ui/button";

interface VariantChoiceGridProps {
  title: string;
  variants: ProductVariant[];
}

const VariantChoiceGrid = ({ title, variants }: VariantChoiceGridProps) => {
  const noneAvailable = variants.every((v) => v.status !== "available");

  return (
    <section aria-labelledby="variant-choice-title">
      <h2 id="variant-choice-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>

      {noneAvailable && (
        <p className="text-base md:text-lg font-semibold text-destructive mb-6">
          Ce produit est momentanément indisponible dans toutes ses versions.
        </p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
        {variants.map((variant) => {
          const meta = AVAILABILITY[variant.status];
          const buyable = meta.purchasable && !!variant.stripeUrl;
          const CardTag = buyable ? "a" : "div";

          return (
            <li key={variant.id} className="min-w-0">
              <CardTag
                {...(buyable
                  ? {
                      href: variant.stripeUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": variant.buyLabel,
                    }
                  : {})}
                className={`flex flex-col h-full gap-4 rounded-2xl border-2 p-5 md:p-6 bg-card no-underline ${
                  buyable
                    ? "border-primary/30 hover:border-primary hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                    : "border-border opacity-90"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center shrink-0 border-2 border-border"
                  >
                    <span className="font-bold text-2xl leading-none" style={{ color: variant.swatch }}>
                      88
                    </span>
                  </span>
                  <span className="font-serif text-xl md:text-2xl font-bold text-foreground">{variant.label}</span>
                </div>

                {variant.status !== "available" && <AvailabilityBadge status={variant.status} className="self-start" />}
                {variant.status !== "available" && meta.message && (
                  <p className="text-base text-muted-foreground leading-relaxed m-0">{meta.message}</p>
                )}

                <div className="mt-auto pt-2">
                  {buyable ? (
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary text-secondary-foreground px-5 py-3 text-base md:text-lg font-bold">
                      {variant.buyLabel}
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </span>
                  ) : (
                    <Button variant="secondary" className="w-full" disabled>
                      {meta.buttonLabel}
                    </Button>
                  )}
                </div>
              </CardTag>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default VariantChoiceGrid;
