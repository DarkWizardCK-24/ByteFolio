import type { Accent, CardVariant, Certification, Project } from "./types";

/**
 * Five hues, one per platform family — mobile, web, backend, data, and the
 * services layer. The label carries the exact stack, so the palette never has
 * to grow a new colour just to name a new framework.
 *
 * Each accent gets one job on a card: the tag, or the spine. Never both plus a
 * wash plus a glow — that is how a grid of eight projects turns into a rainbow.
 * Classes are written out in full; Tailwind cannot see interpolated names.
 */
const CYAN = { text: "text-cyan-300", hoverText: "group-hover:text-cyan-200", border: "border-cyan-400/40", tint: "bg-cyan-400/10", gradient: "from-cyan-400 to-sky-400", dot: "bg-cyan-400" };
const AZURE = { text: "text-blue-300", hoverText: "group-hover:text-blue-200", border: "border-blue-400/40", tint: "bg-blue-400/10", gradient: "from-blue-400 to-sky-400", dot: "bg-blue-400" };
const VIOLET = { text: "text-violet-300", hoverText: "group-hover:text-violet-200", border: "border-violet-400/40", tint: "bg-violet-400/10", gradient: "from-violet-400 to-indigo-400", dot: "bg-violet-400" };
const JADE = { text: "text-emerald-300", hoverText: "group-hover:text-emerald-200", border: "border-emerald-400/40", tint: "bg-emerald-400/10", gradient: "from-emerald-400 to-teal-400", dot: "bg-emerald-400" };
const AMBER = { text: "text-amber-300", hoverText: "group-hover:text-amber-200", border: "border-amber-400/40", tint: "bg-amber-400/10", gradient: "from-amber-400 to-orange-400", dot: "bg-amber-400" };

const ACCENTS: Record<string, Accent> = {
  flutter: { key: "flutter", label: "Flutter", ...CYAN },
  next: { key: "next", label: "Next.js", ...AZURE },
  react: { key: "react", label: "React", ...AZURE },
  web: { key: "web", label: "Web", ...AZURE },
  html: { key: "html", label: "HTML", ...AZURE },
  css: { key: "css", label: "CSS", ...AZURE },
  javascript: { key: "javascript", label: "JavaScript", ...AZURE },
  python: { key: "python", label: "Python", ...VIOLET },
  supabase: { key: "supabase", label: "Supabase", ...JADE },
  sql: { key: "sql", label: "SQL", ...JADE },
  firebase: { key: "firebase", label: "Firebase", ...AMBER },
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

/**
 * Certifications are coloured by what they certify, so each credential in the
 * grid is identifiable at a glance rather than six copies of the same tile.
 */
export function getCertAccent(cert: Certification): Accent {
  const skills = cert.skills.map((s) => s.toLowerCase());
  const has = (...needles: string[]) => skills.some((s) => needles.some((n) => s.includes(n)));

  if (has("flutter", "dart")) return ACCENTS.flutter;
  if (has("html")) return ACCENTS.html;
  if (has("css")) return ACCENTS.css;
  if (has("javascript")) return ACCENTS.javascript;
  if (has("sql", "database")) return ACCENTS.sql;
  return ACCENTS.web;
}

/** "Great Learning" -> "GL", "Udemy" -> "UD" */
export function issuerInitials(issuer: string): string {
  const words = issuer.trim().split(/\s+/);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : issuer.slice(0, 2).toUpperCase();
}

/* ── Experience ───────────────────────────────────────────────────────────── */

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Sept 2022" / "May 2025" / "Present" -> absolute month index. */
function parseMonth(token: string, fallback: number): number | null {
  const t = token.trim().toLowerCase();
  if (t === "present" || t === "current") return fallback;
  const m = /^([a-z]+)\s+(\d{4})$/.exec(t);
  if (!m) return null;
  const month = MONTHS.indexOf(m[1].slice(0, 3));
  return month < 0 ? null : Number(m[2]) * 12 + month;
}

/**
 * Total months across every listed role, merging overlapping periods so
 * concurrent roles are never counted twice.
 */
export function totalExperienceMonths(periods: (string | undefined)[]): number {
  const now = new Date().getFullYear() * 12 + new Date().getMonth();

  const ranges = periods
    .map((period) => {
      const [rawStart, rawEnd] = (period ?? "").split(/\s*[-–]\s*/);
      if (!rawStart || !rawEnd) return null;
      const start = parseMonth(rawStart, now);
      const end = parseMonth(rawEnd, now);
      return start !== null && end !== null && end > start ? ([start, end] as const) : null;
    })
    .filter((r): r is readonly [number, number] => r !== null)
    .sort((a, b) => a[0] - b[0]);

  let total = 0;
  let cursor = -Infinity;
  for (const [start, end] of ranges) {
    const from = Math.max(start, cursor);
    if (end > from) total += end - from;
    cursor = Math.max(cursor, end);
  }
  return total;
}

/* ── Skills ───────────────────────────────────────────────────────────────── */

/** Brand-ish colour per skill, so the grid is scannable rather than monochrome. */
const SKILL_COLORS: Record<string, string> = {
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-400",
  "Tailwind CSS": "text-cyan-400",
  Dart: "text-sky-400",
  Python: "text-yellow-300",
  React: "text-cyan-400",
  Flutter: "text-sky-400",
  Firebase: "text-amber-400",
  Supabase: "text-emerald-400",
  Git: "text-orange-500",
  SQL: "text-blue-400",
  Django: "text-emerald-500",
  FastAPI: "text-teal-400",
  Android: "text-green-400",
  iOS: "text-gray-200",
  Web: "text-indigo-400",
  Windows: "text-sky-400",
  Linux: "text-yellow-400",
  VsCode: "text-blue-400",
  Xcode: "text-sky-400",
  Postman: "text-orange-400",
  "Android Studio": "text-green-400",
  Database: "text-violet-400",
};

export function getSkillColor(name: string): string {
  return SKILL_COLORS[name] ?? "text-accent";
}

/** Months spanned by a single "Mon YYYY - Mon YYYY" period. */
export function periodMonths(period?: string): number | null {
  const [rawStart, rawEnd] = (period ?? "").split(/\s*[-–]\s*/);
  if (!rawStart || !rawEnd) return null;
  const now = new Date().getFullYear() * 12 + new Date().getMonth();
  const start = parseMonth(rawStart, now);
  const end = parseMonth(rawEnd, now);
  if (start === null || end === null || end <= start) return null;
  return end - start;
}

/** 20 -> "1 yr 8 mos", 6 -> "6 mos". Null when the period cannot be read. */
export function formatDuration(period?: string): string | null {
  const months = periodMonths(period);
  if (months === null) return null;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}
