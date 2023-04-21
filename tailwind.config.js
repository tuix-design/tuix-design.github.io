/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/doc/*.{js,jsx,ts,tsx}",
    "./src/containers/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        purple: "#5D00FF",
        orange: "#FF9100",
        dark: "#01041b",
      },
    },
  },
  plugins: [],
};
