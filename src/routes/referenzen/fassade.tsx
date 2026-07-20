import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";

export const Route = createFileRoute("/referenzen/fassade")({
  head: () => ({
    meta: [
      { title: "Referenzen Fassade & Außenbereiche – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Holzfassaden, Wärmedämmung und Terrassen im Großraum Esslingen und Stuttgart – Fassaden-Referenzprojekte der E. Scharpf GmbH.",
      },
    ],
  }),
  component: Page,
});

// Platzhalter-Einträge – TODO: echte Projektdaten (Ort, Jahr, Umfang) vom Kunden einholen.
const PROJEKTE: ReferenzProjekt[] = [
  {
    titel: "Hinterlüftete Holzfassade",
    tag: "Fassade & Außenbereiche",
    text: "Vorgehängte, hinterlüftete Holzfassade mit ökologischer Dämmung – wartungsarm, langlebig und ein sichtbares Statement für nachhaltiges Bauen.",
    imageSrc: "/fotos/scharpf_fassade_01.jpg",
    imageNote: "Hinterlüftete Holzfassade im Detail",
  },
  {
    titel: "Fassadensanierung mit Wärmedämmung",
    tag: "Fassade & Außenbereiche",
    text: "Neue Fassadenverkleidung kombiniert mit Holzfaserdämmung: spürbar niedrigere Heizkosten, besseres Raumklima und eine deutliche Aufwertung des Gebäudes.",
    imageSrc: "/fotos/scharpf_fassade_02.jpg",
    imageNote: "Gedämmte und neu verkleidete Fassade",
  },
  {
    titel: "Terrasse aus Holz",
    tag: "Fassade & Außenbereiche",
    text: "Geplant und gebaut passend zu Haus und Garten: eine langlebige Holzterrasse mit normgerechter Unterkonstruktion, die den Wohnraum nach draußen verlängert.",
    imageSrc: "/fotos/scharpf_terrasse.jpg",
    imageNote: "Fertige Holzterrasse",
  },
  {
    titel: "Balkon-Renovierung",
    tag: "Fassade & Außenbereiche",
    text: "Neuer Belag, neues Geländer, dauerhafte Abdichtung – der renovierte Balkon ist wieder ein sicherer und schöner Platz im Freien.",
    imageSrc: "/fotos/scharpf_balkon.jpg",
    imageNote: "Renovierter Balkon mit Holzbelag",
  },
];

function Page() {
  return (
    <ReferenzKategorieSeite
      aktiv="/referenzen/fassade"
      titel="Referenzen Fassade & Außenbereiche"
      einleitung="Holzfassaden, Terrassengestaltungen und Wärmedämm-Verbundsysteme: Arbeiten, die sich durch Qualität und Langlebigkeit auszeichnen."
      projekte={PROJEKTE}
      illustrationSrc="/illustrationen/fachwerkhaus-weiss.png"
    />
  );
}
