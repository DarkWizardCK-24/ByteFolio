"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/lib/data";

const Education: React.FC = () => (
  <section id="education" className="relative overflow-hidden bg-secondary py-28 sm:py-32">
    <div
      className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
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
            Education 🎓
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
            Where the fundamentals came from — an Electronics &amp; Computer Science degree, and the
            years of maths and science that led into it.
          </p>
        </div>
        <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
          {education.length} milestones
        </span>
      </motion.div>

      <div>
        {education.map((edu, index) => (
          <TimelineItem
            key={`${edu.title}-${edu.period}`}
            item={edu}
            index={index}
            length={education.length}
            icon={GraduationCap}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Education;
