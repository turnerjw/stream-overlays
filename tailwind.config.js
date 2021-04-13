const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
