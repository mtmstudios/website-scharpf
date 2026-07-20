import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";

export const Route = createFileRoute("/referenzen/holzbau")({
  head: () => ({
    meta: [
      { title: "Referenzen Holzbau & Konstruktion – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Aufstockungen, Holzhäuser und Carports im Großraum Esslingen und Stuttgart – Holzbau-Referenzprojekte der E. Scharpf GmbH.",
      },
    ],
  }),
  component: Page,
});

// Platzhalter-Einträge – TODO: echte Projektdaten (Ort, Jahr, Umfang) vom Kunden einholen.
const PROJEKTE: ReferenzProjekt[] = [
  {
    titel: "Aufstockung in Holzrahmenbauweise",
    tag: "Holzbau & Konstruktion",
    text: "Auf das bestehende Vollgeschoss wurde in Holzrahmenbauweise ein vollständiges Geschoss mit neuem Dach errichtet. Die Elemente wurden in unserer Werkhalle vorgefertigt – die Montage auf der Baustelle dauerte nur wenige Tage.",
    imageSrc: "/fotos/scharpf_aufstockung_01.jpg",
    imageNote: "Aufstockung in Holzrahmenbauweise im Bau",
  },
  {
    titel: "Neubau mit vorgefertigten Holzelementen",
    tag: "Holzbau & Konstruktion",
    text: "Wand- und Dachelemente inklusive Dämmung und Lattung kamen komplett vorgefertigt aus unserer Werkhalle in Esslingen – präzise auf den Millimeter und witterungsunabhängig montiert.",
    imageSrc: "/fotos/scharpf_neubau.jpg",
    imageNote: "Neubau in Holzbauweise",
  },
  {
    titel: "Teilaufstockung mit neuem Dachgeschoss",
    tag: "Holzbau & Konstruktion",
    text: "Dank des geringen Gewichts von Holz konnte das Gebäude ohne aufwendige statische Ertüchtigung aufgestockt werden. Das Ergebnis: ein helles, neues Wohngeschoss mit moderner Dämmung.",
    imageSrc: "/fotos/scharpf_aufstockung_03.jpg",
    imageNote: "Fertiggestellte Teilaufstockung",
  },
  {
    titel: "Maßgefertigter Carport",
    tag: "Holzbau & Konstruktion",
    text: "Konstruiert, vorgefertigt und montiert aus einer Hand: ein langlebiger Holz-Carport, der sich harmonisch in Haus und Grundstück einfügt.",
    imageSrc: "/fotos/scharpf_carport.jpg",
    imageNote: "Maßgefertigter Holz-Carport",
  },
];

function Page() {
  return (
    <ReferenzKategorieSeite
      aktiv="/referenzen/holzbau"
      titel="Referenzen Holzbau & Konstruktion"
      einleitung="Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie, was aus unserer Zusammenarbeit entstehen kann."
      projekte={PROJEKTE}
    />
  );
}
