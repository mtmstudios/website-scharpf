import { useEffect, useState } from "react";

const STORAGE_KEY = "scharpf-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function decide(choice: "all" | "necessary") {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 px-4 md:bottom-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-2xl sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Diese Website verwendet Cookies, um Ihr Nutzungserlebnis zu verbessern.
          Sie können Ihre Einstellungen jederzeit anpassen.
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
