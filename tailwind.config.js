/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        italianno: ['Italianno', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
