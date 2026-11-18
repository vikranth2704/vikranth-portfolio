import React from "react";
import { SKILLS_DATA, TECH_STACK_LIST } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="reveal-block py-20 border-t border-white/10">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 mb-2">
        What I Work With
      </p>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-10">
        TECHNICAL SKILLS.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {SKILLS_DATA.map((skill) => (
          <div
            key={skill.title}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white">{skill.title}</h3>
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-red-300 border border-red-500/20">
                {skill.proficiency}
              </span>
            </div>
            <p className="text-xs font-mono tracking-wider text-zinc-400">
              {skill.tools}
            </p>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-1">
          Languages &amp; Tools
        </p>
        <h3 className="text-2xl font-black tracking-tight text-white mb-5">
          MY TECH STACK.
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {TECH_STACK_LIST.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 hover:bg-red-950/40 text-zinc-200 border border-white/10 hover:border-red-500/40 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
