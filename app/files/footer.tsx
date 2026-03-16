import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/Nav-links";
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandX,
  TbMail,
} from "react-icons/tb";

const socialLinks = [
  { id: 1, href: "#", icon: <TbBrandLinkedin size={18} />, label: "LinkedIn" },
  { id: 2, href: "#", icon: <TbBrandInstagram size={18} />, label: "Instagram" },
  { id: 3, href: "#", icon: <TbBrandX size={18} />, label: "X (Twitter)" },
  { id: 4, href: "mailto:hello@spurwiz.com", icon: <TbMail size={18} />, label: "Email" },
];

const legalLinks = [
  { id: 1, href: "#", label: "Privacy Policy" },
  { id: 2, href: "#", label: "Terms of Use" },
  { id: 3, href: "#", label: "Cookie Policy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F9F9] border-t border-[#e5e7eb]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Brand column ── */}
          <div className="space-y-5">
            <Link href="/" className="relative w-24 h-10 block">
              <Image
                src="/logo/logo.png"
                alt="Spur Wiz logo"
                fill
                sizes="96px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[#6b7280] text-[13.5px] leading-[1.75] max-w-[260px]">
              Legacy-as-a-Service. We help ambitious founders and businesses
              close the execution gap and build for the long term.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center text-[#6b7280] hover:text-[#103FD5] hover:border-[#103FD5]/30 transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Navigation column ── */}
          <div className="space-y-5">
            <h4 className="font-bold text-[13px] text-[#111827] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-[#6b7280] text-[14px] capitalize hover:text-[#103FD5] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[#6b7280] text-[14px] capitalize hover:text-[#103FD5] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div className="space-y-5">
            <h4 className="font-bold text-[13px] text-[#111827] uppercase tracking-widest">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@spurwiz.com"
                className="flex items-center gap-2.5 text-[#6b7280] text-[14px] hover:text-[#103FD5] transition-colors duration-200 group"
              >
                <TbMail
                  size={15}
                  className="text-[#fdb62f] flex-shrink-0"
                />
                hello@spurwiz.com
              </a>

              <p className="text-[#9ca3af] text-[13px] leading-[1.6] max-w-[240px]">
                For partnerships, project inquiries, or just to say hello.
              </p>

              {/* Newsletter nudge */}
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#103FD5] text-white text-[13px] font-semibold px-4 py-2.5 rounded-[40px] hover:bg-[#0c2fa3] transition-colors duration-200"
                >
                  Book a Free Session →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-[12.5px]">
            © {currentYear} Spur Wiz. All rights reserved. Proprietary, not for redistribution.
          </p>

          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-[#9ca3af] text-[12px] hover:text-[#6b7280] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
