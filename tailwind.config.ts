import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Royal blue sampled from the Blue Heaven crest, modernized into a
        // full scale. 600 is the brand reference value.
        primary: {
          50: "#EFF5FD",
          100: "#DCEAFB",
          200: "#B9D5F7",
          300: "#8DB9F0",
          400: "#559CE8",
          500: "#2B7AD9",
          600: "#1A56C4",
          700: "#15439B",
          800: "#123679",
          900: "#102C60",
          950: "#0A1B3D",
        },
        surface: "#F8FAFC",
        ink: "#0F172A",
        line: "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.03)",
        card: "0 8px 24px rgba(15, 23, 42, 0.07)",
        "card-hover": "0 16px 40px rgba(15, 23, 42, 0.10)",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
