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
        imageNote="Dachgauben-Projektfoto: Wohnhaus mit fertiger Gaube und Blechverkleidung, heller Wohnraum dahinter."
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
          imageNote="Foto Gaube innen: heller Wohnraum mit Gaubenfenster und viel Tageslicht."
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
          imageNote="Foto Gauben-Typen: Wohnhaus-Ansicht mit Schleppgaube und Satteldachgaube im Vergleich."
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
          imageNote="Foto Blecharbeiten Gaube: verkleidete Gaubenwange in Zink oder Kupfer, Detailaufnahme."
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/dach"
        imageNotes={[
          "Referenz Dach 1: Gaube mit Blechverkleidung am Wohnhaus.",
          "Referenz Dach 2: nachträglich eingebaute Schleppgaube.",
          "Referenz Dach 3: Dachausbau mit Gaube, Innenansicht.",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
