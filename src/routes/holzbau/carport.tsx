import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/holzbau/carport")({
  head: () => ({
    meta: [
      { title: "Carport Holz Esslingen – maßgefertigt | E. Scharpf" },
      {
        name: "description",
        content:
          "Maßgefertigte Holz-Carports aus Esslingen: geplant, vorgefertigt und montiert vom Zimmerermeister. Auf Wunsch mit Geräteraum oder Gründach.",
      },
    ],
  }),
  component: Carport,
});

function Carport() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/carport-weiss.png"
        eyebrow="Holzbau & Konstruktion"
        title="Carports aus Holz – maßgefertigt statt von der Stange"
        lead="Ein Carport aus Holz schützt Ihr Fahrzeug und fügt sich harmonisch in Haus und Garten ein. Wir konstruieren und montieren maßgefertigte Carports – geplant vom Zimmerermeister, gefertigt in unserer Werkhalle."
        ctaLabel="Carport anfragen"
        imageNote="Maßgefertigter Holz-Carport"
        imageSrc="/fotos/scharpf_carport.jpg"
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Holzbau & Konstruktion", to: "/holzbau" },
          { label: "Carports" },
        ]}
      />


      <Section>
        <LeistungBlock
          title="Ihr Carport, Ihre Ausstattung"
          text="Vom einfachen Einzelcarport bis zur Doppelanlage mit Geräteraum: Wir bauen Ihren Carport passend zu Grundstück, Haus und Budget – langlebig konstruiert und sauber montiert."
          ctaLabel="Carport anfragen"
          bullets={[
            "Einzel- und Doppelcarports nach Maß",
            "Geräteraum, Gründach oder Photovoltaik-Vorbereitung",
            "Terrassenüberdachungen in gleicher Bauweise",
            "Kurze Montagezeit durch Vorfertigung",
          ]}
          imageNote="Carport-Konstruktion im Detail"
          imageSrc="/fotos/scharpf_vorfertigung_03.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Holzbau & Konstruktion"
        intro="Sehen Sie unsere abgeschlossenen Holzbauprojekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/holzbau"
        imageNotes={[
          "Fertiggestellter Carport",
          "Holzkonstruktion in der Werkhalle",
          "Holzbau-Projekt in der Region",
        ]}
        imageSrcs={[
          "/fotos/scharpf_carport.jpg",
          "/fotos/scharpf_vorfertigung.jpg",
          "/fotos/scharpf_neubau.jpg",
        ]}
      />

      <CtaBanner illustrationSrc="/illustrationen/carport-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
