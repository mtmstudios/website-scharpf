import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, LeistungBlock, CtaBanner } from "@/components/sections";

export const Route = createFileRoute("/dach/")({
  head: () => ({
    meta: [
      { title: "Dacharbeiten Esslingen – Sanierung, Gauben, KFW-Förderung" },
      {
        name: "description",
        content:
          "Dachsanierung, Dachfenster, Gauben und Klempnerarbeiten aus einer Hand. Kostenlose KFW-Förderberatung inklusive. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Dach,
});

function Dach() {
  return (
    <div>
      {/* Titel + Intro */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Dach
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Neueindeckung, Sanierung und Dämmung für jede Dachform – aus einer
          Hand und mit kostenloser KFW-Förderberatung. Vom ersten Aufmaß bis zur
          fertigen Eindeckung planen und bauen wir Ihr Dach zuverlässig und
          nachhaltig.
        </p>
        <div className="mt-10">
          <PlaceholderImage
            note="Neu eingedecktes Dach von E. Scharpf"
            src="/fotos/scharpf_dachdecken.jpg"
            ratio="wide"
          />
        </div>
      </Section>

      <Section>
        <LeistungBlock
          title="Dachgauben & Dachfenster"
          text="Mehr Licht und mehr Raum unter der Dachschräge: Wir bauen Gauben und Dachfenster nachträglich ein – für ein helles Wohngefühl und einen höheren Immobilienwert. Sämtliche Blecharbeiten stammen aus unserer eigenen Werkstatt."
          imageNote="Fertige Gaube mit Dachfenster"
          imageSrc="/fotos/scharpf_dachfenster_gaube.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Wärmedämmung"
          text="Energetische Sanierung, Hitzeschutz im Sommer und niedrige Heizkosten im Winter: Wir dämmen Ihr Dach seit Jahrzehnten ökologisch mit Holzfaser und natürlichen Materialien – auf Wunsch inklusive KFW-Förderberatung."
          imageNote="Dachsanierung mit ökologischer Dämmung"
          imageSrc="/fotos/scharpf_dachsanierung.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Dacheindeckungen"
          text="Ob Ziegel, Schiefer oder Metall – wir decken jede Dachform fachgerecht neu ein. Dabei achten wir auf langlebige Materialien, saubere Details und eine dauerhaft dichte Ausführung."
          imageNote="Neu eingedecktes Dach in der Gesamtansicht"
          imageSrc="/fotos/scharpf_dachdecken_01.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Klempnerarbeiten"
          text="Für die umfassende Betreuung Ihres Dachprojekts haben wir eine eigene Klempnerwerkstatt: Dachrinnen, Fallrohre, Kehl- und Wandanschlussbleche in Kupfer, Zink und Aluminium – präzise gefertigt und schnell montiert."
          imageNote="Klempner- und Blecharbeiten an der Gaube"
          imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Dachreparaturen"
          text="Sturmschaden, undichte Stelle oder verrutschte Ziegel? Wir prüfen Ihr Dach, beheben Schäden zuverlässig und beugen Folgeschäden vor – schnell und unkompliziert."
          imageNote="Dacharbeiten und Reparatur auf der Baustelle"
          imageSrc="/fotos/scharpf_Dacharbeiten.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Referenzen"
          text="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Dachprojekte im Großraum Esslingen und Stuttgart."
          ctaLabel="Mehr sehen"
          ctaTo="/referenzen"
          imageNote="Abgeschlossene Dachsanierung als Referenz"
          imageSrc="/fotos/scharpf_dachsanierung_02.jpg"
        />
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
