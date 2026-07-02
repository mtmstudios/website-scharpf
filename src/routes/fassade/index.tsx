import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, LeistungBlock, CtaBanner } from "@/components/sections";

export const Route = createFileRoute("/fassade/")({
  head: () => ({
    meta: [
      { title: "Holzfassaden & Terrassen Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Holzfassaden, Wärmedämmung und Terrassenbau: ökologisch, langlebig und individuell. Kostenlose Besichtigung und Angebot im Großraum Stuttgart.",
      },
    ],
  }),
  component: Fassade,
});

function Fassade() {
  return (
    <div>
      {/* Titel + Intro */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Fassade & Außenbereiche
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Die Fassade ist das Gesicht Ihres Hauses – und schützt zugleich die
          Bausubstanz. Wir gestalten und dämmen Fassaden mit langlebigen
          Materialien und bauen Terrassen, die Ihren Außenbereich zum
          Wohnraum machen.
        </p>
        <div className="mt-10">
          <PlaceholderImage
            note="Fassade-Hero: Holz- oder Trespa-Fassade in Gesamtansicht."
            ratio="wide"
          />
        </div>
      </Section>

      <Section>
        <LeistungBlock
          title="Fassaden (Holz / Trespa)"
          text="Ob natürliche Holzfassade oder wetterfeste Trespa-Verkleidung – wir setzen Ihre Fassade fachgerecht und langlebig um. Beide Materialien überzeugen durch Optik, Witterungsbeständigkeit und geringen Pflegeaufwand."
          imageNote="Foto: fertige Holz- oder Trespa-Fassade im Detail."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Wärmedämmung"
          text="Eine gedämmte Fassade senkt Ihre Heizkosten und steigert den Wohnkomfort spürbar. Wir dämmen ökologisch mit natürlichen Materialien – auf Wunsch inklusive KFW-Förderberatung."
          imageNote="Foto: Fassadendämmung in Arbeit."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Terrassen"
          text="Eine Terrasse aus Holz oder WPC verlängert Ihren Wohnraum nach draußen. Wir planen und bauen langlebige Terrassen – auf Wunsch mit Unterkonstruktion, Überdachung und passendem Sichtschutz."
          imageNote="Foto: fertige Holz- oder WPC-Terrasse."
        />
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
