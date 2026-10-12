// Zentrale, seitenübergreifende Daten für die E. Scharpf Website.
// Quelle: E_Scharpf_Website_Texte.docx + E_Scharpf_Sitemap.html

export const CONTACT = {
  company: "E. Scharpf GmbH",
  street: "Fritz-Müller-Str. 115",
  city: "73730 Esslingen",
  phone: "0711 – 93 18 44 22",
  phoneHref: "tel:+4971193184422",
  email: "anfrage@scharpf-holzbau.de",
  emailHref: "mailto:anfrage@scharpf-holzbau.de",
  whatsappHref: "https://wa.me/4971193184422",
  hours: "Mo–Do 7:00–17:00 Uhr\nFr 7:00–14:30 Uhr",
} as const;

/**
 * Rechtlich verbindliche Angaben für Impressum und Datenschutzerklärung.
 *
 * Quelle: das Impressum der alten Seite holzbau-scharpf.de (ausgelesen am
 * 27.08.2026). Achtung beim Firmennamen: im Handelsregister steht
 * "E. Scharpf Holzbau GmbH", während die Seite sonst durchgehend die kürzere
 * Marke "E. Scharpf GmbH" verwendet (CONTACT.company). Im Impressum und als
 * Verantwortlicher muss der eingetragene Name stehen, deshalb hier getrennt.
 */
export const RECHTLICHES = {
  legalName: "E. Scharpf Holzbau GmbH",
  handelsregister: "HRB 211043",
  registergericht: "Stuttgart",
  geschaeftsfuehrer: ["Eberhard Ernst Scharpf", "Eberhard Emil Hans Scharpf"],
  ustId: "DE145344779",
  kammer: {
    name: "Handwerkskammer Region Stuttgart",
    strasse: "Heilbronner Str. 43",
    ort: "70191 Stuttgart",
    url: "https://www.hwk-stuttgart.de/",
  },
  haftpflicht: {
    versicherer: "Allianz Deutschland AG",
    strasse: "Königinstraße 28",
    ort: "80802 München",
    geltungsraum: "Deutschland",
  },
  schlichtungsstelle: {
    name: "Universalschlichtungsstelle des Zentrums für Schlichtung e.V.",
    strasse: "Straßburger Straße 8",
    ort: "77694 Kehl am Rhein",
    url: "https://www.verbraucher-schlichter.de",
  },
} as const;

export const PRIMARY_CTA = "Kostenlose Beratung Anfordern";

/**
 * Externe Tools und Terminbuchung.
 *
 * Alle drei URLs stammen von der alten Seite holzbau-scharpf.de (ausgelesen
 * am 19.08.2026) und sind damit exakt die, die E. Scharpf zurückhaben wollte:
 * - Der VELUX-Konfigurator lag dort hinter dem Borlabs-Cookie-Blocker, deshalb
 *   war er im Quelltext nicht direkt sichtbar. Die `id` ist die VELUX-
 *   Partnernummer der E. Scharpf GmbH – sie muss beim Einbetten erhalten
 *   bleiben, sonst laufen die Leads nicht auf den Betrieb.
 * - Beide Calendly-Links standen auf der alten Startseite.
 */
export const EXTERNE_LINKS = {
  veluxKonfigurator:
    "https://dachfensterkonfigurator.velux.de/konfigurator?embed=true&id=10081282",
  terminDachfensterBeratung:
    "https://calendly.com/ausstellunges/dachfenster-beratung",
  terminPlanungsgespraech: "https://calendly.com/a-schwarz__/60min",
} as const;

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
    title: "Fassade & Außenbereiche",
    to: "/fassade",
    bullets: ["Fassaden (Holz/Trespa)", "Terrassen"],
    teaser:
      "Holzfassaden schützen, isolieren und gestalten. Langlebig, ökologisch, individuell.",
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
      "Beratung, Planung und Kleinaufträge: Wir finden eine Lösung, egal wie groß oder klein das Vorhaben ist.",
  },
] as const;

export const REFERENZ_KATEGORIEN = [
  { title: "Restaurierung & Sanierung", to: "/referenzen/restaurierung" },
  { title: "Holzbau & Konstruktion", to: "/referenzen/holzbau" },
  { title: "Dach", to: "/referenzen/dach" },
  { title: "Fassade & Außenbereiche", to: "/referenzen/fassade" },
  { title: "Service & Sonstige Leistungen", to: "/referenzen/services" },
] as const;

/**
 * n8n-Webhook für alle drei Formulare: Kontaktformular, Projekt-Quiz und
 * Bewerbung. Unterschieden wird im Workflow über das Feld `quelle`.
 *
 * Workflow: "E. Scharpf — Website Formulare"
 * Quelle:   ~/Desktop/MTM Studios/n8n/E. Scharpf Holzbau/
 *
 * Greift erst, wenn der Workflow in n8n importiert UND aktiviert ist. Vorher
 * antwortet n8n mit 404 – die Formulare zeigen dann trotzdem die Danke-Seite,
 * die Anfrage geht aber verloren. Vor dem Livegang also prüfen.
 */
export const FORM_ENDPOINT =
  "https://mtmstudios.app.n8n.cloud/webhook/scharpf-formular";

// Google-Bewertungen: wörtliche Auszüge aus den öffentlichen Rezensionen des
// Google-Unternehmensprofils (abgerufen am 12.10.2026: 4,8 Sterne, 59 Rezensionen;
// ohne Google-Anmeldung sind nur 5 davon abrufbar). Kürzungen sind mit […]
// markiert, Wortlaut unverändert. Neue Rezensionen einfach ergänzen.
export const GOOGLE_PROFIL = {
  sterne: "4,8",
  anzahl: 59,
  url: "https://www.google.com/maps?cid=15715710453212760865",
} as const;

export const GOOGLE_BEWERTUNGEN: readonly { zitat: string; name: string }[] = [
  {
    zitat:
      "„Alle Arbeiten wurden mit großer Sorgfalt, hoher Fachkompetenz und einem bemerkenswerten Qualitätsanspruch umgesetzt. […] Wir bedanken uns herzlich für die hervorragende Arbeit und können die Firma E. Scharpf uneingeschränkt weiterempfehlen.“",
    name: "Karoline – Dachsanierung, Ausbau und Fassade",
  },
  {
    zitat:
      "„Wir wurden umfassend beraten und sind von der Holzfaser Aufdachdämmung überzeugt. Auch die Termineinhaltung und die Qualität der Ausführung waren sehr gut.“",
    name: "Milos Petrovic (Fix & Wertig GmbH) – Dachsanierung",
  },
  {
    zitat:
      "„Positiv hervorzuheben ist, dass die Handwerker der Fa. Scharpf generell sehr zuverlässig und pünktlich sind, sowie äußerst sauber arbeiten.“",
    name: "Friedemann Nau – Dachreparatur und VELUX-Dachfenster",
  },
  {
    zitat:
      "„Die Monteure waren sehr gut und haben ihre Arbeit sehr professionell und sehr sauber gemacht.“",
    name: "Claudia Lonardoni – Dachfenster-Austausch",
  },
  {
    zitat:
      "„Pünktlich; sauber, ordentlich. Austausch eines Dachfensters. […] Werden weitere Dachfenster von Scharpf austauschen lassen.“",
    name: "Bernd Kern – Dachfenster-Austausch",
  },
];

// Vertrauenssignale vor CTAs (B612-Konzept, Abschnitt 5).
export const TRUST_SIGNALE = [
  "80 Jahre Erfahrung – 3 Generationen",
  "Meisterbetrieb – Handwerkskammer Stuttgart",
  "VELUX und ROTO -Partner",
  "120+ Referenzprojekte",
] as const;

export const PARTNERS = ["RESTORA GMBH", "ES TORE"] as const;

// Rechte, vertikale Social-Icon-Leiste (wie XD): Instagram, Pinterest, Facebook, Houzz.
// TODO: echte Profil-URLs vom Kunden einpflegen – aktuell Platzhalter.
/**
 * Social-Profile. Facebook stammt aus der offiziellen E-Mail-Signatur der
 * E. Scharpf GmbH.
 *
 * TODO(Scharpf): Instagram, Pinterest und Houzz sind uns nicht bekannt und
 * auf holzbau-scharpf.de nicht verlinkt. Sobald die Profile vorliegen, hier
 * eintragen – bis dahin werden die Icons bewusst nicht gerendert, statt auf
 * "#" zu zeigen (das waren zuvor 8 tote Links pro Seite: 4 im Footer und
 * 4 in der schwebenden CTA-Leiste).
 */
const ALLE_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/e.scharpf_holzbau_zimmerei/",
    icon: "instagram",
  },
  { label: "Pinterest", href: "", icon: "pinterest" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/E-Scharpf-Holzbau-207747759323041/",
    icon: "facebook",
  },
  { label: "Houzz", href: "", icon: "houzz" },
] as const;

export const SOCIAL_LINKS = ALLE_SOCIAL_LINKS.filter((s) => s.href.length > 0);
