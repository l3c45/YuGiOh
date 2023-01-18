/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#f98600",
      secondary: "#7e5bef",
      background: "#18191a",
      card:"#242526",
      text: "#ffffff",
      textOff: "#000000",
      button:"#3a3b3c"
      
    },
    extend: {
      gridTemplateColumns: {
        "grid-auto-200": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
