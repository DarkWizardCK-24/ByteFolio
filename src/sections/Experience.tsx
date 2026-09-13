"use client";

import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import { experiences } from "@/lib/data";
import { totalExperienceMonths } from "@/lib/utils";

const Experience: React.FC = () => {
  const years = (totalExperienceMonths(experiences.map((e) => e.period)) / 12).toFixed(1);

  return (
    <section id="experience" className="rule-top grid-texture relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          lede="From front-end internships to shipping medical apps on Android and iOS — building products in industry and in student tech."
          meta={[
            { value: experiences.length, label: "Roles" },
            { value: `${years}y`, label: "Total" },
          ]}
        />

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
