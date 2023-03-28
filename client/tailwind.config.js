/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green': '#29755A',
      'green-fonts': '#369776',
      'pink':'#E60071',
      'dark':'#212121',
      'overlay':'rgba(0, 0, 0, 0.4)'
    },
    screens: {
      'lg': {'max': '1170px'},

      'md': {'max': '900px'},

      'midl' : {'max': '767px'},

      'sl': {'max': '540px'},

      'sm': {'max': '425px'},
    },
    extend: {
      backgroundImage: {
        'gradien-pattern': "linear-gradient(270deg, hsla(261, 52%, 72%, 1) 0%, hsla(250, 57%, 63%, 1) 74%, hsla(250, 45%, 51%, 1) 100%)",
        'gradien-catalog': "linear-gradient(129deg, hsla(0, 0%, 96%, 1) 45%, hsla(325, 100%, 92%, 1) 56%, hsla(0, 0%, 100%, 1) 66%)",
     }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
