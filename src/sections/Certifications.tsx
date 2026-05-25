"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

const Certifications: React.FC = () => (
  <section id="certifications" className="py-32 relative bg-primary">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
          <Award className="text-accent" size={40} />
          Certifications
        </h2>
        <p className="text-gray-400 text-lg">My credentials and achievements</p>
      </motion.div>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-6 glass rounded-2xl hover:border-accent/60 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <Award className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-3">
                  {cert.issuer} &bull; {cert.date}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
