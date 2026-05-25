"use client";

import { Code2, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { webProjects, flutterProjects } from "@/lib/data";

const Projects: React.FC = () => (
  <section id="projects" className="py-32 relative bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
          <Code2 className="text-accent" size={40} />
          Projects
        </h2>
        <p className="text-gray-400 text-lg">Explore my work</p>
      </motion.div>

      <div className="mb-20">
        <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center gap-3">
          <Globe size={28} />
          Web Projects
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center gap-3">
          <Smartphone size={28} />
          Flutter Projects
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {flutterProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
