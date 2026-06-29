"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2, AlertCircle, Clock, RefreshCw,
  Unlink, ExternalLink, LucideIcon,
} from "lucide-react";

export type IntegrationStatus = "connected" | "pending" | "error" | "disconnected";

export interface IntegrationOverviewStat {
  label: string;
  value: string;
}

export interface IntegrationCardData {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  pattern: "dots" | "grid" | "lines" | "rings";
  status: IntegrationStatus;
  connectedAccount?: string;
  lastSynced?: string;
  overviewStats: IntegrationOverviewStat[];
  projectsUsing: string[];
}

const statusConfig: Record<IntegrationStatus, {
  label: string; icon: LucideIcon;
  pill: string; dot: string;
}> = {
  connected:    { label: "Connected",    icon: CheckCircle2, pill: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-400" },
  pending:      { label: "Pending auth", icon: Clock,        pill: "bg-amber-50 text-amber-700 border-amber-200",       dot: "bg-amber-400"   },
  error:        { label: "Auth error",   icon: AlertCircle,  pill: "bg-red-50 text-red-600 border-red-200",             dot: "bg-red-400"      },
  disconnected: { label: "Disconnected", icon: Unlink,       pill: "bg-[#f3f4f6] text-[#6b7280] border-[#e5e7eb]",     dot: "bg-[#d1d5db]"   },
};

function PatternBg({ pattern, color }: { pattern: IntegrationCardData["pattern"]; color: string }) {
  const o = 0.055;
  if (pattern === "dots") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`id-${color}`} width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill={color} fillOpacity={o} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#id-${color})`} />
    </svg>
  );
  if (pattern === "grid") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`ig-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity={o * 1.6} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#ig-${color})`} />
    </svg>
  );
  if (pattern === "lines") return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`il-${color}`} width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 0 12 L 12 0" stroke={color} strokeWidth="0.6" strokeOpacity={o * 1.6} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#il-${color})`} />
    </svg>
  );
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`ir-${color}`} width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity={o * 1.6} />
        <circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="0.4" strokeOpacity={o} />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#ir-${color})`} />
    </svg>
  );
}

interface IntegrationCardProps {
  data: IntegrationCardData;
  delay?: number;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
}

export default function IntegrationCard({
  data, delay = 0, onConnect, onDisconnect,
}: IntegrationCardProps) {
  const Icon = data.icon;
  const { label: statusLabel, icon: StatusIcon, pill, dot } = statusConfig[data.status];
  const isConnected = data.status === "connected";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.09)", transition: { duration: 0.18 } }}
      className="relative rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
    >
      <PatternBg pattern={data.pattern} color={data.color} />

      {/* Gradient top strip */}
      <div className="h-[3px] w-full relative z-10" style={{ background: data.gradient }} />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-[0.06] blur-2xl pointer-events-none"
        style={{ background: data.color }} />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-[#f3f4f6]"
              style={{ background: `${data.color}10` }}
            >
              <Icon size={19} style={{ color: data.color }} />
            </div>
            <div>
              <h3 className="text-[13.5px] font-semibold text-[#111827] tracking-[-0.02em] leading-none">
                {data.name}
              </h3>
              <p className="text-[11px] text-[#9ca3af] mt-1">{data.category}</p>
            </div>
          </div>

          {/* Status dot + badge */}
          <div className="flex flex-col items-end gap-1.5">
            <span className={`flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full border ${pill}`}>
              <StatusIcon size={9} />
              {statusLabel}
            </span>
            {isConnected && (
              <span className="flex items-center gap-1 text-[10px] text-[#9ca3af]">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                Live
              </span>
            )}
          </div>
        </div>

        <p className="text-[12px] text-[#6b7280] leading-relaxed mb-4">{data.description}</p>

        {/* Connected account */}
        {data.connectedAccount && (
          <div className="flex items-center gap-2 bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-2 mb-4">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
              style={{ background: data.gradient }}
            >
              {data.connectedAccount[0].toUpperCase()}
            </div>
            <span className="text-[12px] font-medium text-[#374151] truncate flex-1">
              {data.connectedAccount}
            </span>
            {data.lastSynced && (
              <span className="text-[10.5px] text-[#9ca3af] shrink-0 flex items-center gap-1">
                <RefreshCw size={9} />
                {data.lastSynced}
              </span>
            )}
          </div>
        )}

        {/* Overview stats */}
        {isConnected && data.overviewStats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {data.overviewStats.map((stat) => (
              <div key={stat.label}
                className="bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3 py-2.5 text-center"
              >
                <p className="text-[16px] font-bold text-[#111827] leading-none tracking-[-0.03em]">
                  {stat.value}
                </p>
                <p className="text-[10.5px] text-[#9ca3af] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects using */}
        {isConnected && data.projectsUsing.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap mb-4">
            <span className="text-[10.5px] text-[#9ca3af]">Used in:</span>
            {data.projectsUsing.map((p) => (
              <span key={p}
                className="text-[10.5px] font-medium px-2 py-0.5 rounded-md border"
                style={{ background: `${data.color}08`, borderColor: `${data.color}22`, color: data.color }}
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {/* Action footer */}
        <div className="flex items-center gap-2 pt-3.5 border-t border-[#f3f4f6]">
          {isConnected ? (
            <>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                onClick={() => onDisconnect(data.id)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#e5e7eb] text-[12px] font-medium text-[#6b7280] hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
              >
                <Unlink size={12} />
                Disconnect
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-[12px] font-semibold text-white transition-all"
                style={{ background: data.gradient, boxShadow: `0 3px 10px ${data.color}25` }}
              >
                <ExternalLink size={12} />
                View data
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => onConnect(data.id)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12.5px] font-semibold text-white transition-all"
              style={{ background: data.gradient, boxShadow: `0 3px 10px ${data.color}25` }}
            >
              Connect {data.name}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}