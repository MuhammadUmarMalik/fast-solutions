import type { Config } from "tailwindcss";

// Token colours that still honour Tailwind opacity modifiers (bg-accent/15, ring-ink/[0.06]).
const v = (name: string) => `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`;

export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        surface: v("surface"),
        putty: v("putty"),
        ink: v("ink"),
        "ink-soft": v("ink-soft"),
        muted: v("muted"),
        line: v("line"),
        "line-strong": v("line-strong"),
        accent: v("accent"),
        "accent-ink": v("accent-ink"),
        "on-accent": v("on-accent"),
        dark: v("dark"),
        "dark-raised": v("dark-raised"),
        "on-dark": v("on-dark"),
        "on-dark-muted": v("on-dark-muted"),
        "dark-line": v("dark-line"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: { soft: v("shadow-soft") },
      transitionTimingFunction: { expo: "cubic-bezier(0.16, 1, 0.3, 1)", quint: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
} satisfies Config;
