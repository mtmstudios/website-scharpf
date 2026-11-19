import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Zimmerer-Vorarbeiter (m/w/d)";
const lead = "Du bringst Holz, Plan und Team zusammen.";
export const Route = createFileRoute("/karriere/zimmerer-vorarbeiter")({
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
    beschreibung={["Du stimmst die täglichen Arbeiten im Holzbau ab, koordinierst dein Team und arbeitest selbst mit. Von der Vorfertigung bis zur Montage sorgst du dafür, dass Planung und Ausführung zusammenpassen."]}
    anforderungen={["Erfahrung im Zimmererhandwerk", "Organisationstalent, Teamfähigkeit und Verantwortungsbewusstsein"]}
    imageSrc="/fotos/scharpf_karriere_zimmerer.jpg" imageNote="Zimmerer von E. Scharpf" />;
}