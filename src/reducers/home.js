import { handleActions } from 'redux-actions'

import data from '../utils/homeData'

const initialState = {
  visited: [],
  places: [],
  modalPlace: {},
  isModalActive: false
}

export default handleActions({
  'fetch visited country' (state, action) {
    return Object.assign({}, state, {
      visited: data.visited
    })
  },
  'fetch places' (state, action) {
    return Object.assign({}, state, {
      places: data.places
    })
  },
  'open place modal' (state, action) {
    return Object.assign({}, state, {
      modalPlace: action.payload,
      isModalActive: true
    })
  },
  'close place modal' (state, action) {
    return Object.assign({}, state, {
      modalPlace: {},
      isModalActive: false
    })
  }
}, initialState)
