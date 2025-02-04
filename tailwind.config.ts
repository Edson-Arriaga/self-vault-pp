import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCream: '#FFFEF5',
        cream: '#FEFAE0',
        coral: '#FEA29D',
        pink: '#FE90AB',
        aqua: '#8CAFB1',
        yellow: '#FFEA91',
        gray: '#363636',
        red: '#FF4C4C'
      }
    },
  },
  plugins: [],
} satisfies Config;
