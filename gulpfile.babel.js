import gulp from 'gulp'
import watcher from './tasks/lib/watcher'

import {browserify, vendor} from './tasks/browserify'
gulp.task('clean', require('./tasks/clean'))
gulp.task('asset', require('./tasks/asset'))
gulp.task('sass', require('./tasks/scss'))
gulp.task('jade', require('./tasks/jade'))
gulp.task('mocha', require('./tasks/mocha'))
gulp.task('browserify', browserify)
gulp.task('vendor', vendor)
gulp.task('server', require('./tasks/server'))

let buildTasks = ['browserify', 'vendor', 'sass', 'asset', 'jade']

gulp.task('watch', ['clean'], () => {
  watcher.watch()
  gulp.start(buildTasks)
})

gulp.task('build', ['clean'], () => {
  gulp.start(buildTasks)
});

gulp.task('default', ['watch', 'build', 'server'])
