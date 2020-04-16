const mandelbrot = require('@frctl/mandelbrot')

module.exports = function (options) {
  const { scripts = [], styles = [], ...optionsRest } = options
  const theme = mandelbrot({
    scripts: ['/theme-wave/js/wave.js', ...scripts],
    styles: ['/theme-wave/css/wave.css', ...styles],
    ...optionsRest,
  })
  theme.addLoadPath(__dirname + '/views')
  theme.addStatic(__dirname + '/dist', '/theme-wave')

  return theme
}
