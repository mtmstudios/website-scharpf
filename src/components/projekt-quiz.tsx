import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/submit-lead";

/**
 * 4-Step Projekt-Quiz (B612-Konzept, Abschnitt 5): geführte Auswahl statt
 * klassischem Formular – senkt die Hemmschwelle und qualifiziert Leads vor.
 * Schritt 1 Projektart · 2 Gebäudetyp · 3 Projektgröße · 4 Kontaktdaten.
 */
const SCHRITTE = [
  {
    frage: "Um welche Projektart geht es?",
    key: "projektart",
    optionen: [
      "Dachsanierung",
      "Holzbau / Aufstockung",
      "Fassade",
      "Restaurierung",
      "Carport",
      "Sonstiges",
    ],
  },
  {
    frage: "Um welchen Gebäudetyp handelt es sich?",
    key: "gebaeudetyp",
    optionen: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbeobjekt", "Denkmal"],
  },
  {
    frage: "Wie groß ist Ihr Projekt ungefähr?",
    key: "projektgroesse",
    optionen: ["unter 20.000 €", "20.000–50.000 €", "über 50.000 €"],
  },
] as const;

const inputClass =
  "flex h-12 w-full rounded-md border border-border bg-background px-4 py-2 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function ProjektQuiz() {
  const navigate = useNavigate();
  const [schritt, setSchritt] = useState(0);
  const [antworten, setAntworten] = useState<Record<string, string>>({});
  const [kontakt, setKontakt] = useState({
    name: "",
    phone: "",
    email: "",
    beschreibung: "",
  });
  const [datenschutz, setDatenschutz] = useState(false);
  const [sending, setSending] = useState(false);

  function waehle(key: string, wert: string) {
    setAntworten((a) => ({ ...a, [key]: wert }));
    setSchritt((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      await submitLead("projekt-quiz", {
        ...antworten,
        name: kontakt.name,
        telefon: kontakt.phone,
        email: kontakt.email,
        beschreibung: kontakt.beschreibung,
      });
    } finally {
      setSending(false);
      navigate({ to: "/kontakt/danke" });
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
      {/* Fortschritt */}
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i <= schritt ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground">
        Schritt {Math.min(schritt + 1, 4)} von 4
      </p>

      {schritt < SCHRITTE.length ? (
        <div className="mt-6">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {SCHRITTE[schritt].frage}
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SCHRITTE[schritt].optionen.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => waehle(SCHRITTE[schritt].key, opt)}
                className="rounded-xl border border-border bg-background px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {opt}
              </button>
            ))}
          </div>
          {schritt > 0 && (
            <button
              type="button"
              onClick={() => setSchritt((s) => s - 1)}
              className="mt-6 text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              ← Zurück
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Wie erreichen wir Sie?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {antworten.projektart} · {antworten.gebaeudetyp} ·{" "}
            {antworten.projektgroesse}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              value={kontakt.name}
              onChange={(e) =>
                setKontakt((k) => ({ ...k, name: e.target.value }))
              }
              className={inputClass}
              placeholder="Name *"
              aria-label="Name"
            />
            <input
              type="tel"
              required
              value={kontakt.phone}
              onChange={(e) =>
                setKontakt((k) => ({ ...k, phone: e.target.value }))
              }
              className={inputClass}
              placeholder="Telefon *"
              aria-label="Telefon"
            />
            <input
              type="email"
              required
              value={kontakt.email}
              onChange={(e) =>
                setKontakt((k) => ({ ...k, email: e.target.value }))
              }
              className={cn(inputClass, "sm:col-span-2")}
              placeholder="E-Mail *"
              aria-label="E-Mail"
            />
            <textarea
              value={kontakt.beschreibung}
              onChange={(e) =>
                setKontakt((k) => ({ ...k, beschreibung: e.target.value }))
              }
              className="min-h-[100px] w-full rounded-md border border-border bg-background px-4 py-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:col-span-2"
              placeholder="Kurzbeschreibung Ihres Projekts (optional)"
              aria-label="Kurzbeschreibung"
            />
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              required
              checked={datenschutz}
              onChange={(e) => setDatenschutz(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
            />
            <span>
              Ich habe die{" "}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zu. *
            </span>
          </label>
          <div className="mt-6 flex items-center gap-6">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
            >
              {sending ? "Wird gesendet …" : "Anfrage absenden"}
            </button>
            <button
              type="button"
              onClick={() => setSchritt((s) => s - 1)}
              className="text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              ← Zurück
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
