/**
 * A simple Gulp 4 Starter Kit
 *
 * The gulp configuration file.
 */

const gulp                      = require('gulp'),
      del                       = require('del'),
      sourcemaps                = require('gulp-sourcemaps'),
      plumber                   = require('gulp-plumber'),
      sass                      = require('gulp-sass'),
      autoprefixer              = require('gulp-autoprefixer'),
      minifyCss                 = require('gulp-clean-css'),
      babel                     = require('gulp-babel'),
      uglify                    = require('gulp-uglify'),
      concat                    = require('gulp-concat'),
      rename                    = require('gulp-rename'),
      imagemin                  = require('gulp-imagemin'),
      browserSync               = require('browser-sync').create(),
      notify                    = require("gulp-notify")

      src_folder                = './assets/',
      dist_folder               = './public/dist/';

// Handle error
const onError = function(err) {
    notify.onError({
                title:    "Gulp",
                subtitle: "Failure!",
                message:  "Error: <%= error.message %>",
                sound:    "Beep"
            })(err);
    this.emit('end');
};


// Cleanup files
gulp.task('clear', () => del([ dist_folder ]));

// Generate CSS from scss files
gulp.task('scss', () => {
  return gulp.src([src_folder + 'scss/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dist_folder))
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist_folder))
    .pipe(browserSync.stream())
    .pipe(notify({ message: "SCSS compilation done!", onLast: true }));
});

// Generate JS file
gulp.task('js', () => {
  return gulp.src([ src_folder + 'js/**/*.js' ])
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest(dist_folder))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist_folder))
    .pipe(browserSync.stream())
    .pipe(notify({ message: "JS compilation done!", onLast: true }));
});

// Image optimization
gulp.task('images', () => {
  return gulp.src([ src_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)' ])
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(gulp.dest(dist_folder + 'images'))
    .pipe(browserSync.stream())
    .pipe(notify("Images optimization done!"));
});

// Serve task
gulp.task('serve', () => {
  return browserSync.init({
    server: {
      baseDir: [ 'public' ]
    },
    port: 3000,
    open: false
  });
});

// Build task
gulp.task('build', gulp.series('clear', gulp.parallel('scss', 'js', 'images')));

// Watch task
gulp.task('watch', () => {
  gulp.watch(['public/**/*.html']).on('change', browserSync.reload);
  gulp.watch([src_folder + 'scss/**/*.scss'], gulp.series('scss')).on('change', browserSync.reload);
  gulp.watch([src_folder + 'js/**/*.js'], gulp.series('js')).on('change', browserSync.reload);
  gulp.watch([src_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)'], gulp.series('images')).on('change', browserSync.reload);
});

// Default task: Run build task then server and watch
gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
