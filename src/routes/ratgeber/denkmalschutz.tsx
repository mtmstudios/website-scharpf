import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArtikel } from "@/components/ratgeber-artikel";

export const Route = createFileRoute("/ratgeber/denkmalschutz")({
  head: () => ({
    meta: [
      { title: "Denkmalschutz sanieren – Ratgeber für Eigentümer | E. Scharpf" },
      {
        name: "description",
        content:
          "Genehmigungen, Behördenabstimmung, Fördermittel: Was Eigentümer denkmalgeschützter Gebäude vor der Sanierung wissen müssen. Ratgeber von E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <RatgeberArtikel
      titel="Denkmalschutz: Was Eigentümer wissen müssen, bevor sie sanieren."
      teaser="Ein denkmalgeschütztes Gebäude zu sanieren ist komplex – aber machbar. Dieser Ratgeber erklärt, was genehmigungspflichtig ist und welche Fördermittel es gibt."
      imageSrc="/fotos/scharpf_fachwerksanierung.jpg"
      imageNote="Denkmalgerecht saniertes Fachwerkhaus"
      ctaLabel="Erstgespräch anfragen"
    >
      <h2>Was ist genehmigungspflichtig?</h2>
      <p>
        Bei einem Baudenkmal ist grundsätzlich jede Veränderung
        genehmigungspflichtig – auch Maßnahmen, die bei normalen Gebäuden
        frei wären: neue Fenster, eine andere Dacheindeckung, Anstriche oder
        der Austausch von Balken. Zuständig ist die Untere
        Denkmalschutzbehörde Ihrer Stadt oder Ihres Landkreises.
      </p>

      <h2>Der richtige Weg: erst abstimmen, dann bauen</h2>
      <ul>
        <li>Frühzeitig Kontakt mit der Denkmalschutzbehörde aufnehmen – am besten vor der Planung</li>
        <li>Bestandsaufnahme und Schadenskartierung als Grundlage für das Genehmigungsverfahren</li>
        <li>Maßnahmen mit historisch korrekten Materialien und Techniken planen</li>
        <li>Jeden Arbeitsschritt dokumentieren – für Behörde, Förderstellen und den eigenen Nachweis</li>
      </ul>
      <p>
        Ein erfahrener Fachbetrieb nimmt Ihnen hier viel ab: Wir stimmen uns
        seit Jahrzehnten mit Unterer und Oberer Denkmalschutzbehörde ab und
        wissen, welche Unterlagen die Ämter erwarten.
      </p>

      <h2>Diese Fördermöglichkeiten gibt es</h2>
      <ul>
        <li>Zuschüsse der Denkmalstiftungen und Landesprogramme für Baden-Württemberg</li>
        <li>Steuerliche Abschreibung von Sanierungskosten bei Baudenkmalen</li>
        <li>KFW-Programme für energetische Maßnahmen – mit Sonderkonditionen für Denkmale</li>
      </ul>
      <p>
        Wichtig: Fördermittel müssen fast immer <strong>vor Baubeginn</strong>{" "}
        beantragt werden, und die Bewilligung setzt eine lückenlose
        Dokumentation voraus.
      </p>

      <h2>Typische Fehler vermeiden</h2>
      <p>
        Die häufigsten Probleme entstehen durch nicht abgestimmte Maßnahmen,
        falsche Materialien (z. B. Zementputz auf historischem Mauerwerk oder
        dampfdichte Anstriche auf Fachwerk) und fehlende Dokumentation. Beides
        kann teuer werden – im schlimmsten Fall verlangt die Behörde den
        Rückbau. Mit fachgerechter Planung passiert das nicht.
      </p>
    </RatgeberArtikel>
  );
}
