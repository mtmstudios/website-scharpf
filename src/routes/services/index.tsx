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

// Texte: B612 E_Scharpf_Website_Texte.docx, Abschnitt 7 (Services & Sonstige Leistungen).
function Services() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/carport-weiss.png"
        eyebrow="Leistungen"
        title="Mehr als Holzbau – Ihr Rundum-Partner."
        lead="Von Dachdecker- und Klempnerarbeiten über Schwertransporte bis zum Ausstellungsbesuch: E. Scharpf bietet das vollständige Leistungsspektrum rund um Dach, Fassade und Holz."
        ctaLabel="Leistung anfragen"
        imageNote="Fuhrpark von E. Scharpf im Einsatz"
        imageSrc="/fotos/scharpf_Transporter.jpg"
      />

      <Section>
        <LeistungBlock
          title="Dachdeckerleistungen"
          text="Ob Reparatur, Neueindeckung oder Sanierung: Unser erfahrenes Dachdeckerteam übernimmt alle Arbeiten rund um die Dacheindeckung – schnell, fachgerecht und dauerhaft dicht."
          ctaLabel="Anfragen"
          moreTo="/dach"
          moreLabel="Alle Dach-Leistungen →"
          bullets={[
            "Neueindeckungen in Ziegel, Schiefer und Bitumen",
            "Dachreparaturen und Notabdichtungen",
            "Flachdachabdichtungen",
          ]}
          imageNote="Dachdeckerarbeiten mit Gaube"
          imageSrc="/fotos/scharpf__dachgauben.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Eigene Klempnerwerkstatt – alles aus einer Hand."
          text="Statt Fremdvergabe produzieren wir Blechprofile in unserer eigenen Werkstatt. Das spart Zeit, reduziert Koordinationsaufwand und sichert gleichbleibende Qualität."
          ctaLabel="Anfragen"
          moreTo="/dach/klempnerarbeiten"
          moreLabel="Mehr zu Klempnerarbeiten →"
          bullets={[
            "Dachrinnen, Fallrohre und Ablaufsysteme",
            "Wandanschlüsse, Kehlbleche, Ortgangprofile",
            "Sonderanfertigungen auf Maß",
          ]}
          imageNote="Klempnerarbeiten an der Gaube"
          imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Ladekran mieten"
          text="Für Transport und Montage schwerer Bauteile steht unser Ladekran zur Verfügung – auch für externe Aufträge und Einzeltransporte anfragbar."
          ctaLabel="Ladekran anfragen"
          moreTo="/services/ladekran"
          moreLabel="Mehr zum Ladekran →"
          bullets={[
            "Einsatz auf engen Baustellen und in Innenstadtlagen",
            "Buchung mit Fahrer und Einweisung",
            "Anfrage direkt über Kontaktformular oder Telefon",
          ]}
          imageNote="Ladekran von E. Scharpf im Einsatz"
          imageSrc="/fotos/scharpf_ladekran.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Überzeugen Sie sich selbst – im Showroom."
          text="330 qm Holz zum Anfassen: Kommen Sie vorbei und lassen Sie sich von unseren Materialien und Ausführungen inspirieren. Dachfenster, Fassadenproben, Holzmuster – alles live erleben."
          ctaLabel="Termin vereinbaren"
          moreTo="/services/showroom"
          moreLabel="Mehr zum Showroom →"
          bullets={[
            "Fassadenmuster in verschiedenen Holzarten und Oberflächen",
            "Dachfenster-Ausstellung mit VELUX-Partner-Exponaten",
            "Persönliche Beratung – ohne Voranmeldung oder nach Termin",
          ]}
          imageNote="Showroom / Ausstellung von E. Scharpf"
          imageSrc="/fotos/scharpf_ausstellung.jpg"
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
