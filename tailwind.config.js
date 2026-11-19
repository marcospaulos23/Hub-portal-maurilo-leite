/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: "#08090C",
        charcoal: "#121417",
        card: "#101215",
        consult: "#16181D",
      },
    },
  },
  plugins: [],
};
