import gulp from 'gulp'
import mocha from 'gulp-mocha'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  function run(){
    gulp.src(config.spec.path + '/**/*' + config.spec.extension)
             .pipe(mocha({
               ui: 'bdd',
               reporter: 'spec'
             }))
  }

  return run()
}
