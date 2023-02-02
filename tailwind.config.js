/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F4F7FB',
        fontColor: '#444444',
        gray: '#E7E7E7',
        cream02: '#FAFAFA',
        cream: '#F8FBFF',
      },
      fontFamily: {
        main: ['Sen', 'sans-serif']
      },
      boxShadow: {
        header: '0px 1px 4px #E7E7E7',
      },
    },
  },
  plugins: [],
}
