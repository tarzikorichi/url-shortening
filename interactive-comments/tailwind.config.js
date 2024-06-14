/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        Mobile: '375px',
        Desktop: '1440px',
      },
      fontFamily: {
        rubik: 'Rubik, sans-serif'
      }
    },
  },
  plugins: [],
}