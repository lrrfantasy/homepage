import gulp from 'gulp'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  let path = config.asset.path + '**/*'

  function run() {
    gulp.src(path)
             .pipe(gulp.dest(config.build.path + config.asset.path))
  }

  watcher.register('Asset', path, run)

  return run()
}
