import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, ValueBand } from "@/components/sections";
import { LEISTUNGEN } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

// Werte-Wörter exakt wie XD (grünes Band): Qualität · Innovation · Erfahrung · Lösungsorientiert
const VALUES = [
  { title: "Qualität" },
  { title: "Innovation" },
  { title: "Erfahrung" },
  { title: "Lösungsorientiert" },
];

// Kundenstimmen – Zitate wörtlich aus dem XD (Startseite).
const KUNDENSTIMMEN = [
  {
    zitat:
      "„Sehr geehrter Herr Scharpf … wir fanden die Zusammenarbeit mit Ihnen sehr gut und Sie haben uns gut beraten. Dies haben wir auch mehrfach gegenüber unserem Bauleiter und Roto erwähnt.“",
    quelle:
      "Bauvorhaben: Roto Dachfenster und Zubehör 2015 – Bauherrschaft Fam. Bosselmann aus Sillenbuch",
  },
  {
    zitat:
      "„Lob und Dank an Ihre Zimmerer, die die Dachfenster eingebaut haben. Es wurde sehr sauber gearbeitet, man hat nicht gesehen, dass Handwerker da waren.“",
    quelle: "Bauvorhaben: Dachfenster Fam. Seeker in Esslingen",
  },
  {
    zitat:
      "„Top Handwerker! Sehr gute Betreuung und Top Qualität. Scharpf Holzbau hat meine Terrasse renoviert und ist super auf meine Wünsche eingegangen. Sie konnten mich bei jeder Fragestellung sehr gut beraten. Die Terrasse sieht hervorragend aus und die Handwerker waren immer nett und kompetent. Wirklich zu empfehlen!“",
    quelle: "Niklas Schwarz",
  },
];

function Stars() {
  // XD: vier ausgefüllte Sterne pro Google-Bewertungskarte.
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 4 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
      {/* Hero – linksbündig wie XD */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Benötigen Sie eine Restaurierung, Holzbauleistungen oder
            Dachsanierung ?
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Wir planen und bauen Ihr Projekt – zuverlässig &amp; nachhaltig.
          </p>
          <div className="mt-8">
            <CtaButton>Kostenlose Projektberatung Anfordern</CtaButton>
          </div>
          <div className="mt-12">
            <PlaceholderImage
              note="Dachstuhl in der Werkhalle von E. Scharpf"
              src="/fotos/scharpf_dachstuhl.jpg"
              ratio="wide"
            />
          </div>
        </div>
      </section>

      {/* Kurze Vorstellung des Unternehmens */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Meisterbetrieb aus Esslingen seit über 80 Jahren
            </h2>
            <span className="mt-4 block h-1 w-24 rounded bg-[#e2be96]" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wir sind ein Familienbetrieb in der dritten Generation. Mit viel
              Erfahrung und klarem Fokus auf hochwertige und innovative
              Zimmerarbeiten. Wir sind bekannt für versiertes Handwerk, moderne
              Fertigung und termingerechte Ausführung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton to="/ueber-uns">Mehr Lesen</CtaButton>
              <CtaButton to="/ratgeber">Ratgeber</CtaButton>
            </div>
          </div>
          <PlaceholderImage
            note="Vorfertigung von Holzbauteilen in der Werkhalle in Esslingen"
            src="/fotos/scharpf_vorfertigung.jpg"
            ratio="landscape"
          />
        </div>
      </Section>

      {/* Unsere Leistungen – 01–05 mit Unterpunkten (XD-Reihenfolge) */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Unsere Leistungen
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {LEISTUNGEN.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {l.nr} {l.title}
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {l.bullets.map((b) => (
                  <li key={b}>- {b}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      {/* Google-Bewertungen */}
      <Section>
        <div className="mb-8">
          <CtaButton to="/ratgeber">Ratgeber</CtaButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-display text-2xl font-bold text-muted-foreground/70">
                Google Bewertung
              </h3>
              <div className="mt-16">
                <Stars />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CtaButton to="/referenzen">Mehr Lesen</CtaButton>
        </div>
      </Section>

      {/* Werte-Band (grün) */}
      <ValueBand values={VALUES} />

      {/* Kundenstimmen – Zitate wörtlich aus dem XD */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Kundenstimmen
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Was unsere Kunden über die Zusammenarbeit mit E. Scharpf sagen.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {KUNDENSTIMMEN.map((k, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Stars />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-card-foreground">
                {k.zitat}
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                {k.quelle}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}
