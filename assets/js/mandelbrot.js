'use strict'

global.jQuery = require('jquery')
const pjax = require('jquery-pjax')
const $ = global.jQuery
const doc = $(document)
const frctl = window.frctl || {}

const events = require('@frctl/mandelbrot/assets/js/events')
const utils = require('@frctl/mandelbrot/assets/js/utils')
const framer = require('@frctl/mandelbrot/assets/js/components/frame')
const Tree = require('@frctl/mandelbrot/assets/js/components/tree')
const Pen = require('./components/pen')
const Search = require('@frctl/mandelbrot/assets/js/components/search')

global.fractal = {
  events: events,
}

const frame = framer($('#frame'))
const navTrees = $.map($('[data-behaviour="tree"]'), t => new Tree(t))
const search = $.map(
  $('[data-behaviour="search"]'),
  s => new Search(s, navTrees),
)
let pens = []

loadPen()

if (frctl.env == 'server') {
  doc
    .pjax(
      'a[data-pjax], code a[href], .Prose a[href]:not([data-no-pjax]), .Browser a[href]:not([data-no-pjax])',
      '#pjax-container',
      {
        fragment: '#pjax-container',
        timeout: 10000,
      },
    )
    .on('pjax:start', function(e, xhr, options) {
      if (utils.isSmallScreen()) {
        frame.closeSidebar()
      }
      frame.startLoad()
      events.trigger('main-content-preload', options.url)
    })
    .on('pjax:end', function() {
      events.trigger('main-content-loaded')
      frame.endLoad()
    })
}

events.on('main-content-loaded', loadPen)

function loadPen() {
  setTimeout(function() {
    pens = $.map($('[data-behaviour="pen"]'), p => new Pen(p))
  }, 1)
}
