import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Section } from "@/components/sections";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/kontakt/")({
  head: () => ({
    meta: [
      { title: "Kontakt – E. Scharpf GmbH | Holzbau & Restaurierung" },
      {
        name: "description",
        content:
          "Rufen Sie uns an oder schreiben Sie uns – Fritz-Müller-Str. 115, 73730 Esslingen am Neckar. Telefon 0711-93 18 44 22.",
      },
    ],
  }),
  component: Kontakt,
});

const LEISTUNG_OPTIONS = [
  "Restaurierung & Sanierung",
  "Holzbau & Konstruktion",
  "Dach",
  "Fassade & Außenbereiche",
  "Service & Sonstige Leistungen",
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate({ to: "/kontakt/danke" });
  }

  return (
    <div>
      {/* Kontakt – Titel + Kontaktdaten */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Kontakt
        </h1>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-2xl">
          <div className="text-base text-muted-foreground">
            <p>{CONTACT.street}</p>
            <p>{CONTACT.city}</p>
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
        </div>
      </Section>

      {/* Kontaktformular */}
      <Section muted className="pt-0">
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
              placeholder="Name"
              aria-label="Name"
            />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              className={inputClass}
              placeholder="Telefon"
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
              placeholder="Email"
              aria-label="Email"
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
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Absenden
            </button>
          </div>
        </form>
      </Section>

      {/* Newsletter */}
      <Section>
        <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Newsletter
        </h2>
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
