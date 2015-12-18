import React from 'react'
import ReactDom from 'react-dom'

import Datamap from '../vendor/datamap'
import CONST from './const'

const config = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: CONST.PALE_BLUE,
    popupOnHover: false,
    highlightOnHover: false
  },
  fills: {
    defaultFill: 'transparent',
    visited: CONST.INDIAN_RED,
    home: CONST.VIOLET
  },
  responsive: true
}

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    config.data = this.props.visited.reduce((mem, cur) => {
      mem[cur] = { fillKey: 'visited' }
      return mem
    }, {})
    config.data['CHN'] = { fillKey: 'home' }
    config.element = ReactDom.findDOMNode(this)
    new Datamap(config)
  }

  render() {
    return (
      <div className='header' id='overview'>
        <div className='header__cover'>
          <div className='header__sentence'>
            The world is a book, and those who don't travel read only one page.
          </div>
          <div className='header__ref'>
            Augstine of Hippo
          </div>
        </div>
      </div>
    )
  }
}
