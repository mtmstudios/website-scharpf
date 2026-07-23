import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  LeistungBlock,
  CtaBanner,
} from "@/components/sections";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/services/ladekran")({
  head: () => ({
    meta: [
      { title: "Ladekran mieten Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Ladekran mieten im Raum Esslingen und Stuttgart: mit Fahrer und Einweisung, auch für enge Baustellen und Innenstadtlagen. Jetzt anfragen.",
      },
    ],
  }),
  component: Ladekran,
});

function Ladekran() {
  return (
    <div>
      <PageHero
        illustrationSrc="/illustrationen/carport-weiss.png"
        eyebrow="Service & Sonstige Leistungen"
        title="Ladekran mieten – präzise Hebekraft für Ihre Baustelle"
        lead="Für Projekte, bei denen schwere Lasten präzise positioniert werden müssen, steht unser Ladekran zur Verfügung – für eigene Baustellen und als Dienstleistung für externe Partner."
        ctaLabel="Ladekran anfragen"
        imageNote="Ladekran von E. Scharpf im Einsatz"
        imageSrc="/fotos/scharpf_ladekran.jpg"
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: "Service & Sonstige Leistungen", to: "/services" },
          { label: "Ladekran" },
        ]}
      />


      <Section>
        <LeistungBlock
          title="Einsatzbereiche & Konditionen"
          text="Unser Ladekran hebt Dachelemente, Holzkonstruktionen und Materiallieferungen sicher an ihren Platz – auch dort, wo wenig Raum ist. Die Buchung erfolgt unkompliziert mit Fahrer und Einweisung."
          ctaLabel="Ladekran anfragen"
          bullets={[
            "Ladekran für Dacharbeiten, Holzkonstruktionen und Materiallieferungen",
            "Einsatz auf engen Baustellen und in Innenstadtlagen",
            "Buchung mit Fahrer und Einweisung",
            "Anfrage direkt über Kontaktformular oder Telefon",
          ]}
          imageNote="Ladekran beim Heben von Bauteilen"
          imageSrc="/fotos/scharpf_Transporter.jpg"
        />
        <p className="mt-8 text-base text-muted-foreground">
          Direkt anfragen: Telefon{" "}
          <a
            href={CONTACT.phoneHref}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT.phone}
          </a>
        </p>
      </Section>

      <CtaBanner title="Ladekran für Ihr Projekt anfragen?" ctaLabel="Jetzt anfragen" />
    </div>
  );
}
