import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";
import { CtaButton } from "@/components/cta-button";

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

// Texte: B612 E_Scharpf_Website_Texte.docx, Abschnitt 5 (Leistungsseite Dach).
function Dach() {
  return (
    <div>
      <PageHero
        eyebrow="Leistungen"
        title="Ihr Dachprojekt, in sehr guten Händen."
        lead="Familienbetrieb in der dritten Generation – für hochwertige, innovative Zimmerarbeiten. Neueindeckung, Sanierung oder Dämmung: Wir finden die passende Lösung für Ihr Dach."
        ctaLabel="Jetzt Dach-Check vereinbaren"
        imageNote="Neu eingedecktes Dach von E. Scharpf"
        imageSrc="/fotos/scharpf_dachdecken.jpg"
      />

      <Section>
        <LeistungBlock
          title="Dachsanierungen"
          text="Energetische Sanierung, Hitzeschutz im Sommer oder Nutzung der Sonnenenergie – wir arbeiten seit Jahrzehnten ökologisch mit Holzfaserdämmung und natürlichen Materialien. Auf Wunsch übernehmen wir die KFW-Förderberatung und Antragsstellung."
          ctaLabel="Dach-Check vereinbaren"
          moreTo="/dach/dachsanierung"
          moreLabel="Mehr zur Dachsanierung →"
          bullets={[
            "Komplette Dachsanierungen und Neueindeckungen",
            "Ökologische Holzfaserdämmung",
            "Photovoltaik-Unterdeckungen",
            "KFW-geförderte energetische Sanierung",
          ]}
          imageNote="Dachsanierung mit ökologischer Dämmung"
          imageSrc="/fotos/scharpf_dachsanierung.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Dachfenster"
          text="Ein gut platziertes Dachfenster verwandelt einen dunklen Raum in ein helles Ambiente. Wir sind Experten in der Installation von Dachfenstern, die optimal belichten, energetisch dämmen und dauerhaft dicht bleiben."
          ctaLabel="Dachfenster anfragen"
          moreTo="/dach/dachfenster"
          moreLabel="Mehr zu Dachfenstern →"
          bullets={[
            "Einbau und Austausch aller gängigen Dachfenster-Systeme",
            "Energetisch optimierte Verglasung",
            "Rollläden, Jalousien und Verdunkelung",
            "Dachliegefenster und Lichtbänder",
          ]}
          imageNote="Dachfenster mit viel Tageslicht von innen"
          imageSrc="/fotos/scharpf_velux.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Dachgauben"
          text="Mehr Raum unter der Dachschräge – Gauben können nachträglich eingebaut werden, meist beim Dachausbau oder im Zuge einer Sanierung. Gauben verbessern das Wohnerlebnis, hellen dunkle Räume auf und steigern den Immobilienwert."
          ctaLabel="Gauben-Beratung vereinbaren"
          moreTo="/dach/dachgauben"
          moreLabel="Mehr zu Dachgauben →"
          bullets={[
            "Schleppgauben, Satteldachgauben, Walmdachgauben",
            "Nachträglicher Einbau auch bei laufendem Betrieb",
            "Sämtliche Blecharbeiten aus eigener Werkstatt",
          ]}
          imageNote="Fertige Gaube mit Dachfenster"
          imageSrc="/fotos/scharpf_dachfenster_gaube.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Klempnerarbeiten aus eigener Werkstatt"
          text="Für eine umfassende Betreuung Ihres Dachprojekts haben wir eine eigene Klempnerwerkstatt. Individuelle Blecharbeiten, präzise Passform, schnelle Montage – alles aus einer Hand."
          ctaLabel="Klempnerarbeiten anfragen"
          moreTo="/dach/klempnerarbeiten"
          moreLabel="Mehr zu Klempnerarbeiten →"
          bullets={[
            "Dachrinnen und Fallrohre in Kupfer, Zink und Aluminium",
            "Kehlbleche, Ortgangbleche, Wandanschlüsse",
            "Individuelle Sonderanfertigungen",
          ]}
          imageNote="Klempner- und Blecharbeiten an der Gaube"
          imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
        />
      </Section>

      {/* Ausstellung 330 qm – Conversion-Trigger (B612-Konzept 4.5) */}
      <Section>
        <LeistungBlock
          title="Unsere Ausstellung auf 330 qm"
          text="In unserer Ausstellung können Sie zahlreiche Dachfenster und technische Lösungen rund um Dach und Holzbau besichtigen, Materialien auswählen und Mechaniken selbst ausprobieren. Kommen Sie vorbei – wir beraten Sie persönlich."
          ctaLabel="Termin vereinbaren"
          moreTo="/services/showroom"
          moreLabel="Mehr zum Showroom →"
          imageNote="Ausstellungsraum mit Dachfenstern"
          imageSrc="/fotos/scharpf_ausstellung.jpg"
        />
      </Section>

      {/* KFW-Info-Box */}
      <Section muted className="py-14 lg:py-16">
        <div className="rounded-2xl border border-primary/30 bg-background p-8 sm:p-12">
          <h2 className="max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
            Sorglos sanieren – mit staatlicher Förderung bis zu 20 % günstiger
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Für energetische Dachsanierungen gibt es attraktive
            KFW-Förderprogramme. Wir beraten Sie kostenlos, welche Maßnahmen
            förderfähig sind, und unterstützen Sie bei der Dokumentation für
            Ihren Antrag.
          </p>
          <div className="mt-8">
            <CtaButton to="/kontakt">Jetzt Förderberatung anfragen</CtaButton>
          </div>
        </div>
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Dach"
        intro="Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        to="/referenzen/dach"
        imageNotes={[
          "Energetische Dachsanierung, fertiges Ergebnis",
          "Neueindeckung durch E. Scharpf",
          "Sanierter Dachstuhl im Detail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_dachsanierung_02.jpg",
          "/fotos/scharpf_dachdecken_01.jpg",
          "/fotos/scharpf_dachstuhl.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
