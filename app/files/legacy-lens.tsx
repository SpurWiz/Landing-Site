"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { HiSparkles } from "react-icons/hi";
import { ArrowUp } from "lucide-react";

/* ── Decorative star SVG ── */
const Star = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 22l-2.09-6.26L4 14l5.91-1.74L12 2z" />
  </svg>
);

const LegacyLensSection = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: any) => {
    setMessage(e.target.value);

    // Auto resize
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <section className="relative bg-[#060d1f] py-8 lg:py-20 overflow-hidden">
      <img src="/images/skystars.jpg" className="absolute top-0 left-0 w-full h-full !object-cover object-top" />
      <Star
        size={18}
        className="absolute top-10 left-[8%] text-[#fdb62f] opacity-80"
      />
      <Star
        size={12}
        className="absolute top-24 left-[20%] text-white opacity-30"
      />
      <Star
        size={24}
        className="absolute top-16 right-[12%] text-[#fdb62f] opacity-70"
      />
      <Star
        size={14}
        className="absolute bottom-20 right-[8%] text-white opacity-25"
      />
      <Star
        size={10}
        className="absolute bottom-32 left-[15%] text-[#fdb62f] opacity-50"
      />
      <Star
        size={16}
        className="absolute top-1/2 right-[25%] text-white opacity-20"
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(16,63,213,0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6 mt-16 text-center flex flex-col items-center">
        {/* Entry label */}
        <p className="text-white/50 text-[16px] font-medium tracking-widest uppercase mb-4">
          The Entry Point
        </p>

        {/* Logo-style wordmark */}
        <h2
          className="font-extrabold tracking-[-0.04em] leading-none mb-6"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          <span className="text-white">LEGACY</span>
          <span className="text-[#fdb62f]">LENS</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-[11px] md:text-[15px] leading-[1.95] max-w-[560px] mb-6">
          LegacyLens is our AI-powered business auditing platform. It diagnoses
          your operational health, brand consistency, and execution gaps —
          giving you a structured report in minutes, not months.
        </p>

        <p className="text-[#fdb62f]/80 text-[14px] font-semibold mb-10">
          Audit your business. See what&apos;s breaking. Fix it with us.
        </p>

        {/* Interface preview strip */}
        <div className="w-full max-w-[680px] rounded-2xl md:mt-36 !h-[200px] border border-white/10 bg-white/5 backdrop-blur-sm p-4">
          <div className="relative flex items-end">
            <textarea
              ref={textareaRef}
              rows={1}
              placeholder="Ask anything..."
              value={message}
              onChange={handleChange}
              className="w-full resize-none  bg-transparent text-white outline-none pr-12 !h-[220px] max-h-[150px]"
            />

            {message.trim() !== "" && (
              <button className="absolute right-0 bottom-0 mb-1 bg-white text-black p-2 rounded-full">
                <ArrowUp size={18} />
              </button>
            )}

          </div>

        </div>

        <div className="mt-10">
          <Badge icon={HiSparkles} label="Try Legacy Lens" />
        </div>

      </div>
    </section>
  );
};

export default LegacyLensSection;
