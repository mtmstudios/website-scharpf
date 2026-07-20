import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArtikel } from "@/components/ratgeber-artikel";

export const Route = createFileRoute("/ratgeber/holzfassaden")({
  head: () => ({
    meta: [
      { title: "Holzfassaden Ratgeber – Welches System passt? | E. Scharpf" },
      {
        name: "description",
        content:
          "Vorgehängte Fassade, Trespa oder Holzschalung? Der Überblick über Systeme, Pflege und Kosten – vom Fassaden-Fachbetrieb E. Scharpf aus Esslingen.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <RatgeberArtikel
      titel="Holzfassaden: Welches System passt zu meinem Gebäude?"
      teaser="Vorgehängte Fassade, Trespa oder Holzschalung – die Unterschiede sind größer als man denkt. Wir geben einen Überblick über die gängigen Systeme und ihre Vor- und Nachteile."
      imageSrc="/fotos/scharpf_fassade_01.jpg"
      imageNote="Holzfassade in warmer Holzoptik"
      ctaLabel="Kostenlose Beratung anfragen"
    >
      <h2>Die drei gängigen Systeme im Vergleich</h2>
      <p>
        <strong>Vorgehängte, hinterlüftete Holzfassade:</strong> Der Klassiker
        für dauerhafte Qualität. Zwischen Dämmung und Verkleidung zirkuliert
        Luft – Feuchtigkeit trocknet ab, die Konstruktion bleibt gesund. Ideal,
        wenn Fassade und Dämmung in einem Schritt erneuert werden.
      </p>
      <p>
        <strong>Trespa-Fassade:</strong> Hochverdichtete Platten, extrem
        witterungsbeständig und in vielen Optiken erhältlich. Praktisch
        wartungsfrei – die richtige Wahl, wenn es pflegeleicht sein soll.
      </p>
      <p>
        <strong>Holzschalung:</strong> Boden-Deckel, Rhombus oder
        Stülpschalung – die klassische Zimmererlösung. Natürlich, individuell
        und ökologisch. Je nach Holzart und Behandlung vergraut die Oberfläche
        mit der Zeit silbrig oder wird regelmäßig lasiert.
      </p>

      <h2>Pflegeaufwand realistisch einschätzen</h2>
      <ul>
        <li>Unbehandelte Lärche oder Douglasie: keine Pflege nötig, natürliche Vergrauung</li>
        <li>Lasierte Oberflächen: Auffrischung je nach Bewitterung etwa alle 5–8 Jahre</li>
        <li>Trespa: Reinigung genügt</li>
      </ul>

      <h2>Was kostet eine Holzfassade?</h2>
      <p>
        Die Kosten hängen von System, Holzart, Dämmung und Gebäudegeometrie
        ab. Als grobe Orientierung: Eine Holzschalung ist meist die
        günstigste Variante, die vorgehängte hinterlüftete Fassade mit
        Dämmung liegt darüber – dafür verbessert sie den Energiestandard und
        kann gefördert werden. Ein belastbarer Preis entsteht erst nach der
        Besichtigung: Wir schauen uns Ihr Objekt kostenlos an und erstellen
        ein unverbindliches Angebot.
      </p>

      <h2>Der ökologische Vorteil</h2>
      <p>
        Holz bindet CO₂, ist regional verfügbar und lässt sich am Ende der
        Nutzungsdauer sortenrein trennen. In Kombination mit
        Holzfaserdämmung entsteht eine Fassade, die Wärmeschutz, Ökologie und
        Gestaltung vereint.
      </p>
    </RatgeberArtikel>
  );
}
