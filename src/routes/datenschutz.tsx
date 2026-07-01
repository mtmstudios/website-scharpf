import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der E. Scharpf GmbH, Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
    ],
  }),
  component: Datenschutz,
});

function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-primary/50 bg-secondary p-6 text-sm leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

function Datenschutz() {
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 max-w-3xl space-y-8">
          <PlaceholderNotice>
            <span className="font-semibold text-primary">
              Platzhalter – der finale Datenschutztext muss noch vom Kunden /
              einem Anwalt bereitgestellt werden.
            </span>
          </PlaceholderNotice>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Verantwortlicher
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className="mt-4 not-italic text-base leading-relaxed text-foreground/90">
              {CONTACT.company}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
              <br />
              Telefon:{" "}
              <a
                href={CONTACT.phoneHref}
                className="text-primary hover:underline"
              >
                {CONTACT.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={CONTACT.emailHref}
                className="text-primary hover:underline"
              >
                {CONTACT.email}
              </a>
            </address>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Erhebung personenbezogener Daten
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Platzhalter: Hier wird erläutert, welche personenbezogenen Daten
              beim Besuch dieser Website erhoben werden und zu welchem Zweck.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Kontaktformular
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Platzhalter: Hier wird beschrieben, wie mit den über das
              Kontaktformular übermittelten Daten umgegangen wird.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Cookies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Platzhalter: Hier werden Art, Zweck und Speicherdauer der
              eingesetzten Cookies erläutert.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ihre Rechte
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Platzhalter: Hier werden Ihre Rechte auf Auskunft, Berichtigung,
              Löschung und Widerspruch nach DSGVO aufgeführt.
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
