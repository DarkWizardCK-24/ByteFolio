import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaCss3Alt,
  FaAndroid,
  FaGitAlt,
  FaApple,
  FaGlobe,
  FaDatabase,
  FaHtml5,
  FaWindows,
} from "react-icons/fa";
import { VscJson, VscVscodeInsiders } from "react-icons/vsc";
import { LuCodeXml } from "react-icons/lu";
import {
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiPostman,
  SiSupabase,
  SiKotlin,
  SiAndroidstudio,
  SiMongodb,
  SiXcode,
  SiDjango,
  SiFastapi,
  SiPython,
} from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { Zap, Code2, Wrench, Layers, Cpu, } from "lucide-react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard.jsx";
import { BiLogoPostgresql } from "react-icons/bi";


const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
        gradient: "from-yellow-500/20 to-orange-500/20",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        gradient: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        gradient: "from-blue-500/20 to-yellow-500/20",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        gradient: "from-red-500/20 to-orange-500/20",
      },
      {
        name: "JSON",
        icon: VscJson,
        gradient: "from-cyan-500/20 to-blue-500/20",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        gradient: "from-orange-500/20 to-red-500/20",
      },
      {
        name: "XML",
        icon: LuCodeXml,
        gradient: "from-yellow-500/20 to-orange-500/20",
      },
      {
        name: "Dart",
        icon: FaDartLang,
        gradient: "from-orange-500/20 to-red-500/20",
      },
      {
        name: "Python",
        icon: SiPython,
        gradient: "from-purple-500/20 to-pink-500/20",
      },
    ],
  },
  {
    title: "Technologies",
    icon: Cpu,
    skills: [
      {
        name: "React",
        icon: FaReact,
        gradient: "from-cyan-500/20 to-blue-500/20",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        gradient: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        gradient: "from-cyan-500/20 to-teal-500/20",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        gradient: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        gradient: "from-red-500/20 to-orange-500/20",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        gradient: "from-orange-500/20 to-red-500/20",
      },
      {
        name: "SQL",
        icon: BiLogoPostgresql,
        gradient: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        gradient: "from-purple-500/20 to-pink-500/20",
      },
      {
        name: "Django",
        icon: SiDjango,
        gradient: "from-orange-500/20 to-red-500/20",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        gradient: "from-green-500/20 to-emerald-500/20",
      },
    ],
  },
  {
    title: "Platforms",
    icon: Layers,
    skills: [
      {
        name: "Android",
        icon: FaAndroid,
        gradient: "from-blue-500/20 to-cyan-500/20",
      },
      {
        name: "iOS",
        icon: FaApple,
        gradient: "from-orange-500/20 to-red-500/20",
      },
      {
        name: "Web",
        icon: FaGlobe,
        gradient: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Windows",
        icon: FaWindows,
        gradient: "from-purple-500/20 to-pink-500/20",
      },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      {
        name: "VsCode",
        icon: VscVscodeInsiders,
        gradient: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Xcode",
        icon: SiXcode,
        gradient: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "Postman",
        icon: SiPostman,
        gradient: "from-red-500/20 to-orange-500/20",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        gradient: "from-blue-500/20 to-cyan-500/20",
      },
      {
        name: "Database",
        icon: FaDatabase,
        gradient: "from-purple-500/20 to-pink-500/20",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
            <Zap className="text-accent" size={40} />
            Skills
          </h2>
          <p className="text-gray-400 text-lg">Technologies I specialize in</p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <category.icon className="text-accent" size={32} />
                <h3 className="text-3xl font-bold text-text">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
