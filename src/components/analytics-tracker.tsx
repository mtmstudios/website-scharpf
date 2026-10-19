import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { loadAnalytics, stopAnalytics, trackEvent, trackPageView } from "@/lib/analytics";
import { CONSENT_CHANGED_EVENT, getConsent, type ConsentChoice } from "@/lib/consent";

/**
 * Misst Seitenaufrufe und Kontakt-Klicks (Telefon, E-Mail, WhatsApp, Termin) –
 * ausschließlich nach Einwilligung im Cookie-Banner.
 */
export function AnalyticsTracker() {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setConsent(getConsent());
    const onChange = (e: Event) => {
      const choice = (e as CustomEvent<ConsentChoice>).detail;
      setConsent(choice);
      if (choice === "all") loadAnalytics();
      else stopAnalytics();
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  // Seitenaufruf bei Einwilligung und bei jedem Seitenwechsel
  useEffect(() => {
    if (consent !== "all") return;
    loadAnalytics();
    trackPageView(pathname);
  }, [consent, pathname]);

  // Klicks auf Kontakt-Links
  useEffect(() => {
    if (consent !== "all") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackEvent("phone_click", { link_url: href });
      else if (href.startsWith("mailto:")) trackEvent("mail_click", { link_url: href });
      else if (href.includes("wa.me")) trackEvent("whatsapp_click", { link_url: href });
      else if (href.includes("calendly.com")) trackEvent("termin_click", { link_url: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  return null;
}
