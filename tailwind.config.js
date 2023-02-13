/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green': '#369776',
      'green-fonts': '#369776',
      'pink':'#ff5c8e',
      'dark':'#817f7d',
      'overlay':'rgba(0, 0, 0, 0.3)'
    },
    screens: {
      'lg': {'max': '1170px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 767px) { ... }

      'sl': {'max': '540px'},
      // => @media (max-width: 540) { ... }

      'sm': {'max': '425px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradien-pattern': "linear-gradient(270deg, hsla(261, 52%, 72%, 1) 0%, hsla(250, 57%, 63%, 1) 74%, hsla(250, 45%, 51%, 1) 100%)",
     },
     gridTemplateColumns: {
      // Simple 16 column grid
      '5': 'repeat(5, minmax(0, 300px))',
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
