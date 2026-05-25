"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error-email" | "error-consent" | "error-server";

const STATUS_MESSAGE: Record<FormStatus, string | null> = {
  idle: null,
  loading: null,
  success: null,
  "error-email": "Please enter a valid email address.",
  "error-consent": "Please agree to the Privacy Policy.",
  "error-server": "Something went wrong. Please try again later.",
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const errorMsg = STATUS_MESSAGE[status];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error-email");
      return;
    }
    if (!consent) {
      setStatus("error-consent");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(data?.error === "Invalid email" ? "error-email" : "error-server");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error-server");
    }
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
                if (errorMsg) setStatus("idle");
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-white/50 border border-transparent min-h-[44px]"
              required
              aria-invalid={status === "error-email"}
              aria-describedby={status === "error-email" ? "newsletter-error" : undefined}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="text-sm font-bold text-primary bg-white hover:bg-gray-100 px-6 py-3 rounded transition-colors min-h-[44px] shrink-0 disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <label className="flex items-start gap-2 mt-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => { setConsent(e.target.checked); if (errorMsg) setStatus("idle"); }}
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
          {errorMsg && (
            <p id="newsletter-error" className="text-xs text-white/90 mt-1.5 text-left" role="alert">
              {errorMsg}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
