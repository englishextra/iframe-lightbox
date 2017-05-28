# Iframe-Lightbox Demo

Responsive no-jQuery pure JS/CSS Lightbox for iframes, no dependencies, customizeable aspect ratio, 4 kb unminified source code, with demo

[DEMO](https://fiddle.jshell.net/englishextra/8pzy6uhr/show/)

### CDN

#### jsDelivr

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@latest/iframe-lightbox.min.js` 

`https://cdn.jsdelivr.net/gh/englishextra/iframe-lightbox@latest/iframe-lightbox.min.css`

#### unpkg

`https://unpkg.com/iframe-lightbox@latest/iframe-lightbox.min.js` 

`https://unpkg.com/iframe-lightbox@latest/iframe-lightbox.min.css`

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
 <a href="https://www.youtube.com/watch?v=KK9bwTlAvgo"
 class="iframe-lightbox-link"
 data-src="https://www.youtube.com/embed/KK9bwTlAvgo?autoplay=1"
 data-padding-bottom="56.25%">YouTube</a>
```
## Vimeo
```
 <a href="https://vimeo.com/28629415"
 class="iframe-lightbox-link"
 data-src="https://player.vimeo.com/video/28629415?autoplay=true"
 data-padding-bottom="56.25%">Vimeo</a>
```
## SoundCloud
```
 <a href="https://soundcloud.com/fatcat-demo/trixicles-and-the-other-one"
 class="iframe-lightbox-link"
 data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317031598&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
 data-padding-bottom="166px">SoundCloud</a>
 ```

### GitHub

Inspired by [squeral/lightbox](https://github.com/squeral/lightbox), and available under MIT License