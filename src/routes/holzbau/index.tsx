import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, LeistungBlock, CtaBanner } from "@/components/sections";

export const Route = createFileRoute("/holzbau/")({
  head: () => ({
    meta: [
      { title: "Holzbau & Konstruktion Esslingen – Holzhäuser, Aufstockung, Carport" },
      {
        name: "description",
        content:
          "Holzhausbau, Aufstockungen, Anbauten und Carports aus einer Hand. Vorfertigung in eigener Werkhalle für kurze Bauzeiten. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Holzbau,
});

function Holzbau() {
  return (
    <div>
      {/* Titel + Intro */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Holzbau & Konstruktion
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Vom schlüsselfertigen Holzhaus bis zur Aufstockung: Wir planen und
          bauen jede Holzkonstruktion aus einer Hand. In unserer eigenen
          Werkhalle fertigen wir Wand- und Dachelemente millimetergenau vor –
          für kurze Bauzeiten und beste Qualität auf der Baustelle.
        </p>
        <div className="mt-10">
          <PlaceholderImage
            note="Holzbau-Hero: Dachstuhl, Holzrahmenbau oder fertiges Holzhaus."
            ratio="wide"
          />
        </div>
      </Section>

      <Section>
        <LeistungBlock
          title="Holzhausbau / Aufstockung / Anbauten"
          text="Holz ist leicht, tragfähig und ökologisch – ideal für Aufstockungen, Anbauten und den kompletten Holzhausbau. Wir stocken bestehende Gebäude in Holzrahmenbauweise auf, erweitern sie durch durchdachte Anbauten und errichten Holzhäuser vom Entwurf bis zur Montage."
          imageNote="Foto: Aufstockung in Holzbauweise oder fertiges Holzhaus."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Carport"
          text="Ein Carport aus Holz schützt Ihr Fahrzeug und fügt sich harmonisch in Haus und Garten ein. Wir konstruieren und montieren maßgefertigte Carports – auf Wunsch mit Geräteraum, Gründach oder Photovoltaik-Vorbereitung."
          imageNote="Foto: fertiger Holz-Carport, freistehend oder am Haus."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Referenzen im Bereich Holzbau und Konstruktion"
          text="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie unsere abgeschlossenen Holzbauprojekte."
          ctaLabel="Mehr sehen"
          ctaTo="/referenzen"
          imageNote="Foto: abgeschlossenes Holzbauprojekt als Referenz."
        />
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
