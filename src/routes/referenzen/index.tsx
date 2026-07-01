import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  CtaBanner,
} from "@/components/sections";
import { PlaceholderImage } from "@/components/placeholder-image";
import { REFERENZ_KATEGORIEN } from "@/lib/site";

export const Route = createFileRoute("/referenzen/")({
  head: () => ({
    meta: [
      { title: "Referenzen – Holzbau & Restaurierung | E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Abgeschlossene Projekte im Großraum Esslingen und Stuttgart: Restaurierungen, Dachsanierungen, Aufstockungen und mehr. Jetzt Projekte ansehen.",
      },
    ],
  }),
  component: Referenzen,
});

const KATEGORIE_INTROS: Record<string, string> = {
  "/referenzen/restaurierung":
    "Jedes Projekt hat seine eigene Geschichte – und sein eigenes Material. Sehen Sie, wie wir historische Gebäude mit handwerklichem Fingerspitzengefühl und Respekt vor dem Original neu zum Leben erweckt haben.",
  "/referenzen/holzbau":
    "Von der Aufstockung in Esslingen bis zum schlüsselfertigen Holzhaus im Großraum Stuttgart – sehen Sie, was aus unserer Zusammenarbeit entstehen kann.",
  "/referenzen/dach":
    "Von der energetischen Dachsanierung bis zur Gaube mit Blechverkleidung – unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart.",
  "/referenzen/fassade":
    "Holzfassaden, Terrassengestaltungen und Wärmedämm-Verbundsysteme: Arbeiten, die sich durch Qualität und Langlebigkeit auszeichnen.",
  "/referenzen/services":
    "Klempnerarbeiten, Dachdeckerei und Sondertransporte – Leistungen, die zeigen, wie breit unser Spektrum wirklich ist.",
};

const KATEGORIE_BILDNOTIZEN: Record<string, string> = {
  "/referenzen/restaurierung":
    "Referenzkategorie Restaurierung: restauriertes Fachwerkhaus in der Esslinger Altstadt, Gesamtansicht.",
  "/referenzen/holzbau":
    "Referenzkategorie Holzbau: fertig montierte Aufstockung oder schlüsselfertiges Holzhaus im Großraum Stuttgart.",
  "/referenzen/dach":
    "Referenzkategorie Dach: neu eingedecktes Dach mit Gaube und Blechverkleidung, Gesamtansicht.",
  "/referenzen/fassade":
    "Referenzkategorie Fassade: fertige vorgehängte Holzfassade oder gestaltete Holzterrasse am Objekt.",
  "/referenzen/services":
    "Referenzkategorie Services: Klempnerarbeiten aus eigener Werkstatt oder Ladekran im Einsatz auf der Baustelle.",
};

function Referenzen() {
  return (
    <div>
      <PageHero
        eyebrow="Referenzen"
        title="Unsere Referenzen"
        lead="Jedes Projekt hat seine eigene Geschichte – und sein eigenes Material. Von der mittelalterlichen Fachwerkscheune bis zur energetischen Dachsanierung: Sehen Sie unsere abgeschlossenen Projekte im Großraum Esslingen und Stuttgart."
        ctaLabel="Kostenlose Projektberatung Anfordern"
        imageNote="Übersichtsbild Referenzen: starke Collage oder Einzelfoto abgeschlossener Projekte aus Restaurierung, Holzbau und Dach."
      />

      <Section>
        <SectionHeading
          kicker="Nach Leistungsbereich"
          title="Projekte nach Kategorie"
          intro="Wählen Sie einen Leistungsbereich und entdecken Sie abgeschlossene Projekte mit konkreten Schadensbildern, Materialien und Lösungen."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFERENZ_KATEGORIEN.map((k) => (
            <Link
              key={k.to}
              to={k.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <PlaceholderImage
                note={KATEGORIE_BILDNOTIZEN[k.to]}
                ratio="landscape"
                className="rounded-none border-0 border-b border-dashed border-border"
              />
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {k.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {KATEGORIE_INTROS[k.to]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Projekte ansehen
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
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          kicker="Ausgewähltes Projekt"
          title="Aus der Praxis"
          intro="Ein Beispiel, das zeigt, wie wir historische Bausubstanz erhalten – vom Schadensbefund bis zur denkmalgerechten Ausführung."
        />
        <div className="mt-12 grid items-center gap-10 rounded-2xl border border-border bg-card p-6 lg:grid-cols-2 lg:gap-16 lg:p-10">
          <PlaceholderImage
            note="Projektfoto Restaurierung Fachwerkhaus Esslingen-Altstadt: erneuerte Eichenbalken, ergänztes Gefach und neue Schieferdeckung."
            ratio="landscape"
          />
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Restaurierung & Sanierung
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-card-foreground sm:text-3xl">
              Restaurierung Fachwerkhaus, Esslingen-Altstadt
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Das Fachwerk-Stadthaus aus dem 17. Jahrhundert zeigte typische
              Schadensbilder: Fäulnis an mehreren Querbalken, Risse im Gefach und
              eine undichte Eindeckung. Alle geschädigten Balken wurden in Eiche
              erneuert, das Gefach fachgerecht ergänzt und das Dach in historisch
              korrekter Schieferdeckung neu eingedeckt. In enger Abstimmung mit
              dem Landesdenkmalamt Esslingen.
            </p>
            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Ähnliches Projekt anfragen
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Haben Sie Fragen zu einer Referenz?"
        text="Sprechen Sie uns an – wir erzählen Ihnen gerne mehr über unsere Projekte und was für Ihr Vorhaben möglich ist."
        ctaLabel="Kontakt"
      />
    </div>
  );
}
