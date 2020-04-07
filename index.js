const mandelbrot = require('@frctl/mandelbrot')

module.exports = function (options) {
  const theme = mandelbrot({
    skin: 'navy',
    scripts: ['/theme-wave/js/wave.js'],
    styles: ['/theme-wave/css/wave.css'],
    ...options,
  })
  theme.addLoadPath(__dirname + '/views')
  theme.addStatic(__dirname + '/dist', '/theme-wave')

  return theme
}
