"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !consent) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <div className="max-w-md mx-auto">
      {status === "success" ? (
        <p className="text-sm text-white font-semibold" role="status">
          Thank you for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex gap-2">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-white/50 border border-transparent min-h-[44px]"
              required
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "newsletter-error" : undefined}
            />
            <button
              type="submit"
              className="text-sm font-bold text-primary bg-white hover:bg-gray-100 px-6 py-3 rounded transition-colors min-h-[44px] shrink-0"
            >
              Subscribe
            </button>
          </div>
          <label className="flex items-start gap-2 mt-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => { setConsent(e.target.checked); if (status === "error") setStatus("idle"); }}
              className="mt-0.5 shrink-0 w-4 h-4 rounded border-white/30 bg-white/10 focus:ring-white/50"
            />
            <span className="text-xs text-white/70 leading-relaxed">
              I agree to receive emails and accept the{" "}
              <a href="/privacy-policy" className="text-white/90 hover:text-white underline" target="_blank">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {status === "error" && (
            <p id="newsletter-error" className="text-xs text-white/90 mt-1.5 text-left" role="alert">
              Please enter a valid email and agree to the Privacy Policy.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
