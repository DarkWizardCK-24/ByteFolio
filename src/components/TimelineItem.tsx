"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { formatDuration } from "@/lib/utils";
import type { TimelineItemData } from "@/lib/types";

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  length: number;
  icon: LucideIcon;
}

/**
 * A timeline is a sequence, so the only thing colour marks here is which entry
 * is still running. Rotating a palette across the entries — as this did — reads
 * as decoration, because the colours mean nothing.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, length, icon: Icon }) => {
  const duration = formatDuration(item.period);
  const isLast = index === length - 1;
  const isCurrent = /present|current/i.test(item.period ?? "");

  // Titles are stored as "Role - Organisation"; keep the whole string if not.
  const [heading, ...rest] = item.title.split(" - ");
  const subheading = rest.join(" - ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-70px" }}
      className="group relative flex gap-5 sm:gap-7"
    >
      {/* Rail */}
      <div className="flex flex-col items-center">
        <span
          className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-card border transition-colors duration-300 ${
            isCurrent
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-line bg-raised text-faint group-hover:text-muted"
          }`}
        >
          <Icon size={17} />
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-gradient-to-b from-line to-transparent" />}
      </div>

      {/* Card */}
      <div className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-7"}`}>
        <div className="surface surface-hover p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-text">{heading}</h3>
              {subheading && <p className="mt-1 text-sm text-muted">{subheading}</p>}
            </div>
            {isCurrent && (
              <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-live/25 bg-live/[0.08] px-2.5 py-1 text-[11px] font-semibold text-live">
                <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden />
                Current
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
            {item.period && <span className="tnum">{item.period}</span>}
            {duration && (
              <>
                <span aria-hidden>/</span>
                <span className="tnum">{duration}</span>
              </>
            )}
            {item.issuer && !item.period && <span>{item.issuer}</span>}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>

          {item.details && item.details.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-md border border-line bg-primary/50 px-2.5 py-1 text-[11px] font-medium text-muted"
                >
                  {detail}
                </span>
              ))}
            </div>
          )}

          {item.credentialId && (
            <p className="tnum mt-4 text-[11px] text-faint">Credential ID {item.credentialId}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
