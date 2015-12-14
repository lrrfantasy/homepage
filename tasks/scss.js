import gulp from 'gulp'
import sass from 'gulp-sass'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  let path = config.sass.path + '**/*' + config.sass.extension

  function run(){
    gulp.src(path)
      .pipe(sass())
      .on('error', err => {
        console.log(err.message)
      })
      .pipe(gulp.dest(config.build.path + config.css.path))
  }

  watcher.register('Scss', path, run)
  return run()
};
