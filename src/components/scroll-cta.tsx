import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import sawIcon from "@/assets/saw-icon.png.asset.json";

/**
 * Beobachtet den Hero-CTA und zeigt beim Herunterscrollen ein kleines
 * Säge-Icon als Floating-Button unten rechts in der Website-Orange.
 */

export function ScrollCta({
  heroCtaRef,
  to = "/kontakt",
  label = "Beratung anfordern",

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
        "fixed right-5 bottom-32 z-50 flex items-center gap-2 rounded-full bg-primary py-1.5 pl-1.5 pr-5 text-primary-foreground shadow-xl shadow-black/20 transition-all duration-500 ease-out md:bottom-8 md:right-8",
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-90 pointer-events-none",
        hovered && "scale-105"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary md:h-11 md:w-11">
        <img
          src={sawIcon.url}
          alt="Säge"
          className="h-6 w-6 md:h-7 md:w-7 invert"
        />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold">
        {label}
      </span>
    </Link>

  );
}
