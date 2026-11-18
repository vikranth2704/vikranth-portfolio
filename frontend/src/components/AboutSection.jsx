import React from "react";
import { ABOUT_DATA } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="reveal-block py-20">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 mb-2">
        {ABOUT_DATA.eyebrow}
      </p>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-8">
        {ABOUT_DATA.heading}
      </h2>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
          {ABOUT_DATA.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400 mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400 mb-3">
              Areas of Focus
            </h3>
            <ul className="space-y-1.5 text-sm text-zinc-300">
              {ABOUT_DATA.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
