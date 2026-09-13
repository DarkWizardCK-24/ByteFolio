"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import { focusAreas, skillCategories } from "@/lib/data";

const Skills: React.FC = () => {
  const total = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="rule-top grid-texture relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & tooling"
          lede="The languages, frameworks and platforms I build with day to day — plus what I'm actively adding to the list."
          meta={[
            { value: total, label: "Technologies" },
            { value: skillCategories.length, label: "Categories" },
          ]}
        />

        {/* What's being learned right now leads, because it is the part of this
            section that changes — and the part worth reading. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="edge-gradient relative mb-16 overflow-hidden rounded-panel border border-line bg-raised shadow-edge"
        >
          <div className="flex items-center gap-2.5 border-b border-line bg-primary/40 px-6 py-4">
            <span className="h-1.5 w-1.5 rounded-full bg-learn" aria-hidden />
            <h3 className="text-sm font-semibold text-text">Sharpening right now</h3>
          </div>

          <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
            {focusAreas.map(({ name, status, detail, icon: Icon }) => {
              const tone = status === "Learning" ? "text-learn" : "text-accent";
              return (
                <div key={name} className="bg-raised p-6">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={tone} aria-hidden />
                    <p className="text-sm font-semibold text-text">{name}</p>
                    <span className={`ml-auto text-[11px] font-semibold ${tone}`}>{status}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{detail}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-5 flex items-center gap-3">
                <category.icon size={17} className="shrink-0 text-faint" aria-hidden />
                <h3 className="text-base font-semibold text-text">{category.title}</h3>
                <span className="tnum text-xs text-faint">{category.skills.length}</span>
                <span className="ml-2 h-px flex-1 bg-line" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
