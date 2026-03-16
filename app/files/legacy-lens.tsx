import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

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
  return (
    <section className="relative bg-[#060d1f] py-24 lg:py-32 overflow-hidden">
      {/* ── Star Decorations ── */}
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
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        {/* Entry label */}
        <p className="text-white/50 text-[13px] font-medium tracking-widest uppercase mb-4">
          The Entry Point
        </p>

        {/* Logo-style wordmark */}
        <h2
          className="font-extrabold tracking-[-0.04em] leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
        >
          <span className="text-white">LEGACY</span>
          <span className="text-[#fdb62f]">LENS</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-[15px] leading-[1.75] max-w-[560px] mb-4">
          LegacyLens is our AI-powered business auditing platform. It diagnoses
          your operational health, brand consistency, and execution gaps —
          giving you a structured report in minutes, not months.
        </p>

        <p className="text-[#fdb62f]/80 text-[14px] font-semibold mb-10">
          Audit your business. See what&apos;s breaking. Fix it with us.
        </p>

        {/* Robot / AI mascot image */}
        <div className="relative w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] mb-10">
          <Image
            src="/images/image4.png"
            alt="LegacyLens AI"
            fill
            sizes="280px"
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Interface preview strip */}
        <div className="w-full max-w-[680px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm mb-10">
          <div className="relative w-full h-[160px] lg:h-[200px]">
            <Image
              src="/images/legacy-lens-preview.png"
              alt="LegacyLens dashboard preview"
              fill
              sizes="680px"
              className="object-cover object-top"
            />
            {/* Gradient fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060d1f] to-transparent" />
          </div>
        </div>

        {/* CTA */}
        <Button
          label="Try Legacy Lens"
          href="/legacy"
          variant="outline"
          size="lg"
          icon="sparkles"
          iconPosition="left"
        />
      </div>
    </section>
  );
};

export default LegacyLensSection;
