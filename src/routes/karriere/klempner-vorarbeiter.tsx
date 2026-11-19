import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Klempner-Vorarbeiter (m/w/d)";
const lead = "Du bringst Blech, Plan und Team zusammen.";
export const Route = createFileRoute("/karriere/klempner-vorarbeiter")({
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
    beschreibung={["Du koordinierst die täglichen Klempnerarbeiten in der Werkstatt und auf der Baustelle und arbeitest selbst mit. Von der Fertigung der Blechprofile bis zur Montage sorgst du für saubere Abläufe und stimmst dein Team mit den Zimmerern und Dachdeckern ab."]}
    anforderungen={["Erfahrung im Klempner- / Flaschnerhandwerk", "Organisationstalent, Teamfähigkeit und Verantwortungsbewusstsein"]}
    imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg" imageNote="Blechverkleidete Gaube aus unserer eigenen Klempnerwerkstatt" />;
}