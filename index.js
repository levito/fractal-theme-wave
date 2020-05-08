const mandelbrot = require('@frctl/mandelbrot')

module.exports = function (options) {
  const { scripts = [], styles = [], ...optionsRest } = options
  const theme = mandelbrot({
    scripts: ['/themes/wave/js/wave.js', ...scripts],
    styles: ['/themes/wave/css/wave.css', ...styles],
    ...optionsRest,
  })
  theme.addLoadPath(__dirname + '/views')
  theme.addStatic(__dirname + '/dist', '/themes/wave')

  return theme
}
