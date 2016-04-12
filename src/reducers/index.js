import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import home from './home'
import read from './read'
import japaneseColor from './japaneseColor'

export default combineReducers({
  routing,
  home,
  read,
  japaneseColor
})
