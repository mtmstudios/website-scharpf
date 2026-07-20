import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";

export const Route = createFileRoute("/referenzen/restaurierung")({
  head: () => ({
    meta: [
      { title: "Referenzen Restaurierung & Sanierung – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Restaurierte Fachwerkhäuser und denkmalgerechte Sanierungen im Großraum Esslingen und Stuttgart – Referenzprojekte der E. Scharpf GmbH.",
      },
    ],
  }),
  component: Page,
});

// Erster Eintrag: freigegebene B612-Copyvorlage. Weitere Einträge sind
// Platzhalter – TODO: echte Projektdaten (Ort, Jahr, Umfang) vom Kunden einholen.
const PROJEKTE: ReferenzProjekt[] = [
  {
    titel: "Restaurierung Fachwerkhaus, Esslingen-Altstadt",
    tag: "Restaurierung & Sanierung",
    text: "Das Fachwerk-Stadthaus aus dem 17. Jahrhundert zeigte typische Schadensbilder: Fäulnis an mehreren Querbalken, Risse im Gefach und eine nicht mehr dichte Eindeckung. Wir haben alle geschädigten Balken materialtreu in Eichenholz ersetzt, die Eindeckung denkmalgerecht erneuert und die gesamte Maßnahme behördlich dokumentiert. Heute steht das Gebäude besser als je zuvor – der Eigentümer hält alle Nachweise für Förderanträge in den Händen.",
    imageSrc: "/fotos/scharpf_fachwerksanierung.jpg",
    imageNote: "Restauriertes Fachwerkhaus in der Esslinger Altstadt",
  },
  {
    titel: "Fachwerksanierung im Bestand",
    tag: "Restaurierung & Sanierung",
    text: "Geschädigte Hölzer wurden materialtreu ergänzt, das Gefach fachgerecht geschlossen und alle Arbeitsschritte lückenlos dokumentiert – in enger Abstimmung mit der zuständigen Denkmalschutzbehörde.",
    imageSrc: "/fotos/scharpf_fachwerksanierung_01.jpg",
    imageNote: "Fachwerksanierung mit ergänzten Hölzern",
  },
  {
    titel: "Denkmalgerechte Dachstuhl-Restaurierung",
    tag: "Restaurierung & Sanierung",
    text: "Der historische Dachstuhl wurde Balken für Balken geprüft, geschädigte Hölzer wurden in traditioneller Zimmermannstechnik ersetzt und die tragende Konstruktion für die nächsten Generationen ertüchtigt.",
    imageSrc: "/fotos/scharpf_restaurierung_08.jpg",
    imageNote: "Restaurierter historischer Dachstuhl",
  },
  {
    titel: "Sanierung eines historischen Stadthauses",
    tag: "Restaurierung & Sanierung",
    text: "Von der Schadenskartierung über den Maßnahmenplan bis zur Ausführung: Wir haben die gesamte Sanierung koordiniert und die historische Bausubstanz mit Respekt vor dem Original erhalten.",
    imageSrc: "/fotos/scharpf_restaurierung_12.jpg",
    imageNote: "Saniertes historisches Stadthaus",
  },
];

function Page() {
  return (
    <ReferenzKategorieSeite
      aktiv="/referenzen/restaurierung"
      titel="Referenzen Restaurierung & Sanierung"
      einleitung="Jedes Projekt hat seine eigene Geschichte – und sein eigenes Material. Sehen Sie, wie wir historische Gebäude mit handwerklichem Fingerspitzengefühl und Respekt vor dem Original neu zum Leben erweckt haben."
      projekte={PROJEKTE}
      illustrationSrc="/illustrationen/fachwerkhaus-weiss.png"
    />
  );
}
