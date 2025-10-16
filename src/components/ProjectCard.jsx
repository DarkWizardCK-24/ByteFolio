import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {project.description}
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
        <div className="flex gap-3 pt-3">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-2 px-3 py-3 bg-secondary/50 glass text-gray-300 rounded-lg hover:text-accent hover:bg-secondary/70 transition-all duration-300 border border-accent/30 flex-1 justify-center"
            >
              <Github size={20} />
              <span className="text-md font-semibold">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="flex items-center gap-2 px-3 py-3 bg-gradient-to-r from-accent/80 to-blue-600/80 text-text rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex-1 justify-center"
            >
              <ExternalLink size={20} />
              <span className="text-md font-semibold">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
