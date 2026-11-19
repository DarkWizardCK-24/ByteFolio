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
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.hommigo.app" }],
  },
  {
    name: "Aptam",
    platform: "Google Play · App Store",
    tagline: "A live learning marketplace",
    description:
      "Connects students with verified tutors for 1-on-1 and group video classes, with scheduling and push reminders.",
    tags: ["Flutter", "Android", "iOS"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.aptam.education" },
      { label: "App Store", url: "https://apps.apple.com/in/app/aptam-live-classes-tutors/id6819706008" },
    ],
  },
  {
    name: "AI DocScanner",
    platform: "Google Play",
    tagline: "Scan, extract text and export to PDF",
    description: "Scans documents, extracts text with OCR and exports to PDF, working fully offline and keeping files private.",
    tags: ["Flutter", "Android", "OCR"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.aidocscanner" }],
  },
  {
    name: "AI Cleaner",
    platform: "Google Play",
    tagline: "Free up storage and speed",
    description: "Cleans junk, cache and duplicate files to boost storage and speed, working fully offline.",
    tags: ["Android"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.atulmore.ai_cleaner" }],
  },
  {
    name: "Quotation System",
    platform: "Web app",
    tagline: "Quotes, invoices and client chats in one place",
    description:
      "Handles quotations, proforma invoices and client conversations, with PDF export and admin-managed user access.",
    tags: ["Web", "Admin panel"],
    links: [{ label: "Open app", url: "https://aesteiron.aainova.com/en/login" }],
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
      "/projects/web/vaultspark/thumb-1-hero.webp",
      "/projects/web/vaultspark/thumb-2-devices.webp",
      "/projects/web/vaultspark/thumb-3-gallery.webp",
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
      "/projects/web/devhub/thumb-1-hero.webp",
      "/projects/web/devhub/thumb-2-devices.webp",
      "/projects/web/devhub/thumb-3-gallery.webp",
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
      "/projects/web/prism-link/thumb-1-hero.webp",
      "/projects/web/prism-link/thumb-2-devices.webp",
      "/projects/web/prism-link/thumb-3-gallery.webp",
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
  {
    title: "TaskTango",
    tagline: "Tasks with rhythm",
    description:
      "A fast to-do app that understands how you type: \"Call mum tomorrow 5pm !high\" fills in the date, priority and list for you. Subtasks, Today and Upcoming views, drag-and-drop ordering, progress rings and streaks. Use it as a guest or sign in to sync across devices in real time; it also works offline and installs as a PWA.",
    highlights: [
      "Natural-language quick add parses dates, times, priority and lists",
      "Real-time sync with Firestore, plus offline support and guest mode",
      "Keyboard-first: shortcuts for new task, search, help and undo",
      "Streaks and progress rings to keep momentum",
    ],
    images: [
      "/projects/web/tasktango/thumb-1-hero.webp",
      "/projects/web/tasktango/thumb-2-devices.webp",
      "/projects/web/tasktango/thumb-3-gallery.webp",
      "/projects/web/tasktango/desktop-today.webp",
      "/projects/web/tasktango/desktop-upcoming.webp",
      "/projects/web/tasktango/desktop-stats.webp",
      "/projects/web/tasktango/desktop-today-dark.webp",
      "/projects/web/tasktango/mobile-quick-add.webp",
      "/projects/web/tasktango/mobile-today.webp",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion", "PWA"],
    github: "https://github.com/DarkWizardCK-24/TaskTango",
    live: "https://task-tango.vercel.app",
  },
  {
    title: "LinkLuxe",
    tagline: "Short links, beautifully done",
    description:
      "A URL shortener with custom aliases, downloadable QR codes, optional expiry and private per-link click analytics: a 14-day chart, top referrers and device split, with no IP addresses stored. Links sync to your account through email or Google sign-in.",
    highlights: [
      "Custom aliases with validation, or a random short code",
      "Private analytics: clicks, referrers and devices without storing IPs",
      "Optional expiry (never, 1, 7 or 30 days) and QR code download",
      "Firestore security rules enforce per-user access",
    ],
    images: [
      "/projects/web/linkluxe/thumb-1-hero.webp",
      "/projects/web/linkluxe/thumb-2-devices.webp",
      "/projects/web/linkluxe/thumb-3-gallery.webp",
      "/projects/web/linkluxe/desktop-home.webp",
      "/projects/web/linkluxe/desktop-create-result.webp",
      "/projects/web/linkluxe/desktop-links.webp",
      "/projects/web/linkluxe/desktop-analytics.webp",
      "/projects/web/linkluxe/desktop-qr.webp",
      "/projects/web/linkluxe/mobile-links.webp",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion", "PWA"],
    github: "https://github.com/DarkWizardCK-24/LinkLuxe",
    live: "https://link-luxe.vercel.app",
  },
  {
    title: "ExpenseFlow",
    tagline: "Track spending, split bills, reach goals",
    description:
      "Personal finance and shared expenses in one app. Track income and spending, split group bills with four split methods and simplified settle-ups, set monthly budgets with alerts, save towards goals and see six-month reports with CSV export. Google and email sign-in, with a responsive desktop and mobile layout.",
    highlights: [
      "Group bill splitting with four split methods and debt simplification",
      "Monthly budgets with alerts and savings goals with progress rings",
      "Reports with trends, category breakdowns and CSV export",
      "Forms validated with React Hook Form and Zod",
    ],
    images: [
      "/projects/web/expenseflow/thumb-1-hero.webp",
      "/projects/web/expenseflow/thumb-2-devices.webp",
      "/projects/web/expenseflow/thumb-3-gallery.webp",
      "/projects/web/expenseflow/desktop-dashboard.webp",
      "/projects/web/expenseflow/desktop-split-group.webp",
      "/projects/web/expenseflow/desktop-reports.webp",
      "/projects/web/expenseflow/desktop-budget.webp",
      "/projects/web/expenseflow/mobile-transactions.webp",
      "/projects/web/expenseflow/mobile-goal.webp",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion"],
    github: "https://github.com/DarkWizardCK-24/ExpenseFlow",
    live: "https://expenseflow-ashen.vercel.app",
  },
  {
    title: "Kanban Finance Web",
    tagline: "Every rupee, on a board",
    description:
      "Manage bank accounts as Kanban boards: drag transactions through Pending, Processing, Completed and Failed, or across accounts to reassign them. Bank-branded account cards and a live wealth dashboard with monthly inflow, outflow, net flow and a category breakdown. Shares one Firebase backend with its Flutter companion app.",
    highlights: [
      "Two boards: per-account status columns and a cross-account board",
      "Real-time Firestore listeners keep the dashboard and boards live",
      "Same Firebase project as the Flutter app, so web and mobile stay in sync",
      "Dark \"Vault\" theme, responsive from phone to desktop",
    ],
    images: [
      "/projects/web/kanban-finance/thumb-1-hero.webp",
      "/projects/web/kanban-finance/thumb-2-devices.webp",
      "/projects/web/kanban-finance/thumb-3-gallery.webp",
      "/projects/web/kanban-finance/desktop-dashboard.webp",
      "/projects/web/kanban-finance/desktop-kanban.webp",
      "/projects/web/kanban-finance/desktop-accounts.webp",
      "/projects/web/kanban-finance/mobile-dashboard.webp",
      "/projects/web/kanban-finance/mobile-account-board.webp",
    ],
    skills: ["Next.js", "Typescript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Kanban-Finance-Web",
    live: "https://kanban-finance-web.vercel.app",
  },
];


export const flutterProjects: Project[] = [
  {
    title: "CardVault",
    tagline: "Your cards, privately held",
    description:
      "An offline-first, encrypted vault for debit and credit cards, card secrets, benefits, spending, subscriptions, loans and documents. A layered card deck with 52 bank-inspired styles, a calendar for dues and expiries, EMI and interest calculators, and local reminders. No account, no cloud, no tracking.",
    highlights: [
      "100% offline: no network permission, and a test fails the build if networking code appears",
      "SQLCipher (AES-256) on mobile and AES-256-GCM elsewhere, with PBKDF2-wrapped keys and a recovery code",
      "Card number, CVV and PIN revealed only after biometric or password re-auth, and the clipboard auto-clears",
      "One codebase for Android, iOS, Windows and Web, with Riverpod state",
    ],
    images: [
      "/projects/flutter/cardvault/thumb-1-hero.webp",
      "/projects/flutter/cardvault/thumb-2-devices.webp",
      "/projects/flutter/cardvault/thumb-3-gallery.webp",
      "/projects/flutter/cardvault/desktop-home.webp",
      "/projects/flutter/cardvault/desktop-card-vault.webp",
      "/projects/flutter/cardvault/desktop-insights.webp",
      "/projects/flutter/cardvault/mobile-card-deck.webp",
      "/projects/flutter/cardvault/mobile-card-details.webp",
      "/projects/flutter/cardvault/mobile-calendar.webp",
    ],
    skills: ["Flutter", "Dart", "Riverpod", "SQLCipher", "AES-256"],
    github: "https://github.com/DarkWizardCK-24/CardVault",
  },
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
      "/projects/flutter/ledgerly/thumb-1-hero.webp",
      "/projects/flutter/ledgerly/thumb-2-devices.webp",
      "/projects/flutter/ledgerly/thumb-3-gallery.webp",
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
      "/projects/flutter/lumora/thumb-1-hero.webp",
      "/projects/flutter/lumora/thumb-2-devices.webp",
      "/projects/flutter/lumora/thumb-3-gallery.webp",
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
      "/projects/flutter/walleyy/thumb-1-hero.webp",
      "/projects/flutter/walleyy/thumb-2-devices.webp",
      "/projects/flutter/walleyy/thumb-3-gallery.webp",
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
    images: [
      "/projects/flutter/h2orbit/thumb-1-hero.webp",
      "/projects/flutter/h2orbit/thumb-2-devices.webp",
      "/projects/flutter/h2orbit/thumb-3-gallery.webp",
      "/projects/flutter/h2orbit/desktop-home.webp",
      "/projects/flutter/h2orbit/desktop-analytics-overview.webp",
      "/projects/flutter/h2orbit/mobile-home.webp",
      "/projects/flutter/h2orbit/mobile-analytics-trends.webp",
      "/projects/flutter/h2orbit/mobile-goal-reached.webp",
    ],
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
    images: [
      "/projects/flutter/ghost-signal/thumb-1-hero.webp",
      "/projects/flutter/ghost-signal/thumb-2-devices.webp",
      "/projects/flutter/ghost-signal/thumb-3-gallery.webp",
      "/projects/flutter/ghost-signal/desktop-home.webp",
      "/projects/flutter/ghost-signal/desktop-caesar-cracker.webp",
      "/projects/flutter/ghost-signal/desktop-stego-hide.webp",
      "/projects/flutter/ghost-signal/mobile-morse-decode.webp",
      "/projects/flutter/ghost-signal/mobile-challenge-live.webp",
    ],
    skills: ["Flutter", "Dart", "Python", "FastAPI"],
    github: "https://github.com/DarkWizardCK-24/Ghost-Signal",
  },
  {
    title: "CredVault",
    tagline: "A zero-knowledge password vault",
    description:
      "Logins are encrypted on the device with a key derived from your master password before they reach Firebase, so the server only holds ciphertext. Includes a password generator, a 0-100 vault security score, a k-anonymity breach scan against Have I Been Pwned, auto-lock and a self-clearing clipboard.",
    highlights: [
      "AES-256-GCM with a PBKDF2-HMAC-SHA256 key (200,000 rounds); the master password is never stored",
      "Breach scan sends only the first 5 characters of a SHA-1 hash",
      "Security score flags weak, reused and old passwords",
      "Master-password change re-encrypts the whole vault",
    ],
    images: [
      "/projects/flutter/credvault/thumb-1-hero.webp",
      "/projects/flutter/credvault/thumb-2-devices.webp",
      "/projects/flutter/credvault/thumb-3-gallery.webp",
      "/projects/flutter/credvault/13-vault-wide.webp",
      "/projects/flutter/credvault/14-security-wide.webp",
      "/projects/flutter/credvault/04-vault.webp",
      "/projects/flutter/credvault/06-details-revealed.webp",
      "/projects/flutter/credvault/09-generator.webp",
      "/projects/flutter/credvault/11-security-scan.webp",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Provider", "Cryptography"],
    github: "https://github.com/DarkWizardCK-24/CredVault",
    live: "https://cred-vault-6bf20.web.app",
  },
  {
    title: "Kanban Finance",
    tagline: "Your bank accounts, on a board",
    description:
      "Track bank accounts, transactions and wealth on Kanban boards. Move transactions across status columns on an all-accounts or per-account board, with bank-themed gradient cards and a wealth summary of inflow, outflow and net flow. Shares one Firebase project with the Next.js web version.",
    highlights: [
      "All-accounts and per-account boards with drag-to-move transactions",
      "Wealth summary: total wealth, monthly inflow, outflow, net flow and categories",
      "Same Firebase backend as Kanban Finance Web, so data stays in sync",
      "Offline demo mode and layout tests that guard against overflow",
    ],
    images: [
      "/projects/flutter/kanban-finance/thumb-1-hero.webp",
      "/projects/flutter/kanban-finance/thumb-2-devices.webp",
      "/projects/flutter/kanban-finance/thumb-3-gallery.webp",
      "/projects/flutter/kanban-finance/desktop-dashboard.webp",
      "/projects/flutter/kanban-finance/desktop-kanban.webp",
      "/projects/flutter/kanban-finance/desktop-bank-board.webp",
      "/projects/flutter/kanban-finance/mobile-accounts.webp",
      "/projects/flutter/kanban-finance/mobile-bank-board.webp",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Firestore"],
    github: "https://github.com/DarkWizardCK-24/Kanban-Finance-System",
  },
  {
    title: "Cric11",
    tagline: "Balance. Score. Dominate.",
    description:
      "A cricket admin app for local match organisers. Builds balanced teams with a power-score snake draft, walks through the toss and match setup, and scores ball by ball with run rates, partnerships, batter and bowler cards, and batting and bowling leaderboards.",
    highlights: [
      "Snake-draft team balancing from a weighted power score",
      "Ball-by-ball scoring: extras, wickets with dismissal details and chase tracking",
      "Riverpod state and GoRouter shell navigation",
      "Bottom nav on phones, navigation rail on tablet and desktop",
    ],
    images: [
      "/projects/flutter/cric11/thumb-1-hero.webp",
      "/projects/flutter/cric11/thumb-2-devices.webp",
      "/projects/flutter/cric11/thumb-3-gallery.webp",
      "/projects/flutter/cric11/desktop-home.webp",
      "/projects/flutter/cric11/desktop-live-scoring.webp",
      "/projects/flutter/cric11/desktop-team-preview.webp",
      "/projects/flutter/cric11/mobile-live-scoring.webp",
      "/projects/flutter/cric11/mobile-scorecard.webp",
      "/projects/flutter/cric11/mobile-stats.webp",
    ],
    skills: ["Flutter", "Dart", "Riverpod", "Firebase"],
    github: "https://github.com/DarkWizardCK-24/Cric11",
  },
  {
    title: "BillBlitz",
    tagline: "Bills in a flash",
    description:
      "Billing for small shops: create customer bills in seconds, save them to Cloud Firestore and print or share branded A4 PDF invoices. Live totals with discount and tax, Cash/UPI/Card payment, searchable saved bills and rupee formatting with lakh/crore grouping.",
    highlights: [
      "Collision-free sequential bill IDs even when several devices save at once",
      "Multi-page PDF invoices that reprint exactly as originally issued",
      "One tested calculator drives the screen, the saved bill and the PDF",
      "Two-column editor on web and Windows",
    ],
    images: [
      "/projects/flutter/billblitz/thumb-1-hero.webp",
      "/projects/flutter/billblitz/thumb-2-devices.webp",
      "/projects/flutter/billblitz/thumb-3-gallery.webp",
      "/projects/flutter/billblitz/desktop-new-bill.webp",
      "/projects/flutter/billblitz/desktop-saved-bills.webp",
      "/projects/flutter/billblitz/desktop-bill-details.webp",
      "/projects/flutter/billblitz/pdf-invoice.webp",
      "/projects/flutter/billblitz/mobile-bill-items.webp",
      "/projects/flutter/billblitz/mobile-saved-bills.webp",
    ],
    skills: ["Flutter", "Dart", "Firebase", "PDF"],
    github: "https://github.com/DarkWizardCK-24/BillBlitz",
  },
  {
    title: "DecXNote",
    tagline: "Your tasks, one card at a time",
    description:
      "A card-based to-do app: swipe right to complete a task, swipe left to delete it, or jump straight to any note. Checklists, due dates, priorities, pinning, search and filters, with a progress summary and real-time sync through Firebase.",
    highlights: [
      "Swipeable, looping card deck with jump-to-note",
      "Checklists that complete the task when every item is ticked",
      "Search, priority and due-date filters, and undo",
      "Desktop layout with keyboard and mouse-wheel navigation",
    ],
    images: [
      "/projects/flutter/decxnote/thumb-1-hero.webp",
      "/projects/flutter/decxnote/thumb-2-devices.webp",
      "/projects/flutter/decxnote/thumb-3-gallery.webp",
      "/projects/flutter/decxnote/desktop-deck.webp",
      "/projects/flutter/decxnote/desktop-grid.webp",
      "/projects/flutter/decxnote/desktop-completed.webp",
      "/projects/flutter/decxnote/mobile-home.webp",
      "/projects/flutter/decxnote/mobile-jump-to-note.webp",
      "/projects/flutter/decxnote/mobile-add-task.webp",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Provider"],
    github: "https://github.com/DarkWizardCK-24/DecXNote",
  },
  {
    title: "Green-Spy",
    tagline: "Your pocket-smart finance partner",
    description:
      "A personal-finance app that converts currencies with live rates, tracks expenses and income, and monitors your credit score, while a sarcastic commentary engine reacts to your spending.",
    highlights: [
      "Expense dashboard with category pie chart and daily spending bars",
      "Live currency conversion for 20 currencies",
      "Credit score gauge with a per-factor breakdown and tips",
      "Transactions grouped by day or month, with a calendar view",
    ],
    images: [
      "/projects/flutter/green-spy/thumb-1-hero.webp",
      "/projects/flutter/green-spy/thumb-2-devices.webp",
      "/projects/flutter/green-spy/thumb-3-gallery.webp",
      "/projects/flutter/green-spy/desktop-home.webp",
      "/projects/flutter/green-spy/desktop-expenses-charts.webp",
      "/projects/flutter/green-spy/desktop-credit.webp",
      "/projects/flutter/green-spy/mobile-expenses.webp",
      "/projects/flutter/green-spy/mobile-currency.webp",
      "/projects/flutter/green-spy/mobile-credit.webp",
    ],
    skills: ["Flutter", "Dart", "Firebase", "fl_chart"],
    github: "https://github.com/DarkWizardCK-24/Green_Spy",
  },
  {
    title: "DataDazzle",
    tagline: "Design your tables. Own your data.",
    description:
      "Build your own data tables: define fields, add rows through generated forms, then search, sort, filter, import and export. Everything is stored locally in SQLite, with no account needed.",
    highlights: [
      "CSV, XLSX and ODS import with per-row validation and a skipped-rows report",
      "Field rules: required, unique, default, min/max and regex",
      "Table and card views, bulk delete with undo",
      "Fully local SQLite storage with versioned migrations",
    ],
    images: [
      "/projects/flutter/datadazzle/thumb-1-hero.webp",
      "/projects/flutter/datadazzle/thumb-2-devices.webp",
      "/projects/flutter/datadazzle/thumb-3-gallery.webp",
      "/projects/flutter/datadazzle/desktop-table-view.webp",
      "/projects/flutter/datadazzle/desktop-card-view.webp",
      "/projects/flutter/datadazzle/desktop-tables.webp",
      "/projects/flutter/datadazzle/mobile-table-view.webp",
      "/projects/flutter/datadazzle/mobile-field-rules.webp",
      "/projects/flutter/datadazzle/mobile-filter.webp",
    ],
    skills: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/DarkWizardCK-24/DataDazzle",
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
