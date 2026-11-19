import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Dachdeckermeister (m/w/d)";
const lead = "Du führst fachlich – und bringst Baustelle und Team voran.";
export const Route = createFileRoute("/karriere/dachdeckermeister")({
  head: () => ({ meta: [
    { title: `${titel} in Esslingen – E. Scharpf` },
    { name: "description", content: lead },
    { property: "og:title", content: `${titel} – E. Scharpf` },
    { property: "og:description", content: lead },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});
function Page() {
  return <JobSeite titel={titel} lead={lead}
    beschreibung={["Du übernimmst die fachliche Führung bei Dacharbeiten und begleitest dein Team von der Planung bis zur Umsetzung. Dabei arbeitest du eng mit unseren Zimmerern und Klempnern zusammen."]}
    anforderungen={["Qualifikation als Dachdeckermeister / Dachdeckermeisterin", "Freude an fachlicher Führung, Teamarbeit und sorgfältiger Ausführung"]}
    imageSrc="/fotos/scharpf_Dacharbeiten.jpg" imageNote="Dacharbeiten von E. Scharpf" />;
}