/**
 * Optional GTIN rows appended at the very END of the "Caractéristiques
 * techniques" table of a product page.
 *
 * The data comes from the same single source as the JSON-LD
 * (src/lib/structuredData/products.ts + variants.ts), so the visible GTIN and
 * the structured-data GTIN can never diverge.
 *
 * Nothing is rendered when no GTIN is known — no empty row, no placeholder.
 */

import { useLocation } from "react-router-dom";

import { getCatalogProduct } from "@/lib/structuredData/products";
import { gtinLabel } from "@/lib/gtin";

interface GtinRow {
  label: string;
  value: string;
}

export const GtinSpecRows = () => {
  const { pathname } = useLocation();
  const product = getCatalogProduct(pathname);
  if (!product) return null;

  const rows: GtinRow[] = [];

  const variantsWithGtin = (product.variants ?? []).filter((v) => v.gtin);
  if (variantsWithGtin.length > 0) {
    variantsWithGtin.forEach((variant) => {
      rows.push({
        label: `${gtinLabel(variant.gtin!)} – ${variant.label}`,
        value: variant.gtin!,
      });
    });
  } else if (product.gtin) {
    rows.push({ label: gtinLabel(product.gtin), value: product.gtin });
  }

  if (rows.length === 0) return null;

  return (
    <>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] border-b border-border last:border-b-0"
        >
          <div className="bg-muted px-5 py-3 font-semibold text-foreground text-base">
            {row.label}
          </div>
          <div className="px-5 py-3 text-base text-foreground leading-relaxed">
            {row.value}
          </div>
        </div>
      ))}
    </>
  );
};

export default GtinSpecRows;
