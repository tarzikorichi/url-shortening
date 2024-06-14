/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/compenents/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      Mobile: '375px',
      Desktop: '1440px',
    },
    extend: {
      fontFamily: {
        league: 'League Spartan, sans-serif'
      }
    },
  },
  plugins: [],
}