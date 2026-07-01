import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Zimmerer & Dachdecker Jobs Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Wir suchen Zimmerer, Dachdecker und Fachkräfte (m/w/d). Mehr als ein Job – echte Perspektiven in einem modernen Familienbetrieb in Esslingen.",
      },
    ],
  }),
  component: Karriere,
});

const JOBS = [
  {
    title: "Zimmerer (m/w/d)",
    note: "Vollzeit · Esslingen am Neckar",
  },
  {
    title: "Dachdecker (m/w/d)",
    note: "Vollzeit · Esslingen am Neckar",
  },
  {
    title: "Zimmermann Auszubildender",
    note: "Ausbildung · Esslingen am Neckar",
  },
  {
    title: "Dachdecker Auszubildender",
    note: "Ausbildung · Esslingen am Neckar",
  },
  {
    title: "Bauhelfer (m/w/d)",
    note: "Vollzeit · Esslingen am Neckar",
  },
];

const VORTEILE = [
  "Übertarifliche Vergütung und Sonderleistungen",
  "Moderne Werkzeuge und Fahrzeuge",
  "Eigene Werkhalle – kein Warten auf Fremdfirmen",
  "Kollegiales Team, flache Hierarchien",
  "Weiterbildung und Aufstiegsmöglichkeiten",
  "Sicherer Arbeitsplatz in einem etablierten Familienbetrieb",
];

const ANFORDERUNGEN = [
  {
    rolle: "Zimmerer",
    punkte: [
      "Abgeschlossene Ausbildung als Zimmerer",
      "Handwerkliches Geschick",
      "Teamfähigkeit",
      "Führerschein Klasse B",
    ],
  },
  {
    rolle: "Dachdecker",
    punkte: [
      "Abgeschlossene Ausbildung als Dachdecker",
      "Schwindelfrei",
      "Teamfähigkeit",
      "Führerschein Klasse B",
    ],
  },
  {
    rolle: "Für beide",
    punkte: [
      "Erfahrung im Holzbau und Restaurierung von Vorteil, aber kein Muss",
    ],
  },
];

function Karriere() {
  return (
    <div>
      <PageHero
        eyebrow="Karriere"
        title="Deine Wunschstelle bei uns."
        lead="Ob Dachdecker, Zimmerer oder Bauhelfer: Wir suchen Menschen, die mit Leidenschaft bauen – und bieten dafür mehr als andere."
        ctaLabel="Jetzt bewerben"
        ctaTo="/kontakt"
        imageNote="Übersichtsbild Karriere: eingespieltes Team von E. Scharpf bei der Arbeit auf der Baustelle oder in der Werkhalle."
      />

      <Section>
        <SectionHeading
          kicker="Offene Stellen"
          title="Finde deine Stelle"
          intro="Wähle die Position, die zu dir passt – und bewirb dich formlos. Wir freuen uns auf dich."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <a
              key={job.title}
              href="#bewerbung"
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {job.note}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-card-foreground">
                {job.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Jetzt bewerben
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Über die Stelle"
              title="Allgemeine Stellenbeschreibung"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Bei E. Scharpf baust du nicht irgendetwas – du baust Dinge, auf die
              du stolz sein kannst. Historische Fachwerkhäuser, moderne
              Holzkonstruktionen, präzise Dacharbeiten. In einem Team, das
              zusammenhält und einem Betrieb, der in die Zukunft investiert.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-card-foreground">
              Deine Vorteile bei uns
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {VORTEILE.map((v) => (
                <li key={v} className="flex gap-3 text-sm text-foreground/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Dein Profil"
          title="Das musst du mitbringen"
          intro="Wichtig ist uns, dass du dein Handwerk beherrschst und Teil eines Teams sein willst. Das Übrige bringen wir dir bei."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ANFORDERUNGEN.map((a) => (
            <div
              key={a.rolle}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {a.rolle}
              </h3>
              <ul className="mt-6 space-y-3">
                {a.punkte.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div id="bewerbung">
        <CtaBanner
          title="Klingt nach dir?"
          text="Dann schreib uns einfach – formlos per E-Mail oder über das Formular. Wir melden uns schnell."
          ctaLabel="Jetzt bewerben"
        />
      </div>
    </div>
  );
}
