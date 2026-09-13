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
        // Surfaces — cool blue-graphite. Near-neutral on purpose: a saturated
        // base tints every photograph and screenshot sitting on top of it.
        primary: "#0A0F17",
        secondary: "#0E141E",
        raised: "#151D2A",
        line: "#222D3E",

        // Text — three steps, tinted a few degrees toward the base.
        text: "#E9EEF7",
        muted: "#93A1B8",
        faint: "#66748B",

        // Signature. Interface chrome only: actions, focus, active state.
        accent: "#4D9FFF",
        "accent-soft": "#A9CCFF",

        // Semantic. These two never decorate — they only ever report state.
        live: "#34D399",
        learn: "#FBBF24",
      },
      boxShadow: {
        card: "0 1px 2px rgba(3, 6, 12, 0.5), 0 12px 28px -16px rgba(3, 6, 12, 0.9)",
        lift: "0 2px 6px rgba(3, 6, 12, 0.5), 0 28px 56px -24px rgba(3, 6, 12, 1)",
        glow: "0 1px 2px rgba(3, 6, 12, 0.6), 0 16px 40px -16px rgba(77, 159, 255, 0.45)",
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
