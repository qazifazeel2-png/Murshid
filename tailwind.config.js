/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0614',
        plum: '#2A1846',
        plumlight: '#402464',
        rose: '#E8A6C1',
        blush: '#F6D9E6',
        gold: '#D8B979',
        goldsoft: '#EAD9AE',
        ivory: '#FAF5EE',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(216, 185, 121, 0.25)',
      },
    },
  },
  plugins: [],
}
