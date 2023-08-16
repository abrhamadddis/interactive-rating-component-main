/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen:{
      sm:'375px',
      lg:'1440px',
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
        Orange: 'hsl(25, 97%, 53%)',
      },
      fontFamily:{
        overPass: ['Overpass', 'sans-serif'],
      },
      fontWeight: {
        thin: '400',
        bold: '700',
      },  
    },
  },
  plugins: [],
}

