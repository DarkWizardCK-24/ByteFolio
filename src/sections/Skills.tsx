"use client";

import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/lib/data";

const Skills: React.FC = () => (
  <section id="skills" className="py-32 relative bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
          <Zap className="text-accent" size={40} />
          Skills
        </h2>
        <p className="text-gray-400 text-lg">Technologies I specialize in</p>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <category.icon className="text-accent" size={32} />
              <h3 className="text-3xl font-bold text-text">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard key={index} {...skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
