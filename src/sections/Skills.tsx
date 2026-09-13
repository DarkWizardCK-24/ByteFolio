"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { focusAreas, skillCategories } from "@/lib/data";

const Skills: React.FC = () => {
  const total = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="relative overflow-hidden bg-secondary py-28 sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-5"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
              Skills &amp; tooling ⚡
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              The languages, frameworks and platforms I build with day to day — plus what I&apos;m
              actively adding to the list.
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
            {total} technologies
          </span>
        </motion.div>

        {/* What I'm currently sharpening */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <h3 className="text-lg font-bold text-text">What I&apos;m sharpening right now</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {focusAreas.map(({ name, status, detail, icon: Icon, accent, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-secondary/50 p-4 transition-colors duration-300 hover:border-white/25"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} text-primary`}
                  >
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-text">{name}</p>
                    <p className={`text-[11px] font-semibold uppercase tracking-wide ${text}`}>{status}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-gray-400">{detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="mb-6 flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5 text-text">
                  <category.icon size={22} />
                </span>
                <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-2xl font-bold text-text">{category.title}</h3>
                  <span className="text-sm text-gray-500">{category.skills.length}</span>
                  <span className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent sm:block" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
