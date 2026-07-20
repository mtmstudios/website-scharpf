import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/holzbau/aufstockungen")({
  head: () => ({
    meta: [
      { title: "Aufstockung in Holzbauweise Esslingen | E. Scharpf" },
      {
        name: "description",
        content:
          "Aufstockungen in Holzbauweise: neuer Wohnraum ohne Umzug. Geringes Gewicht, kaum statische Grenzen, kurze Bauzeit durch Werkhallen-Vorfertigung. E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Aufstockungen,
});

function Aufstockungen() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Holzbau & Konstruktion"
        title="Aufstockungen in Holzbauweise – neuer Wohnraum ohne Umzug"
        lead="Aufgrund des geringen Gewichts von Holz gibt es statisch kaum Grenzen. Unabhängig von der bisherigen Dachform kann Ihr Gebäude aufgestockt werden – in Holzrahmenbauweise, als Vollgeschoss oder Teilaufstockung. Wie Sie es wünschen."
        ctaLabel="Aufstockung anfragen"
        imageNote="Wohnhaus mit neu aufgesetztem Holzgeschoss"
        imageSrc="/fotos/scharpf_Aufstockung.jpg"
      />

      <Section>
        <LeistungBlock
          title="Warum Holz? Geringes Gewicht, kaum Grenzen"
          text="Holz ist leicht und dennoch tragfähig – das macht es zum idealen Baustoff für Aufstockungen. Das geringe Eigengewicht belastet die bestehende Statik nur minimal, sodass Sie auf vielen Gebäuden ein zusätzliches Geschoss realisieren können, ohne aufwendig verstärken zu müssen. Unabhängig von der bisherigen Dachform finden wir die passende Lösung."
          ctaLabel="Aufstockung anfragen"
          bullets={[
            "Geringes Eigengewicht schont die bestehende Statik",
            "Statisch kaum Grenzen, unabhängig von der Dachform",
            "Zusätzliches Geschoss meist ohne aufwendige Verstärkung",
          ]}
          imageNote="Aufstockung in Holzrahmenbauweise"
          imageSrc="/fotos/scharpf_aufstockung_01.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Vollgeschoss, Teilaufstockung oder Dachausbau"
          text="Ob Sie ein komplettes Geschoss ergänzen, nur einen Teil aufstocken oder das bestehende Dach ausbauen möchten – wir planen die Aufstockung genau nach Ihrem Bedarf. In Holzrahmenbauweise entsteht so hochwertiger, gut gedämmter Wohnraum, der sich harmonisch in Ihr Gebäude einfügt."
          ctaLabel="Kostenlose Projektberatung anfordern"
          bullets={[
            "Vollgeschoss-Aufstockung auf bestehendes Gebäude",
            "Teilaufstockung und Dachausbau",
            "Hochwertiger, gut gedämmter Wohnraum in Holzrahmenbauweise",
          ]}
          imageNote="Aufgestocktes Wohnhaus mit neuem Obergeschoss"
          imageSrc="/fotos/scharpf_aufstockung_02.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Kurze Bauzeit durch Werkhallen-Vorfertigung"
          text="In unserer modernen Werkhalle in Esslingen fertigen wir Wand- und Dachelemente inklusive Dämmung und Lattung komplett vor. Die Montage auf der Baustelle dauert nur einen Bruchteil der üblichen Zeit, ist witterungsunabhängig und millimetergenau. Das bedeutet für Sie: weniger Baustellen-Chaos und schneller einziehen – ganz ohne Umzug."
          ctaLabel="Projekt besprechen"
          bullets={[
            "Vorfertigung von Wand- und Dachelementen inkl. Dämmung",
            "Witterungsunabhängige, millimetergenaue Montage",
            "Deutlich kürzere Bauzeit auf der Baustelle",
          ]}
          imageNote="Vorfertigung von Wandelementen in der Werkhalle"
          imageSrc="/fotos/scharpf_vorfertigung_03.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie, was aus unserer Zusammenarbeit entstehen kann."
        to="/referenzen"
        imageNotes={[
          "Abgeschlossene Aufstockung in Esslingen",
          "Aufstockung mit neuem Obergeschoss",
          "Vorfertigung in der Werkhalle",
        ]}
        imageSrcs={[
          "/fotos/scharpf_aufstockung_03.jpg",
          "/fotos/scharpf_Aufstockung.jpg",
          "/fotos/scharpf_vorfertigung_04.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
