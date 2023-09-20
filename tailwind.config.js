/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr1: "#F1ECE6",
        clr2: "#FFFFFF",
        clr3: "#76B7CD",
        clr4: "#D98326",
        clrFont: "#323232",
      },
    },
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
