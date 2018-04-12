var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var obfuscate = require('gulp-obfuscate');
var minify = require('gulp-minify');

var paths = {
    bower : './bower_components/',
    assets: {
        scripts:  './assets/scripts/',
        styles:  './assets/styles/',
    },
    public: {
        js: './public/assets/js/',
        css: './public/assets/css/'
    }
};

gulp.task('styles', function () {
    return gulp.src([
        paths.assets.styles + 'app.scss'
    ])
        .pipe(sass({
            includePaths: [
                paths.bower + 'boostrap/scss'
            ]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.assets.styles));
});

gulp.task('scripts', function () {
    return gulp.src([
        paths.bower + 'jquery/dist/jquery.js',
        paths.bower + 'jumbotron/jumbotron.js',
        paths.bower + 'handlebars/handlebars.js',
        paths.bower + 'wysihtml5x/dist/wysihtml5x.js',
        paths.bower + 'bootstrap/dist/js/bootstrap.js',
        paths.bower + 'bootstrap/js/dist/alert.js',
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.assets.scripts));
});

gulp.task('minify-css', function() {
    return gulp.src(paths.assets.styles + '*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.public.css));
});

gulp.task('minify-js', function() {
    gulp.src(paths.assets.scripts + 'app.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.assets.scripts + 'minified'));
});

gulp.task('obfuscate-js', function () {
    gulp.src(paths.assets.scripts + 'minified/app.min.js')
        .pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
        .pipe(gulp.dest(paths.public.js));
});

gulp.task('watch', function () {
    watch();
});

function watch () {
    gulp.watch(paths.assets.styles + '**/*.scss', ['styles']);
    gulp.watch(paths.assets.styles + '*.css', ['minify-css']);
    gulp.watch(paths.assets.scripts + 'app.js', ['minify-js']);
    gulp.watch(paths.assets.scripts + 'minified/app.min.js', ['obfuscate-js']);
}

gulp.task('default', ['styles','scripts']);