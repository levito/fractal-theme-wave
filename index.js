const mandelbrot = require('@frctl/mandelbrot')

module.exports = function(options) {
  const theme = mandelbrot({
    skin: 'navy',
    scripts: ['/theme-waveui/bundle.js'],
    styles: ['default', '/theme-waveui/overrides.css'],
    ...options,
  })
  theme.addLoadPath(__dirname + '/views')
  theme.addStatic(__dirname + '/assets', '/theme-waveui')

  return theme
}
