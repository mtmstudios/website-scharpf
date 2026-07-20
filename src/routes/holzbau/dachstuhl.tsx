import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/holzbau/dachstuhl")({
  head: () => ({
    meta: [
      { title: "Dachstuhl Neubau Esslingen – Zimmerei E. Scharpf" },
      {
        name: "description",
        content:
          "Neue Dachstühle vom Zimmerermeister: Satteldach, Walmdach, Pultdach – CAD-geplant und in eigener Werkhalle vorgefertigt. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Dachstuhl,
});

function Dachstuhl() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Holzbau & Konstruktion"
        title="Dachstühle vom Zimmerermeister"
        lead="Ob Neubau oder Erneuerung: Wir planen, fertigen und errichten Dachstühle für jede Dachform – CAD-gestützt geplant und in unserer Werkhalle in Esslingen präzise vorgefertigt."
        ctaLabel="Anfrage stellen"
        imageNote="Neu errichteter Dachstuhl"
        imageSrc="/fotos/scharpf_dachstuhl.jpg"
      />

      <Section>
        <LeistungBlock
          title="Jede Dachform – präzise abgebunden"
          text="Vom klassischen Satteldach bis zum Walm- oder Pultdach: Der Abbund erfolgt CAD-gestützt und millimetergenau in der Werkhalle. Auf der Baustelle steht der neue Dachstuhl dadurch in kürzester Zeit – witterungsunabhängig vorbereitet und termingerecht montiert."
          ctaLabel="Anfrage stellen"
          bullets={[
            "Neubau von Dachstühlen (Satteldach, Walmdach, Pultdach und mehr)",
            "Dachstuhl-Erneuerung im Bestand",
            "CAD-gestützte Planung und Ausführung",
            "Vorfertigung inkl. Dämmung, Lattung und Folien",
          ]}
          imageNote="Dachstuhl-Konstruktion im Detail"
          imageSrc="/fotos/scharpf_dachstuhl_02.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Ein Partner für das komplette Dach"
          text="Auf Wunsch übernehmen wir neben dem Dachstuhl auch Eindeckung, Dämmung und Klempnerarbeiten – alles aus einer Hand, ohne Koordinationsaufwand für Sie."
          ctaLabel="Projekt besprechen"
          moreTo="/dach"
          moreLabel="Alle Dach-Leistungen →"
          imageNote="Dacharbeiten am neuen Dachstuhl"
          imageSrc="/fotos/scharpf_Dacharbeiten.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Sehen Sie unsere abgeschlossenen Holzbauprojekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/holzbau"
        imageNotes={[
          "Neuer Dachstuhl",
          "Vorfertigung in der Werkhalle",
          "Fertiggestellter Holzbau",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachstuhl.jpg",
          "/fotos/scharpf_vorfertigung.jpg",
          "/fotos/scharpf_aufstockung_01.jpg",
        ]}
      />

      <CtaBanner illustrationSrc="/illustrationen/dachstuhl-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
