"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
import {
  Building2,
  User,
  BarChart3,
  Search
} from "lucide-react";
import {
  TbCheck,
  TbArrowRight,
  TbBrandX,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbEye,
  TbEyeOff,
  TbUser,
  TbBuilding,
  TbRocket,
} from "react-icons/tb";

type Step = 1 | 2 | 3;

const SECTORS = [
  "Corporate / Enterprise",
  "NGO / Non-Profit",
  "Government / MDA",
  "Startup / Scale-up",
  "Educational Institution",
  "Healthcare Organisation",
  "Consulting / Professional Services",
  "Financial Services",
  "Creative Industry",
  "Other",
];

const AUDIT_GOALS = [
  { icon: <Building2 />, label: "Audit my organisation's brand health" },
  { icon: <User />, label: "Audit my personal founder brand" },
  { icon: <BarChart3 />, label: "Both organisation and personal" },
  { icon: <Search />, label: "Just exploring for now" },
];

const socials = [
  { label: "X", icon: <TbBrandX size={16} />, href: "https://www.x.com/spurwiz" },
  { label: "Instagram", icon: <TbBrandInstagram size={16} />, href: "https://www.instagram.com/spurwiz" },
  { label: "LinkedIn", icon: <TbBrandLinkedin size={16} />, href: "https://www.linkedin.com/company/officialsdgltd" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organisation: "",
    role: "",
    sector: "",
    website: "",
  });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const step1Ready = form.firstName && form.lastName && form.email && form.password.length >= 8;
  const step2Ready = form.organisation && form.role && form.sector;
  const step3Ready = !!selectedGoal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/skystars.jpg"
          alt=""
          className="w-full h-full object-cover object-top opacity-55"
        />
        <div className="absolute inset-0 bg-[#060d1f]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#103fd5]/25 via-transparent to-transparent" />
      </div>

      {/* Page */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <Link href="/" className="relative block w-28 h-9">
            <Image src="/logo/icon.png" alt="Spur Wiz" fill className="object-contain object-left" />
          </Link>
          <div className="flex items-center gap-4 text-[12px] text-white/40">
            <span className="hidden md:block">Already have an account?</span>
            <Link href="/legacylens/login"
              className="text-white/70 font-semibold hover:text-white transition-colors border border-white/15 px-4 py-1.5 rounded-full hover:border-white/30">
              Sign In
            </Link>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-lg">

            {!submitted ? (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-0 mb-8">
                  {([1, 2, 3] as const).map((s, i) => (
                    <React.Fragment key={s}>
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${step > s ? "bg-[#fdb62f] text-[#060d1f]" : step === s ? "border-2 border-[#fdb62f] text-[#fdb62f]" : "border border-white/20 text-white/30"}`}>
                          {step > s ? <TbCheck size={14} strokeWidth={3} /> : s}
                        </div>
                        <span className={`mt-1 text-[10px] font-medium ${step === s ? "text-white/70" : "text-white/25"}`}>
                          {s === 1 ? "Account" : s === 2 ? "Organisation" : "Goals"}
                        </span>
                      </div>
                      {i < 2 && (
                        <div className={`flex-1 h-px mx-3 mt-[-10px] transition-colors ${step > s ? "bg-[#fdb62f]/50" : "bg-white/10"}`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Card */}
                <div className="bg-[#0b1228]/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                  {/* Progress bar */}
                  <div className="h-0.5 bg-white/8">
                    <div className="h-full bg-[#fdb62f] transition-all duration-500"
                      style={{ width: `${((step - 1) / 2) * 100 + 33}%` }} />
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 sm:p-8">

                    {/* ── STEP 1: Account ── */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-[#103FD5]/20 flex items-center justify-center">
                              <TbUser size={14} className="text-[#6B9EFF]" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Create your account</h2>
                          </div>
                          <p className="text-[13px] text-white/40 ml-9">Step 1 of 3, Your basic details</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                              First name <span className="text-[#fdb62f]">*</span>
                            </label>
                            <input name="firstName" value={form.firstName} onChange={update}
                              placeholder="Alexander" required
                              className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                              Last name <span className="text-[#fdb62f]">*</span>
                            </label>
                            <input name="lastName" value={form.lastName} onChange={update}
                              placeholder="Adeyemi" required
                              className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Work email <span className="text-[#fdb62f]">*</span>
                          </label>
                          <input name="email" type="email" value={form.email} onChange={update}
                            placeholder="you@yourorg.com" required
                            className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Password <span className="text-[#fdb62f]">*</span>
                          </label>
                          <div className="relative">
                            <input name="password" type={showPassword ? "text" : "password"}
                              value={form.password} onChange={update}
                              placeholder="Min. 8 characters" required
                              className="w-full rounded-xl px-4 py-3 pr-11 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                            <button type="button" onClick={() => setShowPassword((v) => !v)}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                              {showPassword ? <TbEyeOff size={16} /> : <TbEye size={16} />}
                            </button>
                          </div>
                          {form.password.length > 0 && form.password.length < 8 && (
                            <p className="text-[11px] text-red-400/80 mt-1 ml-1">Password must be at least 8 characters</p>
                          )}
                        </div>

                        <button type="button" onClick={() => setStep(2)} disabled={!step1Ready}
                          className="w-full flex items-center justify-center gap-2 bg-[#103FD5] text-white font-bold py-3.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0c2fa3] transition-colors">
                          Continue <TbArrowRight size={16} />
                        </button>

                        <p className="text-center text-[12px] text-white/25">
                          By continuing, you agree to our{" "}
                          <Link href="#" className="text-white/45 hover:text-white/70 underline">Privacy Policy</Link>{" "}
                          and{" "}
                          <Link href="#" className="text-white/45 hover:text-white/70 underline">Terms of Use</Link>
                        </p>
                      </div>
                    )}

                    {/* ── STEP 2: Organisation ── */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-[#fdb62f]/15 flex items-center justify-center">
                              <TbBuilding size={14} className="text-[#fdb62f]" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Your organisation</h2>
                          </div>
                          <p className="text-[13px] text-white/40 ml-9">Step 2 of 3. We'll tailor your audit experience</p>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Organisation name <span className="text-[#fdb62f]">*</span>
                          </label>
                          <input name="organisation" value={form.organisation} onChange={update}
                            placeholder="Spur-Wiz Dynasty Global" required
                            className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Your role / title <span className="text-[#fdb62f]">*</span>
                          </label>
                          <input name="role" value={form.role} onChange={update}
                            placeholder="Founder & CEO" required
                            className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Sector <span className="text-[#fdb62f]">*</span>
                          </label>
                          <select name="sector" value={form.sector} onChange={update} required
                            className="w-full rounded-xl px-4 py-3 text-[13px] text-white bg-white/5 border border-white/10 focus:border-white/30 outline-none transition appearance-none">
                            <option value="" className="bg-[#0b1228]">Select your sector</option>
                            {SECTORS.map((s) => (
                              <option key={s} value={s} className="bg-[#0b1228]">{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wide uppercase text-white/50 mb-1.5">
                            Website <span className="text-white/25 font-normal normal-case">optional</span>
                          </label>
                          <input name="website" value={form.website} onChange={update}
                            placeholder="https://yourcompany.com"
                            className="w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder-white/20 bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/8 outline-none transition" />
                        </div>

                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(1)}
                            className="flex-1 bg-white/8 text-white/60 font-bold py-3.5 rounded-xl border border-white/10 hover:bg-white/12 transition-colors">
                            Back
                          </button>
                          <button type="button" onClick={() => setStep(3)} disabled={!step2Ready}
                            className="flex-1 flex items-center justify-center gap-2 bg-[#103FD5] text-white font-bold py-3.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0c2fa3] transition-colors">
                            Continue <TbArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 3: Goals ── */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-[#22C55E]/15 flex items-center justify-center">
                              <TbRocket size={14} className="text-[#22C55E]" />
                            </div>
                            <h2 className="text-lg font-bold text-white">What are you here for?</h2>
                          </div>
                          <p className="text-[13px] text-white/40 ml-9">Step 3 of 3, Personalise your LegacyLens experience</p>
                        </div>

                        <div className="space-y-2.5">
                          {AUDIT_GOALS.map((goal) => {
                            const active = selectedGoal === goal.label;
                            return (
                              <label key={goal.label}
                                className={`flex items-center gap-3.5 rounded-xl p-3.5 cursor-pointer transition-all border ${active ? "border-[#fdb62f]/50 bg-[#fdb62f]/10" : "border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/7"}`}>
                                <input type="radio" name="goal" value={goal.label}
                                  checked={active} onChange={() => setSelectedGoal(goal.label)}
                                  className="hidden" />
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all ${active ? "border-[#fdb62f] bg-[#fdb62f]" : "border-white/20"}`}>
                                  {active && <span className="w-2 h-2 rounded-full bg-[#060d1f]" />}
                                </span>
                                <span className="text-xl">{goal.icon}</span>
                                <span className={`text-[13px] font-medium ${active ? "text-white" : "text-white/60"}`}>
                                  {goal.label}
                                </span>
                              </label>
                            );
                          })}
                        </div>

                        {/* What's included */}
                        <div className="bg-white/4 border border-white/8 rounded-xl p-4 space-y-2">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">What you unlock today</p>
                          {[
                            "AI-powered brand consistency audit",
                            "Ops efficiency & cultural resonance scoring",
                            "10 ranked action recommendations",
                            "Branded PDF audit report",
                            "FounderLens personal brand score",
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <TbCheck size={12} className="text-[#fdb62f] flex-shrink-0" />
                              <span className="text-[12px] text-white/55">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(2)}
                            className="flex-1 bg-white/8 text-white/60 font-bold py-3.5 rounded-xl border border-white/10 hover:bg-white/12 transition-colors">
                            Back
                          </button>
                          <button type="submit" disabled={!step3Ready}
                            className="flex-1 flex items-center justify-center gap-2 bg-[#fdb62f] text-[#060d1f] font-bold py-3.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e6a428] transition-colors">
                            <HiSparkles size={15} />
                            Launch LegacyLens
                          </button>
                        </div>

                        <p className="text-center text-[11px] text-white/20">
                          🔒 Encrypted · NDPR compliant · No spam, ever
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </>
            ) : (
              /* ── SUCCESS STATE ── */
              <div className="bg-[#0b1228]/80 border border-white/10 rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#fdb62f]/15 border border-[#fdb62f]/30 flex items-center justify-center mx-auto mb-6">
                  <TbCheck size={28} className="text-[#fdb62f]" strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Welcome, {form.firstName}.
                </h2>
                <p className="text-[13px] text-white/50 leading-relaxed mb-6 max-w-[320px] mx-auto">
                  Your LegacyLens account is ready. We've set up{" "}
                  <strong className="text-white/70">{form.organisation}</strong> as your first business entity.
                </p>

                <div className="bg-white/5 border border-white/8 rounded-xl p-4 text-left mb-6 space-y-2">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">What happens next</p>
                  {[
                    "Start your first brand audit from the LegacyLens chat",
                    "Connect your tools (Notion, Jira, Google Drive) for deeper analysis",
                    "Upload brand docs and social handles for richer insights",
                    "Receive your Lens Health Score (LHS) with action roadmap",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <TbCheck size={13} className="text-[#fdb62f] mt-0.5 flex-shrink-0" />
                      <span className="text-[12px] text-white/55">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/legacylens"
                  className="w-full flex items-center justify-center gap-2 bg-[#fdb62f] text-[#060d1f] font-bold py-3.5 rounded-xl hover:bg-[#e6a428] transition-colors">
                  <HiSparkles size={15} />
                  Go to LegacyLens
                </Link>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-around text-center py-5 border-t border-white/10 text-[11px] text-white/20 shrink-0">
          <p className="hidden md:block">
            © {new Date().getFullYear()} Spur-Wiz Dynasty Global Limited ·{" "}
            <Link href="/legacylens" className="text-white/40 hover:text-white/60 transition">LegacyLens</Link>
            {" "}·{" "}
            <Link href="#" className="text-white/40 hover:text-white/60 transition">Privacy Policy</Link>
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-white/50 hover:text-white/80 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
                  {s.icon}
                </span>
                {s.label}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}