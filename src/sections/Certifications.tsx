"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { certifications } from "@/lib/data";
import { getCertAccent, issuerInitials } from "@/lib/utils";

const Certifications: React.FC = () => {
  const issuers = new Set(certifications.map((c) => c.issuer));

  return (
    <section
      id="certifications"
      className="rule-top grid-texture relative overflow-hidden bg-secondary py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certifications"
          lede="Courses completed and signed off, from Flutter and JavaScript through to databases. The spine on each card marks what it certifies."
          meta={[
            { value: certifications.length, label: "Credentials" },
            { value: issuers.size, label: "Issuers" },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const accent = getCertAccent(cert);

            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                className="surface surface-hover group relative flex h-full flex-col overflow-hidden p-5 pl-6"
              >
                {/* The card's one piece of colour: what this credential covers. */}
                <span
                  className={`absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b ${accent.gradient}`}
                  aria-hidden
                />

                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-card border border-line bg-primary/50 text-[13px] font-semibold text-muted">
                    {issuerInitials(cert.issuer)}
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 truncate text-sm font-semibold text-text">
                      {cert.issuer}
                      <BadgeCheck size={14} className={accent.text} aria-label="Verified issuer" />
                    </p>
                    <p className="tnum text-xs text-faint">{cert.date}</p>
                  </div>
                </div>

                <h3
                  className={`mt-5 text-base font-semibold leading-snug text-text transition-colors duration-300 ${accent.hoverText}`}
                >
                  {cert.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-primary/50 px-2 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
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
