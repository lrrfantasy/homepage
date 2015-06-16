import gulp from 'gulp'
import jade from 'gulp-jade'
import watcher from './lib/watcher'
import config from './config'

export default () => {
  function run(){
    gulp.src([config.jade.path + '/**/*' + config.jade.extension,
                   '!' + config.jade.path + '**/_*' + config.jade.extension])
             .pipe(jade())
             .pipe(gulp.dest(config.build.path))
  }

  watcher.register('Jade', config.jade.path + '**/*' + config.jade.extension, run)

  return run()
}
