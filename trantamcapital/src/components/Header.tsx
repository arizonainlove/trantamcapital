"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiMenu, HiX, HiSearch, HiChevronDown } from "react-icons/hi";
import menuData from "@/data/menu.json";

type MenuItem = { label: string; href?: string; children?: MenuItem[] };
const menuItems: MenuItem[] = menuData;

const mobileMenuItems = menuItems.flatMap((item) =>
  item.children
    ? item.children.map((child) => ({ label: child.label, href: child.href! }))
    : [{ label: item.label, href: item.href! }]
);

const searchablePages = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "For Beginners", href: "/for-beginners" },
  { label: "Investment Analysis", href: "/investment-analysis" },
  { label: "Forex Broker", href: "/forex-broker" },
  { label: "Forex Broker A", href: "/forex-broker/broker-a" },
  { label: "Forex Broker B", href: "/forex-broker/broker-b" },
  { label: "Forex Broker C", href: "/forex-broker/broker-c" },
  { label: "Crypto Exchange", href: "/crypto-exchange" },
  { label: "Exchange A", href: "/crypto-exchange/exchange-a" },
  { label: "Exchange B", href: "/crypto-exchange/exchange-b" },
  { label: "Exchange C", href: "/crypto-exchange/exchange-c" },
  { label: "Binary Option", href: "/binary-option" },
  { label: "Platform A", href: "/binary-option/platform-a" },
  { label: "Prop Trading Firm", href: "/proprietary-trading-firm" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    if (searchOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [searchOpen]);

  const filteredPages = searchQuery
    ? searchablePages.filter((page) =>
        page.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchablePages;

  return (
    <header className="bg-nav h-12 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo/logo.png"
            alt="ProTradeVision"
            width={132}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full">
          {menuItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group h-full"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
                onFocus={() => setPlatformOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setPlatformOpen(false);
                  }
                }}
              >
                <button
                  className="h-full px-3 text-sm font-bold text-text-primary hover:text-primary flex items-center gap-1 transition-colors"
                  aria-haspopup="true"
                  aria-expanded={platformOpen}
                >
                  {item.label}
                  <HiChevronDown
                    className={`text-xs transition-transform ${platformOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {platformOpen && (
                  <div
                    className="absolute top-full left-0 bg-white border border-border rounded-md shadow-lg min-w-[180px] z-50"
                    role="menu"
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href || sub.label}
                        href={sub.href!}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-text-primary hover:text-primary hover:bg-primary-light transition-colors"
                        aria-current={pathname === sub.href ? "page" : undefined}
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
                className="h-full px-3 text-sm font-bold text-text-primary hover:text-primary flex items-center transition-colors"
                aria-current={pathname === item.href ? "page" : undefined}
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
            onClick={() => setSearchOpen(true)}
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

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <HiSearch className="text-xl text-text-light shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 outline-none text-sm text-text-primary placeholder:text-text-light"
              />
              <button
                aria-label="Close search"
                className="w-11 h-11 flex items-center justify-center text-text-light hover:text-text-primary"
                onClick={() => setSearchOpen(false)}
              >
                <HiX className="text-xl" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {filteredPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="block px-4 py-3 text-sm text-text-primary hover:bg-primary-light hover:text-primary transition-colors border-b border-border last:border-0"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          {/* Overlay backdrop — click to close */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 w-1/2 bg-white shadow-xl z-50 overflow-y-auto max-h-screen">
            <div className="flex items-center justify-between px-4 h-12 border-b border-border">
              <span className="text-sm font-bold text-text-primary">Menu</span>
              <button
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center text-text-primary hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                <HiX className="text-xl" />
              </button>
            </div>
            <nav className="px-4 py-2">
              {mobileMenuItems.map((item) => (
                <Link
                  key={item.href || item.label}
                  href={item.href!}
                  className="block py-2.5 text-sm text-text-primary hover:text-primary border-b border-border last:border-0 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
