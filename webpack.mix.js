const mix = require('laravel-mix')

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(
        __dirname,
        'resources/assets/js'
      )
    }
  }
})

mix.copyDirectory('resources/assets/img', 'public/assets/img')
  .copyDirectory('resources/assets/icon', 'public/assets/icon')
  .copyDirectory('resources/assets/images', 'public/images')
/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

mix.js('resources/assets/js/app.js', 'public/assets/js/')
  .sass('resources/assets/sass/app.scss', 'public/assets/css/')

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  }).sourceMaps()
} else {
  mix.version()
}
