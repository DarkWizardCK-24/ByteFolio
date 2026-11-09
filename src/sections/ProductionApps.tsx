"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { productionApps } from "@/lib/data";
import { trackSpotlight } from "@/lib/spotlight";

const ProductionApps: React.FC = () => (
  <section id="production" className="rule-top grid-texture relative overflow-hidden bg-primary py-24 sm:py-32">
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Live in production"
        lede="Products I built and shipped at Aainova that real users run today, from Google Play apps to the web tools teams use daily."
        meta={[
          { value: productionApps.length, label: "Live products" },
          { value: productionApps.filter((a) => a.platform === "Google Play").length, label: "On Google Play" },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {productionApps.map((app, index) => {
          const Icon = app.platform === "Google Play" ? Smartphone : Globe;
          const body = (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  Live
                </span>
                <span className="flex items-center gap-1.5 text-xs text-faint">
                  <Icon size={13} aria-hidden />
                  {app.platform}
                </span>
              </div>

              <h3 className="mt-5 flex items-center gap-2 text-xl font-semibold text-text">
                {app.name}
                {app.url && <ArrowUpRight size={16} className="text-muted" aria-hidden />}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">{app.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{app.description}</p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line bg-primary/50 px-2 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          const cls = "surface surface-hover spotlight group relative flex h-full flex-col overflow-hidden p-6";
          const motionProps = {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.45, delay: Math.min(index, 5) * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
            viewport: { once: true, margin: "-60px" },
            onMouseMove: trackSpotlight,
          };

          return app.url ? (
            <motion.a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className={cls} {...motionProps}>
              {body}
            </motion.a>
          ) : (
            <motion.article key={app.name} className={cls} {...motionProps}>
              {body}
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductionApps;
