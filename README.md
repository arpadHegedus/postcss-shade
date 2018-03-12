# PostCSS Shade [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-shade.svg)](https://www.npmjs.com/package/postcss-shade)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-shade.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-shade)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to adjust or change the shade of a color


## Installation

```
npm install postcss-shade
```

## Examples

### Simple use, setting shade percentage
```css
/* input */
div { color: shade(#34bbed, 80) }
```
```css
/* output */
div { color: #2da0cc }
```

### Adjusting shade
```css
/* input */
div { color: shade(#34bbed, +10) }
div.other { color: shade(#34bbed, -10) }
```
```css
/* output */
div { color: #38c8ff }
div.other { color: #2ea6d3 }
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-shade')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const shade = require('postcss-shade');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            shade()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
