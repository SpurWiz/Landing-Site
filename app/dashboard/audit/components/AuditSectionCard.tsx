"use client";

import PatternBg, { patternType } from "@/components/ui/patternBg";
import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight, CheckCircle2, Clock, XCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export type SectionStatus = "complete" | "partial" | "pending" | "critical";

export interface AuditFinding {
  type: "gap" | "strength" | "warning";
  text: string;
}

export interface AuditSectionData {
  id: string;
  title: string;
  purpose: string;
  icon: LucideIcon;
  score: number;
  status: SectionStatus;
  findingsCount: number;
  findings: AuditFinding[];
  evidence: string[];
  color: string;
  gradient: string;
  pattern: patternType
}

const statusConfig: Record<SectionStatus, { label: string; icon: LucideIcon; className: string }> = {
  complete: { label: "Complete",  icon: CheckCircle2, className: "bg-emerald-50 text-emerald-700" },
  partial:  { label: "Partial",   icon: Clock,        className: "bg-amber-50 text-amber-700"    },
  pending:  { label: "Pending",   icon: Clock,        className: "bg-[#f3f4f6] text-[#6b7280]"  },
  critical: { label: "Critical",  icon: XCircle,      className: "bg-red-50 text-red-600"        },
};



function ScoreRing({ score, color, size = 56 }: { score: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f3f4f6" strokeWidth="4" />
        <motion.circle
          cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
          strokeWidth="4" strokeLinecap="round" strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - fill }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[12px] font-bold" style={{ color }}>{score}</span>
      </div>
    </div>
  );
}

interface AuditSectionCardProps {
  data: AuditSectionData;
  delay?: number;
  projectId: string;
}

export default function AuditSectionCard({ data, delay = 0, projectId }: AuditSectionCardProps) {
  const { label: statusLabel, icon: StatusIcon, className: statusClass } = statusConfig[data.status];
  const Icon = data.icon;

  return (
    <Link href={`/dashboard/audit/${data.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, delay, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.10)", transition: { duration: 0.18 } }}
        className="relative rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden cursor-pointer group"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
      >
        <PatternBg pattern={data.pattern} color={data.color} />
        <div className="h-[3px] w-full relative z-10" style={{ background: data.gradient }} />

        <div className="relative z-10 p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${data.color}14` }}>
                <Icon size={16} style={{ color: data.color }} />
              </div>
              <div>
                <h3 className="text-[13.5px] font-semibold text-[#111827] tracking-[-0.02em] leading-none">
                  {data.title}
                </h3>
                <p className="text-[11px] text-[#9ca3af] mt-1 leading-snug max-w-[180px]">
                  {data.purpose}
                </p>
              </div>
            </div>
            <ScoreRing score={data.score} color={data.color} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#f9fafb] rounded-xl p-2.5 text-center border border-[#f3f4f6]">
              <p className="text-[11px] text-[#9ca3af] mb-0.5">Status</p>
              <span className={`inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full ${statusClass}`}>
                <StatusIcon size={9} />
                {statusLabel}
              </span>
            </div>
            <div className="bg-[#f9fafb] rounded-xl p-2.5 text-center border border-[#f3f4f6]">
              <p className="text-[11px] text-[#9ca3af] mb-0.5">Findings</p>
              <p className="text-[14px] font-bold text-[#111827]">{data.findingsCount}</p>
            </div>
            <div className="bg-[#f9fafb] rounded-xl p-2.5 text-center border border-[#f3f4f6]">
              <p className="text-[11px] text-[#9ca3af] mb-0.5">Evidence</p>
              <p className="text-[14px] font-bold text-[#111827]">{data.evidence.length}</p>
            </div>
          </div>

          {/* Evidence chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {data.evidence.map((ev) => (
              <span
                key={ev}
                className="text-[10.5px] font-medium px-2 py-0.5 rounded-md border"
                style={{ background: `${data.color}08`, borderColor: `${data.color}22`, color: data.color }}
              >
                {ev}
              </span>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-between pt-3.5 border-t border-[#f3f4f6]">
            <span className="text-[11.5px] text-[#9ca3af]">
              {data.findings.filter((f) => f.type === "gap").length} gaps &middot;{" "}
              {data.findings.filter((f) => f.type === "strength").length} strengths
            </span>
            <motion.div
              whileHover={{ x: 2 }}
              className="flex items-center gap-1 text-[11.5px] font-semibold"
              style={{ color: data.color }}
            >
              Open section
              <ArrowUpRight size={12} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
