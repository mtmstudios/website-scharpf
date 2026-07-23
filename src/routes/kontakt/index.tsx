import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Section, TrustRow, CategoryBar } from "@/components/sections";
import { ProjektQuiz } from "@/components/projekt-quiz";
import { CONTACT } from "@/lib/site";
import { submitLead } from "@/lib/submit-lead";
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

// Leistungs-Dropdown wie im B612-Konzept (inkl. Karriere für Bewerbungen).
const LEISTUNG_OPTIONS = [
  "Restaurierung",
  "Holzbau",
  "Dach",
  "Fassade",
  "Karriere",
  "Sonstiges",
] as const;

const inputClass =
  "flex h-12 w-full rounded-md border border-border bg-background px-4 py-2 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function Kontakt() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    leistung: "",
    email: "",
    message: "",
  });
  const [datenschutz, setDatenschutz] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      await submitLead("kontaktformular", {
        name: form.name,
        telefon: form.phone,
        leistung: form.leistung,
        email: form.email,
        nachricht: form.message,
      });
    } finally {
      setSending(false);
      navigate({ to: "/kontakt/danke" });
    }
  }

  return (
    <div>
      <CategoryBar title="Kontakt" color="#DD5A1A" />

      {/* Hero + Kontaktdaten */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Starten wir Ihr Projekt.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Rufen Sie uns an, schreiben Sie uns – oder nutzen Sie einfach das
          Formular. Wir melden uns innerhalb von 24 Stunden.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:max-w-4xl">
          <div className="text-base text-muted-foreground">
            <p className="font-semibold text-foreground">Adresse</p>
            <p className="mt-1">{CONTACT.street}</p>
            <p>{CONTACT.city} am Neckar</p>
          </div>
          <div className="space-y-4 text-base">
            <div>
              <p className="font-semibold text-foreground">Telefon</p>
              <a
                href={CONTACT.phoneHref}
                className="text-muted-foreground hover:text-primary"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">E-Mail</p>
              <a
                href={CONTACT.emailHref}
                className="text-muted-foreground hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
          <div className="text-base">
            <p className="font-semibold text-foreground">Öffnungszeiten</p>
            <p className="mt-1 text-muted-foreground">{CONTACT.hours}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Fax: {CONTACT.fax}
            </p>
          </div>
        </div>
        <TrustRow className="mt-10 justify-start" />
      </Section>

      {/* Projekt-Quiz – geführter 4-Schritte-Funnel (B612-Konzept) */}
      <Section muted id="projekt-quiz" className="pt-14">
        <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Projekt anfragen
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          In vier Schritten zur kostenlosen Projektberatung – wählen Sie
          einfach aus, worum es geht.
        </p>
        <div className="mt-8 max-w-3xl">
          <ProjektQuiz />
        </div>
      </Section>

      {/* Klassisches Kontaktformular */}
      <Section>
        <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Kontaktformular
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10"
        >
          <div className="space-y-5">
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
              className={inputClass}
              placeholder="Name *"
              aria-label="Name"
            />
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              className={inputClass}
              placeholder="Telefon *"
              aria-label="Telefon"
            />
            <select
              value={form.leistung}
              onChange={(e) =>
                setForm((f) => ({ ...f, leistung: e.target.value }))
              }
              className={cn(inputClass, "cursor-pointer")}
              aria-label="Leistung"
            >
              <option value="">Leistung</option>
              {LEISTUNG_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className={inputClass}
              placeholder="E-Mail *"
              aria-label="E-Mail"
            />
          </div>
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="min-h-[220px] w-full rounded-md border border-border bg-background px-4 py-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Ihre Nachricht"
            aria-label="Ihre Nachricht"
          />
          <div className="lg:col-span-2">
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                required
                checked={datenschutz}
                onChange={(e) => setDatenschutz(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
              />
              <span>
                Ich habe die{" "}
                <Link
                  to="/datenschutz"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu. *
              </span>
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
            >
              {sending ? "Wird gesendet …" : "Formular absenden"}
            </button>
          </div>
        </form>
      </Section>

      {/* Anfahrt – Google Maps */}
      <Section muted>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          So finden Sie uns
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Anfahrt E. Scharpf GmbH, Fritz-Müller-Str. 115, 73730 Esslingen"
            src="https://www.google.com/maps?q=E.+Scharpf+GmbH,+Fritz-M%C3%BCller-Str.+115,+73730+Esslingen&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Newsletter
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Bleiben Sie informiert – jetzt Newsletter abonnieren.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            required
            className={inputClass}
            placeholder="Ihre E-Mail-Adresse"
            aria-label="E-Mail-Adresse für Newsletter"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Jetzt abonnieren
          </button>
        </form>
      </Section>
    </div>
  );
}
