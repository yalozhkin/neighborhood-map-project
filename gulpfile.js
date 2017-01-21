var
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();

// Server
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    },
    open: false
  });
});

// Build
gulp.task('build', function() {
  gulp.src('./src/**/*.*')
    .pipe(gulp.dest('./dist/'))
});
