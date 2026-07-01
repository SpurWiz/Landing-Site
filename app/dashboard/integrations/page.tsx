"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plug, Search, SlidersHorizontal, CheckCircle2,
  AlertCircle, Clock, Unlink, Zap,
  Database, MessageSquare, FileSpreadsheet,
  Instagram, Linkedin, Twitter, Globe,
  GitBranch, BookOpen, BarChart2, Mail,
  LucideIcon,
} from "lucide-react";
import { useProject } from "@/context/ProjectContext";
import IntegrationCard, { IntegrationCardData } from "./components";

const ALL_INTEGRATIONS: IntegrationCardData[] = [
  {
    id: "notion",
    name: "Notion",
    category: "Knowledge base",
    description: "Pull workspace pages, databases, and team docs into your audit context.",
    icon: BookOpen,
    color: "#111827",
    gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    pattern: "dots",
    status: "connected",
    connectedAccount: "adaeze-workspace.notion.so",
    lastSynced: "2h ago",
    overviewStats: [
      { label: "Pages pulled", value: "142" },
      { label: "Databases", value: "18" },
      { label: "Last updated", value: "Today" },
      { label: "Team members", value: "9" },
    ],
    projectsUsing: ["Q3 Operational Audit", "Capacity Building"],
  },
  {
    id: "jira",
    name: "Jira",
    category: "Project management",
    description: "Analyse sprints, backlogs, issue velocity and delivery patterns.",
    icon: GitBranch,
    color: "#0052cc",
    gradient: "linear-gradient(135deg, #0052cc 0%, #2684ff 100%)",
    pattern: "grid",
    status: "connected",
    connectedAccount: "okeke-tech.atlassian.net",
    lastSynced: "45m ago",
    overviewStats: [
      { label: "Open issues", value: "47" },
      { label: "Sprints tracked", value: "6" },
      { label: "Velocity avg", value: "34 pts" },
      { label: "Overdue", value: "11" },
    ],
    projectsUsing: ["Founder Baseline Check"],
  },
  {
    id: "confluence",
    name: "Confluence",
    category: "Documentation",
    description: "Import team wikis, SOPs, and knowledge articles for process auditing.",
    icon: FileSpreadsheet,
    color: "#0065ff",
    gradient: "linear-gradient(135deg, #0065ff 0%, #57a6ff 100%)",
    pattern: "lines",
    status: "connected",
    connectedAccount: "synergix.atlassian.net",
    lastSynced: "1d ago",
    overviewStats: [
      { label: "Spaces", value: "5" },
      { label: "Pages", value: "231" },
      { label: "Contributors", value: "14" },
      { label: "Outdated", value: "39" },
    ],
    projectsUsing: ["Capacity Building Review"],
  },
  {
    id: "slack",
    name: "Slack",
    category: "Team communication",
    description: "Surface team communication patterns and collaboration health signals.",
    icon: MessageSquare,
    color: "#611f69",
    gradient: "linear-gradient(135deg, #611f69 0%, #e01e5a 100%)",
    pattern: "rings",
    status: "pending",
    connectedAccount: undefined,
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "CRM",
    description: "Analyse deal pipelines, contact lifecycle, and revenue attribution data.",
    icon: Database,
    color: "#ff7a59",
    gradient: "linear-gradient(135deg, #ff5c35 0%, #ff957a 100%)",
    pattern: "dots",
    status: "error",
    connectedAccount: "adaeze-retail.hubspot.com",
    lastSynced: "Failed 3d ago",
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Enterprise CRM — contacts, opportunities, accounts and revenue data.",
    icon: Database,
    color: "#00a1e0",
    gradient: "linear-gradient(135deg, #00a1e0 0%, #1ab9ff 100%)",
    pattern: "grid",
    status: "disconnected",
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "Social media",
    description: "Track brand presence, follower growth, engagement rate and post reach.",
    icon: Instagram,
    color: "#e1306c",
    gradient: "linear-gradient(135deg, #833ab4 0%, #e1306c 50%, #fd1d1d 100%)",
    pattern: "rings",
    status: "connected",
    connectedAccount: "@adaeze.retail",
    lastSynced: "12h ago",
    overviewStats: [
      { label: "Followers", value: "14.2k" },
      { label: "Engagement", value: "4.2%" },
      { label: "Posts/month", value: "12" },
      { label: "Reach (avg)", value: "8.4k" },
    ],
    projectsUsing: ["Q3 Operational Audit"],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Social media",
    description: "Company page analytics, follower demographics and content performance.",
    icon: Linkedin,
    color: "#0077b5",
    gradient: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)",
    pattern: "dots",
    status: "connected",
    connectedAccount: "Adaeze Retail Co.",
    lastSynced: "1d ago",
    overviewStats: [
      { label: "Followers", value: "2.1k" },
      { label: "Post views", value: "9.8k" },
      { label: "Click rate", value: "1.8%" },
      { label: "Last post", value: "3mo ago" },
    ],
    projectsUsing: ["Q3 Operational Audit"],
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    category: "Social media",
    description: "Brand voice reach, mention tracking and audience sentiment signals.",
    icon: Twitter,
    color: "#14171a",
    gradient: "linear-gradient(135deg, #14171a 0%, #657786 100%)",
    pattern: "lines",
    status: "disconnected",
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    category: "Web analytics",
    description: "Website traffic, user behaviour, acquisition channels and conversion funnels.",
    icon: BarChart2,
    color: "#f4b400",
    gradient: "linear-gradient(135deg, #ea4335 0%, #f4b400 100%)",
    pattern: "rings",
    status: "disconnected",
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Email marketing",
    description: "Email campaign performance, list health, open rates and subscriber trends.",
    icon: Mail,
    color: "#ffe01b",
    gradient: "linear-gradient(135deg, #241c15 0%, #ffe01b 100%)",
    pattern: "grid",
    status: "disconnected",
    overviewStats: [],
    projectsUsing: [],
  },
  {
    id: "website",
    name: "Website URL",
    category: "Web presence",
    description: "Crawl your website for SEO signals, performance scores and accessibility.",
    icon: Globe,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
    pattern: "dots",
    status: "connected",
    connectedAccount: "www.adaeze-retail.com",
    lastSynced: "6h ago",
    overviewStats: [
      { label: "Pages crawled", value: "38" },
      { label: "SEO score", value: "61/100" },
      { label: "Load time", value: "2.3s" },
      { label: "Broken links", value: "4" },
    ],
    projectsUsing: ["Q3 Operational Audit"],
  },
];

const CATEGORIES = ["All", "CRM", "Knowledge base", "Project management", "Documentation", "Social media", "Web analytics", "Email marketing", "Team communication", "Web presence"] as const;
type Category = typeof CATEGORIES[number];

const STATUS_FILTERS = ["All", "Connected", "Pending", "Error", "Disconnected"] as const;
type StatusFilter = typeof STATUS_FILTERS[number];

const SUMMARY_STATS = [
  { label: "Connected",    value: ALL_INTEGRATIONS.filter(i => i.status === "connected").length,    color: "#059669", bg: "#ecfdf5", border: "#bbf7d0" },
  { label: "Pending auth", value: ALL_INTEGRATIONS.filter(i => i.status === "pending").length,      color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  { label: "Errors",       value: ALL_INTEGRATIONS.filter(i => i.status === "error").length,        color: "#dc2626", bg: "#fff1f2", border: "#fecaca" },
  { label: "Available",    value: ALL_INTEGRATIONS.filter(i => i.status === "disconnected").length, color: "#6b7280", bg: "#f9fafb", border: "#e5e7eb" },
];

export default function IntegrationsPage() {
  const { activeProject } = useProject();
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");
  const [statusFilter, setStatusFilter]     = useState<StatusFilter>("All");
  const [search, setSearch]                 = useState("");
  const [integrations, setIntegrations]     = useState(ALL_INTEGRATIONS);

  const filtered = integrations.filter((int) => {
    const matchCat    = categoryFilter === "All" || int.category === categoryFilter;
    const matchStatus = statusFilter   === "All" || int.status === statusFilter.toLowerCase();
    const matchSearch = int.name.toLowerCase().includes(search.toLowerCase()) ||
                        int.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  function handleConnect(id: string) {
    setIntegrations((prev) =>
      prev.map((i) => i.id === id ? { ...i, status: "pending" as const } : i)
    );
  }

  function handleDisconnect(id: string) {
    setIntegrations((prev) =>
      prev.map((i) => i.id === id ? { ...i, status: "disconnected" as const, connectedAccount: undefined, lastSynced: undefined, overviewStats: [], projectsUsing: [] } : i)
    );
  }

  const connected    = integrations.filter(i => i.status === "connected").length;
  const hasIssues    = integrations.filter(i => i.status === "error" || i.status === "pending").length;

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-[1200px] mx-auto">

      {/* ── Page header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0 mb-4 sm:mb-5"
      >
        <div>
          <h1 className="text-[20px] sm:text-[22px] font-bold text-[#0d1117] tracking-[-0.04em]">
            Integrations
          </h1>
          <p className="text-[12px] sm:text-[13px] text-[#6b7280] mt-0.5 truncate max-w-[200px] sm:max-w-none">
            Data sources for{" "}
            <span className="font-semibold text-[#374151]">{activeProject.businessName}</span>
            {" "}· {activeProject.name}
          </p>
        </div>

        {hasIssues > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[11px] sm:text-[12.5px] font-medium shrink-0"
          >
            <AlertCircle size={12} className="sm:w-[13px] sm:h-[13px]" />
            <span className="whitespace-nowrap">
              {hasIssues} integration{hasIssues > 1 ? "s" : ""} need attention
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* ── Summary stat cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
        {SUMMARY_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="relative rounded-2xl bg-white border overflow-hidden"
            style={{ borderColor: stat.border, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
          >
            {/* Pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`sp-${i}`} width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.1" fill={stat.color} fillOpacity="0.07" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#sp-${i})`} />
            </svg>
            <div className="relative z-10 px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: stat.bg }}
              >
                <span className="text-[14px] sm:text-[16px] font-bold" style={{ color: stat.color }}>{stat.value}</span>
              </div>
              <p className="text-[10px] sm:text-[12px] font-medium text-[#374151] leading-tight">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Active project integration bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white mb-4 sm:mb-5 p-3 sm:p-4"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="proj-bar-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={activeProject.lensColor} fillOpacity="0.05" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#proj-bar-dots)" />
        </svg>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-start sm:items-center gap-3 w-full sm:w-auto">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: activeProject.lensGradient }}
            >
              <Zap size={13} className="sm:w-[14px] sm:h-[14px] text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-[#111827] truncate">
                {connected} source{connected !== 1 ? "s" : ""} feeding into{" "}
                <span style={{ color: activeProject.lensColor }}>{activeProject.name}</span>
              </p>
              <p className="text-[10.5px] sm:text-[11.5px] text-[#9ca3af] mt-0.5 line-clamp-1 sm:line-clamp-none">
                All connected integrations below are scoped to this project only.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 flex-wrap">
            {integrations.filter(i => i.status === "connected").slice(0, 6).map((int) => {
              const Icon = int.icon;
              return (
                <div key={int.id}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center border border-[#e5e7eb] bg-white"
                  title={int.name}
                >
                  <Icon size={11} className="sm:w-[13px] sm:h-[13px]" style={{ color: int.color }} />
                </div>
              );
            })}
            {integrations.filter(i => i.status === "connected").length > 6 && (
              <span className="text-[10px] text-[#9ca3af] font-medium">
                +{integrations.filter(i => i.status === "connected").length - 6}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── Toolbar ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.28 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5"
      >
        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-xl px-3 py-1.5 sm:py-2 w-full sm:w-[220px]">
          <Search size={13} className="text-[#9ca3af] shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search integrations..."
            className="text-[11.5px] sm:text-[12.5px] text-[#374151] placeholder:text-[#9ca3af] outline-none flex-1 bg-transparent min-w-0"
          />
        </div>

        {/* Status filter - horizontal scroll on mobile */}
        <div className="flex items-center gap-1 bg-white border border-[#e5e7eb] rounded-xl p-1 overflow-x-auto scrollbar-none shrink-0">
          {STATUS_FILTERS.map((f) => {
            const active = statusFilter === f;
            const icons: Record<typeof f, LucideIcon> = {
              All: Plug, Connected: CheckCircle2, Pending: Clock,
              Error: AlertCircle, Disconnected: Unlink,
            };
            const FilterIcon = icons[f];
            return (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className="relative flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-[10.5px] sm:text-[11.5px] font-medium transition-colors whitespace-nowrap"
                style={{ color: active ? "#103fd5" : "#6b7280" }}
              >
                {active && (
                  <motion.div
                    layoutId="int-status-tab"
                    className="absolute inset-0 rounded-lg bg-[#eef2ff]"
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <FilterIcon size={15} className="sm:w-[11px] sm:h-[11px] relative z-10" />
                <span className="relative z-10 hidden sm:inline">{f}</span>
              </button>
            );
          })}
        </div>

        {/* Category filter - horizontal scroll on mobile */}
        <div className="flex items-center gap-1.5 ml-auto overflow-x-auto scrollbar-none flex-1 sm:flex-initial">
          <SlidersHorizontal size={12} className="sm:w-[13px] sm:h-[13px] text-[#9ca3af] shrink-0" />
          <div className="flex flex-wrap items-center gap-1 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11.5px] font-medium whitespace-nowrap transition-all border shrink-0"
                  style={{
                    background:   active ? activeProject.lensColor       : "white",
                    color:        active ? "white"                        : "#6b7280",
                    borderColor:  active ? activeProject.lensColor        : "#e5e7eb",
                    boxShadow:    active ? `0 2px 8px ${activeProject.lensColor}30` : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ── Section: Connected ── */}
      {filtered.filter(i => i.status === "connected").length > 0 && (
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3"
          >
            <CheckCircle2 size={12} className="sm:w-[13px] sm:h-[13px] text-emerald-500" />
            <h2 className="text-[12px] sm:text-[13px] font-semibold text-[#374151]">Connected</h2>
            <span className="text-[10px] sm:text-[11px] text-[#9ca3af] truncate">
              — pulling data into {activeProject.name}
            </span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {filtered.filter(i => i.status === "connected").map((int, i) => (
              <IntegrationCard
                key={int.id}
                data={int}
                delay={0.05 * i}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Section: Needs attention ── */}
      {filtered.filter(i => i.status === "error" || i.status === "pending").length > 0 && (
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="flex items-center gap-1.5 sm:gap-2 mb-3"
          >
            <AlertCircle size={12} className="sm:w-[13px] sm:h-[13px] text-amber-500" />
            <h2 className="text-[12px] sm:text-[13px] font-semibold text-[#374151]">Needs attention</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {filtered.filter(i => i.status === "error" || i.status === "pending").map((int, i) => (
              <IntegrationCard
                key={int.id}
                data={int}
                delay={0.05 * i}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Section: Available ── */}
      {filtered.filter(i => i.status === "disconnected").length > 0 && (
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3"
          >
            <Plug size={12} className="sm:w-[13px] sm:h-[13px] text-[#9ca3af]" />
            <h2 className="text-[12px] sm:text-[13px] font-semibold text-[#374151]">Available to connect</h2>
            <span className="text-[10px] sm:text-[11px] text-[#9ca3af]">— not yet linked to this project</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {filtered.filter(i => i.status === "disconnected").map((int, i) => (
              <IntegrationCard
                key={int.id}
                data={int}
                delay={0.05 * i}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
              />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 sm:py-20"
        >
          <Plug size={28} className="sm:w-8 sm:h-8 text-[#d1d5db] mx-auto mb-3" />
          <p className="text-[14px] sm:text-[15px] font-medium text-[#6b7280]">No integrations match</p>
          <button
            onClick={() => { setSearch(""); setCategoryFilter("All"); setStatusFilter("All"); }}
            className="text-[12px] sm:text-[13px] text-[#103fd5] font-medium mt-2 hover:underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}