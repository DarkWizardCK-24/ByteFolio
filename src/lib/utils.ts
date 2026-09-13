import type { Accent, Badge, CardVariant, Project } from "./types";

export function getBadges(project: Project): Badge[] {
  const skills = project.skills?.map((s) => s.toLowerCase()) ?? [];
  const badges: Badge[] = [];

  if (skills.some((s) => s.includes("next.js") || s === "nextjs"))
    badges.push({ label: "Next.js", color: "bg-orange-500/20 text-orange-400 border-orange-500/40" });
  if (skills.some((s) => s.includes("django")))
    badges.push({ label: "Django", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40" });
  if (skills.some((s) => s.includes("python") || s.includes("fastapi")))
    badges.push({ label: "Python", color: "bg-pink-500/20 text-pink-400 border-pink-500/40" });
  if (skills.some((s) => s.includes("flutter") || s.includes("dart")))
    badges.push({ label: "Flutter", color: "bg-green-500/20 text-green-400 border-green-500/40" });
  if (skills.some((s) => s.includes("firebase")))
    badges.push({ label: "Firebase", color: "bg-red-500/20 text-red-400 border-red-500/40" });
  if (skills.some((s) => s.includes("supabase")))
    badges.push({ label: "Supabase", color: "bg-teal-400/20 text-teal-300 border-teal-400/40" });
  if (
    badges.length === 0 &&
    skills.some((s) =>
      ["react.js", "react", "javascript", "html", "css", "tailwind css", "vercel", "node.js"].includes(s)
    )
  )
    badges.push({ label: "Web", color: "bg-amber-500/20 text-amber-400 border-amber-500/40" });

  return badges.length > 0
    ? badges
    : [{ label: "Project", color: "bg-gray-500/20 text-gray-400 border-gray-500/40" }];
}

/**
 * Every project carries the colour of the stack it is built on, so the grid
 * reads as a spectrum of technologies rather than a wall of identical cards.
 * Classes are written out in full — Tailwind cannot see interpolated names.
 */
const ACCENTS: Record<string, Accent> = {
  flutter: {
    key: "flutter",
    emoji: "🦋",
    text: "text-sky-300",
    hoverText: "group-hover:text-sky-300",
    border: "border-sky-400/50",
    tint: "bg-sky-400/10",
    ring: "hover:border-sky-400/70",
    glow: "hover:shadow-sky-500/25",
    gradient: "from-sky-400 to-cyan-300",
    softGradient: "from-sky-500/25 via-cyan-500/10 to-transparent",
    dot: "bg-sky-400",
  },
  next: {
    key: "next",
    emoji: "🚀",
    text: "text-amber-300",
    hoverText: "group-hover:text-amber-300",
    border: "border-amber-400/50",
    tint: "bg-amber-400/10",
    ring: "hover:border-amber-400/70",
    glow: "hover:shadow-amber-500/25",
    gradient: "from-amber-400 to-orange-400",
    softGradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    dot: "bg-amber-400",
  },
  python: {
    key: "python",
    emoji: "🐍",
    text: "text-violet-300",
    hoverText: "group-hover:text-violet-300",
    border: "border-violet-400/50",
    tint: "bg-violet-400/10",
    ring: "hover:border-violet-400/70",
    glow: "hover:shadow-violet-500/25",
    gradient: "from-violet-400 to-fuchsia-400",
    softGradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    dot: "bg-violet-400",
  },
  supabase: {
    key: "supabase",
    emoji: "⚡",
    text: "text-emerald-300",
    hoverText: "group-hover:text-emerald-300",
    border: "border-emerald-400/50",
    tint: "bg-emerald-400/10",
    ring: "hover:border-emerald-400/70",
    glow: "hover:shadow-emerald-500/25",
    gradient: "from-emerald-400 to-teal-300",
    softGradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    dot: "bg-emerald-400",
  },
  firebase: {
    key: "firebase",
    emoji: "🔥",
    text: "text-rose-300",
    hoverText: "group-hover:text-rose-300",
    border: "border-rose-400/50",
    tint: "bg-rose-400/10",
    ring: "hover:border-rose-400/70",
    glow: "hover:shadow-rose-500/25",
    gradient: "from-rose-400 to-orange-400",
    softGradient: "from-rose-500/25 via-orange-500/10 to-transparent",
    dot: "bg-rose-400",
  },
  react: {
    key: "react",
    emoji: "⚛️",
    text: "text-cyan-300",
    hoverText: "group-hover:text-cyan-300",
    border: "border-cyan-400/50",
    tint: "bg-cyan-400/10",
    ring: "hover:border-cyan-400/70",
    glow: "hover:shadow-cyan-500/25",
    gradient: "from-cyan-400 to-blue-400",
    softGradient: "from-cyan-500/25 via-blue-500/10 to-transparent",
    dot: "bg-cyan-400",
  },
  web: {
    key: "web",
    emoji: "🌐",
    text: "text-indigo-300",
    hoverText: "group-hover:text-indigo-300",
    border: "border-indigo-400/50",
    tint: "bg-indigo-400/10",
    ring: "hover:border-indigo-400/70",
    glow: "hover:shadow-indigo-500/25",
    gradient: "from-indigo-400 to-blue-400",
    softGradient: "from-indigo-500/25 via-blue-500/10 to-transparent",
    dot: "bg-indigo-400",
  },
};

export function getAccent(project: Project): Accent {
  const skills = project.skills?.map((s) => s.toLowerCase()) ?? [];
  const has = (...needles: string[]) => skills.some((s) => needles.some((n) => s.includes(n)));

  if (has("flutter", "dart")) return ACCENTS.flutter;
  if (has("next.js", "nextjs")) return ACCENTS.next;
  if (has("python", "fastapi", "django")) return ACCENTS.python;
  if (has("supabase")) return ACCENTS.supabase;
  if (has("firebase")) return ACCENTS.firebase;
  if (has("react")) return ACCENTS.react;
  return ACCENTS.web;
}

/**
 * Bento layout. On a 4-column grid (2 on tablet) a repeating 8-card cycle
 * spends 12 cells and always lands flush; any remainder falls back to small
 * tiles and `gap` reports the cells left over so the grid can be closed off.
 */
const CYCLE: CardVariant[] = ["big", "small", "small", "small", "small", "wide", "small", "small"];
const CELLS: Record<CardVariant, number> = { big: 4, wide: 2, small: 1 };

export function getBentoLayout(count: number): { variants: CardVariant[]; gap: number } {
  const whole = Math.floor(count / CYCLE.length) * CYCLE.length;
  const variants: CardVariant[] = Array.from({ length: count }, (_, i) =>
    i < whole ? CYCLE[i % CYCLE.length] : "small"
  );
  const cells = variants.reduce((sum, v) => sum + CELLS[v], 0);
  return { variants, gap: (4 - (cells % 4)) % 4 };
}

export const VARIANT_SPAN: Record<CardVariant, string> = {
  big: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};
