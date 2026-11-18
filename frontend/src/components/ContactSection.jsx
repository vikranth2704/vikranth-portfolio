import React, { useState } from "react";
import { CheckCircle2, Mail, Phone, MessageCircle, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolioData";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to send message.");
      }

      setStatus("success");
      setFeedback(data.message || "Your message has been received.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err.message ||
          "Could not reach the backend server. You can also email directly."
      );
    }
  };

  return (
    <section id="contact" className="reveal-block py-20 border-t border-white/10">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 mb-2">
        Get In Touch
      </p>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-10">
        CONTACT.
      </h2>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {CONTACT_INFO.status}
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Share your project scope, target timeline, and key requirements. Direct inquiries and quick calls are welcome.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-200 transition"
            >
              <MessageCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{CONTACT_INFO.whatsappDisplay}</span>
            </a>

            <a
              href={CONTACT_INFO.callHref}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-200 transition"
            >
              <Phone className="w-4 h-4 text-red-400 shrink-0" />
              <span>{CONTACT_INFO.callDisplay}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-sm text-zinc-200 transition"
            >
              <Mail className="w-4 h-4 text-red-400 shrink-0" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Direct Inquiries
                </div>
                <div className="font-medium">{CONTACT_INFO.email}</div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5"
        >
          {status === "success" && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feedback}</span>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{feedback}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-red-500 outline-none text-sm text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 mb-2"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-red-500 outline-none text-sm text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 mb-2"
            >
              Message &amp; Project Scope
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me about your idea, timeline and what you need built..."
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-red-500 outline-none text-sm text-white resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-xs font-extrabold uppercase tracking-[0.18em] transition cursor-pointer"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
