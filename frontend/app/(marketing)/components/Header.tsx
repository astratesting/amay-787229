"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-white/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-text">Amay</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-text-light hover:text-primary font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-text-light hover:text-primary font-medium transition-colors"
          >
            Pricing
          </a>
          <Link
            href="/signin"
            className="text-text-light hover:text-primary font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-primary px-5 py-2.5 text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden text-text"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background-white px-6 py-4 space-y-4">
          <a
            href="#features"
            className="block text-text-light hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-text-light hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <Link
            href="/signin"
            className="block text-text-light hover:text-primary font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="block rounded-xl bg-primary px-5 py-2.5 text-white font-semibold text-center hover:bg-primary-dark transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
