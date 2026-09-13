"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLinktree } from "react-icons/si";
import AnimatedBackground from "@/components/AnimatedBackground";

const socials = [
  { href: "https://github.com/DarkWizardCK-24", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/chaitanya-katare-3b765b281", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.fiverr.com/darkwizard103", label: "Fiverr", Icon: TbBrandFiverr },
  { href: "https://linktr.ee/DarkWizard_CK", label: "Linktree", Icon: SiLinktree },
];

// Three facts a recruiter looks for first, set as a spec rail rather than a
// scatter of pills — what he does, where he is, what he is adding next.
const specs = [
  { label: "Builds", value: "Flutter & full-stack" },
  { label: "Based in", value: "Navi Mumbai, India" },
  { label: "Learning", value: "Linux & DevOps" },
];

// The page's one load sequence. Everything after the hero waits for scroll.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-primary pb-24 pt-32"
  >
    <AnimatedBackground />

    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-live/25 bg-live/[0.08] px-3.5 py-1.5 text-xs font-semibold text-live"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            Available for work
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 text-[3.25rem] font-bold leading-[0.95] tracking-[-0.035em] text-text sm:text-7xl lg:text-[5.25rem]"
          >
            Chaitanya
            <br />
            Katare
          </motion.h1>

          <motion.p variants={item} className="mt-5 flex items-center gap-3 text-sm text-faint">
            <span className="h-px w-8 bg-line" aria-hidden />
            goes by DarkWizãrd
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            I build cross-platform apps and the web services behind them — and I&apos;m going deep on
            Linux and DevOps to own the whole path to production.
          </motion.p>

          <motion.dl
            variants={item}
            className="mt-9 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3"
          >
            {specs.map(({ label, value }) => (
              <div key={label} className="bg-raised px-4 py-3.5">
                <dt className="text-[11px] text-faint">{label}</dt>
                <dd className="mt-1 text-sm font-semibold text-text">{value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-card bg-accent px-6 py-3.5 font-semibold text-primary shadow-glow transition-colors duration-300 hover:bg-accent-soft"
            >
              See my work
            </a>
            <a
              href="/resume(Chaitanya-Katare).pdf"
              download
              className="flex items-center gap-2 rounded-card border border-line bg-raised/50 px-6 py-3.5 font-semibold text-text transition-colors duration-300 hover:border-accent/50"
            >
              <Download size={17} />
              Résumé
            </a>

            <div className="ml-1 flex gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-card text-faint transition-colors duration-200 hover:bg-raised/60 hover:text-text"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait — framed square rather than a circle in a gradient ring, so
            it reads as a photograph on the page instead of an avatar chip. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <figure className="relative w-full max-w-[22rem]">
            <div className="overflow-hidden rounded-panel border border-line bg-secondary p-2 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dev.png"
                alt="Chaitanya Katare"
                className="aspect-square w-full rounded-[0.875rem] object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-5 right-5 flex items-center justify-center gap-2 rounded-card border border-line bg-raised px-4 py-2.5 text-xs font-semibold text-text shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Flutter &amp; full-stack developer
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
