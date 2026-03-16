import React from "react";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";

const reasons = [
  { id: 1, label: "Poor Execution Planning" },
  { id: 2, label: "Misaligned Brand Identity" },
  { id: 3, label: "No Institutional Memory" },
  { id: 4, label: "Weak System Architecture" },
  { id: 5, label: "Team Without Structure" },
  { id: 6, label: "Founder Over-Dependency" },
];

const WhyUnderperform = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div className="relative w-full h-[380px] lg:h-[480px] rounded-2xl">
            <Image
              src="/images/image2.png"
              alt="Frustrated founder at desk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <Image
              src="/images/image1.png"
              alt="Frustrated founder at desk"
              width={1500}
              height={1500}
              className="absolute object-cover -top-10 -right-10 w-60 h-60 rounded-xl border-4 border-white shadow-lg"
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 self-start bg-[#fdb62f]/15 text-[#b07d00] text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              <HiSparkles size={12} />
              Spur Wiz Services
            </span>

            {/* Heading */}
            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
            >
              Why Good Products Still{" "}
              <span className="text-[#103FD5]">Underperform</span>
            </h2>

            {/* Sub-copy */}
            <p className="text-[#4b5563] text-[15px] leading-[1.75] max-w-[500px]">
              Most product failures aren&apos;t caused by a bad idea — they&apos;re caused
              by broken execution systems. Here&apos;s what gets in the way:
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#103FD5]/20 transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#fdb62f]" />
                  <span className="text-[13.5px] font-semibold text-[#1f2937]">
                    {reason.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom paragraph */}
            <p className="text-[#6b7280] text-[14px] leading-[1.75] pt-2 border-t border-[#e5e7eb]">
              These aren&apos;t insurmountable problems — they&apos;re solvable with
              the right systems, structure, and execution partner by your side.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnderperform;
