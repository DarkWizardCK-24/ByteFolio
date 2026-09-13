"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getAccent } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const images = (Array.isArray(project.images) ? project.images : [project.image ?? ""]).filter(Boolean);
  const accent = getAccent(project);
  const hasLive = Boolean(project.live && project.live !== "#");

  const prev = useCallback(() => setCurrent((p) => (p - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((p) => (p + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const facts = [
    { label: "Stack", value: accent.label },
    { label: "Screens", value: String(images.length) },
    { label: "Status", value: hasLive ? "Live" : "Source only" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/85 p-4 backdrop-blur-md"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-panel border border-line bg-secondary shadow-lift lg:flex-row"
        >
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 z-30 rounded-md border border-line bg-primary/70 p-2 text-muted backdrop-blur-md transition-colors hover:text-text"
          >
            <X size={17} />
          </button>

          {/* Gallery */}
          <div className="relative shrink-0 bg-primary lg:w-[52%]">
            <div className="relative h-56 overflow-hidden sm:h-72 lg:h-full lg:min-h-[26rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`${project.title} screenshot ${current + 1} of ${images.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-secondary/60" />

              <span
                className={`absolute left-4 top-4 rounded-md border ${accent.border} ${accent.tint} px-2.5 py-1 text-[11px] font-semibold ${accent.text} backdrop-blur-sm`}
              >
                {accent.label}
              </span>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-line bg-primary/70 p-2 text-text backdrop-blur-md transition-colors hover:border-accent/50"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-line bg-primary/70 p-2 text-text backdrop-blur-md transition-colors hover:border-accent/50"
                  >
                    <ChevronRight size={17} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === current ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="modal-scroll flex-1 overflow-y-auto p-6 sm:p-8">
            <h2 className="pr-12 text-2xl font-semibold leading-tight text-text sm:text-3xl">
              {project.title}
            </h2>

            <dl className="mt-5 flex gap-8 border-y border-line py-4">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-[11px] text-faint">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-text">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">{project.description}</p>

            <div className="mt-7">
              <h3 className="text-sm font-semibold text-text">Built with</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-raised/60 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm flex-1"
                >
                  <ExternalLink size={16} /> Open live site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm flex-1"
                >
                  <Github size={16} /> View source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
