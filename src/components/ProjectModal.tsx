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
    { label: "Status", value: hasLive ? "Live" : project.private ? "Private repo" : "Source only" },
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
          className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-panel border border-line bg-secondary shadow-lift lg:h-[86vh] lg:flex-row"
        >
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 z-30 rounded-md border border-line bg-primary/70 p-2 text-muted backdrop-blur-md transition-colors hover:text-text"
          >
            <X size={17} />
          </button>

          <div className="relative flex shrink-0 flex-col bg-primary lg:h-full lg:w-[58%]">
            <div className="relative h-[46vh] overflow-hidden sm:h-[52vh] lg:h-auto lg:min-h-0 lg:flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {/* Blurred backdrop fills the frame so the full screenshot can be shown uncropped */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[current]}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
                  />
                  {/* Padded box keeps the whole screenshot visible, clear of chips, arrows and dots */}
                  <a
                    href={images[current]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open full-size screenshot"
                    className={`absolute inset-0 flex items-center justify-center pt-14 ${
                      images.length > 1 ? "px-14 pb-10" : "px-4 pb-4"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[current]}
                      alt={`${project.title} screenshot ${current + 1} of ${images.length}`}
                      className="max-h-full max-w-full cursor-zoom-in rounded-lg object-contain shadow-2xl shadow-black/50 ring-1 ring-white/10"
                    />
                  </a>
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-4 top-4 flex flex-wrap items-center gap-2">
                <span
                  className={`chip chip-lg font-semibold backdrop-blur-md ${accent.border} ${accent.tint} ${accent.text}`}
                >
                  <span className={`chip-dot ${accent.dot}`} aria-hidden />
                  {accent.label}
                </span>
                {hasLive ? (
                  <span className="chip chip-lg chip-live">
                    <span className="chip-dot chip-pulse bg-live" aria-hidden />
                    Live
                  </span>
                ) : (
                  <span className="chip chip-lg chip-overlay">
                    <Github size={12} className="shrink-0" aria-hidden />
                    {project.private ? "Private repo" : "Source only"}
                  </span>
                )}
              </div>

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

            {images.length > 1 && (
              <div className="modal-scroll flex shrink-0 gap-2 overflow-x-auto border-t border-line bg-secondary/60 p-3">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setCurrent(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === current}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border bg-primary transition-all duration-200 ${
                      i === current ? "border-accent ring-1 ring-accent/60" : "border-line opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

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

            {project.tagline && (
              <p className={`mt-3 text-sm font-semibold ${accent.text}`}>{project.tagline}</p>
            )}

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-7">
                <h3 className="text-sm font-semibold text-text">Engineering highlights</h3>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-7">
              <div className="flex items-baseline gap-2">
                <h3 className="text-sm font-semibold text-text">Built with</h3>
                <span className="tnum text-[11px] text-faint">{project.skills.length}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="chip chip-lg chip-tech">
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
