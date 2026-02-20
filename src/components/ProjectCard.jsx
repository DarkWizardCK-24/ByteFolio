import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal.jsx";

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

const ProjectCard = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const badges = getBadges(project);
  const thumbnail = Array.isArray(project.images) ? project.images[0] : project.image;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        viewport={{ once: true }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 flex flex-col"
      >
        {/* Thumbnail */}
        <div className="h-32 sm:h-36 overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10" />
          <img
            src={thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-text group-hover:text-accent transition-colors duration-300 leading-tight line-clamp-2">
            {project.title}
          </h3>

          {/* Badges — horizontally scrollable row, no wrap */}
          <div
            className="flex gap-1 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {badges.map((badge, i) => (
              <span
                key={i}
                className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold border ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* ── MOBILE / TABLET: Horizontally scrollable action buttons ── */}
          <div className="mt-auto pt-1 sm:hidden">
            <div
              className="flex gap-1.5 overflow-x-auto pb-0.5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 text-accent rounded-lg border border-accent/30 text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
              >
                <Eye size={11} />
                Details
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-secondary/50 text-gray-300 rounded-lg border border-accent/30 text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
                >
                  <Github size={11} />
                  Code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-accent/80 to-blue-600/80 text-white rounded-lg text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
                >
                  <ExternalLink size={11} />
                  Live
                </a>
              )}
            </div>
          </div>

          {/* ── DESKTOP: Slide-up animated buttons on hover ── */}
          <div className="hidden sm:block mt-auto h-9 relative overflow-hidden">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  key="btns"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex gap-1.5"
                >
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1 px-2 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/25 transition-colors duration-200 border border-accent/30 flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                  >
                    <Eye size={12} />
                    Details
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1.5 bg-secondary/50 text-gray-300 rounded-lg hover:text-accent hover:bg-secondary/70 transition-colors duration-200 border border-accent/30 flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1.5 bg-gradient-to-r from-accent/80 to-blue-600/80 text-white rounded-lg hover:shadow-md hover:shadow-accent/40 transition-all duration-200 flex-1 justify-center text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                    >
                      <ExternalLink size={12} />
                      Live
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
