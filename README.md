# fractal-theme-wave

A Fractal subtheme based on the default Mandelbrot theme.

## Features

- Welcoming, browsable, documentation-like layout
- Multiple previews on one page
- Component notes displayed more prominently
- Configurable colors, logo and header image

## Installation

Install Fractal, iframe-resizer and this theme:

```
npm install --save-dev @frctl/fractal iframe-resizer fractal-theme-wave
```

## Setup

Configure Fractal via `fractal.config.js`:

```js
const fractal = module.exports = require('@frctl/fractal').create()
const theme = require('fractal-theme-wave')

fractal.set('project.title', 'My Awesome Project')
fractal.set('project.description', 'Pattern Library')

fractal.web.theme(
  theme({
    // excluding 'preview' here makes it permanent with panel tabs below 
    // and no tab will be selected by default (recommended)
    // including 'preview' makes it a tab which is selected by default
    panels: ['html', 'view', 'context', 'resources', 'info'],
    skin: {
      heroImage: '/my-custom-hero-image.jpg',
      logo: '/my-logo.svg',
      // color configuiration as in the Mandelbrot theme
      accent: '#531',
      complement: '#ffd',
      links: '#c42',
    },
  }),
)
```
