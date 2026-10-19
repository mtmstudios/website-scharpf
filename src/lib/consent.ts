/**
 * Einwilligung (Cookie-Banner). Gespeichert wird nur die Wahl des Besuchers im
 * Browser. Ohne "all" wird kein Analytics-Skript geladen.
 */
export const CONSENT_KEY = "scharpf-cookie-consent";
export type ConsentChoice = "all" | "necessary";

export const CONSENT_CHANGED_EVENT = "scharpf-consent-changed";
export const OPEN_SETTINGS_EVENT = "scharpf-open-cookie-settings";

export function getConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Speicher blockiert: Wahl gilt nur für diese Sitzung
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }));
}

/** Öffnet den Cookie-Banner erneut (Widerruf / Änderung der Auswahl). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
