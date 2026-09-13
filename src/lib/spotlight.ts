"use client";

import type { MouseEvent } from "react";

/**
 * Feeds the pointer position to a card as CSS custom properties, which the
 * `.spotlight` utility paints a pool of light at. Kept as a plain handler
 * rather than state so it never re-renders on mouse move.
 */
export function trackSpotlight(e: MouseEvent<HTMLElement>): void {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
