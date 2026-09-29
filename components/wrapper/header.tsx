"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/Nav-links";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

// The logo already links home, so "home" is left out of the bar.
const links = navLinks.filter((link) => link.href !== "/");

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 md:px-6">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="SpurWiz home">
          <span className="relative block h-9 w-9 shrink-0">
            <Image
              src="/logo/icon.png"
              alt=""
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-[22px] font-extrabold leading-none mt-3 tracking-[-0.03em] text-[#0d0d0d]">
            Spur<span className="text-[#103FD5]">Wiz</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-[15px] font-semibold capitalize transition-colors ${
                  active ? "text-[#103FD5]" : "text-[#374151] hover:text-[#103FD5]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            label="Work With Us"
            href="/contact"
            variant="primary"
            size="md"
            icon="arrow"
            iconPosition="right"
          />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-[#374151] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#e5e7eb] bg-white px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`border-b border-[#f3f4f6] py-4 text-[16px] font-semibold capitalize ${
                    active ? "text-[#103FD5]" : "text-[#374151]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5">
            <Button
              label="Work With Us"
              href="/contact"
              variant="primary"
              size="lg"
              icon="arrow"
              iconPosition="right"
              fullWidth
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;