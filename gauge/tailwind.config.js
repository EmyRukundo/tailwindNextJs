module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', "./styles/**/*.css",'./components/**/*.{js,ts,jsx,tsx}'],
  future:{
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
