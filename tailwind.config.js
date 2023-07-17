/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
    'grid': "url('/src/assets/images/backgrid.PNG')",
        'input': "url('/src/assets/images/input.PNG')",
        'hero':"url('./src/assets/images//jjk.PNG')",
        'roww':"url('./src/assets/images/loo.PNG')",
      }
    },
  },
  plugins: [],
}

