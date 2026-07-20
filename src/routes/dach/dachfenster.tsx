import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/dachfenster")({
  head: () => ({
    meta: [
      { title: "Dachfenster Esslingen – Einbau, Austausch & Beratung | Scharpf" },
      {
        name: "description",
        content:
          "Einbau und Austausch aller gängigen Dachfenster-Systeme: energetisch optimierte Verglasung, Verschattung und Beratung im 330 qm Showroom. E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Dachfenster,
});

function Dachfenster() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/dachstuhl-weiss.png"
        eyebrow="Dach"
        title="Dachfenster – Licht, Wärme, Dichtheit"
        lead="Ein gut platziertes Dachfenster verwandelt einen dunklen Raum in ein helles Ambiente. Wir sind Experten in der Installation von Dachfenstern, die optimal belichtet, energetisch dämmen und dauerhaft dicht bleiben."
        ctaLabel="Dachfenster anfragen"
        imageNote="Heller Dachraum mit VELUX Panorama Dachfenster"
        imageSrc="/fotos/scharpf_velux_panorame.jpg"
      />

      <Section>
        <LeistungBlock
          title="Einbau und Austausch aller Systeme"
          text="Ob Neubau, Dachausbau oder Austausch eines undichten Altfensters – wir bauen alle gängigen Dachfenster-Systeme ein und tauschen bestehende Fenster fachgerecht aus. Dachliegefenster, Lichtbänder oder eine ganze Fensterreihe: Wir planen die Belichtung so, dass Ihr Raum optimal ausgeleuchtet wird."
          ctaLabel="Dachfenster anfragen"
          bullets={[
            "Einbau und Austausch aller gängigen Dachfenster-Systeme",
            "Dachliegefenster und Lichtbänder",
            "Fachgerechter Anschluss, dauerhaft dicht",
          ]}
          imageNote="Neu eingebautes VELUX Dachfenster"
          imageSrc="/fotos/scharpf_velux_01.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Energetische Verglasung und Verschattung"
          text="Ein modernes Dachfenster bringt nicht nur Licht, sondern hält auch die Wärme im Haus. Wir setzen auf energetisch optimierte Verglasung und ergänzen auf Wunsch Rollläden, Jalousien und Verdunkelung – für angenehme Temperaturen im Sommer und ungestörten Schlaf. So bleibt Ihr Dachgeschoss das ganze Jahr komfortabel."
          bullets={[
            "Energetisch optimierte Verglasung",
            "Rollläden, Jalousien und Verdunkelung",
            "Sommerlicher Hitzeschutz durch Verschattung",
          ]}
          imageNote="Dachfenster mit Verschattung"
          imageSrc="/fotos/scharpf_velux_02.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Beratung in unserem 330 qm Showroom"
          text="In unserer Ausstellung auf 330 qm können Sie zahlreiche Dachfenster live besichtigen, Mechaniken selbst ausprobieren und Materialien auswählen. So sehen Sie vorab, welches System zu Ihrem Dach und Ihrem Raum passt. Kommen Sie vorbei – wir beraten Sie persönlich."
          ctaLabel="Termin vereinbaren"
          bullets={[
            "Dachfenster live erleben und Mechaniken ausprobieren",
            "Materialien und Verglasungen zum Anfassen",
            "Persönliche Beratung vor Ort",
          ]}
          imageNote="330 qm Showroom von E. Scharpf"
          imageSrc="/fotos/scharpf_ausstellung.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen"
        imageNotes={[
          "Dachausbau mit neuen Dachfenstern",
          "VELUX Dachfenster im sanierten Dach",
          "Heller Wohnraum mit Dachfenster",
        ]}
        imageSrcs={[
          "/fotos/scharpf_velux.jpg",
          "/fotos/scharpf_velux_04.jpg",
          "/fotos/scharpf_velux_Integra.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
