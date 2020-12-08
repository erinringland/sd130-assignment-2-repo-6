const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const minifyInline = require('gulp-minify-inline');
const sourcemaps = require('gulp-sourcemaps');

// This task is supposed to clean things
function cleanTask() {
  return del('dist');
}

function pagesTask() {
  return src('src/index.html')
    .pipe(dest('dist'))
}

function scriptsTask() {
  return src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(minifyInline())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'));
}

function stylesTask() {
  return src('src/styles/**/*.css')
    .pipe(dest('dist/css'))
}

function imagesTask() {
  return src('src/images/**/*')
    .pipe(dest('dist/images'))
}

exports.default = series(cleanTask, parallel(pagesTask,imagesTask, scriptsTask, stylesTask));
