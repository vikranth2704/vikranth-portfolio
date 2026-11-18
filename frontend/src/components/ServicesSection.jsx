import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";

export default function ServicesSection() {
  return (
    <section id="services" className="reveal-block py-20 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 mb-2">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            SERVICES &amp; PRICING.
          </h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-sm">
          Final pricing depends on features, complexity, timeline, and project scope.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES_DATA.map((service) => (
          <article
            key={service.number}
            className="group p-6 rounded-2xl bg-white/[0.03] hover:bg-red-950/20 border border-white/10 hover:border-red-500/40 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-sm font-bold text-red-400">
                  {service.number}
                </span>
                <div className="flex items-center gap-2">
                  {service.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30">
                      {service.badge}
                    </span>
                  )}
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-extrabold uppercase tracking-[0.14em] text-red-300">
              {service.price}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
