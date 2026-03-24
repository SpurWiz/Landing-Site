import Wrapper from "@/components/wrapper";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import WhyUnderperform from "./files/why-underperform";
import IntegratedExpertise from "./files/integrated-expertise";
import ProductPartners from "./files/product-partners";
import LegacyLensSection from "./files/legacy-lens";
import BuiltForFounders from "./files/built-for-founders";
import Testimonials from "./files/testimonials";
import CtaSection from "./files/cta-section";

const LandingPage = () => {
  return (
    <Wrapper>


      <section className="relative overflow-hidden bg-[#fff8e6] min-h-[calc(100vh-88px)]">
        <div className="container mx-auto px-3 md:px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center min-h-[calc(100vh-88px)] py-12 lg:py-0">
            <div className="flex flex-col justify-center space-y-6 relative z-10 max-w-[620px]">
              {/* Headline */}
              <h1
                className="font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d0d0d]"
                style={{ fontSize: "clamp(2.1rem, 3.5vw, 4rem)" }}
              >
                Your Product Doesn&apos;t Need Another Consultant.{" "}
                <span className="relative inline-block">
                  It Needs Execution.
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="text-[#4b5563] text-[15px] leading-[1.7] max-w-[520px]">
                Spur Wiz partners with founders and businesses to diagnose
                structural weaknesses, rebuild broken systems, and scale products
                with hands-on execution, not just advice. Whether you need
                restructuring, development, rebranding, or full product
                intervention, we step in and build with you.
              </p>

              {/* CTA Buttons */}
              <div className="flex md:flex-wrap gap-3 pt-2">
                <Button
                  label="Work With Us"
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon="arrow"
                  iconPosition="right"
                />
                <Button
                  label="Try Legacy Lens"
                  href="/legacy"
                  variant="outline"
                  size="md"
                  icon="sparkles"
                  iconPosition="left"
                />
              </div>
            </div>

            {/* ── Right: Hero Image ── */}
            <div className="relative flex items-end justify-center lg:justify-end h-60 md:h-[480px] lg:h-[calc(100vh-88px)] max-h-[700px]">
              {/* Soft glow blob behind image */}
              <div
                className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 70%, rgba(253,182,47,0.13) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(16,63,213,0.07) 0%, transparent 70%)",
                }}
              />

              {/* The hero person image */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/heroImage.png"
                  alt="Business execution specialist"
                  fill
                  priority
                  // sizes="(max-width: 1024px) 100vw, 100vw"
                  className="object-cover object-start !w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto py-10">
        <WhyUnderperform />
        <IntegratedExpertise />
        <ProductPartners />
        <LegacyLensSection />
        <BuiltForFounders />
        <Testimonials />
        <CtaSection />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
