import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/dach/")({
  head: () => ({
    meta: [
      { title: "Dacharbeiten Esslingen – Sanierung, Gauben, KFW-Förderung" },
      {
        name: "description",
        content:
          "Dachsanierung, Dachfenster, Gauben und Klempnerarbeiten aus einer Hand. Kostenlose KFW-Förderberatung inklusive. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Dach,
});

function Dach() {
  return (
    <div>
      <PageHero
        eyebrow="Dach"
        title="Ihr Dachprojekt, in sehr guten Händen."
        lead="Familienbetrieb in der dritten Generation – für hochwertige, innovative Zimmerarbeiten. Neueindeckung, Sanierung oder Dämmung: Wir finden die passende Lösung für Ihr Dach."
        ctaLabel="Jetzt Dach-Check vereinbaren"
        imageNote="Dach-Projektfoto: fertig saniertes Dach, Neueindeckung oder Dachstuhl mit Gaube."
      />

      <Section>
        <LeistungBlock
          title="Dachsanierungen"
          text="Energetische Sanierung, Hitzeschutz im Sommer oder Nutzung der Sonnenenergie – wir arbeiten seit Jahrzehnten ökologisch mit Holzfaserdämmung und natürlichen Materialien. Auf Wunsch übernehmen wir die KFW-Förderberatung und Antragsstellung."
          ctaLabel="Dach-Check vereinbaren"
          ctaTo="/dach/dachsanierung"
          bullets={[
            "Komplette Dachsanierungen und Neueindeckungen",
            "Ökologische Holzfaserdämmung",
            "Photovoltaik-Unterdeckungen",
            "KFW-geförderte energetische Sanierung",
          ]}
          imageNote="Foto Dachsanierung: Dachstuhl mit neuer Dämmung / Eindeckung in Arbeit."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Dachfenster"
          text="Ein gut platziertes Dachfenster verwandelt einen dunklen Raum in ein helles Ambiente. Wir sind Experten in der Installation von Dachfenstern, die optimal belichtet, energetisch dämmen und dauerhaft dicht bleiben."
          ctaLabel="Dachfenster anfragen"
          ctaTo="/dach/dachfenster"
          bullets={[
            "Einbau und Austausch aller gängigen Dachfenster-Systeme",
            "Energetisch optimierte Verglasung",
            "Rollläden, Jalousien und Verdunkelung",
            "Dachliegefenster und Lichtbänder",
          ]}
          imageNote="Foto Dachfenster: heller Dachraum mit eingebautem Dachfenster."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Dachgauben"
          text="Mehr Raum unter der Dachschräge – Gauben können nachträglich eingebaut werden, meist beim Dachausbau oder im Zuge einer Sanierung. Gauben verbessern das Wohnerlebnis, hellen dunkle Räume auf und steigern den Immobilienwert."
          ctaLabel="Gauben-Beratung vereinbaren"
          ctaTo="/dach/dachgauben"
          bullets={[
            "Schleppgauben, Satteldachgauben, Walmdachgauben",
            "Nachträglicher Einbau auch bei laufendem Betrieb",
            "Sämtliche Blecharbeiten aus eigener Werkstatt",
          ]}
          imageNote="Foto Dachgaube: fertige Gaube mit Blechverkleidung am Wohnhaus."
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Klempnerarbeiten aus eigener Werkstatt"
          text="Für eine umfassende Betreuung Ihres Dachprojekts haben wir eine eigene Klempnerwerkstatt. Individuelle Blecharbeiten, präzise Passform, schnelle Montage – alles aus einer Hand."
          ctaLabel="Klempnerarbeiten anfragen"
          ctaTo="/services"
          bullets={[
            "Dachrinnen und Fallrohre in Kupfer, Zink und Aluminium",
            "Kehlbleche, Ortgangbleche, Wandanschlüsse",
            "Individuelle Sonderanfertigungen",
          ]}
          imageNote="Foto Klempnerei: Blecharbeiten / Dachrinne in Kupfer oder Zink."
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Unsere Ausstellung auf 330 qm"
          text="In unserer Ausstellung können Sie zahlreiche Dachfenster und technische Lösungen rund um Dach und Holzbau besichtigen, Materialien auswählen und Mechaniken selbst ausprobieren. Kommen Sie vorbei – wir beraten Sie persönlich."
          ctaLabel="Termin vereinbaren"
          imageNote="Foto Ausstellung/Showroom: 330 qm Ausstellungsfläche mit Dachfenstern und Materialmustern."
        />
      </Section>

      {/* KFW-Förderung Hinweisband */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Sorglos sanieren – mit staatlicher Förderung bis zu 20 % günstiger
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-accent-foreground/90">
            Für energetische Dachsanierungen gibt es attraktive KFW-Förderprogramme.
            Wir beraten Sie kostenlos, welche Maßnahmen förderfähig sind, und
            unterstützen Sie bei der Dokumentation für Ihren Antrag.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-foreground"
          >
            Jetzt Förderberatung anfragen
          </a>
        </div>
      </section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/dach"
        imageNotes={[
          "Referenz Dach 1: energetische Dachsanierung.",
          "Referenz Dach 2: Gaube mit Blechverkleidung.",
          "Referenz Dach 3: Neueindeckung / Dachfenster.",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
