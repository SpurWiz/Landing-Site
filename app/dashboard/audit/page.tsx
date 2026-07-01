"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Users,
  Megaphone,
  Cpu,
  DollarSign,
  ShieldCheck,
  Layers,
  Globe,
  TrendingUp,
  Package,
  HeartHandshake,
  LayoutGrid,
  List,
} from "lucide-react";
import AuditSectionCard, { AuditSectionData } from "./components/AuditSectionCard";
import AuditSummaryHeader from "./components/AuditSummaryHeader";

// ─── Audit data per project ───────────────────────────────────────────────────
// In production this would be fetched via API using the projectId
const AUDIT_SECTIONS: AuditSectionData[] = [
  {
    id: "strategy",
    title: "Business Strategy",
    purpose: "Is the business direction clear, coherent, and executable?",
    icon: Target,
    score: 71,
    status: "partial",
    findingsCount: 5,
    evidence: ["Business Plan", "Notion", "Interviews"],
    color: "#103fd5",
    gradient: "linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Clear 3-year vision documented in business plan with defined market positioning." },
      { type: "gap", text: "No OKR or quarterly goal-setting framework is in place." },
      { type: "gap", text: "Competitive positioning analysis is outdated — last updated 18 months ago." },
      { type: "warning", text: "Strategy is known to founders but not cascaded across the team." },
      { type: "strength", text: "Core values are defined and visible on internal documents." },
    ],
  },
  {
    id: "finance",
    title: "Financial Health",
    purpose: "Is money flowing sustainably and tracked with discipline?",
    icon: DollarSign,
    score: 48,
    status: "critical",
    findingsCount: 7,
    evidence: ["Expense Reports", "Bank Statements", "P&L Upload"],
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    pattern: "rings",
    findings: [
      { type: "gap", text: "No formal budget vs actuals tracking — expenses are managed reactively." },
      { type: "gap", text: "Runway is less than 4 months at current burn rate with no fundraising in pipeline." },
      { type: "gap", text: "3 out of 5 major vendors are on informal payment agreements with no contracts." },
      { type: "warning", text: "Revenue is concentrated — 78% from a single client." },
      { type: "strength", text: "Monthly revenue has grown 12% MoM over the last quarter." },
      { type: "gap", text: "No CFO, bookkeeper, or finance lead assigned on the team." },
      { type: "warning", text: "Tax compliance status for the last fiscal year is unverified." },
    ],
  },
  {
    id: "operations",
    title: "Operations & Processes",
    purpose: "Can the business execute without relying on heroics?",
    icon: Cpu,
    score: 62,
    status: "partial",
    findingsCount: 6,
    evidence: ["Notion", "Jira", "SOP Upload"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Core workflows are documented in Notion and referenced by the team." },
      { type: "gap", text: "No SLA framework — delivery timelines are informally negotiated per client." },
      { type: "gap", text: "Task management is inconsistent — some teams use Jira, others use WhatsApp." },
      { type: "strength", text: "Weekly sync ritual is established and has 85% attendance." },
      { type: "gap", text: "No onboarding checklist exists — new hires shadow informally." },
      { type: "warning", text: "Key-person dependency risk is high: 2 people hold most institutional knowledge." },
    ],
  },
  {
    id: "brand",
    title: "Brand & Identity",
    purpose: "Does the brand communicate credibility and consistency?",
    icon: Megaphone,
    score: 85,
    status: "complete",
    findingsCount: 3,
    evidence: ["Brand Guide", "Instagram", "LinkedIn", "Website"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Visual identity is consistent across website, social media, and print collateral." },
      { type: "strength", text: "Brand tone of voice is documented and adhered to across content channels." },
      { type: "warning", text: "LinkedIn page is 3 months behind on updates — last post was February 2025." },
    ],
  },
  {
    id: "team",
    title: "Team & People",
    purpose: "Is the team structured, capable, and growing well?",
    icon: Users,
    score: 54,
    status: "partial",
    findingsCount: 6,
    evidence: ["Org Chart", "HR Docs", "Interviews"],
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2 0%, #67e8f9 100%)",
    pattern: "rings",
    findings: [
      { type: "gap", text: "No formal performance review cycle exists — feedback is ad hoc." },
      { type: "gap", text: "4 out of 8 roles have no documented job descriptions." },
      { type: "strength", text: "Team NPS (internal survey) scored 72 — above industry benchmark." },
      { type: "warning", text: "2 senior positions have been vacant for over 90 days." },
      { type: "gap", text: "No learning and development budget is allocated for the team." },
      { type: "strength", text: "Founders are accessible and maintain strong team communication." },
    ],
  },
  {
    id: "product",
    title: "Product & Offering",
    purpose: "Is the product or service solving a real, measurable problem?",
    icon: Package,
    score: 78,
    status: "partial",
    findingsCount: 4,
    evidence: ["Product Docs", "Jira", "Customer Feedback"],
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Core offering is well-differentiated with documented unique value proposition." },
      { type: "strength", text: "Customer retention rate is 81% — strong product-market signal." },
      { type: "gap", text: "No product roadmap exists beyond the current quarter." },
      { type: "warning", text: "Feature backlog has 40+ items with no prioritisation framework applied." },
    ],
  },
  {
    id: "digital",
    title: "Digital Presence",
    purpose: "Is the business discoverable and credible online?",
    icon: Globe,
    score: 67,
    status: "partial",
    findingsCount: 5,
    evidence: ["Instagram", "LinkedIn", "Website Audit", "X (Twitter)"],
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Website is live, mobile-responsive, and loads under 2.5 seconds." },
      { type: "gap", text: "No SEO strategy — organic search traffic is less than 3% of total visits." },
      { type: "gap", text: "Google Business Profile is unclaimed and unverified." },
      { type: "warning", text: "Social posting schedule is irregular — no content calendar in place." },
      { type: "strength", text: "Instagram engagement rate of 4.2% is above category average." },
    ],
  },
  {
    id: "compliance",
    title: "Legal & Compliance",
    purpose: "Is the business legally protected and regulatory compliant?",
    icon: ShieldCheck,
    score: 40,
    status: "critical",
    findingsCount: 6,
    evidence: ["CAC Docs", "Contracts Upload", "Policy Docs"],
    color: "#64748b",
    gradient: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)",
    pattern: "rings",
    findings: [
      { type: "gap", text: "No client contract template exists — agreements are made verbally or via email." },
      { type: "gap", text: "Data privacy policy is not published on the website (NDPR requirement)." },
      { type: "strength", text: "Company is fully incorporated at CAC — RC number verified." },
      { type: "gap", text: "No IP protection in place for proprietary processes and brand assets." },
      { type: "gap", text: "No whistleblowing or code of conduct policy documented." },
      { type: "warning", text: "Intellectual property ownership not formally assigned in contractor agreements." },
    ],
  },
  {
    id: "sales",
    title: "Sales & Revenue",
    purpose: "Does the business have a repeatable engine for generating revenue?",
    icon: TrendingUp,
    score: 58,
    status: "partial",
    findingsCount: 5,
    evidence: ["CRM", "Sales Reports", "Pitch Docs"],
    color: "#b45309",
    gradient: "linear-gradient(135deg, #b45309 0%, #fcd34d 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "3-month sales pipeline is documented and reviewed weekly." },
      { type: "gap", text: "No formal CRM in use — leads are tracked in a spreadsheet." },
      { type: "gap", text: "Average sales cycle is unknown — no conversion rate data collected." },
      { type: "warning", text: "No retention or upsell playbook exists for existing clients." },
      { type: "strength", text: "Referral channel accounts for 60% of new business — strong word of mouth." },
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships & Ecosystem",
    purpose: "Is the business building leverage through the right relationships?",
    icon: HeartHandshake,
    score: 45,
    status: "partial",
    findingsCount: 4,
    evidence: ["MOU Docs", "Partner List", "Confluence"],
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
    pattern: "rings",
    findings: [
      { type: "strength", text: "Active partnership with Synergix Africa providing institutional reach." },
      { type: "gap", text: "No formal partnership framework or co-marketing agreements in place." },
      { type: "gap", text: "Distribution partners are not tracked or reviewed for performance." },
      { type: "warning", text: "Key supplier relationship is at risk — no contract renewal in 6 months." },
    ],
  },
  {
    id: "data",
    title: "Data & Intelligence",
    purpose: "Is the business making decisions backed by real data?",
    icon: BarChart3,
    score: 32,
    status: "critical",
    findingsCount: 5,
    evidence: ["Notion", "Google Analytics", "CRM Export"],
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f9a8d4 100%)",
    pattern: "rings",
    findings: [
      { type: "gap", text: "No business intelligence dashboard exists — decisions are based on intuition." },
      { type: "gap", text: "Customer data is scattered across WhatsApp, email, and spreadsheets." },
      { type: "gap", text: "No funnel analytics — website-to-lead conversion rate is unmeasured." },
      { type: "warning", text: "Data is not backed up — critical files stored only on personal laptops." },
      { type: "strength", text: "Founders are data-aware and expressed strong intent to adopt analytics tooling." },
    ],
  },
  {
    id: "scalability",
    title: "Scalability & Systems",
    purpose: "Can the business grow 3x without breaking structurally?",
    icon: Layers,
    score: 38,
    status: "critical",
    findingsCount: 5,
    evidence: ["Org Chart", "SOP Upload", "Tech Stack Docs"],
    color: "#14b8a6",
    gradient: "linear-gradient(135deg, #0d9488 0%, #5eead4 100%)",
    pattern: "rings",
    findings: [
      { type: "gap", text: "No documented playbook for scaling team — growth plans are ad hoc." },
      { type: "gap", text: "Technology stack has no redundancy — a single server failure would halt operations." },
      { type: "gap", text: "No succession plan for any leadership role." },
      { type: "warning", text: "Current tools cannot handle 3x transaction volume without manual intervention." },
      { type: "strength", text: "Core service can be componentised — modular delivery is architecturally possible." },
    ],
  },
];

const FILTER_OPTIONS = ["All", "Critical", "Partial", "Complete", "Pending"] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

export default function AuditPage({ params }: { params: { id: string } }) {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const projectId = params.id;

  const filtered = AUDIT_SECTIONS.filter((s) => {
    if (filter === "All") return true;
    return s.status === filter.toLowerCase();
  });

  const overallScore = Math.round(
    AUDIT_SECTIONS.reduce((acc, s) => acc + s.score, 0) / AUDIT_SECTIONS.length
  );
  const criticalGaps = AUDIT_SECTIONS.filter((s) => s.status === "critical").length;
  const strengths = AUDIT_SECTIONS.reduce(
    (acc, s) => acc + s.findings.filter((f) => f.type === "strength").length,
    0
  );
  const completedSections = AUDIT_SECTIONS.filter((s) => s.status === "complete").length;

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-[1200px] mx-auto">
      {/* Summary header */}
      <AuditSummaryHeader
        businessName="Adaeze Retail Co."
        projectName="Q3 Operational Audit"
        lens="LegacyLens"
        lensColor="#103fd5"
        lensGradient="linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)"
        overallScore={overallScore}
        lastRun="Today, 9:41 AM"
        totalSections={AUDIT_SECTIONS.length}
        completedSections={completedSections}
        criticalGaps={criticalGaps}
        strengths={strengths}
      />

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4 sm:mb-5"
      >
        {/* Filter tabs - horizontal scroll on mobile */}
        <div className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1 overflow-x-auto scrollbar-none flex-shrink-0">
          {FILTER_OPTIONS.map((f) => {
            const counts: Record<FilterOption, number> = {
              All: AUDIT_SECTIONS.length,
              Critical: AUDIT_SECTIONS.filter((s) => s.status === "critical").length,
              Partial: AUDIT_SECTIONS.filter((s) => s.status === "partial").length,
              Complete: AUDIT_SECTIONS.filter((s) => s.status === "complete").length,
              Pending: AUDIT_SECTIONS.filter((s) => s.status === "pending").length,
            };
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-[12px] font-medium flex items-center gap-1 transition-colors whitespace-nowrap"
                style={{ color: active ? "#103fd5" : "#6b7280" }}
              >
                {active && (
                  <motion.div
                    layoutId="audit-filter"
                    className="absolute inset-0 rounded-lg bg-[#eef2ff]"
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <span className="relative z-10">{f}</span>
                <span
                  className="relative z-10 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: active ? "#103fd5" : "#f3f4f6",
                    color: active ? "#fff" : "#9ca3af",
                  }}
                >
                  {counts[f]}
                </span>
              </button>
            );
          })}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1 ml-auto shrink-0">
          <button
            onClick={() => setView("grid")}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
              view === "grid" ? "bg-[#eef2ff] text-[#103fd5]" : "text-[#9ca3af] hover:text-[#374151]"
            }`}
          >
            <LayoutGrid size={13} className="sm:w-[14px] sm:h-[14px]" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
              view === "list" ? "bg-[#eef2ff] text-[#103fd5]" : "text-[#9ca3af] hover:text-[#374151]"
            }`}
          >
            <List size={13} className="sm:w-[14px] sm:h-[14px]" />
          </button>
        </div>
      </motion.div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 mb-3 sm:mb-4"
      >
        <div>
          <h2 className="text-[13px] sm:text-[14px] font-semibold text-[#0d1117] tracking-[-0.02em]">
            Audit sections
          </h2>
          <p className="text-[11px] sm:text-[12px] text-[#9ca3af] mt-0.5">
            {filtered.length} section{filtered.length !== 1 ? "s" : ""} &middot; Click any card to expand findings
          </p>
        </div>
      </motion.div>

      {/* Cards grid */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            : "flex flex-col gap-3"
        }
      >
        {filtered.map((section, i) => (
          <AuditSectionCard
            key={section.id}
            data={section}
            delay={0.06 * i}
            projectId={projectId}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 sm:py-16"
        >
          <p className="text-[14px] sm:text-[15px] font-medium text-[#6b7280]">No sections match this filter</p>
          <button
            onClick={() => setFilter("All")}
            className="text-[12px] sm:text-[13px] text-[#103fd5] font-medium mt-2 hover:underline"
          >
            Clear filter
          </button>
        </motion.div>
      )}
    </div>
  );
}