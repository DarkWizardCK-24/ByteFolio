"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { certifications, experiences, flutterProjects, webProjects } from "@/lib/data";
import { totalExperienceMonths } from "@/lib/utils";

interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  hint: string;
}

const Counter: React.FC<{ value: number; decimals: number; suffix: string; play: boolean }> = ({
  value,
  decimals,
  suffix,
  play,
}) => {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setShown(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setShown,
    });
    return () => controls.stop();
  }, [play, value, reduced]);

  return (
    <span>
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
};

/**
 * The figures are the argument, so nothing else on this band competes with
 * them — hairline dividers, one type colour, and no icon tiles.
 */
const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const years = totalExperienceMonths(experiences.map((e) => e.period)) / 12;

  const stats: Stat[] = [
    { value: webProjects.length, label: "Web projects", hint: "Next.js, React & full-stack" },
    { value: flutterProjects.length, label: "Flutter projects", hint: "Shipped for Android & iOS" },
    {
      value: years,
      decimals: 1,
      suffix: "+",
      label: "Years in tech",
      hint: `Across ${experiences.length} roles`,
    },
    { value: certifications.length, label: "Certifications", hint: "Courses completed" },
  ];

  return (
    <section className="border-y border-line bg-secondary">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-5 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {stats.map(({ value, decimals = 0, suffix = "", label, hint }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-secondary px-5 py-9 sm:py-11"
            >
              <p className="tnum bg-gradient-to-br from-white via-accent-soft to-accent bg-clip-text font-display text-4xl font-semibold leading-none text-transparent sm:text-5xl">
                <Counter value={value} decimals={decimals} suffix={suffix} play={inView} />
              </p>
              <p className="mt-4 text-sm font-semibold text-text">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-faint">{hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
