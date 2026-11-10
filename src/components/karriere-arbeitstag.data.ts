export type Station = { time: string; title: string; text: string };
const start: Station = { time: "06:40", title: "Alle Gewerke · Start auf dem Betriebshof", text: "Wir treffen uns auf dem Betriebshof, holen uns einen Kaffee und stimmen im Team ab, was heute ansteht." };
const end: Station = { time: "Abschluss", title: "Ein Projekt. Drei Gewerke.", text: "Zimmerer, Dachdecker und Klempner bringen unterschiedliche Fähigkeiten ein – und am Ende entsteht gemeinsam ein fertiges Bauteil oder Bauprojekt." };
const drive: Station = { time: "06:50", title: "Fahrt zur Baustelle", text: "Gemeinsam fahren wir zur Baustelle und bereiten die Arbeiten vor." };
const pause: Station = { time: "09:00", title: "Gemeinsame Frühstückspause", text: "Zeit für eine kurze Stärkung." };
const lunch: Station = { time: "12:30", title: "Gemeinsame Mittagspause – Freitags ist jetzt Feierabend", text: "Zeit für eine Pause mit dem Team." };
export const ARBEITSTAG: Record<string, Station[]> = {
  Zimmerer: [start, drive,
    { time: "08:00", title: "Wärmedämmung einbauen", text: "Wir schneiden die Wärmedämmung zu und bauen sie ein." }, pause,
    { time: "09:30", title: "Unterspannbahn montieren", text: "Wir bringen die Unterspannbahn am Dach an." }, lunch,
    { time: "13:00", title: "Konterlattung montieren", text: "Wir befestigen die Konterlattung als nächsten Schritt im Dachaufbau." },
    { time: "15:00", title: "Dachlattung montieren", text: "Wir montieren die Dachlatten für die spätere Dacheindeckung." },
    { time: "16:00", title: "Zimmerer und Dachdecker decken gemeinsam das Dach ein", text: "Hand in Hand decken wir das Dach mit Ziegeln ein." },
    { time: "16:45", title: "Wir sichern gemeinsam die Baustelle", text: "Bevor wir Feierabend machen, sichern wir Dach und Baustelle für die Nacht." },
    { time: "17:00", title: "Feierabend auf der Baustelle - Rückfahrt zum Betriebshof", text: "Der Arbeitstag ist geschafft." }, end],
  Dachdecker: [start, drive,
    { time: "08:00", title: "Dachflächenfenster einbauen", text: "Wir setzen Dachflächenfenster in die Dachfläche ein." }, pause,
    { time: "09:30", title: "Bleche und Dachrinne montieren", text: "Wir bringen Blechteile und Dachrinnen an." }, lunch,
    { time: "13:00", title: "Konterlattung montieren", text: "Wir befestigen die Konterlattung als nächsten Schritt im Dachaufbau." },
    { time: "15:00", title: "Bitumen Bahn schweissen", text: "Wir verschweißen die Bitumenbahn für eine dichte Abdichtung." },
    { time: "16:00", title: "Zimmerer und Dachdecker decken gemeinsam das Dach ein", text: "Hand in Hand decken wir das Dach mit Ziegeln ein." },
    { time: "16:45", title: "Wir sichern gemeinsam die Baustelle", text: "Bevor wir Feierabend machen, sichern wir Dach und Baustelle für die Nacht." },
    { time: "17:00", title: "Feierabend auf der Baustelle - Rückfahrt zum Betriebshof", text: "Der Arbeitstag ist geschafft." }, end],
  Klempner: [start,
    { time: "07:00", title: "Bleche vorbereiten", text: "Wir richten Bleche an der Abkantbank in der Werkstatt vor." },
    { time: "08:00", title: "Fahrt zur Baustelle", text: "Gemeinsam fahren wir zur Baustelle und bereiten die Arbeiten vor." }, pause,
    { time: "09:30", title: "Stehfalzblech an der Dachgaube montieren", text: "Wir laden die fertigen Bleche ein und fahren zur Baustelle." },
    { time: "12:30", title: "Gemeinsame Mittagspause – Freitags ist jetzt Feierabend", text: "Zeit für eine Pause mit dem Team." },
    { time: "13:00", title: "Bauteile verlöten", text: "Wir verlöten Bauteile für passende Verbindungen." },
    { time: "15:00", title: "Rinne an der Terrasse montieren", text: "Wir montieren die Dachrinne an der Terrasse." },
    { time: "16:00", title: "Einlaufblech montieren", text: "Wir montieren das Einlaufblech für einen sauberen Wasserablauf." },
    { time: "16:45", title: "Wir sichern gemeinsam die Baustelle", text: "Bevor wir Feierabend machen, sichern wir Dach und Baustelle für die Nacht." },
    { time: "17:00", title: "Feierabend auf der Baustelle - Rückfahrt zum Betriebshof", text: "Der Arbeitstag ist geschafft." }, end],
};