import { createFileRoute } from "@tanstack/react-router";
import { BewerbungsButton } from "@/components/bewerbungs-modal";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/zimmermann-ausbildung")({
  head: () => ({
    meta: [
      { title: "Zimmermann Ausbildung Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Ausbildung zum Zimmerer (m/w/d) in Esslingen: traditionelles Handwerk, moderne Technik und ein Team aus jungen und erfahrenen Kollegen. Jetzt bewerben.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      bildKlein
      titel="Ausbildung Zimmermann (m/w/d)"
      lead="Du bist motiviert und suchst einen Ausbildungsplatz zum Zimmermann? Dann bewirb dich bei uns!"
      beschreibung={[
        "Wir haben ein tolles Team aus innovativen, jungen Mitarbeitern und erfahrenen „alten Hasen“. Wir sind in den Bereichen Altbausanierung, Restauration und Neubau tätig – du lernst bei uns also das komplette Spektrum des Zimmererhandwerks kennen.",
        "Vom Abbund in der Werkhalle über die Montage auf der Baustelle bis zur Restaurierung historischer Fachwerkhäuser: Bei uns trifft traditionelles Handwerk auf modernste Technik – die beste Grundlage für deinen Start ins Berufsleben.",
      ]}
      anforderungen={[
        "Guter Schulabschluss oder handwerkliche Vorerfahrung (z. B. Praktikum)",
        "Handwerkliches Geschick und technisches Interesse",
        "Motivation, Zuverlässigkeit und Teamgeist",
        "Schwindelfreiheit von Vorteil",
      ]}
      imageSrc="/fotos/scharpf_karriere_zimmermann_ausbildung.jpg"
      zusatz={
        <div className="mt-8 max-w-3xl space-y-10 text-base leading-relaxed text-muted-foreground">
          <ul className="list-disc space-y-3 pl-6">
            <li><strong className="text-foreground">Dauer:</strong> 3 Jahre. Auch mit Abitur wünschen wir uns, dass du drei volle Ausbildungsjahre durchläufst. Denn gutes Handwerk braucht Zeit, Erfahrung und Übung – und wir möchten, dass du alle Bereiche kennenlernst und eine fundierte Grundlage für deine berufliche Zukunft schaffst.</li>
            <li><strong className="text-foreground">Vergütung:</strong> 1. Lehrjahr ca. 600 Euro, 2. Lehrjahr 1.351 Euro, 3. Lehrjahr 1.610 Euro</li>
            <li><strong className="text-foreground">Abschluss:</strong> Zimmerergeselle (m/w/d)</li>
          </ul>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Das lernst du bei uns</h2>
            <span className="mt-4 block h-1 w-24 bg-primary" />
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                ["Holzbau von Grund auf.", "Du lernst, Holzkonstruktionen zu planen, zuzuschneiden und fachgerecht zusammenzubauen."],
                ["Moderne Vorfertigung.", "In unserer Werkhalle fertigst du Dach- und Wandelemente, die später auf der Baustelle montiert werden."],
                ["Arbeiten auf der Baustelle.", "Du baust Dachstühle, bringst Dämmungen an und arbeitest an Holzhäusern, Aufstockungen und Fassaden mit."],
                ["Handwerk mit Geschichte.", "Bei der Sanierung und Restaurierung historischer Fachwerkgebäude lernst du traditionelle Handwerkstechniken kennen."],
              ].map(([t, x]) => (
                <div key={t}>
                  <h3 className="font-display text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-1">{x}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Drei Jahre, in denen du viel lernst.</h3>
            <p className="mt-2">Vom Umgang mit Werkzeugen und Materialien über die Arbeit an unterschiedlichen Bauprojekten bis zur eigenständigen Ausführung anspruchsvollerer Aufgaben – wir machen dich Schritt für Schritt fit für deinen Beruf.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Und nach der Ausbildung?</h3>
            <p className="mt-2">Ob Geselle, Vorarbeiter, Meister, Techniker oder irgendwann dein eigener Betrieb – mit deinem Abschluss stehen dir viele Wege offen.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Du weißt noch nicht, welches Handwerk zu dir passt?</h3>
            <p className="mt-2">Lerne unsere drei Gewerke bei einem Praktikum kennen und finde heraus, was dir am meisten liegt.</p>
            <div className="mt-6"><BewerbungsButton>Praktikum anfragen</BewerbungsButton></div>
          </div>
        </div>
      }
      imageNote="Auszubildender beim Anreißen eines Sparrens"
    />
  );
}
