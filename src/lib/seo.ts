import { CONTACT, GOOGLE_PROFIL, RECHTLICHES, SOCIAL_LINKS } from "@/lib/site";

/**
 * Kanonische Domain der Live-Seite. Canonical-Tags, og:url, Strukturdaten,
 * public/sitemap.xml, public/robots.txt und public/llms.txt zeigen darauf.
 * Bei einem Domainwechsel hier UND in den drei Dateien unter public/ ändern.
 */
export const SITE_URL = "https://holzbau-scharpf.de";

/** Standard-Vorschaubild für Link-Vorschauen (Facebook, WhatsApp, LinkedIn). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/fotos/scharpf_firmengebaeude.jpg`;

/** Datum, an dem Ratgeber und Stellenanzeigen veröffentlicht wurden. */
export const INHALT_VEROEFFENTLICHT = "2026-07-20";

export function absUrl(path: string): string {
  const sauber = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${SITE_URL}${sauber}`;
}

const ADRESSE = {
  "@type": "PostalAddress",
  streetAddress: CONTACT.street,
  postalCode: "73730",
  addressLocality: "Esslingen am Neckar",
  addressCountry: "DE",
} as const;

/** Organisation für die ganze Seite – wird auf jeder Seite ausgegeben. */
export const ORGANISATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#organisation`,
  name: "E. Scharpf GmbH – Holzbau & Restaurierung",
  legalName: RECHTLICHES.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Zimmerei und Dachdeckerei in Esslingen: Restaurierung, Holzbau, Dach und Fassade im Familienbetrieb seit 1946.",
  foundingDate: "1946",
  telephone: "+49 711 93184422",
  email: CONTACT.email,
  vatID: RECHTLICHES.ustId,
  address: ADRESSE,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "14:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Esslingen am Neckar" },
    { "@type": "City", name: "Stuttgart" },
    { "@type": "AdministrativeArea", name: "Landkreis Esslingen" },
  ],
  hasMap: GOOGLE_PROFIL.url,
  sameAs: [GOOGLE_PROFIL.url, ...SOCIAL_LINKS.map((s) => s.href)],
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "E. Scharpf GmbH",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organisation` },
};

export type BreadcrumbEintrag = { label: string; to?: string };

export function breadcrumbJsonLd(items: BreadcrumbEintrag[], aktuellerPfad: string) {
  const liste = [{ label: "Startseite", to: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: liste.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absUrl(item.to ?? (i === liste.length - 1 ? aktuellerPfad : "/")),
    })),
  };
}

export function serviceJsonLd(opts: { name: string; beschreibung: string; pfad: string; bild?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.beschreibung,
    url: absUrl(opts.pfad),
    ...(opts.bild ? { image: `${SITE_URL}${opts.bild}` } : {}),
    provider: { "@id": `${SITE_URL}/#organisation` },
    areaServed: [
      { "@type": "City", name: "Esslingen am Neckar" },
      { "@type": "City", name: "Stuttgart" },
    ],
  };
}

export function articleJsonLd(opts: { titel: string; beschreibung: string; pfad: string; bild?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.titel,
    description: opts.beschreibung,
    mainEntityOfPage: absUrl(opts.pfad),
    image: opts.bild ? `${SITE_URL}${opts.bild}` : DEFAULT_OG_IMAGE,
    datePublished: INHALT_VEROEFFENTLICHT,
    inLanguage: "de-DE",
    author: { "@id": `${SITE_URL}/#organisation` },
    publisher: { "@id": `${SITE_URL}/#organisation` },
  };
}

export function jobPostingJsonLd(opts: {
  titel: string;
  beschreibung: string[];
  anforderungen: string[];
  pfad: string;
  art: "FULL_TIME" | "OTHER";
}) {
  const html = [
    ...opts.beschreibung.map((p) => `<p>${p}</p>`),
    `<p>Das bringst du mit:</p><ul>${opts.anforderungen.map((a) => `<li>${a}</li>`).join("")}</ul>`,
  ].join("");
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opts.titel,
    description: html,
    datePosted: INHALT_VEROEFFENTLICHT,
    employmentType: opts.art,
    directApply: false,
    url: absUrl(opts.pfad),
    hiringOrganization: {
      "@type": "Organization",
      name: RECHTLICHES.legalName,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: { "@type": "Place", address: ADRESSE },
  };
}
