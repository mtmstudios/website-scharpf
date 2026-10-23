import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";
import fassadeHeroAsset from "@/assets/scharpf_fassade_03.jpg.asset.json";
import vorfertigungAsset from "@/assets/scharpf_vorfertigung.jpg.asset.json";
import fassade02Asset from "@/assets/scharpf_fassade_02.jpg.asset.json";
import fassadeGesamtAsset from "@/assets/scharpf_fassade_dunkel_gesamt.jpeg.asset.json";
import fassadeDetailAsset from "@/assets/scharpf_fassade_dunkel_detail.jpeg.asset.json";
import fassadeGaubeAsset from "@/assets/scharpf_fassade_dunkel_gaube.jpeg.asset.json";

export const Route = createFileRoute("/fassade/")({
  head: () => ({
    meta: [
      { title: "Holzfassade Esslingen – Fassaden & Terrassen" },
      { property: "og:title", content: "Holzfassade Esslingen – Fassaden & Terrassen" },
      { property: "og:description", content: "Holzfassaden, Wärmedämmung und Terrassenbau von E. Scharpf im Großraum Esslingen und Stuttgart." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        imageSrc={fassadeHeroAsset.url}
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
          imageSrc="/__l5e/assets-v1/554da3dc-d923-45a8-803e-2f4dcf9785f2/scharpf_fassade.jpg"
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
          imageNote="Vorfertigung einer gedämmten Holzkonstruktion"
          imageSrc={vorfertigungAsset.url}
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
          "/__l5e/assets-v1/81d9d641-45a8-4254-845f-298664ee6857/scharpf_fassade_referenz_1.jpg",
          fassade02Asset.url,
          "/fotos/scharpf_terrasse.jpg",
        ]}
        extraRow={{
          wide: { src: "/__l5e/assets-v1/57784dcb-0701-4c36-8f04-393738ec374d/scharpf_fassade_referenz_breit.jpg", note: "Fassade in der Panorama-Ansicht" },
          normal: { src: "/__l5e/assets-v1/965dc69d-63ac-4c18-bdda-f7042e970d1a/scharpf_fassade_weingaertner.jpg", note: "Fassadenprojekt in Esslingen" },
        }}
        additionalImages={[
          { src: fassadeGesamtAsset.url, note: "Dunkle Holzfassade mit Terrasse in der Gesamtansicht" },
          { src: fassadeDetailAsset.url, note: "Dunkle Holzfassade mit großen Fensterflächen im Detail" },
          { src: fassadeGaubeAsset.url, note: "Dachgaube mit Metallverkleidung über dunkler Holzfassade" },
        ]}
      />

      <CtaBanner
        tone="wood"
        title="Ihr Außenbereich – neu gedacht."
        text="Fassade, Dämmung oder Terrasse: Wir besichtigen Ihr Objekt kostenlos und erstellen Ihnen ein unverbindliches Angebot."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
