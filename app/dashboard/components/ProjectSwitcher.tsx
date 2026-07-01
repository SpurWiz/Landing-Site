"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, FolderOpen } from "lucide-react";
import { useProject } from "@/context/ProjectContext";

export default function ProjectSwitcher() {
  const { activeProject, setActiveProject, projects } = useProject();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative !z-50 float-right" ref={ref}>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2.5 pl-3 pr-2.5 py-2 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#d1d5db] transition-colors group"
      >
        {/* Lens color dot */}
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: activeProject.lensColor }}
        />

        <div className="text-left">
          <p className="text-[12px] font-semibold text-[#111827] leading-none truncate max-w-[120px]">
            {activeProject.businessName}
          </p>
          {/* <p className="text-[10.5px] text-[#9ca3af] mt-0.5 truncate max-w-[140px]">
            {activeProject.name}
          </p> */}
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={13} className="text-[#9ca3af]" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-50 top-full md:-left-40 mt-2 w-[280px] bg-white border border-[#e5e7eb] rounded-2xl shadow-xl z-50 overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
           
            <div className="px-3 pt-3 pb-2 border-b border-[#f3f4f6]">
              <p className="text-[10.5px] font-semibold text-[#9ca3af] uppercase tracking-widest">
                Switch project
              </p>
            </div>

            <div className="p-1.5 max-h-[280px] overflow-y-auto">
              {projects.map((project) => {
                const active = project.id === activeProject.id;
                return (
                  <motion.button
                    key={project.id}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    onClick={() => {
                      setActiveProject(project);
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
                  >
                    {/* Gradient swatch */}
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                      style={{ background: project.lensGradient }}
                    >
                      <FolderOpen size={13} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[12.5px] font-semibold text-[#111827] truncate">
                        {project.businessName}
                      </p>
                      <p className="text-[11px] text-[#9ca3af] truncate mt-0.5">
                        {project.name} &middot; {project.lens}
                      </p>
                    </div>

                    {active && (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: project.lensColor }}
                      >
                        <Check size={10} className="text-white" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="border-t border-[#f3f4f6] p-2">
              <button className="w-full text-center text-[12px] text-[#103fd5] font-semibold py-2 rounded-xl hover:bg-[#eef2ff] transition-colors">
                + New project
              </button>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
    </div >
  );
}
