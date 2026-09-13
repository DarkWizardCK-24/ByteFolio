"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge?: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  badge,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-secondary/40 p-6 backdrop-blur-md transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-2xl hover:shadow-black/40"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/5 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7 text-text" />
        </div>
        {badge && (
          <span className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
            </span>
            {badge}
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-bold leading-snug text-text">{title}</h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  );
};

export default AboutCard;
