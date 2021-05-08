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
        pink: "#FBF0E6",
        f0fff8: "#f0fff8",
        "deep-purple": "#8F154B",
      },
      height: {
        "541px": "541px",
      },
      spacing: {
        22: "5.5rem",
      },
      width: {
        358: "356px",
        "78p": "78%",
        "78.7p": "78.7%",
        "79p": "79%",
        "79.1p": "79.1%",
        "79.2p": "79.2%",
        "80p": "80%",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
