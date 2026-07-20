import { createFileRoute } from "@tanstack/react-router";
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
      imageSrc="/fotos/scharpf_vorfertigung_03.jpg"
      imageNote="Ausbildung in der Werkhalle von E. Scharpf"
    />
  );
}
