"use client";

import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/lib/data";

const Education: React.FC = () => (
  <section id="education" className="rule-top grid-texture relative overflow-hidden bg-primary py-24 sm:py-32">
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Education"
        lede="Where the fundamentals came from — an Electronics & Computer Science degree, and the years of maths and science that led into it."
        meta={[{ value: education.length, label: "Milestones" }]}
      />

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
