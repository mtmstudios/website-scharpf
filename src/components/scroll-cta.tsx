import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Beobachtet den Hero-CTA und zeigt beim Herunterscrollen ein kleines
 * Säge-Icon als Floating-Button unten rechts in der Website-Orange.
 */
function SawIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Sägeblatt-Zähne */}
      <path d="M4 6h11" />
      <path d="M15 6v8l-3-2-3 2-3-2-3 2V6" />
      {/* Sägegriff */}
      <path d="M4 14h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4" />
      <path d="M12 16h7a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-7" />
    </svg>
  );
}

export function ScrollCta({
  heroCtaRef,
  to = "/kontakt",
  label = "Kostenlose Projektberatung anfordern",
}: {
  heroCtaRef: React.RefObject<HTMLElement | null>;
  to?: string;
  label?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = heroCtaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sobald der Hero-CTA nicht mehr sichtbar ist, erscheint der Floating-Button
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [heroCtaRef]);

  return (
    <Link
      to={to}
      aria-label={label}
      className={cn(
        "fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-primary text-primary-foreground shadow-xl shadow-black/20 transition-all duration-500 ease-out md:right-8",
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-90 pointer-events-none"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-all duration-500 ease-out md:h-14 md:w-14",
          hovered && "scale-105"
        )}
      >
        <SawIcon className="h-6 w-6 md:h-7 md:w-7" />
      </span>
      <span
        className={cn(
          "max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-out pr-0",
          hovered && "max-w-[16rem] pr-5"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
