"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { webProjects, flutterProjects } from "@/lib/data";
import { getBentoLayout } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ShowcaseProps {
  id: string;
  title: string;
  blurb: string;
  projects: Project[];
}

const Showcase: React.FC<ShowcaseProps> = ({ id, title, blurb, projects }) => {
  const { variants, gap } = getBentoLayout(projects.length);

  return (
    <div id={id}>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-4">
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        <p className="text-sm text-muted">{blurb}</p>
        <span className="tnum ml-auto text-sm text-faint">{projects.length}</span>
      </div>

      <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:auto-rows-[17rem] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} variant={variants[index]} />
        ))}

        {gap > 0 && (
          <motion.a
            href="https://github.com/DarkWizardCK-24?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className={`group flex min-h-[12rem] flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line p-4 text-center transition-colors duration-300 hover:border-accent/50 hover:bg-raised/40 sm:h-full ${
              gap >= 2 ? "sm:col-span-2" : ""
            }`}
          >
            <ArrowUpRight
              size={22}
              className="text-faint transition-colors duration-300 group-hover:text-accent"
            />
            <span className="text-sm font-semibold text-muted transition-colors group-hover:text-text">
              More on GitHub
            </span>
            <span className="text-xs text-faint">Every repo, in one place</span>
          </motion.a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="rule-top grid-texture relative overflow-hidden bg-primary py-24 sm:py-32">
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Things I've shipped"
        lede="Projects across the web and mobile, each tagged with the stack it runs on. Open any card for screenshots, the full story, and links."
        meta={[
          { value: webProjects.length, label: "Web" },
          { value: flutterProjects.length, label: "Flutter" },
        ]}
      />

      <div className="space-y-16">
        <Showcase
          id="web-projects"
          title="Web"
          blurb="Next.js, React and full-stack builds"
          projects={webProjects}
        />
        <Showcase
          id="flutter-projects"
          title="Flutter"
          blurb="Cross-platform apps for Android and iOS"
          projects={flutterProjects}
        />
      </div>
    </div>
  </section>
);

export default Projects;
