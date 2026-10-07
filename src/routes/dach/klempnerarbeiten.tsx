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
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Dach", to: "/dach" },
          { label: "Klempnerarbeiten" },
        ]}
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

      <Section>
        <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,320px)_1fr] lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,320px)]">
          <img
            src="/__l5e/assets-v1/91807f57-f54e-4364-93ae-846608141f02/scharpf_team_Harald_Radtke.jpg"
            alt="Klempnermeister Harald Radtke"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Harald Radtke
            </h2>
            <span className="mt-4 block h-1 w-24 rounded bg-primary" />
            <p className="mt-6 text-base text-muted-foreground">Klempnermeister</p>
          </div>
          <img
            src="/__l5e/assets-v1/2411a340-51c7-4dbe-8b33-8e31f1fadf63/scharpf_klempner_designer.png"
            alt="Erker mit glänzender Blechhaube aus der Klempnerwerkstatt"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-lg object-cover sm:col-span-2 lg:col-span-1"
          />
        </div>
          
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
