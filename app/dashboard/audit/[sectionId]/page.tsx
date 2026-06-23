"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  TrendingUp,
  AlertTriangle,
  FileText,
  Link2,
  RefreshCw,
  Download,
  ChevronRight,
  Target,
  BarChart3,
  Users,
  Megaphone,
  Cpu,
  DollarSign,
  ShieldCheck,
  Layers,
  Globe,
  TrendingDown,
  Package,
  HeartHandshake,
} from "lucide-react";
import { AuditSectionData, SectionStatus } from "../components/AuditSectionCard";
import { use, useState } from "react";

// ─── Full section dataset (same source of truth as audit page) ────────────────
const AUDIT_SECTIONS: AuditSectionData[] = [
  {
    id: "strategy",
    title: "Business Strategy",
    purpose: "Is the business direction clear, coherent, and executable?",
    icon: Target,
    score: 71, status: "partial", findingsCount: 5,
    evidence: ["Business Plan", "Notion", "Interviews"],
    color: "#103fd5", gradient: "linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)", pattern: "dots",
    findings: [
      { type: "strength", text: "Clear 3-year vision documented in business plan with defined market positioning." },
      { type: "gap",      text: "No OKR or quarterly goal-setting framework is in place." },
      { type: "gap",      text: "Competitive positioning analysis is outdated — last updated 18 months ago." },
      { type: "warning",  text: "Strategy is known to founders but not cascaded across the team." },
      { type: "strength", text: "Core values are defined and visible on internal documents." },
    ],
  },
  {
    id: "finance",
    title: "Financial Health",
    purpose: "Is money flowing sustainably and tracked with discipline?",
    icon: DollarSign,
    score: 48, status: "critical", findingsCount: 7,
    evidence: ["Expense Reports", "Bank Statements", "P&L Upload"],
    color: "#d97706", gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)", pattern: "grid",
    findings: [
      { type: "gap",      text: "No formal budget vs actuals tracking — expenses are managed reactively." },
      { type: "gap",      text: "Runway is less than 4 months at current burn rate with no fundraising in pipeline." },
      { type: "gap",      text: "3 out of 5 major vendors are on informal payment agreements with no contracts." },
      { type: "warning",  text: "Revenue is concentrated — 78% from a single client." },
      { type: "strength", text: "Monthly revenue has grown 12% MoM over the last quarter." },
      { type: "gap",      text: "No CFO, bookkeeper, or finance lead assigned on the team." },
      { type: "warning",  text: "Tax compliance status for the last fiscal year is unverified." },
    ],
  },
  {
    id: "operations",
    title: "Operations & Processes",
    purpose: "Can the business execute without relying on heroics?",
    icon: Cpu,
    score: 62, status: "partial", findingsCount: 6,
    evidence: ["Notion", "Jira", "SOP Upload"],
    color: "#059669", gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)", pattern: "lines",
    findings: [
      { type: "strength", text: "Core workflows are documented in Notion and referenced by the team." },
      { type: "gap",      text: "No SLA framework — delivery timelines are informally negotiated per client." },
      { type: "gap",      text: "Task management is inconsistent — some teams use Jira, others use WhatsApp." },
      { type: "strength", text: "Weekly sync ritual is established and has 85% attendance." },
      { type: "gap",      text: "No onboarding checklist exists — new hires shadow informally." },
      { type: "warning",  text: "Key-person dependency risk is high: 2 people hold most institutional knowledge." },
    ],
  },
  {
    id: "brand",
    title: "Brand & Identity",
    purpose: "Does the brand communicate credibility and consistency?",
    icon: Megaphone,
    score: 85, status: "complete", findingsCount: 3,
    evidence: ["Brand Guide", "Instagram", "LinkedIn", "Website"],
    color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)", pattern: "rings",
    findings: [
      { type: "strength", text: "Visual identity is consistent across website, social media, and print collateral." },
      { type: "strength", text: "Brand tone of voice is documented and adhered to across content channels." },
      { type: "warning",  text: "LinkedIn page is 3 months behind on updates — last post was February 2025." },
    ],
  },
  {
    id: "team",
    title: "Team & People",
    purpose: "Is the team structured, capable, and growing well?",
    icon: Users,
    score: 54, status: "partial", findingsCount: 6,
    evidence: ["Org Chart", "HR Docs", "Interviews"],
    color: "#0891b2", gradient: "linear-gradient(135deg, #0891b2 0%, #67e8f9 100%)", pattern: "cross",
    findings: [
      { type: "gap",      text: "No formal performance review cycle exists — feedback is ad hoc." },
      { type: "gap",      text: "4 out of 8 roles have no documented job descriptions." },
      { type: "strength", text: "Team NPS (internal survey) scored 72 — above industry benchmark." },
      { type: "warning",  text: "2 senior positions have been vacant for over 90 days." },
      { type: "gap",      text: "No learning and development budget is allocated for the team." },
      { type: "strength", text: "Founders are accessible and maintain strong team communication." },
    ],
  },
  {
    id: "product",
    title: "Product & Offering",
    purpose: "Is the product or service solving a real, measurable problem?",
    icon: Package,
    score: 78, status: "partial", findingsCount: 4,
    evidence: ["Product Docs", "Jira", "Customer Feedback"],
    color: "#dc2626", gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)", pattern: "dots",
    findings: [
      { type: "strength", text: "Core offering is well-differentiated with documented unique value proposition." },
      { type: "strength", text: "Customer retention rate is 81% — strong product-market signal." },
      { type: "gap",      text: "No product roadmap exists beyond the current quarter." },
      { type: "warning",  text: "Feature backlog has 40+ items with no prioritisation framework applied." },
    ],
  },
  {
    id: "digital",
    title: "Digital Presence",
    purpose: "Is the business discoverable and credible online?",
    icon: Globe,
    score: 67, status: "partial", findingsCount: 5,
    evidence: ["Instagram", "LinkedIn", "Website Audit", "X (Twitter)"],
    color: "#0f766e", gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)", pattern: "wave",
    findings: [
      { type: "strength", text: "Website is live, mobile-responsive, and loads under 2.5 seconds." },
      { type: "gap",      text: "No SEO strategy — organic search traffic is less than 3% of total visits." },
      { type: "gap",      text: "Google Business Profile is unclaimed and unverified." },
      { type: "warning",  text: "Social posting schedule is irregular — no content calendar in place." },
      { type: "strength", text: "Instagram engagement rate of 4.2% is above category average." },
    ],
  },
  {
    id: "compliance",
    title: "Legal & Compliance",
    purpose: "Is the business legally protected and regulatory compliant?",
    icon: ShieldCheck,
    score: 40, status: "critical", findingsCount: 6,
    evidence: ["CAC Docs", "Contracts Upload", "Policy Docs"],
    color: "#64748b", gradient: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)", pattern: "grid",
    findings: [
      { type: "gap",      text: "No client contract template exists — agreements are made verbally or via email." },
      { type: "gap",      text: "Data privacy policy is not published on the website (NDPR requirement)." },
      { type: "strength", text: "Company is fully incorporated at CAC — RC number verified." },
      { type: "gap",      text: "No IP protection in place for proprietary processes and brand assets." },
      { type: "gap",      text: "No whistleblowing or code of conduct policy documented." },
      { type: "warning",  text: "Intellectual property ownership not formally assigned in contractor agreements." },
    ],
  },
  {
    id: "sales",
    title: "Sales & Revenue",
    purpose: "Does the business have a repeatable engine for generating revenue?",
    icon: TrendingUp,
    score: 58, status: "partial", findingsCount: 5,
    evidence: ["CRM", "Sales Reports", "Pitch Docs"],
    color: "#b45309", gradient: "linear-gradient(135deg, #b45309 0%, #fcd34d 100%)", pattern: "lines",
    findings: [
      { type: "strength", text: "3-month sales pipeline is documented and reviewed weekly." },
      { type: "gap",      text: "No formal CRM in use — leads are tracked in a spreadsheet." },
      { type: "gap",      text: "Average sales cycle is unknown — no conversion rate data collected." },
      { type: "warning",  text: "No retention or upsell playbook exists for existing clients." },
      { type: "strength", text: "Referral channel accounts for 60% of new business — strong word of mouth." },
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships & Ecosystem",
    purpose: "Is the business building leverage through the right relationships?",
    icon: HeartHandshake,
    score: 45, status: "partial", findingsCount: 4,
    evidence: ["MOU Docs", "Partner List", "Confluence"],
    color: "#6366f1", gradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)", pattern: "rings",
    findings: [
      { type: "strength", text: "Active partnership with Synergix Africa providing institutional reach." },
      { type: "gap",      text: "No formal partnership framework or co-marketing agreements in place." },
      { type: "gap",      text: "Distribution partners are not tracked or reviewed for performance." },
      { type: "warning",  text: "Key supplier relationship is at risk — no contract renewal in 6 months." },
    ],
  },
  {
    id: "data",
    title: "Data & Intelligence",
    purpose: "Is the business making decisions backed by real data?",
    icon: BarChart3,
    score: 32, status: "critical", findingsCount: 5,
    evidence: ["Notion", "Google Analytics", "CRM Export"],
    color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899 0%, #f9a8d4 100%)", pattern: "cross",
    findings: [
      { type: "gap",      text: "No business intelligence dashboard exists — decisions are based on intuition." },
      { type: "gap",      text: "Customer data is scattered across WhatsApp, email, and spreadsheets." },
      { type: "gap",      text: "No funnel analytics — website-to-lead conversion rate is unmeasured." },
      { type: "warning",  text: "Data is not backed up — critical files stored only on personal laptops." },
      { type: "strength", text: "Founders are data-aware and expressed strong intent to adopt analytics tooling." },
    ],
  },
  {
    id: "scalability",
    title: "Scalability & Systems",
    purpose: "Can the business grow 3x without breaking structurally?",
    icon: Layers,
    score: 38, status: "critical", findingsCount: 5,
    evidence: ["Org Chart", "SOP Upload", "Tech Stack Docs"],
    color: "#14b8a6", gradient: "linear-gradient(135deg, #0d9488 0%, #5eead4 100%)", pattern: "wave",
    findings: [
      { type: "gap",      text: "No documented playbook for scaling team — growth plans are ad hoc." },
      { type: "gap",      text: "Technology stack has no redundancy — a single server failure would halt operations." },
      { type: "gap",      text: "No succession plan for any leadership role." },
      { type: "warning",  text: "Current tools cannot handle 3x transaction volume without manual intervention." },
      { type: "strength", text: "Core service can be componentised — modular delivery is architecturally possible." },
    ],
  },
];

// ─── Status config ────────────────────────────────────────────────────────────
const statusConfig: Record<SectionStatus, { label: string; icon: typeof CheckCircle2; pill: string }> = {
  complete: { label: "Complete", icon: CheckCircle2, pill: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  partial:  { label: "Partial",  icon: Clock,        pill: "bg-amber-50 text-amber-700 border-amber-200"     },
  pending:  { label: "Pending",  icon: Clock,        pill: "bg-[#f3f4f6] text-[#6b7280] border-[#e5e7eb]"   },
  critical: { label: "Critical", icon: XCircle,      pill: "bg-red-50 text-red-600 border-red-200"           },
};

const findingMeta = {
  gap:      { icon: AlertCircle,  dot: "bg-red-400",     label: "Gap",      pill: "bg-red-50 text-red-600 border-red-100"         },
  strength: { icon: TrendingUp,   dot: "bg-emerald-400", label: "Strength", pill: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  warning:  { icon: AlertTriangle, dot: "bg-amber-400",  label: "Warning",  pill: "bg-amber-50 text-amber-700 border-amber-100"   },
};

// ─── Score ring ───────────────────────────────────────────────────────────────
function LargeScoreRing({ score, color }: { score: number; color: string }) {
  const size = 100;
  const r = 40;
  const circ = 2 * Math.PI * r;
  const scoreLabel = score >= 80 ? "Excellent" : score >= 60 ? "Good" : score >= 40 ? "Fair" : "Critical";

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f3f4f6" strokeWidth="7" />
        <motion.circle
          cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
          strokeWidth="7" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - (score / 100) * circ }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[24px] font-bold leading-none tracking-[-0.04em]"
          style={{ color }}
        >
          {score}
        </motion.span>
        <span className="text-[10px] text-[#9ca3af] font-medium mt-0.5">{scoreLabel}</span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AuditSectionPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const formParams = use(params as any) || {}
  // const [nextStage, setNextStage] = useState(0)
  console.log({formParams})
  const { sectionId } = formParams as any

  console.log(sectionId)
  const router = useRouter();
  const section = AUDIT_SECTIONS.find((s, index) => s.id === sectionId );

  if (!section) {
    return (
      <div className="flex items-center justify-center h-full text-[#9ca3af] text-[14px]">
        Section not found.
      </div>
    );
  }

  const Icon = section.icon;
  const { label: statusLabel, icon: StatusIcon, pill: statusPill } = statusConfig[section.status];

  const gaps      = section.findings.filter((f) => f.type === "gap");
  const strengths = section.findings.filter((f) => f.type === "strength");
  const warnings  = section.findings.filter((f) => f.type === "warning");

  // Adjacent sections for navigation
  const currentIndex = AUDIT_SECTIONS.findIndex((s) => s.id === sectionId);
  const prevSection  = AUDIT_SECTIONS[currentIndex - 1] ?? null;
  const nextSection  = AUDIT_SECTIONS[currentIndex + 1] ?? null;

  console.log({ currentIndex, prevSection, nextSection })

  return (
    <div className="min-h-full bg-[#f0f2f7]">

      {/* ── Page-level header ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-[12.5px] text-[#6b7280] hover:text-[#374151] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to audit
          </button>
          <span className="text-[#d1d5db]">/</span>
          <span className="text-[12.5px] text-[#9ca3af]">Q3 Operational Audit</span>
          <span className="text-[#d1d5db]">/</span>
          <span className="text-[12.5px] font-semibold text-[#374151]">{section.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#e5e7eb] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
          >
            <RefreshCw size={12} /> Re-analyse
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-[12px] font-semibold"
            style={{ background: section.gradient, boxShadow: `0 3px 12px ${section.color}30` }}
          >
            <Download size={12} /> Export section
          </motion.button>
        </div>
      </motion.div>

      <div className="p-6 max-w-[960px] mx-auto">

        {/* ── Hero card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden mb-5"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
        >
          {/* SVG pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill={section.color} fillOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>

          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: section.gradient }} />

          <div className="relative z-10 p-6 pl-7">
            <div className="flex items-start gap-6">
              <LargeScoreRing score={section.score} color={section.color} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${section.color}14` }}
                  >
                    <Icon size={16} style={{ color: section.color }} />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${statusPill}`}
                  >
                    <StatusIcon size={10} />
                    {statusLabel}
                  </span>
                </div>

                <h1 className="text-[22px] font-bold text-[#0d1117] tracking-[-0.04em] leading-tight mb-1">
                  {section.title}
                </h1>
                <p className="text-[13.5px] text-[#6b7280] leading-relaxed mb-4 max-w-[480px]">
                  {section.purpose}
                </p>

                {/* Summary stat row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                    <AlertCircle size={11} className="text-red-400" />
                    <span className="text-[11.5px] font-semibold text-[#374151]">{gaps.length} gaps</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                    <TrendingUp size={11} className="text-emerald-500" />
                    <span className="text-[11.5px] font-semibold text-[#374151]">{strengths.length} strengths</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                    <AlertTriangle size={11} className="text-amber-500" />
                    <span className="text-[11.5px] font-semibold text-[#374151]">{warnings.length} warnings</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                    <FileText size={11} className="text-[#9ca3af]" />
                    <span className="text-[11.5px] font-semibold text-[#374151]">{section.evidence.length} evidence sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">

          {/* Left — findings */}
          <div className="space-y-4">

            {/* Gaps */}
            {gaps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.35 }}
                className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
              >
                <div className="px-5 py-4 border-b border-[#f3f4f6] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertCircle size={14} className="text-red-500" />
                  </div>
                  <h2 className="text-[13.5px] font-semibold text-[#111827]">Gaps identified</h2>
                  <span className="ml-auto text-[11px] font-bold bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded-full">
                    {gaps.length}
                  </span>
                </div>
                <div className="divide-y divide-[#f9fafb]">
                  {gaps.map((finding, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.18 + i * 0.06, duration: 0.28 }}
                      className="flex items-start gap-3.5 px-5 py-4"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-red-500">{i + 1}</span>
                      </div>
                      <p className="text-[13px] text-[#374151] leading-relaxed flex-1">{finding.text}</p>
                      <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-500 border border-red-100 mt-0.5">
                        Gap
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Warnings */}
            {warnings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
                className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
              >
                <div className="px-5 py-4 border-b border-[#f3f4f6] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                    <AlertTriangle size={14} className="text-amber-500" />
                  </div>
                  <h2 className="text-[13.5px] font-semibold text-[#111827]">Warnings</h2>
                  <span className="ml-auto text-[11px] font-bold bg-amber-50 text-amber-600 border border-amber-100 px-2 py-0.5 rounded-full">
                    {warnings.length}
                  </span>
                </div>
                <div className="divide-y divide-[#f9fafb]">
                  {warnings.map((finding, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.24 + i * 0.06, duration: 0.28 }}
                      className="flex items-start gap-3.5 px-5 py-4"
                    >
                      <AlertTriangle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                      <p className="text-[13px] text-[#374151] leading-relaxed">{finding.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Strengths */}
            {strengths.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
                className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
              >
                <div className="px-5 py-4 border-b border-[#f3f4f6] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <TrendingUp size={14} className="text-emerald-500" />
                  </div>
                  <h2 className="text-[13.5px] font-semibold text-[#111827]">Strengths</h2>
                  <span className="ml-auto text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full">
                    {strengths.length}
                  </span>
                </div>
                <div className="divide-y divide-[#f9fafb]">
                  {strengths.map((finding, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.32 + i * 0.06, duration: 0.28 }}
                      className="flex items-start gap-3.5 px-5 py-4"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                      <p className="text-[13px] text-[#374151] leading-relaxed">{finding.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right — sidebar */}
          <div className="space-y-4">

            {/* Evidence used */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="bg-white rounded-2xl border border-[#e5e7eb] p-5"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${section.color}14` }}>
                  <Link2 size={12} style={{ color: section.color }} />
                </div>
                <h3 className="text-[12.5px] font-semibold text-[#111827]">Evidence used</h3>
              </div>
              <div className="space-y-2">
                {section.evidence.map((ev, i) => (
                  <motion.div
                    key={ev}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#f3f4f6] bg-[#f9fafb]"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${section.color}12` }}
                    >
                      <FileText size={11} style={{ color: section.color }} />
                    </div>
                    <span className="text-[12px] font-medium text-[#374151]">{ev}</span>
                    <CheckCircle2 size={11} className="text-emerald-400 ml-auto shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Finding breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.35 }}
              className="bg-white rounded-2xl border border-[#e5e7eb] p-5"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-[12.5px] font-semibold text-[#111827] mb-4">Finding breakdown</h3>
              {(["gap", "strength", "warning"] as const).map((type) => {
                const count = section.findings.filter((f) => f.type === type).length;
                const total = section.findings.length;
                const { dot, label, pill } = findingMeta[type];
                return (
                  <div key={type} className="mb-3 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${dot}`} />
                        <span className="text-[11.5px] font-medium text-[#374151]">{label}s</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pill}`}>
                        {count}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(count / total) * 100}%` }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className={`h-full rounded-full ${dot}`}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Section navigation */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="bg-white rounded-2xl border border-[#e5e7eb] p-4"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">
                Navigate sections
              </p>
              <div className="space-y-1.5">
                {prevSection && (
                  <button
                    onClick={() =>
                      router.push(`/dashboard/audit/${prevSection.id}`)
                    }
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-xl border border-[#f3f4f6] hover:border-[#e5e7eb] hover:bg-[#f9fafb] transition-colors text-left group"
                  >
                    <ArrowLeft size={12} className="text-[#9ca3af] group-hover:text-[#374151] transition-colors" />
                    <span className="text-[12px] font-medium text-[#374151] truncate">{prevSection.title}</span>
                  </button>
                )}
                {nextSection && (
                  <button
                    onClick={() =>
                      router.push(`/dashboard/audit/${nextSection.id}`)
                    }
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-xl border border-[#f3f4f6] hover:border-[#e5e7eb] hover:bg-[#f9fafb] transition-colors text-left group"
                  >
                    <span className="text-[12px] font-medium text-[#374151] truncate flex-1">{nextSection.title}</span>
                    <ChevronRight size={12} className="text-[#9ca3af] group-hover:text-[#374151] shrink-0 transition-colors" />
                  </button>
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Bottom section navigation bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="mt-6 flex items-center justify-between bg-white border border-[#e5e7eb] rounded-2xl px-5 py-4"
          style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
        >
          <div>
            {prevSection ? (
              <button
                onClick={() => router.push(`/dashboard/audit/${prevSection.id}`)}
                className="flex items-center gap-2 text-[13px] font-medium text-[#374151] hover:text-[#103fd5] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>{prevSection.title}</span>
              </button>
            ) : (
              <span className="text-[13px] text-[#9ca3af]">First section</span>
            )}
          </div>

          <button
            onClick={() => router.push(`/dashboard/audit`)}
            className="text-[12.5px] text-[#6b7280] hover:text-[#374151] transition-colors"
          >
            All sections
          </button>

          <div>
            {nextSection ? (
              <button
                onClick={() => router.push(`/dashboard/audit/${nextSection.id}`)}
                className="flex items-center gap-2 text-[13px] font-medium text-[#374151] hover:text-[#103fd5] transition-colors"
              >
                <span>{nextSection.title}</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <span className="text-[13px] text-[#9ca3af]">Last section</span>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
