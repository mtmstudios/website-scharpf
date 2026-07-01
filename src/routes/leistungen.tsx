import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  FaqSection,
  CtaBanner,
} from "@/components/sections";
import { LEISTUNGEN } from "@/lib/site";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – E. Scharpf GmbH | Holzbau Esslingen" },
      {
        name: "description",
        content:
          "Restaurierung, Holzbau, Dach, Fassade: Das vollständige Leistungsspektrum von E. Scharpf im Großraum Esslingen und Stuttgart.",
      },
    ],
  }),
  component: Leistungen,
});

const FAQ = [
  {
    q: "Was macht E. Scharpf?",
    a: "E. Scharpf GmbH ist ein seit über 80 Jahren in Esslingen ansässiger Holzbau- und Restaurierungsbetrieb. Wir führen Projekte im gesamten Großraum Stuttgart aus.",
  },
  {
    q: "Mit welchen Materialien arbeiten Sie?",
    a: "Wir arbeiten bevorzugt mit ökologisch unbedenklichen, regionalen Holzsorten. Details zu Materialien und Behandlungsmethoden finden Sie in unserem Ratgeber.",
  },
  {
    q: "Machen Sie auch Neubau?",
    a: "Ja – wir realisieren Holzhäuser, Holzrahmenbauweise und Aufstockungen. Unsere eigene Werkhalle ermöglicht die Vorfertigung kompletter Wand- und Dachelemente.",
  },
  {
    q: "Bieten Sie Aufstockungen an?",
    a: "Ja. Dachgeschoss-Aufstockungen in Holzbauweise sind eine unserer Spezialitäten. Die Vorfertigung in unserer Werkhalle verkürzt die Bauzeit auf der Baustelle erheblich.",
  },
  {
    q: "Welche Leistungen bietet E. Scharpf an?",
    a: "Restaurierung, Holzbau, Dacharbeiten, Fassadengestaltung, Holzhausbau, Aufstockungen, Carport-Bau sowie Beratung und Service.",
  },
  {
    q: "Machen Sie energetische Dachsanierungen?",
    a: "Ja. Wir sanieren Ihr Dach inklusive zeitgemäßer Wärmedämmung und beraten Sie zu KFW-Förderanträgen – bis zu 20 % der Kosten können Sie zurückbekommen.",
  },
];

function Leistungen() {
  return (
    <div>
      <PageHero
        eyebrow="Leistungen"
        title="Welches Projekt planen Sie?"
        lead="Von der Dachsanierung bis zur Fachwerk-Restaurierung: Wir sind Ihr Ansprechpartner für alle Holzbau- und Zimmererarbeiten im Großraum Esslingen und Stuttgart."
        ctaLabel="Kostenlose Projektberatung Anfordern"
        imageNote="Übersichtsbild Leistungen: Collage oder starkes Einzelfoto, das das Spektrum von Holzbau über Dach bis Restaurierung zeigt."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="font-mono text-sm font-semibold text-primary">
                {l.nr}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-card-foreground">
                {l.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {l.teaser}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Mehr erfahren
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
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          center
          kicker="Häufige Fragen"
          title="Gut zu wissen"
        />
        <div className="mt-12">
          <FaqSection items={FAQ} />
        </div>
      </Section>

      <CtaBanner
        title="Sprechen Sie uns an."
        text="Wir helfen Ihnen gerne, das richtige Leistungsangebot für Ihr Projekt zu finden."
        ctaLabel="Kontakt aufnehmen"
      />
    </div>
  );
}
