"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/Nav-links";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathName = usePathname();
  // console.log(pathName);
  function handleNav() {
    setNavOpen((cur) => !cur);
  }
  return (
    <header className="py-8 sticky top-0 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <nav className="md:grid md:grid-cols-3 flex justify-between items-center">
          <div className="logo md:col-span-1">
            <Link href="/" className="relative w-20 h-10 block">
              <Image
                src="/logo/logo.png"
                alt="logo"
                fill
                sizes=""
                className="object-contain"
              />
            </Link>
          </div>
          <div
            className={`nav-links_buttons absolute md:static px-6 md:px-0 flex md:flex-row flex-col items-center justify-center md:justify-between space-y-30 md:space-y-0 md:col-span-2 w-full bg-[#F9F9F9] left-0 top-full h-[90vh] -z-50 md:z-0 md:h-fit md:opacity-100 md:translate-y-0 transition-all duration-300 ease-in-out ${navOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
          >
            <ul className="nav-links flex md:flex-row flex-col items-center justify-center space-y-10 md:space-y-0 md:space-x-8 md:flex-1">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`capitalize font-normal leading-4 tracking-[-2%] pb-0.5 hover:text-[var(--accent-500)] hover:border-b-2 hover:border-b-[var(--accent-500)] transition-all duration-300 ease-in-out ${pathName === link.href ? "text-accent border-b-2 border-b-[var(--accent-500)]" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
            <div className="work-with-us-btn md:flex-1 flex flex-col md:flex-row space-y-3 md:space-y-0 md:items-center justify-end w-full md:w-fit">
              <Link
                href="/"
                className="capitalize md:py-2.5 md:px-3.5 py-4.5 px-6.5 text-[15px] leading-4 tracking-[-2%] font-bold flex gap-1 items-center justify-center md:w-fit w-full border rounded-[40px] md:border-[var(--accent-500)]] md:text-accent bg-[#103FD5] text-white md:bg-transparent"
              >
                <span>work with us</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
              <Link
                href="/"
                className="capitalize py-4.5 px-6.5 text-[15px] leading-4 tracking-[-2%] font-bold flex gap-1 items-center justify-center md:w-fit w-full border rounded-[40px] border-[var(--accent-500)] text-accent md:hidden"
              >
                <span>
                  <HiSparkles />
                </span>
                <span>try legacy lens</span>
              </Link>
            </div>
          </div>
          <div className="hamburger md:hidden">
            <button onClick={handleNav}>
              {navOpen ? <X /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </nav>
      </div>

      
    </header>
  );
};

export default Header;
