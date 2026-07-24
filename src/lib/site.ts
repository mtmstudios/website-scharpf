// Zentrale, seitenübergreifende Daten für die E. Scharpf Website.
// Quelle: E_Scharpf_Website_Texte.docx + E_Scharpf_Sitemap.html

export const CONTACT = {
  company: "E. Scharpf GmbH",
  street: "Fritz-Müller-Str. 115",
  city: "73730 Esslingen",
  phone: "0711 – 93 18 44 22",
  phoneHref: "tel:+4971193184422",
  fax: "0711 – 93 18 44 50",
  email: "anfrage@scharpf-holzbau.de",
  emailHref: "mailto:anfrage@scharpf-holzbau.de",
  whatsappHref: "https://wa.me/4971193184422",
  hours: "Mo–Fr 7:00–17:00 Uhr",
} as const;

export const PRIMARY_CTA = "Kostenlose Beratung Anfordern";

// Haupt-Navigation exakt wie XD (ohne "Startseite")
export const MAIN_NAV = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Ratgeber", to: "/ratgeber" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

// Die fünf Leistungs-Kategorien.
// Nummerierung & Reihenfolge exakt wie im XD-Block "Unsere Leistungen" (Startseite):
// 01 Holzbau · 02 Fassade · 03 Dach · 04 Restaurierung · 05 Service.
export const LEISTUNGEN = [
  {
    nr: "01",
    title: "Holzbau & Konstruktion",
    to: "/holzbau",
    bullets: ["Holzhausbau / Aufstockung", "Carport"],
    teaser:
      "Dachstühle, Holzkonstruktionen und Wandelemente aus unserer Werkhalle - passgenau gefertigt, terminzuverlässig montiert.",
  },
  {
    nr: "02",
    title: "Fassade & Aussenbereiche",
    to: "/fassade",
    bullets: ["Fassaden (Holz/Trespa)", "Terrassen"],
    teaser:
      "Holzfassaden schuetzen, isolieren und gestalten. Langlebig, ökologisch, individuell.",
  },
  {
    nr: "03",
    title: "Dach",
    to: "/dach",
    bullets: ["Dachgauben", "Dachfenster", "Wärmedämmung", "Klempnerarbeiten"],
    teaser:
      "Neueindeckung, Sanierung und Dämmung für jede Dachform - mit KFW-Förderberatung inklusive.",
  },
  {
    nr: "04",
    title: "Restaurierung & Sanierung",
    to: "/restaurierung",
    bullets: [
      "Denkmalschutz",
      "Schadenskartierung & Begleitung in der Denkmalsanierung",
      "Schadstoffsanierung",
    ],
    teaser:
      "Historisches Handwerk für denkmalgerechte Erhaltung. Fachwerkgebäude restaurieren wir mit dem Wissen um Jahrhunderte alte Bautechniken.",
  },
  {
    nr: "05",
    title: "Service & Sonstige Leistungen",
    to: "/services",
    bullets: ["Ladekran mieten", "Ausstellung/Showroom"],
    teaser:
      "Beratung, Planung und Kleinaufträge: Wir finden eine Lösung, egal wie gross oder klein das Vorhaben ist.",
  },
] as const;

export const REFERENZ_KATEGORIEN = [
  { title: "Restaurierung & Sanierung", to: "/referenzen/restaurierung" },
  { title: "Holzbau & Konstruktion", to: "/referenzen/holzbau" },
  { title: "Dach", to: "/referenzen/dach" },
  { title: "Fassade & Außenbereiche", to: "/referenzen/fassade" },
  { title: "Service & Sonstige Leistungen", to: "/referenzen/services" },
] as const;

// Ziel-Endpoint für Kontaktformular & Projekt-Quiz (n8n-Webhook).
// TODO: Webhook-URL eintragen, sobald der n8n-Workflow für Scharpf steht –
// bis dahin wird die Anfrage nur clientseitig bestätigt (Danke-Seite).
export const FORM_ENDPOINT = "";

// Google-Bewertungen – Platzhalter-Zitate aus dem B612-Konzept.
// TODO: durch echte, kuratierte Google-Rezensionen ersetzen.
export const GOOGLE_BEWERTUNGEN = [
  {
    zitat:
      "„Professionelle Ausführung, perfekte Kommunikation – wir sind sehr zufrieden.“",
    name: "Michael R., Esslingen",
  },
  {
    zitat:
      "„Für die Restaurierung unseres Fachwerkhauses genau der richtige Partner.“",
    name: "Sabine K., Stuttgart",
  },
  {
    zitat: "„Termingerecht, sauber und top Qualität. Klare Empfehlung!“",
    name: "Thomas M., Nürtingen",
  },
] as const;

// Vertrauenssignale vor CTAs (B612-Konzept, Abschnitt 5).
export const TRUST_SIGNALE = [
  "80 Jahre Erfahrung – 3 Generationen",
  "Meisterbetrieb – Handwerkskammer Stuttgart",
  "VELUX-Partner",
  "120+ Referenzprojekte",
] as const;

export const PARTNERS = ["RESTORA GMBH", "ES TORE"] as const;

// Rechte, vertikale Social-Icon-Leiste (wie XD): Instagram, Pinterest, Facebook, Houzz.
// TODO: echte Profil-URLs vom Kunden einpflegen – aktuell Platzhalter.
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Houzz", href: "#", icon: "houzz" },
] as const;
