import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/holzbau/")({
  head: () => ({
    meta: [
      { title: "Holzbau & Konstruktion – Vorfertigung aus eigener Werkhalle" },
      {
        name: "description",
        content:
          "Aufstockungen, Holzhausbau und Dachstühle: E. Scharpf fertigt Holzbauteile in eigener Werkhalle vor – präzise, terminzuverlässig, im Großraum Stuttgart.",
      },
    ],
  }),
  component: Holzbau,
});

function Holzbau() {
  return (
    <div>
      <PageHero
        eyebrow="Holzbau & Konstruktion"
        title="Holzbau mit System – vom Entwurf bis zur Montage."
        lead="Familienbetrieb in der dritten Generation. Bekannt für versiertes Handwerk, moderne Fertigung und termingerechte Ausführung."
        ctaLabel="Projekt besprechen"
        imageNote="Holzbau-Projektfoto: Dachstuhl, Holzrahmenbau oder fertiges Holzhaus im Großraum Stuttgart."
      />

      <Section>
        <LeistungBlock
          title="Präzision aus der Werkhalle – Geschwindigkeit auf der Baustelle"
          text="In unserer modernen Werkhalle in Esslingen fertigen wir Dach- und Wandelemente inklusive Dämmung und Lattung komplett vor. Montage auf der Baustelle: ein Bruchteil der üblichen Zeit, witterungsunabhängig, präzise auf den Millimeter. Für Architekten bedeutet das planbare Termine und reproduzierbare Qualität – für Bauherren weniger Wartezeit."
          ctaLabel="Projekt anfragen"
          bullets={[
            "Neubau von Dachstühlen (Satteldach, Walmdach, Pultdach und mehr)",
            "Holzrahmen- und Holztafelbau",
            "CAD-gestützte Planung und Ausführung",
            "Vorfertigung von Wand- und Dachelementen inkl. Dämmung, Lattung und Folien",
          ]}
          imageNote="Werkhallen-Foto: Vorfertigung von Wand-/Dachelementen, CNC oder Abbund."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Aufstockungen in Holzbauweise"
          text="Aufgrund des geringen Gewichts von Holz gibt es statisch kaum Grenzen. Unabhängig von der bisherigen Dachform kann Ihr Gebäude aufgestockt werden – in Holzrahmenbauweise, als Vollgeschoss oder Teilaufstockung. Wie Sie es wünschen."
          ctaLabel="Aufstockung anfragen"
          ctaTo="/holzbau/aufstockungen"
          bullets={[
            "Vollgeschoss-Aufstockung auf bestehendes Gebäude",
            "Teilaufstockung und Dachausbau",
            "Kurze Bauzeit durch Vorfertigung",
          ]}
          imageNote="Aufstockungs-Foto: Gebäude mit aufgesetztem Holz-Geschoss, Kran-Montage."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Holzhäuser, Anbauten & Carports"
          text="Ob schlüsselfertiges Holzhaus, durchdachter Anbau oder eleganter Carport – wir planen und bauen Ihr Projekt aus einer Hand. Die Vorfertigung in unserer Werkhalle garantiert präzise Maße und kurze Bauzeiten."
          ctaLabel="Kostenlose Projektberatung anfordern"
          bullets={[
            "Holzhausbau (schlüsselfertig oder Ausbauhaus)",
            "Anbauten in Holzrahmenbauweise",
            "Carport-Konstruktionen und Terrassenüberdachungen",
            "Dachgauben – nachträglich einbaubar, mehr Raum unter der Dachschräge",
          ]}
          imageNote="Foto Holzhaus / Carport: fertiges Holzhaus oder moderner Holz-Carport."
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie, was aus unserer Zusammenarbeit entstehen kann."
        to="/referenzen/holzbau"
        imageNotes={[
          "Referenz Holzbau 1: Aufstockung Esslingen.",
          "Referenz Holzbau 2: schlüsselfertiges Holzhaus.",
          "Referenz Holzbau 3: Dachstuhl / Carport.",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
