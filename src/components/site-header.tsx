import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { MAIN_NAV, LEISTUNGEN, PRIMARY_CTA } from "@/lib/site";

function Wordmark() {
  // Platzhalter für das offizielle Logo (Logo-Bilddatei wird separat eingepflegt).
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className="font-display text-2xl font-bold tracking-tight text-foreground">
        E. Scharpf
      </span>
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Holzbau · Restaurierung
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistOpen, setLeistOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Wordmark />

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) =>
            item.label === "Leistungen" ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                    {LEISTUNGEN.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="flex items-baseline gap-3 px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        <span className="font-mono text-xs text-primary">
                          {l.nr}
                        </span>
                        {l.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile-Toggle */}
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile-Navigation */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4">
            {MAIN_NAV.map((item) =>
              item.label === "Leistungen" ? (
                <div key={item.to}>
                  <button
                    type="button"
                    onClick={() => setLeistOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground"
                  >
                    Leistungen
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
                      className={cn("transition-transform", leistOpen && "rotate-180")}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {leistOpen && (
                    <div className="mb-2 ml-3 border-l border-border pl-4">
                      <Link
                        to="/leistungen"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-primary"
                      >
                        Alle Leistungen
                      </Link>
                      {LEISTUNGEN.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-foreground/80"
                        >
                          {l.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {PRIMARY_CTA}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
