import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";

export const Route = createFileRoute("/referenzen/services")({
  head: () => ({
    meta: [
      { title: "Referenzen Service & Sonstige Leistungen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Klempnerarbeiten, Dachdeckerei und Sondertransporte – Service-Referenzen der E. Scharpf GmbH aus Esslingen.",
      },
    ],
  }),
  component: Page,
});

// Platzhalter-Einträge – TODO: echte Projektdaten (Ort, Jahr, Umfang) vom Kunden einholen.
const PROJEKTE: ReferenzProjekt[] = [
  {
    titel: "Klempnerarbeiten aus eigener Werkstatt",
    tag: "Service & Sonstige Leistungen",
    text: "Gaubenverkleidung, Dachrinnen und Anschlussbleche – individuell gefertigt in unserer eigenen Klempnerwerkstatt, für präzise Passform und schnelle Montage.",
    imageSrc: "/fotos/scharpf_dachgaube_flaschner.jpg",
    imageNote: "Blechverkleidete Gaube aus eigener Klempnerwerkstatt",
  },
  {
    titel: "Ladekran-Einsatz auf enger Baustelle",
    tag: "Service & Sonstige Leistungen",
    text: "Schwere Holzbauteile präzise positioniert: Unser Ladekran kommt auch dort zum Einsatz, wo wenig Platz ist – für eigene Baustellen und externe Partner.",
    imageSrc: "/fotos/scharpf_ladekran.jpg",
    imageNote: "Ladekran von E. Scharpf im Einsatz",
  },
  {
    titel: "Ausstellung & Showroom",
    tag: "Service & Sonstige Leistungen",
    text: "330 qm Holzkompetenz zum Anfassen: Dachfenster, Fassadenmuster und Dämmmaterialien – persönliche Beratung direkt im Showroom in Esslingen.",
    imageSrc: "/fotos/scharpf_ausstellung.jpg",
    imageNote: "Showroom mit Dachfenster-Ausstellung",
  },
];

function Page() {
  return (
    <ReferenzKategorieSeite
      aktiv="/referenzen/services"
      titel="Referenzen Service & Sonstige Leistungen"
      einleitung="Klempnerarbeiten, Dachdeckerei und Sondertransporte – Leistungen, die zeigen, wie breit unser Spektrum wirklich ist."
      projekte={PROJEKTE}
      illustrationSrc="/illustrationen/carport-weiss.png"
    />
  );
}
