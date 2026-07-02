import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, LeistungBlock, CtaBanner } from "@/components/sections";

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

function Restaurierung() {
  return (
    <div>
      {/* Titel + Intro */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Restaurierung & Sanierung
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Historische Bausubstanz zu erhalten, ist Handwerk und
          Verantwortung zugleich. Als Fachbetrieb für Denkmalpflege
          restaurieren und sanieren wir Fachwerk und historische Gebäude
          fachgerecht – in enger Abstimmung mit dem Landesdenkmalamt.
        </p>
        <div className="mt-10">
          <PlaceholderImage
            note="Restaurierungs-Hero: saniertes Fachwerkhaus oder historisches Gebäude."
            ratio="wide"
          />
        </div>
      </Section>

      <Section>
        <LeistungBlock
          title="Denkmalschutz"
          text="Denkmalgeschützte Gebäude erfordern besonderes Wissen und traditionelle Techniken. Wir erhalten historische Bausubstanz denkmalgerecht, arbeiten mit passenden Materialien und stimmen jeden Schritt mit den Behörden ab."
          imageNote="Foto: denkmalgerechte Restaurierung eines Fachwerks."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Schadenskartierung & Begleitung in der Denkmalsanierung"
          text="Vor jeder Sanierung steht die genaue Analyse: Wir kartieren Schäden am historischen Bestand, dokumentieren lückenlos und begleiten Ihr Projekt von der Bestandsaufnahme bis zur fertigen Sanierung – als verlässlicher Partner an Ihrer Seite."
          imageNote="Foto: Schadenskartierung / Bestandsaufnahme am historischen Gebäude."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Referenzen im Bereich Restaurierung & Sanierung"
          text="Von der Fachwerksanierung bis zur denkmalgerechten Restaurierung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
          ctaLabel="Mehr sehen"
          ctaTo="/referenzen"
          imageNote="Foto: abgeschlossenes Restaurierungsprojekt als Referenz."
        />
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
