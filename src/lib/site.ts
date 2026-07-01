// Zentrale, seitenübergreifende Daten für die E. Scharpf Website.
// Quelle: E_Scharpf_Website_Texte.docx + E_Scharpf_Sitemap.html

export const CONTACT = {
  company: "E. Scharpf GmbH",
  street: "Fritz-Müller-Str. 115",
  city: "73730 Esslingen am Neckar",
  phone: "0711 – 93 18 44 22",
  phoneHref: "tel:+4971193184422",
  fax: "0711 – 93 18 44 50",
  email: "anfrage@scharpf-holzbau.de",
  emailHref: "mailto:anfrage@scharpf-holzbau.de",
  whatsappHref: "https://wa.me/4971193184422",
  hours: "Mo–Fr 7:00–17:00 Uhr",
} as const;

export const PRIMARY_CTA = "Kostenlose Projektberatung Anfordern";

export const MAIN_NAV = [
  { label: "Startseite", to: "/" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Ratgeber", to: "/ratgeber" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

// Die fünf Leistungs-Kategorien (Reihenfolge = XD-Entwurf & Sitemap)
export const LEISTUNGEN = [
  {
    nr: "01",
    title: "Restaurierung & Sanierung",
    to: "/restaurierung",
    teaser:
      "Historisches Handwerk für denkmalgerechte Erhaltung. Fachwerkgebäude restaurieren wir mit dem Wissen um Jahrhunderte alte Bautechniken.",
  },
  {
    nr: "02",
    title: "Holzbau & Konstruktion",
    to: "/holzbau",
    teaser:
      "Dachstühle, Holzkonstruktionen und Wandelemente aus unserer Werkhalle – passgenau gefertigt, terminzuverlässig montiert.",
  },
  {
    nr: "03",
    title: "Dach",
    to: "/dach",
    teaser:
      "Neueindeckung, Sanierung und Dämmung für jede Dachform – mit kostenloser KFW-Förderberatung.",
  },
  {
    nr: "04",
    title: "Fassade & Außenbereiche",
    to: "/fassade",
    teaser:
      "Holzfassaden schützen, isolieren und gestalten. Langlebig, ökologisch, individuell.",
  },
  {
    nr: "05",
    title: "Services & Sonstige Leistungen",
    to: "/services",
    teaser:
      "Beratung, Planung und Kleinaufträge: Wir finden eine Lösung – egal wie groß oder klein das Vorhaben ist.",
  },
] as const;

export const REFERENZ_KATEGORIEN = [
  { title: "Restaurierung & Sanierung", to: "/referenzen/restaurierung" },
  { title: "Holzbau & Konstruktion", to: "/referenzen/holzbau" },
  { title: "Dach", to: "/referenzen/dach" },
  { title: "Fassade & Außenbereiche", to: "/referenzen/fassade" },
  { title: "Services & Sonstige Leistungen", to: "/referenzen/services" },
] as const;

export const PARTNERS = ["RESTORA GMBH", "ES TORE"] as const;
