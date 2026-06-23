"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";

interface NewProjectCardProps {
  delay?: number;
}

export default function NewProjectCard({ delay = 0 }: NewProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href="/dashboard/projects/create">
        <motion.div
          whileHover={{ y: -3, borderColor: "#103fd5", transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          className="h-full min-h-[220px] rounded-2xl border-2 border-dashed border-[#d1d5db] bg-white flex flex-col items-center justify-center gap-3 cursor-pointer group transition-colors"
        >
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.25 }}
            className="w-11 h-11 rounded-xl border-2 border-dashed border-[#d1d5db] flex items-center justify-center text-[#9ca3af] group-hover:border-[#103fd5] group-hover:text-[#103fd5] group-hover:bg-[#eef2ff] transition-colors"
          >
            <Plus size={18} />
          </motion.div>
          <div className="text-center">
            <p className="text-[13.5px] font-semibold text-[#374151] group-hover:text-[#103fd5] transition-colors">
              New audit project
            </p>
            <p className="text-[11.5px] text-[#9ca3af] mt-0.5">Choose a lens and start</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}