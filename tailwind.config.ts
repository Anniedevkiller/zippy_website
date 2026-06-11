import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CC5500", // Burnt Orange
          hover: "#E05C00",
          active: "#B34A00",
          light: "#FFEAD6",
          dark: "#993D00",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F5F5F5", // Light Gray
          dark: "#E5E5E5",
        },
        charcoal: {
          DEFAULT: "#121212", // Dark Charcoal
          light: "#1F1F1F",
          muted: "#8A8A8A",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "scroll 30s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
