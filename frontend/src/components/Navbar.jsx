import React from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070506]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-black tracking-tight text-white">
          <span className="text-red-500">A</span>SWIN.
        </a>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-red-600/15 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/40 transition"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
