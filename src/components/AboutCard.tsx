"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, icon: Icon, badge, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-60px" }}
    className="surface surface-hover group flex h-full flex-col p-6"
  >
    <div className="flex items-start justify-between gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-card border border-line bg-primary/50 text-muted transition-colors duration-300 group-hover:text-accent">
        <Icon className="h-5 w-5" />
      </span>
      {badge && (
        <span className="flex items-center gap-1.5 rounded-full border border-learn/25 bg-learn/[0.08] px-2.5 py-1 text-[11px] font-semibold text-learn">
          <span className="h-1.5 w-1.5 rounded-full bg-learn" aria-hidden />
          {badge}
        </span>
      )}
    </div>

    <h3 className="mt-6 text-lg font-semibold leading-snug text-text">{title}</h3>
    <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
  </motion.div>
);

export default AboutCard;
