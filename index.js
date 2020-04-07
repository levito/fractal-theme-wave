const mandelbrot = require('@frctl/mandelbrot')

module.exports = function(options) {
  const theme = mandelbrot({
    skin: 'navy',
    scripts: ['/theme-waveui/js/waveui.js'],
    styles: ['/theme-waveui/css/waveui.css'],
    ...options,
  })
  theme.addLoadPath(__dirname + '/views')
  theme.addStatic(__dirname + '/dist', '/theme-waveui')

  return theme
}
