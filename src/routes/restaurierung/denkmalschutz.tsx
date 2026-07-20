import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/restaurierung/denkmalschutz")({
  head: () => ({
    meta: [
      { title: "Denkmalschutz Sanierung Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Denkmalgerechte Sanierung mit historisch korrekten Materialien, Behördenabstimmung und lückenloser Dokumentation. E. Scharpf GmbH – Fachbetrieb aus Esslingen.",
      },
    ],
  }),
  component: Denkmalschutz,
});

function Denkmalschutz() {
  return (
    <div>
      <PageHero
        eyebrow="Restaurierung & Sanierung"
        title="Denkmalgerechte Sanierung mit Behörden-Expertise"
        lead="Denkmalgeschützte Gebäude erfordern besonderes Fingerspitzengefühl. Wir arbeiten ausschließlich mit historisch korrekten Materialien und Techniken, stimmen uns eng mit den zuständigen Denkmalschutzbehörden ab und dokumentieren jeden Arbeitsschritt lückenlos."
        ctaLabel="Erstgespräch vereinbaren"
        imageNote="Denkmalgeschütztes Fachwerkgebäude nach der Sanierung"
        imageSrc="/fotos/scharpf_fachwerksanierung.jpg"
      />

      <Section>
        <LeistungBlock
          title="Historisch korrekt – vom Material bis zur Technik"
          text="So bleibt der historische Charakter Ihres Gebäudes erhalten – und Sie haben alle Nachweise für Förderanträge und Behördenabnahmen in der Hand. Wir kennen die Anforderungen der Denkmalpflege aus jahrzehntelanger Praxis im Raum Esslingen und Stuttgart."
          ctaLabel="Jetzt Beratungsgespräch vereinbaren"
          bullets={[
            "Abstimmung mit Unterer und Oberer Denkmalschutzbehörde",
            "Materialtreuer Einsatz historischer Baustoffe (Eichenbalken, Schiefer, historische Ziegel)",
            "Lückenlose Baudokumentation für Behörden und Förderanträge",
            "Beratung zu Förderprogrammen für denkmalgeschützte Objekte",
          ]}
          imageNote="Historische Balkenkonstruktion im Detail"
          imageSrc="/fotos/scharpf_restaurierung_05.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Förderungen für Denkmaleigentümer nutzen"
          text="Für denkmalgeschützte Objekte gibt es eigene Förderprogramme und steuerliche Vorteile. Wir beraten Sie, welche Mittel für Ihre Maßnahme infrage kommen, und liefern die Dokumentation, die Behörden und Förderstellen verlangen."
          ctaLabel="Erstgespräch vereinbaren"
          moreTo="/ratgeber/denkmalschutz"
          moreLabel="Zum Denkmalschutz-Ratgeber →"
          imageNote="Beratungsgespräch zu Denkmal-Förderung"
          imageSrc="/fotos/scharpf_restaurierung_09.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Restaurierung & Sanierung"
        intro="Sehen Sie, wie wir historische Gebäude mit handwerklichem Fingerspitzengefühl und Respekt vor dem Original neu zum Leben erweckt haben."
        to="/referenzen/restaurierung"
        imageNotes={[
          "Restauriertes Fachwerkhaus",
          "Historischer Dachstuhl nach der Restaurierung",
          "Saniertes historisches Stadthaus",
        ]}
        imageSrcs={[
          "/fotos/scharpf_fachwerksanierung_01.jpg",
          "/fotos/scharpf_restaurierung_08.jpg",
          "/fotos/scharpf_restaurierung_12.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
