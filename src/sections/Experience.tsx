"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import TimelineItem from "@/components/TimelineItem";
import { experiences } from "@/lib/data";
import { totalExperienceMonths } from "@/lib/utils";

const Experience: React.FC = () => {
  const months = totalExperienceMonths(experiences.map((e) => e.period));
  const years = (months / 12).toFixed(1);

  return (
    <section id="experience" className="relative overflow-hidden bg-primary py-28 sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-5"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
              Experience 💼
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              {years} years of building products in industry and student tech — from front-end
              internships to shipping medical apps on Android and iOS.
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
            {experiences.length} roles
          </span>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.title}
              item={exp}
              index={index}
              length={experiences.length}
              icon={Briefcase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
