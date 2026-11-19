import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

const titel = "Zimmerermeister (m/w/d)";
const lead = "Du denkst Konstruktion weiter – und führst sie zum Ergebnis.";
export const Route = createFileRoute("/karriere/zimmerermeister")({
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
    beschreibung={["Du begleitest Holzkonstruktionen von der Planung bis zur Umsetzung und führst dein Team fachlich. Neubau, Vorfertigung und Restaurierung verbinden dabei traditionelles Handwerk mit moderner Technik."]}
    anforderungen={["Qualifikation als Zimmerermeister / Zimmerermeisterin", "Freude an Konstruktion, fachlicher Führung und Teamarbeit"]}
    imageSrc="/fotos/scharpf_karriere_zimmerer.jpg" imageNote="Zimmerer von E. Scharpf" />;
}