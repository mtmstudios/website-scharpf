import { useEffect, useState } from "react";
import { getConsent, OPEN_SETTINGS_EVENT, setConsent, type ConsentChoice } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    // Footer-Link „Cookie-Einstellungen“ öffnet den Banner erneut
    const open = () => setVisible(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  function decide(choice: ConsentChoice) {
    setConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 px-4 md:bottom-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-2xl sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Wir möchten mit Google Analytics anonymisiert auswerten, wie die Website
          genutzt wird. Das geschieht nur mit Ihrer Einwilligung. Sie können sie
          jederzeit über „Cookie-Einstellungen“ im Seitenfuß widerrufen.
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => decide("all")}
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => decide("necessary")}
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => decide("necessary")}
            className="rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}
