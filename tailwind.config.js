/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
       
        'grid-auto-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}
