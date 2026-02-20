import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

// Returns ALL relevant badges for a project (multiple allowed)
const getBadges = (project) => {
  const skills = project.skills?.map((s) => s.toLowerCase()) ?? [];
  const badges = [];

  if (skills.some((s) => s.includes("next.js") || s === "nextjs"))
    badges.push({ label: "Next.js", color: "bg-orange-500/20 text-orange-400 border-orange-500/40" });
  if (skills.some((s) => s.includes("django")))
    badges.push({ label: "Django", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40" });
  if (skills.some((s) => s.includes("python") || s.includes("fastapi")))
    badges.push({ label: "Python", color: "bg-pink-500/20 text-pink-400 border-pink-500/40" });
  if (skills.some((s) => s.includes("flutter") || s.includes("dart")))
    badges.push({ label: "Flutter", color: "bg-green-500/20 text-green-400 border-green-500/40" });
  if (skills.some((s) => s.includes("firebase")))
    badges.push({ label: "Firebase", color: "bg-red-500/20 text-red-400 border-red-500/40" });
  if (skills.some((s) => s.includes("supabase")))
    badges.push({ label: "Supabase", color: "bg-teal-400/20 text-teal-300 border-teal-400/40" });
  if (
    badges.length === 0 &&
    skills.some((s) =>
      ["react.js", "react", "javascript", "html", "css", "tailwind css", "vercel", "node.js"].includes(s)
    )
  )
    badges.push({ label: "Web", color: "bg-amber-500/20 text-amber-400 border-amber-500/40" });

  return badges.length > 0 ? badges : [{ label: "Project", color: "bg-gray-500/20 text-gray-400 border-gray-500/40" }];
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = Array.isArray(project.images) ? project.images : [project.image];
  const badges = getBadges(project);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        {/* Themed scrollbar styles scoped to this modal */}
        <style>{`
          .modal-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .modal-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .modal-scroll::-webkit-scrollbar-thumb {
            background: rgba(139, 92, 246, 0.28);
            border-radius: 99px;
          }
          .modal-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 92, 246, 0.52);
          }
          .modal-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(139, 92, 246, 0.28) transparent;
          }
        `}</style>

        {/* Modal Panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] glass rounded-3xl border border-accent/30 shadow-2xl shadow-accent/20 flex flex-col"
        >
          {/* Close Button — sits outside scroll so it's always reachable */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-secondary/70 border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/60 transition-all duration-200"
          >
            <X size={18} />
          </button>

          {/* Scrollable inner content */}
          <div className="modal-scroll overflow-y-auto rounded-3xl">

            {/* Image Carousel */}
            <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl bg-primary/60 flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-accent/30 text-gray-300 hover:text-accent transition-all duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-accent/30 text-gray-300 hover:text-accent transition-all duration-200"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentImage ? "bg-accent w-4" : "bg-gray-500 w-2 hover:bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Title + Badges */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-text pr-10">
                  {project.title}
                </h2>
                {/* All matching badges shown in a wrapping row */}
                <div className="flex flex-wrap gap-1.5">
                  {badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 glass text-accent rounded-full text-xs font-semibold border border-accent/30 hover:bg-accent/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-secondary/60 glass text-gray-300 rounded-xl hover:text-accent hover:bg-secondary/80 transition-all duration-300 border border-accent/30 flex-1 justify-center text-sm font-semibold"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent/80 to-blue-600/80 text-text rounded-xl hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 flex-1 justify-center text-sm font-semibold"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
