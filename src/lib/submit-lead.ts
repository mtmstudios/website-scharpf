import { FORM_ENDPOINT } from "@/lib/site";

/**
 * Sendet eine Anfrage (Kontaktformular oder Projekt-Quiz) an den
 * n8n-Webhook. `quelle` unterscheidet die Herkunft im Workflow.
 *
 * Solange FORM_ENDPOINT leer ist, wird nichts versendet – der Aufrufer
 * navigiert trotzdem zur Danke-Seite, damit der Funnel testbar bleibt.
 */
export async function submitLead(
  quelle: "kontaktformular" | "projekt-quiz",
  data: Record<string, string>,
): Promise<boolean> {
  if (!FORM_ENDPOINT) {
    console.warn("FORM_ENDPOINT nicht konfiguriert – Anfrage nicht versendet.");
    return false;
  }
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quelle, ...data, gesendet: new Date().toISOString() }),
  });
  return res.ok;
}
