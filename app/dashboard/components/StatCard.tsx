"use client";

import PatternBg from "@/components/ui/patternBg";
import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  delay?: number;
}

export default function StatCard({
  label,
  value,
  change,
  trend = "neutral",
  icon: Icon,
  gradient,
  iconColor,
  delay = 0,
}: StatCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  const trendColors = {
    up: "text-emerald-600 bg-emerald-50",
    down: "text-red-500 bg-red-50",
    neutral: "text-[#6b7280] bg-[#f3f4f6]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="relative rounded-2xl overflow-hidden border border-white/60 bg-white"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <PatternBg pattern={'wave'} color={'#103fd5'} />
      {/* Gradient strip at top */}
      <div className="h-1 w-full" style={{ background: gradient }} />

      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${iconColor}14` }}
          >
            <Icon size={18} style={{ color: iconColor }} />
          </div>

          {change && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.15 }}
              className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${trendColors[trend]}`}
            >
              <TrendIcon size={10} />
              {change}
            </motion.div>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.1 }}
          className="text-[28px] font-bold text-[#0d1117] leading-none tracking-[-0.04em] mb-1.5"
        >
          {value}
        </motion.p>
        <p className="text-[12.5px] text-[#6b7280] font-medium">{label}</p>
      </div>

      {/* Subtle gradient wash at bottom right */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-[0.07] blur-xl pointer-events-none"
        style={{ background: iconColor }}
      />
    </motion.div>
  );
}