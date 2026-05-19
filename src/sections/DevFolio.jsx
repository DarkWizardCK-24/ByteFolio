import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Crown,
  Activity,
  Share2,
  Smartphone,
  Globe,
  X,
  Layers,
  Zap,
  GitBranch,
  Network,
  ArrowRight,
  Code2,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const PARENT = {
  title: "DevFolio",
  tagline: "Ecosystem Parent Hub",
  description:
    "The flagship developer portfolio platform and the central nucleus of the DevFolio ecosystem. Built with Next.js, Framer Motion, and modern React — DevFolio serves as the definitive identity layer connecting APK Hub, Dev Pulse, and Code Share under one developer brand.",
  icon: Globe,
  color: "violet",
  skills: ["Next.js", "React 19", "Framer Motion", "Tailwind CSS", "TypeScript"],
  github: "https://github.com/DarkWizardCK-24/DevFolio",
  live: null,
  image: "projects/web/web6.png",
};

const ECO_APPS = [
  {
    title: "APK Hub",
    tagline: "Android App Distribution",
    description:
      "Centralized platform for discovering, downloading, and managing Android APK files with organized catalogs, version tracking, and secure distribution channels for every build.",
    icon: Smartphone,
    color: "emerald",
    skills: ["React", "Node.js", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Apk-Hub",
    live: null,
    image: "projects/web/web1.png",
  },
  {
    title: "Dev Pulse",
    tagline: "GitHub Analyzer & API Playground",
    description:
      "Dark-themed GitHub repository analyzer on Next.js 16 & React 19. Inspect any public repo's stats, languages, and full file tree — then prototype HTTP requests via a server-side CORS-bypassing proxy.",
    icon: Activity,
    color: "blue",
    skills: ["Next.js 16", "React 19", "Tailwind v4", "FastAPI", "Python"],
    github: "https://github.com/DarkWizardCK-24/DevPulse",
    live: "https://dev-pulse-black.vercel.app/",
    image: "projects/web/web9.png",
  },
  {
    title: "Code Share",
    tagline: "Code Collaboration Platform",
    description:
      "Share snippets, run side-by-side comparisons, enable real-time collaborative editing, and persist everything in the cloud — all secured by Firebase auth.",
    icon: Share2,
    color: "cyan",
    skills: ["Next.js", "Firebase", "JavaScript"],
    github: "https://github.com/DarkWizardCK-24/Code-Share",
    live: "https://code-share-lovat.vercel.app/",
    image: "projects/web/web8.png",
  },
];

// ── Color Tokens ──────────────────────────────────────────────────────────────

const C = {
  violet: {
    gradient: "from-violet-600 to-purple-700",
    gradientText: "from-violet-400 to-purple-400",
    bg: "bg-violet-500/10",
    bgHover: "hover:bg-violet-500/20",
    border: "border-violet-500/30",
    borderBright: "border-violet-400/60",
    text: "text-violet-400",
    glow: "shadow-violet-500/30",
    glowHover: "hover:shadow-violet-500/50",
    icon: "bg-violet-500/20 text-violet-400",
    ring: "ring-violet-500/40",
    chip: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    orb: "bg-violet-600",
    pulse: "violet",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-600",
    gradientText: "from-emerald-400 to-teal-400",
    bg: "bg-emerald-500/10",
    bgHover: "hover:bg-emerald-500/20",
    border: "border-emerald-500/30",
    borderBright: "border-emerald-400/60",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/30",
    glowHover: "hover:shadow-emerald-500/50",
    icon: "bg-emerald-500/20 text-emerald-400",
    ring: "ring-emerald-500/40",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    orb: "bg-emerald-600",
    pulse: "emerald",
  },
  blue: {
    gradient: "from-blue-600 to-cyan-600",
    gradientText: "from-blue-400 to-cyan-400",
    bg: "bg-blue-500/10",
    bgHover: "hover:bg-blue-500/20",
    border: "border-blue-500/30",
    borderBright: "border-blue-400/60",
    text: "text-blue-400",
    glow: "shadow-blue-500/30",
    glowHover: "hover:shadow-blue-500/50",
    icon: "bg-blue-500/20 text-blue-400",
    ring: "ring-blue-500/40",
    chip: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    orb: "bg-blue-600",
    pulse: "blue",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-600",
    gradientText: "from-cyan-400 to-blue-400",
    bg: "bg-cyan-500/10",
    bgHover: "hover:bg-cyan-500/20",
    border: "border-cyan-500/30",
    borderBright: "border-cyan-400/60",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/30",
    glowHover: "hover:shadow-cyan-500/50",
    icon: "bg-cyan-500/20 text-cyan-400",
    ring: "ring-cyan-500/40",
    chip: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    orb: "bg-cyan-600",
    pulse: "cyan",
  },
};

// ── Detail Modal ──────────────────────────────────────────────────────────────

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
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      >
        <style>{`
          .eco-scroll::-webkit-scrollbar { width: 3px; }
          .eco-scroll::-webkit-scrollbar-track { background: transparent; }
          .eco-scroll::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.4); border-radius: 99px; }
        `}</style>
        <motion.div
          key="modal-box"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[88vh] glass rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
        >
          <div className={`h-1 w-full bg-gradient-to-r ${c.gradient} flex-shrink-0`} />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={15} />
          </button>

          <div className="eco-scroll overflow-y-auto">
            <div className="h-52 overflow-hidden relative flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${c.icon} ring-2 ${c.ring}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className={`text-xs font-semibold ${c.text}`}>{project.tagline}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${c.text}`}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((s, i) => (
                    <span key={i} className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${c.chip}`}>
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
                  <Github size={15} /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${c.gradient} text-white rounded-xl hover:shadow-lg transition-all flex-1 justify-center text-sm font-semibold`}
                  >
                    <ExternalLink size={15} /> Live Demo
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

// ── Pulse Rings ───────────────────────────────────────────────────────────────

const PulseRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-violet-500/25"
        initial={{ width: 60, height: 60, opacity: 0.6 }}
        animate={{ width: [60, 140, 180], height: [60, 140, 180], opacity: [0.5, 0.2, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
      />
    ))}
  </div>
);

// ── Parent Hub Card ───────────────────────────────────────────────────────────

const ParentHubCard = () => {
  const [modal, setModal] = useState(false);
  const Icon = PARENT.icon;
  const c = C[PARENT.color];

  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .parent-float { animation: floatCard 5s ease-in-out infinite; }
        .border-glow-ring { animation: borderGlow 3s ease-in-out infinite; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        animate={{
          boxShadow: [
            "0 0 40px rgba(139,92,246,0.15)",
            "0 0 80px rgba(139,92,246,0.35)",
            "0 0 40px rgba(139,92,246,0.15)",
          ],
        }}
        transition2={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="parent-float relative glass rounded-3xl border border-violet-500/30 overflow-hidden group cursor-default"
      >
        {/* Animated top gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${c.gradient}`} />

        {/* Background glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-purple-600/5 pointer-events-none" />

        <div className="flex flex-col lg:flex-row">

          {/* Left — Image Panel */}
          <div className="lg:w-5/12 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
            <img
              src={PARENT.image}
              alt={PARENT.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f172a] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:hidden" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-violet-400/50">
                <Crown size={11} className="text-amber-400" />
                <span className="text-[10px] font-bold text-amber-300 tracking-widest uppercase">Parent Hub</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/30 backdrop-blur-sm border border-violet-400/40">
                <Network size={10} className="text-violet-300" />
                <span className="text-[10px] font-bold text-violet-300 tracking-wider uppercase">3 Apps Connected</span>
              </div>
            </div>
          </div>

          {/* Right — Content Panel */}
          <div className="lg:w-7/12 p-7 lg:p-10 flex flex-col justify-center gap-5">

            {/* Icon + Title */}
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className={`relative z-10 p-4 rounded-2xl ${c.icon} ring-2 ${c.ring}`}>
                  <Icon size={28} />
                </div>
                <PulseRings />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-none">
                    DevFolio
                  </h3>
                </div>
                <p className={`text-sm font-semibold ${c.text} tracking-wide`}>
                  {PARENT.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {PARENT.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {PARENT.skills.map((s, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.chip}`}>
                  {s}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setModal(true)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl ${c.bg} ${c.text} border ${c.border} text-sm font-semibold hover:brightness-110 transition-all`}
              >
                <Layers size={14} /> Details
              </button>
              <a
                href={PARENT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 border border-white/10 text-sm font-semibold hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={14} /> View on GitHub
              </a>
              {PARENT.live && (
                <a
                  href={PARENT.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${c.gradient} text-white text-sm font-semibold hover:shadow-lg transition-all`}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {modal && <DetailModal project={PARENT} onClose={() => setModal(false)} />}
    </>
  );
};

// ── Ecosystem Bridge ──────────────────────────────────────────────────────────

const EcoBridge = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="relative flex items-center justify-center py-8"
  >
    {/* Center line + nodes */}
    <div className="relative flex items-center gap-0 w-full max-w-lg">
      {/* Left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-500/40" />

      {/* Center badge */}
      <div className="flex items-center gap-3 px-5 py-2 rounded-full glass border border-violet-500/30 z-10 mx-4">
        <GitBranch size={14} className="text-violet-400" />
        <span className="text-xs font-bold text-violet-300 tracking-widest uppercase whitespace-nowrap">
          Ecosystem Apps
        </span>
        <div className="flex gap-1">
          {ECO_APPS.map((app, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${C[app.color].gradient}`}
            />
          ))}
        </div>
      </div>

      {/* Right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-500/40" />
    </div>

    {/* Vertical connector from parent to bridge */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 32 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-violet-500/60 to-violet-500/20"
    />

    {/* Vertical connector from bridge to cards */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 32 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-violet-500/20 to-transparent"
    />
  </motion.div>
);

// ── Eco App Card ──────────────────────────────────────────────────────────────

const EcoAppCard = ({ project, index }) => {
  const [modal, setModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const c = C[project.color];
  const Icon = project.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group relative glass rounded-2xl border ${c.border} overflow-hidden flex flex-col hover:shadow-2xl hover:${c.glow} transition-shadow duration-500`}
      >
        {/* Top gradient strip */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${c.gradient}`} />

        {/* "Part of ecosystem" badge */}
        <div className="absolute top-3 right-3 z-20">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <Zap size={8} className="text-violet-400" />
            <span className="text-[8px] font-bold text-violet-300 tracking-wider uppercase">DevFolio</span>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="h-36 overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/30 to-transparent z-10" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-3 flex-1">

          {/* Icon + title row */}
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ rotate: hovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-xl ${c.icon} ring-1 ${c.ring} flex-shrink-0`}
            >
              <Icon size={16} />
            </motion.div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">{project.title}</h3>
              <p className={`text-[10px] font-semibold ${c.text} leading-tight`}>{project.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((s, i) => (
              <span key={i} className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${c.chip}`}>
                {s}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border border-white/10 text-gray-500">
                +{project.skills.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <AnimatePresence>
            <motion.div
              initial={false}
              animate={{ height: hovered ? "auto" : 36 }}
              className="overflow-hidden"
            >
              {/* Always-visible on mobile */}
              <div className="flex gap-1.5">
                <button
                  onClick={() => setModal(true)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${c.bg} ${c.text} border ${c.border} text-[10px] font-semibold flex-1 justify-center hover:brightness-110 transition-all`}
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {modal && <DetailModal project={project} onClose={() => setModal(false)} />}
    </>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: "4", label: "Ecosystem Apps" },
  { value: "1", label: "Parent Hub" },
  { value: "3", label: "Connected Apps" },
  { value: "2", label: "Live Deployments" },
];

const DevFolio = () => (
  <section id="devfolio" className="py-32 relative bg-primary overflow-hidden">

    {/* Ambient background orbs */}
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-16 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
    />
    <motion.div
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-16 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
    />
    <motion.div
      animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      className="absolute top-1/2 right-10 w-60 h-60 bg-blue-600/8 rounded-full blur-3xl pointer-events-none"
    />

    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-6"
      >
        {/* MVP badge */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 backdrop-blur-sm"
        >
          <Crown size={14} className="text-amber-400" />
          <span className="text-amber-300 font-bold text-xs tracking-widest uppercase">
            MVP Project
          </span>
        </motion.div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-5xl sm:text-7xl font-extrabold leading-none tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              DevFolio
            </span>
          </h2>
          <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
            Ecosystem
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          One parent platform, three connected apps — a complete developer toolchain built from scratch.
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10"
            >
              <span className="text-white font-extrabold text-sm">{stat.value}</span>
              <span className="text-gray-500 text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Parent Hub Card ── */}
      <ParentHubCard />

      {/* ── Bridge connector ── */}
      <EcoBridge />

      {/* ── Ecosystem App Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ECO_APPS.map((app, i) => (
          <EcoAppCard key={app.title} project={app} index={i} />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="https://github.com/DarkWizardCK-24/DevFolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
        >
          <Github size={17} />
          View DevFolio on GitHub
        </a>
        <a
          href="https://github.com/DarkWizardCK-24"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 glass border border-white/10 text-gray-300 rounded-xl font-bold text-sm hover:text-white hover:border-white/25 transition-all duration-300"
        >
          <ArrowRight size={17} />
          Explore All Projects
        </a>
      </motion.div>
    </div>
  </section>
);

export default DevFolio;
