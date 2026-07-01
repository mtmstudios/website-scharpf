import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Impressum der E. Scharpf GmbH, Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
    ],
  }),
  component: Impressum,
});

function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-primary/50 bg-secondary p-6 text-sm leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

function Impressum() {
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-8 max-w-3xl space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="mt-4 not-italic text-base leading-relaxed text-foreground/90">
              {CONTACT.company}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </address>
            <dl className="mt-6 space-y-2 text-base leading-relaxed">
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Telefon:</dt>
                <dd>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-primary hover:underline"
                  >
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Fax:</dt>
                <dd className="text-muted-foreground">{CONTACT.fax}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">E-Mail:</dt>
                <dd>
                  <a
                    href={CONTACT.emailHref}
                    className="text-primary hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Weitere Pflichtangaben
            </h2>
            <PlaceholderNotice>
              <span className="font-semibold text-primary">
                Platzhalter – die folgenden Angaben müssen noch vom Kunden
                ergänzt und juristisch geprüft werden.
              </span>
            </PlaceholderNotice>
            <dl className="mt-6 space-y-2 text-base leading-relaxed">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Geschäftsführer:
                </dt>
                <dd className="text-muted-foreground">[noch zu ergänzen]</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Registergericht / HRB:
                </dt>
                <dd className="text-muted-foreground">[noch zu ergänzen]</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">USt-IdNr.:</dt>
                <dd className="text-muted-foreground">[noch zu ergänzen]</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Berufshaftpflicht:
                </dt>
                <dd className="text-muted-foreground">[noch zu ergänzen]</dd>
              </div>
            </dl>
          </section>
        </div>
      </Section>
    </div>
  );
}
