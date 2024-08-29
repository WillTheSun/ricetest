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
        'quiz-background': '#2C003E',
        'quiz-text': '#FFCDD2',
        'quiz-accent': '#FF4500',
        'quiz-highlight': '#A42B73',
      },
    },
  },
  plugins: [],
};

export default config;