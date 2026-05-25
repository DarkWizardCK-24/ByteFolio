"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { getBadges } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const badges = getBadges(project);
  const thumbnail = Array.isArray(project.images) ? project.images[0] : project.image;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        viewport={{ once: true }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 flex flex-col"
      >
        {/* Thumbnail */}
        <div className="h-32 sm:h-36 overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10" />
          <img
            src={thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-sm sm:text-base font-bold text-text group-hover:text-accent transition-colors duration-300 leading-tight line-clamp-2">
            {project.title}
          </h3>

          {/* Badges */}
          <div
            className="flex gap-1 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {badges.map((badge, i) => (
              <span
                key={i}
                className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold border ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Mobile: scrollable actions */}
          <div className="mt-auto pt-1 sm:hidden">
            <div
              className="flex gap-1.5 overflow-x-auto pb-0.5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 text-accent rounded-lg border border-accent/30 text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
              >
                <Eye size={11} /> Details
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-secondary/50 text-gray-300 rounded-lg border border-accent/30 text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
                >
                  <Github size={11} /> Code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-accent/80 to-blue-600/80 text-white rounded-lg text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
                >
                  <ExternalLink size={11} /> Live
                </a>
              )}
            </div>
          </div>

          {/* Desktop: slide-up hover actions */}
          <div className="hidden sm:block mt-auto h-9 relative overflow-hidden">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  key="btns"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex gap-1.5"
                >
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1 px-2 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/25 transition-colors border border-accent/30 flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                  >
                    <Eye size={12} /> Details
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1.5 bg-secondary/50 text-gray-300 rounded-lg hover:text-accent hover:bg-secondary/70 transition-colors border border-accent/30 flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                    >
                      <Github size={12} /> Code
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1.5 bg-gradient-to-r from-accent/80 to-blue-600/80 text-white rounded-lg hover:shadow-md hover:shadow-accent/40 transition-all flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
