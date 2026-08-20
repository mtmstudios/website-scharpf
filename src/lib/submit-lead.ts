import { FORM_ENDPOINT } from "@/lib/site";

/** Quellen, die der n8n-Workflow unterscheidet. */
export type LeadQuelle = "kontaktformular" | "projekt-quiz" | "bewerbung";

/** UTM-Parameter aus der aktuellen URL, falls vorhanden. */
function utmParameter(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const such = new URLSearchParams(window.location.search);
  const treffer: Record<string, string> = {};
  for (const schluessel of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
  ]) {
    const wert = such.get(schluessel);
    if (wert) treffer[schluessel] = wert;
  }
  return treffer;
}

/**
 * Sendet eine Anfrage an den n8n-Webhook. `quelle` steuert im Workflow, in
 * welchen Sheet-Tab der Lead läuft und welche Benachrichtigung rausgeht.
 *
 * Seiten-URL und UTM-Parameter gehen mit, damit sich später nachvollziehen
 * lässt, über welche Kampagne eine Anfrage hereinkam – das ist beim aktuellen
 * Zustand der Google-Ads-Kampagnen der einzige Weg, Leads zuzuordnen.
 *
 * Solange FORM_ENDPOINT leer ist, wird nichts versendet – der Aufrufer
 * navigiert trotzdem zur Danke-Seite, damit der Funnel testbar bleibt.
 */
export async function submitLead(
  quelle: LeadQuelle,
  data: Record<string, string>,
): Promise<boolean> {
  if (!FORM_ENDPOINT) {
    console.warn("FORM_ENDPOINT nicht konfiguriert – Anfrage nicht versendet.");
    return false;
  }
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quelle,
      ...data,
      ...utmParameter(),
      seite: typeof window !== "undefined" ? window.location.href : "",
      gesendet: new Date().toISOString(),
    }),
  });
  return res.ok;
}
