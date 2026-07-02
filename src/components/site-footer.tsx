import { Link } from "@tanstack/react-router";
import { CONTACT, PARTNERS } from "@/lib/site";

// Footer exakt wie XD: oranges 3-Spalten-Band mit weißer Schrift und
// vertikalen Trennlinien. Spalte 1: Firma/Adresse + Partner · Spalte 2: Kontakt
// (Email/Tel/Fax) · Spalte 3: Rechts-Links + Copyright.
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-primary-foreground/25">
          {/* Spalte 1 – Firma & Partner */}
          <div className="md:pr-10">
            <div className="font-display text-2xl font-bold">E. Scharpf</div>
            <p className="mt-3 text-sm text-primary-foreground/90">
              Restaurierung · Holzbau · Holzhausbau
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/90">
              <div>{CONTACT.street}</div>
              <div>{CONTACT.city}</div>
            </address>
            <ul className="mt-8 space-y-2 text-sm font-medium text-primary-foreground/90">
              {PARTNERS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Spalte 2 – Kontakt */}
          <div className="md:px-10">
            <div className="font-display text-xl font-bold">Kontakt</div>
            <div className="mt-4 space-y-1 text-sm text-primary-foreground/90">
              <div>
                Email:{" "}
                <a href={CONTACT.emailHref} className="hover:underline">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                Tel.:{" "}
                <a href={CONTACT.phoneHref} className="hover:underline">
                  0711-93 18 44 22
                </a>
              </div>
              <div>Fax: 0711-93 18 44 50</div>
            </div>
          </div>

          {/* Spalte 3 – Rechtliches & Copyright */}
          <div className="md:pl-10">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-primary-foreground/90">
              <Link to="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
              <span aria-hidden>|</span>
              <Link to="/impressum" className="hover:underline">
                Impressum
              </Link>
              <span aria-hidden>|</span>
              <Link to="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Copyright © 2023 holzbau-scharpf.de
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
