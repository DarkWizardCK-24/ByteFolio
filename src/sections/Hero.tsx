"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLinktree } from "react-icons/si";
import AnimatedBackground from "@/components/AnimatedBackground";

const socials = [
  { href: "https://github.com/DarkWizardCK-24", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/chaitanya-katare-3b765b281", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.fiverr.com/darkwizard103", label: "Fiverr", Icon: TbBrandFiverr },
  { href: "https://linktr.ee/DarkWizard_CK", label: "Linktree", Icon: SiLinktree },
];

const roles = ["Flutter", "Full-stack", "Web", "Databases"];

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-primary pb-20 pt-28"
  >
    <AnimatedBackground />

    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to work
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl">
            Chaitanya
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Katare
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-300 sm:text-xl">
            I build cross-platform apps and the web services behind them — currently going deep on
            Linux and DevOps to own the whole path to production.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-300"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            Navi Mumbai, India
            <span className="text-gray-700">·</span>
            <span className="text-gray-500">call sign DarkWizãrd</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-400 px-6 py-3.5 font-bold text-primary transition-transform duration-300 hover:scale-[1.03]"
            >
              See my work
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume(Chaitanya-Katare).pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-text transition-colors duration-300 hover:border-white/45 hover:bg-white/10"
            >
              <Download size={18} />
              Résumé
            </a>
          </div>

          <div className="mt-8 flex gap-2.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:text-text"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-violet-500/30 blur-3xl"
              aria-hidden
            />
            <div className="relative rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-400 p-[3px]">
              <div className="rounded-full bg-primary p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/dev.png"
                  alt="Chaitanya Katare"
                  className="h-60 w-60 rounded-full object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
              </div>
            </div>

            <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-secondary/90 px-4 py-2 text-xs font-semibold text-gray-200 shadow-xl backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
              Learning Linux &amp; DevOps
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
