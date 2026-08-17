"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/nav";

export default function Nav() {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-tedx-black text-white">
      <div className="container-page flex items-center justify-between h-24">
        <Link href="/" className="flex items-center gap-2 font-bold text-3xl md:text-4xl tracking-tight -ml-3 md:-ml-4">
          <span className="bg-tedx-red px-2.5 py-1">TEDx</span>
          <span>Southlake</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDesktop(item.label)}
              onMouseLeave={() => item.children && setOpenDesktop(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:text-tedx-red transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:text-tedx-red transition-colors flex items-center gap-1"
                  aria-expanded={openDesktop === item.label}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              )}
              {item.children && openDesktop === item.label && (
                <div className="absolute left-0 top-full min-w-[240px] bg-white text-tedx-black shadow-xl py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-medium hover:bg-gray-100 hover:text-tedx-red transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/2026-conference"
            className="bg-tedx-red hover:bg-red-700 transition-colors text-white text-sm font-bold uppercase tracking-wide px-5 py-2.5"
          >
            Buy Tickets
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
                  onClick={() =>
                    setMobileSection((s) => (s === item.label ? null : item.label))
                  }
                  aria-expanded={mobileSection === item.label}
                >
                  {item.label}
                  <span>{mobileSection === item.label ? "−" : "+"}</span>
                </button>
              )}
              {item.children && mobileSection === item.label && (
                <div className="bg-white/5 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-10 py-2.5 text-sm text-gray-300 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/2026-conference"
            onClick={() => setMobileOpen(false)}
            className="block m-6 bg-tedx-red text-white text-center font-bold uppercase tracking-wide px-5 py-3"
          >
            Buy Tickets
          </Link>
        </nav>
      )}
    </header>
  );
}
