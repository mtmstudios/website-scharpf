import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section } from "@/components/sections";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – E. Scharpf GmbH | Holzbau Esslingen" },
      {
        name: "description",
        content:
          "Restaurierung, Holzbau, Dach, Fassade und Service: Das vollständige Leistungsspektrum von E. Scharpf im Großraum Esslingen und Stuttgart.",
      },
    ],
  }),
  component: Leistungen,
});

// Kachel-Reihenfolge exakt wie XD-Hero (Leistungen auf einen Blick).
const KATEGORIEN = [
  {
    title: "Restaurierung & Sanierung",
    to: "/restaurierung",
    bild: "/fotos/scharpf_restaurierung_05.jpg",
  },
  {
    title: "Holzbau & Konstruktion",
    to: "/holzbau",
    bild: "/fotos/scharpf_neubau.jpg",
  },
  { title: "Dach", to: "/dach", bild: "/fotos/scharpf_dachdecken.jpg" },
  {
    title: "Fassade & Außenbereiche",
    to: "/fassade",
    bild: "/fotos/scharpf_fassade.jpg",
  },
  {
    title: "Service & Sonstige Leistungen",
    to: "/services",
    bild: "/fotos/scharpf_ladekran.jpg",
  },
] as const;

// FAQ-Fragen wörtlich aus dem XD ("Haben sie Fragen zu unseren Leistungen").
const FRAGEN = [
  { q: "Mehr zu E.Scharpf", to: "/ratgeber" },
  { q: "Infos zum Material", to: "/ratgeber" },
  { q: "Macht E.Scharpf auch Neubau", to: "/ratgeber" },
  { q: "Bieten Sie Aufstockungen an?", to: "/ratgeber" },
  { q: "Welche Leistungen bietet E.scharpf an?", to: "/ratgeber" },
  { q: "Macht E.Scharpf energetische Dachsanierungen?", to: "/ratgeber" },
] as const;

function Leistungen() {
  return (
    <div>
      {/* Leistungen auf einen Blick – 5 Kategorie-Kacheln */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {KATEGORIEN.map((k) => (
            <Link key={k.to} to={k.to} className="group flex flex-col">
              <PlaceholderImage
                note={k.title}
                src={k.bild}
                ratio="landscape"
                className="transition-transform group-hover:-translate-y-1"
              />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground group-hover:text-primary">
                {k.title}
              </h2>
            </Link>
          ))}
        </div>
      </Section>

      {/* Haben sie Fragen zu unseren Leistungen */}
      <Section muted>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-foreground sm:text-4xl">
          Haben sie Fragen zu unseren Leistungen
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FRAGEN.map((f) => (
            <Link
              key={f.q}
              to={f.to}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {f.q}
            </Link>
          ))}
        </div>
      </Section>

      {/* Sprechen Sie uns an */}
      <Section>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-foreground sm:text-4xl">
          Sprechen Sie uns an, wir helfen Ihnen gerne weiter!
        </h2>
        <div className="mt-8">
          <CtaButton to="/kontakt">Kontakt</CtaButton>
        </div>
      </Section>
    </div>
  );
}
