# iframe-lightbox Demo

Responsive no-jQuery pure JS/CSS Lightbox for iframes, no dependencies, customizable aspect ratio, 5kb unminified source code, with demo
[![npm](https://img.shields.io/npm/v/iframe-lightbox.svg)](https://www.npmjs.com/package/iframe-lightbox)
[![Build Status](https://travis-ci.com/englishextra/iframe-lightbox.svg?branch=master)](https://travis-ci.com/englishextra/iframe-lightbox)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/369642c14d3344bebe134c76f0f5dde8)](https://www.codacy.com/manual/englishextra/iframe-lightbox/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=englishextra/iframe-lightbox&amp;utm_campaign=Badge_Grade)

## Demo

[codepen](https://codepen.io/englishextra/full/jmjayV/)
[jsfiddle](https://fiddle.jshell.net/englishextra/8pzy6uhr/show/)
[jsbin](https://output.jsbin.com/saqine)

## Features

* Simple initialization
* Nicely fits YouTube / Vimeo / SoundCloud / Audiomack or other URL via iframe
* Customizable aspect ratio via `data-padding-bottom` attribute
* Iframe content can be scrollable or not (default)
* Debounced launch, default 500ms, custom rate can be set with `rate` property of options object
* Preloading spinner that is unset after onload event succeeds
* Pure CSS Retina Ready UI images, no external ones (prompted by github.com/jasomdotnet, thanks)
* Custom event callbacks

## CDN

### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.2.9/js/iframe-lightbox.min.js`
`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.2.9/css/iframe-lightbox.min.css`

### unpkg

`https://unpkg.com/iframe-lightbox@0.2.9/js/iframe-lightbox.js`
`https://unpkg.com/iframe-lightbox@0.2.9/css/iframe-lightbox.css`

## Install

### npm

`npm install iframe-lightbox`

## Setup

`class` is not required. `iframe-lightbox-link` is used here to select elements. You may use some other method for elements selection.
`data-src` is another method to get the source URL when you do not want the link to lead to some real URL.
`href` is required, and contains URL of your content.
`data-padding-bottom` is optional, and can be used to change default 16/9 Aspect Ratio to the one of yours with the formula: a percentage value of

```txt
height/width*100
```

For instance, HD would be: 9 / 16 * 100 + "%"
So, for YouTube or Vimeo, `data-padding-bottom="56.25%"` would be enough.
For SoundCloud embedded player via iframe, use: `data-padding-bottom="166px"`
For Audiomack embedded player via iframe, use: `data-padding-bottom="252px"`
For Scrollable content set `data-scrolling="true"`, or add `scrolling` option property with `true`
`data-scrolling` is optional, makes iframe content scrollable or not (default); this can be set with `scrolling` option property.
For those who don't use 3rd-party scripts that interfere with links behaviour and don't force `window.location` they have no need in either `data-touch="true"` or `{touch: true}`.
When you have scripts that interfere, then to keep lightbox working, use `{touch: true}` or `data-touch="true"`.
`data-src` or `href` doesn't matter, but you shouldn't enable this touch override if you have a full screen image in a lighbox link and have no other space to scroll down.

### YouTube

```html
<a
  class="iframe-lightbox-link"
  href="https://www.youtube.com/embed/KK9bwTlAvgo?autoplay=0"
  data-padding-bottom="56.25%">YouTube</a>
```

### Vimeo

```html
<a
  class="iframe-lightbox-link"
  href="https://player.vimeo.com/video/165424115?autoplay=false"
  data-padding-bottom="56.25%">Vimeo</a>
```

### SoundCloud

```html
<a
  class="iframe-lightbox-link"
  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317031598&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
  data-padding-bottom="166px">SoundCloud</a>
```

### Audiomack

```html
<a
  class="iframe-lightbox-link"
  href="https://audiomack.com/embed/song/lax/go-low"
  data-padding-bottom="252px">Audiomack</a>
```

## Scrollable content

```html
<a
  class="iframe-lightbox-link"
  href="https://www.w3.org/"
  data-scrolling="true">Scrollable content</a>
```

## Initialize

```js
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
  el.lightbox = new IframeLightbox(el);
});
```

## Tips

SPA / PWA developers don't need to bother: work-related class is added to a link.
That way you avoid multiple assignments to a single element.

## Examples of event handling

```js
(function(root, document) {
  "use strict";
  [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
    el.lightbox = new IframeLightbox(el, {
      onCreated: function() {
        /* show your preloader */
      },
      onLoaded: function() {
        /* hide your preloader */
      },
      onError: function() {
        /* hide your preloader */
      },
      onClosed: function() {
        /* hide your preloader */
      },
      scrolling: false,
      /* default: false */
      rate: 500 /* default: 500 */,
      touch: false /* default: false - use with care for responsive images in links on vertical mobile screens */
    });
  });
})("undefined" !== typeof window ? window : this, document);
```

## GitHub

Inspired by [squeral/lightbox](https://github.com/squeral/lightbox)
[englishextra/img-lightbox](https://github.com/englishextra/img-lightbox)

## License

Available under [MIT license](https://opensource.org/licenses/MIT).
