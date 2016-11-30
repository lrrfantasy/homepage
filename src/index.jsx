import { Router, Route, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createHashHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Homepage from './containers/Homepage'
import Read from './containers/Read'
import About from './containers/About'
import JapaneseColor from './containers/JapaneseColor'
import Calendar from './containers/Calendar'
import NotFound from './containers/NotFound'

import configure from './store'

import './styles/main.styl'
import 'font-awesome/css/font-awesome.css'

const store = configure(undefined, process.env)

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Homepage} />
      <Route path='/read' component={Read} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/japanese-color' component={JapaneseColor} />
      <Route path='/about' component={About} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
