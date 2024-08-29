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
      boxShadow: {
        'quiz-unchecked': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'quiz-unchecked-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'quiz-checked': '0 0 15px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;