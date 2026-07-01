import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  CtaBanner,
} from "@/components/sections";

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
      <PageHero
        eyebrow="Fassade & Außenbereiche"
        title="Fassaden, die schützen und begeistern."
        lead="Von der Holzfassade bis zur Terrasse – E. Scharpf gestaltet Ihre Außenbereiche ökologisch, langlebig und mit handwerklicher Präzision."
        ctaLabel="Kostenlose Beratung anfragen"
        imageNote="Fassaden-Projektfoto: moderne Holzfassade oder Trespa-Fassade an einem Wohnhaus."
      />

      <Section>
        <LeistungBlock
          title="Holzfassaden & Fassadensysteme"
          text="Holzfassaden sind langlebig, ökologisch und individuell – sie schützen das Gebäude und setzen gestalterische Akzente. Wir realisieren drei Fassadensysteme: vorgehängte Holzfassade, Trespa-Fassade und Holzschalung – jeweils optimal abgestimmt auf Objekt, Lage und Budget."
          bullets={[
            "Vorgehängte Holzfassade (hinterlüftet, wartungsarm)",
            "Trespa-Fassade (witterungsbeständig, vielfältige Optik)",
            "Holzschalung (klassisch, individuell, ökologisch)",
          ]}
          imageNote="Detailfoto Fassade: Holzschalung / vorgehängte Fassade aus der Nähe."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Ökologisch dämmen – KFW-Förderung nutzen."
          text="Holzfaserdämmung schützt im Sommer vor Hitze, im Winter vor Kälte – und ist zu 100 % natürlich. Wir beraten Sie kostenlos zu aktuellen Förderprogrammen."
          ctaLabel="Förderberatung anfragen"
          bullets={[
            "Holzfaserdämmung (ökologisch, diffusionsoffen)",
            "WDVS Wärmedämm-Verbundsysteme",
            "KFW-geförderte Außenwanddämmung",
          ]}
          imageNote="Foto Wärmedämmung: Anbringung von Holzfaserdämmung an der Außenwand."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Terrassen & Außenbereiche"
          text="Eine gut geplante Terrasse verlängert den Wohnraum nach außen. Wir planen und bauen Holzterrassen, Unterkonstruktionen und Sichtschutz – passend zu Ihrem Gebäude und Garten."
          bullets={[
            "Holzterrassen (Douglasie, Lärche, Bangkirai)",
            "WPC-Terrassenbeläge",
            "Sichtschutz und Pergolen aus Holz",
          ]}
          imageNote="Foto Terrasse: fertige Holzterrasse mit Sichtschutz / Pergola."
        />
      </Section>

      <CtaBanner
        title="Ihr Außenbereich – neu gedacht."
        text="Fassade, Dämmung oder Terrasse: Wir besichtigen Ihr Objekt kostenlos und erstellen Ihnen ein unverbindliches Angebot."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
