/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", 'serif']
      },
      colors: {
        lightBeige: ["#F2EAD3"],
        darkBeige: ["#DFD7BF"],
        darkBrown: ["#3F2305"],
        dirtyWhite: ["#F3EEEA"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

