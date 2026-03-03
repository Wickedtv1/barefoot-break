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
        amber: {
          brand: '#C4550A',
        },
        gold: {
          brand: '#D4A017',
        },
        brown: {
          brand: '#1A0A00',
        },
        sand: {
          brand: '#FFF3D6',
        },
        teal: {
          brand: '#1A8A8A',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(196, 85, 10, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
