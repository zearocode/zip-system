/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          950: '#450A33',
          960:'#E8185E',
        },
      }
    },
  },
  plugins: [],
}
