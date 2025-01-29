/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: "var(--red-color)",
        customBlue: "var(--blue-color)",
      },
      fontFamily: {
        Inter: ["inter", "sans-serif"],
        Righteous: ["righteous", "roboto"],
        Russo: ["Russo One", "sans"],
      },
    },
  },
  plugins: [],
};
