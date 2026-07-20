import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  CtaBanner,
} from "@/components/sections";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/services/showroom")({
  head: () => ({
    meta: [
      { title: "Dachfenster Ausstellung Esslingen – 330 qm Showroom | E. Scharpf" },
      {
        name: "description",
        content:
          "330 qm Showroom in Esslingen: Dachfenster, Fassadenmuster, Terrassenholz und Dämmmaterialien zum Anfassen – mit persönlicher Beratung.",
      },
    ],
  }),
  component: Showroom,
});

function Showroom() {
  return (
    <div>
      <PageHero
        eyebrow="Service & Sonstige Leistungen"
        title="Ausstellung & Showroom – 330 qm Holzkompetenz"
        lead="Unser 330 qm großer Showroom in Esslingen zeigt Ihnen auf Augenhöhe, was modernes Holzbauen bedeutet: Fassadenmuster, Terrassenholz, Dachfenster-Exponate, Dämmmaterialien und fertige Referenzobjekte."
        ctaLabel="Termin vereinbaren"
        imageNote="Showroom mit Dachfenster-Ausstellung"
        imageSrc="/fotos/scharpf_ausstellung.jpg"
      />

      <Section>
        <LeistungBlock
          title="Materialien und Lösungen zum Anfassen"
          text="In der Ausstellung können Sie zahlreiche Dachfenster und technische Lösungen rund um Dach und Holzbau besichtigen, Materialien auswählen und Mechaniken selbst ausprobieren. Kommen Sie vorbei – wir beraten Sie persönlich und mit viel Zeit."
          ctaLabel="Termin vereinbaren"
          bullets={[
            "Fassadenmuster: Rhombus, Boden-Deckel, Stülpschalung in verschiedenen Holzarten",
            "Terrassenbelag-Exponate: Douglasie, Lärche, Bangkirai, WPC",
            "Dachfenster-Ausstellung mit VELUX-Partner-Exponaten",
            "Dämmmaterial-Anschauung: Holzfaser, Mineralwolle, Aufdachdämmung",
            "Persönliche Beratung – ohne Voranmeldung oder nach Terminvereinbarung",
          ]}
          imageNote="Ausstellungsraum mit Materialmustern"
          imageSrc="/fotos/scharpf_velux_Integra.jpg"
        />
        <div className="mt-10 rounded-2xl border border-border bg-secondary p-6 text-base text-muted-foreground">
          <p className="font-semibold text-foreground">So finden Sie uns</p>
          <p className="mt-2">
            {CONTACT.street}, {CONTACT.city} · Tel.{" "}
            <a
              href={CONTACT.phoneHref}
              className="font-semibold text-primary hover:underline"
            >
              {CONTACT.phone}
            </a>
          </p>
          <p className="mt-1">Öffnungszeiten: {CONTACT.hours} sowie nach Vereinbarung</p>
        </div>
      </Section>

      <CtaBanner
        title="Überzeugen Sie sich selbst – im Showroom."
        text="330 qm Holz zum Anfassen: Kommen Sie vorbei und lassen Sie sich inspirieren."
        ctaLabel="Termin vereinbaren"
      />
    </div>
  );
}
