"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  BarChart3,
  Plug,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  FileUp,
  Eye,
} from "lucide-react";
import StatCard from "@/app/dashboard/components/StatCard";
import ProjectCard from "@/app/dashboard/components/ProjectCard";

const RECENT_PROJECTS = [
  {
    id: "ada-retail",
    name: "Q3 Operational Audit",
    businessName: "Adaeze Retail Co.",
    industry: "Fashion & Retail",
    location: "Lagos",
    lens: "LegacyLens",
    lensColor: "#103fd5",
    lensGradient: "linear-gradient(90deg, #103fd5 0%, #5d7cff 100%)",
    progress: 82,
    status: "active" as const,
    integrations: [
      { name: "Notion", status: "linked" as const },
      { name: "CRM", status: "pending" as const },
    ],
    updatedAt: "2 hours ago",
  },
  {
    id: "okeke-tech",
    name: "Founder Baseline Check",
    businessName: "Okeke Technologies",
    industry: "SaaS",
    location: "Abuja",
    lens: "FounderLens",
    lensColor: "#dc2626",
    lensGradient: "linear-gradient(90deg, #dc2626 0%, #f87171 100%)",
    progress: 47,
    status: "review" as const,
    integrations: [{ name: "Jira", status: "linked" as const }],
    updatedAt: "3 days ago",
  },
  {
    id: "keiko-interiors",
    name: "Financial Health Audit",
    businessName: "Keiko Interiors",
    industry: "Interior Design",
    location: "Port Harcourt",
    lens: "FinanceLens",
    lensColor: "#d97706",
    lensGradient: "linear-gradient(90deg, #d97706 0%, #fbbf24 100%)",
    progress: 16,
    status: "draft" as const,
    integrations: [{ name: "Expenses", status: "pending" as const }],
    updatedAt: "5 days ago",
  },
];

const ACTIVITY = [
  {
    icon: CheckCircle,
    color: "#103fd5",
    bg: "#eef2ff",
    text: "Notion workspace connected to Adaeze Retail Co.",
    time: "2 hours ago",
  },
  {
    icon: AlertTriangle,
    color: "#d97706",
    bg: "#fffbeb",
    text: "LegacyLens identified 3 operational gaps in Adaeze Retail Co.",
    time: "5 hours ago",
  },
  {
    icon: FileUp,
    color: "#dc2626",
    bg: "#fff1f2",
    text: "Expense report uploaded to Okeke Technologies",
    time: "3 days ago",
  },
  {
    icon: Eye,
    color: "#059669",
    bg: "#ecfdf5",
    text: "FinanceLens audit started for Keiko Interiors",
    time: "5 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative rounded-2xl overflow-hidden mb-6 p-6"
        style={{
          background: "linear-gradient(135deg, #0d1630 0%, #103fd5 55%, #3b5bdb 100%)",
          boxShadow: "0 8px 32px rgba(16,63,213,0.25)",
        }}
      >
        {/* Noise / grain texture via SVG filter */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #fdb62f 0%, transparent 50%), radial-gradient(circle at 20% 80%, #5d7cff 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-white/50 text-[12px] tracking-widest uppercase font-semibold mb-1">
              Good morning
            </p>
            <h1 className="text-white text-[22px] font-bold tracking-[-0.04em] mb-2">
              Adaeze Okeke
            </h1>
            <p className="text-white/60 text-[13.5px] max-w-[420px] leading-relaxed">
              You have 3 active audit projects. LegacyLens has flagged 11 gaps
              across your portfolio that need attention.
            </p>
          </div>
          <Link href="/dashboard/projects/create">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#0d1117] text-[13px] font-bold shrink-0"
              style={{ background: "#fdb62f", boxShadow: "0 4px 14px rgba(253,182,47,0.35)" }}
            >
              <Zap size={14} />
              Start new audit
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Total projects"
          value="4"
          change="+2 this month"
          trend="up"
          icon={Briefcase}
          gradient="linear-gradient(90deg, #103fd5 0%, #5d7cff 100%)"
          iconColor="#103fd5"
          delay={0.05}
        />
        <StatCard
          label="Avg. audit score"
          value="74%"
          change="↑ 12 pts"
          trend="up"
          icon={BarChart3}
          gradient="linear-gradient(90deg, #d97706 0%, #fbbf24 100%)"
          iconColor="#d97706"
          delay={0.1}
        />
        <StatCard
          label="Active integrations"
          value="5"
          change="3 pending"
          trend="neutral"
          icon={Plug}
          gradient="linear-gradient(90deg, #059669 0%, #34d399 100%)"
          iconColor="#059669"
          delay={0.15}
        />
        <StatCard
          label="Gaps identified"
          value="11"
          change="Needs action"
          trend="down"
          icon={AlertTriangle}
          gradient="linear-gradient(90deg, #dc2626 0%, #f87171 100%)"
          iconColor="#dc2626"
          delay={0.2}
        />
      </div>

      {/* Projects + activity */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4">
        {/* Recent projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-[15px] font-semibold text-[#0d1117] tracking-[-0.02em]">
                Recent projects
              </h2>
              <p className="text-[12px] text-[#9ca3af] mt-0.5">Your most recently updated audits</p>
            </div>
            <Link
              href="/dashboard/projects"
              className="flex items-center gap-1 text-[12.5px] text-[#103fd5] font-medium hover:underline"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {RECENT_PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} {...p} delay={0.06 * i} />
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[15px] font-semibold text-[#0d1117] tracking-[-0.02em]">
              Recent activity
            </h2>
            <Clock size={14} className="text-[#9ca3af]" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-4 space-y-0"
          >
            {ACTIVITY.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.07 }}
                  className="flex gap-3 py-3.5 border-b border-[#f3f4f6] last:border-0 last:pb-0 first:pt-0"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: item.bg }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[12.5px] text-[#374151] leading-[1.5]">{item.text}</p>
                    <p className="text-[11px] text-[#9ca3af] mt-1 flex items-center gap-1">
                      <Clock size={10} /> {item.time}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-4 mt-4 space-y-1"
          >
            <p className="text-[12px] font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
              Quick actions
            </p>
            {[
              { label: "Connect an integration", icon: Plug, href: "/dashboard/integrations" },
              { label: "Upload documents", icon: FileUp, href: "/dashboard/documents" },
              { label: "View audit report", icon: BarChart3, href: "/dashboard/reports" },
              { label: "Start new project", icon: TrendingUp, href: "/dashboard/projects/create" },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} href={action.href}>
                  <motion.div
                    whileHover={{ x: 2, backgroundColor: "#f9fafb" }}
                    className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#f3f4f6] flex items-center justify-center">
                      <Icon size={13} className="text-[#6b7280]" />
                    </div>
                    <span className="text-[13px] text-[#374151] font-medium">{action.label}</span>
                    <ArrowRight size={12} className="text-[#9ca3af] ml-auto" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}