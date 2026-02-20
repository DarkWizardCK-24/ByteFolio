import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Support single image or array of images
  const images = Array.isArray(project.images)
    ? project.images
    : [project.image];

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const prevImage = () =>
    setCurrentImage((p) => (p - 1 + images.length) % images.length);
  const nextImage = () =>
    setCurrentImage((p) => (p + 1) % images.length);

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
        {/* Modal Panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl border border-accent/30 shadow-2xl shadow-accent/20"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-secondary/70 border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/60 transition-all duration-200"
          >
            <X size={18} />
          </button>

          {/* Image Carousel */}
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl bg-primary/60">
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

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />

            {/* Carousel Controls — only shown if multiple images */}
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

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentImage
                          ? "bg-accent w-4"
                          : "bg-gray-500 w-2 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              {project.title}
            </h2>

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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
