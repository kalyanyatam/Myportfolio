/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'typewriter': 'typewriter 4s steps(40, end) infinite',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          'from': { borderColor: 'transparent' },
          'to': { borderColor: 'transparent' },
        },
      },
      colors: {
        'custom-gray': '#2d2d2d',
        'custom-border': '#4a4a4a',
      },
    },
  },
  plugins: [],
}
