# Iframe-Lightbox Demo

Responsive no-jQuery pure JS/CSS Lightbox for iframes, no dependencies, customizeable aspect ratio, 4 kb unminified source code, with demo

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/369642c14d3344bebe134c76f0f5dde8)](https://www.codacy.com/app/englishextra/iframe-lightbox?utm_source=github.com&utm_medium=referral&utm_content=englishextra/iframe-lightbox&utm_campaign=badger)
[![NPM](https://nodei.co/npm/iframe-lightbox.png?downloads=true)](https://nodei.co/npm/iframe-lightbox/)

[![npm](https://img.shields.io/npm/v/iframe-lightbox.svg)](https://github.com/englishextra/iframe-lightbox)
[![Bower](https://img.shields.io/bower/v/iframe-lightbox.svg)](https://github.com/englishextra/iframe-lightbox)
[![Build Status](https://travis-ci.org/englishextra/iframe-lightbox.svg?branch=master)](https://travis-ci.org/englishextra/iframe-lightbox)
[![bitHound Overall Score](https://www.bithound.io/github/englishextra/iframe-lightbox/badges/score.svg)](https://www.bithound.io/github/englishextra/iframe-lightbox)

### Demo

[codepen](https://codepen.io/englishextra/full/jmjayV/)

[jsfiddle](https://fiddle.jshell.net/englishextra/8pzy6uhr/show/)

[jsbin](https://output.jsbin.com/saqine)

### Features

* Nicely fits YouTube / Vimeo / SoundCloud or other URL via iframe
* Customizable aspect ratio via `data-padding-bottom` attribute
* Debounced launch, default 500ms, custom rate can be set as second parameter
* Preloading spinner that is unset after onload event succeeds

### CDN

#### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.1.6/iframe-lightbox.min.js`

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@0.1.6/iframe-lightbox.min.css`

#### unpkg

`https://unpkg.com/iframe-lightbox@0.1.6/iframe-lightbox.js`

`https://unpkg.com/iframe-lightbox@0.1.6/iframe-lightbox.css`

### Install

#### npm

`npm install iframe-lightbox`

#### bower

`bower install iframe-lightbox`

### Setup

`class` is not required. They are used here to select elements. You may use some other method for elements selection.

`data-src` is required, and contains URL of your content.

`data-padding-bottom` is optional, and can be used to change default 16/9 Aspect Ratio to the one of yours with the formula: a percentage value of

```
height/width*100
```

For instance, HD would be: 9 / 16 * 100 + "%"

So, for YouTube or Vimeo, `data-padding-bottom="56.25%"` would be enough.

For SoundCloud embedded player via iframe, use: `data-padding-bottom="166px"`

## YouTube
```
 <a href="javascript:void(0);"
 class="iframe-lightbox-link"
 data-src="https://www.youtube.com/embed/KK9bwTlAvgo?autoplay=0"
 data-padding-bottom="56.25%">YouTube</a>
```

## Vimeo
```
 <a href="javascript:void(0);"
 class="iframe-lightbox-link"
 data-src="https://player.vimeo.com/video/28629415?autoplay=false"
 data-padding-bottom="56.25%">Vimeo</a>
```

## SoundCloud
```
 <a href="javascript:void(0);"
 class="iframe-lightbox-link"
 data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317031598&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
 data-padding-bottom="166px">SoundCloud</a>
 ```

## Initialize
```
[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
  el.lightbox = new IframeLightbox(el);
});
```

## Tips

SPA / PWA developers can use CSS flag classes when adding event listeners, e.g.:

```javascript
 [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
   if (!el.classList.contains("is-binded")) {
     el.lightbox = new IframeLightbox(el);
     el.classList.add("is-binded");
   }
 });
 ```
 That way you avoid multiple assignments to a single element.

**Examples of event handling**

 ```javascript
 [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
    el.lightbox = new IframeLightbox(el, {
        onLoaded: function(iframe) {
            console.log('hola', iframe);
        },
        onCreated: function(instance) {
            console.log('margo', instance)
        },
        onOpened: function(instance) {
            console.log('blah', instance)
        }
    });
});
```

### GitHub

Inspired by [squeral/lightbox](https://github.com/squeral/lightbox), and available under MIT License