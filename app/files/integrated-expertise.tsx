import React from "react";
import { HiSparkles } from "react-icons/hi2";
import {
  TbBrandProducthunt,
  TbCrosshair,
  TbCode,
  TbChartLine,
} from "react-icons/tb";

const expertiseCards = [
  {
    id: 1,
    icon: <TbBrandProducthunt size={22} />,
    title: "Structural & Stakeholder Engineering",
    description:
      "We map your internal systems, eliminate bottlenecks, and build operational clarity so your team can execute without constant founder intervention.",
  },
  {
    id: 2, 
    icon: <TbCrosshair size={22} />,
    title: "Brand & Business Alignment",
    description:
      "We align your brand identity with your business strategy, ensuring every customer touchpoint reinforces who you are and where you're going.",
  },
  {
    id: 3,
    icon: <TbCode size={22} />,
    title: "Product Development & Engineering",
    description:
      "From MVPs to full product overhauls, we build, ship, and iterate with speed  without sacrificing structure or scalability.",
  },
  {
    id: 4,
    icon: <TbChartLine size={22} />,
    title: "Growth & Performance Optimization",
    description:
      "We identify the highest-leverage growth levers in your business and activate them through data-driven execution — not guesswork.",
  },
];

const IntegratedExpertise = () => {
  return (
    <section className="relative py-24 lg:py-56 md:px-30 overflow-hidden bg-[#F9F9F9]">
      {/* ── Blue Blob Background ── */}
      <div
        className="absolute md:rotate-[-4.5deg] md:mx-auto w-full md:w-11/12 md:inset-x-[-5%] inset-y-[5%] rounded-xl bg-[#103FD5] pointer-events-none"
        // style={{ transform: "rotate(-4.5deg)" }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center space-y-4">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20">
            <HiSparkles size={11} />
            What We Bring to the Table
          </span>

          <h2
            className="font-extrabold leading-[1.3] tracking-[-0.03em] text-white max-w-[560px]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Integrated Expertise Across Product, Structure, and Execution
          </h2>

          <p className="text-white/70 text-[15px] leading-[1.7] max-w-[540px]">
            Spur Wiz isn&apos;t a department — we&apos;re a full-stack execution partner.
            Every engagement combines operations, brand, and technology into one
            coherent system.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {expertiseCards.map((card) => (
            <div
              key={card.id}
              className="group bg-white/10 hover:bg-white/[0.16] border border-white/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon bubble */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#fdb62f]/20 text-[#fdb62f] flex items-center justify-center group-hover:bg-[#fdb62f]/30 transition-colors duration-200">
                  {card.icon}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-white font-bold text-[15px] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/65 text-[13.5px] leading-[1.7]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedExpertise;
