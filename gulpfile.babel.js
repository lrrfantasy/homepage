import gulp from 'gulp'
import watcher from './tasks/lib/watcher'

gulp.task('clean', require('./tasks/clean'))
gulp.task('asset', require('./tasks/asset'))
gulp.task('sass', require('./tasks/scss'))
gulp.task('jade', require('./tasks/jade'))
gulp.task('browserify', require('./tasks/browserify'))
gulp.task('server', require('./tasks/server'))

let buildTasks = ['browserify', 'sass', 'asset', 'jade']

gulp.task('watch', ['clean'], () => {
  watcher.watch()
  gulp.start(buildTasks)
})

gulp.task('build', ['clean'], () => {
  gulp.start(buildTasks)
});

gulp.task('default', ['watch', 'build', 'server'])
