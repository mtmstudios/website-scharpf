import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/dachdecker")({
  head: () => ({
    meta: [
      { title: "Dachdecker Job Esslingen (m/w/d) – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Dachdecker (m/w/d) gesucht: 4,5-Tage-Woche, eigene Klempnerwerkstatt, moderne Ausstattung und sicherer Arbeitsplatz im Familienbetrieb Esslingen.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Dachdecker (m/w/d) – Vollzeit, Esslingen"
      lead="Neueindeckungen, energetische Sanierungen, Gauben und Blecharbeiten aus eigener Werkstatt: Bei uns arbeitest du am kompletten Dach – nicht nur an einem Gewerk."
      beschreibung={[
        "Als Dachdecker bei E. Scharpf deckst du Sattel-, Walm- und Flachdächer neu ein, sanierst Bestandsdächer energetisch und arbeitest Hand in Hand mit unseren Zimmerern und Klempnern. Vieles wird in unserer Werkhalle vorbereitet – das macht die Arbeit auf der Baustelle schneller und planbarer.",
        "Dich erwartet ein moderner Betrieb mit eigener Klempnerwerkstatt, top Ausstattung und einem Team, das Qualität und Zusammenhalt großschreibt.",
      ]}
      anforderungen={[
        "Abgeschlossene Ausbildung als Dachdecker / Dachdeckerin",
        "Schwindelfreiheit und körperliche Belastbarkeit",
        "Teamfähigkeit, Zuverlässigkeit und Verantwortungsbewusstsein",
        "Führerschein Klasse B",
        "Erfahrung im Holzbau von Vorteil, aber kein Muss",
      ]}
      imageSrc="/fotos/scharpf_Dacharbeiten.jpg"
      imageNote="Dacharbeiten von E. Scharpf auf der Baustelle"
    />
  );
}
