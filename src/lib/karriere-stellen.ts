export const KARRIERE_STELLENGRUPPEN = [
  {
    titel: "Dachdecker", bild: "/fotos/scharpf_Dacharbeiten.jpg",
    stellen: [
      { titel: "Dachdeckermeister (m/w/d)", text: "Du führst fachlich – und bringst Baustelle und Team voran.", to: "/karriere/dachdeckermeister", verfuegbar: true },
      { titel: "Dachdecker-Vorarbeiter (m/w/d)", text: "Du machst aus vielen Aufgaben einen guten Ablauf.", to: "/karriere/dachdecker-vorarbeiter", verfuegbar: true },
      { titel: "Dachdeckergeselle (m/w/d)", text: "Du machst Dächer dicht – und gute Arbeit sichtbar.", to: "/karriere/dachdecker", verfuegbar: true },
    ],
  },
  {
    titel: "Zimmerer", bild: "/fotos/scharpf_karriere_zimmerer.jpg",
    stellen: [
      { titel: "Zimmerermeister (m/w/d)", text: "Du denkst Konstruktion weiter – und führst sie zum Ergebnis.", to: "/karriere/zimmerermeister", verfuegbar: true },
      { titel: "Zimmerer-Vorarbeiter (m/w/d)", text: "Du bringst Holz, Plan und Team zusammen.", to: "/karriere/zimmerer-vorarbeiter", verfuegbar: true },
      { titel: "Zimmerergeselle (m/w/d)", text: "Du baust, was trägt.", to: "/karriere/zimmerer", verfuegbar: true },
    ],
  },
  {
    titel: "Klempner", bild: "/fotos/scharpf_dachgaube_flaschner.jpg",
    stellen: [
      { titel: "Klempnermeister (m/w/d)", text: "Du führst fachlich – und bringst Werkstatt, Baustelle und Team voran.", to: "/karriere/klempnermeister", verfuegbar: true },
      { titel: "Klempner-Vorarbeiter (m/w/d)", text: "Du bringst Blech, Plan und Team zusammen.", to: "/karriere/klempner-vorarbeiter", verfuegbar: true },
      { titel: "Klempnergeselle (m/w/d)", text: "Du formst Metall – und machst Dächer und Fassaden wetterfest.", to: "/karriere/klempner", verfuegbar: true },
    ],
  },
  {
    titel: "Ausbildung & Einstieg", bild: "/fotos/scharpf_karriere_zimmerer.jpg",
    stellen: [
      { titel: "Ausbildung zum Dachdecker (m/w/d)", text: "Dein Start ins Handwerk? Ganz oben.", to: "/karriere/dachdecker-ausbildung", verfuegbar: false },
      { titel: "Ausbildung zum Zimmerer (m/w/d)", text: "Bau nicht nur mit. Versteh, wie ein Gebäude entsteht.", to: "/karriere/zimmermann-ausbildung", verfuegbar: true },
      { titel: "Bauhelfer (m/w/d)", text: "Du packst mit an – und hältst die Baustelle am Laufen.", to: "/karriere/bauhelfer", verfuegbar: false },
    ],
  },
] as const;