import { Link } from "@tanstack/react-router";
import { PRIMARY_CTA } from "@/lib/site";

/**
 * Fest am rechten Rand fixierter Primär-CTA. Nur ab Tablet sichtbar –
 * auf dem Smartphone übernimmt die MobileStickyBar diese Funktion.
 */
export function FloatingCta() {
  return (
    <Link
      to="/kontakt"
      className="group fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-2 rounded-l-lg bg-primary py-4 pl-4 pr-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:pr-5 md:flex"
      style={{ writingMode: "vertical-rl" }}
      aria-label={PRIMARY_CTA}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-90"
      >
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="tracking-wide">Kostenlose Projektberatung</span>
    </Link>
  );
}
