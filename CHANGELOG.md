# Changelog

All notable changes to this project will be documented in this file.

The project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 0.2.9 - 2018-12-22

### Changed

- Fixed body scroll disabling on lightbox open https://github.com/englishextra/iframe-lightbox/issues/18

## 0.2.7 - 2018-12-21

### Changed

- Added touchstart surpress to prevent Wordpress takeover https://github.com/englishextra/iframe-lightbox/issues/17

## 0.2.6 - 2018-12-21

### Changed

- Fixed CSS minification https://github.com/englishextra/iframe-lightbox/issues/17

## 0.2.5 - 2018-12-20

### Changed

- Added touch events support https://github.com/englishextra/iframe-lightbox/issues/16

## 0.2.4 - 2018-12-18

### Changed

- Reorginized the file tree of the library

## 0.2.3 - 2018-12-18

### Changed

- Changed `data-src` (which is still supported for compatibility) to `href` as the source for iframe content https://github.com/englishextra/iframe-lightbox/issues/15

## 0.2.2 - 2018-12-16

### Changed

- Added `data-scrolling="true"`, an alternative to existing `scrolling` option property with `true` https://github.com/englishextra/iframe-lightbox/issues/6

## 0.2.0 - 2018-12-16

### Changed

- Changed z-index 999999 to play well with wp-admin https://github.com/englishextra/iframe-lightbox/issues/14
- Pure CSS Retina Ready UI images, no external ones, removed inlined SVG and base64 images https://github.com/englishextra/iframe-lightbox/issues/13

## 0.1.9 - 2018-12-15

### Changed

- Freeze body scrolling on lightbox open https://github.com/englishextra/iframe-lightbox/issues/12
- Changed z-index 999 https://github.com/englishextra/iframe-lightbox/issues/10
- close and loading with SMIL SVG, and base64 images for compatibility with IE11 and Edge https://github.com/englishextra/iframe-lightbox/issues/13

## 0.1.8 - 2018-12-15

### Changed

- Added Close button https://github.com/englishextra/iframe-lightbox/issues/8
- Closes on ESC https://github.com/englishextra/iframe-lightbox/issues/7
- Added scrolling option (default: false) https://github.com/englishextra/iframe-lightbox/issues/6

## 0.1.7 - 2018-05-02

### Changed

- Added onClosed callback option

## 0.1.6 - 2017-10-25

### Changed

- Updated the forgotten minified file `iframe-lightbox.min.js`

## 0.1.5 - 2017-10-25

### Changed

- The new `onLoaded` event is now an alias for `onIframeLoaded`

## 0.1.4 - 2017-10-11

### Added

- This CHANGELOG file
- [Event Handling Callbacks #3](https://github.com/englishextra/iframe-lightbox/pull/3)