import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  CtaBanner,
} from "@/components/sections";
import { PlaceholderImage } from "@/components/placeholder-image";

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

const ARTIKEL = [
  {
    to: "/ratgeber/kfw-dachsanierung",
    headline:
      "KFW-Förderung Dachsanierung: Was wird gefördert und wie hoch ist der Zuschuss?",
    teaser:
      "Wer sein Dach energetisch saniert, kann von staatlichen Förderprogrammen profitieren. Wir erklären, welche Maßnahmen förderfähig sind und wie Sie den Antrag richtig stellen.",
    imageNote:
      "Ratgeberbild KFW-Förderung: energetische Dachsanierung mit Holzfaserdämmung im Detail, dazu Fördersymbolik.",
  },
  {
    to: "/ratgeber/holzfassaden",
    headline: "Holzfassaden: Welches System passt zu meinem Gebäude?",
    teaser:
      "Vorgehängte Fassade, Trespa oder Holzschalung – die Unterschiede sind größer als man denkt. Wir geben einen Überblick über die gängigen Systeme und ihre Vor- und Nachteile.",
    imageNote:
      "Ratgeberbild Holzfassaden: drei Fassadensysteme im Vergleich – vorgehängte Holzfassade, Trespa und Holzschalung.",
  },
  {
    to: "/ratgeber/denkmalschutz",
    headline:
      "Denkmalschutz: Was Eigentümer wissen müssen, bevor sie sanieren.",
    teaser:
      "Ein denkmalgeschütztes Gebäude zu sanieren ist komplex – aber machbar. Dieser Ratgeber erklärt, was genehmigungspflichtig ist und welche Fördermittel es gibt.",
    imageNote:
      "Ratgeberbild Denkmalschutz: historisches Fachwerkgebäude mit sichtbarer denkmalgerechter Sanierung.",
  },
  {
    to: "/ratgeber/dachgauben-einbauen",
    headline:
      "Dachgauben nachträglich einbauen – so geht es und das kostet es.",
    teaser:
      "Eine Gaube macht aus einem engen Dachboden einen richtigen Wohnraum. Wir erklären, was beim nachträglichen Einbau zu beachten ist.",
    imageNote:
      "Ratgeberbild Dachgauben: nachträglich eingebaute Gaube, die einen hellen Wohnraum unter der Dachschräge schafft.",
  },
  {
    to: "/ratgeber/holz-als-baustoff",
    headline: "Warum Holz? Die Stärken des ältesten Baustoffs der Welt.",
    teaser:
      "Holz ist CO₂-neutral, robust, ästhetisch und regional verfügbar. Was spricht dafür, was dagegen – und wann ist Holz die richtige Wahl?",
    imageNote:
      "Ratgeberbild Holz als Baustoff: gestapelte regionale Hölzer und sichtbare Holzkonstruktion, natürlich und robust.",
  },
];

function Ratgeber() {
  return (
    <div>
      <PageHero
        eyebrow="Ratgeber"
        title="Wissen rund ums Bauen mit Holz."
        lead="KFW-Förderungen, Materialwissen, Denkmalschutz-Tipps: Hier finden Sie fundierte Antworten von echten Holzbau-Experten."
        ctaLabel="Kostenlose Projektberatung Anfordern"
        imageNote="Übersichtsbild Ratgeber: Holzbau-Experte im Gespräch oder Detailaufnahme von Materialien und Plänen."
      />

      <Section>
        <SectionHeading
          kicker="Artikel & Wissenswertes"
          title="Unsere Ratgeber-Artikel"
          intro="Klar und ohne Fachjargon: praxisnahes Wissen für alle, die mit Holz bauen oder ein Gebäude sanieren möchten."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTIKEL.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <PlaceholderImage
                note={a.imageNote}
                ratio="landscape"
                className="rounded-none border-0 border-b border-dashed border-border"
              />
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-lg font-bold leading-snug text-card-foreground">
                  {a.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.teaser}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Weiterlesen
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
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Haben Sie eine konkrete Frage?"
        text="Wir beraten Sie kostenlos."
        ctaLabel="Kontakt aufnehmen"
      />
    </div>
  );
}
