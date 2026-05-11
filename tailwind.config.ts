import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          red: "#F25B5B",
          dark: "#1A1A1A",
        },
        background: "#FAFAF9",
        surface: "#FFFFFF",
        border: "#E8E8E4",
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6B66",
          muted: "#9B9B96",
        },
        accent: {
          success: "#1D9E75",
          warning: "#BA7517",
        },
      },
    },
  },
  plugins: [],
};

export default config;
