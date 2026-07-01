import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/dachsanierung")({
  head: () => ({
    meta: [
      { title: "Dachsanierung Esslingen – energetisch & KFW-gefördert | Scharpf" },
      {
        name: "description",
        content:
          "Energetische Dachsanierung mit ökologischer Holzfaserdämmung und KFW-Förderberatung. Bis zu 20 % staatlicher Zuschuss. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Dachsanierung,
});

function Dachsanierung() {
  return (
    <div>
      <PageHero
        eyebrow="Dach"
        title="Dachsanierung – energetisch, nachhaltig, gefördert"
        lead="Energetische Sanierung, Hitzeschutz im Sommer oder Nutzung der Sonnenenergie – wir arbeiten seit Jahrzehnten ökologisch mit Holzfaserdämmung und natürlichen Materialien. Auf Wunsch übernehmen wir die KFW-Förderberatung und Antragsstellung."
        ctaLabel="Dach-Check vereinbaren"
        imageNote="Dachsanierungs-Projektfoto: energetisch saniertes Dach mit neuer Eindeckung, im Anschnitt sichtbare Dämmung."
      />

      <Section>
        <LeistungBlock
          title="Komplette Dachsanierung aus einer Hand"
          text="Ob Neueindeckung, energetische Ertüchtigung oder die Vorbereitung für eine Photovoltaikanlage – wir sanieren Ihr Dach vom Dachstuhl bis zur letzten Ziegelreihe. Vor jeder Maßnahme steht ein gründlicher Dach-Check: Wir prüfen den Zustand von Sparren, Dämmung und Eindeckung und schlagen die passende Lösung für Ihr Dach vor."
          ctaLabel="Dach-Check vereinbaren"
          bullets={[
            "Komplette Dachsanierungen und Neueindeckungen",
            "Ökologische Holzfaserdämmung",
            "Photovoltaik-Unterdeckungen",
            "KFW-geförderte energetische Sanierung",
          ]}
          imageNote="Foto Dachsanierung: Dachstuhl mit neuer Dämmung und Lattung, Zimmerer bei der Arbeit."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Ökologische Holzfaserdämmung"
          text="Wir setzen seit Jahrzehnten auf Holzfaserdämmung und natürliche Materialien. Sie schützt im Sommer vor Hitze, im Winter vor Kälte und ist diffusionsoffen – Feuchtigkeit kann entweichen, das Dach bleibt gesund. Ein natürlicher Baustoff, der Ihr Wohnklima spürbar verbessert und dauerhaft Heizkosten senkt."
          ctaLabel="Beratung anfragen"
          bullets={[
            "Diffusionsoffene Holzfaserdämmung, zu 100 % natürlich",
            "Sommerlicher Hitzeschutz und winterlicher Wärmeschutz",
            "Verbessertes Raumklima und niedrigere Heizkosten",
          ]}
          imageNote="Detailfoto Holzfaserdämmung: Dämmplatten zwischen den Sparren, natürliches Material."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="KFW-Förderung – bis zu 20 % sparen"
          text="Für energetische Dachsanierungen gibt es attraktive KFW-Förderprogramme. Wir beraten Sie kostenlos, welche Maßnahmen förderfähig sind, und unterstützen Sie bei der Dokumentation für Ihren Antrag. So sanieren Sie sorglos – mit staatlicher Förderung bis zu 20 % günstiger."
          ctaLabel="Jetzt Förderberatung anfragen"
          bullets={[
            "Kostenlose Beratung zu förderfähigen Maßnahmen",
            "Unterstützung bei der Antragsdokumentation",
            "KFW-geförderte energetische Sanierung bis zu 20 %",
          ]}
          imageNote="Foto Förderberatung: Beratungsgespräch am Tisch mit Bauunterlagen und Dachplänen."
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/dach"
        imageNotes={[
          "Referenz Dach 1: energetische Dachsanierung, fertiges Ergebnis.",
          "Referenz Dach 2: Neueindeckung mit Holzfaserdämmung.",
          "Referenz Dach 3: Detail sanierter Dachstuhl.",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
