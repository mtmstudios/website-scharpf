import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Primärer Call-to-Action-Button (Orange). Führt standardmäßig zum
 * Kontaktformular. `variant="outline"` = heller Button auf dunklem/farbigem Grund.
 *
 * Ziele, die mit "http" oder "mailto:"/"tel:" beginnen, werden als echter
 * <a>-Tag gerendert – der Router-Link von TanStack kann externe Adressen
 * (Calendly, VELUX-Konfigurator) nicht auflösen.
 */
export function CtaButton({
  children,
  to = "/kontakt",
  search,
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  to?: string;
  search?: Record<string, string>;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const istExtern = /^(https?:|mailto:|tel:)/.test(to);
  const istSprungmarke = to.startsWith("#");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
      : "border border-white/80 bg-transparent text-white hover:bg-white hover:text-foreground";

  const inhalt = (
    <>
      {children}
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </>
  );

  if (istExtern || istSprungmarke) {
    return (
      <a
        href={to}
        {...(istExtern
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={cn(base, styles, className)}
      >
        {inhalt}
      </a>
    );
  }

  return (
    <Link to={to} search={search as never} className={cn(base, styles, className)}>
      {inhalt}
    </Link>
  );
}
