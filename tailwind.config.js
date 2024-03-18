/** @type {import('tailwindcss').Config} */
export default {
  content: [], content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "midPurple":"#6f2cf5",
        "bgBlack":"#212529"
      }
    },
  },
  plugins: [],
}

