var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var paths = {
    bower : './bower_components/',
    assets: './assets/',
    public: './public/assets/'
};

gulp.task('styles', function () {
    return gulp.src([
        paths.assets + 'styles/app.scss'
    ])
    .pipe(sass({
        includePaths: [
            paths.bower + 'bootstrap/scss'
        ]
    }))
    .pipe(concat('app.css'))
    .pipe(minify({
        ext:{
            src:'.css',
            min:'.css'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.css', '-min.css']
    })) 
    .pipe(gulp.dest(paths.public + 'css'));
});

gulp.task('default', ['styles']);