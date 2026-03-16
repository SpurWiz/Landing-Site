import React from "react";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { TbCheck } from "react-icons/tb";
import Button from "@/components/ui/Button";

const promises = [
  "We stay until your systems actually work — not just until the deck is done.",
  "We embed into your team, not just advise from the outside.",
  "We measure success by your outcomes, not our billable hours.",
];

const ProductPartners = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div className="relative w-full h-[380px] lg:h-[460px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/image3.png"
              alt="Team collaborating around a table"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 self-start bg-[#fdb62f]/15 text-[#b07d00] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              <HiSparkles size={11} />
              Our Commitment
            </span>

            {/* Heading */}
            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
            >
              We&apos;re Not Just Service Providers. We&apos;re Product{" "}
              <span className="text-[#103FD5]">Partners.</span>
            </h2>

            {/* Sub-copy */}
            <p className="text-[#4b5563] text-[15px] leading-[1.75] max-w-[500px]">
              Traditional consultants hand you a report and walk away. We roll
              up our sleeves. Our model is simple: we don&apos;t win unless you
              win. That changes everything about how we work.
            </p>

            {/* Promise list */}
            <ul className="space-y-3.5 pt-1">
              {promises.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#103FD5] flex items-center justify-center">
                    <TbCheck size={12} className="text-white font-bold" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] text-[#374151] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Button
                label="Work With Us"
                href="/contact"
                variant="primary"
                size="lg"
                icon="arrow"
                iconPosition="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPartners;
