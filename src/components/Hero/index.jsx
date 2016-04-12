import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Datamap from 'datamaps'

import MapWrapper from '../MapWrapper'

import CONST from '../../utils/const'

import style from './style.scss'

const defaultConfig = {
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

export default class Hero extends Component {
  render () {
    const config = Object.assign({}, defaultConfig, {
      data: this.props.visited.reduce((mem, cur) => {
        mem[cur] = { fillKey: 'visited' }
        return mem
      }, { CHN: {fillKey: 'home'} })
    })

    return (
      <div className={style.header}>
        <MapWrapper config={config} />
        <div className={style.cover}>
          <div className={style.sentence}>
            The world is a book, and those who don't travel read only one page.
          </div>
          <div className={style.author}>
            Augstine of Hippo
          </div>
        </div>
      </div>
    )
  }
}
