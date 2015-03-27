var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var del = require('del');
var fs = require('fs');

var config = {
  js: {
    path: 'js/',
    extension: '.js'
  },
  sass: {
    path: 'scss/',
    extension: '.scss'
  },
  css: {
    path: 'css/'
  },
  asset: {
    path: 'asset/'
  },
  jade: {
    path: 'jade/',
    extension: '.jade'
  },
  build: {
    path: 'build/'
  },
  port: 8000
};

gulp.task('clean', function(cb){
  del([config.build.path + '**/*',
       '!' + config.build.path + '.git/'], cb);
});

gulp.task('js', function(){
  return gulp.src(config.js.path + '*' + config.js.extension)
             .pipe(browserify())
             .pipe(gulp.dest(config.build.path + config.js.path));
});

gulp.task('sass', function(){
  return gulp.src(config.sass.path + '**/*' + config.sass.extension)
             .pipe(sass())
             .pipe(gulp.dest(config.build.path + config.css.path));
});

gulp.task('asset', function(){
  return gulp.src(config.asset.path + '**/*')
             .pipe(gulp.dest(config.build.path + config.asset.path));
});

gulp.task('jade', function(){
  return gulp.src([config.jade.path + '/**/*' + config.jade.extension,
                   '!' + config.jade.path + '**/_*' + config.jade.extension])
             .pipe(jade())
             .pipe(gulp.dest(config.build.path));
});

gulp.task('watch', function(){
  gulp.watch(config.js.path + '**/*' + config.js.extension, ['js']);
  gulp.watch(config.sass.path + '**/*' + config.sass.extension, ['sass']);
  gulp.watch(config.asset.path + '**/*', ['asset']);
  gulp.watch(config.jade.path + '**/*' + config.jade.extension, ['jade']);
});

gulp.task('server', function(){
  connect.server({
    root: config.build.path,
    port: config.port || 8000
  });
});

gulp.task('build', ['clean'], function(){
  gulp.start(['js', 'sass', 'asset', 'jade']);
});

gulp.task('default', ['watch', 'build', 'server']);
