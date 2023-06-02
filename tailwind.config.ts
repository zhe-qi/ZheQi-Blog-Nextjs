import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['sans-serif', 'Arial', 'Helvetica']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: []
  }
} satisfies Config
