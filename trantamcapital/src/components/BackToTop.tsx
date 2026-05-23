"use client";

import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:bg-primary-hover ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <HiArrowUp className="text-lg" />
    </button>
  );
}
