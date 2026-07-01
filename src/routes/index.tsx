import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Section,
  SectionHeading,
  ValueBand,
  CtaBanner,
} from "@/components/sections";
import { LEISTUNGEN } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

const VALUES = [
  { title: "Qualität", text: "Ausführung nach höchsten Maßstäben" },
  {
    title: "Innovation",
    text: "Modernste Technik trifft traditionelles Handwerk",
  },
  { title: "Erfahrung", text: "Über 80 Jahre Expertise im Holzbau" },
  {
    title: "Lösungsorientiert",
    text: "Wir finden den Weg – auch bei komplexen Projekten",
  },
];

const REVIEWS = [
  {
    quote:
      "Professionelle Ausführung, perfekte Kommunikation – wir sind sehr zufrieden.",
    author: "Michael R., Esslingen",
  },
  {
    quote:
      "Für die Restaurierung unseres Fachwerkhauses genau der richtige Partner.",
    author: "Sabine K., Stuttgart",
  },
  {
    quote: "Termingerecht, sauber und top Qualität. Klare Empfehlung!",
    author: "Thomas M., Nürtingen",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Benötigen Sie eine Restaurierung, Holzbauleistungen oder
            Dachsanierung?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Wir planen und bauen Ihr Projekt – zuverlässig &amp; nachhaltig.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton>Kostenlose Projektberatung Anfordern</CtaButton>
          </div>
          <div className="mt-14">
            <PlaceholderImage
              note="Hero-Bild: großes, repräsentatives Projektfoto im Querformat – z. B. restauriertes Fachwerkhaus, Dachstuhl in der Werkhalle oder fertige Dachsanierung."
              ratio="wide"
              className="mx-auto max-w-5xl"
            />
          </div>
        </div>
      </section>

      {/* Unternehmens-Intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Willkommen
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Meisterbetrieb aus Esslingen – seit über 80 Jahren
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Seit über 80 Jahren steht E. Scharpf für handwerkliche Präzision und
              nachhaltiges Bauen mit Holz. Als Fachbetrieb für Zimmerer- und
              Dachdeckerarbeiten im Raum Esslingen und Stuttgart vereinen wir
              traditionelles Handwerk mit modernster Fertigungstechnik. In unserer
              eigenen Werkhalle fertigen wir Holzbauteile passgenau vor – für
              planbare Termine, höchste Qualität und witterungsunabhängige Montage.
              Vertrauen Sie dem Erfahrungsschatz von drei Generationen.
            </p>
          </div>
          <PlaceholderImage
            note="Werkhallen- oder Team-Foto: Zimmerer bei der Vorfertigung von Holzbauteilen in der eigenen Werkhalle in Esslingen."
            ratio="landscape"
          />
        </div>
      </Section>

      {/* Leistungs-Kacheln */}
      <Section muted>
        <SectionHeading
          center
          kicker="Unsere Leistungen"
          title="Alles rund um Holzbau, Dach & Restaurierung"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Werte-Banner (Mint) */}
      <ValueBand values={VALUES} />

      {/* Kundenstimmen */}
      <Section>
        <SectionHeading
          center
          kicker="Kundenstimmen"
          title="Das sagen unsere Kunden"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                „{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Abschluss-CTA */}
      <CtaBanner
        title="Bereit für Ihr Projekt?"
        text="Sprechen Sie uns an – wir beraten Sie kostenlos und unverbindlich."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
