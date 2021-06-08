let mix = require('laravel-mix');

mix.sass('src/scss/style.scss', 'dist/css');
mix.js('src/js/script.js', 'dist/js');
mix.browserSync({
  files: [
    'src/assets/scss/**/*.scss',
    'src/assets/js/**/*.js',
    'index.html',
  ],
  proxy: 'https://liebusters.test'
});
