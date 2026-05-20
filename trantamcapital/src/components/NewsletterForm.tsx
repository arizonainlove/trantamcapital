"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("success");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {status === "success" ? (
        <p className="text-sm text-white font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-white/50 border border-transparent min-h-[44px]"
            required
          />
          <button
            type="submit"
            className="text-sm font-bold text-primary bg-white hover:bg-gray-100 px-6 py-3 rounded transition-colors min-h-[44px] shrink-0"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
