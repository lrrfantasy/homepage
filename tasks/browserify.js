import gulp from 'gulp'
import browserify from 'gulp-browserify'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  let path = config.js.path + '*' + config.js.extension
  function run(){
    gulp.src(path)
             .pipe(browserify())
             .pipe(gulp.dest(config.build.path + config.js.path))
  }

  watcher.register('Browserify', path, run)

  return run()
}
