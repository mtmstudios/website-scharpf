import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CtaBanner, CategoryBar } from "@/components/sections";
import firmengebaeudeAsset from "@/assets/scharpf_firmengebaeude.jpg.asset.json";

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
    name: "Eberhard Scharpf sen.",
    funktionen: ["Geschäftsführer", "Restaurator"],
    foto: "/__l5e/assets-v1/30ede298-30d3-4b9b-be36-1d4841362e56/scharpf_team_Senior.jpg",
  },
  {
    name: "Eberhard Scharpf jun.",
    funktionen: ["Geschäftsführer", "Dipl Ing. (FH)"],
    foto: "/__l5e/assets-v1/567afaab-8b77-44cc-b557-626b6f66bf90/scharpf_team_Junior.jpg",
  },
  {
    name: "Alexander Schwarz",
    funktionen: [
      "Betriebsleiter",
      "Fachtechniker Holzbau",
      "Energieeffizienz - Experte",
      "Zimmerermeister",
    ],
    foto: "/__l5e/assets-v1/4bcd6db1-0bf1-42a3-aa8e-69955c5758ae/scharpf_team_Alexander.jpg",
  },
  {
    name: "Ole Schäfer",
    funktionen: [
      "Projektleiter",
      "Zimmerermeister",
      "Staat. Geprägt. Bautechniker",
    ],
    foto: "/__l5e/assets-v1/62e8d66b-65c6-40fd-a197-7cfe4c75ca63/scharpf_team_Ole.jpg",
  },
  {
    name: "Stefan Strifler",
    funktionen: ["Projektleiter", "Zimmerermeister"],
    foto: "/__l5e/assets-v1/cb5f6c00-7b1d-4091-928b-5b252a0929b0/scharpf_team_Stefan.jpg",
  },
  {
    name: "Max Kaltmaier",
    funktionen: ["Zimmerermeister", "Restaurator"],
    foto: "/__l5e/assets-v1/0ad6673e-4b08-497d-ad49-408161f9074e/scharpf_team_Max.jpg",
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
      <CategoryBar breadcrumbs={[{ label: "Über uns" }]} color="#A68B7A" />

      {/* Das Unternehmen mit Firmengebäude + Geschichte darunter */}
      <Section className="pt-6 lg:pt-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10 lg:space-y-14">
            <div>
              <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                Unser Unternehmen
              </h1>
              <span className="mt-4 block h-1 w-24 rounded bg-primary" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                E. Scharpf ist ein Familienbetrieb in dritter Generation aus
                Esslingen am Neckar. Mit viel Erfahrung und klarem Fokus auf
                hochwertige und innovative Zimmerarbeiten sind wir bekannt für
                versiertes Handwerk, moderne Fertigung und termingerechte
                Ausführung. Ob Restaurierung, Holzbau oder Dach – wir planen und
                bauen Ihr Projekt zuverlässig und nachhaltig.
              </p>
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                Die Geschichte des Meisterbetriebes
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
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={firmengebaeudeAsset.url}
              alt="Firmengebäude der E. Scharpf Holzbau GmbH"
              loading="lazy"
              className="h-full w-[108%] max-w-none object-cover object-left"
            />
          </div>

        </div>
      </Section>

      {/* Das Team der E. Scharpf Holzbau GmbH */}
      <Section muted>
        <div className="space-y-10">
          <img
            src="/__l5e/assets-v1/53fa69ab-6d1c-41bf-86be-b2cc6abae9bb/Scharpf_Gruppe_2_crop.jpg"
            alt="Das Team der E. Scharpf Holzbau GmbH"
            loading="lazy"
            className="w-full rounded-lg object-cover aspect-[1920/1035]"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Unser Team – die Scharpf Holzbau GmbH
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
                note={
                  person.foto
                    ? "Ansprechpartner bei E. Scharpf"
                    : `Portrait Mitarbeiter ${i + 1} (Foto folgt vom Kunden)`
                }
                src={person.foto}
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

      {/* Holzband: Finden Sie Ihren direkten Ansprechpartner */}
      <CtaBanner
        title="Finden Sie Ihren direkten Ansprechpartner"
        ctaLabel="Kontakt"
        ctaTo="/kontakt"
        tone="wood"
        trust={false}
      />

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
        title="Willst Du Teil unseres Teams werden?"
        ctaLabel="Jetzt bewerben"
        ctaSearch={{ anliegen: "bewerbung" }}
        ctaTo="/karriere"
        tone="wood"
        woodFlip
      />

    </div>
  );
}
