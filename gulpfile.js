const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile sass 
gulp.task('sass', () => {
    return gulp.src(['src/assets/scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

// Compile js
gulp.task('js', () => {
    return gulp.src(['src/assets/js/*.js'])
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream())
  });

gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: {
            baseDir: './'
        } 

    });
    gulp.watch([
        'src/assets/scss/*.scss',
        'src/assets/js/*.js',
    ],  gulp.parallel( ['sass', 'js'] ));

    gulp.watch("/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('serve'));