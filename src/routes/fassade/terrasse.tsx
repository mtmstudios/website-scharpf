import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/fassade/terrasse")({
  head: () => ({
    meta: [
      { title: "Terrasse bauen Esslingen – Holzterrassen | E. Scharpf" },
      {
        name: "description",
        content:
          "Holzterrassen in Douglasie, Lärche, Bangkirai oder WPC – geplant und gebaut vom Fachbetrieb. Kostenlose Besichtigung im Raum Esslingen und Stuttgart.",
      },
    ],
  }),
  component: Terrasse,
});

function Terrasse() {
  return (
    <div>
      <PageHero
        eyebrow="Fassade & Außenbereiche"
        title="Terrassen, die den Wohnraum verlängern"
        lead="Eine gut geplante Terrasse erweitert Ihren Wohnraum nach draußen. E. Scharpf plant und baut Terrassen in Holz und Holzverbundwerkstoffen – passend zur Architektur Ihres Hauses und mit Fokus auf Langlebigkeit und Pflegefreundlichkeit."
        ctaLabel="Terrasse anfragen"
        imageNote="Fertige Holzterrasse von E. Scharpf"
        imageSrc="/fotos/scharpf_terrasse.jpg"
      />

      <Section>
        <LeistungBlock
          title="Vom Belag bis zum Geländer – alles aus einer Hand"
          text="Wir bauen Ihre Terrasse komplett: normgerechte Unterkonstruktion, langlebiger Belag, passende Geländer und auf Wunsch Überdachung oder Sichtschutz."
          ctaLabel="Terrasse anfragen"
          bullets={[
            "Terrassenböden in Douglasie, Lärche, Bangkirai und WPC",
            "Unterkonstruktion und Befestigungssysteme nach Norm",
            "Balkone und Terrassengeländer in Holz oder Stahl-Holz-Kombination",
            "Balkon-Renovierung und Neubelag",
            "Überdachungen und Pergolen",
          ]}
          imageNote="Terrassenbau im Detail"
          imageSrc="/fotos/scharpf_balkon.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Fassade & Außenbereiche"
        intro="Terrassen, Balkone und Außenbereiche aus der Region Esslingen."
        to="/referenzen/fassade"
        imageNotes={[
          "Fertige Holzterrasse",
          "Renovierter Balkon",
          "Außenbereich im Detail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_terrasse.jpg",
          "/fotos/scharpf_balkon.jpg",
          "/fotos/scharpf_fassade.jpg",
        ]}
      />

      <CtaBanner
        title="Ihr Außenbereich – neu gedacht."
        text="Wir besichtigen Ihr Objekt kostenlos und erstellen Ihnen ein unverbindliches Angebot."
        ctaLabel="Kostenlose Projektberatung Anfordern"
      />
    </div>
  );
}
