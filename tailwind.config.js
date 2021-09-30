module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //
    extend: {
      backgroundColor: {
        primary: '#2F2E41',
        secondary: '#FFC700',
        sideBarColor: '#2D2D2F',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: {
        secondary: '#FFC700',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
