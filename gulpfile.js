var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('build', function(){
    gulp.src('event.js')
        .pipe(uglify())
        .pipe(rename('event.min.js'))
        .pipe(gulp.dest('./'));
});