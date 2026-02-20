import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal.jsx";

const ProjectCard = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        viewport={{ once: true }}
        className="group relative glass rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 flex flex-col"
      >
        {/* Thumbnail */}
        <div className="h-36 overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10" />
          <img
            src={Array.isArray(project.images) ? project.images[0] : project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          {/* Title */}
          <h3 className="text-base font-bold text-text group-hover:text-accent transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

          {/* Buttons */}
          <div className="flex gap-2 mt-auto">
            {/* View Details */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-accent/10 glass text-accent rounded-lg hover:bg-accent/20 transition-all duration-300 border border-accent/30 flex-1 justify-center text-xs font-semibold"
            >
              <Eye size={14} />
              Details
            </button>

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-2 bg-secondary/50 glass text-gray-300 rounded-lg hover:text-accent hover:bg-secondary/70 transition-all duration-300 border border-accent/30 flex-1 justify-center text-xs font-semibold"
              >
                <Github size={14} />
                Code
              </a>
            )}

            {/* Live */}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-accent/80 to-blue-600/80 text-text rounded-lg hover:shadow-md hover:shadow-accent/40 transition-all duration-300 flex-1 justify-center text-xs font-semibold"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;
