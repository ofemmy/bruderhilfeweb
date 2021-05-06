const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#309333",
        "primary-dark": "#2b842e",
        "primary-light": "#73ff77",
        "custom-gray": "#505050",
        "custom-black": "#323232",
        "custom-gray-light": "#f9f9f9",
        "light-green": "#fafffa",
        "green-pattern": "#dbe8db",
        "custom-gray-sub": "#a3a3a3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
