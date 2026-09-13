"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { getAccent, VARIANT_SPAN } from "@/lib/utils";
import { trackSpotlight } from "@/lib/spotlight";
import type { CardVariant, Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: CardVariant;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, variant }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const accent = getAccent(project);
  const thumbnail = Array.isArray(project.images) ? project.images[0] : project.image;
  const hasLive = Boolean(project.live && project.live !== "#");

  const isBig = variant === "big";
  const isWide = variant === "wide";

  const thumbHeight = isWide
    ? "h-36 w-full sm:h-full sm:w-2/5 sm:shrink-0"
    : isBig
      ? "h-44 w-full sm:h-1/2"
      : "h-36 w-full sm:h-[44%]";

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-60px" }}
        onClick={() => setModalOpen(true)}
        onMouseMove={trackSpotlight}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setModalOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        className={`surface surface-hover spotlight group relative flex min-h-[16rem] cursor-pointer flex-col overflow-hidden sm:h-full ${
          isBig ? "edge-gradient" : ""
        } ${VARIANT_SPAN[variant]} ${
          isWide ? "sm:flex-row" : ""
        }`}
      >
        {/* Thumbnail */}
        <div className={`relative overflow-hidden ${thumbHeight}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
              isWide ? "from-raised/90 to-transparent" : "from-raised via-raised/40 to-transparent"
            }`}
          />
          {/* The stack, named. A colour alone cannot tell anyone it is Flutter. */}
          <span
            className={`absolute left-3 top-3 rounded-md border ${accent.border} ${accent.tint} px-2 py-0.5 text-[11px] font-semibold ${accent.text} backdrop-blur-sm`}
          >
            {accent.label}
          </span>
          {isBig && (
            <span className="absolute right-3 top-3 rounded-md border border-line bg-primary/70 px-2 py-0.5 text-[11px] font-semibold text-muted backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        {/* Body */}
        <div className={`flex min-h-0 flex-1 flex-col gap-2 ${isBig ? "p-5" : "p-4"}`}>
          <h3
            className={`font-semibold leading-tight text-text transition-colors duration-300 ${accent.hoverText} ${
              isBig ? "text-xl sm:text-2xl" : "line-clamp-2 text-[15px]"
            }`}
          >
            {project.title}
          </h3>

          {(isBig || isWide) && (
            <p className={`text-sm leading-relaxed text-muted ${isBig ? "line-clamp-3" : "line-clamp-2"}`}>
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.skills.slice(0, isBig ? 5 : 2).map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-line bg-primary/50 px-2 py-0.5 text-[11px] font-medium text-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-3">
            <span className={`text-xs font-semibold ${accent.text}`}>View details</span>
            <span className="ml-auto flex gap-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stop}
                  aria-label={`${project.title} source code on GitHub`}
                  className="grid h-7 w-7 place-items-center rounded-md text-faint transition-colors hover:bg-primary/60 hover:text-text"
                >
                  <Github size={14} />
                </a>
              )}
              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stop}
                  aria-label={`Open ${project.title} live site`}
                  className="grid h-7 w-7 place-items-center rounded-md text-faint transition-colors hover:bg-primary/60 hover:text-text"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </span>
          </div>
        </div>
      </motion.article>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
