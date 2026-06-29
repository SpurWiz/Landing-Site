"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload, FileText, FileSpreadsheet, Search,
  SlidersHorizontal, CheckCircle2, AlertCircle,
  Clock, LayoutGrid, List, FolderOpen,
  BarChart3, Link2, Globe, Instagram,
  Linkedin, Database, GitBranch, BookOpen,
  TrendingUp, Users, ShoppingCart, LucideIcon,
} from "lucide-react";
import { useProject } from "@/context/ProjectContext";
import DocumentCard, { DocumentCardData } from "./components";

// ─── Document data ─────────────────────────────────────────────────────────────
const DOCUMENTS: DocumentCardData[] = [
  {
    id: "q3-expenses",
    name: "Q3 Expense Report.xlsx",
    type: "xlsx", size: "2.4 MB", category: "Finance",
    pagesOrRows: "1,842 rows", uploadedAt: "2 days ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "has_gaps",
    reviewSummary: "Undocumented spend of ₦4.2M detected across 6 vendor categories.",
    findingsCount: 6,
    tags: [{ label: "High priority", color: "#dc2626" }, { label: "Q3 2025", color: "#6b7280" }],
    color: "#059669", gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)", pattern: "grid",
  },
  {
    id: "business-plan",
    name: "Business Plan 2025.pdf",
    type: "pdf", size: "5.1 MB", category: "Strategy",
    pagesOrRows: "62 pages", uploadedAt: "5 days ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "clean",
    reviewSummary: "Vision and goals are clearly articulated. No major gaps detected.",
    findingsCount: 0,
    tags: [{ label: "Strategy", color: "#103fd5" }, { label: "2025", color: "#6b7280" }],
    color: "#103fd5", gradient: "linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)", pattern: "dots",
  },
  {
    id: "org-chart",
    name: "Org Chart v3.pdf",
    type: "pdf", size: "840 KB", category: "People",
    pagesOrRows: "4 pages", uploadedAt: "1 week ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "has_gaps",
    reviewSummary: "4 roles exist on chart with no named occupants. 2 reporting lines are ambiguous.",
    findingsCount: 3,
    tags: [{ label: "People", color: "#7c3aed" }, { label: "Structure", color: "#6b7280" }],
    color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)", pattern: "rings",
  },
  {
    id: "brand-guide",
    name: "Brand Guidelines.pdf",
    type: "pdf", size: "18.3 MB", category: "Brand",
    pagesOrRows: "94 pages", uploadedAt: "2 weeks ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "clean",
    reviewSummary: "Brand is well-documented with consistent colour, type, and voice standards.",
    findingsCount: 0,
    tags: [{ label: "Brand", color: "#e1306c" }, { label: "Design", color: "#6b7280" }],
    color: "#e1306c", gradient: "linear-gradient(135deg, #e1306c 0%, #f9a8d4 100%)", pattern: "dots",
  },
  {
    id: "sop-operations",
    name: "Operations SOP.docx",
    type: "docx", size: "1.2 MB", category: "Operations",
    pagesOrRows: "38 pages", uploadedAt: "3 days ago", uploadedBy: "Tunde A.",
    status: "flagged", reviewState: "has_gaps",
    reviewSummary: "SOP references 3 tools no longer in use. 8 procedures have no assigned owner.",
    findingsCount: 5,
    tags: [{ label: "Operations", color: "#d97706" }, { label: "Urgent", color: "#dc2626" }],
    color: "#d97706", gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)", pattern: "lines",
  },
  {
    id: "sales-pipeline",
    name: "Sales Pipeline Q3.xlsx",
    type: "xlsx", size: "980 KB", category: "Sales",
    pagesOrRows: "412 rows", uploadedAt: "1 day ago", uploadedBy: "Adaeze O.",
    status: "processing", reviewState: "processing",
    reviewSummary: "LegacyLens is extracting deal velocity and conversion patterns...",
    findingsCount: 0,
    tags: [{ label: "Sales", color: "#b45309" }, { label: "Pipeline", color: "#6b7280" }],
    color: "#b45309", gradient: "linear-gradient(135deg, #b45309 0%, #fcd34d 100%)", pattern: "grid",
  },
  {
    id: "compliance-docs",
    name: "CAC Registration Docs.pdf",
    type: "pdf", size: "3.7 MB", category: "Legal",
    pagesOrRows: "21 pages", uploadedAt: "2 weeks ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "needs_review",
    reviewSummary: "Registration is valid. Annual return filing due within 30 days.",
    findingsCount: 1,
    tags: [{ label: "Legal", color: "#64748b" }, { label: "Compliance", color: "#0891b2" }],
    color: "#64748b", gradient: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)", pattern: "dots",
  },
  {
    id: "customer-feedback",
    name: "Customer Feedback 2025.csv",
    type: "csv", size: "650 KB", category: "Customer",
    pagesOrRows: "2,140 rows", uploadedAt: "4 days ago", uploadedBy: "Adaeze O.",
    status: "reviewed", reviewState: "clean",
    reviewSummary: "NPS score of 67. Recurring themes: speed of delivery and product quality.",
    findingsCount: 0,
    tags: [{ label: "NPS", color: "#0891b2" }, { label: "Customer", color: "#6b7280" }],
    color: "#0891b2", gradient: "linear-gradient(135deg, #0891b2 0%, #67e8f9 100%)", pattern: "rings",
  },
];

// ─── CRM + social media + linked resource overview ─────────────────────────────
interface LinkedResource {
  id: string; name: string; type: string;
  icon: LucideIcon; color: string; gradient: string;
  stats: { label: string; value: string }[];
  lastSynced: string; status: "live" | "stale" | "error";
}

const LINKED_RESOURCES: LinkedResource[] = [
  {
    id: "hubspot", name: "HubSpot CRM", type: "CRM", icon: Database,
    color: "#ff7a59", gradient: "linear-gradient(135deg, #ff5c35 0%, #ff957a 100%)",
    stats: [
      { label: "Contacts",  value: "1,284" },
      { label: "Open deals",value: "23"     },
      { label: "Won (30d)", value: "7"      },
      { label: "Revenue",   value: "₦8.4M"  },
    ],
    lastSynced: "45m ago", status: "live",
  },
  {
    id: "instagram", name: "Instagram", type: "Social", icon: Instagram,
    color: "#e1306c", gradient: "linear-gradient(135deg, #833ab4 0%, #e1306c 50%, #fd1d1d 100%)",
    stats: [
      { label: "Followers",   value: "14.2k" },
      { label: "Engagement",  value: "4.2%"  },
      { label: "Reach (avg)", value: "8.4k"  },
      { label: "Posts/mo",    value: "12"    },
    ],
    lastSynced: "12h ago", status: "live",
  },
  {
    id: "linkedin", name: "LinkedIn", type: "Social", icon: Linkedin,
    color: "#0077b5", gradient: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)",
    stats: [
      { label: "Followers",  value: "2.1k"  },
      { label: "Post views", value: "9.8k"  },
      { label: "Click rate", value: "1.8%"  },
      { label: "Last post",  value: "3mo"   },
    ],
    lastSynced: "1d ago", status: "stale",
  },
  {
    id: "notion", name: "Notion", type: "Knowledge", icon: BookOpen,
    color: "#111827", gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    stats: [
      { label: "Pages",     value: "142" },
      { label: "Databases", value: "18"  },
      { label: "Members",   value: "9"   },
      { label: "Outdated",  value: "24"  },
    ],
    lastSynced: "2h ago", status: "live",
  },
  {
    id: "jira", name: "Jira", type: "Project mgmt", icon: GitBranch,
    color: "#0052cc", gradient: "linear-gradient(135deg, #0052cc 0%, #2684ff 100%)",
    stats: [
      { label: "Open issues",  value: "47"     },
      { label: "Velocity avg", value: "34 pts" },
      { label: "Overdue",      value: "11"     },
      { label: "Sprints",      value: "6"      },
    ],
    lastSynced: "1h ago", status: "live",
  },
  {
    id: "website", name: "Website", type: "Web presence", icon: Globe,
    color: "#059669", gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
    stats: [
      { label: "Pages crawled", value: "38"      },
      { label: "SEO score",     value: "61/100"  },
      { label: "Load time",     value: "2.3s"    },
      { label: "Broken links",  value: "4"       },
    ],
    lastSynced: "6h ago", status: "live",
  },
];

const DOC_CATEGORIES  = ["All", "Finance", "Strategy", "People", "Brand", "Operations", "Sales", "Legal", "Customer"] as const;
type DocCategory = typeof DOC_CATEGORIES[number];
const DOC_STATUSES    = ["All", "Reviewed", "Processing", "Pending", "Flagged"] as const;
type DocStatus = typeof DOC_STATUSES[number];

function LinkedResourceCard({ resource, delay = 0 }: { resource: LinkedResource; delay?: number }) {
  const Icon = resource.icon;
  const statusDot = resource.status === "live" ? "bg-emerald-400" : resource.status === "stale" ? "bg-amber-400" : "bg-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)", transition: { duration: 0.18 } }}
      className="relative bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
    >
      {/* Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id={`lr-${resource.id}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill={resource.color} fillOpacity="0.05" />
        </pattern></defs>
        <rect width="100%" height="100%" fill={`url(#lr-${resource.id})`} />
      </svg>
      <div className="h-[3px] w-full relative z-10" style={{ background: resource.gradient }} />

      <div className="relative z-10 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center border border-[#f3f4f6]"
              style={{ background: `${resource.color}12` }}
            >
              <Icon size={15} style={{ color: resource.color }} />
            </div>
            <div>
              <p className="text-[12.5px] font-semibold text-[#111827] leading-none">{resource.name}</p>
              <p className="text-[10.5px] text-[#9ca3af] mt-0.5">{resource.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
            <span className="text-[10.5px] text-[#9ca3af]">{resource.lastSynced}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {resource.stats.map((stat) => (
            <div key={stat.label}
              className="bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-2.5 py-2 text-center"
            >
              <p className="text-[14px] font-bold text-[#111827] leading-none tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="text-[10px] text-[#9ca3af] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const DOC_STATS = [
  { label: "Total documents",  value: DOCUMENTS.length,                                          icon: FolderOpen, color: "#103fd5", bg: "#eef2ff"  },
  { label: "Reviewed",         value: DOCUMENTS.filter(d => d.status === "reviewed").length,     icon: CheckCircle2,color:"#059669", bg: "#ecfdf5"  },
  { label: "Flagged",          value: DOCUMENTS.filter(d => d.status === "flagged").length,      icon: AlertCircle, color:"#dc2626", bg: "#fff1f2"  },
  { label: "Processing",       value: DOCUMENTS.filter(d => d.status === "processing").length,   icon: Clock,       color:"#2563eb", bg: "#eff6ff"  },
];

export default function DocumentsPage() {
  const { activeProject } = useProject();
  const [activeTab, setActiveTab]       = useState<"documents" | "sources">("documents");
  const [category, setCategory]         = useState<DocCategory>("All");
  const [statusFilter, setStatusFilter] = useState<DocStatus>("All");
  const [search, setSearch]             = useState("");
  const [view, setView]                 = useState<"grid" | "list">("grid");
  const fileInputRef                    = useRef<HTMLInputElement>(null);

  const filtered = DOCUMENTS.filter((d) => {
    const matchCat    = category     === "All" || d.category === category;
    const matchStatus = statusFilter === "All" || d.status === statusFilter.toLowerCase();
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
                        d.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  return (
    <div className="p-6 max-w-[1200px] mx-auto">

      {/* ── Page header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-start justify-between mb-5"
      >
        <div>
          <h1 className="text-[22px] font-bold text-[#0d1117] tracking-[-0.04em]">Documents & Sources</h1>
          <p className="text-[13px] text-[#6b7280] mt-0.5">
            Information feeding into{" "}
            <span className="font-semibold text-[#374151]">{activeProject.businessName}</span>
            {" "}· {activeProject.name}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13px] font-semibold"
          style={{
            background: activeProject.lensGradient,
            boxShadow: `0 4px 14px ${activeProject.lensColor}28`,
          }}
        >
          <Upload size={14} />
          Upload documents
        </motion.button>
        <input ref={fileInputRef} type="file" multiple className="hidden"
          accept=".pdf,.xlsx,.docx,.csv,.png,.jpg" />
      </motion.div>

      {/* ── Stat row ── */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {DOC_STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="relative bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id={`ds-${i}`} width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill={stat.color} fillOpacity="0.06" />
                </pattern></defs>
                <rect width="100%" height="100%" fill={`url(#ds-${i})`} />
              </svg>
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}88 100%)` }} />
              <div className="relative z-10 p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: stat.bg }}>
                  <Icon size={16} style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-[20px] font-bold text-[#0d1117] leading-none tracking-[-0.04em]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Tab switcher ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14 }}
        className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1 w-fit mb-5"
      >
        {(["documents", "sources"] as const).map((tab) => {
          const active = activeTab === tab;
          const TabIcon = tab === "documents" ? FileText : Link2;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-[12.5px] font-medium capitalize transition-colors"
              style={{ color: active ? "#103fd5" : "#6b7280" }}
            >
              {active && (
                <motion.div
                  layoutId="doc-tab"
                  className="absolute inset-0 rounded-lg bg-[#eef2ff]"
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
              <TabIcon size={13} className="relative z-10" />
              <span className="relative z-10">
                {tab === "documents" ? "Uploaded documents" : "Connected sources"}
              </span>
            </button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">

        {/* ── DOCUMENTS TAB ── */}
        {activeTab === "documents" && (
          <motion.div
            key="documents"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {/* Toolbar */}
            <div className="flex items-center gap-2.5 mb-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-xl px-3 py-2 w-[220px]">
                <Search size={13} className="text-[#9ca3af] shrink-0" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search documents..."
                  className="text-[12.5px] text-[#374151] placeholder:text-[#9ca3af] outline-none flex-1 bg-transparent"
                />
              </div>

              {/* Status filter */}
              <div className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1">
                {DOC_STATUSES.map((s) => {
                  const active = statusFilter === s;
                  return (
                    <button key={s} onClick={() => setStatusFilter(s)}
                      className="relative px-3 py-1.5 rounded-lg text-[11.5px] font-medium transition-colors"
                      style={{ color: active ? "#103fd5" : "#6b7280" }}
                    >
                      {active && (
                        <motion.div layoutId="doc-status" className="absolute inset-0 rounded-lg bg-[#eef2ff]"
                          transition={{ duration: 0.18 }} />
                      )}
                      <span className="relative z-10">{s}</span>
                    </button>
                  );
                })}
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1 ml-auto">
                {(["grid", "list"] as const).map((v) => {
                  const VIcon = v === "grid" ? LayoutGrid : List;
                  return (
                    <button key={v} onClick={() => setView(v)}
                      className={`p-2 rounded-lg transition-colors ${view === v ? "bg-[#eef2ff] text-[#103fd5]" : "text-[#9ca3af] hover:text-[#374151]"}`}
                    >
                      <VIcon size={13} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category chips */}
            <div className="flex items-center gap-1.5 mb-4 flex-wrap">
              <SlidersHorizontal size={12} className="text-[#9ca3af]" />
              {DOC_CATEGORIES.map((cat) => {
                const active = category === cat;
                return (
                  <button key={cat} onClick={() => setCategory(cat)}
                    className="px-2.5 py-1 rounded-lg text-[11.5px] font-medium border transition-all"
                    style={{
                      background:  active ? activeProject.lensColor : "white",
                      color:       active ? "white" : "#6b7280",
                      borderColor: active ? activeProject.lensColor : "#e5e7eb",
                      boxShadow:   active ? `0 2px 8px ${activeProject.lensColor}30` : "none",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {filtered.length > 0 ? (
              <div className={view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-3"
              }>
                {filtered.map((doc, i) => (
                  <DocumentCard key={doc.id} data={doc} delay={0.05 * i} />
                ))}

                {/* Upload drop zone */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * filtered.length, duration: 0.35 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="min-h-[200px] rounded-2xl border-2 border-dashed border-[#d1d5db] bg-white flex flex-col items-center justify-center gap-3 cursor-pointer group hover:border-[#103fd5] hover:bg-[#f8faff] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl border-2 border-dashed border-[#d1d5db] flex items-center justify-center text-[#9ca3af] group-hover:border-[#103fd5] group-hover:text-[#103fd5] group-hover:bg-[#eef2ff] transition-all">
                    <Upload size={18} />
                  </div>
                  <div className="text-center">
                    <p className="text-[13px] font-semibold text-[#374151] group-hover:text-[#103fd5] transition-colors">
                      Upload more documents
                    </p>
                    <p className="text-[11.5px] text-[#9ca3af] mt-0.5">PDF, XLSX, DOCX, CSV — up to 50MB</p>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <FolderOpen size={32} className="text-[#d1d5db] mx-auto mb-3" />
                <p className="text-[14px] font-medium text-[#6b7280]">No documents match</p>
                <button onClick={() => { setSearch(""); setCategory("All"); setStatusFilter("All"); }}
                  className="text-[12.5px] text-[#103fd5] font-medium mt-2 hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ── SOURCES TAB ── */}
        {activeTab === "sources" && (
          <motion.div
            key="sources"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {/* Sources summary bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="relative bg-white border border-[#e5e7eb] rounded-2xl p-4 mb-5 overflow-hidden"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="src-dots" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill={activeProject.lensColor} fillOpacity="0.05" />
                </pattern></defs>
                <rect width="100%" height="100%" fill="url(#src-dots)" />
              </svg>
              <div className="relative z-10 flex items-center gap-6 flex-wrap">
                {[
                  { label: "Live sources",  value: LINKED_RESOURCES.filter(r => r.status === "live").length,  icon: CheckCircle2, color: "#059669" },
                  { label: "Stale sources", value: LINKED_RESOURCES.filter(r => r.status === "stale").length, icon: Clock,        color: "#d97706" },
                  { label: "Data points",   value: "47k+",                                                     icon: BarChart3,    color: "#103fd5" },
                  { label: "Last synced",   value: "45m ago",                                                  icon: TrendingUp,   color: "#6b7280" },
                  { label: "Sources total", value: LINKED_RESOURCES.length,                                    icon: Users,        color: "#7c3aed" },
                  { label: "CRM records",   value: "1,284",                                                    icon: ShoppingCart, color: "#ff7a59" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${item.color}14` }}
                      >
                        <Icon size={13} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-[#0d1117] leading-none">{item.value}</p>
                        <p className="text-[10.5px] text-[#9ca3af] mt-0.5">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <p className="text-[12.5px] font-semibold text-[#374151] mb-3">
              Live data from connected integrations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {LINKED_RESOURCES.map((resource, i) => (
                <LinkedResourceCard key={resource.id} resource={resource} delay={0.06 * i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}