"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Layers, Radio, ImageIcon } from "lucide-react";
import { getAccent, getBadges } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const images = (Array.isArray(project.images) ? project.images : [project.image ?? ""]).filter(Boolean);
  const badges = getBadges(project);
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

  const stats = [
    { icon: Layers, label: `${project.skills.length} technologies` },
    { icon: ImageIcon, label: `${images.length} ${images.length === 1 ? "screenshot" : "screenshots"}` },
    { icon: Radio, label: hasLive ? "Live in production" : "Source only" },
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-md"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 28 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border ${accent.border} bg-secondary/70 shadow-2xl shadow-black/60 backdrop-blur-2xl lg:flex-row`}
        >
          {/* Accent wash */}
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${accent.gradient} opacity-20 blur-3xl`}
            aria-hidden
          />

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 z-30 rounded-full border border-white/20 bg-black/50 p-2 text-gray-300 backdrop-blur-md transition-colors hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X size={18} />
          </button>

          {/* Gallery */}
          <div className="relative shrink-0 bg-primary/60 lg:w-[52%]">
            <div className="relative h-56 overflow-hidden sm:h-72 lg:h-full lg:min-h-[26rem]">
              <AnimatePresence mode="wait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`${project.title} screenshot ${current + 1} of ${images.length}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-secondary/70" />

              <span
                className={`absolute left-4 top-4 flex items-center gap-2 rounded-full border ${accent.border} ${accent.tint} px-3 py-1 text-xs font-semibold ${accent.text} backdrop-blur-md`}
              >
                <span aria-hidden>{accent.emoji}</span>
                {badges[0]?.label}
              </span>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2 text-gray-200 backdrop-blur-md transition-colors hover:text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2 text-gray-200 backdrop-blur-md transition-colors hover:text-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === current ? `w-6 ${accent.dot}` : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="modal-scroll flex-1 overflow-y-auto p-6 sm:p-7">
            <h2 className="pr-12 text-2xl font-extrabold leading-tight text-text sm:text-3xl">{project.title}</h2>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {stats.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Icon size={13} className={accent.text} />
                  {label}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-[15px]">{project.description}</p>

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-text">Built with</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.04, duration: 0.25 }}
                    className={`rounded-full border ${accent.border} ${accent.tint} px-3 py-1 text-xs font-semibold ${accent.text}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Github size={17} /> View source
                </a>
              )}
              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${accent.gradient} px-4 py-2.5 text-sm font-bold text-primary transition-transform hover:scale-[1.02]`}
                >
                  <ExternalLink size={17} /> Open live site
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
