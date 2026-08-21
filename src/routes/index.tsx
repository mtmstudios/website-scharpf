import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { TerminButtons } from "@/components/termin-buttons";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, ValueBand } from "@/components/sections";
import { LeistungenHaus } from "@/components/leistungen-haus";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { GOOGLE_BEWERTUNGEN } from "@/lib/site";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import restaurierungImage from "@/assets/scharpf_restaurierung_12.jpg.asset.json";
import fachwerkhausAsset from "@/assets/fachwerkhaus.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E. Scharpf GmbH – Holzbau & Restaurierung Esslingen" },
      {
        name: "description",
        content:
          "Zimmerer & Dachdecker aus Esslingen. Restaurierung, Holzbau, Dach und Fassade – zuverlässig, nachhaltig, seit über 80 Jahren. Jetzt Beratung anfordern.",
      },
    ],
  }),
  component: Index,
});

// Werte-Wörter exakt wie XD (grünes Band): Qualität · Innovation · Erfahrung · Lösungsorientiert
const VALUES = [
  { title: "Qualität", text: "Ausführung nach höchsten Maßstäben" },
  { title: "Innovation", text: "Modernste Technik trifft traditionelles Handwerk" },
  { title: "Erfahrung", text: "Über 80 Jahre Expertise im Holzbau" },
  { title: "Lösungsorientiert", text: "Wir finden den Weg, auch bei komplexen Projekten" },
];

// Kundenstimmen – Zitate wörtlich aus dem XD (Startseite).
const KUNDENSTIMMEN = [
  {
    zitat:
      "„Sehr geehrter Herr Scharpf … wir fanden die Zusammenarbeit mit Ihnen sehr gut und Sie haben uns gut beraten. Dies haben wir auch mehrfach gegenüber unserem Bauleiter und Roto erwähnt.“",
    quelle:
      "Bauvorhaben: Roto Dachfenster und Zubehör 2015 – Bauherrschaft Fam. Bosselmann aus Sillenbuch",
  },
  {
    zitat:
      "„Lob und Dank an Ihre Zimmerer, die die Dachfenster eingebaut haben. Es wurde sehr sauber gearbeitet, man hat nicht gesehen, dass Handwerker da waren.“",
    quelle: "Bauvorhaben: Dachfenster Fam. Seeker in Esslingen",
  },
  {
    zitat:
      "„Top Handwerker! Sehr gute Betreuung und Top Qualität. Scharpf Holzbau hat meine Terrasse renoviert und ist super auf meine Wünsche eingegangen. Sie konnten mich bei jeder Fragestellung sehr gut beraten. Die Terrasse sieht hervorragend aus und die Handwerker waren immer nett und kompetent. Wirklich zu empfehlen!“",
    quelle: "Niklas Schwarz",
  },
];

// Kundenstimmen + Google-Bewertungen zusammengefasst für das Karussell.
const TESTIMONIALS = [
  ...GOOGLE_BEWERTUNGEN.map((b) => ({ zitat: b.zitat, quelle: b.name })),
  ...KUNDENSTIMMEN.map((k) => ({ zitat: k.zitat, quelle: k.quelle })),
];

function Index() {
  const heroCtaRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Hero – Video im Hintergrund, Text darüber */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Hintergrund-Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fotos/scharpf_dachstuhl.jpg"
          aria-label="E. Scharpf – Holzbau &amp; Restaurierung"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        {/* Abdunkelungs-Overlay für Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/40 to-black/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
        {/* Inhalt */}
        <div className="relative z-10 mx-auto flex min-h-[calc((100vw-2.5rem)*0.75)] max-w-seite flex-col justify-center px-5 py-10 lg:min-h-[calc((min(100vw,1600px)-8rem)/2*0.75)] lg:px-8 lg:py-10">
          <h1 className="max-w-4xl font-display text-[0.9109rem] font-bold leading-[1.1] text-white sm:text-[1.2146rem] lg:text-[1.5181rem]">
            Benötigen Sie eine Restaurierung, Holzbauleistungen oder
            Dachsanierung?
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
            Wir planen und bauen Ihr Projekt – zuverlässig &amp; nachhaltig.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div ref={heroCtaRef}>
              <CtaButton>Kostenlose Beratung Anfordern</CtaButton>
            </div>
            <TerminButtons />
            <Link
              to="/ratgeber"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20"
            >
              Ratgeber
            </Link>
          </div>
        </div>
      </section>

      {/* Kurze Vorstellung des Unternehmens */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Meisterbetrieb aus Esslingen seit über 80 Jahren
            </h2>
            <span className="mt-4 block h-1 w-24 rounded bg-primary" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wir sind ein Familienbetrieb in der dritten Generation. Mit viel
              Erfahrung und klarem Fokus auf hochwertige und innovative
              Zimmerarbeiten. Wir sind bekannt für versiertes Handwerk, moderne
              Fertigung und termingerechte Ausführung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton to="/ueber-uns">Mehr Lesen</CtaButton>
              <CtaButton to="/ratgeber">Ratgeber</CtaButton>
            </div>
          </div>
          <PlaceholderImage
            note="Historisches Gebäude in Esslingen – Referenz für denkmalgerechte Restaurierung"
            src={restaurierungImage.url}
            ratio="landscape"
          />
        </div>
      </Section>

      {/* Unsere Leistungen – interaktives 3D-Musterhaus: jede Leistung ist
          mit dem passenden Gebäudeteil verknüpft (Kamera-Zoom bei Klick). */}
      <LeistungenHaus />

      {/* Werte-Band (grün) */}
      <ValueBand values={VALUES} />

      {/* Kundenstimmen & Google-Rezensionen – kombiniertes Karussell nach dem Holz-Banner */}
      <section className="kundenstimmen-bg relative overflow-hidden bg-secondary py-11 lg:py-[4.125rem]">
        <style>{`
          .kundenstimmen-bg {
            background-image: url(${fachwerkhausAsset.url});
            background-repeat: no-repeat;
            background-position: left center;
            background-size: auto 140%;
          }
          @media (min-width: 640px) {
            .kundenstimmen-bg { background-size: auto 170%; }
          }
          @media (min-width: 768px) {
            .kundenstimmen-bg { background-size: auto 210%; }
          }
          @media (min-width: 1024px) {
            .kundenstimmen-bg { background-size: auto 260%; }
          }
          @media (min-width: 1280px) {
            .kundenstimmen-bg { background-size: auto 330%; }
          }
        `}</style>
        <div className="relative mx-auto max-w-seite px-5 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Erfahrungen aus Google-Rezensionen und persönlichen Kundenstimmen.
          </p>
          <div className="mt-10">
            <TestimonialCarousel items={TESTIMONIALS} />
          </div>
        </div>
      </section>
    </div>
  );
}
