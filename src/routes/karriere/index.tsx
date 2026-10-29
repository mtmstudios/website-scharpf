import { createFileRoute, Link } from "@tanstack/react-router";
import { BewerbungsButton } from "@/components/bewerbungs-modal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CategoryBar } from "@/components/sections";
import gruppenbildAsset from "@/assets/scharpf_gruppenbild_hochzeit.jpg.asset.json";

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
  { label: "Klempner / Flaschner (m/w/d)", to: "/karriere/klempner" },
  { label: "Ausbildung Zimmermann", to: "/karriere/zimmermann-ausbildung" },
  { label: "Ausbildung Dachdecker", to: "/karriere/dachdecker-ausbildung" },
  { label: "Bauhelfer (m/w/d)", to: "/karriere/bauhelfer" },
] as const;

function Karriere() {
  return (
    <div>
      <CategoryBar breadcrumbs={[{ label: "01 HERO\nKarriere bei E. Scharpf Holzbau Restaurierung" }]} color="#E6DCC4" />

      <Section className="!pt-4 pb-0 lg:!pt-4 lg:pb-0">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Handwerk mit Anspruch. Karriere mit Perspektive.
        </h2>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          80 Jahre Erfahrung, drei Generationen und rund 40 Mitarbeitende. Bei E. Scharpf Holzbau in Esslingen vereinen wir drei Gewerke unter einem Dach: Zimmerer, Dachdecker und Klempner. Hier lernst du von erfahrenen Profis, arbeitest an außergewöhnlichen Projekten und hast beste Möglichkeiten, dich beruflich weiterzuentwickeln.
        </p>
      </Section>

      {/* Deine Wunschstelle bei uns */}
      <Section className="!pt-0 lg:!pt-0">
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Werde Teil unseres Teams
        </h1>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ob Zimmerer, Dachdecker, Klempner oder Bauhelfer: Wir suchen Menschen,
          die mit Leidenschaft bauen – und bieten dafür mehr als andere.
        </p>
        <div className="mt-8">
          <BewerbungsButton>Jetzt bewerben</BewerbungsButton>
        </div>

        {/* Job-Selektor als Kachel-Clickthrough */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STELLEN.map((s) =>
            s.to === "/karriere/dachdecker-ausbildung" ? (
              <div
                key={s.to}
                aria-disabled="true"
                className="flex cursor-not-allowed items-center justify-between rounded-lg border border-border bg-muted p-6 opacity-60"
              >
                <span className="font-display text-lg font-bold text-muted-foreground">
                  {s.label}
                  <span className="mt-1 block text-sm font-normal">
                    Aktuell keine Ausbildung
                  </span>
                </span>
              </div>
            ) : (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {s.label}
              </span>
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
                className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            ),
          )}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <PlaceholderImage
            note="Team von E. Scharpf"
            src={gruppenbildAsset.url}
            ratio="wide"
          />
        </div>
      </Section>

      {/* Beschreibung deiner Stelle */}
      <Section muted className="pt-0">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Stellenbeschreibung:
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
            Bei uns sicherst Du den Erhalt traditioneller Bausubstanz und setzt
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
          <BewerbungsButton>Jetzt bewerben</BewerbungsButton>
        </div>
      </Section>
    </div>
  );
}
