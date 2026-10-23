import { getConsent } from "@/lib/consent";

/** Google Analytics 4 – Datenstream „Scharpf Holzbau“. */
export const GA_MEASUREMENT_ID = "G-ZGEEKRKRS4";

type GtagArgs = unknown[];
declare global {
  interface Window {
    dataLayer: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

let geladen = false;

function gtag(...args: GtagArgs) {
  window.dataLayer = window.dataLayer || [];
  // gtag.js erwartet das arguments-Objekt, kein Array
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments as unknown as GtagArgs);
}

/** Lädt Google Analytics – nur nach Einwilligung, nur einmal. */
export function loadAnalytics() {
  if (typeof window === "undefined" || geladen || getConsent() !== "all") return;
  geladen = true;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  // Seitenaufrufe sendet der Router-Tracker (die Seite ist eine SPA).
  gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

/** Beim Widerruf: Messung stoppen und Analytics-Cookies löschen. */
export function stopAnalytics() {
  if (typeof window === "undefined") return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  const domaene = window.location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const d of [window.location.hostname, `.${domaene}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      }
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  }
}

export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || !geladen || getConsent() !== "all") return;
  window.gtag?.("event", name, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
