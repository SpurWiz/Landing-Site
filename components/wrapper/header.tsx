import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/Nav-links";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-6">
        <nav className="flex items-center">
          <div className="logo flex-1">
            <Link href="/" className="relative w-30 h-10 block">
              <Image
                src="/logo/logo.png"
                alt="logo"
                fill
                sizes=""
                className="object-cover"
              />
            </Link>
          </div>
          <div className="nav-links-buttons flex flex-2">
            <ul className="nav-links flex items-center justify-center gap-4 w-1/2">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="capitalize font-bold leading-4 text-[#FDB62F] tracking-[-2%]"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
            <div className="work-with-us w-1/2 justify-end">
              <Link href="/" className="capitalize">
                work with us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
