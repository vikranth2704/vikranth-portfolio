import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "transform",
      });

      gsap.utils.toArray(".stat-counter").forEach((el) => {
        const target = Number(el.getAttribute("data-target") || 0);
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.value)}${suffix}`;
          },
        });
      });

      gsap.utils.toArray(".reveal-block").forEach((block) => {
        gsap.from(block, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen hero-glow text-zinc-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5">
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
