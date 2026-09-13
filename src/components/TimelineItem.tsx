"use client";

import { motion } from "framer-motion";
import { CalendarDays, Hourglass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { formatDuration, TIMELINE_ACCENTS } from "@/lib/utils";
import type { TimelineItemData } from "@/lib/types";

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  length: number;
  icon: LucideIcon;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, length, icon: Icon }) => {
  const accent = TIMELINE_ACCENTS[index % TIMELINE_ACCENTS.length];
  const duration = formatDuration(item.period);
  const isLast = index === length - 1;

  // Titles are stored as "Role - Organisation"; keep the whole string if not.
  const [heading, ...rest] = item.title.split(" - ");
  const subheading = rest.join(" - ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-70px" }}
      className="group relative flex gap-4 sm:gap-6"
    >
      {/* Rail */}
      <div className="flex flex-col items-center">
        <span
          className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent.gradient} text-primary shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={19} />
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-gradient-to-b from-white/25 to-white/[0.03]" />}
      </div>

      {/* Card */}
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
        <div
          className={`rounded-2xl border border-white/10 bg-secondary/40 p-5 backdrop-blur-md transition-[border-color,transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/40 sm:p-6 ${accent.ring}`}
        >
          <h3 className="text-lg font-bold leading-snug text-text sm:text-xl">{heading}</h3>
          {subheading && <p className={`mt-1 text-sm font-semibold ${accent.text}`}>{subheading}</p>}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {item.period && (
              <span className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                <CalendarDays size={12} />
                {item.period}
              </span>
            )}
            {duration && (
              <span
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${accent.border} ${accent.tint} ${accent.text}`}
              >
                <Hourglass size={12} />
                {duration}
              </span>
            )}
            {item.issuer && !item.period && (
              <span className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                {item.issuer}
              </span>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.description}</p>

          {item.details && item.details.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-gray-300"
                >
                  {detail}
                </span>
              ))}
            </div>
          )}

          {item.credentialId && (
            <p className="mt-4 inline-block rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] text-gray-400">
              ID: {item.credentialId}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
