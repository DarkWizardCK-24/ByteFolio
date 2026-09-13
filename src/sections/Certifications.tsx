"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays, ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { getCertAccent, issuerInitials } from "@/lib/utils";

const Certifications: React.FC = () => {
  const issuers = new Set(certifications.map((c) => c.issuer));

  return (
    <section id="certifications" className="relative overflow-hidden bg-primary py-28 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-5"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-tight text-text sm:text-5xl">
              Certifications 🏅
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              Courses I finished and the skills each one signed off on.
            </p>
          </div>
          <div className="flex gap-2.5">
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
              {certifications.length} credentials
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300">
              {issuers.size} issuers
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const accent = getCertAccent(cert);

            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                className={`group card-sheen relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 p-5 pl-6 shadow-lg shadow-black/30 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl ${accent.ring} ${accent.glow}`}
              >
                {/* Accent spine */}
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${accent.gradient}`}
                  aria-hidden
                />
                {/* Seal watermark */}
                <ShieldCheck
                  size={104}
                  strokeWidth={1}
                  className={`pointer-events-none absolute -right-5 -top-5 ${accent.text} opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.16]`}
                  aria-hidden
                />

                <div className="relative flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent.gradient} text-[13px] font-extrabold text-primary`}
                  >
                    {issuerInitials(cert.issuer)}
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 truncate text-sm font-semibold text-text">
                      {cert.issuer}
                      <BadgeCheck size={14} className={accent.text} aria-label="Verified issuer" />
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-gray-400">
                      <CalendarDays size={12} />
                      {cert.date}
                    </p>
                  </div>
                </div>

                <h3
                  className={`relative mt-4 text-lg font-bold leading-snug text-text transition-colors duration-300 ${accent.hoverText}`}
                >
                  <span className="mr-1.5" aria-hidden>
                    {accent.emoji}
                  </span>
                  {cert.title}
                </h3>

                <div className="mt-auto pt-5">
                  <div className="mb-3 h-px w-full bg-gradient-to-r from-white/15 to-transparent" />
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${accent.border} ${accent.tint} ${accent.text}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
