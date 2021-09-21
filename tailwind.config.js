module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //
    extend: {
      backgroundColor: {
        sideBarColor : '#2D2D2F',
      },
      textColor: {
        yellowColor: '#F5DD01', 
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
