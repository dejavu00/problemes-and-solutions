var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css');
var cssWrap = require('gulp-css-wrap');

var customThemeName='.blue-theme'

gulp.task('css-wrap', function() {
    return gulp.src( path.resolve('./theme/index.css'))
        .pipe(cssWrap({selector:customThemeName}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/assets/theme/blue'));
});

gulp.task('move-font', function() {
    return gulp.src(['./theme/fonts/**']).pipe(gulp.dest('src/assets/theme/fonts'));
});

gulp.task('default',['css-wrap','move-font']);
