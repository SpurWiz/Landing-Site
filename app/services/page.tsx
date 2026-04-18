import Wrapper from "@/components/wrapper";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
import {
  TbChartBar,
  TbBrush,
  TbSettings,
  TbUser,
  TbUsers,
  TbDeviceLaptop,
  TbRepeat,
  TbArrowRight,
  TbCheck,
} from "react-icons/tb";

// ── Service data from CTO Master Brief ──
const services = [
  {
    id: 1,
    icon: <TbChartBar size={22} />,
    badge: "Diagnostic",
    title: "Brand Audit + LHS Score",
    tagline: "Africa's first AI-generated organisational health score.",
    desc: "A full LegacyLens audit with CEO-reviewed report. We assess your brand consistency, operational efficiency, and cultural resonance — and produce your Lens Health Score (LHS) from 0 to 100.",
    deliverables: [
      "LHS composite score (0–100) with dimensional breakdown",
      "Brand Consistency, Ops Efficiency & Cultural Resonance scores",
      "10 prioritised action recommendations",
      "Branded PDF audit report for board and investor use",
    ],
    price: "₦500,000 – ₦2,000,000",
    priceNote: "Per audit engagement",
    highlight: false,
  },
  {
    id: 2,
    icon: <TbRepeat size={22} />,
    badge: "Ongoing",
    title: "LaaS Retainer (Full Service)",
    tagline: "Embedded execution support — month after month.",
    desc: "Ongoing consulting plus monthly LHS monitoring and strategy implementation. We embed into your institutional improvement programme and track your score trend over time.",
    deliverables: [
      "Monthly LHS re-scoring and trend tracking",
      "Active dashboard with dimensional comparison",
      "CEO-led strategy implementation support",
      "Priority access to all new Lens Portfolio products",
    ],
    price: "From ₦1,500,000",
    priceNote: "Per month",
    highlight: true,
  },
  {
    id: 3,
    icon: <TbBrush size={22} />,
    badge: "Transformation",
    title: "Brand Identity Transformation",
    tagline: "Complete rebrand guided by your LHS findings.",
    desc: "New visual identity, brand voice guide, and content standards — built directly on the gaps your LHS score identified. No guesswork, no generic templates.",
    deliverables: [
      "Full visual identity redesign (logo, typography, colour system)",
      "Brand voice and messaging framework",
      "Content standards and approval guidelines",
      "Design system documentation for internal teams",
    ],
    price: "₦800,000 – ₦3,000,000",
    priceNote: "Per project",
    highlight: false,
  },
  {
    id: 4,
    icon: <TbSettings size={22} />,
    badge: "Systems",
    title: "Operational Systems Redesign",
    tagline: "Build the systems your team can run without you.",
    desc: "SOP development, process mapping, and team structure redesign — guided by the Ops Efficiency dimension findings from your LHS audit. We eliminate the founder over-dependency.",
    deliverables: [
      "Full operational process mapping and documentation",
      "Standard Operating Procedures (SOPs) for key functions",
      "Team structure redesign and accountability framework",
      "Ops findings export in structured, implementable format",
    ],
    price: "₦1,000,000 – ₦4,000,000",
    priceNote: "Per project",
    highlight: false,
  },
  {
    id: 5,
    icon: <TbUser size={22} />,
    badge: "Personal",
    title: "Executive Brand Coaching",
    tagline: "Personal brand development for founders and executives.",
    desc: "Using FounderLens as the diagnostic tool, we audit your LinkedIn presence, content consistency, professional positioning, and communication tone — then build a personal brand improvement roadmap.",
    deliverables: [
      "FounderLens personal brand score (0–100)",
      "LinkedIn and content consistency analysis",
      "Professional positioning assessment",
      "8-item personal brand improvement roadmap",
    ],
    price: "₦300,000 – ₦800,000",
    priceNote: "Per engagement",
    highlight: false,
  },
  {
    id: 6,
    icon: <TbUsers size={22} />,
    badge: "Cohort",
    title: "Institutional Capacity Building",
    tagline: "Training programmes that create lasting internal alignment.",
    desc: "Structured training for teams on brand health, operational discipline, and cultural alignment. Delivered in partnership with Synergix Africa.",
    deliverables: [
      "Cohort-based training programme (on-site or virtual)",
      "Brand health and operational discipline modules",
      "Cultural alignment and institutional memory workshops",
      "Progress tracking dashboard for cohort participants",
    ],
    price: "₦500,000 – ₦2,000,000",
    priceNote: "Per cohort",
    highlight: false,
  },
  {
    id: 7,
    icon: <TbDeviceLaptop size={22} />,
    badge: "Advisory",
    title: "Digital Transformation Advisory",
    tagline: "Tech stack, SaaS tools, and digital workflow design.",
    desc: "CTO-level advisory for organisations modernising their operations. We assess your current systems, recommend the right tools, and design workflows that scale without breaking.",
    deliverables: [
      "Current tech stack and SaaS tool assessment",
      "Digital workflow design and documentation",
      "SaaS tool selection and onboarding guidance",
      "CTO advisory input on technical architecture",
    ],
    price: "₦500,000 – ₦2,500,000",
    priceNote: "Per project",
    highlight: false,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <div
    className={`relative group rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
      service.highlight
        ? "border-[#103FD5]/50 bg-[#103FD5]/6 hover:border-[#103FD5]/70"
        : "border-[#e5e7eb] bg-white hover:border-[#103FD5]/20 hover:shadow-md"
    }`}
  >
    {service.highlight && (
      <div className="absolute -top-3 left-6">
        <span className="bg-[#103FD5] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}

    <div className="flex items-start justify-between gap-4 mb-5">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
          service.highlight ? "bg-[#103FD5]/15 text-[#103FD5]" : "bg-[#f3f4f6] text-[#374151]"
        } group-hover:bg-[#103FD5]/12 group-hover:text-[#103FD5] transition-colors duration-200`}>
          {service.icon}
        </div>
        <div>
          <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 ${
            service.highlight ? "bg-[#103FD5]/15 text-[#103FD5]" : "bg-[#fdb62f]/12 text-[#b07d00]"
          }`}>
            {service.badge}
          </span>
          <h3 className="font-bold text-[17px] text-[#111827] leading-snug">
            {service.title}
          </h3>
          <p className="text-[13px] text-[#6b7280] mt-0.5 font-medium italic">
            {service.tagline}
          </p>
        </div>
      </div>
    </div>

    <p className="text-[#4b5563] text-[14px] leading-[1.75] mb-5">{service.desc}</p>

    {/* Deliverables */}
    <div className="space-y-2 mb-6">
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
        What you receive
      </p>
      {service.deliverables.map((d, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
            service.highlight ? "bg-[#103FD5]/20" : "bg-[#e5e7eb]"
          }`}>
            <TbCheck size={10} className={service.highlight ? "text-[#103FD5]" : "text-[#6b7280]"} strokeWidth={3} />
          </span>
          <span className="text-[13px] text-[#374151] leading-[1.6]">{d}</span>
        </div>
      ))}
    </div>

    {/* Price + CTA */}
    <div className="flex items-center justify-between pt-5 border-t border-[#e5e7eb]">
      <div>
        <p className="font-extrabold text-[16px] text-[#111827]">{service.price}</p>
        <p className="text-[11px] text-[#9ca3af]">{service.priceNote}</p>
      </div>
      <Link
        href="/contact"
        className={`inline-flex items-center gap-1.5 text-[13px] font-bold px-4 py-2.5 rounded-full transition-all duration-200 active:scale-[0.97] ${
          service.highlight
            ? "bg-[#103FD5] text-white hover:bg-[#0c2fa3]"
            : "border border-[#103FD5]/30 text-[#103FD5] hover:bg-[#103FD5]/5"
        }`}
      >
        Enquire
        <TbArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <Wrapper>
      {/* ── Hero ── */}
      <section className="bg-[#F9F9F9] pt-10 pb-14 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-[680px]">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-[#fdb62f]/15 text-[#b07d00] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
              <HiSparkles size={11} />
              Execution Services
            </span>

            <h1
              className="font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d0d0d] mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Management & Execution Services We Offer
            </h1>

            <p className="text-[#4b5563] text-[16px] leading-[1.75] max-w-[560px] mb-8">
              Our consulting arm is the premium tier of LegacyLens. Every engagement uses LegacyLens
              as the diagnostic foundation — then delivers implementation support on top of your score.
              We don't just tell you what's broken. We fix it with you.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#103FD5] hover:bg-[#0c2fa3] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
              >
                Book a Strategy Session
                <TbArrowRight size={15} />
              </Link>
              <Link
                href="/legacy"
                className="inline-flex items-center gap-2 border border-[#fdb62f] text-[#fdb62f] hover:bg-[#fdb62f]/10 text-[14px] font-bold px-6 py-3 rounded-full transition-all duration-200"
              >
                <HiSparkles size={14} />
                Try LegacyLens Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it connects ── */}
      <section className="bg-[#F9F9F9] pb-6">
        <div className="container mx-auto px-6">
          <div className="bg-[#0d0d0d] rounded-2xl px-7 py-6 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#103FD5]/20 text-[#5d7cff] flex items-center justify-center">
              <HiSparkles size={20} />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-[15px] mb-1">
                Every engagement starts with LegacyLens
              </p>
              <p className="text-white/55 text-[13.5px] leading-[1.7]">
                We use our AI-powered audit platform to baseline your organisation before any strategy work begins. This means every recommendation is grounded in data — not assumption. Your Lens Health Score is the compass for everything we do together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Synergix Partnership ── */}
      <section className="bg-[#F9F9F9] pb-16">
        <div className="container mx-auto px-6">
          <div className="border border-[#e5e7eb] bg-white rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#103FD5] flex items-center justify-center text-white font-extrabold text-[20px]">
              S
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">
                In Partnership With
              </p>
              <h3 className="font-bold text-[18px] text-[#111827] mb-1.5">Synergix Africa</h3>
              <p className="text-[#6b7280] text-[14px] leading-[1.7]">
                Our Institutional Capacity Building programme is delivered in partnership with Synergix Africa,
                expanding our training reach across Nigeria and sub-Saharan Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F9F9F9] pb-24">
        <div className="container mx-auto px-6 text-center flex flex-col items-center space-y-6">
          <h2
            className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d] max-w-[560px]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
          >
            Not sure which service is right for you?
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-[1.75] max-w-[400px]">
            Book a free strategy session. We'll assess your situation and recommend exactly where to start.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#103FD5] hover:bg-[#0c2fa3] text-white text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-200 active:scale-[0.97]"
          >
            Work With Us
            <TbArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default ServicesPage;
