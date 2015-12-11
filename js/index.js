import ReactDom from 'react-dom'
import React from 'react'

import Homepage from './homepage/Homepage.jsx'

window.App = window.App || {
  homepage: () => {
    ReactDom.render(<Homepage />, document.getElementById('main'))
  }
}
