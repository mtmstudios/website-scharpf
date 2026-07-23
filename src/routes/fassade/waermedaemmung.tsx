import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/fassade/waermedaemmung")({
  head: () => ({
    meta: [
      { title: "Fassadendämmung Esslingen – KFW-gefördert | E. Scharpf" },
      {
        name: "description",
        content:
          "Ökologische Fassadendämmung mit Holzfaser oder WDVS – KFW-konform ausgeführt, Förderberatung inklusive. E. Scharpf GmbH Esslingen.",
      },
    ],
  }),
  component: Waermedaemmung,
});

function Waermedaemmung() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/fachwerkhaus-band-weiss.png"
        eyebrow="Fassade & Außenbereiche"
        title="Ökologisch dämmen – KFW-Förderung nutzen."
        lead="Gut gedämmte Fassaden senken Heizkosten, verbessern das Raumklima und werten das Gebäude nachhaltig auf. Unsere ökologischen Dämmlösungen sind auf Langlebigkeit und bauphysikalische Korrektheit ausgelegt."
        ctaLabel="Förderberatung anfragen"
        imageNote="Gedämmte Fassade von E. Scharpf"
        imageSrc="/fotos/scharpf_fassade_02.jpg"
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Fassade & Außenbereiche", to: "/fassade" },
          { label: "Wärmedämmung" },
        ]}
      />


      <Section>
        <LeistungBlock
          title="Dämmsysteme für jede Fassade"
          text="Holzfaserdämmung schützt im Sommer vor Hitze, im Winter vor Kälte – und ist zu 100 % natürlich. Wir dämmen diffusionsoffen und bauphysikalisch korrekt, damit Ihre Fassade dauerhaft trocken und gesund bleibt."
          ctaLabel="Förderberatung anfragen"
          bullets={[
            "Holzfaserdämmplatten – ökologisch, diffusionsoffen, klimaregulierend",
            "Wärmedämmverbundsysteme (WDVS) mit Holzverkleidung",
            "Dämmung hinterlüfteter Fassaden",
            "KFW-konforme Ausführung – Förderberatung inklusive",
          ]}
          imageNote="Fassadendämmung im Aufbau"
          imageSrc="/fotos/scharpf_vorfertigung_02.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Bis zu 20 % Förderung sichern"
          text="Für energetische Fassadendämmung gibt es attraktive staatliche Förderprogramme. Wir beraten Sie kostenlos, welche Maßnahmen förderfähig sind, und unterstützen Sie bei der Dokumentation für Ihren Antrag."
          ctaLabel="Jetzt Förderberatung anfragen"
          moreTo="/ratgeber/kfw-dachsanierung"
          moreLabel="Zum KFW-Ratgeber →"
          imageNote="Beratung zur Förderung mit Bauunterlagen"
          imageSrc="/fotos/scharpf_fassade.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Fassade & Außenbereiche"
        intro="Gedämmte und neu verkleidete Fassaden aus der Region Esslingen und Stuttgart."
        to="/referenzen/fassade"
        imageNotes={[
          "Gedämmte Fassade",
          "Fassade in der Gesamtansicht",
          "Fassadendetail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_fassade_02.jpg",
          "/fotos/scharpf_fassade_03.jpg",
          "/fotos/scharpf_fassade_01.jpg",
        ]}
      />

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
