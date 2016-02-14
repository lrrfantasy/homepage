import React from 'react'
import _ from 'lodash'

import Icon from '../components/Icon.jsx'

import HomepageActions from './HomepageActions'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    active: false,
    place: {
      id: null,
      name: '',
      airports: []
    }
  }

  state = {
    banner: '00',
    activeIndex: 0
  }

  setBanner = idx => {
    this.setState({
      banner: 'thumb-' + this.photoIndex[idx],
      activeIndex: idx,
      loading: true
    })

    let img = new window.Image()
    img.src = `/asset/images/${this.props.place.id}/${this.photoIndex[idx]}.jpg`
    img.onload = () => {
      this.setState({
        banner: this.photoIndex[idx],
        loading: false
      })
    }
  }

  dismissPlaceDetail = () => {
    this.setState({
      banner: '00',
      activeIndex: 0
    })
    HomepageActions.dismissPlaceDetail()
  }

  render() {
    let airports = this.props.place.airports.map((airport, idx) => {
      return <li key={idx}>{airport}</li>
    })

    let isActive = this.props.active ? 'active' : ''
    let bannerStyle = this.props.place.id ? {
      backgroundImage: `url(/asset/images/${this.props.place.id}/${this.state.banner}.jpg)`
    } : {}

    this.photoIndex = _.range(this.props.place.photos).map(i => {
      let out = '' + i
      return out.length === 1 ? '0' + out : out
    })
    let gallery = this.photoIndex.map((i, idx) => {
      let style = {
        backgroundImage: `url(/asset/images/${this.props.place.id}/thumb-${i}.jpg)`
      }
      let className=`modal__gallery-item${this.state.activeIndex === idx ? ' active' : ''}`
      return <li className={className} style={style} key={idx} onClick={() => {this.setBanner(idx)}}></li>
    })

    return (
      <div className={`modal ${isActive}`}>
        <span className='modal__close' onClick={this.dismissPlaceDetail}>&times;</span>
        <div className='modal__airport'>
          <Icon icon='plane' />
          <ul>{airports}</ul>
        </div>
        <div className={`modal__banner${this.state.loading ? ' loading': ''}`} style={bannerStyle}></div>
        <ul className='modal__gallery'>{gallery}</ul>
      </div>
    )
  }
}
