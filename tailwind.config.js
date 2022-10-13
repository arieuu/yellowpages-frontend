/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito-sans'],
        sans: ['Nunito-sans', 'sans-serif'],
        muliBlack: ['Muli-black']
      },
      animation: {
        'bounce-fs': 'bounce 0.6s infinite'
      },
      boxShadow: {
        'sr': '2px 6px 4px 1px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  }
}
