module.exports = {
  purge: [
    './index.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: '#c9963e',
      'dark-gold': '#b28843',
      purple: '#432673',
      'purple-2': '#301c65',
      'purple-3': '#3f2c78',
      black: '#111111',
      white: '#ffffff',
      cream: '#e4d2b8',
      yellow: '#ffcf04',
      clear: 'transparent'

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
