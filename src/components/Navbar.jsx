import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  Users,
  Briefcase,
  BookOpen,
  Zap,
  Code2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Sparkles },
    { name: "About", href: "#about", icon: Users },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: BookOpen },
    { name: "Skills", href: "#skills", icon: Zap },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Certifications", href: "#certifications", icon: Award },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-accent/30 shadow-lg shadow-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="text-3xl font-extrabold bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 drop-shadow-lg"
          >
            &lt;CK/&gt;
          </a>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative px-4 py-2 text-gray-300 hover:text-accent transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={16}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium">{link.name}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              );
            })}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 glass rounded-lg border border-accent/30 text-accent hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 top-20 glass border-r border-accent/30 h-full w-64 shadow-2xl shadow-accent/20 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="p-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/30 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span className="font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
