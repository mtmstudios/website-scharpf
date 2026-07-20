import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Beobachtet den Hero-CTA und verwandelt ihn beim Herunterscrollen elegant
 * in ein seitliches Floating-Icon (Hammer + Fragezeichen) in der Website-Orange.
 */
function HammerQuestionIcon({ className }: { className?: string }) {
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
      {/* Hammerstiel */}
      <path d="M7.5 14.5 13 9" />
      {/* Hammerkopf */}
      <path d="m13 9 2-2a1.5 1.5 0 0 1 2.12 0l1.76 1.76a1.5 1.5 0 0 1 0 2.12l-2 2" />
      <path d="M11.5 10.5 13 9" />
      {/* Fragezeichen */}
      <path d="M5 19c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z" />
      <path d="M7 15V9" />
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
        // Sobald der Hero-CTA nicht mehr sichtbar ist, erscheint das Side-Icon
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
        "fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-primary text-primary-foreground shadow-xl shadow-black/20 transition-all duration-500 ease-out md:right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2",
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
        <HammerQuestionIcon className="h-6 w-6 md:h-7 md:w-7" />
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
