import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Flutter Masterclass - Advanced Flutter & Dart",
    issuer: "Udemy",
    date: "Dec 2024 - Jan 2025",
    skills: ["Flutter", "Dart", "Mobile Development"],
  },
  {
    title: "Flutter and Dart",
    issuer: "Udemy",
    date: "July 2023 - Sept 2024",
    skills: ["Flutter", "Firebase", "APIs"],
  },
  {
    title: "Frontend Development - HTML",
    issuer: "Great Learning",
    date: "Nov 2024 - Nov 2024",
    skills: ["HTML", "Frontend Development"],
  },
  {
    title: "Frontend Development - CSS",
    issuer: "Great Learning",
    date: "Nov 2024 - Nov 2024",
    skills: ["CSS", "Frontend Development"],
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "Nov 2024 - Nov 2024",
    skills: ["JavaScript"],
  },
  {
    title: "My SQL Basics",
    issuer: "Great Learning",
    date: "Oct 2024 - Nov 2024",
    skills: ["SQL"],
  },
];

const Certifications = () => {
  return (
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
          <p className="text-gray-400 text-lg">
            My credentials and achievements
          </p>
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
                    {cert.issuer} • {cert.date}
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
};

export default Certifications;