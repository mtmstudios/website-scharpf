import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section } from "@/components/sections";

export const Route = createFileRoute("/ratgeber/")({
  head: () => ({
    meta: [
      { title: "Ratgeber Holzbau – KFW, Denkmalschutz, Materialwissen" },
      {
        name: "description",
        content:
          "Fundierte Antworten von echten Holzbau-Experten: KFW-Förderungen, Denkmalschutz, Materialwissen und Bauratgeber von E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Ratgeber,
});

// „Welches Projekt planen Sie" – vier Kategorie-Kacheln wie im XD.
const KATEGORIEN = [
  { title: "Restaurierung & Sanierung", to: "/restaurierung" },
  { title: "Holzbau & Konstruktion", to: "/holzbau" },
  { title: "Dach", to: "/dach" },
  { title: "Fassade & Außenbereiche", to: "/fassade" },
] as const;

// News-Artikel (Headlines wörtlich aus dem XD).
const NEWS = [
  {
    headline: "Jetzt energetisch sanieren mit einem günstigen Darlehen von der KFW",
    teaser:
      "Wer sein Dach energetisch saniert, kann von günstigen KFW-Darlehen profitieren. Wir erklären, welche Maßnahmen gefördert werden.",
    imageNote: "News-Bild: energetische Dachsanierung mit Holzfaserdämmung.",
  },
  {
    headline: "Sorglos Dachsanierung aus einer Hand – Jetzt KFW Zuschüsse bis 20% bekommen",
    teaser:
      "Dachsanierungen und Dachumdeckungen aus einer Hand. An- bei der energetischen Sanierung werden Ihr Dach und die Wärmedämmung auf den aktuellen Stand gebracht. Wir bieten auf Wunsch die komplette Abwicklung.",
    imageNote: "News-Bild: neu eingedecktes, gedämmtes Dach.",
  },
  {
    headline: "DIE alternative VELUX Panorama Lichtlösung",
    teaser:
      "DIE alternative VELUX Panorama VELUX Lichtlösung – so entsteht ein großzügiger Kopffreiraum mit bestem Ausblick. Für ein Dachgeschoss, in dem man sich rundum wohlfühlt.",
    imageNote: "News-Bild: VELUX Panorama Dachfenster von innen.",
  },
] as const;

// FAQs – Fragen wörtlich aus dem XD.
const FAQS = [
  "Mehr zu E.Scharpf",
  "Infos zum Material",
  "Macht E.Scharpf auch Neubau",
  "Bieten Sie Aufstockungen an?",
  "Welche Leistungen bietet E.scharpf an?",
  "Macht E.Scharpf energetische Dachsanierungen?",
] as const;

// „Unsere Kompetenzen" – Karten-Überschriften wörtlich aus dem XD.
const KOMPETENZEN = [
  {
    title: "Qualifikationen & Zertifikate",
    text: "Meisterbetrieb, Fachbetrieb für Denkmalpflege und geprüfte Qualifikationen im Holzbau – für versiertes Handwerk und termingerechte Ausführung.",
  },
  {
    title: "Interessantes zu Leistungen",
    text: "Von der Restaurierung über den Holzbau bis zur Dachsanierung: ein Überblick über unser vollständiges Leistungsspektrum.",
  },
  {
    title: "Mehr zum Holzbau",
    text: "Warum Holz? CO₂-neutral, robust, ästhetisch und regional verfügbar – die Stärken des ältesten Baustoffs der Welt.",
  },
  {
    title: "Mehr zu unseren Partnern",
    text: "Starke Partner für starke Projekte: Wir arbeiten mit RESTORA GmbH und ES Tore zusammen.",
  },
  {
    title: "Engagement für Denkmalschutz",
    text: "Historisches Handwerk für denkmalgerechte Erhaltung – in enger Abstimmung mit dem Landesdenkmalamt.",
  },
] as const;

function Ratgeber() {
  return (
    <div>
      {/* Welches Projekt planen Sie – 4 Kategorie-Kacheln */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Welches Projekt planen Sie
        </h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KATEGORIEN.map((k) => (
            <Link key={k.to} to={k.to} className="group flex flex-col">
              <PlaceholderImage
                note={`Kategorie-Bild: ${k.title}`}
                ratio="landscape"
                className="transition-transform group-hover:-translate-y-1"
              />
              <h2 className="mt-4 font-display text-xl font-bold text-foreground group-hover:text-primary">
                {k.title}
              </h2>
            </Link>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          News
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NEWS.map((n) => (
            <article key={n.headline} className="flex flex-col">
              <PlaceholderImage note={n.imageNote} ratio="landscape" />
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
                {n.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {n.teaser}
              </p>
              <Link
                to="/ratgeber"
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Mehr lesen
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          FAQs
        </h2>
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-sm text-muted-foreground">Hilfe</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {FAQS.map((q) => (
            <Link
              key={q}
              to="/ratgeber"
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {q}
            </Link>
          ))}
        </div>
      </Section>

      {/* Unsere Kompetenzen */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Unsere Kompetenzen
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {KOMPETENZEN.map((k) => (
            <div key={k.title} className="flex flex-col">
              <h3 className="font-display text-lg font-bold text-foreground">
                {k.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {k.text}
              </p>
              <Link
                to="/ratgeber"
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Mehr lesen
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Material */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <PlaceholderImage
            note="Material-Bild: gestapelte regionale Hölzer und sichtbare Holzkonstruktion."
            ratio="landscape"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Material
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Der Baustoff für die Generationen – warum? Das erfahren Sie hier.
              Wir sind Ihr Fachbetrieb für Zimmererarbeiten im Großraum
              Esslingen und Stuttgart. Durch Fachlich top ausgebildete
              Mitarbeiter und stetige interne und externe Weiterbildung haben
              wir sowohl die Ausführung als auch die Qualität stets höchsten
              Maßstäben unterworfen und gewährleistet, dass Sie sich in Ihrem
              Haus wohlfühlen. Wir sind Marktführer in unserem Bereich, dies
              können Ihnen unsere Kunden, unsere Referenzen und unser über 70
              jähriges Bestehen bestätigen.
            </p>
            <div className="mt-8">
              <CtaButton to="/ueber-uns">Mehr Lesen</CtaButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
