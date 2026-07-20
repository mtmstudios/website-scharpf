import { Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, CtaBanner } from "@/components/sections";

// „Deine Vorteile bei uns" – Paare wörtlich aus dem XD, gelten für alle Stellen.
export const JOB_VORTEILE = [
  {
    title: "Freiraum & Flexibilität",
    text: "4,5-Tage-Woche für mehr Freizeit.",
  },
  {
    title: "Entwicklung & Sicherheit",
    text: "Weiterbildungsmöglichkeiten & betriebliche Altersvorsorge.",
  },
  {
    title: "Spaß & Zusammenhalt",
    text: "Firmenevents, Ausflüge, Grillabende.",
  },
  {
    title: "Vorteile & Top-Ausstattung",
    text: "Jobrad-Leasing, Einkaufsvorteile & modernste Werkzeuge.",
  },
] as const;

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-primary"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Layout einer Job-Landingpage (B612 Keyword-Mapping 36–40): Du-Form,
 * Stellenbeschreibung, Vorteile, Anforderungen, Bewerbungs-CTA.
 */
export function JobSeite({
  titel,
  lead,
  beschreibung,
  anforderungen,
  imageSrc,
  imageNote,
}: {
  titel: string;
  lead: string;
  beschreibung: string[];
  anforderungen: string[];
  imageSrc?: string;
  imageNote: string;
}) {
  return (
    <div>
      <Section>
        <Link
          to="/karriere"
          className="text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          ← Alle Stellen
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {titel}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
        <div className="mt-8">
          <CtaButton to="/kontakt">Jetzt bewerben</CtaButton>
        </div>
        <div className="mt-12">
          <PlaceholderImage note={imageNote} src={imageSrc} ratio="wide" />
        </div>
      </Section>

      <Section muted className="pt-0">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Beschreibung deiner Stelle:
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {beschreibung.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Deine Vorteile bei uns
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {JOB_VORTEILE.map((v) => (
            <div key={v.title} className="flex gap-3">
              <Check />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1 text-base text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Das musst du mitbringen:
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {anforderungen.map((a) => (
            <li key={a} className="flex gap-3 text-base text-foreground/90">
              <Check />
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaButton to="/kontakt">Jetzt bewerben</CtaButton>
        </div>
      </Section>

      <CtaBanner
        title="Klingt nach dir?"
        text="Dann schreib uns einfach – formlos per E-Mail oder über das Formular. Wir melden uns schnell."
        ctaLabel="Jetzt bewerben"
      />
    </div>
  );
}
