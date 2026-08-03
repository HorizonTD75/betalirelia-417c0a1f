import { ArrowRight } from "lucide-react";
import { AVAILABILITY, ProductVariant } from "./availability";
import AvailabilityBadge from "./AvailabilityBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VariantChoiceGridProps {
  title: string;
  /** Optional helper sentence under the title. */
  intro?: string;
  variants: ProductVariant[];
  /** Grid columns on desktop. Mobile is always a single column. */
  columns?: 2 | 3;
  className?: string;
}

const VariantChoiceGrid = ({ title, intro, variants, columns = 3, className }: VariantChoiceGridProps) => {
  const noneAvailable = variants.every((v) => v.status !== "available");

  return (
    <section aria-labelledby="variant-choice-title" className={className}>
      <h2 id="variant-choice-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
        {title}
      </h2>

      {intro && <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">{intro}</p>}

      {noneAvailable && (
        <p className="text-base md:text-lg font-semibold text-foreground mb-6 max-w-3xl">
          Ce produit est momentanément en rupture de stock. Il sera de nouveau proposé dès réapprovisionnement.
        </p>
      )}


      <ul
        className={cn(
          "grid grid-cols-1 gap-6 md:gap-8 list-none p-0 m-0",
          columns === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {variants.map((variant) => {
          const meta = AVAILABILITY[variant.status];
          const buyable = meta.purchasable && !!variant.stripeUrl;

          return (
            <li key={variant.id} className="min-w-0">
              <article
                className={cn(
                  "flex flex-col h-full gap-4 rounded-2xl border-2 bg-card p-5 md:p-6 transition-shadow",
                  buyable ? "border-primary/30 hover:shadow-lg" : "border-border",
                )}
              >
                {variant.image ? (
                  <img
                    src={variant.image}
                    alt={variant.imageAlt || variant.label}
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "w-full aspect-[4/3] object-contain rounded-xl bg-white border border-border",
                      !buyable && "opacity-90",
                    )}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="w-full aspect-[4/3] rounded-xl bg-foreground border border-border flex items-center justify-center"
                  >
                    <span className="font-bold text-5xl leading-none" style={{ color: variant.swatch }}>
                      88:88
                    </span>
                  </span>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground m-0">{variant.label}</h3>
                  {variant.status !== "available" && <AvailabilityBadge status={variant.status} size="sm" />}
                </div>

                {variant.description && (
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed m-0">{variant.description}</p>
                )}

                {variant.price && <p className="text-2xl font-bold text-primary m-0">{variant.price}</p>}

                <div className="mt-auto pt-2">
                  {buyable ? (
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <a
                        href={variant.stripeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={variant.buyAriaLabel || variant.buyLabel}
                      >
                        {variant.buyLabel}
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-label={`${variant.label} — indisponible`}
                      className="w-full rounded-xl border-2 border-border bg-muted px-5 py-3 text-base md:text-lg font-bold text-muted-foreground cursor-not-allowed"
                    >
                      Indisponible
                    </button>
                  )}
                </div>
              </article>
            </li>
          );

        })}
      </ul>
    </section>
  );
};

export default VariantChoiceGrid;
