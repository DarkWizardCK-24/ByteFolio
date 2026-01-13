import { Code2, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";

const webProjects = [
  {
    title: "ByteFolio",
    description:
      "A sleek React & Vite portfolio web app styled with Tailwind CSS, hosted on Vercel. Features reusable components and accessible links to showcase experience, education, certifications, projects, and skills with modern animations and cross-platform support.",
    image:
      "projects/web/web7.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/ByteFolio",
    live: "https://byte-folio.vercel.app/",
  },
  {
    title: "Profolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and JavaScript to showcase my projects, skills, and journey. It features smooth Framer Motion animations, a clean UI, and is optimized for speed, SEO, and accessibility, hosted on Vercel.",
    image: "projects/web/web6.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/ProFolio",
    live: "https://portfolio-nextjs-pearl-eight.vercel.app/",
  },
  {
    title: "Secure Spark",
    description:
      "A React-based web app to check your password strength in real time. It estimates brute-force crack time, calculates entropy, and offers visual feedback. Built for developers & users who care about security.",
    image: "projects/web/web5.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/SecureSpark",
    live: "https://pass-wiz-webapp.vercel.app/",
  },
  {
    title: "Pass Vault",
    description:
      "A web app used to store the credentials and passwords. The app is build using CRUD functionality, using react framework and hosted on Vercel.",
    image: "projects/web/web4.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/PassVault",
    live: "https://pass-vault-eight.vercel.app/",
  },
  {
    title: "Bittree (Clone-Linktree)",
    description:
      "A clone of Linktree is built with simple features of creating link tree and add links and store data using MongoDB.",
    image: "projects/web/web3.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/DarkWizardCK-24/Bittree_Clone-Linktree",
    live: "#",
  },
  {
    title: "Link Luxe",
    description:
      "A modern, free URL shortener application built with Next.js and MongoDB, designed to create concise, shareable links with ease. The application offers a clean, responsive interface, optional click tracking, and custom short URL support. Hosted on Vercel for seamless deployment and scalability, it leverages Next.js API routes for backend logic.",
    image: "projects/web/web2.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/LinkLuxe",
    live: "https://bitlinks-zeta.vercel.app/",
  },
  {
    title: "Task Tango",
    description:
      "A modern, free URL shortener application built with Next.js and MongoDB, designed to create concise, shareable links with ease. The application offers a clean, responsive interface, optional click tracking, and custom short URL support. Hosted on Vercel for seamless deployment and scalability, it leverages Next.js API routes for backend logic.",
    image: "projects/web/web1.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/TaskTango",
    live: "https://i-tasks-web.vercel.app/",
  },
];

const flutterProjects = [
  {
    title: "Blog Sphere",
    description:
      "A modern Blog App built with Flutter & Dart featuring Supabase authentication and SQL database integration. Supports full CRUD operations with Clean Architecture principles for scalability and maintainability. Includes a fully responsive UI for a smooth experience across devices.",
    image: "projects/flutter/flutter1.png",
    skills: ["Flutter", "Dart", "SQL", "Supabase"],
    github: "https://github.com/DarkWizardCK-24/BlogSphere",
  },
  {
    title: "Bill Blitz",
    description:
      "A modern, responsive billing system web app built using Flutter Web and Firebase. This application allows users to generate, manage, and store customer bills seamlessly. Bills can be exported and printed as PDFs, making it ideal for small businesses or shops that need quick, digital billing solutions.",
    image: "projects/flutter/flutter2.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/BillBlitz",
  },
  {
    title: "Green Spy",
    description:
      "Green Spy is a witty Flutter finance app with Firebase & Firestore integration. It offers real-time currency conversion, credit score tracking, and an AI-powered expense tracker that gives sarcastic insights with colorful charts—making money management smart, fun, and engaging.",
    image: "projects/flutter/flutter3.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Green_Spy",
  },
  {
    title: "PassWiz App",
    description:
      "A Flutter app that analyzes how strong your password is! It estimates the time to crack your password using brute-force attacks and calculates its entropy to measure randomness. Stay secure by testing your password strength instantly!",
    image: "projects/flutter/flutter4.png",
    skills: ["Flutter", "Dart"],
    github: "https://github.com/DarkWizardCK-24/PassWiz-App",
  },
  {
    title: "Data Dazzle",
    description:
      "A mobile app built using flutter-dart for UI and SQLite for database. It can create and import and export data in the form of CSVs, XLSXs and ODSs. Along with it, it also has Tabular and UI cards oriented data representation.",
    image: "projects/flutter/flutter5.png",
    skills: ["Flutter", "SQLite", "CSVs", "XLSX", "ODS"],
    github: "https://github.com/DarkWizardCK-24/DataDazzle",
  },
  {
    title: "Cred Vault",
    description:
      "A secure Flutter app for storing and managing credentials, powered by Firebase Authentication and Firestore for real-time data sync. Features a stunning glassmorphic UI, seamless copy-to-clipboard functionality, and links to platforms/URLs for easy access. Organize your passwords and sensitive data effortlessly across Android, iOS, and web.",
    image: "projects/flutter/flutter6.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/CredVault",
  },
  {
    title: "DecXNote",
    description:
      "A sleek Flutter to-do app with a card-swiper interface for fun task management. Features Firebase Authentication, real-time database sync, glassmorphic UI, secure login, cross-platform support, and checklist items for easy task organization.",
    image: "projects/flutter/flutter7.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/DecXNote",
  },
  {
    title: "H₂Orbit",
    description:
      "A sleek, AI-powered Flutter app for smart hydration tracking. Predicts needs using behavior, weather, and lifestyle; syncs instantly via Firebase with full offline support. Features weather-adjusted recommendations, context-aware notifications, precise beverage & caffeine tracking, and a stunning glassmorphism ocean UI with fluid animations.",
    image: "projects/flutter/flutter8.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/H2Orbit",
  },
  {
    title: "Ghost Signal",
    description:
      "A high-performance, dark-neon secret message toolkit. Features smart Morse auto-decoding, Caesar cipher brute-forcing, and advanced linguistic steganography. Built with Flutter & FastAPI.",
    image: "projects/flutter/flutter9.png",
    skills: ["Flutter", "Dart", "Python", "FastAPI"],
    github: "https://github.com/DarkWizardCK-24/Ghost-Signal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
            <Code2 className="text-accent" size={40} />
            Projects
          </h2>
          <p className="text-gray-400 text-lg">Explore my work</p>
        </motion.div>
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center gap-3">
            <Globe size={28} />
            Web Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center gap-3">
            <Smartphone size={28} />
            Flutter Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flutterProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
