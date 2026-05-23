"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]{2,}\.[a-zA-Z]{2,}$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!form.consent) {
      newErrors.consent = "You must agree to the Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-white p-8 text-center" role="status">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-sm text-text-secondary">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-1.5">
          Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
            errors.name ? "border-error" : "border-border"
          }`}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="text-xs text-error mt-1" role="alert">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-1.5">
          Email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
            errors.email ? "border-error" : "border-border"
          }`}
          placeholder="your@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className="text-xs text-error mt-1" role="alert">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-1.5">
          Subject <span className="text-error">*</span>
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
            errors.subject ? "border-error" : "border-border"
          }`}
          placeholder="How can we help?"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && <p id="subject-error" className="text-xs text-error mt-1" role="alert">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-1.5">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full px-4 py-3 rounded border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y ${
            errors.message ? "border-error" : "border-border"
          }`}
          placeholder="Your message..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="text-xs text-error mt-1" role="alert">{errors.message}</p>}
      </div>

      {/* Consent checkbox */}
      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => {
              handleChange("consent", e.target.checked ? "true" : "");
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            className="mt-1 shrink-0 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <span className="text-xs text-text-secondary leading-relaxed">
            I consent to TrantamCapital collecting my name and email for the purpose of responding
            to my inquiry. View our{" "}
            <a href="/privacy-policy" className="text-link hover:underline" target="_blank">
              Privacy Policy
            </a>
            . <span className="text-error">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-error mt-1" role="alert">{errors.consent}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="bg-error/10 border border-error rounded p-3 text-sm text-error" role="alert">
          Failed to send message. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full text-sm font-bold text-white bg-primary hover:bg-primary-hover disabled:bg-primary/60 disabled:cursor-not-allowed px-6 py-3 rounded transition-colors min-h-[44px] shadow-[0_2px_8px_rgba(232,73,16,0.3)] hover:shadow-[0_4px_12px_rgba(232,73,16,0.4)]"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
