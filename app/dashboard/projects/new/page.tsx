"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Building2,
  Plug,
  FileText,
  Upload,
  Link2,
  RefreshCw,
} from "lucide-react";
import LensSelector, { LENSES } from "@/app/dashboard/components/LensSelector";

const STEPS = [
  { id: "business", label: "Business", icon: Building2 },
  { id: "lens", label: "Audit lens", icon: Sparkles },
  { id: "integrations", label: "Integrations", icon: Plug },
  { id: "documents", label: "Documents", icon: FileText },
];

const INDUSTRIES = [
  "Fashion & Retail",
  "Technology / SaaS",
  "Healthcare",
  "Education",
  "Finance & Fintech",
  "Food & Hospitality",
  "Real Estate",
  "Logistics & Transport",
  "Government / NGO",
  "Agriculture",
  "Other",
];

const INTEGRATIONS = [
  { id: "notion", label: "Notion", icon: Link2, description: "Workspaces, docs, databases" },
  { id: "jira", label: "Jira", icon: Link2, description: "Issues, sprints, project boards" },
  { id: "confluence", label: "Confluence", icon: Link2, description: "Team wikis and knowledge base" },
  { id: "slack", label: "Slack", icon: Link2, description: "Team conversations and channels" },
  { id: "hubspot", label: "HubSpot CRM", icon: Link2, description: "Contacts, deals, pipelines" },
  { id: "salesforce", label: "Salesforce", icon: Link2, description: "Enterprise CRM data" },
  { id: "instagram", label: "Instagram", icon: Link2, description: "Brand presence and engagement" },
  { id: "linkedin", label: "LinkedIn", icon: Link2, description: "Company page and network" },
  { id: "twitter", label: "X (Twitter)", icon: Link2, description: "Brand voice and reach" },
  { id: "facebook", label: "Facebook", icon: Link2, description: "Page analytics and ads" },
];

const NAME_SUGGESTIONS = [
  "Legacy-Audit-01",
  "Clarity-Run",
  "Groundwork-2025",
  "Baseline-Check",
  "Foundation-Lens",
  "Meridian-Review",
];

function generateSuggestion(bizName: string) {
  if (!bizName.trim()) return NAME_SUGGESTIONS[Math.floor(Math.random() * NAME_SUGGESTIONS.length)];
  const slug = bizName.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "");
  const suffixes = ["Audit", "Legacy", "Clarity", "Review", "Lens"];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${slug}-${suffix}-${new Date().getFullYear()}`;
}

export default function CreateProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    businessName: "",
    projectName: "",
    industry: "",
    location: "",
    description: "",
    lens: "legacy",
    integrations: [] as string[],
    socialLinks: { instagram: "", linkedin: "", twitter: "" },
  });

  const set = (key: string, val: unknown) => setForm((f) => ({ ...f, [key]: val }));

  const refreshName = useCallback(() => {
    set("projectName", generateSuggestion(form.businessName));
  }, [form.businessName]);

  const toggleIntegration = (id: string) => {
    set(
      "integrations",
      form.integrations.includes(id)
        ? form.integrations.filter((i) => i !== id)
        : [...form.integrations, id]
    );
  };

  const selectedLens = LENSES.find((l) => l.id === form.lens)!;

  const canProceed = [
    form.businessName.trim() && form.projectName.trim(),
    form.lens,
    true,
    true,
  ][step];

  return (
    <div className="min-h-full bg-[#f0f2f7] p-6">
      <div className="max-w-[820px] mx-auto">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => (step === 0 ? router.back() : setStep((s) => s - 1))}
          className="flex items-center gap-2 text-[13px] text-[#6b7280] hover:text-[#374151] transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          {step === 0 ? "Back to projects" : "Previous step"}
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-[22px] font-bold text-[#0d1117] tracking-[-0.04em]">
            Create audit project
          </h1>
          <p className="text-[13.5px] text-[#6b7280] mt-1">
            Set up a business for LegacyLens to audit end-to-end
          </p>
        </motion.div>

        {/* Step progress */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-0 mb-7 bg-white border border-[#e5e7eb] rounded-2xl p-1.5"
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const done = i < step;
            const active = i === step;

            return (
              <button
                key={s.id}
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12.5px] font-medium transition-all relative"
                style={{
                  color: active ? "#fff" : done ? "#103fd5" : "#9ca3af",
                  cursor: i < step ? "pointer" : "default",
                }}
              >
                {active && (
                  <motion.div
                    layoutId="step-active"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: selectedLens.gradient }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {done ? (
                    <Check size={13} className="text-[#103fd5]" />
                  ) : (
                    <Icon size={13} />
                  )}
                  <span className="hidden sm:inline">{s.label}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* STEP 0 — Business details */}
            {step === 0 && (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 space-y-5">
                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
                    Business name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.businessName}
                    onChange={(e) => set("businessName", e.target.value)}
                    placeholder="e.g. Adaeze Retail Co."
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all"
                  />
                  <p className="text-[11.5px] text-[#9ca3af] mt-1.5">
                    The legal or trading name of the business you are auditing
                  </p>
                </div>

                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
                    Project name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      value={form.projectName}
                      onChange={(e) => set("projectName", e.target.value)}
                      placeholder="e.g. Q3 Operational Audit"
                      className="flex-1 px-4 py-3 rounded-xl border border-[#e5e7eb] text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all"
                    />
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={refreshName}
                      title="Generate a name suggestion"
                      className="px-3.5 py-3 rounded-xl border border-[#e5e7eb] text-[#6b7280] hover:text-[#103fd5] hover:border-[#103fd5] hover:bg-[#eef2ff] transition-all"
                    >
                      <RefreshCw size={14} />
                    </motion.button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {NAME_SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => set("projectName", s)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#f3f4f6] text-[#6b7280] hover:bg-[#eef2ff] hover:text-[#103fd5] transition-colors border border-transparent hover:border-[#103fd5]/20"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
                      Industry
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) => set("industry", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[13.5px] text-[#111827] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all appearance-none bg-white"
                    >
                      <option value="">Select industry</option>
                      {INDUSTRIES.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
                      Location
                    </label>
                    <input
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      placeholder="City, State"
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
                    What are you hoping to discover?{" "}
                    <span className="text-[#9ca3af] font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    rows={3}
                    placeholder="Describe the audit goal — gaps in operations, brand consistency, financial clarity..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all resize-none leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* STEP 1 — Lens selection */}
            {step === 1 && (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
                <p className="text-[13px] text-[#6b7280] mb-5">
                  Choose the audit lens that best matches the nature and goals of this business.
                </p>
                <LensSelector value={form.lens} onChange={(id) => set("lens", id)} />
              </div>
            )}

            {/* STEP 2 — Integrations */}
            {step === 2 && (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
                <p className="text-[13px] text-[#6b7280] mb-5">
                  Connect the tools this business uses. You can skip and add these later.
                </p>
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {INTEGRATIONS.map((int, i) => {
                    const selected = form.integrations.includes(int.id);
                    return (
                      <motion.button
                        key={int.id}
                        type="button"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => toggleIntegration(int.id)}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                          selected
                            ? "border-[#103fd5] bg-[#eef2ff]"
                            : "border-[#e5e7eb] bg-white hover:border-[#d1d5db]"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                            selected ? "bg-[#103fd5]" : "bg-[#f3f4f6]"
                          }`}
                        >
                          <Plug size={14} className={selected ? "text-white" : "text-[#9ca3af]"} />
                        </div>
                        <div>
                          <p className={`text-[13px] font-semibold ${selected ? "text-[#103fd5]" : "text-[#111827]"}`}>
                            {int.label}
                          </p>
                          <p className="text-[11px] text-[#9ca3af] mt-0.5">{int.description}</p>
                        </div>
                        {selected && (
                          <Check size={13} className="text-[#103fd5] ml-auto shrink-0 mt-1" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Social links */}
                <div className="border-t border-[#f3f4f6] pt-5">
                  <p className="text-[12.5px] font-semibold text-[#374151] mb-3">Social links</p>
                  <div className="space-y-2.5">
                    {(["instagram", "linkedin", "twitter"] as const).map((platform) => (
                      <div key={platform} className="flex items-center gap-3">
                        <span className="text-[12px] text-[#6b7280] w-20 capitalize">{platform}</span>
                        <input
                          value={form.socialLinks[platform]}
                          onChange={(e) =>
                            set("socialLinks", { ...form.socialLinks, [platform]: e.target.value })
                          }
                          placeholder={`https://${platform}.com/...`}
                          className="flex-1 px-3 py-2.5 rounded-xl border border-[#e5e7eb] text-[13px] text-[#111827] placeholder:text-[#9ca3af] outline-none focus:border-[#103fd5] focus:ring-2 focus:ring-[#103fd5]/10 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Documents */}
            {step === 3 && (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6">
                <p className="text-[13px] text-[#6b7280] mb-5">
                  Upload business documents to give LegacyLens deeper context. All files are encrypted and private.
                </p>

                <motion.div
                  whileHover={{ borderColor: "#103fd5", backgroundColor: "#f8faff" }}
                  className="border-2 border-dashed border-[#e5e7eb] rounded-2xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all mb-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <Upload size={20} className="text-[#103fd5]" />
                  </div>
                  <div className="text-center">
                    <p className="text-[13.5px] font-semibold text-[#374151]">
                      Drop files here or click to upload
                    </p>
                    <p className="text-[12px] text-[#9ca3af] mt-1">
                      PDF, XLSX, DOCX, CSV — up to 50MB each
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Expense reports", desc: "Monthly or quarterly spend" },
                    { label: "Financial statements", desc: "P&L, balance sheet, cash flow" },
                    { label: "Business plan", desc: "Strategy and roadmap docs" },
                    { label: "Org chart", desc: "Team structure and roles" },
                    { label: "Brand guidelines", desc: "Logo, voice, visual identity" },
                    { label: "Operational SOP", desc: "Standard operating procedures" },
                  ].map((doc, i) => (
                    <motion.button
                      key={doc.label}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#e5e7eb] text-left hover:border-[#103fd5] hover:bg-[#eef2ff] transition-all group"
                    >
                      <FileText size={14} className="text-[#9ca3af] group-hover:text-[#103fd5] transition-colors shrink-0" />
                      <div>
                        <p className="text-[12.5px] font-medium text-[#374151] group-hover:text-[#103fd5] transition-colors">
                          {doc.label}
                        </p>
                        <p className="text-[11px] text-[#9ca3af]">{doc.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mt-5"
        >
          <p className="text-[12px] text-[#9ca3af]">
            Step {step + 1} of {STEPS.length}
          </p>

          <div className="flex items-center gap-3">
            {step === STEPS.length - 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => router.push("/dashboard/projects")}
                  className="px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-[13px] font-medium text-[#374151] hover:bg-[#f3f4f6] transition-colors"
                >
                  Skip for now
                </button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push("/dashboard/projects")}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[13.5px] font-semibold"
                  style={{
                    background: selectedLens.gradient,
                    boxShadow: `0 4px 14px ${selectedLens.color}30`,
                  }}
                >
                  <Sparkles size={14} />
                  Launch audit
                </motion.button>
              </>
            ) : (
              <motion.button
                type="button"
                whileHover={{ scale: canProceed ? 1.02 : 1 }}
                whileTap={{ scale: canProceed ? 0.97 : 1 }}
                disabled={!canProceed}
                onClick={() => setStep((s) => s + 1)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[13.5px] font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                style={{
                  background: canProceed ? selectedLens.gradient : "#9ca3af",
                  boxShadow: canProceed ? `0 4px 14px ${selectedLens.color}30` : "none",
                }}
              >
                Continue
                <ArrowRight size={14} />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}