/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
    
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "luxury",
    ],
  },
}

