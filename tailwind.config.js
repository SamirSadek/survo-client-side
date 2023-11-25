/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green" : "#37BA74",
        "secondary" : "#555",
        "red": "#FF6868"
      }
    },
  },
  plugins: [require("daisyui")],
}

