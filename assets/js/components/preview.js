'use strict'

import 'jquery-resizable-dom'
import storage from '@frctl/mandelbrot/assets/js/storage'
import events from '@frctl/mandelbrot/assets/js/events'
import iframeResizer from 'iframe-resizer/js/iframeResizer.min.js'

export default class Preview {
  constructor(el) {
    this._el = $(el)
    this._id = this._el[0].id
    this._handleVertical = this._el.find('[data-role="resize-handle"]')
    this._handleHorizontal = this._el.find(
      '[data-role="resize-handle-horizontal"]',
    )
    this._iframe = this._el.children('[data-role="window"]')
    this._resizer = this._el.children('[data-role="resizer"]')
    this._init()
  }

  _init() {
    const dir = $('html').attr('dir')

    this._resizer.css('width', '100%')
    this._resizer.css('height', '100%')

    this._handleVertical.on('dblclick', () =>
      this._resizer.css('width', '100%'),
    )
    this._handleHorizontal.on('dblclick', () =>
      this._resizer.css('height', '100%'),
    )

    this._resizer.resizable({
      handleSelector: '> [data-role="resize-handle"]',
      resizeHeight: false,
      onDragStart: () => {
        this._el.addClass('is-resizing')
        this.disableEvents()
        events.trigger('start-dragging')
      },
      onDragEnd: () => {
        if (this._resizer.outerWidth() >= this._el.outerWidth()) {
          this._resizer.css('width', '100%')
        }
        this._el.removeClass('is-resizing')
        this.enableEvents()
        events.trigger('end-dragging')
      },
      resizeWidthFrom: dir === 'rtl' ? 'left' : 'right',
    })

    this._resizer.resizable({
      handleSelector: '> [data-role="resize-handle-horizontal"]',
      resizeWidth: false,
      onDragStart: () => {
        this._el.addClass('is-resizing')
        this.disableEvents()
        events.trigger('start-dragging')
      },
      onDragEnd: () => {
        this._el.removeClass('is-resizing')
        this.enableEvents()
        events.trigger('end-dragging')
      },
      resizeHeightFrom: 'bottom',
    })

    iframeResizer({ scrolling: true })
  }

  disableEvents() {
    this._el.addClass('is-disabled')
  }

  enableEvents() {
    this._el.removeClass('is-disabled')
  }
}
