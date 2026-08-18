declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const QUOTE_REQUEST_URL = "https://wa.me/5562996001595";

export function trackQuoteRequestConversion(url: string) {
  const openWhatsApp = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!window.gtag) {
    openWhatsApp();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18373262215/Aq7ZCCHwONwcEIf3hrlE",
    value: 1.0,
    currency: "BRL",
    event_callback: openWhatsApp,
    event_timeout: 2000,
  });
}