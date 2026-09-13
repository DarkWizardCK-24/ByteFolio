"use client";

import { motion } from "framer-motion";

interface Meta {
  value: string | number;
  label: string;
}

interface SectionHeaderProps {
  title: string;
  lede: string;
  meta?: Meta[];
}

/**
 * One header for every section. The counts sit on a baseline with the heading
 * as plain figures rather than floating pills — they are data about the
 * section, so they are set like data.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, lede, meta }) => (
  <motion.header
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className="mb-14 flex flex-col gap-7 border-b border-line pb-9 sm:flex-row sm:items-end sm:justify-between sm:gap-12"
  >
    <div className="max-w-xl">
      <h2 className="text-[2.25rem] font-bold leading-[1.04] text-text sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p>
    </div>

    {meta && meta.length > 0 && (
      <div className="flex shrink-0 gap-8 sm:gap-10">
        {meta.map(({ value, label }) => (
          <div key={label}>
            <p className="tnum font-display text-3xl font-semibold leading-none text-text">{value}</p>
            <p className="mt-2 text-xs text-faint">{label}</p>
          </div>
        ))}
      </div>
    )}
  </motion.header>
);

export default SectionHeader;
