/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* extend: {
      keyframes: {
        hoverEffect: {
          '0%, 100%': 
        },
      }
    }, */
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}