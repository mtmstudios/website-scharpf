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
        "fixed right-5 bottom-32 z-50 flex items-center gap-3 rounded-full bg-primary text-primary-foreground shadow-xl shadow-black/20 transition-all duration-500 ease-out md:bottom-8 md:right-8",
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
        <img
          src={sawIcon.url}
          alt="Säge"
          className="h-7 w-7 md:h-8 md:w-8 invert"
        />
      </span>
      <span
        className={cn(
          "max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-out pr-0",
          hovered && "max-w-[12rem] pr-5"
        )}
      >
        {label}
      </span>

    </Link>
  );
}
