import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { LEISTUNGEN } from "@/lib/site";

/**
 * Interaktive Leistungs-Sektion: 3D-Musterhaus (Strichzeichnung) als Kamera-
 * Bühne. Jede Leistung ist mit dem passenden Gebäudeteil verknüpft – Klick
 * fährt die "Kamera" (CSS-Transform) butterweich auf den Bereich. Beim
 * Scrollen kippt das Haus mit leichtem 3D-Parallax in die Szene.
 */

type FocusKey = (typeof LEISTUNGEN)[number]["to"];

// Kamera-Ziele in Prozent der Bildfläche + Zoomfaktor.
// Abgestimmt auf Musterhaus_3d (Carport links, Terrasse rechts,
// offener Dachstuhl links oben, Dach mit Gauben rechts oben).
const FOCUS: Record<string, { x: number; y: number; zoom: number }> = {
  "/holzbau": { x: 21, y: 60, zoom: 1.85 }, // Carport
  "/fassade": { x: 74, y: 66, zoom: 1.8 }, // Terrasse + Fassade
  "/dach": { x: 62, y: 26, zoom: 1.75 }, // Dachfläche + Gauben
  "/restaurierung": { x: 28, y: 23, zoom: 1.95 }, // offener Dachstuhl
  "/services": { x: 50, y: 50, zoom: 1 }, // Gesamtansicht
};

// Sichtbare Hotspot-Punkte auf dem Haus (Services = Gesamt, kein Punkt).
const HOTSPOTS: { to: string; x: number; y: number; label: string }[] = [
  { to: "/holzbau", x: 20, y: 56, label: "Holzbau & Konstruktion" },
  { to: "/fassade", x: 77, y: 68, label: "Fassade & Aussenbereiche" },
  { to: "/dach", x: 63, y: 19, label: "Dach" },
  { to: "/restaurierung", x: 28, y: 15, label: "Restaurierung & Sanierung" },
];

const CAMERA_EASE = "cubic-bezier(0.16, 1, 0.3, 1)"; // easeOutExpo-artig
const CAMERA_MS = 1100;

export function LeistungenHaus() {
  const [active, setActive] = useState<FocusKey | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Scroll-getriebene 3D-Neigung (Entrance + sanfter Parallax-Drift).
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const tilt = tiltRef.current;
    const section = sectionRef.current;
    if (!tilt || !section) return;
    if (reduce) {
      tilt.style.transform = "none";
      tilt.style.opacity = "1";
      return;
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const update = () => {
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      // 0 = Sektion erreicht Viewport-Unterkante · 1 = Sektion oben durchgelaufen
      const raw = clamp01((vh - rect.top) / (vh + rect.height));
      const e = easeOutCubic(clamp01(raw / 0.35)); // Entrance
      const d = clamp01((raw - 0.35) / 0.5); // Drift danach

      const ry = -12 * (1 - e) + 3 * d;
      const rx = 7 * (1 - e) - 1.5 * d;
      const ty = 48 * (1 - e) - 14 * d;
      const s = 0.94 + 0.06 * e;
      tilt.style.transform = `translateY(${ty}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
      tilt.style.opacity = String(Math.min(1, e * 1.6));
    };

    // rAF-Schleife statt Scroll-Listener: funktioniert unabhängig davon,
    // welcher Container tatsächlich scrollt (Lovable-Preview, Embeds, …).
    // Der IntersectionObserver pausiert die Schleife außerhalb des Viewports.
    let running = true;
    let visible = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update();
      },
      { rootMargin: "30% 0px 30% 0px" },
    );
    io.observe(section);

    const loop = () => {
      if (!running) return;
      if (visible) update();
      requestAnimationFrame(loop);
    };
    update();
    requestAnimationFrame(loop);

    return () => {
      running = false;
      io.disconnect();
    };
  }, []);

  const focus = active ? FOCUS[active] : FOCUS["/services"];
  const zoomed = focus.zoom > 1.01;

  return (
    <section
      ref={sectionRef}
      className="border-b border-border bg-secondary/50"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Unsere Leistungen
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Ein Haus, alle Gewerke: Wählen Sie eine Leistung – oder tippen Sie
          direkt auf einen Bereich des Hauses.
        </p>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          {/* Haus-Bühne */}
          <div style={{ perspective: "1400px" }}>
            <div ref={tiltRef} style={{ willChange: "transform, opacity" }}>
              <div className="relative aspect-[1061/683] overflow-hidden">
                {/* Kamera: zoomt/schwenkt auf den gewählten Gebäudeteil */}
                <div
                  className="absolute inset-0"
                  style={{
                    // Kamera-Formel (origin 0 0): Fokuspunkt f landet in der
                    // Mitte: translate% = 50 - zoom * f
                    transformOrigin: "0 0",
                    transform: `translate(${50 - focus.zoom * focus.x}%, ${50 - focus.zoom * focus.y}%) scale(${focus.zoom})`,
                    transition: `transform ${CAMERA_MS}ms ${CAMERA_EASE}`,
                    willChange: "transform",
                  }}
                >
                  <img
                    src="/illustrationen/musterhaus-3d.svg"
                    alt="3D-Zeichnung eines Holzhauses mit Carport, Terrasse, Gauben und offenem Dachstuhl"
                    className="h-full w-full select-none"
                    draggable={false}
                  />
                  {/* Hotspots – wandern mit dem Bild, bleiben aber gleich groß */}
                  {HOTSPOTS.map((h) => {
                    const isActive = active === h.to;
                    return (
                      <button
                        key={h.to}
                        type="button"
                        aria-label={h.label}
                        title={h.label}
                        onClick={() =>
                          setActive(isActive ? null : (h.to as FocusKey))
                        }
                        className="group absolute z-10 cursor-pointer"
                        style={{
                          left: `${h.x}%`,
                          top: `${h.y}%`,
                          transform: `translate(-50%, -50%) scale(${1 / focus.zoom})`,
                          transition: `transform ${CAMERA_MS}ms ${CAMERA_EASE}`,
                        }}
                      >
                        <span className="relative flex h-6 w-6 items-center justify-center sm:h-7 sm:w-7">
                          {!isActive && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                          )}
                          <span
                            className={cn(
                              "relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-primary shadow-md transition-transform duration-300 sm:h-4 sm:w-4",
                              isActive
                                ? "scale-125 ring-4 ring-primary/30"
                                : "group-hover:scale-125",
                            )}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Zoom zurücksetzen */}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className={cn(
                    "absolute bottom-3 right-3 z-20 inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/60",
                    zoomed
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0",
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                  Gesamtansicht
                </button>
              </div>
            </div>
          </div>

          {/* Leistungs-Liste */}
          <div className="flex flex-col gap-3">
            {LEISTUNGEN.map((l) => {
              const isActive = active === l.to;
              return (
                <div
                  key={l.to}
                  className={cn(
                    "overflow-hidden rounded-2xl border-2 bg-card transition-all duration-300",
                    isActive
                      ? "border-primary/60 shadow-lg"
                      : "border-border hover:border-primary/40",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? null : l.to)}
                    aria-expanded={isActive}
                    className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={cn(
                        "font-mono text-sm font-bold transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {l.nr}
                    </span>
                    <span className="font-display flex-1 text-lg font-bold text-card-foreground">
                      {l.title}
                    </span>
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
                      className={cn(
                        "shrink-0 text-primary transition-transform duration-300",
                        isActive && "rotate-180",
                      )}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    // inert: eingeklappte Inhalte nicht fokussier-/vorlesbar
                    inert={!isActive || undefined}
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {l.teaser}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {l.bullets.map((b) => (
                            <li
                              key={b}
                              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={l.to}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                          Zur Leistung
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
