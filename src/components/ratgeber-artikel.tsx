import { Link } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CtaBanner } from "@/components/sections";

/**
 * Layout einer Ratgeber-Artikelseite: Zurück-Link, H1, Teaser, Artikelbild,
 * Fließtext (als children mit h2/p/ul) und Abschluss-CTA.
 */
export function RatgeberArtikel({
  titel,
  teaser,
  imageSrc,
  imageNote,
  ctaTitle = "Haben Sie eine konkrete Frage? Wir beraten Sie kostenlos.",
  ctaLabel = "Beratung anfordern",
  children,
}: {
  titel: string;
  teaser: string;
  imageSrc?: string;
  imageNote: string;
  ctaTitle?: string;
  ctaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Section>
        <Link
          to="/ratgeber"
          className="text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          ← Zurück zum Ratgeber
        </Link>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          {titel}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {teaser}
        </p>
        <div className="mt-10">
          <PlaceholderImage note={imageNote} src={imageSrc} ratio="wide" />
        </div>
        {/* Artikel-Fließtext */}
        <div className="prose-scharpf mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-foreground">
          {children}
        </div>
      </Section>

      <CtaBanner title={ctaTitle} ctaLabel={ctaLabel} />
    </div>
  );
}
