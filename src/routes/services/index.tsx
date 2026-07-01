import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services – Dachdeckerei, Klempnerei, Showroom | E. Scharpf" },
      {
        name: "description",
        content:
          "Dachdeckerarbeiten, Klempnerleistungen aus eigener Werkstatt, Ladekran und 330 qm Showroom. E. Scharpf GmbH Esslingen – alles aus einer Hand.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services & Sonstige Leistungen"
        title="Mehr als Holzbau – Ihr Rundum-Partner."
        lead="Von Dachdecker- und Klempnerarbeiten über Schwertransporte bis zum Ausstellungsbesuch: E. Scharpf bietet das vollständige Leistungsspektrum rund um Dach, Fassade und Holz."
        ctaLabel="Leistung anfragen"
        imageNote="Übersichtsfoto Services: Betriebshof mit Ladekran, Werkstatt oder Showroom."
      />

      <Section>
        <LeistungBlock
          title="Dachdeckerleistungen"
          text="Ob Reparatur, Neueindeckung oder Sanierung: Unser erfahrenes Dachdeckerteam übernimmt alle Arbeiten rund um die Dacheindeckung – schnell, fachgerecht und dauerhaft dicht."
          bullets={[
            "Neueindeckungen in Ziegel, Schiefer und Bitumen",
            "Dachreparaturen und Notabdichtungen",
            "Flachdachabdichtungen",
          ]}
          imageNote="Foto Dachdeckerarbeiten: Team bei der Eindeckung eines Daches."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Eigene Klempnerwerkstatt – alles aus einer Hand."
          text="Statt Fremdvergabe produzieren wir Blechprofile in unserer eigenen Werkstatt. Das spart Zeit, reduziert Koordinationsaufwand und sichert gleichbleibende Qualität."
          ctaLabel="Anfragen"
          bullets={[
            "Dachrinnen, Fallrohre und Ablaufsysteme",
            "Wandanschlüsse, Kehlbleche, Ortgangprofile",
            "Sonderanfertigungen auf Maß",
          ]}
          imageNote="Foto Klempnerwerkstatt: Fertigung von Blechprofilen in der eigenen Werkstatt."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Ladekran mieten"
          text="Für Transport und Montage schwerer Bauteile steht unser Ladekran zur Verfügung – auch für externe Aufträge und Einzeltransporte anfragbar."
          ctaLabel="Ladekran anfragen"
          imageNote="Foto Ladekran: LKW-Ladekran im Einsatz beim Anheben von Bauteilen."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Überzeugen Sie sich selbst – im Showroom."
          text="330 qm Holz zum Anfassen: Kommen Sie vorbei und lassen Sie sich von unseren Materialien und Ausführungen inspirieren. Dachfenster, Fassadenproben, Holzmuster – alles live erleben."
          ctaLabel="Termin vereinbaren"
          imageNote="Foto Showroom: Ausstellungsräume mit Dachfenstern, Fassaden- und Holzmustern."
        />
      </Section>

      <CtaBanner
        title="Noch Fragen? Wir sind für Sie da."
        text="Ob Dachdeckerarbeiten, Klempnern oder ein Besuch in unserem Showroom – sprechen Sie uns einfach an."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
