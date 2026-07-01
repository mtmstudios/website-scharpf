import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections";
import { CtaButton } from "@/components/cta-button";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/kontakt/danke")({
  head: () => ({
    meta: [
      { title: "Vielen Dank – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      },
    ],
  }),
  component: Danke,
});

function Danke() {
  return (
    <Section>
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Vielen Dank für Ihre Nachricht!
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden
          bei Ihnen. Bei dringenden Anliegen erreichen Sie uns direkt unter{" "}
          <a
            href={CONTACT.phoneHref}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT.phone}
          </a>
          .
        </p>

        <div className="mt-10">
          <CtaButton to="/">Zurück zur Startseite</CtaButton>
        </div>
      </div>
    </Section>
  );
}
