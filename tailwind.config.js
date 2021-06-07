module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //
    extend: {
      backgroundColor: {
        sideBarColor : '#2D2D2F'
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
