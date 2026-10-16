import { createFileRoute } from "@tanstack/react-router";
import {
  ReferenzKategorieSeite,
  type ReferenzProjekt,
} from "@/components/referenz-kategorie";
import { Section } from "@/components/sections";

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
    imageSrc: "/__l5e/assets-v1/a6ffe870-e2ca-452c-b687-e3b5432a321c/scharpf_restaurierung_ki.png",
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
      nachProjekten={
        <Section className="py-14 lg:py-20">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Vor der Sanierung – Nach der Sanierung
          </h2>
          <span className="mt-4 block h-1 w-24 rounded bg-primary" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["/__l5e/assets-v1/6e82fd8f-7fee-4937-8bc6-3e0b33267be7/scharpf_sanierung_DSCF4305.jpg", "Vor der Sanierung", "Historisches Stadthaus vor der Sanierung"],
              ["/__l5e/assets-v1/7ad026e3-3a7d-45fc-9013-8af5456bb2c4/scharpf_sanierung_DSCF4704.jpg", "Nach der Sanierung", "Historisches Stadthaus nach der Sanierung"],
              ["/__l5e/assets-v1/a142d29d-f3f9-4c0e-9966-61c99f61af7c/scharpf_sanierung_Marktplatz_1.jpg", "Vor der Sanierung ", "Häuser am Esslinger Marktplatz vor der Sanierung"],
              ["/__l5e/assets-v1/09d1d475-2c8b-4398-b056-b9fc5bb2687a/scharpf_sanierung_DSC_0418.jpg", "Nach der Sanierung ", "Häuser am Esslinger Marktplatz nach der Sanierung"],
            ].map(([src, label, alt]) => (
              <figure key={label}>
                <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <figcaption className="mt-3 font-display text-lg font-bold text-foreground">{label}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      }
    />
  );
}
