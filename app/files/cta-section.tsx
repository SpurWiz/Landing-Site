import React from "react";
import Button from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center flex flex-col items-center space-y-8">
        {/* Headline with underline accent */}
        <h2
          className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d] max-w-[700px]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Your Product Deserves More Than Advice,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">let&apos;s fix what&apos;s not working</span>
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 400 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 8 Q100 2 200 6 Q300 10 400 4"
                stroke="#fdb62f"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="text-[#6b7280] text-[15px] leading-[1.75] max-w-[480px]">
          Book a free strategy session. We&apos;ll diagnose your biggest execution
          gap and show you exactly how we&apos;d solve it.
        </p>

        <Button
          label="Work With Us"
          href="/contact"
          variant="primary"
          size="lg"
          icon="arrow"
          iconPosition="right"
        />
      </div>
    </section>
  );
};

export default CtaSection;
