import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Allgemeine Geschäftsbedingungen der E. Scharpf GmbH, Esslingen am Neckar.",
      },
    ],
  }),
  component: Agb,
});

function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-primary/50 bg-secondary p-6 text-sm leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

const PARAGRAPHEN = [
  {
    title: "§1 Geltungsbereich",
    text: "Platzhalter: Hier wird geregelt, für welche Verträge und Leistungen diese Allgemeinen Geschäftsbedingungen gelten.",
  },
  {
    title: "§2 Angebot und Vertragsschluss",
    text: "Platzhalter: Hier wird beschrieben, wie Angebote zustande kommen und wann ein Vertrag als geschlossen gilt.",
  },
  {
    title: "§3 Leistungen",
    text: "Platzhalter: Hier wird der Umfang der von E. Scharpf erbrachten Leistungen näher bestimmt.",
  },
  {
    title: "§4 Preise und Zahlung",
    text: "Platzhalter: Hier werden Preisgestaltung, Zahlungsbedingungen und Fälligkeiten festgelegt.",
  },
  {
    title: "§5 Gewährleistung",
    text: "Platzhalter: Hier werden die gesetzlichen und vertraglichen Gewährleistungsregelungen erläutert.",
  },
] as const;

function Agb() {
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="mt-8 max-w-3xl space-y-8">
          <PlaceholderNotice>
            <span className="font-semibold text-primary">
              Platzhalter – die finalen AGB müssen noch erstellt / juristisch
              geprüft werden.
            </span>
          </PlaceholderNotice>

          {PARAGRAPHEN.map((p) => (
            <section key={p.title}>
              <h2 className="font-display text-2xl font-bold text-foreground">
                {p.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </section>
          ))}
        </div>
      </Section>
    </div>
  );
}
