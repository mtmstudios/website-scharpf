import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArtikel } from "@/components/ratgeber-artikel";

export const Route = createFileRoute("/ratgeber/holz-als-baustoff")({
  head: () => ({
    meta: [
      { title: "Holz als Baustoff – nachhaltig & zukunftssicher | E. Scharpf" },
      {
        name: "description",
        content:
          "CO₂-Speicher, gesundes Raumklima, regionale Verfügbarkeit: Warum Holz der älteste und zugleich modernste Baustoff der Welt ist. Ratgeber von E. Scharpf.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <RatgeberArtikel
      titel="Warum Holz? Die Stärken des ältesten Baustoffs der Welt."
      teaser="Holz ist CO₂-neutral, robust, ästhetisch und regional verfügbar. Was spricht dafür, was dagegen – und wann ist Holz die richtige Wahl?"
      imageSrc="/fotos/scharpf_vorfertigung_02.jpg"
      imageNote="Sichtbare Holzkonstruktion von E. Scharpf"
      ctaLabel="Beratung anfragen"
    >
      <h2>Holz speichert CO₂ – dauerhaft</h2>
      <p>
        Ein Kubikmeter Holz bindet rund eine Tonne CO₂, die der Baum beim
        Wachsen aufgenommen hat. Solange das Holz verbaut ist, bleibt das CO₂
        gespeichert. Wer mit Holz baut, ersetzt zudem energieintensive
        Baustoffe wie Beton und Stahl – die Klimabilanz verbessert sich also
        doppelt.
      </p>

      <h2>Leicht, tragfähig, präzise</h2>
      <p>
        Im Verhältnis zu seinem Gewicht ist Holz enorm tragfähig – deshalb
        sind Aufstockungen in Holzbauweise fast immer möglich, ohne das
        bestehende Gebäude statisch zu überlasten. Moderne CAD-Planung und
        Vorfertigung machen den Holzbau millimetergenau: Elemente entstehen
        witterungsunabhängig in der Werkhalle und werden auf der Baustelle in
        wenigen Tagen montiert.
      </p>

      <h2>Gesundes Raumklima</h2>
      <p>
        Holz ist diffusionsoffen und reguliert Feuchtigkeit auf natürliche
        Weise. In Kombination mit Holzfaserdämmung entsteht ein Gebäude, das
        im Sommer vor Hitze schützt, im Winter Wärme hält – und sich spürbar
        angenehm anfühlt.
      </p>

      <h2>Und der Brandschutz?</h2>
      <p>
        Ein häufiges Vorurteil – dabei verhält sich Holz im Brandfall
        berechenbar: Es bildet eine schützende Kohleschicht und behält seine
        Tragfähigkeit deutlich länger als ungeschützter Stahl. Moderne
        Holzbauten erfüllen dieselben Brandschutzanforderungen wie
        Massivbauten.
      </p>

      <h2>Regional und kreislauffähig</h2>
      <p>
        Wir arbeiten bevorzugt mit ökologisch unbedenklichen, regionalen
        Holzsorten – kurze Wege, nachvollziehbare Herkunft, nachwachsender
        Rohstoff. Am Ende seiner Nutzungsdauer lässt sich Holz sortenrein
        trennen und weiterverwenden. Kurz: Für Aufstockungen, Anbauten,
        Fassaden und den Hausbau ist Holz in den meisten Fällen die
        zukunftssicherste Wahl.
      </p>
    </RatgeberArtikel>
  );
}
