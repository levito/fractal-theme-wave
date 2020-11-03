'use strict'

import storage from '@frctl/mandelbrot/assets/js/storage'
import events from '@frctl/mandelbrot/assets/js/events'
import Preview from './preview'
import Browser from './browser'

export default class Pen {
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
