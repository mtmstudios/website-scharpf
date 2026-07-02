import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CtaBanner } from "@/components/sections";

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

// Team wie im XD. Namen kommen final vom Kunden – hier als Platzhalter,
// Funktionen exakt aus dem XD übernommen.
// XD-Namen (Referenz): Eberhard Scharpf sen., Eberhard Scharpf jun.,
// Alexander Schwarz, Ole Schäfer, Stefan Strifler, Max Kaltmaier.
const TEAM = [
  {
    name: "Name folgt",
    funktionen: ["Geschäftsführer", "Restaurator"],
  },
  {
    name: "Name folgt",
    funktionen: ["Geschäftsführer", "Dipl Ing. (FH)"],
  },
  {
    name: "Name folgt",
    funktionen: [
      "Betriebsleiter",
      "Fachtechniker Holzbau",
      "Energieeffizienz - Experte",
      "Zimmerermeister",
    ],
  },
  {
    name: "Name folgt",
    funktionen: [
      "Projektleiter",
      "Zimmerermeister",
      "Staat. Geprägt. Bautechniker",
    ],
  },
  {
    name: "Name folgt",
    funktionen: ["Projektleiter", "Zimmerermeister"],
  },
  {
    name: "Name folgt",
    funktionen: ["Zimmerermeister", "Restaurator"],
  },
] as const;

// Stellenanzeigen – Texte wörtlich aus dem XD.
const STELLEN = [
  {
    title: "Ausbildung",
    text: "Du bist motiviert und suchst einen Ausbildungsplatz zum Zimmermann? Dann bewirb dich bei uns! Wir haben ein tolles Team aus innovativen, jungen Mitarbeitern und erfahrenen „alten Hasen“. Wir sind in den Bereichen Altbausanierung, Restauration und Neubau tätig. Mehr Infos zur Ausbildung findest du bei Z wie Zimmerer.",
  },
  {
    title: "Zimmerer Geselle / Gesellin",
    text: "Wir suchen einen motivierten Zimmerer oder eine motivierte Zimmerin mit abgeschlossener Berufsausbildung und etwas Berufserfahrung für eine Vollzeitstelle in unserem Team. Voraussetzungen: Führerschein (mindestens Klasse B), Teamfähigkeit, Verantwortungsbewusstsein, Konfliktfähigkeit.",
  },
  {
    title: "Flaschner / Klempner Geselle / Gesellin",
    text: "Wir suchen einen Flaschner mit abgeschlossener Berufsausbildung und Berufserfahrung für eine Vollzeitstelle in unserem Team. Voraussetzungen: Führerschein (mindestens Klasse B), Selbständiges Arbeiten, Teamfähigkeit, Verantwortungsbewusstsein, Konfliktfähigkeit, Flexibilität im Aufgabenbereich.",
  },
] as const;

function UeberUns() {
  return (
    <div>
      {/* Das Unternehmen + Geschichte (versetzt zweispaltig wie XD) */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Das Unternehmen
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              E. Scharpf ist ein Familienbetrieb in dritter Generation aus
              Esslingen am Neckar. Mit viel Erfahrung und klarem Fokus auf
              hochwertige und innovative Zimmerarbeiten sind wir bekannt für
              versiertes Handwerk, moderne Fertigung und termingerechte
              Ausführung. Ob Restaurierung, Holzbau oder Dach – wir planen und
              bauen Ihr Projekt zuverlässig und nachhaltig.
            </p>
          </div>
          <div className="lg:mt-32">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Geschichte
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Wir sind ein Familienbetrieb, der 1946 von Emil Scharpf ins Leben
              gerufen wurde. In den ersten Jahrzehnten diente ein Gelände in der
              Haldenstraße in Oberesslingen als Firmensitz und Lagerplatz. Dieses
              Gelände lag in einem Mischgebiet und bot schließlich keine
              Möglichkeit mehr, den Betrieb weiter zu vergrößern. Nachdem Eberhard
              Scharpf den Betrieb 1985 von seinem Vater übernommen hatte, suchte er
              nach einem neuen Gelände mit Entwicklungspotential und 1989 zog das
              Unternehmen in die Fritz-Müller-Straße 115 um, wo es bis heute
              ansässig ist.
            </p>
          </div>
        </div>
      </Section>

      {/* Das Team der E. Scharpf Holzbau GmbH */}
      <Section muted>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <PlaceholderImage
            note="Teamfoto E. Scharpf: Zimmerer, Dachdecker und Restauratoren vor der Werkhalle in Esslingen."
            ratio="landscape"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Das Team der E. Scharpf Holzbau GmbH
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hinter jedem Projekt steht ein eingespieltes Team aus erfahrenen
              Zimmerern, Dachdeckern und Restauratoren. Durch fachlich top
              ausgebildete Mitarbeiter sowie stetige interne und externe
              Weiterbildung halten wir Ausführung und Qualität stets auf höchstem
              Niveau – damit Sie sich in Ihrem Haus wohlfühlen.
            </p>
          </div>
        </div>
      </Section>

      {/* Ihre Ansprechpartner bei uns im Büro */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Ihre Ansprechpartner bei uns im Büro
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person, i) => (
            <div key={i} className="flex flex-col">
              <PlaceholderImage
                note={`Portrait Mitarbeiter ${i + 1} (Foto folgt vom Kunden)`}
                ratio="portrait"
              />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {person.name}
              </h3>
              <div className="mt-1 text-sm text-muted-foreground">
                {person.funktionen.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Grünes Band: Finden Sie Ihren direkten Ansprechpartner */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Finden Sie Ihren direkten Ansprechpartner
          </h2>
          <div className="mt-8">
            <CtaButton to="/kontakt">Kontakt</CtaButton>
          </div>
        </div>
      </section>

      {/* Wir suchen Zimmerer und Dachdecker (m/w/d) */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Wir suchen Zimmerer und Dachdecker (m/w/d)
        </h2>
        <div className="mt-10 space-y-10">
          {STELLEN.map((s) => (
            <div key={s.title}>
              <h3 className="font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Wollen Sie Teil unseres Teams werden?"
        ctaLabel="Jetzt bewerben"
        ctaTo="/karriere"
        tone="mint"
      />
    </div>
  );
}
