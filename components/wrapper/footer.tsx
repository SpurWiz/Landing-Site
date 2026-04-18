// ════════════════════════════════════════════════
// FILE 1: components/wrapper/footer.tsx
// Updated footer with real social links + contact
// ════════════════════════════════════════════════
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  TbBrandX,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbMail,
  TbMapPin,
  TbPhone,
} from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";

const socialLinks = [
  { label: "X (Twitter)", icon: <TbBrandX size={16} />, href: "https://www.x.com/spurwiz" },
  { label: "Instagram", icon: <TbBrandInstagram size={16} />, href: "https://www.instagram.com/spurwiz" },
  { label: "LinkedIn", icon: <TbBrandLinkedin size={16} />, href: "https://www.linkedin.com/company/officialsdgltd" },
  { label: "Email", icon: <TbMail size={16} />, href: "mailto:contact@spurwiz.com" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/legacy", label: "LegacyLens" },
  { href: "/services", label: "Services" },
  { href: "/grow", label: "Grow" },
  { href: "/career", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#e5e7eb] mt-16">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* ── Brand column ── */}
        <div className="space-y-5 lg:col-span-1">
          <Link href="/" className="relative w-28 h-9 block">
            <Image src="/logo/logo.png" alt="Spur Wiz" fill className="object-contain object-left" />
          </Link>
          <p className="text-[#6b7280] text-[13.5px] leading-[1.75] max-w-[240px]">
            We don't just build businesses. We build legacies. Africa's institutional intelligence company.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[#e5e7eb] bg-[#f9fafb] flex items-center justify-center text-[#6b7280] hover:text-[#103FD5] hover:border-[#103FD5]/25 hover:bg-white transition-all duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Navigation column ── */}
        <div className="space-y-4">
          <h4 className="font-bold text-[11px] text-[#111827] uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#6b7280] text-[14px] hover:text-[#103FD5] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-1.5 text-[#fdb62f] text-[14px] font-semibold hover:opacity-80 transition-opacity"
              >
                <HiSparkles size={12} />
                Join Waitlist
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Contact column ── */}
        <div className="space-y-4">
          <h4 className="font-bold text-[11px] text-[#111827] uppercase tracking-widest">
            Get In Touch
          </h4>
          <div className="space-y-3">
            <Link
              href="mailto:contact@spurwiz.com"
              className="flex items-center gap-2.5 text-[#6b7280] text-[13.5px] hover:text-[#103FD5] transition-colors group"
            >
              <TbMail size={14} className="text-[#fdb62f] flex-shrink-0" />
              contact@spurwiz.com
            </Link>
            <Link
              href="tel:+2348012345678"
              className="flex items-center gap-2.5 text-[#6b7280] text-[13.5px] hover:text-[#103FD5] transition-colors"
            >
              <TbPhone size={14} className="text-[#fdb62f] flex-shrink-0" />
              +234 801 234 5678
            </Link>
            <div className="flex items-start gap-2.5 text-[#6b7280] text-[13.5px]">
              <TbMapPin size={14} className="text-[#fdb62f] flex-shrink-0 mt-0.5" />
              <span>Abuja, FCT, Nigeria</span>
            </div>
          </div>

          {/* LegacyLens link */}
          <div className="pt-2">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 bg-[#103FD5] text-white text-[13px] font-semibold px-4 py-2.5 rounded-full hover:bg-[#0c2fa3] transition-colors"
            >
              Join the Waitlist →
            </Link>
          </div>
        </div>

        {/* ── Newsletter column ── */}
        <div className="space-y-4">
          <h4 className="font-bold text-[11px] text-[#111827] uppercase tracking-widest">
            Stay Updated
          </h4>
          <p className="text-[#6b7280] text-[13px] leading-[1.65]">
            Subscribe for LegacyLens launch updates and execution insights.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full border border-[#e5e7eb] rounded-xl px-4 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#103FD5]/40 bg-[#f9fafb] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#0d0d0d] text-white text-[13px] font-bold px-4 py-2.5 rounded-xl hover:bg-[#1f1f1f] transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-[#103FD5] text-[13px] font-semibold">
              <div className="w-5 h-5 rounded-full bg-[#103FD5]/10 flex items-center justify-center">
                <span className="text-[10px]">✓</span>
              </div>
              You're subscribed. Thank you.
            </div>
          )}
          <p className="text-[11px] text-[#9ca3af]">
            In partnership with{" "}
            <span className="font-semibold text-[#6b7280]">Synergix Africa</span>
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#e5e7eb]">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#9ca3af] text-[12px]">
            © {currentYear} Spur-Wiz Dynasty Global Limited. All rights reserved. Proprietary.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use", "NDPR Compliance"].map((item) => (
              <Link key={item} href="#" className="text-[#9ca3af] text-[11.5px] hover:text-[#6b7280] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// ════════════════════════════════════════════════
// FILE 2: lib/Nav-links.ts
// Updated nav links to include services + waitlist
// ════════════════════════════════════════════════
// export const navLinks = [
//   { id: 1, href: "/", name: "home" },
//   { id: 2, href: "/legacy", name: "legacy lens" },
//   { id: 3, href: "/services", name: "services" },
//   { id: 4, href: "/grow", name: "grow" },
//   { id: 5, href: "/career", name: "career" },
// ];


// ════════════════════════════════════════════════
// FILE 3: middleware.ts
// Updated middleware for legacylens subdomain
// ════════════════════════════════════════════════
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// 
// export function middleware(request: NextRequest) {
//   const host = request.headers.get('host') || ''
//   const url = request.nextUrl.clone()
// 
//   // legacylens.spurwiz.com → rewrite to /legacy/*
//   if (host.startsWith('legacylens.')) {
//     // Map root to /legacy
//     if (url.pathname === '/') {
//       url.pathname = '/legacy'
//       return NextResponse.rewrite(url)
//     }
//     // Map /waitlist to /waitlist (keep as-is, already at app level)
//     // Map anything else under the subdomain to /legacy/*
//     if (!url.pathname.startsWith('/legacy') && !url.pathname.startsWith('/waitlist')) {
//       url.pathname = `/legacy${url.pathname}`
//       return NextResponse.rewrite(url)
//     }
//   }
// 
//   return NextResponse.next()
// }
// 
// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
// }
