"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Building,
  GraduationCap,
  HeartPulse,
  DollarSign,
  Rocket,
  MapPin,
  Handshake,
  ClipboardList,
  LucideIcon,
} from "lucide-react";

export interface Lens {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  isDefault?: boolean;
}

export const LENSES: Lens[] = [
  {
    id: "legacy",
    name: "LegacyLens",
    description: "Full-spectrum audit. Strategy, operations, and brand alignment.",
    icon: Eye,
    color: "#103fd5",
    gradient: "linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)",
    isDefault: true,
  },
  {
    id: "gov",
    name: "GovLens",
    description: "Public sector alignment and governance structure audit.",
    icon: Building,
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
  },
  {
    id: "edu",
    name: "EduLens",
    description: "Education institutions and learning organisation health.",
    icon: GraduationCap,
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2 0%, #67e8f9 100%)",
  },
  {
    id: "health",
    name: "HealthLens",
    description: "Healthcare organisations and wellness brand assessment.",
    icon: HeartPulse,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #34d399 100%)",
  },
  {
    id: "finance",
    name: "FinanceLens",
    description: "Financial health, expense flows, and runway analysis.",
    icon: DollarSign,
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
  },
  {
    id: "founder",
    name: "FounderLens",
    description: "Early-stage startups and founder-led business audit.",
    icon: Rocket,
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
  },
  {
    id: "city",
    name: "CityLens",
    description: "Urban businesses and city-scale operational audit.",
    icon: MapPin,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)",
  },
  {
    id: "vendor",
    name: "VendorLens",
    description: "Supply chain health and vendor relationship audit.",
    icon: Handshake,
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
  },
  {
    id: "project",
    name: "ProjectLens",
    description: "Project-level delivery, health, and execution audit.",
    icon: ClipboardList,
    color: "#b45309",
    gradient: "linear-gradient(135deg, #b45309 0%, #fcd34d 100%)",
  },
];

interface LensSelectorProps {
  value: string;
  onChange: (lensId: string) => void;
}

export default function LensSelector({ value, onChange }: LensSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {LENSES.map((lens, i) => {
        const Icon = lens.icon;
        const selected = value === lens.id;

        return (
          <motion.button
            key={lens.id}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(lens.id)}
            className={`relative text-left p-3.5 rounded-xl border transition-all ${
              selected
                ? "border-transparent shadow-sm"
                : "border-[#e5e7eb] bg-white hover:border-[#d1d5db]"
            }`}
            style={
              selected
                ? {
                    background: lens.gradient,
                    boxShadow: `0 4px 18px ${lens.color}30`,
                  }
                : {}
            }
          >
            {lens.isDefault && !selected && (
              <span className="absolute top-2 right-2 text-[9px] font-bold tracking-wide text-[#103fd5] bg-[#eef2ff] px-1.5 py-0.5 rounded-full">
                Default
              </span>
            )}

            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
              style={
                selected
                  ? { background: "rgba(255,255,255,0.2)" }
                  : { background: `${lens.color}14` }
              }
            >
              <Icon size={15} style={{ color: selected ? "#fff" : lens.color }} />
            </div>

            <p
              className={`text-[12.5px] font-semibold leading-none mb-1.5 ${
                selected ? "text-white" : "text-[#111827]"
              }`}
            >
              {lens.name}
            </p>
            <p
              className={`text-[11px] leading-[1.5] ${
                selected ? "text-white/70" : "text-[#9ca3af]"
              }`}
            >
              {lens.description}
            </p>

            {selected && (
              <motion.div
                layoutId="lens-selected"
                className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-white/25 flex items-center justify-center"
                transition={{ duration: 0.2 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}