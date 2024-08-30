import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'quiz-background': '#F5F5F5', // Off-white background
        'quiz-button-unchecked': '#FEE2E2', // Pastel Pink for unchecked buttons
        'quiz-button-checked': '#F5F5F5', // Off-white background
        'quiz-accent': '#A3C7FF', // Electric Blue for primary buttons
        'quiz-highlight': '#FF6F61', // Coral Pink for header
        'quiz-hover': '#39FF14', // Neon Green for hover states
      },
      textColor: {
        'quiz-text': '#333333', // Dark gray for text
        'quiz-accent': '#007BFF', // Electric Blue for primary buttons
        'quiz-title': '#F0F0F0', // New light gray color for the title
      },
      boxShadow: {
        'quiz-unchecked': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'quiz-unchecked-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'quiz-checked': '0 0 15px rgba(255, 20, 147, 0.3)',
        'quiz-score': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'quiz': ['Poppins', 'Nunito', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        'quiz-title': '1.75rem', // 28px
        'quiz-score': '1.0rem', // 12px (reduced from 1rem)
      },
      letterSpacing: {
        'quiz-title': '0.5px',
      },
      borderWidth: {
        'quiz-score': '0.5px', // Reduced from 1px
      },
    },
  },
  plugins: [],
};

export default config;