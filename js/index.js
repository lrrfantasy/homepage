import ReactDom from 'react-dom'
import React from 'react'

import Homepage from './homepage/Homepage.jsx'
import About from './about/About.jsx'

window.App = window.App || {
  homepage() {
    ReactDom.render(<Homepage />, document.getElementById('main'))
  },
  about() {
    ReactDom.render(<About />, document.getElementById('main'))
  }
}
