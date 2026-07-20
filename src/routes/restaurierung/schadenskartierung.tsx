import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/restaurierung/schadenskartierung")({
  head: () => ({
    meta: [
      { title: "Schadenskartierung Holz Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Systematische Bestandsaufnahme historischer Gebäude: Schadenskartierung, Befundbericht und Maßnahmenplan mit Kostenschätzung. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Schadenskartierung,
});

function Schadenskartierung() {
  return (
    <div>
      <PageHero
        eyebrow="Restaurierung & Sanierung"
        title="Schadenskartierung – erst verstehen, dann sanieren"
        lead="Bevor wir Hand anlegen, kennen wir den Zustand Ihres Gebäudes genau. Unsere systematische Schadenskartierung erfasst alle Schadensbilder – von Fäulnis und Schimmel bis zu statischen Schwächen."
        ctaLabel="Termin anfragen"
        imageNote="Bestandsaufnahme an historischer Bausubstanz"
        imageSrc="/fotos/scharpf_restaurierung_02.jpg"
      />

      <Section>
        <LeistungBlock
          title="Vom Befund zum Maßnahmenplan"
          text="Auf Basis der Kartierung erstellen wir einen realistischen Maßnahmenplan mit Kostenschätzung und Zeitplan. So wissen Sie vor Baubeginn, was auf Sie zukommt – ohne böse Überraschungen während der Sanierung."
          ctaLabel="Kostenloses Erstgespräch vereinbaren"
          bullets={[
            "Systematische Bestandsaufnahme und Schadenserfassung vor Ort",
            "Fotodokumentation und schriftlicher Befundbericht",
            "Maßnahmenplan mit Kostenschätzung und Zeitplan",
          ]}
          imageNote="Dokumentation von Schäden am Balkenwerk"
          imageSrc="/fotos/scharpf_restaurierung_07.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Begleitung durch die gesamte Denkmalsanierung"
          text="Wir begleiten Sie durch alle Behördenabstimmungen und koordinieren sämtliche Gewerke bis zur Fertigstellung – als ein Ansprechpartner für das ganze Projekt. Am Ende erhalten Sie die vollständige Abnahmedokumentation für Denkmalschutz und Eigentümer."
          ctaLabel="Termin anfragen"
          moreTo="/restaurierung/denkmalschutz"
          moreLabel="Mehr zum Denkmalschutz →"
          bullets={[
            "Begleitung der gesamten Sanierung als Koordinator aller Gewerke",
            "Abnahmedokumentation für Denkmalschutz und Eigentümer",
          ]}
          imageNote="Sanierungsarbeiten am historischen Gebäude"
          imageSrc="/fotos/scharpf_restaurierung_10.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Restaurierung & Sanierung"
        intro="Von der mittelalterlichen Fachwerkscheune bis zum gründerzeitlichen Stadthaus – Projekte aus dem Großraum Esslingen und Stuttgart."
        to="/referenzen/restaurierung"
        imageNotes={[
          "Restauriertes Fachwerkhaus",
          "Restaurierung im Detail",
          "Saniertes Stadthaus",
        ]}
        imageSrcs={[
          "/fotos/scharpf_fachwerksanierung.jpg",
          "/fotos/scharpf_restaurierung_04.jpg",
          "/fotos/scharpf_restaurierung_12.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
