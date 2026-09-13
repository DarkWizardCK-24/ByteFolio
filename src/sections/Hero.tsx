"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLinktree } from "react-icons/si";
import AnimatedBackground from "@/components/AnimatedBackground";
import CallSign from "@/components/CallSign";

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

          <motion.p variants={item} className="mt-5 flex items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-accent/70 to-accent/10" aria-hidden />
            <span className="text-sm text-faint">known in dev as</span>
            <CallSign className="text-lg" />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            I build cross-platform apps and the web services behind them — and I&apos;m going deep on
            Linux and DevOps to own the whole path to production.
          </motion.p>

          <motion.dl
            variants={item}
            className="mt-9 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line shadow-edge sm:grid-cols-3"
          >
            {specs.map(({ label, value }) => (
              <div key={label} className="bg-raised px-4 py-3.5">
                <dt className="text-[11px] text-faint">{label}</dt>
                <dd className="mt-1 text-sm font-semibold text-text">{value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              See my work
            </a>
            <a href="/resume(Chaitanya-Katare).pdf" download className="btn btn-ghost">
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
                  className="grid h-11 w-11 place-items-center rounded-card text-faint transition-colors duration-200 hover:bg-raised hover:text-text"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait. The source is a cut-out on a transparent background, so it
            gets a lit stage to stand on rather than a photo box to sit in:
            floor light under the shoulders, a halo behind the head, and a fade
            at the bottom that dissolves the cut-out edge into the panel floor.
            Rendered at its natural 280px — it is never upscaled. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <figure className="group relative w-full max-w-[23rem]">
            {/* Colour bloom, outside the panel */}
            <div className="pointer-events-none absolute -inset-10 -z-10" aria-hidden>
              <div className="absolute inset-0 rounded-[4rem] bg-[radial-gradient(ellipse_at_50%_60%,rgba(77,159,255,0.22),transparent_62%)] blur-2xl" />
              <div className="absolute -right-2 top-6 h-44 w-44 rounded-full bg-iris/20 blur-3xl" />
            </div>

            <div className="edge-gradient relative aspect-[5/6] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-raised via-secondary to-primary shadow-lift">
              {/* Floor light — the portrait stands in it */}
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_96%,rgba(77,159,255,0.34),transparent_56%)]"
                aria-hidden
              />
              {/* Halo behind the head */}
              <div
                className="absolute left-1/2 top-[12%] h-48 w-48 -translate-x-1/2 rounded-full bg-accent/[0.14] blur-3xl"
                aria-hidden
              />
              {/* The site's blueprint grid, faded toward the floor */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(152,166,190,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(152,166,190,0.07) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                  maskImage: "linear-gradient(#000 10%, transparent 78%)",
                  WebkitMaskImage: "linear-gradient(#000 10%, transparent 78%)",
                }}
                aria-hidden
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dev.png"
                alt="Chaitanya Katare"
                width={280}
                height={314}
                className="absolute bottom-0 left-1/2 w-[17.5rem] max-w-[94%] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
              />

              {/* Dissolves the cut-out's bottom edge into the panel floor... */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary via-primary/70 to-transparent"
                aria-hidden
              />
              {/* ...then the floor light is laid back over it, so the figure
                  reads as standing in the light rather than fading out. */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_50%_100%,rgba(77,159,255,0.32),transparent_58%)] mix-blend-screen"
                aria-hidden
              />

              <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-card border border-line bg-secondary/80 px-4 py-3 text-sm font-semibold text-text shadow-card backdrop-blur-md">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Flutter &amp; full-stack developer
              </figcaption>
            </div>
          </figure>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
