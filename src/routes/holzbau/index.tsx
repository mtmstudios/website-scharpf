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

// Texte: B612 E_Scharpf_Website_Texte.docx, Abschnitt 4 (Holzbau & Konstruktion).
function Holzbau() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Leistungen"
        title="Holzbau mit System – vom Entwurf bis zur Montage."
        lead="Familienbetrieb in der dritten Generation. Bekannt für versiertes Handwerk, moderne Fertigung und termingerechte Ausführung."
        ctaLabel="Projekt besprechen"
        imageNote="Neubau in Holzbauweise von E. Scharpf"
        imageSrc="/fotos/scharpf_neubau.jpg"
      />

      <Section>
        <LeistungBlock
          title="Präzision aus der Werkhalle – Geschwindigkeit auf der Baustelle"
          text="In unserer modernen Werkhalle in Esslingen fertigen wir Dach- und Wandelemente inklusive Dämmung und Lattung komplett vor. Montage auf der Baustelle: ein Bruchteil der üblichen Zeit, witterungsunabhängig, präzise auf den Millimeter. Für Architekten bedeutet das planbare Termine und reproduzierbare Qualität – für Bauherren weniger Wartezeit."
          ctaLabel="Projekt anfragen"
          moreTo="/holzbau/dachstuhl"
          moreLabel="Mehr zu Dachstühlen →"
          bullets={[
            "Neubau von Dachstühlen (Satteldach, Walmdach, Pultdach und mehr)",
            "Holzrahmen- und Holztafelbau",
            "CAD-gestützte Planung und Ausführung",
            "Vorfertigung von Wand- und Dachelementen inkl. Dämmung, Lattung und Folien",
          ]}
          imageNote="Vorfertigung von Holzbauteilen in der Werkhalle"
          imageSrc="/fotos/scharpf_vorfertigung.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Aufstockungen in Holzbauweise"
          text="Aufgrund des geringen Gewichts von Holz gibt es statisch kaum Grenzen. Unabhängig von der bisherigen Dachform kann Ihr Gebäude aufgestockt werden – in Holzrahmenbauweise, als Vollgeschoss oder Teilaufstockung. Wie Sie es wünschen."
          ctaLabel="Aufstockung anfragen"
          moreTo="/holzbau/aufstockungen"
          moreLabel="Mehr zu Aufstockungen →"
          bullets={[
            "Vollgeschoss-Aufstockung auf bestehendes Gebäude",
            "Teilaufstockung und Dachausbau",
            "Kurze Bauzeit durch Vorfertigung",
          ]}
          imageNote="Aufstockung in Holzbauweise"
          imageSrc="/fotos/scharpf_Aufstockung.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Holzhäuser, Anbauten & Carports"
          text="Ob schlüsselfertiges Holzhaus, durchdachter Anbau oder eleganter Carport – wir planen und bauen Ihr Projekt aus einer Hand. Die Vorfertigung in unserer Werkhalle garantiert präzise Maße und kurze Bauzeiten."
          ctaLabel="Kostenlose Projektberatung anfordern"
          moreTo="/holzbau/holzhausbau"
          moreLabel="Mehr zum Holzhausbau →"
          bullets={[
            "Holzhausbau (schlüsselfertig oder Ausbauhaus)",
            "Anbauten in Holzrahmenbauweise",
            "Carport-Konstruktionen und Terrassenüberdachungen",
            "Dachgauben – nachträglich einbaubar, mehr Raum unter der Dachschräge",
          ]}
          imageNote="Maßgefertigter Holz-Carport"
          imageSrc="/fotos/scharpf_carport.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie, was aus unserer Zusammenarbeit entstehen kann."
        to="/referenzen/holzbau"
        imageNotes={[
          "Aufstockung in Holzrahmenbauweise",
          "Vorgefertigte Holzelemente bei der Montage",
          "Fertiggestellter Holzbau",
        ]}
        imageSrcs={[
          "/fotos/scharpf_aufstockung_01.jpg",
          "/fotos/scharpf_aufstockung_02.jpg",
          "/fotos/scharpf_aufstockung_03.jpg",
        ]}
      />

      <CtaBanner illustrationSrc="/illustrationen/dachstuhl-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
