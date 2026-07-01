import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  ValueBand,
  CtaBanner,
} from "@/components/sections";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – E. Scharpf GmbH | Familienbetrieb seit 1946" },
      {
        name: "description",
        content:
          "Drei Generationen Holzbau-Expertise: Lernen Sie das Team hinter E. Scharpf kennen – Zimmerer, Dachdecker und Restauratoren aus Esslingen.",
      },
    ],
  }),
  component: UeberUns,
});

const TEAM = [
  {
    name: "Eberhard Scharpf sen.",
    funktion: "Geschäftsführer / Restaurator",
    imageNote:
      "Portrait Eberhard Scharpf sen.: Geschäftsführer und Restaurator, freundlich, in Arbeitskleidung oder vor der Werkhalle.",
  },
  {
    name: "Eberhard Scharpf jun.",
    funktion: "Geschäftsführer / Dipl. Ing. FH",
    imageNote:
      "Portrait Eberhard Scharpf jun.: Geschäftsführer und Dipl. Ing. FH, freundlich, vor Firmengelände.",
  },
  {
    name: "Alexander Schwarz",
    funktion: "Betriebsleiter",
    imageNote:
      "Portrait Alexander Schwarz: Betriebsleiter, in Arbeitskleidung, sachlich und zugewandt.",
  },
  {
    name: "Ole Schäfer",
    funktion: "Projektleiter",
    imageNote:
      "Portrait Ole Schäfer: Projektleiter, freundlich, vor Baustelle oder Werkhalle.",
  },
  {
    name: "Stefan Strifler",
    funktion: "Projektleiter",
    imageNote:
      "Portrait Stefan Strifler: Projektleiter, in Arbeitskleidung, kompetenter Eindruck.",
  },
  {
    name: "Max Kaltmaier",
    funktion: "Zimmermeister / Restaurator",
    imageNote:
      "Portrait Max Kaltmaier: Zimmermeister und Restaurator, mit Werkzeug oder vor historischem Fachwerk.",
  },
];

const WERTE = [
  {
    title: "Geschichte erhalten",
    text: "Wir bauen nicht nur Häuser – wir erhalten Geschichte und bewahren historische Bausubstanz für kommende Generationen.",
  },
  {
    title: "Wohnraum schaffen",
    text: "Aus Ideen wird gebauter Raum: durchdacht, langlebig und passgenau auf die Menschen zugeschnitten, die darin leben.",
  },
  {
    title: "Handwerkliche Sorgfalt",
    text: "In jedes Projekt stecken wir unsere handwerkliche Sorgfalt, unser Fachwissen und unsere Leidenschaft für Holz.",
  },
  {
    title: "Verantwortung",
    text: "Wir stehen für das, was wir tun – verlässlich, ehrlich und mit vollem Einsatz, vom ersten Gespräch bis zur Abnahme.",
  },
];

function UeberUns() {
  return (
    <div>
      <PageHero
        eyebrow="Über uns"
        title="Das Unternehmen"
        lead="Seit über 75 Jahren steht E. Scharpf in Esslingen für handwerkliche Präzision, Verlässlichkeit und die Liebe zum Werkstoff Holz. Was 1946 als Familienbetrieb begann, ist heute eines der erfahrensten Holzbau- und Restaurierungsunternehmen im Großraum Stuttgart."
        ctaLabel="Kontakt aufnehmen"
        imageNote="Übersichtsbild Über uns: Firmengebäude, Werkhalle oder Teamfoto von E. Scharpf in Esslingen."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Seit 1946"
              title="Unternehmensgeschichte"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              E. Scharpf GmbH wurde 1946 in Esslingen am Neckar gegründet. Über
              drei Generationen haben wir unser Handwerk verfeinert, unser Team
              ausgebaut und unsere Leistungen erweitert – immer mit dem Anspruch,
              Holz so einzusetzen, dass es hält, schützt und begeistert.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Heute arbeiten bei uns erfahrene Zimmerer, Dachdecker und
              Restauratoren. Unsere eigene Werkhalle in Esslingen ermöglicht die
              Vorfertigung ganzer Holzbauteile – ein entscheidender Vorteil für
              Qualität, Geschwindigkeit und Planbarkeit.
            </p>
          </div>
          <PlaceholderImage
            note="Historisches Firmenfoto oder Aufnahme der Werkhalle: zeigt drei Generationen Handwerk und die eigene Vorfertigung in Esslingen."
            ratio="landscape"
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          kicker="Ihre Ansprechpartner"
          title="Unser Team"
          intro="Hinter jedem Projekt steht ein Team aus erfahrenen Zimmerern, Dachdeckern und Restauratoren. Viele unserer Mitarbeiter sind seit mehr als zehn Jahren Teil der E. Scharpf Familie."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person) => (
            <div
              key={person.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <PlaceholderImage
                note={person.imageNote}
                ratio="portrait"
                className="rounded-none border-0 border-b border-dashed border-border"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {person.funktion}
                </p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p>
                    <a
                      href={CONTACT.phoneHref}
                      className="hover:text-primary hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={CONTACT.emailHref}
                      className="hover:text-primary hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          center
          kicker="Werte & Philosophie"
          title="Wofür wir stehen"
          intro="Wir bauen nicht nur Häuser – wir erhalten Geschichte, schaffen Wohnraum und stehen für das, was wir tun. Mit jedem Projekt stecken wir unsere handwerkliche Sorgfalt, unser Fachwissen und unsere Leidenschaft für Holz."
        />
      </Section>

      <ValueBand values={WERTE} />

      <Section>
        <SectionHeading
          kicker="Offene Stellen"
          title="Werden Sie Teil des Teams"
          intro="Wir investieren in die Zukunft – und in Menschen, die mit Leidenschaft bauen. Aktuell suchen wir Verstärkung."
        />
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Vollzeit
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-card-foreground">
              Zimmerer (m/w/d) – Vollzeit – Esslingen am Neckar
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Historische Fachwerkhäuser, moderne Holzkonstruktionen und präzise
              Dacharbeiten in einem eingespielten Team – mit übertariflicher
              Vergütung und moderner Ausstattung.
            </p>
          </div>
          <Link
            to="/karriere"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
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
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Wollen Sie Teil unseres Teams werden?"
        text="Wir suchen Menschen, die mit Leidenschaft bauen – und bieten dafür mehr als andere."
        ctaLabel="Jetzt bewerben"
        ctaTo="/karriere"
      />
    </div>
  );
}
