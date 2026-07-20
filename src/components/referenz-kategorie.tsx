import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CtaBanner } from "@/components/sections";
import { REFERENZ_KATEGORIEN } from "@/lib/site";

export type ReferenzProjekt = {
  titel: string;
  tag: string;
  text: string;
  imageSrc?: string;
  imageNote: string;
};

/**
 * Layout einer Referenz-Kategorieseite (B612-Konzept 4.9, Basis XD-Mockup):
 * Kategorie-Subnavigation + H1 + Einleitung, dann Projekteintrag-Kacheln
 * (Foto links, Text rechts), Abschluss mit CTA-Banner.
 */
export function ReferenzKategorieSeite({
  aktiv,
  titel,
  einleitung,
  projekte,
  illustrationSrc,
}: {
  aktiv: string;
  titel: string;
  einleitung: string;
  projekte: ReferenzProjekt[];
  illustrationSrc?: string;
}) {
  return (
    <div>
      <Section>
        <Link
          to="/referenzen"
          className="text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          ← Alle Referenzen
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {titel}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {einleitung}
        </p>

        {/* Kategorie-Subnavigation */}
        <div className="mt-8 flex flex-wrap gap-3">
          {REFERENZ_KATEGORIEN.map((k) => (
            <Link
              key={k.to}
              to={k.to}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                k.to === aktiv
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
              )}
            >
              {k.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* Projekteinträge */}
      {projekte.map((p, i) => (
        <Section key={p.titel} muted={i % 2 === 0} className="py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PlaceholderImage
              note={p.imageNote}
              src={p.imageSrc}
              ratio="landscape"
              className={cn(i % 2 === 1 && "lg:order-2")}
            />
            <div className={cn(i % 2 === 1 && "lg:order-1")}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {p.tag}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {p.titel}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p.text}
              </p>
              <div className="mt-8">
                <CtaButton to="/kontakt">Ähnliches Projekt anfragen</CtaButton>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <CtaBanner
        title="Haben Sie Fragen zu einer Referenz?"
        illustrationSrc={illustrationSrc}
      />
    </div>
  );
}
