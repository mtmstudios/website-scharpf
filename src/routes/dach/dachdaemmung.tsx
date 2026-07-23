import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/dachdaemmung")({
  head: () => ({
    meta: [
      { title: "Dachdämmung & KFW-Förderung Esslingen | E. Scharpf" },
      {
        name: "description",
        content:
          "Ökologische Dachdämmung mit Holzfaser und KFW-Förderberatung: bis zu 20 % staatlicher Zuschuss. Sommerlicher Hitzeschutz, warmes Zuhause. E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Dachdaemmung,
});

function Dachdaemmung() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Dach"
        title="Dachdämmung & KFW-Förderung – bis zu 20 % sparen"
        lead="Eine gute Dachdämmung senkt Ihre Heizkosten, schützt im Sommer vor Hitze und macht Ihr Zuhause behaglicher. Wir dämmen ökologisch mit Holzfaser und beraten Sie kostenlos zur KFW-Förderung – bis zu 20 % der Kosten können Sie zurückbekommen."
        ctaLabel="Förderberatung anfragen"
        imageNote="Dachsanierung mit eingebauter Holzfaserdämmung"
        imageSrc="/fotos/scharpf_dachsanierung.jpg"
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Dach", to: "/dach" },
          { label: "Dachdämmung" },
        ]}
      />


      <Section>
        <LeistungBlock
          title="Ökologisch dämmen mit Holzfaser"
          text="Holzfaserdämmung schützt im Sommer vor Hitze, im Winter vor Kälte – und ist zu 100 % natürlich. Sie ist diffusionsoffen, sodass Feuchtigkeit entweichen kann und die Bausubstanz gesund bleibt. Wir arbeiten seit Jahrzehnten mit natürlichen Materialien und stimmen die Dämmung genau auf Ihr Dach ab."
          ctaLabel="Beratung anfragen"
          bullets={[
            "Holzfaserdämmung, diffusionsoffen und zu 100 % natürlich",
            "Gesunde Bausubstanz durch Feuchteregulierung",
            "Natürliche Materialien aus jahrzehntelanger Erfahrung",
          ]}
          imageNote="Dachsanierung mit natürlicher Holzfaserdämmung"
          imageSrc="/fotos/scharpf_dachsanierung_02.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Energetischer Nutzen – Sommer wie Winter"
          text="Über ein ungedämmtes Dach geht ein großer Teil der Heizwärme verloren. Eine fachgerechte Dachdämmung hält die Wärme im Winter im Haus und die Sommerhitze draußen. Das Ergebnis: ein spürbar angenehmeres Raumklima im ganzen Jahr und dauerhaft niedrigere Energiekosten."
          bullets={[
            "Sommerlicher Hitzeschutz im Dachgeschoss",
            "Winterlicher Wärmeschutz und weniger Heizverluste",
            "Dauerhaft niedrigere Energiekosten",
          ]}
          imageNote="Helles Dachgeschoss mit VELUX Dachfenster"
          imageSrc="/fotos/scharpf_velux_Integra.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="KFW-Förderberatung & Antragsunterstützung"
          text="Für energetische Dachsanierungen gibt es attraktive KFW-Förderprogramme. Wir beraten Sie kostenlos, welche Maßnahmen förderfähig sind, und unterstützen Sie bei der Dokumentation für Ihren Antrag. So sanieren Sie sorglos – mit staatlicher Förderung bis zu 20 % günstiger."
          ctaLabel="Jetzt Förderberatung anfragen"
          bullets={[
            "Kostenlose Beratung zu förderfähigen Maßnahmen",
            "Unterstützung bei der Antragsdokumentation",
            "Bis zu 20 % staatlicher Zuschuss auf förderfähige Kosten",
          ]}
          imageNote="Foto Förderberatung: Beratungsgespräch mit Bauunterlagen und KFW-Antragsformularen."
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen"
        imageNotes={[
          "Energetische Dachsanierung, fertiges Ergebnis",
          "Neu gedämmtes und eingedecktes Dach",
          "Saniertes Dach von E. Scharpf",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachsanierung.jpg",
          "/fotos/scharpf_dachsanierung_02.jpg",
          "/fotos/scharpf_dachdecken.jpg",
        ]}
      />

      <CtaBanner
        tone="mint"
        title="Sorglos sanieren – mit staatlicher Förderung bis zu 20 % günstiger"
        text="Für energetische Dachdämmungen gibt es attraktive KFW-Förderprogramme. Wir beraten Sie kostenlos, welche Maßnahmen förderfähig sind, und unterstützen Sie bei der Dokumentation für Ihren Antrag."
        ctaLabel="Jetzt Förderberatung anfragen"
      />
    </div>
  );
}
