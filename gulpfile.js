const { scr, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return scr('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['index.scss'], buildStyles)
}

exports.default = series (buildStyles, watchTask)