import Wrapper from "@/components/wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WhyUnderperform from "./files/why-underperform";
import IntegratedExpertise from "./files/integrated-expertise";
import ProductPartners from "./files/product-partners";
import LegacyLensSection from "./files/legacy-lens";
import BuiltForFounders from "./files/built-for-founders";
import Testimonials from "./files/testimonials";
import CtaSection from "./files/cta-section";
import { HiSparkles } from "react-icons/hi2";
import { TbArrowRight, TbCheck } from "react-icons/tb";
import {
  BarChart3,
  Repeat,
  Palette,
  Settings,
  User,
  Users,
  Monitor
} from "lucide-react";

// ── Synergix Partnership section ──
const SynergixPartnership = () => (
  <section className="bg-[#F9F9F9] py-16">
    <div className="container mx-auto px-6">
      <div className="rounded-2xl bg-[#0d0d0d] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* Left: Content */}
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-5">
            <span className="inline-flex items-center gap-1.5 self-start bg-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/12">
              Strategic Partnership
            </span>

            <div>
              <p className="text-white/45 text-[13px] mb-1">In partnership with</p>
              <h2
                className="font-extrabold leading-[1.1] tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)" }}
              >
                Synergix Africa
              </h2>
            </div>

            <p className="text-white/60 text-[15px] leading-[1.75] max-w-[460px]">
              Spur-Wiz Dynasty Global and Synergix Africa have signed a strategic partnership to
              expand institutional capacity building across Nigeria and sub-Saharan Africa.
              Together, we deliver LegacyLens-powered training programmes that create measurable,
              lasting organisational improvement.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                "LegacyLens-powered training and cohort programmes",
                "Joint institutional capacity building for enterprises and NGOs",
                "Expanded reach across Nigeria's commercial hubs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#fdb62f]/20 flex items-center justify-center">
                    <TbCheck size={10} className="text-[#fdb62f]" strokeWidth={3} />
                  </span>
                  <span className="text-white/65 text-[13.5px] leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="self-start inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 mt-2"
            >
              Learn about our services
              <TbArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Visual accent */}
          <div className="relative bg-[#103FD5]/10 hidden lg:flex items-center justify-center p-12">
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#103FD5] flex items-center justify-center text-white font-extrabold text-[32px] mx-auto mb-6 shadow-2xl shadow-[#103FD5]/40">
                S
              </div>
              <p className="text-white font-bold text-[17px] mb-1">Synergix Africa</p>
              <p className="text-white/45 text-[13px]">Signed Partnership · 2026</p>
              <div className="mt-8 inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#fdb62f]" />
                <span className="text-white/60 text-[12px] font-medium">Partnership Active</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #103FD5 0%, transparent 50%), radial-gradient(circle at 70% 80%, #fdb62f 0%, transparent 40%)"
            }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── Services overview section ──
const ServicesOverview = () => {
 const pillars = [
  { icon: <BarChart3  />, title: "Brand Audit + LHS Score", price: "₦500K–₦2M" },
  { icon: <Repeat  />, title: "LaaS Retainer", price: "From ₦1.5M/mo" },
  { icon: <Palette  />, title: "Brand Identity Transformation", price: "₦800K–₦3M" },
  { icon: <Settings  />, title: "Operational Systems Redesign", price: "₦1M–₦4M" },
  { icon: <User  />, title: "Executive Brand Coaching", price: "₦300K–₦800K" },
  { icon: <Users  />, title: "Institutional Capacity Building", price: "₦500K–₦2M" },
  { icon: <Monitor  />, title: "Digital Transformation Advisory", price: "₦500K–₦2.5M" },
];

  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#fdb62f]/15 text-[#b07d00] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              <HiSparkles size={11} />
              What We Offer
            </span>
            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Seven Execution Pillars
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start inline-flex items-center gap-2 border border-[#103FD5]/30 text-[#103FD5] hover:bg-[#103FD5]/5 text-[14px] font-bold px-5 py-2.5 rounded-full transition-all duration-200"
          >
            View all services
            <TbArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e7eb] rounded-xl p-4 hover:border-[#103FD5]/20 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-[20px] block mb-3">{pillar.icon}</span>
              <p className="font-bold text-[14px] text-[#111827] leading-snug mb-2 group-hover:text-[#103FD5] transition-colors">
                {pillar.title}
              </p>
              <p className="text-[12px] text-[#9ca3af] font-semibold">{pillar.price}</p>
            </div>
          ))}

          <Link
            href="/services"
            className="bg-[#103FD5]/5 border border-[#103FD5]/15 rounded-xl p-4 hover:bg-[#103FD5]/10 transition-all duration-200 flex flex-col items-center justify-center text-center gap-2"
          >
            <TbArrowRight size={20} className="text-[#103FD5]" />
            <p className="font-bold text-[14px] text-[#103FD5]">Explore All Services</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <Wrapper>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#fff8e6] min-h-[calc(100vh-88px)]">
        <div className="container mx-auto px-3 md:px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center min-h-[calc(100vh-88px)] py-12 lg:py-0">
            <div className="flex flex-col justify-center space-y-6 relative z-10 max-w-[620px]">
              {/* Partnership badge */}
              <span className="inline-flex items-center gap-1.5 self-start bg-[#103FD5]/10 text-[#103FD5] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#103FD5]/15">
                In partnership with Synergix Africa
              </span>

              {/* Headline - updated per CTO brief */}
              <h1
                className="font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d0d0d]"
                style={{ fontSize: "clamp(2.1rem, 3.5vw, 4rem)" }}
              >
                We Don't Just Build Businesses.{" "}
                <span className="text-[#103FD5]">We Build Legacies.</span>
              </h1>

              {/* Sub-copy */}
              <p className="text-[#4b5563] text-[15px] leading-[1.7] max-w-[520px]">
                Spur-Wiz Dynasty Global is Africa's institutional intelligence company, helping organisations measure, understand, and improve their health through our AI-powered LegacyLens platform and hands-on execution consulting.
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
                  label="Try LegacyLens"
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
              <div
                className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 60% 70%, rgba(253,182,47,0.13) 0%, transparent 70%)",
                }}
              />
              <div className="relative w-full h-full">
                <Image
                  src="/images/heroImage.png"
                  alt="Business execution specialist"
                  fill
                  priority
                  className="object-cover object-start !w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LegacyLens preview strip ── */}
      <section className="bg-[#F9F9F9] pt-12 border-t border-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                Introducing
              </p>
              <h2 className="font-extrabold text-[22px] text-[#0d0d0d] tracking-tight">
                <span className="text-[#111827]">Legacy</span>
                <span className="text-[#fdb62f]">Lens</span>
                {" "}{" "}
                <span className="text-[#6b7280] font-semibold text-[18px]">Africa's first AI-generated organisational health score</span>
              </h2>
            </div>
            <Link
              href="/legacy"
              className="self-start sm:self-center inline-flex items-center gap-2 bg-[#fdb62f] hover:bg-[#e6a428] text-[#0d0d0d] text-[14px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 flex-shrink-0"
            >
              <HiSparkles size={14} />
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto pb-10">
        <WhyUnderperform />
        <ServicesOverview />
        <IntegratedExpertise />
        <ProductPartners />
        <LegacyLensSection />
        <SynergixPartnership />
        <BuiltForFounders />
        <Testimonials />
        <CtaSection />
      </div>
    </Wrapper>
  );
};

export default LandingPage;