"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/lib/data";

const Education: React.FC = () => (
  <section id="education" className="py-32 relative bg-secondary">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
          <BookOpen className="text-accent" size={40} />
          Education
        </h2>
        <p className="text-gray-400 text-lg">My academic background</p>
      </motion.div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <TimelineItem key={index} item={edu} index={index} length={education.length} />
        ))}
      </div>
    </div>
  </section>
);

export default Education;
