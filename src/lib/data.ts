import {
  FaAndroid, FaGitAlt, FaApple, FaGlobe, FaDatabase, FaWindows, FaLinux,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiTailwindcss, SiFlutter, SiFirebase, SiSupabase, SiNextdotjs,
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
    title: "DevHub",
    description:
      "A personal developer workspace that brings projects, tasks, notes, code snippets, files, links and builds into one mobile-first app. Features Kanban and calendar task views, a Markdown notes editor, an AES-256 encrypted vault, global search (Ctrl/⌘ + K), an activity timeline and an admin panel with audit log.",
    images: ["/projects/web/devhub/dashboard-dark.png", "/projects/web/devhub/dashboard-light.png", "/projects/web/devhub/projects-grid.png", "/projects/web/devhub/project-board.png", "/projects/web/devhub/notes-editor.png", "/projects/web/devhub/vault.png", "/projects/web/devhub/admin-audit.png"],
    skills: ["Next.js", "Typescript", "FastAPI", "Supabase", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/DevHub",
    live: "https://dev-hub-one-opal.vercel.app",
  },
  {
    title: "Prism Link",
    description:
      "A colorful link-in-bio platform — one link, every side of you. Build a page with grouped links, drag-and-drop ordering, gradient themes, YouTube/Spotify embeds, scheduled links, QR sharing and a live phone preview, with built-in analytics for views, clicks and referrers.",
    images: ["/projects/web/prism-link/desktop-landing.png", "/projects/web/prism-link/desktop-dashboard.png", "/projects/web/prism-link/desktop-appearance-style.png", "/projects/web/prism-link/desktop-analytics.png", "/projects/web/prism-link/desktop-profile.png", "/projects/web/prism-link/mobile-profile.png"],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/Prism-Link",
    live: "https://prism-link.vercel.app",
  },
  {
    title: "Lensly",
    description:
      "Upload bank statements (PDF incl. password-protected, CSV, Excel) and see where your money goes. Reconciles balances, categorises transactions, flags duplicates, suggests savings, compares reports and exports to CSV, Excel and PDF. Companion to Ledgerly.",
    images: ["/projects/web/lensly/dashboard-desktop.png", "/projects/web/lensly/upload-desktop.png", "/projects/web/lensly/review-desktop.png", "/projects/web/lensly/reconciliation-warnings-desktop.png", "/projects/web/lensly/report-overview-desktop.png", "/projects/web/lensly/recommendations-desktop.png", "/projects/web/lensly/compare-desktop.png", "/projects/web/lensly/budgets-desktop.png"],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    github: "https://github.com/DarkWizardCK-24/Lensly",
  },
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
    title: "Secure Spark",
    description:
      "A React-based web app to check your password strength in real time. It estimates brute-force crack time, calculates entropy, and offers visual feedback. Built for developers & users who care about security.",
    image: "/projects/web/web5.png",
    skills: ["React.js", "Javascript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/SecureSpark",
    live: "https://pass-wiz-webapp.vercel.app/",
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
    title: "Lumora",
    description:
      "An offline-first Flutter app for logging study sessions, setting goals and tracking streaks. Includes a dashboard with streak heatmap, goal milestones, a planner, Markdown notes, offline finish-date forecasts, JSON/CSV/PDF export and optional Firebase sync with conflict resolution.",
    images: ["/projects/flutter/lumora/desktop-dashboard.png", "/projects/flutter/lumora/desktop-goals.png", "/projects/flutter/lumora/desktop-analysis.png", "/projects/flutter/lumora/desktop-analytics.png", "/projects/flutter/lumora/desktop-calendar.png", "/projects/flutter/lumora/desktop-sessions.png", "/projects/flutter/lumora/desktop-notes.png", "/projects/flutter/lumora/mobile-dashboard.png", "/projects/flutter/lumora/mobile-goals.png"],
    skills: ["Flutter", "Dart", "SQLite", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Lumora",
  },
  {
    title: "Ledgerly",
    description:
      "A multi-ledger cash book in Flutter for tracking income and expenses across CashBooks, with charts, categories, tags and insights. Responsive across phone, tablet and desktop, with Riverpod state management and FastAPI + Supabase sync.",
    images: ["/projects/flutter/ledgerly/dashboard-desktop.png", "/projects/flutter/ledgerly/insights-desktop.png", "/projects/flutter/ledgerly/books-desktop.png", "/projects/flutter/ledgerly/transactions-desktop.png", "/projects/flutter/ledgerly/categories-desktop.png", "/projects/flutter/ledgerly/dashboard-mobile.png", "/projects/flutter/ledgerly/transactions-mobile.png"],
    skills: ["Flutter", "Dart", "Riverpod", "FastAPI", "Supabase"],
    github: "https://github.com/DarkWizardCK-24/Ledgerly",
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
    title: "H₂Orbit",
    description:
      "An AI-powered Flutter app for smart hydration tracking. Predicts needs using behavior, weather, and lifestyle; syncs via Firebase with full offline support. Features weather-adjusted recommendations and fluid animations.",
    image: "/projects/flutter/flutter8.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/H2Orbit",
  },
  {
    title: "Kanban Finance System",
    description:
      "A clean Flutter app for smart wealth management. Visualize and track savings, investments & financial goals using intuitive Kanban boards. Built with Flutter & Firebase (Auth + Firestore).",
    image: "/projects/flutter/flutter11.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Kanban-Finance-System",
  },
  {
    title: "Bill Blitz",
    description:
      "A modern responsive billing system built using Flutter Web and Firebase. Allows users to generate, manage, and store customer bills. Bills can be exported and printed as PDFs.",
    image: "/projects/flutter/flutter2.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/BillBlitz",
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
      { name: "Next.js", icon: SiNextdotjs },
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
