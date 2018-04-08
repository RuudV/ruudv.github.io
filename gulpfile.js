var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        files: './index.html'
    });
});