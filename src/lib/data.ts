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
  Project, TimelineItemData, Certification, SkillCategory, FocusArea, ProductionApp,
} from "./types";


export const productionApps: ProductionApp[] = [
  {
    name: "Hommigo",
    platform: "Google Play",
    tagline: "India's all-in-one property platform",
    description:
      "Serves tenants, owners, brokers and hostel or society managers: rental search, visit scheduling, digital agreements and rent payments.",
    tags: ["Flutter", "Android"],
  },
  {
    name: "Aptam",
    platform: "Google Play · App Store",
    tagline: "A live learning marketplace",
    description:
      "Connects students with verified tutors for 1-on-1 and group video classes, with scheduling and push reminders.",
    tags: ["Flutter", "Android", "iOS"],
    links: [{ label: "App Store", url: "https://apps.apple.com/in/app/aptam-live-classes-tutors/id6819706008" }],
  },
  {
    name: "Doc Scanner",
    platform: "Google Play",
    tagline: "Document scanning on your phone",
    description: "A document scanning app published on Google Play.",
    tags: ["Flutter", "Android"],
  },
  {
    name: "Quotation System",
    platform: "Web app",
    tagline: "Quotes, invoices and client chats in one place",
    description:
      "Handles quotations, proforma invoices and client conversations, with PDF export and admin-managed user access.",
    tags: ["Web", "Admin panel"],
  },
];


export const webProjects: Project[] = [
  {
    title: "LedgerLine",
    tagline: "Double-entry accounting for small businesses",
    description:
      "Record transactions as balanced journal entries and get the ledger, trial balance, profit & loss and balance sheet instantly, calculated from the books and never typed in by hand. Also covers invoices and bills, GST, bank reconciliation, budgets, recurring entries and approvals. Mobile-first and installable as a PWA.",
    highlights: [
      "Reports are derived from posted journal entries, so the books cannot drift from the numbers",
      "Entries that do not balance are flagged before they can be posted",
      "Part of a three-app finance platform (with Ledgerly and Lensly) sharing one sign-in",
      "FastAPI service layer over PostgreSQL on Supabase",
    ],
    images: [
      "/projects/web/ledgerline/dashboard-desktop.png",
      "/projects/web/ledgerline/journal-desktop.png",
      "/projects/web/ledgerline/profit-and-loss-desktop.png",
      "/projects/web/ledgerline/reconciliation-desktop.png",
      "/projects/web/ledgerline/invoices-desktop.png",
      "/projects/web/ledgerline/budget-vs-actual-desktop.png",
      "/projects/web/ledgerline/journal-entry-balanced-mobile.png",
      "/projects/web/ledgerline/gst-mobile.png",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL", "PWA"],
    github: "https://github.com/DarkWizardCK-24/LedgerLine",
    live: "https://ledgerline-alpha-five.vercel.app",
  },
  {
    title: "VaultSpark",
    tagline: "A zero-knowledge password manager",
    description:
      "Store logins, notes and cards in a vault that is encrypted on your device before it is saved, so the server only ever sees ciphertext. Includes a live strength analyser, password generator, 2FA codes, password history, a security audit, recovery key, passkey/biometric unlock and shared vaults.",
    highlights: [
      "Client-side encryption: the master password never leaves the device",
      "Recovery key, and master-password change without re-entering saved items",
      "Authenticator-style 2FA codes with a countdown ring",
      "Merges two earlier projects (SecureSpark and PassVault) into one product",
    ],
    images: [
      "/projects/web/vaultspark/desktop-home.png",
      "/projects/web/vaultspark/desktop-vault.png",
      "/projects/web/vaultspark/desktop-audit.png",
      "/projects/web/vaultspark/desktop-shared.png",
      "/projects/web/vaultspark/mobile-vault.png",
      "/projects/web/vaultspark/mobile-vault-2fa.png",
      "/projects/web/vaultspark/mobile-recovery-key.png",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/VaultSpark",
    live: "https://vault-spark.vercel.app",
  },
  {
    title: "Lensly",
    tagline: "Bank statements in, spending insight out",
    description:
      "Upload bank statements (PDF including password-protected, CSV, Excel) and see where your money goes. Reconciles balances, categorises transactions, flags duplicates, suggests savings, compares reports and exports to CSV, Excel and PDF. Companion to Ledgerly.",
    highlights: [
      "Multi-format ingestion: protected PDFs, CSV and Excel",
      "Balance reconciliation surfaces warnings when parsed totals do not add up",
      "Duplicate detection and side-by-side report comparison",
      "Imports straight into Ledgerly",
    ],
    images: [
      "/projects/web/lensly/dashboard-desktop.png",
      "/projects/web/lensly/upload-desktop.png",
      "/projects/web/lensly/review-desktop.png",
      "/projects/web/lensly/reconciliation-warnings-desktop.png",
      "/projects/web/lensly/report-overview-desktop.png",
      "/projects/web/lensly/recommendations-desktop.png",
      "/projects/web/lensly/compare-desktop.png",
      "/projects/web/lensly/budgets-desktop.png",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    github: "https://github.com/DarkWizardCK-24/Lensly",
    live: "https://lensly-seven.vercel.app",
  },
  {
    title: "DevHub",
    tagline: "A developer workspace in one app",
    description:
      "Brings projects, tasks, notes, code snippets, files, links and builds into one mobile-first app. Kanban, list and calendar task views, a Markdown notes editor, an AES-256 encrypted credential vault, global search (Ctrl/⌘ + K), an activity timeline and an admin panel with an audit log.",
    highlights: [
      "Admin panel with an audit log of changes",
      "AES-256 encrypted credential vault",
      "Global command-palette search across content types",
      "Next.js front end on a FastAPI + Supabase backend",
    ],
    images: [
      "/projects/web/devhub/dashboard-dark.png",
      "/projects/web/devhub/dashboard-light.png",
      "/projects/web/devhub/projects-grid.png",
      "/projects/web/devhub/project-board.png",
      "/projects/web/devhub/notes-editor.png",
      "/projects/web/devhub/vault.png",
      "/projects/web/devhub/admin-audit.png",
    ],
    skills: ["Next.js", "Typescript", "FastAPI", "Supabase", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/DevHub",
    live: "https://dev-hub-one-opal.vercel.app",
  },
  {
    title: "Prism Link",
    tagline: "One link, every side of you",
    description:
      "A link-in-bio platform. Build a page with grouped links, drag-and-drop ordering, gradient themes, YouTube/Spotify embeds, scheduled links and QR sharing, with a live phone preview and built-in analytics for views, clicks and referrers.",
    highlights: [
      "Real-time phone preview that mirrors edits as you make them",
      "Built-in analytics: views, clicks and referrers",
      "Scheduled links",
      "Next.js 16, Tailwind 4 and Firebase",
    ],
    images: [
      "/projects/web/prism-link/desktop-landing.png",
      "/projects/web/prism-link/desktop-dashboard.png",
      "/projects/web/prism-link/desktop-appearance-style.png",
      "/projects/web/prism-link/desktop-analytics.png",
      "/projects/web/prism-link/desktop-profile.png",
      "/projects/web/prism-link/mobile-profile.png",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion", "Vercel"],
    github: "https://github.com/DarkWizardCK-24/Prism-Link",
    live: "https://prism-link.vercel.app",
  },
];


export const flutterProjects: Project[] = [
  {
    title: "Ledgerly",
    tagline: "A multi-ledger cash book for every screen",
    description:
      "Track income and expenses across separate CashBooks with categories, tags, search, CSV export, charts and insights. Runs on Android, iOS, Windows and Web from one codebase, with Riverpod state management and live sync to a FastAPI + Supabase backend.",
    highlights: [
      "One Flutter codebase shipping to four platforms",
      "Riverpod for predictable, testable state",
      "Live sync with a FastAPI + Supabase backend",
      "Shares one account with LedgerLine and Lensly",
    ],
    images: [
      "/projects/flutter/ledgerly/dashboard-desktop.png",
      "/projects/flutter/ledgerly/insights-desktop.png",
      "/projects/flutter/ledgerly/books-desktop.png",
      "/projects/flutter/ledgerly/transactions-desktop.png",
      "/projects/flutter/ledgerly/categories-desktop.png",
      "/projects/flutter/ledgerly/dashboard-mobile.png",
      "/projects/flutter/ledgerly/transactions-mobile.png",
    ],
    skills: ["Flutter", "Dart", "Riverpod", "FastAPI", "Supabase"],
    github: "https://github.com/DarkWizardCK-24/Ledgerly",
  },
  {
    title: "Lumora",
    tagline: "An offline-first learning tracker",
    description:
      "Log study sessions, set goals and build streaks. SQLite is the local source of truth, with optional Firebase sync when online. Includes a streak heatmap dashboard, goal milestones, a planner, Markdown notes, offline finish-date forecasts and JSON/CSV/PDF export.",
    highlights: [
      "Offline-first: SQLite is the source of truth, the network is optional",
      "Firebase sync with conflict resolution",
      "Modular codebase with automated tests",
      "Responsive layouts from phone to desktop",
    ],
    images: [
      "/projects/flutter/lumora/desktop-dashboard.png",
      "/projects/flutter/lumora/desktop-goals.png",
      "/projects/flutter/lumora/desktop-analysis.png",
      "/projects/flutter/lumora/desktop-analytics.png",
      "/projects/flutter/lumora/desktop-calendar.png",
      "/projects/flutter/lumora/desktop-sessions.png",
      "/projects/flutter/lumora/desktop-notes.png",
      "/projects/flutter/lumora/mobile-dashboard.png",
      "/projects/flutter/lumora/mobile-goals.png",
    ],
    skills: ["Flutter", "Dart", "SQLite", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Lumora",
  },
  {
    title: "Walleyy Swirlll",
    tagline: "Ordering and payments for a dessert parlour",
    description:
      "A guest app where customers build a cone or cup scoop by scoop, add toppings, apply coupons and pay online with Razorpay or at the counter, then track the order live. A separate staff side moves orders from New to Done. Runs on mobile and Windows desktop.",
    highlights: [
      "Razorpay online payments alongside pay-at-counter",
      "Order status (Placed, Preparing, Ready, Done) tracked live through Firebase",
      "Separate guest and admin experiences in one app",
      "Coupons, 5% GST calculation and downloadable receipts",
    ],
    images: [
      "/projects/flutter/walleyy/mobile_guest_1_menu.png",
      "/projects/flutter/walleyy/mobile_guest_2_item_builder.png",
      "/projects/flutter/walleyy/mobile_guest_4_checkout.png",
      "/projects/flutter/walleyy/mobile_guest_6_my_orders.png",
      "/projects/flutter/walleyy/mobile_admin_2_dashboard.png",
      "/projects/flutter/walleyy/mobile_admin_3_orders.png",
      "/projects/flutter/walleyy/windows_guest_1_menu.png",
      "/projects/flutter/walleyy/windows_admin_2_dashboard.png",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Razorpay"],
    private: true,
  },
  {
    title: "H₂Orbit",
    tagline: "Hydration tracking that predicts your needs",
    description:
      "An AI-powered hydration tracker. Predicts needs from behaviour, weather and lifestyle, syncs through Firebase with full offline support, and adds weather-adjusted recommendations, context-aware notifications and caffeine tracking.",
    highlights: [
      "Weather-adjusted daily targets",
      "Full offline support, syncing when back online",
      "Context-aware notifications",
    ],
    image: "/projects/flutter/flutter8.png",
    skills: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/H2Orbit",
  },
  {
    title: "Ghost Signal",
    tagline: "A secret-message toolkit",
    description:
      "A dark-neon toolkit with smart Morse auto-decoding, Caesar cipher brute-forcing and linguistic steganography. Built with Flutter and a FastAPI service.",
    highlights: [
      "Flutter client backed by a Python FastAPI service",
      "Caesar brute-forcing and Morse auto-decoding",
    ],
    image: "/projects/flutter/flutter9.png",
    skills: ["Flutter", "Dart", "Python", "FastAPI"],
    github: "https://github.com/DarkWizardCK-24/Ghost-Signal",
  },
];


export const experiences: TimelineItemData[] = [
  {
    title: "Software Developer - Aainova, Navi Mumbai",
    period: "Jan 2026 - Present",
    description:
      "Started on the mobile side, building cross-platform apps in Flutter, and grew into full-stack work across the product. Now I run several projects end to end: the mobile apps, the web apps, the backend services behind them, and the admin panels the team works in day to day.",
    details: ["Next.js", "Flutter", "Python FastAPI", "Firebase", "MySQL"],
  },
  {
    title: "Flutter Developer - Prosoft Informatics Pvt Ltd, Navi Mumbai",
    period: "May 2025 - Sept 2025",
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
    details: ["Percentage: 79.6%", "Math & Science", "Programming Basics"],
  },
  {
    title: "DAV Public School, Panvel - Science Stream",
    period: "March 2005 - Apr 2018",
    description: "SSC CBSE Board",
    details: ["Percentage: 88.4%", "Math & Science", "Basics of Education"],
  },
];


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
    detail: "CI/CD pipelines, containers and deployment workflows, the path from commit to production.",
    icon: Server,
  },
  {
    name: "Python",
    status: "Refreshing",
    detail: "Working back through the core language and standard library to sharpen the fundamentals.",
    icon: RefreshCw,
  },
];
