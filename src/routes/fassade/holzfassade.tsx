import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/fassade/holzfassade")({
  head: () => ({
    meta: [
      { title: "Holzfassade anbringen Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Vorgehängte Holzfassaden, Trespa und Holzschalung: langlebig, ökologisch, individuell. Beratung und Montage vom Fachbetrieb aus Esslingen.",
      },
    ],
  }),
  component: Holzfassade,
});

function Holzfassade() {
  return (
    <div>
      <PageHero
        eyebrow="Fassade & Außenbereiche"
        title="Holzfassaden – Schutz, der gestaltet"
        lead="Holzfassaden sind mehr als Wetterschutz – sie sind ein Statement für nachhaltiges, ästhetisches Bauen. Wir fertigen und montieren Holzfassaden in verschiedenen Systemen, abgestimmt auf Ihr Gebäude und Ihren Stil."
        ctaLabel="Beratung anfragen"
        imageNote="Holzfassade in warmer Holzoptik"
        imageSrc="/fotos/scharpf_fassade_01.jpg"
      />

      <Section>
        <LeistungBlock
          title="Systeme und Ausführungen"
          text="Ob rustikale Boden-Deckel-Schalung, moderne Rhombusschalung oder wetterfeste Trespa-Platte: Jedes System hat seine Stärken. Wir beraten Sie, welche Ausführung zu Objekt, Lage und Budget passt – und montieren fachgerecht mit hinterlüftetem Aufbau."
          ctaLabel="Beratung anfragen"
          bullets={[
            "Boden-Deckel-Schalungen – rustikal und zeitlos",
            "Rhombusschalungen – modern und präzise",
            "Stülpschalungen – klassisch und robust",
            "Hinterlüfteter Aufbau – dauerhaft und wartungsarm",
            "Lasuren und Oberflächenbehandlungen nach Kundenwunsch",
            "Kombination mit Wärmedämmung (Holzfaser, Mineralwolle)",
          ]}
          imageNote="Fassadensystem im Detail"
          imageSrc="/fotos/scharpf_fassade_02.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Fassade und Dämmung in einem Schritt"
          text="Die neue Fassade ist der beste Zeitpunkt für eine ökologische Wärmedämmung: einmal Gerüst, doppelter Nutzen. Wir beraten Sie kostenlos zu KFW-Förderprogrammen."
          ctaLabel="Förderberatung anfragen"
          moreTo="/fassade/waermedaemmung"
          moreLabel="Mehr zur Wärmedämmung →"
          imageNote="Fassade mit neuer Dämmung"
          imageSrc="/fotos/scharpf_fassade_03.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Fassade & Außenbereiche"
        intro="Ausgewählte Fassadenprojekte aus der Region Esslingen – Qualität und Langlebigkeit im Detail."
        to="/referenzen/fassade"
        imageNotes={[
          "Hinterlüftete Holzfassade",
          "Fassade in der Gesamtansicht",
          "Fassadendetail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_fassade_01.jpg",
          "/fotos/scharpf_fassade.jpg",
          "/fotos/scharpf_fassade_02.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
