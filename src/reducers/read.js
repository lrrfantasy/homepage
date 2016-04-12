import { handleActions } from 'redux-actions'

const initialState = {
  list: {
    collections: []
  }
}

export default handleActions({
  'fetch read list' (state, action) {
    return Object.assign({}, state, {
      list: action.payload
    })
  },
}, initialState)
