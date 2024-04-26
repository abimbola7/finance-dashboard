/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "md" : "768px",
      "tab" : "900px"
    },
    extend: {
      colors : {
        veryDeepBlue : "#111136"
      }
    },
  },
  plugins: [],
}
