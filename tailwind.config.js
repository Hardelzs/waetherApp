/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '15rem'
      },
      width: {
        '128': '36rem'
      },
    },
  },
  plugins: [],
}

