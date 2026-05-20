"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiSearch, HiChevronDown } from "react-icons/hi";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "For Beginners", href: "/for-beginners" },
  { label: "Investment Analysis", href: "/investment-analysis" },
  {
    label: "Platforms",
    dropdown: [
      { label: "Forex Broker", href: "/forex-broker" },
      { label: "Crypto Exchange", href: "/crypto-exchange" },
      { label: "Binary Option", href: "/binary-option" },
    ],
  },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileMenuItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "For Beginners", href: "/for-beginners" },
  { label: "Investment Analysis", href: "/investment-analysis" },
  { label: "Forex Broker", href: "/forex-broker" },
  { label: "Crypto Exchange", href: "/crypto-exchange" },
  { label: "Binary Option", href: "/binary-option" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  return (
    <header className="bg-nav h-12 relative z-50">
      <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-extrabold text-text-primary tracking-tight">
            Trantam<span className="text-primary">Capital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group h-full"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button className="h-full px-3 text-sm text-text-primary hover:text-primary flex items-center gap-1 transition-colors">
                  {item.label}
                  <HiChevronDown
                    className={`text-xs transition-transform ${platformOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {platformOpen && (
                  <div className="absolute top-full left-0 bg-white border border-border rounded-md shadow-lg min-w-[180px] z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-text-primary hover:text-primary hover:bg-primary-light transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="h-full px-3 text-sm text-text-primary hover:text-primary flex items-center transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Search + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="w-11 h-11 flex items-center justify-center text-text-primary hover:text-primary transition-colors"
          >
            <HiSearch className="text-xl" />
          </button>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-lg z-50">
          <nav className="max-w-[1200px] mx-auto px-4 py-2">
            {mobileMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href!}
                className="block py-3 text-sm text-text-primary hover:text-primary border-b border-border last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
