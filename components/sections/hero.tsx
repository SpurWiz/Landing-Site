import Image from "next/image";
import Button from "@/components/ui/Button";

// Put your dashboard screenshot at public/images/dashboard.png
// and set its real pixel size here so Next can reserve the space.
const DASHBOARD_IMAGE = "/images/dashboard.png";
const DASHBOARD_WIDTH = 1600;
const DASHBOARD_HEIGHT = 1000;
const DASHBOARD_URL = "legacylens/dashboard";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Faint grid, fades out toward the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,63,213,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,63,213,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
        }}
      />
      {/* Soft brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,63,213,0.10) 0%, rgba(253,182,47,0.08) 45%, transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-4 md:px-6 pt-16 md:pt-24">
        {/* Copy */}
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-[#103FD5]/15 bg-[#103FD5]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#103FD5]">
            In partnership with Synergix Africa
          </span>

          <h1
            className="mt-6 font-extrabold leading-[1.06] tracking-[-0.035em] text-[#0d0d0d]"
            style={{ fontSize: "clamp(1.25rem, 4.5vw, 3.5rem)" }}
          >
            We Don&apos;t Just Build Businesses.{" "}
            <span className="text-[#103FD5]">We Build Legacies.</span>
          </h1>

          <p className="mt-6 max-w-[640px] text-[13px] leading-[1.7] text-[#4b5563] md:text-[14px]">
            Measure, understand, and improve your organisation&apos;s health with
            LegacyLens, our AI-powered platform, backed by hands-on execution
            consulting.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              label="Work With Us"
              href="/contact"
              variant="primary"
              size="lg"
              icon="arrow"
              iconPosition="right"
            />
            <Button
              label="Try LegacyLens"
              href="/legacylens"
              variant="ghost"
              size="lg"
              icon="sparkles"
              iconPosition="left"
            />
          </div>
        </div>

        {/* Dashboard preview in a browser frame, cropped and faded at the bottom */}
        <div className="relative mx-auto mt-14 max-w-[1080px] md:mt-20">
          <div className="relative max-h-[300px] overflow-hidden rounded-t-[20px] border border-b-0 border-[#e5e7eb] bg-white shadow-[0_30px_80px_-20px_rgba(16,63,213,0.25)] sm:max-h-[420px] md:max-h-[560px]">
            {/* Browser bar */}
            <div className="flex items-center gap-3 border-b border-[#e5e7eb] bg-[#f9fafb] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" />
              </div>
              <div className="mx-auto w-full max-w-[520px] truncate rounded-lg border border-[#e5e7eb] bg-white px-3 py-1.5 text-center text-[12px] text-[#9ca3af]">
                {DASHBOARD_URL}
              </div>
              <div className="hidden w-[42px] sm:block" />
            </div>

            <Image
              src={DASHBOARD_IMAGE}
              alt="LegacyLens dashboard preview"
              width={DASHBOARD_WIDTH}
              height={DASHBOARD_HEIGHT}
              priority
              className="h-auto w-full"
            />

            {/* Bottom fade into the page */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;