import React, { Component } from 'react'
import classnames from 'classnames'

import { contrastColor } from '../../utils/utils'

import style from './style.styl'

export default class ColorModal extends Component {
  render () {
    const { color, active } = this.props
    const modalClass = classnames(style.modal, {
      [`${style.active}`]: active
    })
    const modalStyle = {
      backgroundColor: color,
      color: contrastColor(color)
    }
    return (
      <div className={modalClass} style={modalStyle}>
        {`${color} をコーピしました`}
      </div>
    )
  }
}
