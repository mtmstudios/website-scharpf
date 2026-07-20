import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/klempnerarbeiten")({
  head: () => ({
    meta: [
      { title: "Klempner Dach Esslingen – eigene Werkstatt | E. Scharpf" },
      {
        name: "description",
        content:
          "Klempnerarbeiten aus eigener Werkstatt: Dachrinnen, Fallrohre und Blecharbeiten in Kupfer, Zink und Aluminium. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Klempnerarbeiten,
});

function Klempnerarbeiten() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Dach"
        title="Klempnerarbeiten aus eigener Werkstatt"
        lead="Für eine umfassende Betreuung Ihres Dachprojekts haben wir eine eigene Klempnerwerkstatt. Individuelle Blecharbeiten, präzise Passform, schnelle Montage – alles aus einer Hand."
        ctaLabel="Klempnerarbeiten anfragen"
        imageNote="Blechverkleidete Gaube aus eigener Klempnerwerkstatt"
        imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
      />

      <Section>
        <LeistungBlock
          title="Blecharbeiten ohne Fremdvergabe"
          text="Statt Fremdvergabe produzieren wir Blechprofile in unserer eigenen Werkstatt. Das spart Zeit, reduziert Koordinationsaufwand und sichert gleichbleibende Qualität – vom Standardprofil bis zur Sonderanfertigung auf Maß."
          ctaLabel="Anfragen"
          bullets={[
            "Dachrinnen und Fallrohre in Kupfer, Zink und Aluminium",
            "Kehlbleche, Ortgangbleche, Wandanschlüsse",
            "Gaubenverkleidungen und Mauerabdeckungen",
            "Individuelle Sonderanfertigungen",
            "Vorfertigung für schnellen Aufbau",
          ]}
          imageNote="Klempnerarbeiten am Dach im Detail"
          imageSrc="/fotos/scharpf__dachgauben.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – Projekte aus dem Großraum Esslingen und Stuttgart."
        to="/referenzen/dach"
        imageNotes={[
          "Gaube mit Blechverkleidung",
          "Neu eingedecktes Dach",
          "Dacharbeiten im Detail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachgaube_flaschner.jpg",
          "/fotos/scharpf_dachdecken.jpg",
          "/fotos/scharpf_Dacharbeiten.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
