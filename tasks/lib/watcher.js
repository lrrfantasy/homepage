import gulp from 'gulp'
let watcher = false

export default {
  watch() {
    watcher = true;
  },

  register(taskName, path, cb) {
    if (watcher) {
      gulp.watch(path, (evt) => {
        console.log('Found ' + evt.path + ' ' + evt.type + ', running task ' + taskName)
        cb()
      });
    }
  }
}
