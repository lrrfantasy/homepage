import React from 'react'
import _ from 'lodash'

import HomepageActions from './HomepageActions'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    active: false,
    place: {
      id: null,
      name: ''
    }
  }

  state = {
    banner: 'index',
    activeIndex: 0
  }

  setBanner = idx => {
    this.setState({
      banner: this.photoIndex[idx],
      activeIndex: idx
    })
  }

  dismissPlaceDetail = () => {
    this.setState({
      banner: 'index'
    })
    HomepageActions.dismissPlaceDetail()
  }

  render() {
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
        backgroundImage: `url(/asset/images/${this.props.place.id}/${i}.jpg)`
      }
      let className=`modal__gallery-item${this.state.activeIndex === idx ? ' active' : ''}`
      return <li className={className} style={style} key={idx} onClick={() => {this.setBanner(idx)}}></li>
    })

    return (
      <div className={`modal ${isActive}`}>
        <span className='modal__close' onClick={this.dismissPlaceDetail}>&times;</span>
        <h2 className='modal__title'>{this.props.place.name}</h2>
        <div className='modal__banner' style={bannerStyle}></div>
        <ul className='modal__gallery'>{gallery}</ul>
      </div>
    )
  }
}
