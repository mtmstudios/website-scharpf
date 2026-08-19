import { CtaButton } from "@/components/cta-button";
import { EXTERNE_LINKS } from "@/lib/site";

/**
 * Terminbuchung über Calendly – zwei feste Termintypen (Wunsch E. Scharpf,
 * Mail vom 19.08.2026). Beschriftungen wörtlich von der alten Startseite
 * holzbau-scharpf.de übernommen.
 *
 * Solange in EXTERNE_LINKS keine URL hinterlegt ist, wird der jeweilige Button
 * bewusst NICHT gerendert – lieber kein Button als ein toter Button.
 */
export const TERMINE = [
  {
    label: "Termin für Dachfenster Beratung in unserer Ausstellung buchen",
    kurzLabel: "Dachfenster-Beratung buchen",
    href: EXTERNE_LINKS.terminDachfensterBeratung,
  },
  {
    label: "Termin für kostenloses Planungsgespräch",
    kurzLabel: "Planungsgespräch buchen",
    href: EXTERNE_LINKS.terminPlanungsgespraech,
  },
] as const;

const AKTIVE_TERMINE = TERMINE.filter((t) => t.href.length > 0);

export function hatTermine() {
  return AKTIVE_TERMINE.length > 0;
}

/**
 * Kompakte Variante für den Hero der Startseite: schlanke Outline-Buttons,
 * die sich neben den Haupt-CTA stellen.
 */
export function TerminButtons({ variant = "outline" }: { variant?: "solid" | "outline" }) {
  if (!hatTermine()) return null;

  return (
    <>
      {AKTIVE_TERMINE.map((termin) => (
        <CtaButton key={termin.href} to={termin.href} variant={variant}>
          {termin.kurzLabel}
        </CtaButton>
      ))}
    </>
  );
}

/**
 * Karten-Variante: steht auf der Kontaktseite rechts neben "Projekt anfragen"
 * für alle, die lieber direkt einen Termin buchen als das Formular auszufüllen.
 */
export function TerminKarte() {
  if (!hatTermine()) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold text-foreground">
        Lieber direkt einen Termin?
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Suchen Sie sich einfach einen freien Termin aus – Sie erhalten die
        Bestätigung sofort per E-Mail.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {AKTIVE_TERMINE.map((termin) => (
          <CtaButton
            key={termin.href}
            to={termin.href}
            variant="solid"
            className="w-full justify-between text-left"
          >
            {termin.label}
          </CtaButton>
        ))}
      </div>
    </div>
  );
}
