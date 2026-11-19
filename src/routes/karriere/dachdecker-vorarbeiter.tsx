import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Dachdecker-Vorarbeiter (m/w/d)";
const lead = "Du machst aus vielen Aufgaben einen guten Ablauf.";
export const Route = createFileRoute("/karriere/dachdecker-vorarbeiter")({
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
    beschreibung={["Du koordinierst die täglichen Dacharbeiten, stimmst Aufgaben im Team ab und packst selbst mit an. Gemeinsam mit unseren Zimmerern und Klempnern sorgst du für einen guten Ablauf auf der Baustelle."]}
    anforderungen={["Erfahrung im Dachdeckerhandwerk", "Organisationstalent, Teamfähigkeit und Verantwortungsbewusstsein"]}
    imageSrc="/fotos/scharpf_Dacharbeiten.jpg" imageNote="Dacharbeiten von E. Scharpf" />;
}