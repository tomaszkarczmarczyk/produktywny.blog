/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./components/**/*.tsx', './layouts/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#05f',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
