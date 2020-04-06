'use strict'

const $ = global.jQuery
const storage = require('@frctl/mandelbrot/assets/js/storage')
const events = require('@frctl/mandelbrot/assets/js/events')
const Preview = require('./preview')
const Browser = require('./browser')

class Pen {
  constructor(el) {
    this._el = $(el)
    this._previewPanel = this._el.find('[data-behaviour="preview"]')
    this._browser = this._el.find('[data-behaviour="browser"]')
    this._init()
  }

  _init() {
    this._previewPanel.each((i, el) => new Preview(el))
    this._browser.each((i, el) => new Browser(el))
  }
}

module.exports = Pen
