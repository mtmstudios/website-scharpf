import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Primärer Call-to-Action-Button (Orange). Führt standardmäßig zum
 * Kontaktformular. `variant="outline"` = heller Button auf dunklem/farbigem Grund.
 */
export function CtaButton({
  children,
  to = "/kontakt",
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  to?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
      : "border border-white/80 bg-transparent text-white hover:bg-white hover:text-foreground";

  return (
    <Link to={to} className={cn(base, styles, className)}>
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
    </Link>
  );
}
