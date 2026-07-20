import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArtikel } from "@/components/ratgeber-artikel";

export const Route = createFileRoute("/ratgeber/dachgauben-einbauen")({
  head: () => ({
    meta: [
      { title: "Dachgaube einbauen – Kosten & Genehmigung | E. Scharpf" },
      {
        name: "description",
        content:
          "Dachgaube nachträglich einbauen: Gaubentypen, Genehmigung, Statik und Kosten im Überblick. Ratgeber vom Zimmerer-Fachbetrieb E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <RatgeberArtikel
      titel="Dachgauben nachträglich einbauen – so geht es und das kostet es."
      teaser="Eine Gaube macht aus einem engen Dachboden einen richtigen Wohnraum. Wir erklären, was beim nachträglichen Einbau zu beachten ist."
      imageSrc="/fotos/scharpf__dachgauben.jpg"
      imageNote="Nachträglich eingebaute Dachgauben"
      ctaLabel="Gauben-Beratung anfragen"
    >
      <h2>Welche Gaubentypen gibt es?</h2>
      <ul>
        <li><strong>Schleppgaube:</strong> die klassische, robuste Form – flach geneigtes Gaubendach</li>
        <li><strong>Satteldachgaube:</strong> mit eigenem Giebel, passt zu traditionellen Dächern</li>
        <li><strong>Walmdachgaube:</strong> elegant abgewalmt, hochwertige Optik</li>
        <li><strong>Flachdachgaube:</strong> modern, maximaler Raumgewinn</li>
      </ul>
      <p>
        Welcher Typ passt, hängt von Dachform, Ortsbild und Budget ab. Eine
        Alternative mit weniger baulichem Aufwand sind großzügige
        Panorama-Dachfenster.
      </p>

      <h2>Brauche ich eine Genehmigung?</h2>
      <p>
        In Baden-Württemberg ist der nachträgliche Gaubeneinbau in der Regel
        genehmigungspflichtig, da sich die Außenansicht des Gebäudes ändert.
        Maßgeblich sind Bebauungsplan und Landesbauordnung; bei Denkmalen
        kommt die Denkmalschutzbehörde hinzu. Wir klären die Anforderungen im
        Vorfeld und liefern die nötigen Planunterlagen.
      </p>

      <h2>Statik und Ausführung</h2>
      <p>
        Für die Gaube werden Sparren getrennt – die Lasten müssen fachgerecht
        umgeleitet werden. Als Zimmerer-Fachbetrieb prüfen wir die
        Konstruktion, fertigen die Gaube weitgehend vor und bauen sie meist
        innerhalb weniger Tage ein. Der Einbau ist auch bei bewohntem Haus
        möglich; sämtliche Blecharbeiten kommen aus unserer eigenen
        Klempnerwerkstatt.
      </p>

      <h2>Was kostet eine Dachgaube?</h2>
      <p>
        Die Kosten hängen stark von Typ, Größe und Ausstattung ab – von der
        kompakten Schleppgaube bis zur großen Flachdachgaube mit Fensterfront.
        Dazu kommen Planung, Genehmigung und gegebenenfalls Gerüst. Einen
        belastbaren Preis nennen wir Ihnen nach einer kostenlosen
        Besichtigung. Wird die Gaube im Zuge einer energetischen
        Dachsanierung eingebaut, lassen sich Synergien nutzen – und
        Fördermittel für die Dämmmaßnahmen gleich mit.
      </p>
    </RatgeberArtikel>
  );
}
