import React from "react";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { TbRocket, TbTrendingUp, TbBuildingSkyscraper, TbBulb } from "react-icons/tb";
import { GoPlay } from "react-icons/go";

const audiences = [
  {
    id: 1,
    icon: <TbRocket size={20} />,
    title: "Early Stage Builders",
    description:
      "You have an idea and momentum but no playbook. We help you build the systems that scale before chaos sets in.",
  },
  {
    id: 2,
    icon: <TbTrendingUp size={20} />,
    title: "Stagnating Businesses",
    description:
      "Revenue has plateaued. The energy has stalled. We audit what's broken and rebuild the engine from the ground up.",
  },
  {
    id: 3,
    icon: <TbBuildingSkyscraper size={20} />,
    title: "Scaling Companies",
    description:
      "You're growing fast but cracks are appearing. We install the operational infrastructure your team needs to scale without breaking.",
  },
  {
    id: 4,
    icon: <TbBulb size={20} />,
    title: "Overwhelmed Product Owners",
    description:
      "Too many directions, too little progress. We cut through the noise, prioritize ruthlessly, and execute with focus.",
  },
];

const BuiltForFounders = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-[500px]">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-[#fdb62f]/15 text-[#b07d00] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              <HiSparkles size={11} />
              Who We Work With
            </span>

            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
            >
              Built for Founders Serious About{" "}
              <span className="text-[#103FD5]">Growth</span>
            </h2>
          </div>

          <p className="text-[#6b7280] text-[14.5px] leading-[1.75] max-w-[380px] lg:text-right">
            Whether you&apos;re launching, stagnating, or scaling. If you&apos;re
            serious about turning ambition into a sustainable business, this is
            built for you.
          </p>
        </div>

        {/* ── Video Thumbnail ── */}
        <div className="relative w-full h-[260px] lg:h-[400px] rounded-2xl overflow-hidden mb-12 group cursor-pointer">
          <Image
            src="/images/image6.png"
            alt="Founders working session"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#103FD5]/50 group-hover:bg-[#103FD5]/40 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#fdb62f] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <GoPlay
                size={28}
                className="text-white"
              />
            </div>
          </div>
        </div>

        {/* ── Audience Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {audiences.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#103FD5]/25 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#103FD5]/8 text-[#103FD5] flex items-center justify-center group-hover:bg-[#103FD5]/14 transition-colors duration-200">
                  {item.icon}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-[15px] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-[#6b7280] text-[13.5px] leading-[1.7]">
                    {item.description}
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

export default BuiltForFounders;
