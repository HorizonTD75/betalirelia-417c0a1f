/**
 * GTIN helpers shared by the visible product pages and the JSON-LD registry.
 *
 * A GTIN is ALWAYS stored as a string so leading zeros are preserved.
 * When no GTIN is known, the property is simply absent — never "", "0" or
 * any placeholder value.
 */

/** Digits only, as required by Schema.org (no dash, no space). */
const digits = (gtin: string): string => gtin.replace(/\D/g, "");

/** Schema.org property matching the GTIN length, or null when unsupported. */
export const gtinProperty = (
  gtin: string,
): "gtin8" | "gtin12" | "gtin13" | "gtin14" | null => {
  switch (digits(gtin).length) {
    case 8:
      return "gtin8";
    case 12:
      return "gtin12";
    case 13:
      return "gtin13";
    case 14:
      return "gtin14";
    default:
      return null;
  }
};

/** `{ gtin13: "3760308710472" }` or `{}` when the value is missing/invalid. */
export const gtinSchema = (gtin?: string): Record<string, string> => {
  if (!gtin) return {};
  const property = gtinProperty(gtin);
  return property ? { [property]: digits(gtin) } : {};
};

/** Visible label, e.g. "GTIN / EAN-13". */
export const gtinLabel = (gtin: string): string => {
  switch (gtinProperty(gtin)) {
    case "gtin8":
      return "GTIN / EAN-8";
    case "gtin12":
      return "GTIN / UPC-A";
    case "gtin14":
      return "GTIN-14";
    default:
      return "GTIN / EAN-13";
  }
};
