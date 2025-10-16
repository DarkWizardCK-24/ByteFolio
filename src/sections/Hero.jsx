import { Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import { SiLinktree } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-primary"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 glass rounded-full border border-accent/30">
                <p className="text-accent font-semibold text-sm flex items-center gap-2">
                  <Sparkles size={16} className="animate-pulse" />
                  Welcome to my portfolio<br/>My call sign is DarkWizãrd 
                </p>
              </div>
              <h1 className="text-6xl md:text-6xl  font-bold text-text leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Chaitanya Katare
                </span>
              </h1>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-semibold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Flutter Enthusiast | Full-Stack Developer | Web Developer |
                Database Expert
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              I craft beautiful, functional, and scalable applications.
              Passionate about creating seamless user experiences with clean,
              maintainable code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-accent to-blue-600 text-text rounded-xl font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                My Works
                <ChevronDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </a>
              <a
                href="resume(Chaitanya-Katare).pdf"
                download
                className="px-8 py-4 glass border-2 border-accent/50 text-accent rounded-xl font-bold hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                Download Resume
              </a>
            </div>
            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/DarkWizardCK-24"
                aria-label="GitHub"
                className="group relative p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/chaitanya-katare-3b765b281"
                aria-label="LinkedIn"
                className="group relative p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.fiverr.com/darkwizard103"
                aria-label="Fiverr"
                className="group relative p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
              >
                <TbBrandFiverr size={24} />
              </a>
              <a
                href="https://linktr.ee/DarkWizard_CK"
                aria-label="LinkTree"
                className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
              >
                <SiLinktree size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 glass rounded-full border-2 border-accent/30 flex items-center justify-center shadow-2xl shadow-accent/20 hover:scale-105 transition-transform duration-500">
                <img
                  src="dev.png"
                  alt="Profile"
                  className="w-72 h-72 rounded-full border-4 border-accent/50 object-cover shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
