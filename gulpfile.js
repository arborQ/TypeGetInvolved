var gulp = require('gulp');
var gulpLess = require('gulp-less');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uiPath = 'frontEnd/ui/**/*.less';
var tsConfig = require("tsconfig-glob");  

gulp.task('less', function(){
  gulp.src(uiPath)
  .pipe(gulpLess())
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(concatCss('bundle.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('less-watch', [ 'less' ], function(){
  gulp.watch(uiPath, [ 'less' ] );
});

gulp.task("tsconfig-glob", function () {  
    return tsConfig({
        configPath: ".",
        cwd: process.cwd(),
        indent: 2
    });
});
