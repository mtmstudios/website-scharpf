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
        eyebrow="Dach"
        title="Dachfenster – Licht, Wärme, Dichtheit"
        lead="Ein gut platziertes Dachfenster verwandelt einen dunklen Raum in ein helles Ambiente. Wir sind Experten in der Installation von Dachfenstern, die optimal belichtet, energetisch dämmen und dauerhaft dicht bleiben."
        ctaLabel="Dachfenster anfragen"
        imageNote="Dachfenster-Projektfoto: heller Dachraum mit großzügig einfallendem Tageslicht durch neues Dachfenster."
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
          imageNote="Foto Dachfenster-Einbau: Zimmerer setzt neues Dachfenster in die Dachfläche ein."
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
          imageNote="Foto Verschattung: Dachfenster mit außenliegendem Rollladen oder Jalousie."
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
          imageNote="Foto Showroom: 330 qm Ausstellungsfläche mit verschiedenen Dachfenstern und Materialmustern."
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen"
        imageNotes={[
          "Referenz Dach 1: Dachausbau mit neuen Dachfenstern.",
          "Referenz Dach 2: Lichtband im sanierten Dach.",
          "Referenz Dach 3: heller Wohnraum mit Dachfenster.",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
