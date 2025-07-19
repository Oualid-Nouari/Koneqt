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
        'brand-accent': '#00a2ff',
        'brand-black': '#121e55',
        'brand-white': '#ffffff',
        'brand-cta': '#a05cff',
        'brand-urgent': '#ff8c00',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 10px #a05cff' },
          '50%': { opacity: '1', boxShadow: '0 0 20px #a05cff' },
        }
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;