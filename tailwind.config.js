/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '15':'60px',
      },
      colors:{
        'Grey':'#26272E',
        'SecondGrey':'#3C3C43',
      },
    },
  },
  plugins: [],
}
