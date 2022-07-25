module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        primary: 'hsl(215, 51%, 70%)',
        secondary: 'hsl(178, 100%, 50%)',
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
  plugins: [],
}
