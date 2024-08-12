const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {

  return src('Wiki/wwwroot/scss/index.scss')
    .pipe(sass())
    .pipe(dest('Wiki/wwwroot'))
}

function watchTask() {
  watch(['Wiki/wwwroot/scss/*'], buildStyles)
}




exports.default = series (buildStyles, watchTask)