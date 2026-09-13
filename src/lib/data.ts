import {
  FaReact, FaJsSquare, FaAndroid, FaGitAlt, FaApple, FaGlobe, FaDatabase, FaWindows, FaLinux,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiTailwindcss, SiFlutter, SiFirebase, SiPostman, SiSupabase,
  SiAndroidstudio, SiXcode, SiDjango, SiFastapi, SiPython, SiTypescript,
} from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { Code2, Cpu, Layers, Wrench, Terminal, Server, RefreshCw } from "lucide-react";

import type {
  Project, TimelineItemData, Certification, SkillCategory, FocusArea,
} from "./types";

// ── Web Projects ──────────────────────────────────────────────────────────────

export const webProjects: Project[] = [
  {
    title: "Kanban Finance Web",
    description:
      "A clean Next.js web app for smart wealth management. Visualize and track your savings, investments & financial goals using intuitive Kanban boards. Built with Next.js 14 & Firebase (Auth + Firestore). Manage money better. Grow wealth faster.",
    image: "/projects/web/web10.png",
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/Kanban-Finance-Web",
    live: "https://kanban-finance-web.vercel.app/",
  },
  {
    title: "ByteFolio",
    description:
      "A sleek React & Vite portfolio web app styled with Tailwind CSS, hosted on Vercel. Features reusable components and accessible links to showcase experience, education, certifications, projects, and skills with modern animations.",
    image: "/projects/web/web7.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/ByteFolio",
    live: "https://byte-folio.vercel.app/",
  },
  {
    title: "Profolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and JavaScript to showcase my projects, skills, and journey. Features smooth Framer Motion animations, a clean UI, and is optimized for speed, SEO, and accessibility.",
    image: "/projects/web/web6.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/ProFolio",
    live: "https://portfolio-nextjs-pearl-eight.vercel.app/",
  },
  {
    title: "Secure Spark",
    description:
      "A React-based web app to check your password strength in real time. It estimates brute-force crack time, calculates entropy, and offers visual feedback. Built for developers & users who care about security.",
    image: "/projects/web/web5.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/SecureSpark",
    live: "https://pass-wiz-webapp.vercel.app/",
  },
  {
    title: "Pass Vault",
    description:
      "A web app used to store the credentials and passwords. Built using CRUD functionality with React framework, hosted on Vercel.",
    image: "/projects/web/web4.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/PassVault",
    live: "https://pass-vault-eight.vercel.app/",
  },
  {
    title: "Bittree (Clone-Linktree)",
    description:
      "A Linktree clone with features for creating a link tree, adding links, and storing data using MongoDB.",
    image: "/projects/web/web3.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/DarkWizardCK-24/Bittree_Clone-Linktree",
  },
  {
    title: "Link Luxe",
    description:
      "A modern, free URL shortener built with Next.js and MongoDB. Offers a clean responsive interface, optional click tracking, and custom short URL support. Leverages Next.js API routes for backend logic.",
    image: "/projects/web/web2.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/LinkLuxe",
    live: "https://bitlinks-zeta.vercel.app/",
  },
  {
    title: "Task Tango",
    description:
      "A modern task management application with clean UI, built with Next.js and hosted on Vercel. Designed for productivity and simplicity.",
    image: "/projects/web/web1.png",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/TaskTango",
    live: "https://i-tasks-web.vercel.app/",
  },
];

// ── Flutter Projects ──────────────────────────────────────────────────────────

export const flutterProjects: Project[] = [
  {
    title: "Blog Sphere",
    description:
      "A modern Blog App built with Flutter & Dart featuring Supabase authentication and SQL database integration. Supports full CRUD operations with Clean Architecture principles for scalability and maintainability.",
    image: "/projects/flutter/flutter1.png",
    skills: ["Flutter", "Dart", "SQL", "Supabase"],
    github: "https://github.com/DarkWizardCK-24/BlogSphere",
  },
  {
    title: "Bill Blitz",
    description:
      "A modern responsive billing system built using Flutter Web and Firebase. Allows users to generate, manage, and store customer bills. Bills can be exported and printed as PDFs.",
    image: "/projects/flutter/flutter2.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/BillBlitz",
  },
  {
    title: "Green Spy",
    description:
      "A witty Flutter finance app with Firebase & Firestore integration. Offers real-time currency conversion, credit score tracking, and an AI-powered expense tracker with sarcastic insights and colorful charts.",
    image: "/projects/flutter/flutter3.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Green_Spy",
  },
  {
    title: "PassWiz App",
    description:
      "A Flutter app that analyzes password strength in real time. Estimates brute-force crack time and calculates entropy to measure randomness.",
    image: "/projects/flutter/flutter4.png",
    skills: ["Flutter", "Dart"],
    github: "https://github.com/DarkWizardCK-24/PassWiz-App",
  },
  {
    title: "Data Dazzle",
    description:
      "A mobile app built with Flutter and SQLite for creating, importing, and exporting data as CSVs, XLSXs, and ODSs. Supports tabular and card-oriented data representation.",
    image: "/projects/flutter/flutter5.png",
    skills: ["Flutter", "SQLite", "CSVs", "XLSX", "ODS"],
    github: "https://github.com/DarkWizardCK-24/DataDazzle",
  },
  {
    title: "Cred Vault",
    description:
      "A secure Flutter app for storing and managing credentials, powered by Firebase Authentication and Firestore. Features a stunning glassmorphic UI and seamless copy-to-clipboard functionality.",
    image: "/projects/flutter/flutter6.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/CredVault",
  },
  {
    title: "DecXNote",
    description:
      "A sleek Flutter to-do app with a card-swiper interface. Features Firebase Authentication, real-time database sync, glassmorphic UI, and checklist items for easy task organization.",
    image: "/projects/flutter/flutter7.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/DecXNote",
  },
  {
    title: "H₂Orbit",
    description:
      "An AI-powered Flutter app for smart hydration tracking. Predicts needs using behavior, weather, and lifestyle; syncs via Firebase with full offline support. Features weather-adjusted recommendations and fluid animations.",
    image: "/projects/flutter/flutter8.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/H2Orbit",
  },
  {
    title: "Ghost Signal",
    description:
      "A high-performance, dark-neon secret message toolkit. Features smart Morse auto-decoding, Caesar cipher brute-forcing, and advanced linguistic steganography. Built with Flutter & FastAPI.",
    image: "/projects/flutter/flutter9.png",
    skills: ["Flutter", "Dart", "Python", "FastAPI"],
    github: "https://github.com/DarkWizardCK-24/Ghost-Signal",
  },
  {
    title: "Music App",
    description:
      "A beautiful music app built with Flutter that allows users to search for songs, play previews, and manage their favorite tracks.",
    image: "/projects/flutter/flutter10.png",
    skills: ["Flutter", "Dart", "RESTful API"],
    github: "https://github.com/DarkWizardCK-24/Music-App",
  },
  {
    title: "Kanban Finance System",
    description:
      "A clean Flutter app for smart wealth management. Visualize and track savings, investments & financial goals using intuitive Kanban boards. Built with Flutter & Firebase (Auth + Firestore).",
    image: "/projects/flutter/flutter11.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Kanban-Finance-System",
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export const experiences: TimelineItemData[] = [
  {
    title: "Software Developer - AaiBuzz (AaiNova), Navi Mumbai",
    period: "Jan 2026 - Present",
    description:
      "Started on the mobile side, building cross-platform apps in Flutter, and grew into full-stack work across the product. Now I run several projects end to end — the mobile apps, the web apps, the backend services behind them, and the admin panels the team works in day to day.",
    details: ["Next.js", "Flutter", "Python FastAPI", "Firebase", "MySQL"],
  },
  {
    title: "Flutter Developer - Prosoft Informatics Pvt Ltd, Navi Mumbai",
    period: "May 2025 - Nov 2025",
    description:
      "Developed mobile applications of medical services with a focus on performance and user experience on Android and iOS.",
    details: ["Flutter and Dart", "Xcode", "VsCode"],
  },
  {
    title: "Web & Flutter Developer Intern - LawCrust Global Consultancy, Navi Mumbai",
    period: "Jan 2025 - May 2025",
    description:
      "Built responsive websites with HTML, CSS, and JavaScript, and developed a Flutter mobile app prototype managing both frontend and backend. Integrated APIs like Razorpay, WordPress, and Twilio for payments, live content, and booking confirmations.",
    details: ["Frontend Web Development", "API Integration", "Flutter", "Firebase"],
  },
  {
    title: "Frontend Developer Intern - Jio Platforms Ltd, Navi Mumbai",
    period: "Jan 2024 - May 2024",
    description:
      "Built responsive RPOS front-end with React.js, HTML5, and CSS3, integrating RESTful APIs and enhancing user experience through dynamic JavaScript interfaces.",
    details: ["React", "JavaScript", "Web Basics", "API Integration"],
  },
  {
    title: "Joint Technical Head - IEEE-PCE, Navi Mumbai",
    period: "Sept 2022 - May 2024",
    description:
      "Promoted to Joint Technical Head, leading and mentoring a technical team with task delegation and project guidance. Organized workshops, designed Google Forms for data management, and configured devices to support events.",
    details: ["Leadership", "Teamlead", "Responsible", "Mentorship", "Communication - Coordination"],
  },
];

// ── Education ─────────────────────────────────────────────────────────────────

export const education: TimelineItemData[] = [
  {
    title: "Bachelor of Technology - Electronics and Computer Science",
    period: "Dec 2020 - May 2024",
    description: "University of Mumbai - Pillai College of Engineering, Panvel",
    details: ["CGPA: 8.5/10", "Focused on Mobile and Web App Development", "Internship Experience"],
  },
  {
    title: "DAV Public School, Panvel - Science Stream",
    period: "June 2018 - Apr 2020",
    description: "HSC CBSE Board",
    details: ["Percentage: 75.4%", "Math & Science", "Programming Basics"],
  },
  {
    title: "DAV Public School, Panvel - Science Stream",
    period: "March 2005 - Apr 2018",
    description: "SSC CBSE Board",
    details: ["Percentage: 88.4%", "Math & Science", "Basics of Education"],
  },
];

// ── Certifications ────────────────────────────────────────────────────────────

export const certifications: Certification[] = [
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
    date: "Nov 2024",
    skills: ["HTML", "Frontend Development"],
  },
  {
    title: "Frontend Development - CSS",
    issuer: "Great Learning",
    date: "Nov 2024",
    skills: ["CSS", "Frontend Development"],
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "Nov 2024",
    skills: ["JavaScript"],
  },
  {
    title: "MySQL Basics",
    issuer: "Great Learning",
    date: "Oct 2024 - Nov 2024",
    skills: ["SQL"],
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Dart", icon: FaDartLang },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Technologies",
    icon: Cpu,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Git", icon: FaGitAlt },
      { name: "SQL", icon: BiLogoPostgresql },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Platforms",
    icon: Layers,
    skills: [
      { name: "Android", icon: FaAndroid },
      { name: "iOS", icon: FaApple },
      { name: "Web", icon: FaGlobe },
      { name: "Windows", icon: FaWindows },
      { name: "Linux", icon: FaLinux, learning: true },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "VsCode", icon: VscVscodeInsiders },
      { name: "Xcode", icon: SiXcode },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Database", icon: FaDatabase },
    ],
  },
];

// ── Currently sharpening ──────────────────────────────────────────────────────

export const focusAreas: FocusArea[] = [
  {
    name: "Linux",
    status: "Learning",
    detail: "Filesystem, permissions, shell scripting and process management from the ground up.",
    icon: Terminal,
  },
  {
    name: "DevOps",
    status: "Learning",
    detail: "CI/CD pipelines, containers and deployment workflows — the path from commit to production.",
    icon: Server,
  },
  {
    name: "Python",
    status: "Refreshing",
    detail: "Working back through the core language and standard library to sharpen the fundamentals.",
    icon: RefreshCw,
  },
];
