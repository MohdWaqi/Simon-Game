/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Press:["'Press Start 2P', cursive;"],
      },
      colors:{
        "pure-green":"#00FF00",
        "pure-red":"#FF0000",
        "pure-blue":"#0000FF",
        "dark-blue":"#08086D",
        "pure-yellow":"#FFFF00"
      },
      borderRadius: {
        "4xl":"2rem",
        "5xl":"2.5rem",
        "6xl":"3rem",
      },
      borderWidth: {
        '10': '10px',
      },
      boxShadow: {
        '3xl': '0 0 30px white',
      }
    },
  },
  plugins: [],
}
