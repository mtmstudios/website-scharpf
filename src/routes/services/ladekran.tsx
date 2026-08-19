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
        imageNote="Unser Ladekran: Mercedes Actros mit FASSI-Ladekran"
        imageSrc="/fotos/scharpf_ladekran_neu.jpg"
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
          imageNote="Ladekran hebt ein vorgefertigtes Dachelement über das Haus"
          imageSrc="/fotos/scharpf_ladekran_einsatz.jpg"
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

      {/* Traglastdiagramme – FASSI F420BXP.25, von der alten Seite übernommen */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Traglastdiagramme
        </h2>
        <span className="mt-4 block h-1 w-24 rounded bg-primary" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Unser FASSI F420BXP.25 hebt bis zu 12.000 kg bei 3,00 m Ausladung. Mit
          der Flyjib-Verlängerung reicht er bis 27,00 m. Ob Ihr Bauteil an seinen
          Platz kommt, lesen Sie direkt aus den Diagrammen ab – im Zweifel rechnen
          wir es vorab für Sie durch.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {[
            {
              titel: "Grundgerät",
              hinweis: "12.000 kg bei 3,00 m · 1.185 kg bei 20,75 m",
              src: "/fotos/scharpf_ladekran_traglastdiagramm.jpg",
              alt: "Traglastdiagramm FASSI F420BXP.25 – Grundgerät",
            },
            {
              titel: "Mit Flyjib-Verlängerung",
              hinweis: "3.000 kg bei 9,90 m · 380 kg bei 27,00 m",
              src: "/fotos/scharpf_ladekran_traglastdiagramm_flyjib.jpg",
              alt: "Traglastdiagramm FASSI F420BXP.25 mit Flyjib-Verlängerung L324",
            },
          ].map((d) => (
            <figure
              key={d.src}
              className="overflow-hidden rounded-2xl border border-border bg-background"
            >
              <a href={d.src} target="_blank" rel="noopener noreferrer">
                <img
                  src={d.src}
                  alt={d.alt}
                  loading="lazy"
                  className="w-full bg-white object-contain transition-opacity hover:opacity-90"
                />
              </a>
              <figcaption className="border-t border-border px-5 py-4">
                <span className="font-display text-lg font-bold text-foreground">
                  {d.titel}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {d.hinweis} · zum Vergrößern anklicken
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBanner title="Ladekran für Ihr Projekt anfragen?" ctaLabel="Jetzt anfragen" />
    </div>
  );
}
