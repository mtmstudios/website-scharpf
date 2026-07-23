import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
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

// Texte: B612 E_Scharpf_Website_Texte.docx, Abschnitt 6 (Fassade & Außenbereiche).
function Fassade() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/fachwerkhaus-band-weiss.png"
        eyebrow=""
        title="Fassaden, die schützen und begeistern."
        lead="Von der Holzfassade bis zur Terrasse – E. Scharpf gestaltet Ihre Außenbereiche ökologisch, langlebig und mit handwerklicher Präzision."
        ctaLabel="Kostenlose Beratung anfragen"
        imageNote="Holzfassade in warmer Holzoptik"
        imageSrc="/fotos/scharpf_fassade.jpg"
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Fassade & Außenbereiche" },
        ]}
      />


      <Section>
        <LeistungBlock
          title="Holzfassaden & Fassadensysteme"
          text="Holzfassaden sind langlebig, ökologisch und individuell – sie schützen das Gebäude und setzen gestalterische Akzente. Wir realisieren drei Fassadensysteme: vorgehängte Holzfassade, Trespa-Fassade und Holzschalung – jeweils optimal abgestimmt auf Objekt, Lage und Budget."
          ctaLabel="Beratung anfragen"
          moreTo="/fassade/holzfassade"
          moreLabel="Mehr zu Holzfassaden →"
          bullets={[
            "Vorgehängte Holzfassade (hinterlüftet, wartungsarm)",
            "Trespa-Fassade (witterungsbeständig, vielfältige Optik)",
            "Holzschalung (klassisch, individuell, ökologisch)",
          ]}
          imageNote="Holz- bzw. Trespa-Fassade im Detail"
          imageSrc="/fotos/scharpf_fassade_01.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Ökologisch dämmen – KFW-Förderung nutzen."
          text="Holzfaserdämmung schützt im Sommer vor Hitze, im Winter vor Kälte – und ist zu 100 % natürlich. Wir beraten Sie kostenlos zu aktuellen Förderprogrammen."
          ctaLabel="Förderberatung anfragen"
          moreTo="/fassade/waermedaemmung"
          moreLabel="Mehr zur Wärmedämmung →"
          bullets={[
            "Holzfaserdämmung (ökologisch, diffusionsoffen)",
            "WDVS Wärmedämm-Verbundsysteme",
            "KFW-geförderte Außenwanddämmung",
          ]}
          imageNote="Gedämmte Fassade von E. Scharpf"
          imageSrc="/fotos/scharpf_fassade_02.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Terrassen & Außenbereiche"
          text="Eine gut geplante Terrasse verlängert den Wohnraum nach außen. Wir planen und bauen Holzterrassen, Unterkonstruktionen und Sichtschutz – passend zu Ihrem Gebäude und Garten."
          ctaLabel="Terrasse anfragen"
          moreTo="/fassade/terrasse"
          moreLabel="Mehr zu Terrassen →"
          bullets={[
            "Holzterrassen (Douglasie, Lärche, Bangkirai)",
            "WPC-Terrassenbeläge",
            "Sichtschutz und Pergolen aus Holz",
          ]}
          imageNote="Fertige Terrasse von E. Scharpf"
          imageSrc="/fotos/scharpf_terrasse.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Fassade & Außenbereiche"
        intro="Ausgewählte Fassaden- und Terrassenprojekte aus der Region Esslingen – Qualität und Langlebigkeit im Detail."
        to="/referenzen/fassade"
        imageNotes={[
          "Hinterlüftete Holzfassade",
          "Fassade in der Gesamtansicht",
          "Fertige Holzterrasse",
        ]}
        imageSrcs={[
          "/fotos/scharpf_fassade_01.jpg",
          "/fotos/scharpf_fassade_03.jpg",
          "/fotos/scharpf_terrasse.jpg",
        ]}
      />

      <CtaBanner
        title="Ihr Außenbereich – neu gedacht."
        text="Fassade, Dämmung oder Terrasse: Wir besichtigen Ihr Objekt kostenlos und erstellen Ihnen ein unverbindliches Angebot."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
