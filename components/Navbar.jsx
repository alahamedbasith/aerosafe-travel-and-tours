"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#journey", label: "Journey" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass border-b border-outline/60 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container mx-auto h-20">
        <a href="#top" className="flex items-center" aria-label="Aerosafe Travel & Tourism — Home">
          <img
            src="/logo.png"
            alt="Aerosafe Travel & Tourism"
            className="h-9 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-semibold text-sm uppercase tracking-wide text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
            <a
              href="#contact"
              className="bg-primary-dark text-white font-body font-bold text-sm uppercase tracking-wide px-6 py-3 rounded hover:bg-primary transition-colors"
            >
              Inquire Now
            </a>
        </nav>

        <button
          className="md:hidden text-navy"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-surface border-t border-outline px-margin-mobile py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body font-semibold text-on-surface-variant hover:text-primary py-3 border-b border-outline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-primary-dark text-white font-body font-bold text-center uppercase tracking-wide px-6 py-3 rounded mt-3"
          >
            Inquire Now
          </a>
        </nav>
      )}
    </header>
  );
}
