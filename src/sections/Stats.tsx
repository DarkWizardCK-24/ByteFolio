"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Globe, Smartphone, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { certifications, experiences, flutterProjects, webProjects } from "@/lib/data";
import { totalExperienceMonths } from "@/lib/utils";

interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  accent: string;
  text: string;
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

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const years = totalExperienceMonths(experiences.map((e) => e.period)) / 12;

  const stats: Stat[] = [
    {
      value: webProjects.length,
      label: "Web projects",
      hint: "Next.js, React & full-stack",
      icon: Globe,
      accent: "from-indigo-400 to-sky-400",
      text: "text-indigo-300",
    },
    {
      value: flutterProjects.length,
      label: "Flutter projects",
      hint: "Shipped for Android & iOS",
      icon: Smartphone,
      accent: "from-sky-400 to-cyan-300",
      text: "text-sky-300",
    },
    {
      value: years,
      decimals: 1,
      suffix: "+",
      label: "Years in tech",
      hint: `Across ${experiences.length} roles`,
      icon: Timer,
      accent: "from-amber-400 to-orange-400",
      text: "text-amber-300",
    },
    {
      value: certifications.length,
      label: "Certifications",
      hint: "Courses completed",
      icon: Award,
      accent: "from-violet-400 to-fuchsia-400",
      text: "text-violet-300",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-secondary py-14">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />
      <div ref={ref} className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:px-8">
        {stats.map(({ value, decimals = 0, suffix = "", label, hint, icon: Icon, accent, text }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative flex flex-col gap-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/25"
          >
            <span
              className={`mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${accent} text-primary shadow-lg transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon size={20} />
            </span>
            <p className={`text-3xl font-extrabold tabular-nums sm:text-4xl ${text}`}>
              <Counter value={value} decimals={decimals} suffix={suffix} play={inView} />
            </p>
            <p className="text-sm font-semibold text-text">{label}</p>
            <p className="text-xs text-gray-500">{hint}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
