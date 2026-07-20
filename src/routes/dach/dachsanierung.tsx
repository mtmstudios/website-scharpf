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
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Dach"
        title="Dachsanierung – energetisch, nachhaltig, gefördert"
        lead="Energetische Sanierung, Hitzeschutz im Sommer oder Nutzung der Sonnenenergie – wir arbeiten seit Jahrzehnten ökologisch mit Holzfaserdämmung und natürlichen Materialien. Auf Wunsch übernehmen wir die KFW-Förderberatung und Antragsstellung."
        ctaLabel="Dach-Check vereinbaren"
        imageNote="Energetisch saniertes Dach mit neuer Eindeckung"
        imageSrc="/fotos/scharpf_dachsanierung.jpg"
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
          imageNote="Dachstuhl mit neuer Dämmung und Lattung"
          imageSrc="/fotos/scharpf_dachdecken_01.jpg"
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
          imageNote="Dachsanierung mit ökologischer Dämmung"
          imageSrc="/fotos/scharpf_dachsanierung_02.jpg"
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
        to="/referenzen"
        imageNotes={[
          "Energetische Dachsanierung, fertiges Ergebnis",
          "Neueindeckung durch E. Scharpf",
          "Sanierter Dachstuhl im Detail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachsanierung.jpg",
          "/fotos/scharpf_dachdecken.jpg",
          "/fotos/scharpf_dachstuhl.jpg",
        ]}
      />

      <CtaBanner illustrationSrc="/illustrationen/dachstuhl-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
