import type { Badge, Project } from "./types";

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
