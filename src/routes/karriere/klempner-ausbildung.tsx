import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/klempner-ausbildung")({
  head: () => ({
    meta: [
      { title: "Klempner Ausbildung Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Ausbildung zum Klempner / Flaschner (m/w/d) in Esslingen: Blecharbeiten an Dach und Fassade, moderne Werkstatt und ein starkes Team. Jetzt bewerben.",
      },
      { property: "og:title", content: "Klempner Ausbildung Esslingen – E. Scharpf GmbH" },
      {
        property: "og:description",
        content: "Ausbildung zum Klempner / Flaschner (m/w/d) bei E. Scharpf in Esslingen. Jetzt bewerben.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Ausbildung Klempner / Flaschner (m/w/d)"
      lead="Du arbeitest gern mit Metall und willst hoch hinaus? Dann bewirb dich für eine Ausbildung zum Klempner bei uns!"
      beschreibung={[
        "Als Klempner lernst du bei uns, Dachrinnen, Fallrohre, Gaubenverkleidungen und Blechdächer aus Kupfer, Zink und Aluminium herzustellen und fachgerecht zu montieren.",
        "Du arbeitest in der eigenen Werkstatt und auf der Baustelle Hand in Hand mit Zimmerern und Dachdeckern – vom Neubau bis zum historischen Gebäude.",
      ]}
      anforderungen={[
        "Guter Schulabschluss oder handwerkliche Vorerfahrung (z. B. Praktikum)",
        "Handwerkliches Geschick und technisches Interesse",
        "Motivation, Zuverlässigkeit und Teamgeist",
        "Schwindelfreiheit von Vorteil",
      ]}
      imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
      imageNote="Blechverkleidung einer Dachgaube"
    />
  );
}
