import gulp from 'gulp'
import browserify from 'browserify'
import path from 'path'
import source from 'vinyl-source-stream'
import watcher from './lib/watcher'
import config from './config'

let vendor = Object.keys(require(path.join(process.cwd(), 'package.json')).dependencies)
function browserifyTask(){
  browserify(config.js.path + 'index.js', {
              extensions: ['js', 'jsx'],
              debug: true
            })
           .external(vendor)
           .bundle()
           .pipe(source('index.js'))
           .pipe(gulp.dest(config.build.path + config.js.path))
}

function vendorTask(){
  browserify()
          .require(vendor)
          .bundle()
          .pipe(source('vendor.js'))
          .pipe(gulp.dest(config.build.path + config.js.path))
}

export default {
  browserify: () => {
    watcher.register('Browserify', config.js.path + '**/*' + config.js.extension, browserifyTask)
    browserifyTask()
  },
  vendor: () => {
    vendorTask()
  }
}
