"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Maximize2, Sparkles } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { getAccent, getBadges, VARIANT_SPAN } from "@/lib/utils";
import type { CardVariant, Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: CardVariant;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, variant }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const badges = getBadges(project);
  const accent = getAccent(project);
  const thumbnail = Array.isArray(project.images) ? project.images[0] : project.image;
  const hasLive = Boolean(project.live && project.live !== "#");

  const isBig = variant === "big";
  const isWide = variant === "wide";

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const thumbHeight = isWide
    ? "h-36 w-full sm:h-full sm:w-2/5 sm:shrink-0"
    : isBig
      ? "h-44 w-full sm:h-1/2"
      : "h-36 w-full sm:h-[42%]";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: Math.min(index, 7) * 0.06, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-60px" }}
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setModalOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        className={`group card-sheen relative flex min-h-[16rem] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 shadow-lg shadow-black/30 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:h-full ${accent.ring} ${accent.glow} ${VARIANT_SPAN[variant]} ${isWide ? "sm:flex-row" : ""}`}
      >
        {/* Thumbnail */}
        <div className={`relative overflow-hidden ${thumbHeight}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
              isWide ? "from-primary/80 to-transparent" : "from-primary via-primary/40 to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.softGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />
          <span
            className={`absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-xl border ${accent.border} ${accent.tint} text-base backdrop-blur-md`}
            aria-hidden
          >
            {accent.emoji}
          </span>
          {isBig && (
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
              <Sparkles size={12} className={accent.text} /> Featured
            </span>
          )}
        </div>

        {/* Body */}
        <div className={`flex min-h-0 flex-1 flex-col gap-2 ${isBig ? "p-5" : "p-3.5"}`}>
          <h3
            className={`font-bold leading-tight text-text transition-colors duration-300 ${accent.hoverText} ${
              isBig ? "text-xl sm:text-2xl" : "line-clamp-2 text-[15px]"
            }`}
          >
            {project.title}
          </h3>

          {(isBig || isWide) && (
            <p className={`text-sm leading-relaxed text-gray-400 ${isBig ? "line-clamp-3" : "line-clamp-2"}`}>
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {isBig
              ? project.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${accent.border} ${accent.tint} ${accent.text}`}
                  >
                    {skill}
                  </span>
                ))
              : badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-1.5 pt-2">
            <span
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border ${accent.border} ${accent.tint} px-2 py-1.5 text-[11px] font-semibold ${accent.text} transition-colors group-hover:bg-white/10`}
            >
              <Maximize2 size={12} /> Details
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                aria-label={`${project.title} source code on GitHub`}
                className="flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-gray-300 transition-colors hover:border-white/40 hover:text-white"
              >
                <Github size={13} />
              </a>
            )}
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                aria-label={`Open ${project.title} live site`}
                className={`flex items-center justify-center rounded-lg bg-gradient-to-r ${accent.gradient} px-2.5 py-1.5 text-primary transition-transform hover:scale-105`}
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
