/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '360px',
      },
      fontSize: {
        '2xs': '0.60rem'
      }
    }
  },
  plugins: [],
}