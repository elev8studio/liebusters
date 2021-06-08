module.exports = {
  purge: [
    './index.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: '#c9963e',
      'dark-gold': '#a9834a',
      purple: '#432673',
      black: '#111111',
      white: '#ffffff',
      cream: '#ecdec8',

    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
