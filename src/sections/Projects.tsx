"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { webProjects, flutterProjects } from "@/lib/data";
import { getBentoLayout } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ShowcaseProps {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  projects: Project[];
}

const Showcase: React.FC<ShowcaseProps> = ({ id, title, emoji, blurb, icon: Icon, accent, projects }) => {
  const { variants, gap } = getBentoLayout(projects.length);

  return (
    <div id={id}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-7 flex flex-wrap items-end justify-between gap-4"
      >
        <div className="flex items-center gap-3.5">
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-primary shadow-lg`}
          >
            <Icon size={24} />
          </span>
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-text sm:text-3xl">
              {title}
              <span aria-hidden>{emoji}</span>
            </h3>
            <p className="text-sm text-gray-400">{blurb}</p>
          </div>
        </div>
        <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
          {projects.length} projects
        </span>
      </motion.div>

      <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:auto-rows-[16rem] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} variant={variants[index]} />
        ))}

        {gap > 0 && (
          <motion.a
            href="https://github.com/DarkWizardCK-24?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className={`group flex min-h-[10rem] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center transition-colors hover:border-white/45 hover:bg-white/[0.06] sm:h-full ${
              gap >= 2 ? "sm:col-span-2" : ""
            }`}
          >
            <ArrowUpRight
              size={26}
              className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
            />
            <span className="text-sm font-semibold text-gray-300 group-hover:text-text">More on GitHub</span>
            <span className="text-xs text-gray-500">Every repo, in one place</span>
          </motion.a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="relative overflow-hidden bg-secondary py-28 sm:py-32">
    {/* Ambient colour */}
    <div
      className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      aria-hidden
    />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 max-w-2xl"
      >
        <h2 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
          Things I&apos;ve shipped
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
          {webProjects.length + flutterProjects.length} projects across the web and mobile — each one colour-coded
          by the stack it runs on. Open any card for screenshots, the full story, and links.
        </p>
      </motion.div>

      <div className="space-y-20">
        <Showcase
          id="web-projects"
          title="Web"
          emoji="🌐"
          blurb="Next.js, React and full-stack builds"
          icon={Globe}
          accent="from-indigo-400 to-sky-400"
          projects={webProjects}
        />
        <Showcase
          id="flutter-projects"
          title="Flutter"
          emoji="🦋"
          blurb="Cross-platform apps for Android and iOS"
          icon={Smartphone}
          accent="from-sky-400 to-cyan-300"
          projects={flutterProjects}
        />
      </div>
    </div>
  </section>
);

export default Projects;
