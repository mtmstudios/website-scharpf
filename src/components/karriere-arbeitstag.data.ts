export type Station = { time: string; title: string; text: string };
const start: Station = { time: "06:45", title: "Alle Gewerke · Start auf dem Betriebshof", text: "Wir treffen uns auf dem Betriebshof, holen uns einen Kaffee und stimmen im Team ab, was heute ansteht." };
const end: Station = { time: "Abschluss", title: "Ein Projekt. Drei Gewerke.", text: "Zimmerer, Dachdecker und Klempner bringen unterschiedliche Fähigkeiten ein – und am Ende entsteht gemeinsam ein fertiges Bauteil oder Bauprojekt." };
const drive: Station = { time: "07:00", title: "Fahrt zur Baustelle", text: "Gemeinsam fahren wir zur Baustelle und bereiten die Arbeiten vor." };
const pause: Station = { time: "09:00", title: "Pause", text: "Zeit für eine kurze Stärkung." };
const lunch: Station = { time: "12:30", title: "Gemeinsame Mittagspause", text: "Zeit für eine Pause mit dem Team." };
export const ARBEITSTAG: Record<string, Station[]> = {
  Zimmerer: [start, drive,
    { time: "08:00", title: "Wärmedämmung einbauen", text: "Wir schneiden die Wärmedämmung zu und bauen sie ein." }, pause,
    { time: "09:30", title: "Unterspannbahn montieren", text: "Wir bringen die Unterspannbahn am Dach an." }, lunch,
    { time: "13:00", title: "Konterlattung montieren", text: "Wir befestigen die Konterlattung als nächsten Schritt im Dachaufbau." },
    { time: "15:00", title: "Dachlattung montieren", text: "Wir montieren die Dachlatten für die spätere Dacheindeckung." },
    { time: "16:00", title: "Dach für die Nacht sichern", text: "Wir bringen eine Plane an und schützen die Dachfläche über Nacht." },
    { time: "16:30", title: "Rückfahrt zum Betriebshof", text: "Wir fahren zurück zum Betrieb." },
    { time: "16:45", title: "Für morgen vorbereiten", text: "Wir rüsten das Fahrzeug und richten das Material für den nächsten Tag." },
    { time: "17:00", title: "Feierabend", text: "Der Arbeitstag ist geschafft." }, end],
  Dachdecker: [start, drive,
    { time: "08:00", title: "Dachflächenfenster einbauen", text: "Wir setzen Dachflächenfenster in die Dachfläche ein." }, pause,
    { time: "09:30", title: "Bleche und Dachrinne montieren", text: "Wir bringen Blechteile und Dachrinnen an." }, lunch,
    { time: "13:00", title: "Dach mit Ziegeln eindecken", text: "Wir decken das Dach mit Ziegeln ein." },
    { time: "15:00", title: "Biberschwanzziegel zuschneiden", text: "Wir schneiden Ziegel für die passenden Dachdetails zu." },
    { time: "16:00", title: "Abdichtung mit Bitumen", text: "Wir führen die vorgesehenen Abdichtungsarbeiten mit Bitumen aus." },
    { time: "17:00", title: "Rückfahrt zum Betriebshof", text: "Wir machen uns auf den Rückweg." },
    { time: "17:15", title: "Feierabend auf Baustelle", text: "Der Arbeitstag ist geschafft." }, end],
  Klempner: [start,
    { time: "07:00", title: "Bleche vorbereiten", text: "Wir richten Bleche an der Abkantbank in der Werkstatt vor." }, pause,
    { time: "09:30", title: "Fahrzeug beladen und losfahren", text: "Wir laden die fertigen Bleche ein und fahren zur Baustelle." },
    { time: "10:00", title: "Bleche und Dachrinnen montieren", text: "Wir montieren die vorbereiteten Blechteile und Dachrinnen." },
    { time: "12:30", title: "Mittagspause", text: "Zeit für eine Pause." },
    { time: "13:00", title: "Bauteile verlöten", text: "Wir verlöten Bauteile für passende Verbindungen." },
    { time: "17:00", title: "Feierabend auf Baustelle", text: "Der Arbeitstag ist geschafft." }, end],
};