"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiSparkles, HiXMark } from "react-icons/hi2";
import {
  TbCheck,
  TbArrowRight,
  TbBrandX,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

// ---------- Data ----------
const expectations = [
  {
    num: "01",
    title: "Early Access to LegacyLens",
    desc: "Be among the first organisations in Africa to receive your AI-generated Lens Health Score before public launch.",
  },
  {
    num: "02",
    title: "Free Founding Audit",
    desc: "The first 50 organisations on the waitlist receive a complimentary LegacyLens audit valued at ₦500,000.",
  },
  {
    num: "03",
    title: "Founder Briefing Session",
    desc: "A direct session with our CEO to walk you through your score and the priority action roadmap.",
  },
  {
    num: "04",
    title: "Locked Founding Pricing",
    desc: "Waitlist members lock in our founding-tier pricing, guaranteed not to increase for 12 months post-launch.",
  },
];

const sectors = [
  "Corporate / Enterprise",
  "NGO / Non-Profit",
  "Government / MDA",
  "Startup / Scale-up",
  "Educational Institution",
  "Healthcare Organisation",
  "Consulting / Professional Services",
  "Financial Services",
  "Other",
];

const challenges = [
  "Brand inconsistency across channels",
  "Operational drift and team misalignment",
  "No clear way to measure institutional health",
  "Preparing for investor or donor due diligence",
  "Post-rebrand or restructuring clarity",
  "Scaling without breaking existing systems",
];

const socials = [
  { label: "X", icon: <TbBrandX size={18} />, href: "https://www.x.com/spurwiz" },
  { label: "Instagram", icon: <TbBrandInstagram size={18} />, href: "https://www.instagram.com/spurwiz" },
  { label: "LinkedIn", icon: <TbBrandLinkedin size={18} />, href: "https://www.linkedin.com/company/officialsdgltd" },
];

// ---------- Main Component ----------
export default function WaitlistPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    sector: "",
    challenge: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const step1Ready = form.name && form.email && form.organisation && form.role;
  const step2Ready = form.sector;

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      organisation: "",
      role: "",
      sector: "",
      challenge: "",
      note: "",
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ---------- FIXED BACKGROUND (NO SCROLL) ---------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/skystars.jpg"
          alt=""
          className="w-full h-full object-cover object-top opacity-55"
        />
        <div className="absolute inset-0 bg-[#060d1f]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#103fd5]/30 via-transparent to-transparent" />
      </div>

      {/* ---------- MAIN PAGE (NO SCROLL) ---------- */}
      <div className="relative z-10 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <Link href="/" className="relative block w-28 h-9">
            <Image
              src="/logo/icon.png"
              alt="Spur Wiz"
              fill
              className="object-contain object-left"
            />
          </Link>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Waitlist Open
          </div>
        </header>

        <main className="flex-1 overflow-y-auto md:overflow-y-hidden">
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-white/60 bg-white/5 border border-white/10 rounded-full py-1.5 px-3.5 w-fit">
                  <HiSparkles className="text-amber-400 text-[11px]" />
                  LegacyLens · Early Access
                </span>

                {/* Headline */}
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                    <span className="text-white">Know Your Score.</span>
                    <br />
                    <span className="text-amber-400">Fix What&apos;s Breaking.</span>
                  </h1>
                  <p className="text-[15px] leading-relaxed text-white/50 max-w-lg">
                    LegacyLens is Africa&apos;s first AI-powered organisational health scoring platform.
                    We measure your brand consistency, operational efficiency, and cultural resonance.
                    and give you a score from 0 to 100.
                  </p>
                  <p className="text-[13px] leading-relaxed text-white/30 max-w-md">
                    Join the waitlist to secure founding access, free audit credits, and locked
                    pricing before our Q2 2026 launch.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="group bg-amber-400 hover:bg-amber-500 text-[#060d1f] font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-2 text-lg shadow-xl"
                >
                  Join the Waitlist
                  <TbArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column - CTA Button to Open Popup */}
              <div className="flex items-start justify-center md:justify-end">
                {/* What you receive */}
                <div className="space-y-4">
                  <p className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-white/30">
                    What waitlist members receive
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {expectations.map((item) => (
                      <div
                        key={item.num}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5"
                      >
                        <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400/50">
                          {item.num}
                        </span>
                        <p className="text-[13px] font-semibold text-white/90">{item.title}</p>
                        <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-around text-center py-5 border-t border-white/10 text-xs text-white/20 shrink-0">
          <p className="hidden md:block">
            © {new Date().getFullYear()} Spur-Wiz Dynasty Global Limited ·{" "}
            <Link href="/legacy" className="text-white/40 hover:text-white/60 transition">
              LegacyLens
            </Link>{" "}
            ·{" "}
            <Link href="#" className="text-white/40 hover:text-white/60 transition">
              Privacy Policy
            </Link>
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
                  {s.icon}
                </span>
                {s.label}
              </Link>
            ))}
          </div>
        </footer>
      </div>

      {/* ---------- POPUP (MODAL) WITH FORM ---------- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#0b1228] border border-white/20 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
            >
              <HiXMark size={24} />
            </button>

            {!submitted ? (
              <>
                {/* Progress bar */}
                <div className="h-1 bg-white/10">
                  <div
                    className="h-full bg-amber-400 transition-all duration-500"
                    style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                  />
                </div>

                <div className="p-6">
                  {/* Step indicators */}
                  <div className="flex items-center gap-2 mb-6">
                    {([1, 2, 3] as const).map((s, i) => (
                      <React.Fragment key={s}>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${step > s
                              ? "bg-amber-400 text-[#060d1f]"
                              : step === s
                                ? "border-2 border-amber-400 text-amber-400 bg-transparent"
                                : "border border-white/20 text-white/30 bg-transparent"
                            }`}
                        >
                          {step > s ? <TbCheck size={12} strokeWidth={3} /> : s}
                        </div>
                        {i < 2 && (
                          <div
                            className={`flex-1 h-px transition-colors ${step > s ? "bg-amber-400/40" : "bg-white/10"
                              }`}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <h2 className="text-xl font-bold text-white">Tell us about you</h2>
                          <p className="text-sm text-white/40">Step 1 of 3, Your basic details</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            Full name <span className="text-amber-400">*</span>
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={update}
                            placeholder="Alexander Adeyemi"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            Work email <span className="text-amber-400">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={update}
                            placeholder="alexander@yourorg.com"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            Organisation name <span className="text-amber-400">*</span>
                          </label>
                          <input
                            name="organisation"
                            value={form.organisation}
                            onChange={update}
                            placeholder="Spur-Wiz Dynasty Global"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            Your role / title <span className="text-amber-400">*</span>
                          </label>
                          <input
                            name="role"
                            value={form.role}
                            onChange={update}
                            placeholder="Founder & CEO"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!step1Ready}
                          className="w-full flex items-center justify-center gap-2 bg-[#103FD5] text-white font-bold py-3 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition"
                        >
                          Continue <TbArrowRight size={16} />
                        </button>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <div>
                          <h2 className="text-xl font-bold text-white">About your organisation</h2>
                          <p className="text-sm text-white/40">Step 2 of 3, Sector and challenge</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            What sector are you in? <span className="text-amber-400">*</span>
                          </label>
                          <select
                            name="sector"
                            value={form.sector}
                            onChange={update}
                            className="w-full rounded-xl px-4 py-3 text-sm text-white bg-white/5 border border-white/10 focus:border-white/30 outline-none transition"
                            required
                          >
                            <option value="">Select your sector</option>
                            {sectors.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold tracking-wide uppercase text-white/50 mb-3">
                            Biggest challenge{" "}
                            <span className="font-normal normal-case text-white/30">
                              (select one)
                            </span>
                          </p>
                          <div className="space-y-2">
                            {challenges.map((c) => {
                              const active = form.challenge === c;
                              return (
                                <label
                                  key={c}
                                  className={`flex items-center gap-3 rounded-xl p-3 cursor-pointer transition border ${active
                                      ? "border-amber-400/40 bg-amber-400/10"
                                      : "border-white/10 bg-white/5"
                                    }`}
                                >
                                  <input
                                    type="radio"
                                    name="challenge"
                                    value={c}
                                    checked={active}
                                    onChange={update}
                                    className="hidden"
                                  />
                                  <span
                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${active
                                        ? "border-2 border-amber-400 bg-amber-400"
                                        : "border border-white/30 bg-transparent"
                                      }`}
                                  >
                                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#060d1f]" />}
                                  </span>
                                  <span
                                    className={`text-sm ${active ? "text-white/90" : "text-white/60"
                                      }`}
                                  >
                                    {c}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 bg-white/10 text-white/70 font-bold py-3 rounded-xl border border-white/10 hover:bg-white/15 transition"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={!step2Ready}
                            className="flex-1 bg-[#103FD5] text-white font-bold py-3 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                          >
                            Continue <TbArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <div>
                          <h2 className="text-xl font-bold text-white">Final step</h2>
                          <p className="text-sm text-white/40">Step 3 of 3, Review and submit</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                          <p className="text-[10.5px] font-bold tracking-wide uppercase text-white/30">
                            Your details
                          </p>
                          {[
                            { label: "Name", value: form.name },
                            { label: "Email", value: form.email },
                            { label: "Organisation", value: form.organisation },
                            { label: "Sector", value: form.sector },
                            ...(form.challenge ? [{ label: "Challenge", value: form.challenge }] : []),
                          ].map((r) => (
                            <div key={r.label} className="flex justify-between gap-4 text-sm">
                              <span className="text-white/40">{r.label}</span>
                              <span className="text-white/80 font-medium text-right">
                                {r.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold tracking-wide uppercase text-white/50">
                            Anything else you'd like us to know?
                          </label>
                          <textarea
                            name="note"
                            value={form.note}
                            onChange={update}
                            rows={3}
                            placeholder="Tell us what you're currently struggling with, or what you'd most like to get from LegacyLens..."
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition resize-none"
                          />
                        </div>

                        <p className="text-[11.5px] text-white/30 leading-relaxed">
                          By joining you agree to receive early access updates from Spur-Wiz
                          Dynasty Global. Data handled under the NDPR. No spam, ever.
                        </p>

                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="flex-1 bg-white/10 text-white/70 font-bold py-3 rounded-xl border border-white/10 hover:bg-white/15 transition"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-amber-400 text-[#060d1f] font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 hover:bg-amber-500"
                          >
                            <HiSparkles size={14} />
                            Join the Waitlist
                          </button>
                        </div>
                      </div>
                    )}
                  </form>

                  <p className="text-center text-[11px] text-white/20 mt-6">
                    🔒 Encrypted · NDPR compliant · No spam
                  </p>
                </div>
              </>
            ) : (
              // Success State
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-6">
                  <TbCheck size={28} className="text-amber-400" strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  You&apos;re on the list, {form.name.split(" ")[0]}.
                </h2>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  We&apos;ve received your application for{" "}
                  <strong className="text-white/80">{form.organisation}</strong>. We&apos;ll be in
                  touch ahead of our Q2 2026 launch.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left mb-6">
                  <p className="text-[10.5px] font-bold tracking-wide uppercase text-white/30 mb-3">
                    What happens next
                  </p>
                  <div className="space-y-2">
                    {[
                      "You'll receive a confirmation email shortly",
                      "We'll share your founding-tier pricing details",
                      "Your free audit credit is reserved (first 50 only)",
                      "We'll notify you the moment the platform goes live",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <TbCheck size={14} className="text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full bg-amber-400 text-[#060d1f] font-bold py-3 rounded-xl transition hover:bg-amber-500"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}