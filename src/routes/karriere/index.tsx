import { createFileRoute, Link } from "@tanstack/react-router";
import { BewerbungsButton } from "@/components/bewerbungs-modal";
import { Section, CategoryBar } from "@/components/sections";
import gruppenbildAsset from "@/assets/scharpf_gruppenbild_hochzeit.jpg.asset.json";
import karriereEinstiegAsset from "@/assets/karriere-handwerk-einstieg.jpg.asset.json";
import vorteilHandwerk from "@/assets/vorteil-handwerk.jpg";
import vorteilTeam from "@/assets/vorteil-team.jpg";
import vorteilGeld from "@/assets/vorteil-geld.jpg";
import vorteilGeschafft from "@/assets/vorteil-geschafft.jpg";
import vorteilKarriere from "@/assets/vorteil-karriere.jpg";
import vorteilHolz from "@/assets/vorteil-holz.jpg";
import { KarriereArbeitstag } from "@/components/karriere-arbeitstag";
import { Button } from "@/components/ui/button";
import { History, Layers, Castle, Factory, GraduationCap, ClipboardList, Award } from "lucide-react";

export const Route = createFileRoute("/karriere/")({
  head: () => ({
    meta: [
      { title: "Zimmerer & Dachdecker Jobs Esslingen – E. Scharpf GmbH" },
      { property: "og:title", content: "Karriere und Handwerk bei E. Scharpf in Esslingen" },
      { property: "og:description", content: "Entdecke unsere drei Gewerke, einen typischen Arbeitstag und deine beruflichen Möglichkeiten bei E. Scharpf." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Deine Wunschstelle bei uns: Wir suchen Zimmerer und Dachdecker (m/w/d). Traditionelles Handwerk trifft modernste Technik – im Familienbetrieb Esslingen.",
      },
    ],
  }),
  component: Karriere,
});

// „Das musst du mitbringen" – Punkte wörtlich aus dem XD.
const ANFORDERUNGEN = [
  "Du hast eine abgeschlossene Ausbildung als Zimmerer oder Dachdecker oder bringst vergleichbare handwerkliche Erfahrung mit.",
  "Du verfügst über handwerkliches Geschick, räumliches Vorstellungsvermögen und technisches Verständnis.",
  "Du bist körperlich belastbar, schwindelfrei und packst gerne mit an. Egal ob in der Werkhalle oder auf der Baustelle.",
  "Du bist teamfähig, zuverlässig und verantwortungsbewusst.",
  "Du arbeitest präzise und mit einem hohen Qualitätsbewusstsein.",
] as const;

// Job-Selektor (B612-Konzept 4.11): Kacheln führen zu den Job-Landingpages.
const STELLEN = [
  { label: "Zimmerer (m/w/d)", to: "/karriere/zimmerer" },
  { label: "Dachdecker (m/w/d)", to: "/karriere/dachdecker" },
  { label: "Klempner / Flaschner (m/w/d)", to: "/karriere/klempner" },
  { label: "Ausbildung Zimmermann", to: "/karriere/zimmermann-ausbildung" },
  { label: "Ausbildung Dachdecker", to: "/karriere/dachdecker-ausbildung" },
  { label: "Bauhelfer (m/w/d)", to: "/karriere/bauhelfer" },
] as const;

function Karriere() {
  return (
    <div>
      <CategoryBar breadcrumbs={[{ label: "Karriere bei E. Scharpf Holzbau Restaurierung" }]} color="#E6DCC4" />

      <section aria-labelledby="karriere-einstieg" className="relative isolate overflow-hidden">
        <img
          src={karriereEinstiegAsset.url}
          alt="Zwei Handwerker bei E. Scharpf arbeiten gemeinsam an einer Dachkonstruktion"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-foreground/65" aria-hidden="true" />
        <div className="mx-auto flex min-h-96 max-w-seite flex-col justify-center px-5 py-12 lg:min-h-[28rem] lg:px-8 lg:py-16">
        <h2 id="karriere-einstieg" className="max-w-3xl font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          Handwerk mit Anspruch. Karriere mit Perspektive.
        </h2>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/90">
          {`80 Jahre Erfahrung, drei Generationen und rund 40 Mitarbeitende. Bei E. Scharpf Holzbau Restaurierung in Esslingen vereinen wir drei Gewerke unter einem Dach: Zimmerer, Dachdecker und Klempner. Hier lernst du von erfahrenen Profis, arbeitest an außergewöhnlichen Projekten und hast beste Möglichkeiten, dich beruflich weiterzuentwickeln.\n\n`}
        </p>
        </div>
        <div className="mx-auto max-w-seite px-5 pb-8 lg:px-8">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-14 w-full px-8 text-lg sm:w-auto sm:min-w-64">
            <a href="#betrieb-kennenlernen">Betrieb kennenlernen</a>
          </Button>
          <Button asChild size="lg" className="h-14 w-full px-8 text-lg sm:w-auto sm:min-w-64">
            <a href="#offene-stellen">Offene Stellen</a>
          </Button>
        </div>
        <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
          {"\n\nWerde Teil unseres Teams"}
        </h1>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
          {`Ob Zimmerer, Dachdecker, Klempner oder Bauhelfer: Wir suchen Menschen,\ndie mit Leidenschaft bauen – und bieten dafür mehr als andere.`}
        </p>
        </div>
      </section>

      {/* Deine Wunschstelle bei uns */}
      <Section className="!pt-6 lg:!pt-6">
        <div>
          <BewerbungsButton>Jetzt bewerben</BewerbungsButton>
        </div>

        {/* Job-Selektor als Kachel-Clickthrough */}
        <div id="offene-stellen" className="mt-12 grid scroll-mt-32 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STELLEN.map((s) =>
            s.to === "/karriere/dachdecker-ausbildung" || s.to === "/karriere/bauhelfer" ? (
              <div
                key={s.to}
                aria-disabled="true"
                className="flex cursor-not-allowed items-center justify-between rounded-lg border border-border bg-muted p-6 opacity-60"
              >
                <span className="font-display text-lg font-bold text-muted-foreground">
                  {s.label}
                  <span className="mt-1 block text-sm font-normal">
                    {s.to === "/karriere/bauhelfer" ? "Aktuell keine offene Stelle" : "Aktuell keine Ausbildung"}
                  </span>
                </span>
              </div>
            ) : (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {s.label}
              </span>
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
                className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            ),
          )}
        </div>

        <h2 id="betrieb-kennenlernen" className="mt-12 scroll-mt-32 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Vorteile vom Handwerk
        </h2>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {([
            ["KI kann viel. Bauen bleibt Handwerk.", "KI verändert viele Berufe. Aber ein Dach decken, einen Dachstuhl bauen oder ein historisches Gebäude restaurieren? Dafür braucht es auch in Zukunft Menschen, die ihr Handwerk verstehen und selbst anpacken.", vorteilHandwerk],
            ["Zusammen arbeiten. Zusammen weiterkommen.", "Bei uns arbeiten erfahrene Fachkräfte, junge Gesellen und Azubis Seite an Seite. Man lernt voneinander, hilft sich gegenseitig – und der Humor kommt bei uns auch nicht zu kurz.", vorteilTeam],
            ["Eigenes Geld. Sichere Perspektiven.", "Du verdienst schon während deiner Ausbildung dein eigenes Geld und legst mit deinem handwerklichen Können den Grundstein für eine berufliche und finanziell attraktive Zukunft.", vorteilGeld],
            ["Abends sehen, was man geschafft hat.", "Du packst mit an, arbeitest im Team und kannst am Ende des Tages stolz auf das sein, was wir gemeinsam geschaffen haben.", vorteilGeschafft],
            ["Eine Ausbildung. Viele Karrierewege.", "Mit einer Ausbildung im Handwerk stehen dir viele Türen offen. Du kannst dich vom Gesellen zum Vorarbeiter oder Meister entwickeln. Und auch darüber hinaus gibt es viele Möglichkeiten – vom Techniker über ein Studium bis hin zum eigenen Betrieb.", vorteilKarriere],
            ["Bau mit Holz. Gestalte Zukunft.", "Mit Holz arbeitest du mit einem nachwachsenden Rohstoff und kannst dazu beitragen, Gebäude ressourcenbewusst und langlebig zu gestalten.", vorteilHolz],
          ] as const).map(([title, text, img], i) => (
            <div
              key={title}
              tabIndex={0}
              className="group relative min-h-72 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm outline-none transition-shadow hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" aria-hidden="true" />
              <span className="absolute bottom-2 left-2 rounded bg-foreground/70 px-2 py-0.5 text-[10px] font-medium text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">Mit KI erstellt</span>
              <div className="relative flex h-full flex-col">
                <span className="font-display text-4xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-3 block h-1 w-10 bg-primary transition-all duration-500 group-hover:w-20" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-foreground transition-colors group-hover:text-background group-focus:text-background">{title}</h3>
                <p className="mt-2 text-muted-foreground transition-colors group-hover:text-background/90 group-focus:text-background/90">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </Section>

      <section aria-labelledby="warum-scharpf" className="relative isolate overflow-hidden">
        <img
          src={gruppenbildAsset.url}
          alt="Das Team von E. Scharpf bei einer gemeinsamen Feier"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-foreground/80" aria-hidden="true" />
        <div className="mx-auto max-w-seite px-5 py-12 lg:px-8 lg:py-16">
          <h2 id="warum-scharpf" className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Warum E. Scharpf?
          </h2>
          <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
          <ul className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-2">
            {([
              ["Traditionelles Handwerk. Moderne Arbeitsweisen.", "Seit drei Generationen verbinden wir Erfahrung mit moderner Technik und arbeiten gemeinsam an spannenden Bauprojekten. Wir schreiben gemeinsam Geschichte und deine Arbeit ist Jahrhunderte später noch sichtbar.", History],
              ["Drei Gewerke, viele Möglichkeiten.", "Zimmerer, Dachdecker und Klempner arbeiten bei uns unter einem Dach – und lernen dabei auch die Arbeit der anderen Gewerke kennen.", Layers],
              ["Projekte, die nicht alltäglich sind.", "Vom modernen Holzbau bis zur Restaurierung historisch bedeutsamer Gebäude (Burgen, Schlösser, Kirchen etc.) erwarten dich abwechslungsreiche und anspruchsvolle Aufgaben.", Castle],
              ["Moderne Fertigung trifft echtes Handwerk.", "Mit unserer eigenen Vorfertigung verbinden wir präzise Arbeit in der Werkhalle mit handwerklichem Können auf der Baustelle.", Factory],
              ["Von Profis lernen. Teil einer Gemeinschaft sein.", "Bei uns lernst du von erfahrenen Handwerkern in unterschiedlichen Teams und auf verschiedenen Baustellen. Ein eigener Ausbildungsleiter begleitet dich durch deine Ausbildung – und mit bis zu acht Azubis bist du Teil einer Gemeinschaft, in der ihr euch gegenseitig unterstützt und voneinander lernt.", GraduationCap],
              ["Gemeinsam planen. Eigenständig umsetzen.", "Bei unseren Azubiprojekten übernehmt ihr selbst das Ruder: Ihr plant, organisiert und setzt eure Projekte eigenständig um – vom ersten Entwurf bis zum fertigen Ergebnis. So lernt ihr früh, Verantwortung zu übernehmen und eigene Lösungen zu entwickeln.", ClipboardList],
              ["Nachwuchs fördern. Zukunft gestalten.", "Mit unserer Bildungspartnerschaft und innovativen Berufsorientierung zeigen wir jungen Menschen, was im Handwerk steckt. Für dieses Engagement wurden wir 2025 mit dem SCHULEWIRTSCHAFT-Preis ausgezeichnet.", Award],
            ] as const).map(([title, text, Icon]) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{title}</h3>
                  <p className="mt-2 text-primary-foreground/90">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Darauf kannst du dich bei uns freuen
        </h2>
        <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {[
            ["4,5 Tage arbeiten. Freitag früher Schluss.", "Bei uns startet dein Wochenende Freitags bereits um 12:30 Uhr."],
            ["Ein Team, das auch nach Feierabend zusammenkommt.", "Ob Go-Kart-Rennen, Wanderwochenende in den Bergen oder gemeinsames Grillen – wir unternehmen auch außerhalb der Arbeit etwas zusammen."],
            ["Weiterbildung, die dich weiterbringt.", "Von Produktschulungen bei VELUX bis zu individuellen Weiterbildungen unterstützen wir deine fachliche Entwicklung."],
            ["Gut ausgestattet für gute Arbeit.", "Hochwertige Werkzeuge, moderne Arbeitsmittel und Arbeitskleidung stellen wir dir kostenfrei zur Verfügung."],
            ["Ein moderner Fuhrpark.", "Mit unseren gut ausgestatteten Fahrzeugen bist du für die Einsätze auf der Baustelle gerüstet."],
            ["Mobilität, die zu dir passt.", "Wähle zwischen JobRad und Deutschlandticket."],
            ["Heute schon an morgen denken.", "Mit einer betrieblichen Altersvorsorge unterstützen wir deine zusätzliche Absicherung."],
            ["Kaffee am Morgen. Wasser für den Tag.", "Bei uns kannst du dich morgens mit Kaffee versorgen und bekommst kostenlos Wasser gestellt."],
          ].map(([title, text]) => (
            <div key={title} className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5L20 7" />
              </svg>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <KarriereArbeitstag />

      </Section>

      {/* Beschreibung deiner Stelle */}
      <Section muted className="pt-0">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Stellenbeschreibung:
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Ob Neubau von Dachstühlen, Holzhäusern, Fassaden oder die
            fachgerechte Restaurierung historischer Fachwerkhäuser, bei uns
            trifft traditionelles Handwerk auf modernste Technik. Gemeinsam
            fertigen wir Bauteile wie Dach- oder Wandelemente in unserer
            Werkhalle vor, komplett mit Dämmung und Lattung. Anschließend werden
            sie transportiert und auf der Baustelle passgenau wieder montiert.
            Das bedeutet witterungsunabhängige Arbeit, beste Qualität und
            sichere Installation.
          </p>
          <p>
            Wir bieten dir abwechslungsreiche Aufgaben im Neubau, in der
            Sanierung und besonders in der Restaurierung historischer Gebäude.
            Bei uns sicherst Du den Erhalt traditioneller Bausubstanz und setzt
            zugleich modernste Technik für neue Bauprojekte ein. Dabei
            arbeitest du mit ökologisch unbedenklichen Materialien, unterstützt
            von einem starken Team, das Qualität und Präzision großschreibt.
          </p>
        </div>
      </Section>


      {/* Das musst du mitbringen */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Das musst du mitbringen:
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {ANFORDERUNGEN.map((a) => (
            <li key={a} className="flex gap-3 text-base text-foreground/90">
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
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <BewerbungsButton>Jetzt bewerben</BewerbungsButton>
        </div>
      </Section>
    </div>
  );
}
