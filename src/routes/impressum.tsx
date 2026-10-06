import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Section } from "@/components/sections";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Impressum der E. Scharpf Holzbau GmbH, Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
      { property: "og:title", content: "Impressum – E. Scharpf GmbH" },
      {
        property: "og:description",
        content: "Impressum der E. Scharpf Holzbau GmbH aus Esslingen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Impressum,
});

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

const link = "text-primary hover:underline";

function Impressum() {
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-8 max-w-3xl space-y-8">
          <Block title="Angaben gemäß § 5 TMG">
            <address className="not-italic">
              E. Scharpf Holzbau GmbH
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </address>
            <p className="mt-4">
              Handelsregister: HRB 211043
              <br />
              Registergericht: Stuttgart
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Vertreten durch:</strong>
              <br />
              Eberhard Ernst Scharpf
              <br />
              Eberhard Emil Hans Scharpf
            </p>
          </Block>

          <Block title="Kontakt">
            Telefon: <a href={CONTACT.phoneHref} className={link}>{CONTACT.phone}</a>
            <br />
            Fax: {CONTACT.fax}
            <br />
            E-Mail: <a href={CONTACT.emailHref} className={link}>{CONTACT.email}</a>
          </Block>

          <Block title="Umsatzsteuer-ID">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE145344779
          </Block>

          <Block title="Aufsichtsbehörde">
            Handwerkskammer Stuttgart
            <br />
            Heilbronner Str. 43
            <br />
            70191 Stuttgart
            <br />
            <a href="https://www.hwk-stuttgart.de/" target="_blank" rel="noopener noreferrer" className={link}>
              www.hwk-stuttgart.de
            </a>
          </Block>

          <Block title="Angaben zur Berufshaftpflichtversicherung">
            <strong className="text-foreground">Name und Sitz des Versicherers:</strong>
            <br />
            Allianz Deutschland AG
            <br />
            Königinstraße 28
            <br />
            80802 München
            <p className="mt-4">
              <strong className="text-foreground">Geltungsraum der Versicherung:</strong>
              <br />
              Deutschland
            </p>
          </Block>

          <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            Wir nehmen an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teil. Zuständig ist die
            Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
            Straßburger Straße 8, 77694 Kehl am Rhein (
            <a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className={link}>
              www.verbraucher-schlichter.de
            </a>
            ).
          </Block>
        </div>
      </Section>
    </div>
  );
}
