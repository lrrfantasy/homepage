import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import clipboard from 'clipboard-js'

import * as japaneseColorActions from '../../actions/japaneseColor'

import Navigation from '../../components/Navigation'
import ColorModal from '../../components/ColorModal'

import { contrastColor } from '../../utils/utils'

import style from './style.styl'

function mapStateToProps (state) {
  return {
    japaneseColor: state.japaneseColor
  }
}

@connect(mapStateToProps, japaneseColorActions)
export default class extends Component {
  componentDidMount () {
    this.props.fetchColor()
  }

  copyToClipboard (color) {
    return () => {
      clipboard.copy(color)
      this.props.openColorModal(color)
      setTimeout(this.props.closeColorModal, 1500)
    }
  }

  render () {
    const { colors, activeColor, isModalActive } = this.props.japaneseColor
    const colorGrid = colors.map((color, idx) => {
      const gridStyle = {
        backgroundColor: color.color
      }
      const textStyle = {
        color: contrastColor(color.color)
      }
      return (
        <div className={style.grid} style={gridStyle} key={idx} onClick={::this.copyToClipboard(color.color)}>
          <div className={style.front} style={textStyle}>
            <p>{color.kanji}</p>
            <p>{color.kana}</p>
            <p>{color.color}</p>
          </div>
        </div>
      )
    })
    return (
      <div className={style.main}>
        <Navigation active='japanese-color'/>
        <div>
          {colorGrid}
        </div>
        <ColorModal color={activeColor} active={isModalActive} />
      </div>
    )
  }
}
