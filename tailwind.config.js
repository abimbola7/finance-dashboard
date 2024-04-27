/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "sm" : "640px",
      "md" : "768px",
      "tab" : "900px",
      "2xl" : "1536px"
    },
    extend: {
      colors : {
        veryDeepBlue : "#111136"
      }
    },
  },
  plugins: [],
}
