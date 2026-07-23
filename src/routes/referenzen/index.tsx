import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CategoryBar } from "@/components/sections";
import { GOOGLE_BEWERTUNGEN, REFERENZ_KATEGORIEN } from "@/lib/site";

export const Route = createFileRoute("/referenzen/")({
  head: () => ({
    meta: [
      { title: "Referenzen – Holzbau & Restaurierung | E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Abgeschlossene Projekte im Großraum Esslingen und Stuttgart: Restaurierungen, Dachsanierungen, Aufstockungen und mehr. Jetzt Projekte ansehen.",
      },
    ],
  }),
  component: Referenzen,
});

// Google-Bewertungskarten – fünf Sterne passend zur 4,8-Bewertung.
function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// Repräsentatives Foto je Referenzkategorie.
const KATEGORIE_BILD: Record<string, string> = {
  "/referenzen/restaurierung": "/fotos/scharpf_restaurierung_01.jpg",
  "/referenzen/holzbau": "/fotos/scharpf_aufstockung_02.jpg",
  "/referenzen/dach": "/fotos/scharpf_dachsanierung.jpg",
  "/referenzen/fassade": "/fotos/scharpf_fassade_03.jpg",
  "/referenzen/services": "/fotos/scharpf_ladekran.jpg",
};

function Referenzen() {
  return (
    <div>
      <CategoryBar title="Referenzen" color="#8F2B2A" />

      {/* Titel */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          Referenzen
        </h1>
      </Section>

      {/* Kategorie-Kacheln (2×2 im XD) */}
      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {REFERENZ_KATEGORIEN.map((k) => (
            <Link key={k.to} to={k.to} className="group flex flex-col">
              <PlaceholderImage
                note={`Referenzen: ${k.title}`}
                src={KATEGORIE_BILD[k.to]}
                ratio="landscape"
                className="transition-transform group-hover:-translate-y-1"
              />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground group-hover:text-primary">
                {k.title}
              </h2>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CtaButton to="/kontakt">Kostenlose Projektberatung Anfordern</CtaButton>
        </div>
      </Section>

      {/* Kennzahlen + Google-Bewertungen */}
      <Section muted>
        <h2 className="max-w-3xl font-display text-3xl font-bold text-foreground sm:text-4xl">
          120+ Projekte im Raum Esslingen, 4,8 Kundenzufriedenheit
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {GOOGLE_BEWERTUNGEN.map((b) => (
            <figure
              key={b.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Stars />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-card-foreground">
                {b.zitat}
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                {b.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Qualifikationen & Zertifikate */}
      <Section>
        <h2 className="max-w-xl font-display text-3xl font-bold text-foreground sm:text-4xl">
          Qualifikationen & Zertifikate
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Meisterbetrieb, Fachbetrieb für Denkmalpflege und geprüfte
          Qualifikationen im Holzbau: Unsere Zertifikate stehen für versiertes
          Handwerk, moderne Fertigung und termingerechte Ausführung.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <PlaceholderImage
              key={i}
              note={`Zertifikat / Urkunde ${i + 1}`}
              ratio="portrait"
            />
          ))}
        </div>
      </Section>

      {/* Haben Sie Fragen zu einer Referenz? */}
      <Section>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-foreground sm:text-4xl">
          Haben Sie Fragen zu einer Referenz?
        </h2>
        <div className="mt-8">
          <CtaButton to="/kontakt">Kontakt</CtaButton>
        </div>
      </Section>
    </div>
  );
}
