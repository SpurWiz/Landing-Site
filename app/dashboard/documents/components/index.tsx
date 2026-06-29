"use client";

import { motion } from "framer-motion";
import {
  FileText, FileSpreadsheet, FileImage, File,
  CheckCircle2, Clock, AlertCircle, Eye,
  Download, Trash2, MoreHorizontal, LucideIcon,
} from "lucide-react";

export type DocumentStatus = "reviewed" | "processing" | "pending" | "flagged";
export type DocumentType   = "pdf" | "xlsx" | "docx" | "csv" | "image" | "other";
export type ReviewState    = "clean" | "has_gaps" | "needs_review" | "processing";

export interface DocumentTag {
  label: string;
  color: string;
}

export interface DocumentCardData {
  id: string;
  name: string;
  type: DocumentType;
  size: string;
  category: string;
  uploadedAt: string;
  uploadedBy: string;
  status: DocumentStatus;
  reviewState: ReviewState;
  reviewSummary?: string;
  findingsCount?: number;
  pagesOrRows?: string;
  tags: DocumentTag[];
  color: string;
  gradient: string;
  pattern: "dots" | "grid" | "lines" | "rings";
}

const typeConfig: Record<DocumentType, { icon: LucideIcon; bg: string; color: string }> = {
  pdf:   { icon: FileText,        bg: "#fff1f2", color: "#dc2626"  },
  xlsx:  { icon: FileSpreadsheet, bg: "#f0fdf4", color: "#059669"  },
  docx:  { icon: FileText,        bg: "#eff6ff", color: "#2563eb"  },
  csv:   { icon: FileSpreadsheet, bg: "#fefce8", color: "#ca8a04"  },
  image: { icon: FileImage,       bg: "#fdf4ff", color: "#9333ea"  },
  other: { icon: File,            bg: "#f9fafb", color: "#6b7280"  },
};

const statusConfig: Record<DocumentStatus, { label: string; icon: LucideIcon; pill: string }> = {
  reviewed:   { label: "Reviewed",   icon: CheckCircle2, pill: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  processing: { label: "Processing", icon: Clock,        pill: "bg-blue-50 text-blue-600 border-blue-200"          },
  pending:    { label: "Pending",    icon: Clock,        pill: "bg-[#f3f4f6] text-[#6b7280] border-[#e5e7eb]"     },
  flagged:    { label: "Flagged",    icon: AlertCircle,  pill: "bg-red-50 text-red-600 border-red-200"             },
};

const reviewConfig: Record<ReviewState, { label: string; bar: string; bg: string; text: string }> = {
  clean:        { label: "No issues found",    bar: "#059669", bg: "#f0fdf4", text: "text-emerald-700" },
  has_gaps:     { label: "Gaps detected",      bar: "#dc2626", bg: "#fff1f2", text: "text-red-600"     },
  needs_review: { label: "Awaiting review",    bar: "#d97706", bg: "#fffbeb", text: "text-amber-700"   },
  processing:   { label: "Analysing content",  bar: "#2563eb", bg: "#eff6ff", text: "text-blue-600"    },
};

function PatternBg({ pattern, color }: { pattern: DocumentCardData["pattern"]; color: string }) {
  const o = 0.055;
  if (pattern === "grid") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`dg-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity={o * 1.5} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#dg-${color})`} />
    </svg>
  );
  if (pattern === "lines") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`dl-${color}`} width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 0 12 L 12 0" stroke={color} strokeWidth="0.6" strokeOpacity={o * 1.5} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#dl-${color})`} />
    </svg>
  );
  if (pattern === "rings") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`dr-${color}`} width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity={o * 1.5} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#dr-${color})`} />
    </svg>
  );
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`dd-${color}`} width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill={color} fillOpacity={o} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#dd-${color})`} />
    </svg>
  );
}

interface DocumentCardProps {
  data: DocumentCardData;
  delay?: number;
}

export default function DocumentCard({ data, delay = 0 }: DocumentCardProps) {
  const { icon: TypeIcon, bg: typeBg, color: typeColor } = typeConfig[data.type];
  const { label: statusLabel, icon: StatusIcon, pill }   = statusConfig[data.status];
  const review                                            = reviewConfig[data.reviewState];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.09)", transition: { duration: 0.18 } }}
      className="relative rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden group"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
    >
      <PatternBg pattern={data.pattern} color={data.color} />
      <div className="h-[3px] w-full relative z-10" style={{ background: data.gradient }} />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3.5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-[#f3f4f6]"
              style={{ background: typeBg }}
            >
              <TypeIcon size={18} style={{ color: typeColor }} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[13px] font-semibold text-[#111827] tracking-[-0.01em] leading-snug truncate max-w-[160px]">
                {data.name}
              </h3>
              <p className="text-[11px] text-[#9ca3af] mt-0.5">
                {data.type.toUpperCase()} · {data.size}
                {data.pagesOrRows && ` · ${data.pagesOrRows}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className={`flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full border ${pill}`}>
              <StatusIcon size={9} />
              {statusLabel}
            </span>
            <button className="w-6 h-6 rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-[#374151] hover:bg-[#f3f4f6] transition-colors opacity-0 group-hover:opacity-100">
              <MoreHorizontal size={13} />
            </button>
          </div>
        </div>

        {/* Category + tags */}
        <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]">
            {data.category}
          </span>
          {data.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-[10.5px] font-medium px-2 py-0.5 rounded-md border"
              style={{ background: `${tag.color}10`, borderColor: `${tag.color}25`, color: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Review state block */}
        <div className="rounded-xl border p-3 mb-3.5" style={{ background: review.bg, borderColor: `${data.color}18` }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-[11.5px] font-semibold ${review.text}`}>{review.label}</span>
            {data.findingsCount !== undefined && data.findingsCount > 0 && (
              <span className="text-[10.5px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-full">
                {data.findingsCount} finding{data.findingsCount > 1 ? "s" : ""}
              </span>
            )}
          </div>
          {/* Animated review progress bar */}
          <div className="h-1 bg-white/60 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: data.reviewState === "processing" ? "60%" : data.reviewState === "clean" ? "100%" : data.reviewState === "has_gaps" ? "100%" : "30%" }}
              transition={{ duration: 1.1, delay: delay + 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-full"
              style={{ background: review.bar }}
            />
          </div>
          {data.reviewSummary && (
            <p className="text-[11px] text-[#6b7280] mt-1.5 leading-relaxed">{data.reviewSummary}</p>
          )}
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-[11px] text-[#9ca3af] mb-4">
          <span>Uploaded {data.uploadedAt}</span>
          <span className="text-[#e5e7eb]">·</span>
          <span>by {data.uploadedBy}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3.5 border-t border-[#f3f4f6]">
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#e5e7eb] text-[12px] font-medium text-[#374151] hover:bg-[#f9fafb] transition-colors"
          >
            <Eye size={12} />
            Preview
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-[12px] font-semibold text-white"
            style={{ background: data.gradient, boxShadow: `0 3px 10px ${data.color}25` }}
          >
            <Download size={12} />
            Download
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff1f2" }} whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-xl border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] hover:text-red-500 hover:border-red-200 transition-all"
          >
            <Trash2 size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}