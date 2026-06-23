"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Download,
  Share2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

interface AuditSummaryHeaderProps {
  businessName: string;
  projectName: string;
  lens: string;
  lensColor: string;
  lensGradient: string;
  overallScore: number;
  lastRun: string;
  totalSections: number;
  completedSections: number;
  criticalGaps: number;
  strengths: number;
}

function OverallScoreRing({
  score,
  gradient,
  color,
}: {
  score: number;
  gradient: string;
  color: string;
}) {
  const size = 120;
  const r = 48;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;

  const label =
    score >= 80 ? "Excellent" : score >= 60 ? "Good" : score >= 40 ? "Fair" : "Critical";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f3f4f6" strokeWidth="7" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - fill }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-[26px] font-bold text-[#111827] leading-none tracking-[-0.04em]"
        >
          {score}
        </motion.span>
        <span className="text-[10px] text-[#9ca3af] font-medium mt-0.5">{label}</span>
      </div>
    </div>
  );
}

export default function AuditSummaryHeader({
  businessName,
  projectName,
  lens,
  lensColor,
  lensGradient,
  overallScore,
  lastRun,
  totalSections,
  completedSections,
  criticalGaps,
  strengths,
}: AuditSummaryHeaderProps) {
  const completionPct = Math.round((completedSections / totalSections) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white mb-6"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      {/* SVG dot pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hdr-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={lensColor} fillOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hdr-dots)" />
      </svg>

      {/* Gradient left accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: lensGradient }} />

      <div className="relative z-10 p-6 pl-7">
        <div className="flex items-start gap-6">
          {/* Score ring */}
          <OverallScoreRing score={overallScore} gradient={lensGradient} color={lensColor} />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[10px] font-bold tracking-[0.07em] uppercase px-2 py-0.5 rounded-full"
                    style={{ background: `${lensColor}14`, color: lensColor }}
                  >
                    {lens}
                  </span>
                  <span className="text-[10.5px] text-[#9ca3af]">Last run: {lastRun}</span>
                </div>
                <h2 className="text-[20px] font-bold text-[#0d1117] tracking-[-0.04em] leading-tight">
                  {businessName}
                </h2>
                <p className="text-[13px] text-[#6b7280] mt-0.5">{projectName}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#e5e7eb] text-[12px] text-[#374151] font-medium hover:bg-[#f9fafb] transition-colors"
                >
                  <RefreshCw size={12} />
                  Re-run
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#e5e7eb] text-[12px] text-[#374151] font-medium hover:bg-[#f9fafb] transition-colors"
                >
                  <Share2 size={12} />
                  Share
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-[12px] font-semibold"
                  style={{ background: lensGradient, boxShadow: `0 3px 12px ${lensColor}30` }}
                >
                  <Download size={12} />
                  Export PDF
                </motion.button>
              </div>
            </div>

            {/* Completion progress */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11.5px] text-[#9ca3af] font-medium">
                  {completedSections} of {totalSections} sections analysed
                </span>
                <span className="text-[11.5px] font-semibold" style={{ color: lensColor }}>
                  {completionPct}% complete
                </span>
              </div>
              <div className="h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPct}%` }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full rounded-full"
                  style={{ background: lensGradient }}
                />
              </div>
            </div>

            {/* Quick stat pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                <TrendingUp size={11} className="text-emerald-500" />
                <span className="text-[11.5px] font-semibold text-[#374151]">
                  {strengths} strengths
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                <AlertTriangle size={11} className="text-amber-500" />
                <span className="text-[11.5px] font-semibold text-[#374151]">
                  {criticalGaps} critical gaps
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                <CheckCircle2 size={11} className="text-[#103fd5]" />
                <span className="text-[11.5px] font-semibold text-[#374151]">
                  {completedSections} fully audited
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-1.5">
                <TrendingDown size={11} className="text-red-400" />
                <span className="text-[11.5px] font-semibold text-[#374151]">
                  Overall score {overallScore}/100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
