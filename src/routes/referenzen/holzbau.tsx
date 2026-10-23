import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";
import { Section } from "@/components/sections";
import rundholzGesamtAsset from "@/assets/scharpf_holzbau_rundholz_gesamt.jpeg.asset.json";
import rundholzEingangAsset from "@/assets/scharpf_holzbau_rundholz_eingang.jpeg.asset.json";
import rundholzMontageAsset from "@/assets/scharpf_holzbau_rundholz_montage.jpeg.asset.json";

export const Route = createFileRoute("/referenzen/holzbau")({
  head: () => ({
    meta: [
      { title: "Referenzen Holzbau & Konstruktion – E. Scharpf GmbH" },
      { property: "og:title", content: "Referenzen Holzbau & Konstruktion – E. Scharpf GmbH" },
      { property: "og:description", content: "Aufstockungen, Holzhäuser und Carports im Großraum Esslingen und Stuttgart – Holzbau-Referenzprojekte der E. Scharpf GmbH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      illustrationSrc="/illustrationen/dachstuhl-weiss.png"
      nachProjekten={
        <Section className="py-14 lg:py-20">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Neubau von 2 Besucherunterständen in der Wilhelma und Verkleidung Amour Tiger Käfig mit Holzstämmen
          </h2>
          <div className="grid items-start gap-6 sm:grid-cols-2">
            <img
              src={rundholzGesamtAsset.url}
              alt="Gesamtansicht einer Fassade aus senkrechten Rundhölzern"
              loading="lazy"
              className="h-auto w-full rounded-lg"
            />
            <img
              src={rundholzEingangAsset.url}
              alt="Eingangsbereich mit natürlicher Rundholzverkleidung"
              loading="lazy"
              className="h-auto w-full rounded-lg"
            />
            <img
              src={rundholzMontageAsset.url}
              alt="Montage der Holzkonstruktion mit dem Firmen-Ladekran"
              loading="lazy"
              className="h-auto w-full rounded-lg sm:col-span-2"
            />
          </div>
        </Section>
      }
    />
  );
}
