"use client";

import type { MouseEvent } from "react";

// Sets --mx/--my for the .spotlight glow. Plain DOM writes, so no re-render on mouse move.
export function trackSpotlight(e: MouseEvent<HTMLElement>): void {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
