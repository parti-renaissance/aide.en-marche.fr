var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var devDir = 'dev/';
var appDir = 'app/';
var appAssetsDir = appDir + 'web/';





/*
** Watch
*/

gulp.task('js', function() {
    return gulp.src(devDir + 'js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appAssetsDir + 'js/'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp.src(devDir + 'sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appAssetsDir + 'css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['css', 'js'], function() {
    browserSync.init({
        server: {
            baseDir: appDir
        }
    });
    gulp.watch(appDir + '*.html').on('change', reload);
    gulp.watch(devDir + 'sass/**/*.{scss,css}', ['css']).on('change', reload);
    gulp.watch(devDir + 'js/*.js', ['js']).on('change', reload);
});

gulp.task('default', ['watch']);





/*
** Build
*/

gulp.task('js-build', function() {
    return gulp.src(devDir + 'js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(appAssetsDir + 'js/'));
});

gulp.task('css-build', function() {
    return gulp.src(devDir + 'sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest(appAssetsDir + 'css/'));
});

gulp.task('build', ['css-build', 'js-build']);
