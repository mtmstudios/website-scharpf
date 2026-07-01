import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/sections";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/kontakt/")({
  head: () => ({
    meta: [
      { title: "Kontakt – E. Scharpf GmbH | Holzbau & Restaurierung" },
      {
        name: "description",
        content:
          "Rufen Sie uns an oder schreiben Sie uns – wir melden uns innerhalb von 24 Stunden. Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
    ],
  }),
  component: Kontakt,
});

const LEISTUNG_OPTIONS = [
  "Restaurierung",
  "Holzbau",
  "Dach",
  "Fassade",
  "Karriere",
  "Sonstiges",
] as const;

const TRUST_ITEMS = [
  "80+ Jahre Erfahrung",
  "Familienbetrieb in der dritten Generation",
  "Antwort innerhalb von 24 Stunden",
  "Google-Bewertung",
] as const;

const inputClass =
  "flex h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

function Kontakt() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    leistung: "",
    message: "",
    privacy: false,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate({ to: "/kontakt/danke" });
  }

  return (
    <div>
      <PageHero
        eyebrow="Kontakt"
        title="Starten wir Ihr Projekt."
        lead="Rufen Sie uns an, schreiben Sie uns – oder nutzen Sie einfach das Formular. Wir melden uns innerhalb von 24 Stunden."
        imageNote="Betriebsgebäude / Empfang von E. Scharpf in Esslingen: einladendes Foto des Firmensitzes oder Showrooms als erster persönlicher Eindruck."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Linke Spalte: Kontaktformular */}
          <div>
            <SectionHeading
              title="Schreiben Sie uns"
              intro="Füllen Sie das Formular aus – wir melden uns schnellstmöglich bei Ihnen zurück."
            />
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ihr Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="h-11"
                  placeholder="Vor- und Nachname"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="h-11"
                  placeholder="name@beispiel.de"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="h-11"
                  placeholder="0711 – 12 34 56"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="leistung">Leistung</Label>
                <select
                  id="leistung"
                  value={form.leistung}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, leistung: e.target.value }))
                  }
                  className={cn(inputClass, "cursor-pointer")}
                >
                  <option value="">Bitte wählen …</option>
                  {LEISTUNG_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht (optional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="min-h-[140px]"
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  checked={form.privacy}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, privacy: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary text-primary accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm leading-snug text-muted-foreground"
                >
                  Ich habe die{" "}
                  <Link
                    to="/datenschutz"
                    className="font-semibold text-primary hover:underline"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Formular absenden
              </button>
            </form>
          </div>

          {/* Rechte Spalte: Kontaktdaten + Vertrauen + Karte */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {CONTACT.company}
              </h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Adresse</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {CONTACT.street}
                    <br />
                    {CONTACT.city}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Telefon</dt>
                  <dd className="mt-1">
                    <a
                      href={CONTACT.phoneHref}
                      className="text-primary hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Fax</dt>
                  <dd className="mt-1 text-muted-foreground">{CONTACT.fax}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">E-Mail</dt>
                  <dd className="mt-1">
                    <a
                      href={CONTACT.emailHref}
                      className="text-primary hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Öffnungszeiten
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{CONTACT.hours}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-lg font-bold text-card-foreground">
                Warum E. Scharpf?
              </h3>
              <ul className="mt-5 space-y-3">
                {TRUST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-foreground/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <PlaceholderImage
              note="Google-Maps-Karte: Standort Fritz-Müller-Str. 115, 73730 Esslingen"
              ratio="wide"
            />
          </div>
        </div>
      </Section>

      {/* Projekt-Quiz (4-Step Funnel) */}
      <Section muted>
        <SectionHeading
          center
          kicker="In 4 Schritten zum Angebot"
          title="Projekt-Quiz"
          intro="Beantworten Sie vier kurze Fragen – wir erstellen Ihnen ein passgenaues Angebot."
        />
        <div className="mt-12">
          <ProjektQuiz />
        </div>
      </Section>
    </div>
  );
}

const PROJEKTARTEN = [
  "Dachsanierung",
  "Holzbau / Aufstockung",
  "Fassade",
  "Restaurierung",
  "Carport",
  "Sonstiges",
] as const;

const GEBAEUDETYPEN = [
  "Einfamilienhaus",
  "Mehrfamilienhaus",
  "Gewerbeobjekt",
  "Denkmal",
] as const;

const PROJEKTGROESSEN = [
  "unter 20.000 €",
  "20.000–50.000 €",
  "über 50.000 €",
] as const;

function ProjektQuiz() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [quiz, setQuiz] = useState({
    projektart: "",
    gebaeudetyp: "",
    projektgroesse: "",
    name: "",
    phone: "",
    email: "",
    beschreibung: "",
  });

  function select(key: keyof typeof quiz, value: string) {
    setQuiz((q) => ({ ...q, [key]: value }));
    setStep((s) => Math.min(s + 1, 4));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleQuizSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate({ to: "/kontakt/danke" });
  }

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">
            Schritt {step} von 4
          </span>
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
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
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Zurück
            </button>
          )}
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Schritt 1: Projektart */}
      {step === 1 && (
        <div>
          <h3 className="font-display text-xl font-bold text-card-foreground">
            Um welche Projektart geht es?
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJEKTARTEN.map((opt) => (
              <QuizTile
                key={opt}
                label={opt}
                active={quiz.projektart === opt}
                onClick={() => select("projektart", opt)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Schritt 2: Gebäudetyp */}
      {step === 2 && (
        <div>
          <h3 className="font-display text-xl font-bold text-card-foreground">
            Um welchen Gebäudetyp handelt es sich?
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {GEBAEUDETYPEN.map((opt) => (
              <QuizTile
                key={opt}
                label={opt}
                active={quiz.gebaeudetyp === opt}
                onClick={() => select("gebaeudetyp", opt)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Schritt 3: Projektgröße */}
      {step === 3 && (
        <div>
          <h3 className="font-display text-xl font-bold text-card-foreground">
            Wie groß ist Ihr geplantes Budget?
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PROJEKTGROESSEN.map((opt) => (
              <QuizTile
                key={opt}
                label={opt}
                active={quiz.projektgroesse === opt}
                onClick={() => select("projektgroesse", opt)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Schritt 4: Kontakt */}
      {step === 4 && (
        <form onSubmit={handleQuizSubmit}>
          <h3 className="font-display text-xl font-bold text-card-foreground">
            Wie können wir Sie erreichen?
          </h3>
          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="quiz-name">Name *</Label>
              <Input
                id="quiz-name"
                type="text"
                required
                value={quiz.name}
                onChange={(e) =>
                  setQuiz((q) => ({ ...q, name: e.target.value }))
                }
                className="h-11"
                placeholder="Vor- und Nachname"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-phone">Telefon *</Label>
              <Input
                id="quiz-phone"
                type="tel"
                required
                value={quiz.phone}
                onChange={(e) =>
                  setQuiz((q) => ({ ...q, phone: e.target.value }))
                }
                className="h-11"
                placeholder="0711 – 12 34 56"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-email">E-Mail *</Label>
              <Input
                id="quiz-email"
                type="email"
                required
                value={quiz.email}
                onChange={(e) =>
                  setQuiz((q) => ({ ...q, email: e.target.value }))
                }
                className="h-11"
                placeholder="name@beispiel.de"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-beschreibung">
                Kurzbeschreibung (optional)
              </Label>
              <Textarea
                id="quiz-beschreibung"
                value={quiz.beschreibung}
                onChange={(e) =>
                  setQuiz((q) => ({ ...q, beschreibung: e.target.value }))
                }
                className="min-h-[120px]"
                placeholder="Erzählen Sie uns kurz mehr zu Ihrem Vorhaben …"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Anfrage absenden
          </button>
        </form>
      )}
    </div>
  );
}

function QuizTile({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-xl border p-6 text-center text-sm font-semibold transition-all hover:-translate-y-0.5",
        active
          ? "border-primary bg-primary/10 text-primary shadow-md"
          : "border-border bg-background text-foreground hover:border-primary/40 hover:shadow-md",
      )}
    >
      {label}
    </button>
  );
}
