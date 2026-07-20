import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";

export const Route = createFileRoute("/referenzen/dach")({
  head: () => ({
    meta: [
      { title: "Referenzen Dach – E. Scharpf GmbH Esslingen" },
      {
        name: "description",
        content:
          "Dachsanierungen, Neueindeckungen, Gauben und Dachfenster im Großraum Esslingen und Stuttgart – Dach-Referenzprojekte der E. Scharpf GmbH.",
      },
    ],
  }),
  component: Page,
});

// Platzhalter-Einträge – TODO: echte Projektdaten (Ort, Jahr, Umfang) vom Kunden einholen.
const PROJEKTE: ReferenzProjekt[] = [
  {
    titel: "Energetische Dachsanierung",
    tag: "Dach",
    text: "Komplette Sanierung mit ökologischer Holzfaserdämmung und neuer Eindeckung. Die Maßnahme wurde KFW-gefördert – wir haben die Förderberatung und Dokumentation übernommen.",
    imageSrc: "/fotos/scharpf_dachsanierung.jpg",
    imageNote: "Energetisch saniertes Dach",
  },
  {
    titel: "Neueindeckung mit Gauben",
    tag: "Dach",
    text: "Neueindeckung inklusive nachträglich eingebauter Gauben – sämtliche Blecharbeiten stammen aus unserer eigenen Klempnerwerkstatt.",
    imageSrc: "/fotos/scharpf__dachgauben.jpg",
    imageNote: "Neu eingedecktes Dach mit Gauben",
  },
  {
    titel: "Dachfenster-Einbau mit Panorama-Wirkung",
    tag: "Dach",
    text: "Großzügige Dachfenster verwandeln das Dachgeschoss in einen hellen Wohnraum – energetisch optimiert verglast und dauerhaft dicht eingebaut.",
    imageSrc: "/fotos/scharpf_velux.jpg",
    imageNote: "Eingebaute Velux-Dachfenster von innen",
  },
  {
    titel: "Neuer Dachstuhl vom Zimmerer",
    tag: "Dach",
    text: "Abbund und Aufrichtung eines neuen Dachstuhls – CAD-geplant, in der Werkhalle vorgefertigt und termingerecht montiert.",
    imageSrc: "/fotos/scharpf_dachstuhl.jpg",
    imageNote: "Neu errichteter Dachstuhl",
  },
];

function Page() {
  return (
    <ReferenzKategorieSeite
      aktiv="/referenzen/dach"
      titel="Referenzen Dach"
      einleitung="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
      projekte={PROJEKTE}
      illustrationSrc="/illustrationen/dachstuhl-weiss.png"
    />
  );
}
