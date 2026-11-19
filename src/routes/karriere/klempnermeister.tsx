import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Klempnermeister (m/w/d)";
const lead = "Du führst fachlich – und bringst Werkstatt, Baustelle und Team voran.";
export const Route = createFileRoute("/karriere/klempnermeister")({
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
    beschreibung={["Du begleitest Klempnerarbeiten von der Planung und Fertigung in unserer eigenen Werkstatt bis zur Montage auf der Baustelle. Du führst dein Team fachlich und stimmst Dachrinnen, Blechverkleidungen und Anschlussdetails mit unseren Zimmerern und Dachdeckern ab."]}
    anforderungen={["Qualifikation als Klempnermeister / Klempnermeisterin", "Freude an fachlicher Führung, präziser Metallarbeit und Teamarbeit"]}
    imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg" imageNote="Blechverkleidete Gaube aus unserer eigenen Klempnerwerkstatt" />;
}