/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'lg': '0px 20px 20px -16px rgba(0, 0, 0, 0.1);'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: 'selector',
}

