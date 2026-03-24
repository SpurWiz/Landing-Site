"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {};

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-2">
          <div className="relative w-24 h-10">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold">Head Office</p>
          <p className="text-gray-500 text-sm">
            12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Need Help?</p>
          <p className="text-yellow-500 font-bold">+234 801 234 5678</p>
          <p className="text-gray-400 text-sm">Mon-Fri: 09:00 AM - 05:00 PM</p>
          <p className="text-gray-400 text-sm">Sat: 11:00 AM - 03:00 PM</p>
          <p className="text-gray-500 text-sm">contact@spurwiz.com</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Follow us</p>
          <div className="flex space-x-3">
            <Link href="#">
              <img
                src="/icons/instagram.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </Link>
            <Link href="#">
              <img
                src="/icons/facebook.png"
                alt="Facebook"
                className="w-7 h-7"
              />
            </Link>
            <Link href="#">
              <img src="/icons/x.png" alt="X" className="w-7 h-7" />
            </Link>
            <Link href="#">
              <img
                src="/icons/linkedin.png"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </Link>
            <Link href="#">
              <img src="/icons/tiktok.png" alt="TikTok" className="w-7 h-7" />
            </Link>
          </div>
          <div>
            <p className="mt-8">contact@spurwiz.com</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Subscribe to our Newsletter</p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-400"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 text-white text-center py-4 text-sm">
        © 2026 Spurwiz. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
