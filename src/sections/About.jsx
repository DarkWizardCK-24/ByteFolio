import { Smartphone, Globe, Database, Target } from "lucide-react";
import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard.jsx";

const About = () => {
  const cards = [
    {
      title: "Flutter Developer",
      description:
        "Crafting seamless cross-platform mobile applications using Flutter and Dart for exceptional user experiences.",
      icon: Smartphone,
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Web Developer",
      description:
        "Building responsive, modern web applications with React, Tailwind CSS, and other cutting-edge technologies.",
      icon: Globe,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Database Expert",
      description:
        "Designing and optimizing scalable database solutions with SQL and NoSQL for robust data management.",
      icon: Database,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="about" className="py-32 relative bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
            <Target className="text-accent" size={40} />
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Discover my expertise and passion for development
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AboutCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
