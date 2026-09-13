/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        // Surfaces — cool blue-graphite, four rungs. Sections alternate between
        // primary and secondary, so those two need a gap wide enough to read as
        // a change of ground rather than a rendering artefact.
        primary: "#070B12",
        secondary: "#0C121C",
        raised: "#141C2A",
        line: "#243247",

        // Text — three steps, tinted a few degrees toward the base.
        text: "#EDF1F8",
        muted: "#98A6BE",
        faint: "#6B7A92",

        // Signature. Interface chrome only: actions, focus, active state.
        accent: "#4D9FFF",
        "accent-soft": "#8FC0FF",
        "accent-deep": "#2B6FE0",

        // The signature's gradient partner. Never used on its own.
        // Named "iris" rather than "violet": a flat `violet` key would replace
        // Tailwind's whole violet-* scale, which the stack accents rely on.
        iris: "#8B7CFF",

        // Semantic. These two never decorate — they only ever report state.
        live: "#34D399",
        learn: "#FBBF24",
      },
      boxShadow: {
        card: "0 1px 2px rgba(2, 4, 9, 0.5), 0 12px 28px -16px rgba(2, 4, 9, 0.9)",
        lift: "0 2px 6px rgba(2, 4, 9, 0.5), 0 32px 64px -24px rgba(2, 4, 9, 1)",
        glow: "0 1px 2px rgba(2, 4, 9, 0.6), 0 16px 40px -16px rgba(77, 159, 255, 0.45)",
        // The lit top edge that separates a raised surface from a painted one.
        edge: "inset 0 1px 0 rgba(255, 255, 255, 0.045)",
      },
      borderRadius: {
        card: "0.875rem",
        panel: "1.25rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
