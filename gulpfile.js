var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var obfuscate = require('gulp-obfuscate');
var uglify = require('gulp-uglify');

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
                paths.bower + 'bootstrap-sass-official/assets/stylesheets',
                paths.bower + 'components-font-awesome/scss'
            ]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.assets.styles))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.public.css));
});

gulp.task('scripts', function () {
    return gulp.src([
        paths.bower + 'jquery/dist/jquery.js',
        paths.bower + 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
        paths.bower + 'fontawesome/svg-with-js/js/fontawesome.js',
        paths.assets.scripts + 'main.js',
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.assets.scripts))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        //uncomment if you want an obfuscated js
        //.pipe(gulp.dest(paths.assets.scripts)) 
        //.pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
        .pipe(gulp.dest(paths.public.js));
});

gulp.task('watch', function () {
    gulp.watch(paths.assets.styles + '**/*.scss', ['styles']);
    gulp.watch(paths.assets.scripts + '**/*.js', ['scripts']);
});

gulp.task('default', ['styles','scripts']);