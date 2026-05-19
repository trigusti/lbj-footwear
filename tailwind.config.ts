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
        navy: {
          50: "#e8edf5",
          100: "#c5d1e8",
          200: "#9fb2d8",
          300: "#7893c8",
          400: "#577bbc",
          500: "#3663b0",
          600: "#2d56a3",
          700: "#234791",
          800: "#1a3880",
          900: "#1e3a5f",
          950: "#0d1f38",
        },
        gold: {
          50: "#fef9ee",
          100: "#fdf0d0",
          200: "#fbe09d",
          300: "#f8cc63",
          400: "#f5b833",
          500: "#f5a623",
          600: "#e08a0a",
          700: "#b96a0b",
          800: "#935211",
          900: "#784413",
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs:   ["0.8rem",  { lineHeight: "1.5" }],
        sm:   ["0.95rem", { lineHeight: "1.6" }],
        base: ["1.05rem", { lineHeight: "1.7" }],
        lg:   ["1.15rem", { lineHeight: "1.7" }],
        xl:   ["1.3rem",  { lineHeight: "1.6" }],
        "2xl":["1.5rem",  { lineHeight: "1.4" }],
        "3xl":["1.9rem",  { lineHeight: "1.3" }],
        "4xl":["2.35rem", { lineHeight: "1.2" }],
        "5xl":["3rem",    { lineHeight: "1.1" }],
        "6xl":["3.75rem", { lineHeight: "1.05" }],
        "7xl":["4.5rem",  { lineHeight: "1" }],
        "8xl":["6rem",    { lineHeight: "1" }],
        "9xl":["8rem",    { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
export default config;
