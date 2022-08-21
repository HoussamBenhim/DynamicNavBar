/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    clipPath: {
      mypolygon:
        'polygon(0 10%, 43% 9%, 49% 0, 53% 9%, 100% 10%, 100% 100%, 0 100%)'
    }
  },
  plugins: [require('tailwind-clip-path')]
}
