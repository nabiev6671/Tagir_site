var gulp = require("gulp"),
    browserSync = require('browser-sync');

gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css',
    'app/about_company/*.html',
    'app/about_company/css/**/*.css',
    'app/about_company/js/**/*.js',
    'app/catalog/*.html',
    'app/catalog/css/**/*.css',
    'app/catalog/js/**/*.js',
    'app/direction/*.html',
    'app/direction/css/**/*.css',
    'app/direction/js/**/*.js',
    'app/project/*.html',
    'app/project/css/**/*.css',
    'app/project/js/**/*.js',
    'app/contacts/*.html',
    'app/contacts/css/**/*.css',
    'app/contacts/js/**/*.js'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);
