module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //
    extend: {
      backgroundColor: {
        primary: "#2F2E41",
        secondary: "#FFC700",
        sideBarColor: "#2D2D2F",
        lightDark: "#E5E5E5",
        dash: "#ECECF8",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: "#2F2E41",
        secondary: "#FFC700",
        light: "#9C9C9C",
        searchColor: "#A3A3A3",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#DADADA",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
