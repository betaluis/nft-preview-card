const plugin = require('tailwindcss/plugin');

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
     transform: 'rotateX(80deg)',
    },
    '.rotate-x-90': {
     transform: 'rotateX(90deg)',
    },
  })
}) 


module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        primary: 'hsl(215, 51%, 70%)',
        secondary: 'hsl(178, 100%, 50%)',
        'secondary-transparent': 'rgba(0, 255, 247, .60)',
        'dark-blue-100': 'hsl(217, 54%, 11%)',
        'dark-blue-200': 'hsl(216, 50%, 16%)',
        'dark-blue-300': 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        base: ['18px', '26px'],
      }
    },
  },
  plugins: [rotateX],
}
