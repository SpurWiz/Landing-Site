import React from "react";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { TbQuote } from "react-icons/tb";

const avatars = [
  { id: 1, src: "/images/avatar-1.png", alt: "Founder 1" },
  { id: 2, src: "/images/avatar-2.png", alt: "Founder 2" },
  { id: 3, src: "/images/avatar-3.png", alt: "Founder 3" },
  { id: 4, src: "/images/avatar-4.png", alt: "Founder 4" },
];

const testimonial = {
  quote:
    "The Spur Wiz team didn't just give us advice — they embedded with us. Within three months, they rebuilt our operational backbone, cleaned up our brand, and helped us launch with real confidence. They stay until it works.",
  name: "Adetunde Tolani-Emile",
  role: "Founder, Product Studio",
};

const Testimonials = () => {
  return (
    <section className="relative bg-[#0b1433] py-24 lg:py-32 overflow-hidden">
      {/* ── Background gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 70% 50%, rgba(16,63,213,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: Header + Avatars ── */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 self-start bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/15">
              <HiSparkles size={11} />
              Client Stories
            </span>

            <h2
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              What Founders Say After Working With Us
            </h2>

            <p className="text-white/55 text-[15px] leading-[1.75] max-w-[420px]">
              Real results from real partnerships. No hand-wavy outcomes — just
              founders who now run tighter, faster, better businesses.
            </p>

            {/* Avatar cluster */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                {avatars.map((av, i) => (
                  <div
                    key={av.id}
                    className="relative w-11 h-11 rounded-full border-2 border-[#0b1433] overflow-hidden"
                    style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
                  >
                    <Image
                      src={av.src}
                      alt={av.alt}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <span className="ml-4 text-white/60 text-[13px] font-medium">
                  +40 founders served
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#fdb62f"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 22l-2.09-6.26L4 14l5.91-1.74L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-white/50 text-[12px]">
                  5.0 average rating
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Testimonial Card ── */}
          <div className="bg-white/6 border border-white/12 rounded-2xl p-8 backdrop-blur-sm">
            {/* Quote icon */}
            <div className="w-10 h-10 rounded-xl bg-[#fdb62f]/15 text-[#fdb62f] flex items-center justify-center mb-6">
              <TbQuote size={20} />
            </div>

            {/* Quote text */}
            <blockquote className="text-white/85 text-[16px] leading-[1.8] font-medium mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#fdb62f]/40">
                <Image
                  src="/images/testimonial-author.png"
                  alt={testimonial.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold text-[14px]">
                  {testimonial.name}
                </p>
                <p className="text-white/45 text-[12px]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
