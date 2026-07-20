import { createFileRoute } from "@tanstack/react-router";
import { JobSeite } from "@/components/job-seite";

export const Route = createFileRoute("/karriere/dachdecker-ausbildung")({
  head: () => ({
    meta: [
      { title: "Dachdecker Ausbildung Esslingen – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Ausbildung zum Dachdecker (m/w/d) in Esslingen: vom Steildach bis zur Klempnerwerkstatt – lerne dein Handwerk im modernen Familienbetrieb. Jetzt bewerben.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <JobSeite
      titel="Ausbildung Dachdecker (m/w/d)"
      lead="Du willst ein Handwerk lernen, das man jeden Tag sieht? Dann starte deine Dachdecker-Ausbildung bei E. Scharpf."
      beschreibung={[
        "In deiner Ausbildung lernst du alles rund ums Dach: Eindeckungen in Ziegel und Schiefer, Abdichtungen, Dämmung und die Blecharbeiten aus unserer eigenen Klempnerwerkstatt. Du arbeitest von Anfang an im Team mit erfahrenen Gesellen und Meistern.",
        "Bei uns bekommst du moderne Ausstattung, echte Verantwortung und einen Ausbildungsplatz mit Übernahmeperspektive im Familienbetrieb.",
      ]}
      anforderungen={[
        "Guter Schulabschluss oder handwerkliche Vorerfahrung (z. B. Praktikum)",
        "Schwindelfreiheit und körperliche Fitness",
        "Motivation, Zuverlässigkeit und Teamgeist",
      ]}
      imageSrc="/fotos/scharpf_dachdecken.jpg"
      imageNote="Dachdeckerarbeiten von E. Scharpf"
    />
  );
}
