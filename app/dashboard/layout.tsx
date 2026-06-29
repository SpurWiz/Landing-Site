"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid, FolderOpen, BarChart3, Plug, FileText,
  Eye, Building, GraduationCap, HeartPulse, DollarSign,
  Rocket, MapPin, Handshake, ClipboardList,
  Bell, ChevronLeft, ChevronRight, LogOut, Search, Settings,
} from "lucide-react";
import { ProjectProvider } from "@/context/ProjectContext";
import ProjectSwitcher from "@/app/dashboard/components/ProjectSwitcher";

const workspaceLinks = [
  { href: "/dashboard",              label: "Overview",     icon: LayoutGrid },
  { href: "/dashboard/projects",     label: "Projects",     icon: FolderOpen,  badge: "4"                          },
  { href: "/dashboard/audit",      label: "Audit Reports",icon: BarChart3                                        },
  { href: "/dashboard/integrations", label: "Integrations", icon: Plug,        badge: "2", badgeVariant: "gold" as const },
  { href: "/dashboard/documents",    label: "Documents",    icon: FileText                                         },
];

const lensLinks = [
  { href: "/dashboard/lens/legacy",  label: "LegacyLens",  icon: Eye,          color: "#103fd5" },
  { href: "/dashboard/lens/gov",     label: "GovLens",     icon: Building,     color: "#6366f1" },
  { href: "/dashboard/lens/edu",     label: "EduLens",     icon: GraduationCap,color: "#0891b2" },
  { href: "/dashboard/lens/health",  label: "HealthLens",  icon: HeartPulse,   color: "#059669" },
  { href: "/dashboard/lens/finance", label: "FinanceLens", icon: DollarSign,   color: "#d97706" },
  { href: "/dashboard/lens/founder", label: "FounderLens", icon: Rocket,       color: "#dc2626" },
  { href: "/dashboard/lens/city",    label: "CityLens",    icon: MapPin,       color: "#7c3aed" },
  { href: "/dashboard/lens/vendor",  label: "VendorLens",  icon: Handshake,    color: "#0f766e" },
  { href: "/dashboard/lens/project", label: "ProjectLens", icon: ClipboardList,color: "#b45309" },
];

const sidebarVariants = {
  expanded:  { width: 232 },
  collapsed: { width: 64  },
};

const labelVariants = {
  expanded:  { opacity: 1, x: 0,  display: "block" },
  collapsed: { opacity: 0, x: -8, transitionEnd: { display: "none" } },
};

function Sidebar({ collapsed, setCollapsed, pathname }: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  pathname: string;
}) {
  return (
    <motion.aside
      initial="expanded"
      animate={collapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="relative !z-50 flex flex-col bg-[#0d1117] border-r border-white/[0.06] shrink-0 overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-[18px] border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-lg bg-[#103fd5] flex items-center justify-center shrink-0">
          <Eye size={15} className="text-white" />
        </div>
        <motion.div variants={labelVariants} transition={{ duration: 0.2 }} className="overflow-hidden">
          <p className="text-white text-[13px] font-semibold leading-none tracking-[-0.02em]">LegacyLens</p>
          <p className="text-white/35 text-[10px] mt-[5px] tracking-widest uppercase">Audit Platform</p>
        </motion.div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 scrollbar-none">
        <div className="px-3 mb-1">
          <motion.p variants={labelVariants} transition={{ duration: 0.15 }}
            className="text-[10px] font-semibold text-white/25 tracking-[0.08em] uppercase px-2 mb-2"
          >
            Workspace
          </motion.p>
          {workspaceLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href ||
              (link.href !== "/dashboard" && pathname.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  className={`flex items-center gap-3 px-2 py-[7px] rounded-lg mb-0.5 transition-colors relative ${
                    active ? "bg-[#103fd5]/20" : ""
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#103fd5] rounded-full"
                    />
                  )}
                  <Icon size={15} className={active ? "text-[#5d7cff] shrink-0" : "text-white/35 shrink-0"} />
                  <motion.span variants={labelVariants} transition={{ duration: 0.2 }}
                    className={`text-[12.5px] flex-1 truncate ${active ? "text-white font-medium" : "text-white/45"}`}
                  >
                    {link.label}
                  </motion.span>
                  {link.badge && !collapsed && (
                    <motion.span variants={labelVariants} transition={{ duration: 0.15 }}
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                        link.badgeVariant === "gold"
                          ? "bg-[#fdb62f]/15 text-[#fdb62f]"
                          : "bg-[#103fd5]/30 text-[#8ea7ff]"
                      }`}
                    >
                      {link.badge}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="px-3 mt-4">
          <motion.p variants={labelVariants} transition={{ duration: 0.15 }}
            className="text-[10px] font-semibold text-white/25 tracking-[0.08em] uppercase px-2 mb-2"
          >
            Audit Lenses
          </motion.p>
          {lensLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  className={`flex items-center gap-3 px-2 py-[7px] rounded-lg mb-0.5 ${active ? "bg-white/[0.08]" : ""}`}
                >
                  <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${link.color}22` }}
                  >
                    <Icon size={11} style={{ color: link.color }} />
                  </div>
                  <motion.span variants={labelVariants} transition={{ duration: 0.2 }}
                    className={`text-[12.5px] truncate ${active ? "text-white font-medium" : "text-white/40"}`}
                  >
                    {link.label}
                  </motion.span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User */}
      <div className="border-t border-white/[0.06] p-3">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#103fd5] to-[#5d7cff] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
            AO
          </div>
          <motion.div variants={labelVariants} transition={{ duration: 0.2 }} className="flex-1 min-w-0">
            <p className="text-white text-[12px] font-medium truncate">Adaeze Okeke</p>
            <p className="text-white/35 text-[10px] truncate">Business Owner</p>
          </motion.div>
          <motion.button variants={labelVariants} transition={{ duration: 0.15 }}
            className="text-white/25 hover:text-white/60 transition-colors"
          >
            <LogOut size={14} />
          </motion.button>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center mt-2 py-1.5 rounded-lg text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all"
        >
          {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </div>
    </motion.aside>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <ProjectProvider>
      <div className="flex h-screen bg-[#f0f2f7] overflow-hidden">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} pathname={pathname} />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Topbar */}
          <header className="h-14 bg-white border-b border-[#e5e7eb] flex items-center px-5 gap-3 shrink-0 z-10">

            {/* Search */}
            <div className="flex items-center gap-2 bg-[#f0f2f7] rounded-lg px-3 py-2 w-[220px]">
              <Search size={13} className="text-[#9ca3af] shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-[13px] text-[#374151] placeholder:text-[#9ca3af] outline-none flex-1 min-w-0"
              />
            </div>


            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto">
            {/* Project switcher — lives in topbar, globally scoped */}
            <div className="flex items-center gap-2 z-50">
              <span className="text-[11px] text-[#9ca3af] font-medium hidden sm:block">Active project</span>
              <ProjectSwitcher />
            </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg bg-[#f0f2f7] flex items-center justify-center text-[#6b7280] hover:text-[#374151] hover:bg-[#e5e7eb] transition-colors relative"
              >
                <Bell size={15} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#fdb62f] rounded-full" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg bg-[#f0f2f7] flex items-center justify-center text-[#6b7280] hover:text-[#374151] hover:bg-[#e5e7eb] transition-colors"
              >
                <Settings size={15} />
              </motion.button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#103fd5] to-[#5d7cff] flex items-center justify-center text-[11px] font-bold text-white cursor-pointer">
                AO
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                className="h-full"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </ProjectProvider>
  );
}