import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CategoryBar } from "@/components/sections";

export const Route = createFileRoute("/karriere/")({
  head: () => ({
    meta: [
      { title: "Zimmerer & Dachdecker Jobs Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Deine Wunschstelle bei uns: Wir suchen Zimmerer und Dachdecker (m/w/d). Traditionelles Handwerk trifft modernste Technik – im Familienbetrieb Esslingen.",
      },
    ],
  }),
  component: Karriere,
});

// „Deine Vorteile bei uns" – Paare wörtlich aus dem XD.
const VORTEILE = [
  {
    title: "Freiraum & Flexibilität",
    text: "4,5-Tage-Woche für mehr Freizeit.",
  },
  {
    title: "Entwicklung & Sicherheit",
    text: "Weiterbildungsmöglichkeiten & betriebliche Altersvorsorge.",
  },
  {
    title: "Spaß & Zusammenhalt",
    text: "Firmenevents, Ausflüge, Grillabende.",
  },
  {
    title: "Vorteile & Top-Ausstattung",
    text: "Jobrad-Leasing, Einkaufsvorteile & modernste Werkzeuge.",
  },
] as const;

// „Das musst du mitbringen" – Punkte wörtlich aus dem XD.
const ANFORDERUNGEN = [
  "Du hast eine abgeschlossene Ausbildung als Zimmerer oder Dachdecker oder bringst vergleichbare handwerkliche Erfahrung mit.",
  "Du verfügst über handwerkliches Geschick, räumliches Vorstellungsvermögen und technisches Verständnis.",
  "Du bist körperlich belastbar, schwindelfrei und packst gerne mit an. Egal ob in der Werkhalle oder auf der Baustelle.",
  "Du bist teamfähig, zuverlässig und verantwortungsbewusst.",
  "Du arbeitest präzise und mit einem hohen Qualitätsbewusstsein.",
] as const;

// Job-Selektor (B612-Konzept 4.11): Kacheln führen zu den Job-Landingpages.
const STELLEN = [
  { label: "Zimmerer (m/w/d)", to: "/karriere/zimmerer" },
  { label: "Dachdecker (m/w/d)", to: "/karriere/dachdecker" },
  { label: "Ausbildung Zimmermann", to: "/karriere/zimmermann-ausbildung" },
  { label: "Ausbildung Dachdecker", to: "/karriere/dachdecker-ausbildung" },
  { label: "Bauhelfer (m/w/d)", to: "/karriere/bauhelfer" },
] as const;

function Karriere() {
  return (
    <div>
      {/* Deine Wunschstelle bei uns */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Deine Wunschstelle bei uns.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ob Dachdecker, Zimmerer oder Bauhelfer: Wir suchen Menschen, die mit
          Leidenschaft bauen – und bieten dafür mehr als andere.
        </p>
        <div className="mt-8">
          <CtaButton to="/kontakt">Jetzt bewerben</CtaButton>
        </div>

        {/* Job-Selektor */}
        <div className="mt-12 flex flex-wrap gap-3">
          {STELLEN.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <PlaceholderImage
            note="Zimmerer von E. Scharpf bei der Vorfertigung"
            src="/fotos/scharpf_vorfertigung_01.jpg"
            ratio="wide"
          />
        </div>
      </Section>

      {/* Beschreibung deiner Stelle */}
      <Section muted className="pt-0">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Beschreibung deiner Stelle:
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Ob Neubau von Dachstühlen, Holzhäusern, Fassaden oder die
            fachgerechte Restaurierung historischer Fachwerkhäuser, bei uns
            trifft traditionelles Handwerk auf modernste Technik. Gemeinsam
            fertigen wir Bauteile wie Dach- oder Wandelemente in unserer
            Werkhalle vor, komplett mit Dämmung und Lattung. Anschließend werden
            sie transportiert und auf der Baustelle passgenau wieder montiert.
            Das bedeutet witterungsunabhängige Arbeit, beste Qualität und
            sichere Installation.
          </p>
          <p>
            Wir bieten dir abwechslungsreiche Aufgaben im Neubau, in der
            Sanierung und besonders in der Restaurierung historischer Gebäude.
            Bei uns sicherst du den Erhalt traditioneller Bausubstanz und setzt
            zugleich modernste Technik für neue Bauprojekte ein. Dabei
            arbeitest du mit ökologisch unbedenklichen Materialien, unterstützt
            von einem starken Team, das Qualität und Präzision großschreibt.
          </p>
        </div>
      </Section>

      {/* Deine Vorteile bei uns */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Deine Vorteile bei uns
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {VORTEILE.map((v) => (
            <div key={v.title} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 text-primary"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1 text-base text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Das musst du mitbringen */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Das musst du mitbringen:
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {ANFORDERUNGEN.map((a) => (
            <li key={a} className="flex gap-3 text-base text-foreground/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 text-primary"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaButton to="/kontakt">Jetzt bewerben</CtaButton>
        </div>
      </Section>
    </div>
  );
}
