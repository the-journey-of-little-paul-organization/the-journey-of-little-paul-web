const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  sleep(5000)
  return src('Wiki/wwwroot/scss/index.scss')
    .pipe(sass())
    .pipe(dest('Wiki/wwwroot'))
}

function watchTask() {
  sleep(5000)
  watch(['Wiki/wwwroot/scss/index.scss'], buildStyles)
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


exports.default = series (buildStyles, watchTask)