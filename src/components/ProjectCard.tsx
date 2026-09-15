"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Images, Star } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { getAccent, techChips, VARIANT_SPAN } from "@/lib/utils";
import { trackSpotlight } from "@/lib/spotlight";
import type { CardVariant, Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: CardVariant;
}

/** How many technology chips each tile can show before the row starts wrapping. */
const CHIP_LIMIT: Record<CardVariant, number> = { big: 5, wide: 3, small: 2 };

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, variant }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const accent = getAccent(project);
  const images = Array.isArray(project.images)
    ? project.images
    : project.image
      ? [project.image]
      : [];
  const thumbnail = images[0];
  const hasLive = Boolean(project.live && project.live !== "#");

  const isBig = variant === "big";
  const isWide = variant === "wide";
  const isSmall = variant === "small";

  const { shown, extra } = techChips(project, accent.label, CHIP_LIMIT[variant]);

  const thumbHeight = isWide
    ? "h-40 w-full sm:h-full sm:w-[42%] sm:shrink-0"
    : isBig
      ? "h-44 w-full sm:h-[48%]"
      : "h-32 w-full sm:h-[38%]";

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const linkClass =
    "grid h-7 w-7 place-items-center rounded-md border border-line bg-primary/50 text-faint transition-colors duration-200 hover:border-accent/45 hover:bg-primary hover:text-text";

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
        className={`surface surface-hover spotlight group relative flex min-h-[17rem] cursor-pointer flex-col overflow-hidden sm:h-full ${
          isBig ? "edge-gradient" : ""
        } ${VARIANT_SPAN[variant]} ${isWide ? "sm:flex-row" : ""}`}
      >
        {/* Thumbnail */}
        <div className={`relative shrink-0 overflow-hidden bg-primary ${thumbHeight}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
          />
          {/* The shot fades into the card rather than stopping at a hard edge. */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
              isWide
                ? "from-raised/90 via-raised/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-raised/80"
                : "from-raised via-raised/35 to-transparent"
            }`}
          />
          {/* A second wash, top down, so the chip rail always has ground to sit on. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/65 to-transparent" />

          {/* Chip rail: the left says what a project is, the right says where it is. */}
          <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {/* The stack, named. A colour alone cannot tell anyone it is Flutter. */}
              <span
                className={`chip font-semibold backdrop-blur-md ${accent.border} ${accent.tint} ${accent.text}`}
              >
                <span className={`chip-dot ${accent.dot}`} aria-hidden />
                {accent.label}
              </span>
              {isBig && (
                <span className="chip chip-overlay">
                  <Star size={10} className="shrink-0 fill-current" aria-hidden />
                  Featured
                </span>
              )}
            </div>

            {hasLive ? (
              <span className="chip chip-live">
                <span className="chip-dot chip-pulse bg-live" aria-hidden />
                Live
              </span>
            ) : (
              <span className="chip chip-overlay">
                <Github size={10} className="shrink-0" aria-hidden />
                Source
              </span>
            )}
          </div>

          {/* Screens on offer, so the card says what opening it is worth. */}
          {images.length > 1 && !isSmall && (
            <span className="chip chip-overlay pointer-events-none absolute bottom-3 right-3">
              <Images size={10} className="shrink-0" aria-hidden />
              {images.length} screens
            </span>
          )}
        </div>

        {/* Body */}
        <div className={`flex min-h-0 flex-1 flex-col ${isSmall ? "p-3.5" : "p-5"}`}>
          <h3
            className={`font-semibold leading-snug text-text transition-colors duration-300 ${accent.hoverText} ${
              isBig ? "text-xl sm:text-2xl" : isWide ? "text-lg" : "line-clamp-2 text-[15px]"
            }`}
          >
            {project.title}
          </h3>

          {/* Every tile gets the pitch. A card with no sentence on it is a tile. */}
          <p
            className={`mt-1.5 min-h-0 text-muted ${
              isBig
                ? "line-clamp-3 text-sm leading-relaxed"
                : isWide
                  ? "line-clamp-3 text-[13px] leading-relaxed"
                  : "line-clamp-2 text-xs leading-snug"
            }`}
          >
            {project.description}
          </p>

          {/* Pinned to the foot, so every card's chips and footer line up. */}
          <div className="mt-auto pt-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {shown.map((skill) => (
                <span key={skill} className="chip chip-tech">
                  {skill}
                </span>
              ))}
              {extra > 0 && (
                <span className="chip chip-more" title={project.skills.join(", ")}>
                  +{extra}
                </span>
              )}
            </div>

            <div className="mt-3 flex items-center gap-3 border-t border-line/60 pt-2.5">
              <span className={`flex items-center gap-1 text-xs font-semibold ${accent.text}`}>
                View details
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
              <span className="ml-auto flex gap-1.5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    aria-label={`${project.title} source code on GitHub`}
                    className={linkClass}
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
                    className={linkClass}
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </span>
            </div>
          </div>
        </div>
      </motion.article>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
