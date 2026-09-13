"use client";

import { motion } from "framer-motion";
import { getSkillColor } from "@/lib/utils";
import type { SkillItem } from "@/lib/types";

interface SkillCardProps extends SkillItem {
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, gradient, learning, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: Math.min(index, 9) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-40px" }}
    className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 px-3 py-6 backdrop-blur-md transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl hover:shadow-black/40"
  >
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      aria-hidden
    />

    {learning && (
      <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-yellow-300">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
        </span>
        Learning
      </span>
    )}

    <Icon
      className={`relative h-10 w-10 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 ${getSkillColor(name)}`}
      aria-hidden
    />
    <p className="relative text-center text-[13px] font-semibold text-gray-300 transition-colors duration-300 group-hover:text-text">
      {name}
    </p>
  </motion.div>
);

export default SkillCard;
