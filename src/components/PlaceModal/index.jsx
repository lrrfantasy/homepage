import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import R from 'ramda'

import Icon from '../../ui/Icon'

import * as homeActions from '../../actions/home'

import style from './style.styl'

function getIndex (idx) {
  const out = '' + idx
  return out.length === 1 ? '0' + out : out
}

@connect(() => ({}), homeActions)
export default class PlaceModal extends Component {
  state = {
    banner: '00',
    activeIndex: '00',
    loading: false
  }

  closePlaceModal () {
    this.setState({
      banner: '00',
      activeIndex: '00'
    })
    this.props.closePlaceModal()
  }

  nextBanner () {
    const index = +this.state.activeIndex + 1
    this.setBanner(getIndex(index))
  }

  prevBanner () {
    const index = +this.state.activeIndex - 1
    this.setBanner(getIndex(index))
  }

  setBanner (i) {
    this.setState({
      banner: `thumb-${i}`,
      activeIndex: i,
      loading: true
    })

    let img = new window.Image()
    img.src = `/assets/${this.props.place.id}/${i}.jpg`
    img.onload = () => {
      this.setState({
        banner: i,
        loading: false
      })
    }
  }

  render () {
    const { place, isActive } = this.props
    const modalClass = classnames(style.modal, {
      [`${style.active}`]: isActive
    })
    const bannerClass = classnames(style.banner, {
      [`${style.loading}`]: this.state.loading
    })
    const bannerStyle = place.id
      ? {
        backgroundImage: `url(/assets/${place.id}/${this.state.banner}.jpg)`
      }
      : {}
    const controll = classname => classnames(style.controll, classname)

    const leftClass = classnames(controll(style.left), {
      [`${style.invalid}`]: this.state.activeIndex === '00'
    })
    const rightClass = classnames(controll(style.right), {
      [`${style.invalid}`]: this.state.activeIndex === getIndex(place.photos - 1)
    })

    const gallery = place.photos
      ? R.range(0, place.photos).map(getIndex).map((i, idx) => {
        const bgStyle = {
          backgroundImage: `url(/assets/${place.id}/thumb-${i}.jpg)`
        }
        const galleryClass = classnames(style.galleryItem, {
          [`${style.galleryActive}`]: this.state.activeIndex === i
        })
        return <li className={galleryClass} style={bgStyle} key={idx} onClick={() => ::this.setBanner(i)}></li>
      })
      : null

    return (
      <div className={modalClass}>
        <span className={controll(style.close)} onClick={::this.closePlaceModal}>
          &times;
        </span>
        <span className={leftClass} onClick={::this.prevBanner}>
          <Icon icon='angle-left' />
        </span>
        <span className={rightClass} onClick={::this.nextBanner}>
          <Icon icon='angle-right' />
        </span>
        <div className={bannerClass} style={bannerStyle}></div>
        <ul className={style.gallery}>{gallery}</ul>
      </div>
    )
  }
}
