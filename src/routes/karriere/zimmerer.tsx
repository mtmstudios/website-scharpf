import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/zimmerer")({
  head: () => ({
    meta: [
      { title: "Zimmerer Job Esslingen (m/w/d) – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Zimmerer (m/w/d) gesucht: 4,5-Tage-Woche, eigene Werkhalle, moderne Werkzeuge und echte Perspektiven im Familienbetrieb in Esslingen. Jetzt bewerben.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Zimmerer (m/w/d) – Vollzeit, Esslingen"
      lead="Du baust nicht irgendetwas – du baust Dinge, auf die du stolz sein kannst. Historische Fachwerkhäuser, moderne Holzkonstruktionen, präzise Dacharbeiten."
      beschreibung={[
        "Ob Neubau von Dachstühlen, Holzhäusern und Fassaden oder die fachgerechte Restaurierung historischer Fachwerkhäuser – bei uns trifft traditionelles Handwerk auf modernste Technik. Gemeinsam fertigen wir Bauteile in unserer Werkhalle vor, komplett mit Dämmung und Lattung, und montieren sie anschließend auf der Baustelle passgenau.",
        "Das bedeutet für dich: witterungsunabhängige Arbeit, beste Qualität und sichere Installation – in einem Team, das zusammenhält, und einem Betrieb, der in die Zukunft investiert.",
      ]}
      anforderungen={[
        "Abgeschlossene Ausbildung als Zimmerer / Zimmerin",
        "Handwerkliches Geschick, räumliches Vorstellungsvermögen und technisches Verständnis",
        "Teamfähigkeit, Zuverlässigkeit und Verantwortungsbewusstsein",
        "Führerschein Klasse B",
        "Erfahrung in Holzbau und Restaurierung von Vorteil, aber kein Muss",
      ]}
      imageSrc="/fotos/scharpf_vorfertigung_01.jpg"
      imageNote="Zimmerer von E. Scharpf bei der Vorfertigung"
    />
  );
}
