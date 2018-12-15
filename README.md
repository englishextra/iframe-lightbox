# iframe-lightbox Demo

Responsive no-jQuery pure JS/CSS Lightbox for iframes, no dependencies, customizable aspect ratio, 5kb unminified source code, with demo

[![NPM](https://nodei.co/npm/iframe-lightbox.png?downloads=true)](https://nodei.co/npm/iframe-lightbox/)

[![npm](https://img.shields.io/npm/v/iframe-lightbox.svg)](https://github.com/englishextra/iframe-lightbox)
[![Bower](https://img.shields.io/bower/v/iframe-lightbox.svg)](https://github.com/englishextra/iframe-lightbox)
[![Build Status](https://travis-ci.org/englishextra/iframe-lightbox.svg?branch=master)](https://travis-ci.org/englishextra/iframe-lightbox)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/369642c14d3344bebe134c76f0f5dde8)](https://www.codacy.com/app/englishextra/iframe-lightbox?utm_source=github.com&utm_medium=referral&utm_content=englishextra/iframe-lightbox&utm_campaign=badger)

### Demo

[codepen](https://codepen.io/englishextra/full/jmjayV/)

[jsfiddle](https://fiddle.jshell.net/englishextra/8pzy6uhr/show/)

[jsbin](https://output.jsbin.com/saqine)

### Features

* Nicely fits YouTube / Vimeo / SoundCloud / Audiomack or other URL via iframe

* Customizable aspect ratio via `data-padding-bottom` attribute

* Debounced launch, default 500ms, custom rate can be set as the second parameter

* Preloading spinner that is unset after onload event succeeds

### CDN

#### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.1.9/iframe-lightbox.min.js`

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.1.9/iframe-lightbox.min.css`

#### unpkg

`https://unpkg.com/iframe-lightbox@0.1.9/iframe-lightbox.js`

`https://unpkg.com/iframe-lightbox@0.1.9/iframe-lightbox.css`

### Install

#### npm

`npm install iframe-lightbox`

#### bower

`bower install iframe-lightbox`

### Setup

`class` is not required. They are used here to select elements. You may use some other method for elements selection.

`data-src` is required, and contains URL of your content.

`data-padding-bottom` is optional, and can be used to change default 16/9 Aspect Ratio to the one of yours with the formula: a percentage value of

```txt
height/width*100
```

For instance, HD would be: 9 / 16 * 100 + "%"

So, for YouTube or Vimeo, `data-padding-bottom="56.25%"` would be enough.

For SoundCloud embedded player via iframe, use: `data-padding-bottom="166px"`

For Audiomack embedded player via iframe, use: `data-padding-bottom="252px"`

## YouTube

```html
<a href="javascript:void(0);"
  class="iframe-lightbox-link"
  data-src="https://www.youtube.com/embed/KK9bwTlAvgo?autoplay=0"
  data-padding-bottom="56.25%">YouTube</a>
```

## Vimeo

```html
<a href="javascript:void(0);"
  class="iframe-lightbox-link"
  data-src="https://player.vimeo.com/video/165424115?autoplay=false"
  data-padding-bottom="56.25%">Vimeo</a>
```

## SoundCloud

```html
<a href="javascript:void(0);"
  class="iframe-lightbox-link"
  data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317031598&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
  data-padding-bottom="166px">SoundCloud</a>
 ```

## Audiomack

```html
<a href="javascript:void(0);"
  class="iframe-lightbox-link"
  data-src="https://audiomack.com/embed/song/bottomfeedermusic/no-shame-explicit"
  data-padding-bottom="252px">Audiomack</a>
 ```

## Initialize

```javascript
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
  el.lightbox = new IframeLightbox(el);
});
```

## Tips

SPA / PWA developers can use CSS flag classes when adding event listeners, e.g.:

```javascript
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
  if (!el.classList.contains("is-binded")) {
    el.lightbox = new IframeLightbox(el);
    el.classList.add("is-binded");
  }
});
 ```
 That way you avoid multiple assignments to a single element.

## Examples of event handling

 ```javascript
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
  el.lightbox = new IframeLightbox(el, {
      onLoaded: function (iframe) {
        console.log('hola', iframe);
      },
      onCreated: function (instance) {
        console.log('margo', instance)
      },
      onOpened: function (instance) {
        console.log('blah', instance)
      },
      onClosed: function (instance) {
        console.log('krap', instance)
      },
      scrolling: true // default: false
    });
});
```

## GitHub

Inspired by [squeral/lightbox](https://github.com/squeral/lightbox)

[englishextra/img-lightbox](https://github.com/englishextra/img-lightbox)

## License

Available under [MIT license](https://opensource.org/licenses/MIT).