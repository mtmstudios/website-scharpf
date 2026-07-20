import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/restaurierung/")({
  head: () => ({
    meta: [
      { title: "Restaurierung & Sanierung – E. Scharpf GmbH Esslingen" },
      {
        name: "description",
        content:
          "Denkmalgerechte Restaurierung von Fachwerkgebäuden und historischer Bausubstanz. Schadenskartierung, Behördenabstimmung und lückenlose Dokumentation.",
      },
    ],
  }),
  component: Restaurierung,
});

// Texte: B612 E_Scharpf_Website_Texte.docx, Abschnitt 3 (Restaurierung & Sanierung).
function Restaurierung() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/fachwerkhaus-weiss.png"
        eyebrow="Leistungen"
        title="Restaurierung & Sanierung"
        lead="Historische Holzbausubstanz fachgerecht erhalten – von der Schadensdiagnose bis zur denkmalgerechten Ausführung. Wir kennen die Anforderungen des Denkmalschutzes und erfüllen sie mit Präzision und Respekt vor dem Original."
        ctaLabel="Projekt Anfragen"
        imageNote="Restauriertes historisches Gebäude von E. Scharpf"
        imageSrc="/fotos/scharpf_restaurierung.jpg"
      />

      <Section>
        <LeistungBlock
          title="Denkmalschutz"
          text="Denkmalgeschützte Gebäude erfordern besonderes Fingerspitzengefühl. Wir arbeiten ausschließlich mit historisch korrekten Materialien und Techniken, stimmen uns eng mit den zuständigen Denkmalschutzbehörden ab und dokumentieren jeden Arbeitsschritt lückenlos. So bleibt der historische Charakter Ihres Gebäudes erhalten – und Sie haben alle Nachweise für Förderanträge und Behördenabnahmen in der Hand."
          ctaLabel="Jetzt Beratungsgespräch vereinbaren"
          moreTo="/restaurierung/denkmalschutz"
          moreLabel="Mehr zum Denkmalschutz →"
          bullets={[
            "Abstimmung mit Unterer und Oberer Denkmalschutzbehörde",
            "Materialtreuer Einsatz historischer Baustoffe (Eichenbalken, Schiefer, historische Ziegel)",
            "Lückenlose Baudokumentation für Behörden und Förderanträge",
            "Beratung zu Förderprogrammen für denkmalgeschützte Objekte",
          ]}
          imageNote="Denkmalgerechte Fachwerksanierung"
          imageSrc="/fotos/scharpf_fachwerksanierung.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Schadenskartierung & Begleitung in der Denkmalsanierung"
          text="Bevor wir Hand anlegen, kennen wir den Zustand Ihres Gebäudes genau. Unsere systematische Schadenskartierung erfasst alle Schadensbilder – von Fäulnis und Schimmel bis zu statischen Schwächen. Auf dieser Basis erstellen wir einen realistischen Maßnahmenplan, begleiten Sie durch alle Behördenabstimmungen und koordinieren sämtliche Gewerke bis zur Fertigstellung."
          ctaLabel="Kostenloses Erstgespräch vereinbaren"
          moreTo="/restaurierung/schadenskartierung"
          moreLabel="Mehr zur Schadenskartierung →"
          bullets={[
            "Systematische Bestandsaufnahme und Schadenserfassung vor Ort",
            "Fotodokumentation und schriftlicher Befundbericht",
            "Maßnahmenplan mit Kostenschätzung und Zeitplan",
            "Begleitung der gesamten Sanierung als Koordinator aller Gewerke",
            "Abnahmedokumentation für Denkmalschutz und Eigentümer",
          ]}
          imageNote="Bestandsaufnahme an historischer Bausubstanz"
          imageSrc="/fotos/scharpf_restaurierung_02.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Restaurierung & Sanierung"
        intro="Von der mittelalterlichen Fachwerkscheune bis zum gründerzeitlichen Stadthaus: Sehen Sie selbst, was aus einer Zusammenarbeit mit E. Scharpf entstehen kann."
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

      <CtaBanner illustrationSrc="/illustrationen/fachwerkhaus-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
