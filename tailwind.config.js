const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
