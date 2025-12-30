/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    //   keyframes: {
    //     loader: {
    //       '0%': { transform: 'translateX(-30px)' },
    //       '100%': { transform: 'translateX(180px)' },
    //     },
    //   },
    //   animation: {
    //     loader: 'loader 1.5s linear infinite',
    //   },
    },
  },
  plugins: [],
}