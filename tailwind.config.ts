import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-epilogue)"],
        lavishly: ["var(--font-lavishly)"],
        "lexend-deca": ["var(--font-lexend-deca)"],
      },
    },
  },
  plugins: [],
};
export default config;
