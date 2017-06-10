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
    'app/certificate/*.html',
    'app/certificate/css/**/*.css',
    'app/certificate/js/**/*.js',
    'app/project/*.html',
    'app/project/css/**/*.css',
    'app/project/js/**/*.js',
    'app/contacts/*.html',
    'app/contacts/css/**/*.css',
    'app/contacts/js/**/*.js',
    'app/catalog/catalog_list/cable_tray_metal/*.html',
    'app/catalog/catalog_list/cable_tray_metal/css/**/*.css',
    'app/catalog/catalog_list/cable_tray_metal/js/**/*.js',
    'app/catalog/catalog_list/boxes_and_cases/*.html',
    'app/catalog/catalog_list/boxes_and_cases/css/**/*.css',
    'app/catalog/catalog_list/boxes_and_cases/js/**/*.js',
    'app/catalog/catalog_list/electrochemical_protection/*.html',
    'app/catalog/catalog_list/electrochemical_protection/css/**/*.css',
    'app/catalog/catalog_list/electrochemical_protection/js/**/*.js',
    'app/catalog/catalog_list/explosion-proof_electrical/*.html',
    'app/catalog/catalog_list/explosion-proof_electrical/css/**/*.css',
    'app/catalog/catalog_list/explosion-proof_electrical/js/**/*.js',
    'app/catalog/catalog_list/integrated_security_systems/*.html',
    'app/catalog/catalog_list/integrated_security_systems/css/**/*.css',
    'app/catalog/catalog_list/integrated_security_systems/js/**/*.js',
    'app/catalog/catalog_list/lamps_fluorescent_and_led/*.html',
    'app/catalog/catalog_list/lamps_fluorescent_and_led/css/**/*.css',
    'app/catalog/catalog_list/lamps_fluorescent_and_led/js/**/*.js',
    'app/catalog/catalog_list/power_cable/*.html',
    'app/catalog/catalog_list/power_cable/css/**/*.css',
    'app/catalog/catalog_list/power_cable/js/**/*.js',
    'app/catalog/catalog_list/telecommunication_equipment/*.html',
    'app/catalog/catalog_list/telecommunication_equipment/css/**/*.css',
    'app/catalog/catalog_list/telecommunication_equipment/js/**/*.js'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);
