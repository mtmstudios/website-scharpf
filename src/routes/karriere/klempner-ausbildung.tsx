import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Ausbildung zum Klempner (m/w/d)";
const lead = "Lerne, Metall zu formen – und Dächer und Fassaden zu gestalten.";
export const Route = createFileRoute("/karriere/klempner-ausbildung")({
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
    beschreibung={["Im Klempnerhandwerk lernst du, Bleche zu bearbeiten und passgenaue Bauteile für Dächer und Fassaden herzustellen. In unserer eigenen Werkstatt und auf der Baustelle gehören Dachrinnen, Fallrohre, Gaubenverkleidungen und saubere Anschlussdetails zum Handwerk."]}
    anforderungen={["Handwerkliches Geschick und technisches Interesse", "Sorgfalt, Zuverlässigkeit und Freude an Teamarbeit"]}
    imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg" imageNote="Blechverkleidete Gaube aus unserer eigenen Klempnerwerkstatt" />;
}