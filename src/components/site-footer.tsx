import { Link } from "@tanstack/react-router";
import { CONTACT, MAIN_NAV, PARTNERS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Spalte 1 – Kontakt */}
          <div>
            <div className="font-display text-xl font-bold">{CONTACT.company}</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/85">
              Holzbau & Restaurierung aus Esslingen. Seit über 80 Jahren für
              Qualität, Nachhaltigkeit und handwerkliche Präzision.
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic text-primary-foreground/90">
              <div>{CONTACT.street}</div>
              <div>{CONTACT.city}</div>
              <div className="pt-2">
                <a href={CONTACT.phoneHref} className="hover:underline">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <a href={CONTACT.emailHref} className="hover:underline">
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </div>

          {/* Spalte 2 – Schnellnavigation */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3 – Partner */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider">Partner</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              {PARTNERS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Spalte 4 – Rechtliches */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider">
              Rechtliches
            </div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <li>
                <Link to="/datenschutz" className="hover:underline">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:underline">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/80 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {CONTACT.company} · Holzbau &
            Restaurierung Esslingen
          </span>
          <span>Familienbetrieb in der dritten Generation</span>
        </div>
      </div>
    </footer>
  );
}
