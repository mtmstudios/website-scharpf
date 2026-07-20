import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/holzbau/holzhausbau")({
  head: () => ({
    meta: [
      { title: "Holzhaus bauen Esslingen – Holzrahmenbau | E. Scharpf" },
      {
        name: "description",
        content:
          "Holzhausbau in Holzrahmenbauweise: schlüsselfertig oder als Ausbauhaus, vorgefertigt in eigener Werkhalle. E. Scharpf GmbH – Zimmerei aus Esslingen.",
      },
    ],
  }),
  component: Holzhausbau,
});

function Holzhausbau() {
  return (
    <div>
      <PageHero
        eyebrow="Holzbau & Konstruktion"
        title="Ihr Holzhaus – geplant, vorgefertigt, montiert"
        lead="Ob schlüsselfertiges Holzhaus oder Ausbauhaus: Wir planen und bauen Ihr Zuhause aus einer Hand. Die Vorfertigung in unserer Werkhalle garantiert präzise Maße, kurze Bauzeiten und ein Ergebnis, das dauerhaft überzeugt."
        ctaLabel="Kostenlose Projektberatung Anfordern"
        imageNote="Neubau in Holzbauweise von E. Scharpf"
        imageSrc="/fotos/scharpf_neubau.jpg"
      />

      <Section>
        <LeistungBlock
          title="Holzrahmenbau mit Werkhallen-Vorfertigung"
          text="Wand- und Dachelemente entstehen komplett in unserer Werkhalle in Esslingen – inklusive Dämmung, Lattung und Folien. Auf der Baustelle werden sie in wenigen Tagen montiert: witterungsunabhängig, millimetergenau und mit planbaren Terminen."
          ctaLabel="Projektberatung anfordern"
          bullets={[
            "Holzhausbau schlüsselfertig oder als Ausbauhaus",
            "CAD-gestützte Planung und Ausführung",
            "Vorfertigung kompletter Wand- und Dachelemente",
            "Kurze Bauzeit durch Montage in wenigen Tagen",
          ]}
          imageNote="Vorfertigung von Wandelementen in der Werkhalle"
          imageSrc="/fotos/scharpf_vorfertigung.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Bauen mit Holz – gesund und nachhaltig"
          text="Holz ist CO₂-neutral, regional verfügbar und sorgt für ein spürbar gutes Raumklima. Wir arbeiten bevorzugt mit ökologisch unbedenklichen, regionalen Holzsorten – für ein Haus, in dem sich Generationen wohlfühlen."
          ctaLabel="Projekt besprechen"
          moreTo="/ratgeber/holz-als-baustoff"
          moreLabel="Warum Holz? Zum Ratgeber →"
          imageNote="Sichtbare Holzkonstruktion im Neubau"
          imageSrc="/fotos/scharpf_vorfertigung_02.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart."
        to="/referenzen/holzbau"
        imageNotes={[
          "Neubau in Holzbauweise",
          "Vorgefertigte Elemente bei der Montage",
          "Fertiggestellter Holzbau",
        ]}
        imageSrcs={[
          "/fotos/scharpf_neubau.jpg",
          "/fotos/scharpf_aufstockung_02.jpg",
          "/fotos/scharpf_aufstockung_01.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
