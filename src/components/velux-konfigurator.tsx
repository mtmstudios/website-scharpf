import { useState } from "react";
import { EXTERNE_LINKS } from "@/lib/site";

/**
 * VELUX Dachfenster-Konfigurator, eingebettet mit der Partnernummer der
 * E. Scharpf GmbH.
 *
 * Der Konfigurator wird erst nach ausdrücklichem Klick geladen: Bis dahin
 * geht keine Anfrage an velux.de und es wird keine IP übertragen. Auf der
 * alten Seite lag er aus demselben Grund hinter dem Cookie-Blocker.
 */
export function VeluxKonfigurator() {
  const [geladen, setGeladen] = useState(false);

  if (geladen) {
    return (
      <iframe
        src={EXTERNE_LINKS.veluxKonfigurator}
        title="VELUX Dachfenster-Konfigurator"
        className="h-[800px] w-full rounded-2xl border border-border bg-background"
        loading="lazy"
      />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
      <h3 className="font-display text-2xl font-bold text-foreground">
        VELUX Dachfenster-Konfigurator
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        Stellen Sie sich Ihr Dachfenster selbst zusammen – Größe, Verglasung,
        Rollladen und Zubehör. Der Konfigurator wird von VELUX bereitgestellt.
        Beim Laden werden Daten an VELUX übertragen.
      </p>
      <button
        type="button"
        onClick={() => setGeladen(true)}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Konfigurator starten
      </button>
    </div>
  );
}
