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
    ? "h-56 w-full sm:h-full sm:w-[46%] sm:shrink-0"
    : isBig
      ? "h-60 w-full sm:h-[62%]"
      : "h-52 w-full sm:h-[50%]";

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
        className={`surface surface-hover spotlight group relative flex min-h-[22rem] cursor-pointer flex-col overflow-hidden sm:h-full ${
          isBig ? "edge-gradient" : ""
        } ${VARIANT_SPAN[variant]} ${isWide ? "sm:flex-row" : ""}`}
      >
        <div className={`relative shrink-0 overflow-hidden bg-primary ${thumbHeight}`}>
          {/* Blurred backdrop fills the frame; the real screenshot sits on top, fully visible */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-2xl"
          />
          {/* Padding keeps the screenshot clear of the chips so nothing is hidden */}
          <div className={`absolute inset-0 flex items-center justify-center ${isSmall ? "px-3 pb-2.5 pt-10" : "px-4 pb-3 pt-12"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={project.title}
              loading="lazy"
              className="max-h-full max-w-full rounded-md object-contain shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
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
                {project.private ? "Private" : "Source"}
              </span>
            )}
          </div>

          {images.length > 1 && !isSmall && (
            <span className="chip chip-overlay pointer-events-none absolute bottom-2 right-2">
              <Images size={10} className="shrink-0" aria-hidden />
              {images.length} screens
            </span>
          )}
        </div>

        <div className={`flex min-h-0 flex-1 flex-col ${isSmall ? "p-3.5" : "p-5"}`}>
          <h3
            className={`font-semibold leading-snug text-text transition-colors duration-300 ${accent.hoverText} ${
              isBig ? "text-xl sm:text-2xl" : isWide ? "text-lg" : "line-clamp-2 text-[15px]"
            }`}
          >
            {project.title}
          </h3>

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

          {/* Pinned to the bottom so footers line up */}
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
