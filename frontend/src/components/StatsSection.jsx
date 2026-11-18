import React from "react";
import { STATS_DATA } from "../data/portfolioData";

export default function StatsSection() {
  return (
    <section
      aria-label="Client results"
      className="reveal-block py-12 border-y border-white/10"
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 mb-6">
        Client Results
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {STATS_DATA.map((item) => (
          <div
            key={item.label}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
          >
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              <span
                className="stat-counter"
                data-target={item.target}
                data-suffix={item.suffix}
              >
                0{item.suffix}
              </span>
            </div>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
