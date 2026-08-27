import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections";
import { CONTACT, RECHTLICHES } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – E. Scharpf Holzbau GmbH" },
      {
        name: "description",
        content:
          "Impressum der E. Scharpf Holzbau GmbH, Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Impressum,
});

function Block({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground">
        {titel}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Impressum() {
  const r = RECHTLICHES;
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-8 max-w-3xl space-y-10">
          <Block titel="Angaben gemäß § 5 DDG">
            <address className="not-italic text-foreground/90">
              {r.legalName}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </address>
            <dl className="mt-6 space-y-2">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Vertreten durch:
                </dt>
                <dd>{r.geschaeftsfuehrer.join(", ")}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Handelsregister:
                </dt>
                <dd>{r.handelsregister}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">
                  Registergericht:
                </dt>
                <dd>{r.registergericht}</dd>
              </div>
            </dl>
          </Block>

          <Block titel="Kontakt">
            <dl className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">Telefon:</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="text-primary hover:underline">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">Fax:</dt>
                <dd>{CONTACT.fax}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">E-Mail:</dt>
                <dd>
                  <a href={CONTACT.emailHref} className="text-primary hover:underline">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Block>

          <Block titel="Umsatzsteuer-Identifikationsnummer">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              <span className="text-foreground">{r.ustId}</span>
            </p>
          </Block>

          <Block titel="Aufsichtsbehörde / Kammer">
            <address className="not-italic">
              {r.kammer.name}
              <br />
              {r.kammer.strasse}
              <br />
              {r.kammer.ort}
              <br />
              <a
                href={r.kammer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {r.kammer.url}
              </a>
            </address>
            <p className="mt-4">
              Es gelten die Handwerksordnung (HwO) und die Regelungen der
              Handwerkskammer Region Stuttgart, einsehbar unter der oben
              genannten Adresse.
            </p>
          </Block>

          <Block titel="Angaben zur Berufshaftpflichtversicherung">
            <dl className="space-y-2">
              <div>
                <dt className="font-semibold text-foreground">
                  Name und Sitz des Versicherers:
                </dt>
                <dd className="mt-1">
                  {r.haftpflicht.versicherer}
                  <br />
                  {r.haftpflicht.strasse}
                  <br />
                  {r.haftpflicht.ort}
                </dd>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <dt className="font-semibold text-foreground">
                  Geltungsraum der Versicherung:
                </dt>
                <dd>{r.haftpflicht.geltungsraum}</dd>
              </div>
            </dl>
          </Block>

          <Block titel="Redaktionell verantwortlich (§ 18 Abs. 2 MStV)">
            <address className="not-italic">
              {r.geschaeftsfuehrer[0]}
              <br />
              {r.legalName}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </address>
          </Block>

          <Block titel="Verbraucherstreitbeilegung">
            <p>
              Wir nehmen an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teil. Zuständig ist die{" "}
              {r.schlichtungsstelle.name}, {r.schlichtungsstelle.strasse},{" "}
              {r.schlichtungsstelle.ort} (
              <a
                href={r.schlichtungsstelle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {r.schlichtungsstelle.url.replace("https://", "")}
              </a>
              ).
            </p>
          </Block>

          <Block titel="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </p>
          </Block>

          <Block titel="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Block>

          <Block titel="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </Block>
        </div>
      </Section>
    </div>
  );
}
