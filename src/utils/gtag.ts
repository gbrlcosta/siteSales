declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const QUOTE_REQUEST_URL = "https://wa.me/5562996001595";

export function trackQuoteRequestConversion() {
  window.gtag?.("event", "conversion", {
    send_to: "AW-18373262215",
  });
}
