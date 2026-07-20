import { Link } from "@tanstack/react-router";
import { CONTACT, PARTNERS, SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </>
  ),
  pinterest: (
    <>
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.5 1.9 1.9 0 3.2-2.4 3.2-5.2 0-2.1-1.4-3.7-4-3.7a4.6 4.6 0 0 0-4.8 4.6c0 .9.3 1.5.7 2 .2.2.2.3.1.5l-.2.9c-.1.3-.3.4-.6.2-1.1-.5-1.7-2-1.7-3.3 0-2.7 2-5.2 5.9-5.2 3.1 0 5.5 2.2 5.5 5.2 0 3.1-1.9 5.6-4.7 5.6-.9 0-1.8-.5-2.1-1l-.6 2.2c-.2.8-.7 1.8-1.1 2.4A10 10 0 1 0 12 2Z" />
    </>
  ),
  facebook: (
    <>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </>
  ),
  houzz: (
    <>
      <path d="M6 3v7l6-3.5v7L6 21H4V3zM12 10.5L18 7v14h-2v-7l-4 2.3z" />
    </>
  ),
};

// Footer exakt wie XD: oranges 3-Spalten-Band mit weißer Schrift und
// vertikalen Trennlinien. Spalte 1: Firma/Adresse + Partner · Spalte 2: Kontakt
// (Email/Tel/Fax) · Spalte 3: Rechts-Links + Copyright.
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Extra Abstand unten auf Mobil, damit die Sticky-Bar (< md) die
          Copyright-Zeile nicht überdeckt. */}
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-16 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-primary-foreground/25">
          {/* Spalte 1 – Firma & Partner */}
          <div className="md:pr-10">
            <div className="font-display text-2xl font-bold">E. Scharpf</div>
            <p className="mt-3 text-sm text-primary-foreground/90">
              Holzbau &amp; Restaurierung aus Esslingen. Seit über 80 Jahren
              für Qualität, Nachhaltigkeit und handwerkliche Präzision.
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
              <Link to="/agb" className="hover:underline">
                AGB
              </Link>
              <span aria-hidden>|</span>
              <Link to="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={s.icon === "instagram" ? "none" : "currentColor"}
                    stroke={s.icon === "instagram" ? "currentColor" : "none"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {SOCIAL_ICONS[s.icon]}
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Copyright © {new Date().getFullYear()} E. Scharpf GmbH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
