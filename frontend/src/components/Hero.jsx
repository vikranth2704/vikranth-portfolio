import React from "react";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { HERO_DATA } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="top" className="pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
          <p className="hero-anim text-xs font-bold uppercase tracking-[0.22em] text-red-400">
            {HERO_DATA.badge}
          </p>

          <h1 className="hero-anim text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
            {HERO_DATA.name}
          </h1>

          <p className="hero-anim text-sm sm:text-base font-extrabold uppercase tracking-[0.16em] text-zinc-200">
            FULL-STACK DEVELOPER <span className="text-red-500">/</span> AI BUILDER
          </p>

          <p className="hero-anim text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {HERO_DATA.tagline}
          </p>

          <div className="hero-anim flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-white text-xs font-extrabold uppercase tracking-[0.16em] border border-white/20 hover:border-red-500/60 shadow-[0_0_35px_rgba(220,38,38,0.28)] transition"
            >
              EXPLORE MY WORK
              <ArrowUpRight className="w-4 h-4 text-red-400" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#1a090b] hover:bg-[#2a0d11] text-zinc-200 text-xs font-extrabold uppercase tracking-[0.16em] border border-red-500/25 transition"
            >
              <MessageSquare className="w-4 h-4 text-red-400" />
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 hero-anim">
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-red-600/35 via-red-950/30 to-zinc-950 border border-red-500/30 shadow-[0_20px_70px_rgba(185,28,28,0.25)]">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/4.6] bg-zinc-900">
              <img
                src={HERO_DATA.portraitUrl}
                alt={HERO_DATA.portraitAlt}
                className="w-full h-full object-cover object-top contrast-110"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#070506] via-red-950/20 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-200 bg-black/65 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/10">
                <span>ASWIN</span>
                <span className="text-red-400">INDEPENDENT DEV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
