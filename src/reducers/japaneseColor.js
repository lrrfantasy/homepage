import { handleActions } from 'redux-actions'

import data from '../utils/JapaneseColorData'

const initialState = {
  colors: [],
  activeColor: '',
  isModalActive: false
}

export default handleActions({
  'fetch japanese color' (state, action) {
    return Object.assign({}, state, {
      colors: data
    })
  },
  'open color modal' (state, action) {
    return Object.assign({}, state, {
      activeColor: action.payload,
      isModalActive: true
    })
  },
  'close color modal' (state, action) {
    return Object.assign({}, state, {
      isModalActive: false
    })
  }
}, initialState)
