import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/klempner")({
  head: () => ({
    meta: [
      { title: "Klempner / Flaschner Job Esslingen (m/w/d) – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Klempner / Flaschner (m/w/d) gesucht: eigene Klempnerwerkstatt, 4,5-Tage-Woche, moderne Ausstattung und sicherer Arbeitsplatz im Familienbetrieb Esslingen.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Klempner / Flaschner (m/w/d) – Vollzeit, Esslingen"
      lead="Dachrinnen, Kehlbleche, Gaubenverkleidungen und Sonderanfertigungen: In unserer eigenen Klempnerwerkstatt fertigst du an, was auf unseren Baustellen verbaut wird."
      beschreibung={[
        "Als Klempner bei E. Scharpf arbeitest du in unserer eigenen Werkstatt und auf der Baustelle. Du kantest und fertigst Blechprofile in Kupfer, Zink und Aluminium, montierst Dachrinnen und Fallrohre, verkleidest Gauben und löst Anschlussdetails, für die es keine Standardlösung gibt.",
        "Weil wir nichts fremdvergeben, siehst du dein Werkstück von der Planung bis zur Montage. Du arbeitest eng mit unseren Zimmerern und Dachdeckern zusammen – am selben Dach, im selben Team.",
      ]}
      anforderungen={[
        "Abgeschlossene Ausbildung als Klempner / Flaschner oder Spengler",
        "Sicherer Umgang mit Kupfer, Zink und Aluminium",
        "Schwindelfreiheit und körperliche Belastbarkeit",
        "Sorgfalt und Freude an sauberen Anschlussdetails",
        "Führerschein Klasse B",
      ]}
      imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
      imageNote="Blechverkleidete Gaube aus unserer eigenen Klempnerwerkstatt"
    />
  );
}
