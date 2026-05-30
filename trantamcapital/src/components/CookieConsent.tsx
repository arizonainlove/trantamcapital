"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "protradevision_cookie_consent";

type ConsentChoice = "accepted" | "declined" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    if (!stored) {
      setVisible(true);
    }
    setConsent(stored);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-dark border-t border-dark-card shadow-xl"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-[1200px] mx-auto px-4 py-4 md:py-3 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <p className="text-sm text-text-light leading-relaxed flex-1">
          We use essential cookies for website functionality and analytics cookies
          to understand how visitors use our site.{" "}
          <a
            href="/privacy-policy"
            className="text-link hover:underline whitespace-nowrap"
            target="_blank"
          >
            Learn more
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm text-text-light hover:text-white px-4 py-2 rounded transition-colors min-h-[44px]"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm font-bold text-white bg-primary hover:bg-primary-hover px-5 py-2 rounded transition-colors min-h-[44px] shadow-[0_2px_8px_rgba(232,73,16,0.3)]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
