import del from 'del'
import config from './config'

export default (cb) => {
  del([config.build.path], cb)
}
