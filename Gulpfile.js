var gulp = require('gulp');

var sass = require('gulp-sass');
var sassinput = './public/stylesheets/src/*.scss';
var sassoutput = './public/stylesheets/build/';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jsinput = './public/javascripts/src/*.js';
var jsoutput = './public/javascripts/build/';



gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(sassinput)
    // Run Sass on those files
    .pipe(sass())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(minifyCss())  //执行压缩
    .pipe(autoprefixer()) //自动补全前缀
    // Write the resulting CSS in the output folder

    .pipe(gulp.dest(sassoutput));
});
gulp.task('sass:watch', function () {
  gulp.watch(sassinput, ['sass']);
});

gulp.task('minifyjs', function() {
    return gulp.src(jsinput)
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest(jsoutput));  //输出
});
gulp.task('minifyjs:watch', function () {
  gulp.watch(jsinput, ['minifyjs']);
});


gulp.task('default', ['sass','minifyjs','sass:watch','minifyjs:watch']);