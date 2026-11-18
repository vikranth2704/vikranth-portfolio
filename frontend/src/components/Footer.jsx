import React from "react";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-5 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-black text-zinc-200 tracking-tight">
            <span className="text-red-500">A</span>SWIN.
          </span>
          <span className="uppercase tracking-wider">FULL-STACK &amp; AI DEVELOPER</span>
        </div>

        <div className="flex flex-wrap items-center gap-5 uppercase tracking-wider font-semibold">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-zinc-200 transition">
              {link.label}
            </a>
          ))}
        </div>

        <div className="uppercase tracking-wider">
          © 2026 ASWIN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
