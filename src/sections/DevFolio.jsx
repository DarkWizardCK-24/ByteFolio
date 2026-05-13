import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Crown,
  Activity,
  Share2,
  CheckSquare,
  Link2,
  TrendingUp,
  ShieldCheck,
  KeyRound,
  TreePine,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Rocket,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const ecosystemProjects = [
  {
    title: "Dev Pulse",
    tagline: "GitHub Analyzer & API Playground",
    description:
      "Polished dark-themed GitHub repository analyzer built on Next.js 16, React 19 & Tailwind v4. Inspect any public repo's stats, languages, and complete file tree, then prototype any HTTP request through a CORS-bypassing server-side proxy. GitHub auth via .env with fallback support.",
    icon: Activity,
    color: "violet",
    skills: ["Next.js 16", "React 19", "Tailwind v4", "FastAPI", "Python", "TypeScript"],
    github: "https://github.com/DarkWizardCK-24/DevPulse",
    live: "https://dev-pulse-black.vercel.app/",
    image: "projects/web/web9.png",
    featured: true,
  },
  {
    title: "Code Share",
    tagline: "Code Collaboration Platform",
    description:
      "Share snippets, side-by-side comparisons, real-time editing, and cloud storage with Firebase auth.",
    icon: Share2,
    color: "blue",
    skills: ["Next.js", "Firebase", "JavaScript"],
    github: "https://github.com/DarkWizardCK-24/Code-Share",
    live: "https://code-share-lovat.vercel.app/",
    image: "projects/web/web8.png",
  },
];

// ─── Color Tokens ─────────────────────────────────────────────────────────────

const C = {
  violet: {
    gradient: "from-violet-600 to-purple-700",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    glow: "hover:shadow-violet-500/30",
    icon: "bg-violet-500/20 text-violet-400",
    ring: "ring-violet-500/40",
    chip: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  blue: {
    gradient: "from-blue-600 to-cyan-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "hover:shadow-blue-500/30",
    icon: "bg-blue-500/20 text-blue-400",
    ring: "ring-blue-500/40",
    chip: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  amber: {
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "hover:shadow-amber-500/30",
    icon: "bg-amber-500/20 text-amber-400",
    ring: "ring-amber-500/40",
    chip: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "hover:shadow-emerald-500/30",
    icon: "bg-emerald-500/20 text-emerald-400",
    ring: "ring-emerald-500/40",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "hover:shadow-cyan-500/30",
    icon: "bg-cyan-500/20 text-cyan-400",
    ring: "ring-cyan-500/40",
    chip: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  red: {
    gradient: "from-red-500 to-rose-600",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    glow: "hover:shadow-red-500/30",
    icon: "bg-red-500/20 text-red-400",
    ring: "ring-red-500/40",
    chip: "bg-red-500/15 text-red-300 border-red-500/30",
  },
  orange: {
    gradient: "from-orange-500 to-red-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    glow: "hover:shadow-orange-500/30",
    icon: "bg-orange-500/20 text-orange-400",
    ring: "ring-orange-500/40",
    chip: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  teal: {
    gradient: "from-teal-500 to-cyan-600",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-400",
    glow: "hover:shadow-teal-500/30",
    icon: "bg-teal-500/20 text-teal-400",
    ring: "ring-teal-500/40",
    chip: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  },
  pink: {
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    glow: "hover:shadow-pink-500/30",
    icon: "bg-pink-500/20 text-pink-400",
    ring: "ring-pink-500/40",
    chip: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  },
};

// ─── Detail Modal ─────────────────────────────────────────────────────────────

const DetailModal = ({ project, onClose }) => {
  const c = C[project.color];
  const Icon = project.icon;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="df-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <style>{`
          .df-scroll::-webkit-scrollbar { width: 4px; }
          .df-scroll::-webkit-scrollbar-track { background: transparent; }
          .df-scroll::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 99px; }
        `}</style>
        <motion.div
          key="df-modal"
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl max-h-[88vh] glass rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Top gradient strip */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${c.gradient} flex-shrink-0`} />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>

          <div className="df-scroll overflow-y-auto">
            {/* Image */}
            <div className="h-48 sm:h-60 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${c.icon} ring-2 ${c.ring}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className={`text-xs font-medium ${c.text}`}>{project.tagline}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.text}`}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((s, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${c.chip}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2.5 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 text-gray-300 rounded-xl hover:text-white hover:bg-white/10 transition-all border border-white/10 flex-1 justify-center text-sm font-semibold"
                >
                  <Github size={16} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${c.gradient} text-white rounded-xl hover:shadow-lg transition-all flex-1 justify-center text-sm font-semibold`}
                  >
                    <ExternalLink size={16} /> Live Demo
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

// ─── Featured Card ────────────────────────────────────────────────────────────

const FeaturedCard = ({ project, index }) => {
  const [modal, setModal] = useState(false);
  const c = C[project.color];
  const Icon = project.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        viewport={{ once: true }}
        className={`group relative glass rounded-2xl border ${c.border} overflow-hidden col-span-2 flex flex-col sm:flex-row hover:shadow-2xl ${c.glow} transition-all duration-500`}
      >
        {/* Gradient top strip */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.gradient}`} />

        {/* Image */}
        <div className="sm:w-1/2 h-44 sm:h-auto overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a]/80 z-10 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent z-10 sm:hidden" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* FLAGSHIP badge over image */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-violet-400/50">
            <Rocket size={11} className="text-violet-400" />
            <span className="text-xs font-bold text-violet-300 tracking-widest uppercase">
              Flagship
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div className="flex items-start gap-3">
            <div className={`p-2.5 rounded-xl ${c.icon} ring-1 ${c.ring} flex-shrink-0 mt-0.5`}>
              <Icon size={20} />
            </div>
            <div>
              <h3 className={`text-xl font-bold text-white group-hover:${c.text} transition-colors`}>
                {project.title}
              </h3>
              <p className={`text-xs font-semibold ${c.text} mt-0.5`}>{project.tagline}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((s, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${c.chip}`}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => setModal(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl ${c.bg} ${c.text} border ${c.border} text-xs font-semibold hover:brightness-110 transition-all`}
            >
              <Layers size={13} /> Details
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 text-gray-300 border border-white/10 text-xs font-semibold hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={13} /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r ${c.gradient} text-white text-xs font-semibold hover:shadow-lg transition-all`}
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {modal && <DetailModal project={project} onClose={() => setModal(false)} />}
    </>
  );
};

// ─── Ecosystem Card ───────────────────────────────────────────────────────────

const EcoCard = ({ project, index }) => {
  const [modal, setModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const c = C[project.color];
  const Icon = project.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        viewport={{ once: true }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group relative glass rounded-2xl border ${c.border} overflow-hidden flex flex-col hover:shadow-xl ${c.glow} transition-all duration-400`}
      >
        {/* Top gradient line */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${c.gradient}`} />

        {/* Thumbnail */}
        <div className="h-28 overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-2.5 flex-1">
          {/* Icon + title */}
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${c.icon} ring-1 ${c.ring} flex-shrink-0`}>
              <Icon size={15} />
            </div>
            <div>
              <h3 className={`text-sm font-bold text-white group-hover:${c.text} transition-colors leading-tight`}>
                {project.title}
              </h3>
              <p className={`text-[10px] font-semibold ${c.text} leading-tight`}>
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${c.chip}`}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="flex gap-1.5 mt-auto sm:hidden">
            <button
              onClick={() => setModal(true)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg ${c.bg} ${c.text} border ${c.border} text-[10px] font-semibold flex-1 justify-center`}
            >
              <Layers size={10} /> Details
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/10 text-[10px] font-semibold"
            >
              <Github size={10} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r ${c.gradient} text-white text-[10px] font-semibold`}
              >
                <ExternalLink size={10} />
              </a>
            )}
          </div>

          {/* Desktop hover actions */}
          <div className="hidden sm:block mt-auto h-8 relative overflow-hidden">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  key="eco-btns"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0 flex gap-1.5"
                >
                  <button
                    onClick={() => setModal(true)}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg ${c.bg} ${c.text} border ${c.border} text-[10px] font-semibold flex-1 justify-center hover:brightness-110 transition-all`}
                  >
                    <Layers size={10} /> Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/10 text-[10px] font-semibold hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github size={10} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r ${c.gradient} text-white text-[10px] font-semibold hover:shadow-md transition-all`}
                    >
                      <ExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {modal && <DetailModal project={project} onClose={() => setModal(false)} />}
    </>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const DevFolio = () => {
  const featured = ecosystemProjects[0];
  const rest = ecosystemProjects.slice(1);

  return (
    <section id="devfolio" className="py-32 relative bg-primary overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-56 h-56 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-5"
        >
          {/* MVP badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 backdrop-blur-sm">
            <Crown size={16} className="text-amber-400" />
            <span className="text-amber-300 font-bold text-xs tracking-widest uppercase">
              MVP Project
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DevFolio
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A full ecosystem of developer-focused web tools — each solving a real problem,
            all built with modern Next.js and React.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            {[
              { label: "Dev Tools", value: "9" },
              { label: "Technologies", value: "10+" },
              { label: "Next.js Projects", value: "7" },
              { label: "Live Apps", value: "8" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10"
              >
                <span className="text-white font-extrabold text-sm">{stat.value}</span>
                <span className="text-gray-400 text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Bento Grid ── */}
        {/* Row 1: Featured (col-span-2) + 1 regular card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <FeaturedCard project={featured} index={0} />
          <EcoCard project={rest[0]} index={1} />

          {/* Row 2 */}
          {rest.slice(1, 4).map((p, i) => (
            <EcoCard key={p.title} project={p} index={i + 2} />
          ))}

          {/* Row 3 */}
          {rest.slice(4, 7).map((p, i) => (
            <EcoCard key={p.title} project={p} index={i + 5} />
          ))}

          {/* Row 4 — last card centered */}
          <div className="hidden lg:block" />
          <EcoCard project={rest[7]} index={8} />
          <div className="hidden lg:block" />
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/DarkWizardCK-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
          >
            <Github size={18} />
            Explore All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DevFolio;
