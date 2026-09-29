"use client";
import Wrapper from "@/components/wrapper";
import React, { useState } from "react";
import Link from "next/link";
import {
  TbMail,
  TbPhone,
  TbMapPin,
  TbBrandX,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbArrowRight,
  TbCheck,
} from "react-icons/tb";

const enquiryTypes = [
  "Work with us (consulting / retainer)",
  "LegacyLens early access / demo",
  "Partnership or referral enquiry",
  "Media or press enquiry",
  "Career or internship application",
  "General question",
];
const details = [
  {
    icon: <TbMail size={18} />,
    label: "Email",
    value: "contact@spurwiz.com",
    href: "mailto:contact@spurwiz.com",
  },
  {
    icon: <TbPhone size={18} />,
    label: "Phone",
    value: "+234 904 0460 390",
    href: "tel:+2349040460390",
  },
  {
    icon: <TbMapPin size={18} />,
    label: "Office",
    value: "Abuja, Nigeria",
  },
];

const socials = [
  { icon: <TbBrandX size={18} />, label: "X", href: "https://www.x.com/spurwiz" },
  { icon: <TbBrandInstagram size={18} />, label: "Instagram", href: "https://www.instagram.com/spurwiz" },
  { icon: <TbBrandLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/company/officialsdgltd" },
];

// One shared style for every input, select and textarea
const fieldClass =
  "w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[15px] text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#103FD5]/50 focus:ring-2 focus:ring-[#103FD5]/10";

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
      <main className="bg-white">
        <div className="container mx-auto max-w-[720px] px-4 py-16 md:px-6 md:py-24">
          {/* 1. Title */}
          <div className="text-center">
            <h1
              className="font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(1.25rem, 4vw, 2.5rem)" }}
            >
              Let&apos;s build something{" "}
              <span className="text-[#103FD5]">that lasts.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#4b5563]">
              Tell us what you&apos;re working on. We reply to every message within one
              business day.
            </p>
          </div>

          {/* 2. Form */}
          <div className="mt-12">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(16,63,213,0.2)] sm:p-9"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <Field label="Organisation" optional>
                  <input
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Your company or organisation"
                    className={fieldClass}
                  />
                </Field>

                <Field label="Topic">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  >
                    <option value="">Select a topic</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help?"
                    required
                    className={`${fieldClass} resize-y`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#103FD5] px-8 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#0c2fa3] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send message
                  <TbArrowRight size={16} />
                </button>

                <p className="text-center text-[12px] text-[#9ca3af]">
                  By sending this you agree to our{" "}
                  <Link href="#" className="text-[#103FD5] hover:underline">
                    Privacy Policy
                  </Link>
                  . We handle data in line with the NDPR.
                </p>
              </form>
            ) : (
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center shadow-[0_20px_60px_-25px_rgba(16,63,213,0.2)]">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#103FD5]/10">
                  <TbCheck size={26} className="text-[#103FD5]" strokeWidth={2.5} />
                </div>
                <h2 className="mb-3 text-[22px] font-bold tracking-tight text-[#111827]">
                  Message received, {form.name.split(" ")[0]}.
                </h2>
                <p className="mx-auto max-w-[380px] text-[15px] leading-[1.7] text-[#6b7280]">
                  We&apos;ll reply to{" "}
                  <span className="font-semibold text-[#111827]">{form.email}</span>{" "}
                  within one business day.
                </p>
              </div>
            )}
          </div>

          {/* 3. Direct contact */}
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {details.map((d) => (
              <DetailCard key={d.label} {...d} />
            ))}
          </div>

          {/* 4. Social + hours, one quiet line */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-[13px] text-[#6b7280] sm:flex-row">
            <p>Mon – Fri, 9:00 – 17:00 · Sat, 11:00 – 15:00</p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#6b7280] transition hover:border-[#103FD5]/30 hover:text-[#103FD5]"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-[#374151]">
        {label}
        {optional && <span className="ml-1 font-normal text-[#9ca3af]">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

function DetailCard({
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
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#103FD5]/10 text-[#103FD5]">
        {icon}
      </span>
      <span className="mt-3 block text-[12px] font-semibold uppercase tracking-wider text-[#9ca3af]">
        {label}
      </span>
      <span className="mt-0.5 block text-[14px] font-semibold text-[#111827]">{value}</span>
    </>
  );
  const cls = "block rounded-xl border border-[#e5e7eb] bg-white p-5 text-left";
  return href ? (
    <Link href={href} className={`${cls} transition hover:border-[#103FD5]/30`}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}