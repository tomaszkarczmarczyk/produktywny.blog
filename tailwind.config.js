/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./components/**/*.tsx', './layouts/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
