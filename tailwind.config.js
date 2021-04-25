const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        120: "30rem",
        160: "40rem",
        1080: "1080px",
        1920: "1920px",
      },
      colors: {
        "instant-blue": {
          DEFAULT: "#085063",
        },
        "instant-red": {
          DEFAULT: "#085063",
        },
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: "Futura",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
