"use client";

import { motion } from "framer-motion";
import { getSkillColor } from "@/lib/utils";
import type { SkillItem } from "@/lib/types";

const SkillCard: React.FC<SkillItem & { index: number }> = ({ name, icon: Icon, learning, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: Math.min(index, 7) * 0.04, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-40px" }}
    className="surface surface-hover group relative flex items-center gap-3 px-4 py-3.5"
  >
    {/* The icons keep their own brand colours — that is what makes the grid
        scannable. Everything around them stays neutral so they can. */}
    <Icon className={`h-6 w-6 shrink-0 ${getSkillColor(name)}`} aria-hidden />
    <p className="min-w-0 flex-1 truncate text-sm font-medium text-muted transition-colors duration-300 group-hover:text-text">
      {name}
    </p>
    {learning && (
      <span
        role="img"
        aria-label={`${name} — currently learning`}
        title="Currently learning"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-learn"
      />
    )}
  </motion.div>
);

export default SkillCard;
