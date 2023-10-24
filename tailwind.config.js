/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#F8E367',
        'pink': '#FE956F',
        
      },
      boxShadow: {
        '3xl': '0rem 1rem 3rem -50px #7d7d7d',
        'shadow1': '0px 13px 48px -1px rgba(0, 0, 0, 0.25)',
        'shadow2': '0px 13px 46px rgba(0, 0, 0, 0.13)'
      }
    },
  },
  plugins: [],
}
