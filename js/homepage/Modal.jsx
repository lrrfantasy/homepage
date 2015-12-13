import React from 'react'

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

  render() {
    let isActive = this.props.active ? 'active' : ''
    let bannerStyle =this.props.place.id ? {
      backgroundImage: `url(/asset/${this.props.place.id}.jpg)`
    } : {}
    return (
      <div className={`modal ${isActive}`}>
        <span className='modal__close' onClick={HomepageActions.dismissPlaceDetail}>&times;</span>
        <h2 className='modal__title'>{this.props.place.name}</h2>
        <div className='modal__banner' style={bannerStyle}></div>
      </div>
    )
  }
}
