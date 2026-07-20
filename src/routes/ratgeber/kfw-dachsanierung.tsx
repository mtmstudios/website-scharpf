import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArtikel } from "@/components/ratgeber-artikel";

export const Route = createFileRoute("/ratgeber/kfw-dachsanierung")({
  head: () => ({
    meta: [
      { title: "KFW-Förderung Dachsanierung – Zuschüsse & Antrag | E. Scharpf" },
      {
        name: "description",
        content:
          "Welche Maßnahmen der Dachsanierung werden gefördert und wie stellen Sie den Antrag richtig? Der Ratgeber von E. Scharpf Esslingen – mit kostenloser Förderberatung.",
      },
    ],
  }),
  component: Page,
});

// TODO (B612-Konzept 8): Fördersätze und Programmnamen vor Veröffentlichung
// prüfen – KfW-/BAFA-Konditionen ändern sich regelmäßig.
function Page() {
  return (
    <RatgeberArtikel
      titel="KFW-Förderung Dachsanierung: Was wird gefördert und wie hoch ist der Zuschuss?"
      teaser="Wer sein Dach energetisch saniert, kann von staatlichen Förderprogrammen profitieren. Wir erklären, welche Maßnahmen förderfähig sind und wie Sie den Antrag richtig stellen."
      imageSrc="/fotos/scharpf_dachsanierung.jpg"
      imageNote="Energetische Dachsanierung mit Holzfaserdämmung"
      ctaLabel="Jetzt Förderberatung anfragen"
    >
      <h2>Warum sich die energetische Dachsanierung doppelt lohnt</h2>
      <p>
        Über ein schlecht gedämmtes Dach geht ein erheblicher Teil der
        Heizwärme verloren. Eine energetische Dachsanierung senkt Ihre
        Heizkosten dauerhaft, verbessert den Hitzeschutz im Sommer – und wird
        vom Staat bezuschusst. Bis zu 20 % der förderfähigen Kosten können Sie
        zurückbekommen.
      </p>

      <h2>Diese Maßnahmen sind förderfähig</h2>
      <ul>
        <li>Dämmung der Dachflächen (Aufsparren-, Zwischen- und Untersparrendämmung)</li>
        <li>Neueindeckung in Verbindung mit einer Dämmmaßnahme</li>
        <li>Austausch von Dachfenstern gegen energetisch optimierte Modelle</li>
        <li>Dämmung der obersten Geschossdecke</li>
      </ul>
      <p>
        Voraussetzung ist in der Regel, dass die sanierten Bauteile bestimmte
        Dämmwerte (U-Werte) erreichen und die Ausführung durch einen
        Fachbetrieb erfolgt. Die genauen Konditionen und Fördersätze ändern
        sich regelmäßig – wir prüfen für Sie den aktuellen Stand.
      </p>

      <h2>So läuft der Antrag ab</h2>
      <p>
        Wichtig: Der Förderantrag muss <strong>vor Beginn der Maßnahme</strong>{" "}
        gestellt werden. Der typische Ablauf:
      </p>
      <ul>
        <li>Bestandsaufnahme und Beratung: Welche Maßnahmen sind sinnvoll und förderfähig?</li>
        <li>Angebot vom Fachbetrieb als Grundlage für den Antrag</li>
        <li>Antragstellung – je nach Programm mit Energieeffizienz-Experten</li>
        <li>Ausführung durch den Fachbetrieb inklusive Dokumentation</li>
        <li>Nachweis der Ausführung und Auszahlung des Zuschusses</li>
      </ul>

      <h2>Unser Angebot: Förderberatung inklusive</h2>
      <p>
        Wir sanieren Ihr Dach seit Jahrzehnten ökologisch mit
        Holzfaserdämmung – und beraten Sie kostenlos, welche Förderung für
        Ihre Maßnahme infrage kommt. Auf Wunsch unterstützen wir Sie bei der
        kompletten Dokumentation für Ihren Antrag. In unserem Team steht Ihnen
        dafür ein zertifizierter Energieeffizienz-Experte zur Seite.
      </p>
    </RatgeberArtikel>
  );
}
