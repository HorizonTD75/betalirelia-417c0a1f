/**
 * The sitewide entities, DEFINED ONCE in the home-page graph and referenced
 * everywhere else by @id (see entities.ts / registry.ts).
 *
 * Every value below is verifiable on the site itself (mentions légales,
 * footer, return policy). Never add social profiles, ratings or identifiers
 * that are not published on LirElia.
 */

import { Node, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./entities";

export const LOGO_ID = `${SITE_URL}/#logo`;
export const LOGO_URL = `${SITE_URL}/images/logo-lirelia-bleu-300.png`;

/** Commercial name, legal entity, contact details, tax identifiers. */
export const organizationNode = (): Node => ({
  "@type": "OnlineStore",
  "@id": ORGANIZATION_ID,
  name: "LirElia",
  legalName: "HORIZON TD",
  alternateName: "HORIZON TD",
  url: `${SITE_URL}/`,
  description:
    "LirElia accompagne les personnes malvoyantes, leurs proches et leurs aidants avec des bilans basse vision, des aides à la lecture et des solutions adaptées à la DMLA, au glaucome et aux autres pathologies visuelles.",
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: LOGO_URL,
    caption: "LirElia",
  },
  image: { "@id": LOGO_ID },
  email: "contact@lirelia.fr",
  telephone: "+33768474235",
  vatID: "FR39840698039",
  taxID: "840698039",
  identifier: [
    { "@type": "PropertyValue", propertyID: "SIREN", value: "840698039" },
    { "@type": "PropertyValue", propertyID: "SIRET", value: "84069803900012" },
    { "@type": "PropertyValue", propertyID: "TVA", value: "FR39840698039" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 rue Pierre Louÿs",
    postalCode: "75116",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33768474235",
    email: "contact@lirelia.fr",
    contactType: "customer service",
    availableLanguage: "French",
    areaServed: "FR",
  },
  currenciesAccepted: "EUR",
  areaServed: { "@type": "Country", name: "France" },
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy",
    "@id": `${SITE_URL}/#returnpolicy`,
    applicableCountry: "FR",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 14,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
    url: `${SITE_URL}/retours-remboursements/`,
  },
});

export const websiteNode = (): Node => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "LirElia",
  description:
    "Accompagnement expert en basse vision : bilans fonctionnels, aides à la lecture, conseils et solutions adaptées.",
  inLanguage: "fr-FR",
  publisher: { "@id": ORGANIZATION_ID },
});
