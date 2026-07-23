import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Section({
  children,
  muted = false,
  className,
  id,
}: {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(muted && "bg-secondary", "py-20 lg:py-28", className)}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export type Crumb = { label: string; to?: string };

/**
 * Farbige Kategorie-Leiste am Anfang einer Unterseite. Ersetzt die frühere
 * Holz-Trenner-Leiste. Enthält den Linktree (Breadcrumb) direkt im farbigen
 * Kasten und ersetzt den bisherigen reinen Titeltext.
 */
export function CategoryBar({
  title,
  breadcrumbs,
  color,
}: {
  title?: string;
  breadcrumbs?: Crumb[];
  color: string;
}) {
  const items = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : title ? [{ label: title }] : [];
  return (
    <div className="w-full" style={{ backgroundColor: color }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center px-5 lg:h-20 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-black/90 sm:text-base">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="opacity-70"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  )}
                  {isLast || !item.to ? (
                    <span
                      className={cn(
                        "font-display font-bold tracking-tight text-black",
                        isLast && "text-base sm:text-lg"
                      )}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.to}
                      className="font-display font-bold tracking-tight text-black transition-colors hover:underline"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}




/**
 * Split-Hero: links Text + CTA, rechts großes Projektfoto (Platzhalter).
 * `illustrationSrc`: weiße B612-Linien-Illustration, dekorativ auf dem
 * Holz-Trenner platziert.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  ctaLabel,
  ctaTo,
  imageNote,
  imageSrc,
  illustrationSrc,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  ctaLabel?: string;
  ctaTo?: string;
  imageNote: string;
  imageSrc?: string;
  illustrationSrc?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-border bg-background">
      <CategoryBar title={eyebrow || "Leistungen"} color="#2D635C" />
      {breadcrumbs && breadcrumbs.length > 0 && <LinkTree items={breadcrumbs} />}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-14">
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
          {ctaLabel && (
            <div className="mt-8">
              <CtaButton to={ctaTo}>{ctaLabel}</CtaButton>
            </div>
          )}
        </div>
        <PlaceholderImage note={imageNote} src={imageSrc} ratio="landscape" />
      </div>
    </section>
  );
}


export function SectionHeading({
  kicker,
  title,
  intro,
  center = false,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {kicker && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}

/**
 * Content-Block einer Leistungsseite: Titel, Text, optionaler CTA und
 * Aufzählung, daneben ein Bild-Platzhalter. `flip` kehrt die Anordnung um.
 */
export function LeistungBlock({
  title,
  text,
  ctaLabel,
  ctaTo,
  bullets,
  imageNote,
  imageSrc,
  flip = false,
  moreTo,
  moreLabel = "Mehr erfahren →",
}: {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaTo?: string;
  bullets?: string[];
  imageNote: string;
  imageSrc?: string;
  flip?: boolean;
  /** Optionaler sekundärer Link zur vertiefenden Unterseite (interne Verlinkung). */
  moreTo?: string;
  moreLabel?: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(flip && "lg:order-2")}>
        <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {text}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-foreground/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-primary"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {(ctaLabel || moreTo) && (
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {ctaLabel && <CtaButton to={ctaTo}>{ctaLabel}</CtaButton>}
            {moreTo && (
              <Link
                to={moreTo}
                className="text-sm font-semibold text-primary hover:underline"
              >
                {moreLabel}
              </Link>
            )}
          </div>
        )}
      </div>
      <PlaceholderImage
        note={imageNote}
        src={imageSrc}
        ratio="landscape"
        className={cn(flip && "lg:order-1")}
      />
    </div>
  );
}

/**
 * Werte-Banner (Salbei/Teal-Band #32645F) – wie im XD-Entwurf:
 * vier zentrierte Werte-Wörter im 2×2-Raster, abgeschlossen mit orangem Streifen.
 */
import woodTexture from "@/assets/wood-texture.jpg";

export function ValueBand({
  values,
}: {
  values: { title: string; text?: string }[];
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Rustikaler Holzhintergrund */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${woodTexture})` }}
      />
      {/* Dezente Vignette für etwas Tiefe – hell gehalten, damit das
          Fichtenholz hell bleibt und der dunkle Text gut lesbar ist. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.15)_100%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-x-12 gap-y-10 px-8 py-16 text-center sm:grid-cols-2 sm:gap-y-14 sm:py-24 lg:px-8">
        {values.map((v) => (
          <div key={v.title} className="flex flex-col items-center">
            <h3
              className="font-display text-2xl font-bold tracking-wide sm:text-4xl"
              style={{ color: "#1f1105" }}
            >
              {v.title}
            </h3>
            {v.text && (
              <p
                className="mt-3 max-w-xs text-sm font-medium leading-relaxed sm:mt-4 sm:text-base"
                style={{ color: "#3a2817" }}
              >
                {v.text}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="relative h-2 w-full bg-primary" />
    </section>
  );
}

/** Referenzen-Teaser mit 3 Bild-Platzhaltern. */
export function ReferenzTeaser({
  title,
  intro,
  imageNotes,
  imageSrcs,
  to = "/referenzen",
}: {
  title: string;
  intro: string;
  imageNotes: [string, string, string];
  imageSrcs?: [string, string, string];
  to?: string;
}) {
  return (
    <Section muted>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading title={title} intro={intro} />
        <Link
          to={to}
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          Mehr sehen →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {imageNotes.map((note, i) => (
          <PlaceholderImage
            key={i}
            note={note}
            src={imageSrcs?.[i]}
            ratio="landscape"
          />
        ))}
      </div>
    </Section>
  );
}

import { TRUST_SIGNALE } from "@/lib/site";

/**
 * Kompakte Vertrauenssignale (B612-Konzept, Abschnitt 5): erscheinen direkt
 * über CTA-Bannern und Formularen – Icons mit kurzem Label, ohne Ablenkung.
 */
export function TrustRow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
        className,
      )}
    >
      {TRUST_SIGNALE.map((t) => (
        <div
          key={t}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-primary"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Abschluss-CTA-Banner. `tone` = orange (default) oder mint.
 * `illustrationSrc`: weiße Linien-Illustration (B612/Franz Scholz), dekorativ
 * am rechten Rand des Bands – wie im Konzept "dekoratives Detail rechts".
 */
export function CtaBanner({
  title,
  text,
  ctaLabel = "Kontakt",
  ctaTo = "/kontakt",
  tone = "orange",
  trust = true,
  illustrationSrc,
}: {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
  tone?: "orange" | "mint";
  trust?: boolean;
  illustrationSrc?: string;
}) {
  const bg = tone === "orange" ? "bg-primary" : "bg-accent";
  return (
    <>
      {trust && (
        <div className="border-t border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <TrustRow />
          </div>
        </div>
      )}
      <section className={cn(bg, "relative overflow-hidden text-white")}>
        {illustrationSrc && (
          <img
            src={illustrationSrc}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-6 bottom-0 hidden h-[140%] w-auto max-w-none opacity-25 lg:block"
          />
        )}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          {text && (
            <p className="max-w-2xl text-lg leading-relaxed text-white/90">{text}</p>
          )}
          <CtaButton to={ctaTo} variant="outline">
            {ctaLabel}
          </CtaButton>
        </div>
      </section>
    </>
  );
}

/** FAQ-Akkordeon. */
export function FaqSection({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left font-display text-lg font-bold">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
