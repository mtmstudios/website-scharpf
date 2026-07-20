import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/bauhelfer")({
  head: () => ({
    meta: [
      { title: "Bauhelfer Stelle Esslingen (m/w/d) – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Bauhelfer (m/w/d) gesucht – auch für Quereinsteiger: Unterstütze unser Holzbau-Team in Esslingen. Faire Bezahlung, moderner Betrieb. Jetzt bewerben.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Bauhelfer (m/w/d) – auch für Quereinsteiger"
      lead="Du packst gerne mit an und willst im Handwerk arbeiten? Als Bauhelfer unterstützt du unser Team in der Werkhalle und auf der Baustelle."
      beschreibung={[
        "Du hilfst beim Vorbereiten und Verladen von Bauteilen, unterstützt unsere Zimmerer und Dachdecker auf der Baustelle und sorgst dafür, dass der Ablauf rund läuft. Eine handwerkliche Ausbildung brauchst du dafür nicht – Motivation und Zuverlässigkeit zählen.",
        "Wer sich bewährt, kann sich bei uns weiterentwickeln – bis hin zur Ausbildung im Zimmerer- oder Dachdeckerhandwerk.",
      ]}
      anforderungen={[
        "Körperliche Belastbarkeit und Freude an praktischer Arbeit",
        "Zuverlässigkeit und Teamfähigkeit",
        "Führerschein Klasse B von Vorteil",
        "Deutschkenntnisse für die Verständigung auf der Baustelle",
      ]}
      imageSrc="/fotos/scharpf_Transporter.jpg"
      imageNote="Baustellenteam von E. Scharpf"
    />
  );
}
