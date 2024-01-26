/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        holtwood: ['Holtwood One SC', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      width: {
        '95pt': '95%'
      }
    },
  },
  plugins: [],
}

