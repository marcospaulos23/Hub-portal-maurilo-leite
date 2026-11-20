/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Manrope"', '"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: "#0D1014",
        charcoal: "#151920",
        card: "#14181F",
        consult: "#171C24",
        offwhite: "#F7F6F2",
        sage: "#2ED18A",
        sand: "#E5B96F",
      },
    },
  },
  plugins: [],
};
