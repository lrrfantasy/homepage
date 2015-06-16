import connect from 'gulp-connect'
import config from './config'

export default () => {
  connect.server({
    root: config.build.path,
    port: config.port || 8000
  })
}
