import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/dachgauben")({
  head: () => ({
    meta: [
      { title: "Dachgauben Esslingen – mehr Wohnraum & Licht | E. Scharpf" },
      {
        name: "description",
        content:
          "Dachgauben nachträglich einbauen: Schleppgaube, Satteldachgaube oder Walmdachgaube. Mehr Licht, mehr Wohnraum, höherer Immobilienwert. E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Dachgauben,
});

function Dachgauben() {
  return (
    <div>
      <PageHero
        eyebrow="Dach"
        title="Dachgauben – mehr Licht und Wohnraum unter dem Dach"
        lead="Mehr Raum unter der Dachschräge – Gauben können nachträglich eingebaut werden, meist beim Dachausbau oder im Zuge einer Sanierung. Gauben verbessern das Wohnerlebnis, hellen dunkle Räume auf und steigern den Immobilienwert."
        ctaLabel="Gauben-Beratung vereinbaren"
        imageNote="Wohnhaus mit fertiger Gaube und Blechverkleidung"
        imageSrc="/fotos/scharpf__dachgauben.jpg"
      />

      <Section>
        <LeistungBlock
          title="Mehr Wohnraum, mehr Wert"
          text="Eine Gaube macht aus einem engen, dunklen Dachboden einen vollwertigen Wohnraum. Sie schafft Stehhöhe, holt Tageslicht ins Obergeschoss und wertet Ihre Immobilie sichtbar auf. Ob als Rückzugsort, Kinderzimmer oder Arbeitsplatz – die Gaube nutzt Fläche, die vorher verloren war."
          ctaLabel="Gauben-Beratung vereinbaren"
          bullets={[
            "Zusätzliche Stehhöhe und nutzbare Wohnfläche",
            "Deutlich mehr Tageslicht im Dachgeschoss",
            "Wertsteigerung Ihrer Immobilie",
          ]}
          imageNote="Gaube mit Dachfenster für viel Tageslicht"
          imageSrc="/fotos/scharpf_dachfenster_gaube.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Die passende Gauben-Form für Ihr Dach"
          text="Nicht jede Gaube passt zu jedem Dach. Wir beraten Sie zur passenden Bauform – von der klassischen Schleppgaube über die Satteldachgaube bis zur Walmdachgaube. Entscheidend sind Dachneigung, Optik und der gewünschte Raumgewinn. Wir stimmen die Gaube harmonisch auf Ihr Gebäude ab."
          bullets={[
            "Schleppgaube – schlicht, wirtschaftlich, viel Raumgewinn",
            "Satteldachgaube – klassische Optik, gut belichtet",
            "Walmdachgaube – elegant, an anspruchsvolle Dächer angepasst",
          ]}
          imageNote="Gaube mit Blechverkleidung an der Wange"
          imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Nachträglicher Einbau – Blecharbeiten aus eigener Werkstatt"
          text="Gauben lassen sich nachträglich einbauen – meist beim Dachausbau oder im Zuge einer Sanierung, auf Wunsch auch bei laufendem Betrieb. Alle Blecharbeiten fertigen wir in unserer eigenen Werkstatt: individuell, passgenau und schnell montiert. So bleibt die Gaube dauerhaft dicht und fügt sich sauber in Ihr Dach ein."
          ctaLabel="Gaube anfragen"
          bullets={[
            "Nachträglicher Einbau auch bei laufendem Betrieb",
            "Sämtliche Blecharbeiten aus eigener Werkstatt",
            "Individuelle Passform, dauerhaft dicht",
          ]}
          imageNote="Nachträglich eingebaute Gaube von E. Scharpf"
          imageSrc="/fotos/scharpf__dachgauben.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen"
        imageNotes={[
          "Gaube mit Blechverkleidung am Wohnhaus",
          "Nachträglich eingebaute Gaube",
          "Gaube mit Dachfenster, Innenansicht",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachgaube_flaschner.jpg",
          "/fotos/scharpf__dachgauben.jpg",
          "/fotos/scharpf_dachfenster_gaube.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
