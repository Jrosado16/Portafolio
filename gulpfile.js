const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile sass 
gulp.task('sass', () => {
    return gulp.src(['src/assets/scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("src/public/css"))
        .pipe(browserSync.stream());
});

// Compile js
gulp.task('js', () => {
    return gulp.src(['src/assets/js/*.js'])
    .pipe(gulp.dest('src/public/js'))
    .pipe(browserSync.stream())
  });



// server / watch ['sass', 'js']
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "src/public"  
    });

    gulp.watch([
        'src/assets/scss/*.scss',
        'src/assets/js/*.js',
    ],  gulp.parallel( ['sass', 'js'] ));

    gulp.watch("./src/public/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('serve'));