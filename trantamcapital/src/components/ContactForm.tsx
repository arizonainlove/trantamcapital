"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-white p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        />
        {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
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
        />
        {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
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
        />
        {errors.subject && <p className="text-xs text-error mt-1">{errors.subject}</p>}
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
        />
        {errors.message && <p className="text-xs text-error mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full text-sm font-bold text-white bg-primary hover:bg-primary-hover px-6 py-3 rounded transition-colors min-h-[44px] shadow-[0_2px_8px_rgba(232,73,16,0.3)] hover:shadow-[0_4px_12px_rgba(232,73,16,0.4)]"
      >
        Send Message
      </button>
    </form>
  );
}
