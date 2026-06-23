"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  MoreHorizontal,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export interface Integration {
  name: string;
  status: "linked" | "pending";
}

export interface ProjectCardProps {
  id: string;
  name: string;
  businessName: string;
  industry: string;
  location: string;
  lens: string;
  lensColor: string;
  lensGradient: string;
  progress: number;
  status: "active" | "draft" | "review";
  integrations: Integration[];
  updatedAt: string;
  delay?: number;
}

const statusConfig = {
  active: {
    label: "Active",
    icon: CheckCircle2,
    className: "bg-[#eff6ff] text-[#1d4ed8]",
  },
  draft: {
    label: "Draft",
    icon: Clock,
    className: "bg-[#f3f4f6] text-[#4b5563]",
  },
  review: {
    label: "In Review",
    icon: AlertCircle,
    className: "bg-[#fff7ed] text-[#c2410c]",
  },
};

export default function ProjectCard({
  id,
  name,
  businessName,
  industry,
  location,
  lens,
  lensColor,
  lensGradient,
  progress,
  status,
  integrations,
  updatedAt,
  delay = 0,
}: ProjectCardProps) {
  const { label: statusLabel, icon: StatusIcon, className: statusClass } = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      {/* Card gradient header band */}
      <div
        className="h-[3px] w-full"
        style={{ background: lensGradient }}
      />

      {/* Soft ambient glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: lensColor }}
      />

      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: `${lensColor}14`,
              color: lensColor,
            }}
          >
            {lens}
          </div>
          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-[#374151] hover:bg-[#f3f4f6] transition-colors opacity-0 group-hover:opacity-100">
            <MoreHorizontal size={14} />
          </button>
        </div>

        {/* Name + meta */}
        <h3 className="text-[15px] font-semibold text-[#111827] tracking-[-0.02em] mb-1 leading-snug">
          {name}
        </h3>
        <p className="text-[12px] text-[#9ca3af] mb-4">
          {businessName} &middot; {industry} &middot; {location}
        </p>

        {/* Progress */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11.5px] text-[#6b7280] font-medium">Audit progress</span>
            <span className="text-[12px] font-bold text-[#111827]">{progress}%</span>
          </div>
          <div className="h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, delay: delay + 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-full"
              style={{ background: lensGradient }}
            />
          </div>
        </div>

        {/* Integrations */}
        <div className="flex items-center gap-1.5 flex-wrap mb-4">
          {integrations.map((int) => (
            <span
              key={int.name}
              className={`flex items-center gap-1 text-[10.5px] font-medium px-2 py-1 rounded-md border ${
                int.status === "linked"
                  ? "bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]"
                  : "bg-[#fffbeb] border-[#fde68a] text-[#92400e]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  int.status === "linked" ? "bg-[#22c55e]" : "bg-[#f59e0b]"
                }`}
              />
              {int.name}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3.5 border-t border-[#f3f4f6]">
          <div className="flex items-center gap-1.5 text-[11px] text-[#9ca3af]">
            <Calendar size={11} />
            <span>{updatedAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full ${statusClass}`}>
              <StatusIcon size={10} />
              {statusLabel}
            </span>
            <Link href={`/dashboard/projects/${id}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-6 h-6 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `${lensColor}18`, color: lensColor }}
              >
                <ArrowUpRight size={12} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}