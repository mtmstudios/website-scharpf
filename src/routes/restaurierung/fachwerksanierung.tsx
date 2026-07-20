import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  ReferenzTeaser,
  CtaBanner,
} from "@/components/sections";

export const Route = createFileRoute("/restaurierung/fachwerksanierung")({
  head: () => ({
    meta: [
      { title: "Fachwerksanierung Esslingen – denkmalgerecht | E. Scharpf" },
      {
        name: "description",
        content:
          "Fachwerksanierung mit Schadensdiagnose, materialtreuer Instandsetzung und Denkmalschutz-Abstimmung. Historisches Fachwerk fachgerecht erhalten. E. Scharpf Esslingen.",
      },
    ],
  }),
  component: Fachwerksanierung,
});

function Fachwerksanierung() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/fachwerkhaus-band-weiss.png"
        eyebrow="Restaurierung & Sanierung"
        title="Fachwerksanierung – historisches Fachwerk fachgerecht erhalten"
        lead="Fachwerkgebäude erzählen Geschichte – und verlangen ein besonderes Fingerspitzengefühl. Von der Schadensdiagnose bis zur denkmalgerechten Instandsetzung erhalten wir Ihr historisches Fachwerk mit Präzision und Respekt vor dem Original."
        ctaLabel="Projekt Anfragen"
        imageNote="Restauriertes Fachwerk von E. Scharpf"
        imageSrc="/fotos/scharpf_fachwerksanierung.jpg"
      />

      <Section>
        <LeistungBlock
          title="Schadensbilder erkennen und diagnostizieren"
          text="Fachwerkhäuser zeigen im Laufe der Jahrhunderte typische Schadensbilder: Fäulnis an Querbalken, Risse im Gefach und undichte Eindeckungen. Bevor wir Hand anlegen, kennen wir den Zustand Ihres Gebäudes genau. Unsere systematische Schadenskartierung erfasst alle Schäden – von der Fäulnis bis zur statischen Schwäche – und bildet die Basis für einen realistischen Maßnahmenplan."
          ctaLabel="Kostenloses Erstgespräch vereinbaren"
          bullets={[
            "Fäulnis an Querbalken und tragenden Hölzern",
            "Risse und Ausbrüche im Gefach",
            "Undichte Eindeckung und Feuchteschäden",
            "Systematische Schadenskartierung mit Befundbericht",
          ]}
          imageNote="Untersuchung des geschädigten Fachwerks"
          imageSrc="/fotos/scharpf_fachwerksanierung_01.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Materialtreue Instandsetzung"
          text="Wir arbeiten ausschließlich mit historisch korrekten Materialien und Techniken. Geschädigte Balken erneuern wir in Eiche, das Gefach ergänzen wir fachgerecht und undichte Dächer decken wir in historisch korrekter Schieferdeckung neu ein. So bleibt der historische Charakter Ihres Fachwerkhauses erhalten – bei gleichzeitig dauerhaft gesunder Bausubstanz."
          ctaLabel="Jetzt Beratungsgespräch vereinbaren"
          bullets={[
            "Erneuerung geschädigter Balken in Eiche",
            "Fachgerechte Ergänzung des Gefachs",
            "Historisch korrekte Schieferdeckung",
            "Materialtreuer Einsatz historischer Baustoffe",
          ]}
          imageNote="Materialtreue Instandsetzung am historischen Bau"
          imageSrc="/fotos/scharpf_restaurierung_06.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Denkmalschutz-Abstimmung & Dokumentation"
          text="Denkmalgeschützte Fachwerkhäuser erfordern eine enge Abstimmung mit den Behörden. Wir koordinieren die Zusammenarbeit mit dem Landesdenkmalamt und der Unteren Denkmalschutzbehörde in Esslingen und dokumentieren jeden Arbeitsschritt lückenlos. So bleibt der historische Charakter gewahrt – und Sie haben alle Nachweise für Förderanträge und Abnahmen in der Hand."
          ctaLabel="Jetzt Beratungsgespräch vereinbaren"
          bullets={[
            "Abstimmung mit dem Landesdenkmalamt Esslingen",
            "Koordination mit Unterer und Oberer Denkmalschutzbehörde",
            "Lückenlose Baudokumentation für Behörden und Förderanträge",
            "Beratung zu Förderprogrammen für denkmalgeschützte Objekte",
          ]}
          imageNote="Denkmalgerechte Restaurierung durch E. Scharpf"
          imageSrc="/fotos/scharpf_restaurierung_07.jpg"
        />
      </Section>

      <ReferenzTeaser
        title="Referenzen im Bereich Restaurierung & Sanierung"
        intro="Von der mittelalterlichen Fachwerkscheune bis zum gründerzeitlichen Stadthaus: Sehen Sie selbst, was aus einer Zusammenarbeit mit E. Scharpf entstehen kann."
        to="/referenzen"
        imageNotes={[
          "Restauriertes historisches Gebäude, Esslingen",
          "Instandgesetzte historische Bausubstanz",
          "Denkmalgerechtes Restaurierungsdetail",
        ]}
        imageSrcs={[
          "/fotos/scharpf_restaurierung_08.jpg",
          "/fotos/scharpf_restaurierung_09.jpg",
          "/fotos/scharpf_restaurierung_10.jpg",
        ]}
      />

      <CtaBanner illustrationSrc="/illustrationen/fachwerkhaus-weiss.png" title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
