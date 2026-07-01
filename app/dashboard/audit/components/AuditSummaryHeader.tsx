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
  const size = 80; // Reduced from 120 for mobile
  const r = 30; // Reduced from 48
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;

  const label =
    score >= 80 ? "Excellent" : score >= 60 ? "Good" : score >= 40 ? "Fair" : "Critical";

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f3f4f6" strokeWidth="5" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="5"
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
          className="text-[20px] sm:text-[26px] font-bold text-[#111827] leading-none tracking-[-0.04em]"
        >
          {score}
        </motion.span>
        <span className="text-[8px] sm:text-[10px] text-[#9ca3af] font-medium mt-0.5">{label}</span>
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
      className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white mb-4 sm:mb-6"
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

      <div className="relative z-10 p-4 sm:p-6 pl-5 sm:pl-7">
        {/* Mobile: Stack vertically, Tablet+: Flex row */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          {/* Score ring - centered on mobile, left on larger */}
          <div className="flex justify-center sm:block">
            <OverallScoreRing score={overallScore} gradient={lensGradient} color={lensColor} />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0 mb-3">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                  <span
                    className="text-[9px] sm:text-[10px] font-bold tracking-[0.07em] uppercase px-2 py-0.5 rounded-full"
                    style={{ background: `${lensColor}14`, color: lensColor }}
                  >
                    {lens}
                  </span>
                  <span className="text-[10px] sm:text-[10.5px] text-[#9ca3af]">Last run: {lastRun}</span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#0d1117] tracking-[-0.04em] leading-tight truncate">
                  {businessName}
                </h2>
                <p className="text-[12px] sm:text-[13px] text-[#6b7280] mt-0.5 truncate">{projectName}</p>
              </div>

              {/* Action buttons - stacked on mobile, row on larger */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-[#e5e7eb] text-[11px] sm:text-[12px] text-[#374151] font-medium hover:bg-[#f9fafb] transition-colors"
                >
                  <RefreshCw size={11} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">Re-run</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-[#e5e7eb] text-[11px] sm:text-[12px] text-[#374151] font-medium hover:bg-[#f9fafb] transition-colors"
                >
                  <Share2 size={11} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">Share</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-white text-[11px] sm:text-[12px] font-semibold"
                  style={{ background: lensGradient, boxShadow: `0 3px 12px ${lensColor}30` }}
                >
                  <Download size={11} className="sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">Export PDF</span>
                </motion.button>
              </div>
            </div>

            {/* Completion progress */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] sm:text-[11.5px] text-[#9ca3af] font-medium">
                  {completedSections} of {totalSections} sections analysed
                </span>
                <span className="text-[10px] sm:text-[11.5px] font-semibold" style={{ color: lensColor }}>
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

            {/* Quick stat pills - wrap on mobile */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-2 sm:px-3 py-1 sm:py-1.5">
                <TrendingUp size={10} className="sm:w-[11px] sm:h-[11px] text-emerald-500" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold text-[#374151] whitespace-nowrap">
                  {strengths} strengths
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-2 sm:px-3 py-1 sm:py-1.5">
                <AlertTriangle size={10} className="sm:w-[11px] sm:h-[11px] text-amber-500" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold text-[#374151] whitespace-nowrap">
                  {criticalGaps} critical gaps
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-2 sm:px-3 py-1 sm:py-1.5">
                <CheckCircle2 size={10} className="sm:w-[11px] sm:h-[11px] text-[#103fd5]" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold text-[#374151] whitespace-nowrap">
                  {completedSections} audited
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-2 sm:px-3 py-1 sm:py-1.5">
                <TrendingDown size={10} className="sm:w-[11px] sm:h-[11px] text-red-400" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold text-[#374151] whitespace-nowrap">
                  Score {overallScore}/100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}