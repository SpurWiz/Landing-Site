"use client";
import Wrapper from "@/components/wrapper";
import React, { useState } from "react";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
import {
  TbMail,
  TbMapPin,
  TbBrandX,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbArrowRight,
  TbCheck,
  TbPhone,
} from "react-icons/tb";

const enquiryTypes = [
  "Work with us (consulting / retainer)",
  "LegacyLens early access / demo",
  "Partnership or referral enquiry",
  "Media or press enquiry",
  "Career or internship application",
  "General question",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canSubmit = form.name && form.email && form.type && form.message;

  return (
    <Wrapper>
      {/* ── Hero ── */}
      <section className="bg-[#F9F9F9] pt-10 pb-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="inline-flex items-center gap-1.5 bg-[#fdb62f]/15 text-[#b07d00] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
            <HiSparkles size={11} />
            Get In Touch
          </span>
          <h1
            className="font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d0d0d] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Let's build something{" "}
            <span className="text-[#103FD5]">that lasts.</span>
          </h1>
          <p className="text-[#4b5563] text-[16px] leading-[1.75] max-w-[520px]">
            Whether you want to work with us, see a LegacyLens demo, or just ask a question —
            we respond to every message within one business day.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[#F9F9F9] pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* ── Left: Contact details ── */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-5">
                <h2 className="font-bold text-[16px] text-[#111827] uppercase tracking-widest text-[12px]">
                  Our Details
                </h2>

                <div className="space-y-4">
                  <ContactDetail
                    icon={<TbMail size={16} />}
                    label="Email"
                    value="contact@spurwiz.com"
                    href="mailto:contact@spurwiz.com"
                  />
                  <ContactDetail
                    icon={<TbPhone size={16} />}
                    label="Phone"
                    value="+234 801 234 5678"
                    href="tel:+2348012345678"
                  />
                  <ContactDetail
                    icon={<TbMapPin size={16} />}
                    label="Head Office"
                    value="Abuja, Federal Capital Territory, Nigeria"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af]">
                  Office Hours
                </p>
                <div className="space-y-1.5 text-[13.5px]">
                  <div className="flex justify-between text-[#374151]">
                    <span>Monday – Friday</span>
                    <span className="text-[#111827] font-semibold">9:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between text-[#374151]">
                    <span>Saturday</span>
                    <span className="text-[#111827] font-semibold">11:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between text-[#374151]">
                    <span>Sunday</span>
                    <span className="text-[#9ca3af]">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af]">
                  Follow Us
                </p>
                <div className="space-y-2.5">
                  {[
                    { icon: <TbBrandX size={16} />, label: "X (Twitter)", handle: "@spurwiz", href: "https://www.x.com/spurwiz" },
                    { icon: <TbBrandInstagram size={16} />, label: "Instagram", handle: "@spurwiz", href: "https://www.instagram.com/spurwiz" },
                    { icon: <TbBrandLinkedin size={16} />, label: "LinkedIn", handle: "Spur-Wiz Dynasty Global", href: "https://www.linkedin.com/company/officialsdgltd" },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#6b7280] hover:text-[#103FD5] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center group-hover:border-[#103FD5]/25 transition-colors">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#374151] group-hover:text-[#103FD5] transition-colors">{s.label}</p>
                        <p className="text-[11px] text-[#9ca3af]">{s.handle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* LegacyLens CTA */}
              <div className="bg-[#0d0d0d] rounded-xl p-5 text-white">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">
                  Quick access
                </p>
                <p className="font-bold text-[15px] mb-2">
                  Join the LegacyLens Waitlist
                </p>
                <p className="text-white/55 text-[12.5px] leading-[1.65] mb-4">
                  Secure your early access slot and founding-tier pricing before our Q2 2026 launch.
                </p>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-2 bg-[#fdb62f] text-[#0d0d0d] text-[13px] font-bold px-4 py-2 rounded-full hover:bg-[#e6a428] transition-colors"
                >
                  <HiSparkles size={13} />
                  Join Waitlist
                </Link>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-7 sm:p-9">
                  <div className="mb-7">
                    <h2 className="font-bold text-[22px] text-[#111827] tracking-tight mb-1.5">
                      Send us a message
                    </h2>
                    <p className="text-[#6b7280] text-[14px]">
                      Tell us what you're working on. We'll respond within one business day.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Full name" required>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </FormField>
                      <FormField label="Email address" required>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@yourorg.com"
                          required
                        />
                      </FormField>
                    </div>

                    <FormField label="Organisation (optional)">
                      <input
                        name="organisation"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Your company or organisation"
                      />
                    </FormField>

                    <FormField label="What is this enquiry about?" required>
                      <select name="type" value={form.type} onChange={handleChange} required>
                        <option value="">Select an enquiry type</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Your message" required>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what you're working on, what challenges you're facing, or what questions you have..."
                        required
                        style={{ resize: "vertical" }}
                      />
                    </FormField>

                    <div className="pt-1">
                      <p className="text-[12px] text-[#9ca3af] mb-4">
                        By submitting this form, you agree to our{" "}
                        <Link href="#" className="text-[#103FD5] hover:underline">Privacy Policy</Link>.
                        We handle all data in accordance with the NDPR.
                      </p>
                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className="inline-flex items-center gap-2 bg-[#103FD5] hover:bg-[#0c2fa3] disabled:opacity-30 disabled:cursor-not-allowed text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all duration-200 active:scale-[0.98]"
                      >
                        Send Message
                        <TbArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-9 text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#103FD5]/10 flex items-center justify-center mx-auto mb-6">
                    <TbCheck size={28} className="text-[#103FD5]" strokeWidth={2.5} />
                  </div>
                  <h2 className="font-bold text-[22px] text-[#111827] tracking-tight mb-3">
                    Message received, {form.name.split(" ")[0]}.
                  </h2>
                  <p className="text-[#6b7280] text-[15px] leading-[1.75] max-w-[380px] mx-auto">
                    We'll review your message and get back to you at{" "}
                    <span className="text-[#111827] font-semibold">{form.email}</span> within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center text-[#fdb62f] mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider font-bold">{label}</p>
        <p className="text-[14px] text-[#374151] font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <Link href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-[#374151] uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-[#103FD5]">*</span>}
      </label>
      <div className="[&_input]:w-full [&_input]:bg-[#f9fafb] [&_input]:border [&_input]:border-[#e5e7eb] [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-3 [&_input]:text-[#111827] [&_input]:text-[14px] [&_input]:outline-none [&_input:focus]:border-[#103FD5]/40 [&_input:focus]:ring-2 [&_input:focus]:ring-[#103FD5]/10 [&_input]:placeholder:text-[#9ca3af] [&_input]:transition-all [&_select]:w-full [&_select]:bg-[#f9fafb] [&_select]:border [&_select]:border-[#e5e7eb] [&_select]:rounded-xl [&_select]:px-4 [&_select]:py-3 [&_select]:text-[#111827] [&_select]:text-[14px] [&_select]:outline-none [&_select:focus]:border-[#103FD5]/40 [&_select:focus]:ring-2 [&_select:focus]:ring-[#103FD5]/10 [&_select]:transition-all [&_textarea]:w-full [&_textarea]:bg-[#f9fafb] [&_textarea]:border [&_textarea]:border-[#e5e7eb] [&_textarea]:rounded-xl [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-[#111827] [&_textarea]:text-[14px] [&_textarea]:outline-none [&_textarea:focus]:border-[#103FD5]/40 [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-[#103FD5]/10 [&_textarea]:placeholder:text-[#9ca3af] [&_textarea]:transition-all">
        {children}
      </div>
    </div>
  );
}
