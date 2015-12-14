import React from 'react'

import HomepageActions from './HomepageActions'

import Trip from './trip'

export default class Place extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { place } = this.props
    new Trip(place.id, place.origin, place.scale).init().places(place.places)
  }

  showPlaceDetail = () => {
    HomepageActions.showPlaceDetail(this.props.place)
  }

  render() {
    let { place } = this.props
    let bgStyle = {
      backgroundImage: `url(/asset/images/${place.id}.jpg)`
    }
    return (
      <div className='travel' onClick={this.showPlaceDetail}>
        <div className='travel__cover'>
          <div className='travel__map' id={place.id}></div>
        </div>
        <div className='travel__bg' style={bgStyle}></div>
        <hgroup className='travel__title-group'>
          <h2 className='travel__title'>{place.name}</h2>
          <h3 className='travel__photo-place'>{place.photoPlace}</h3>
          <h3 className='travel__photo-time'>{place.photoTime}</h3>
        </hgroup>
      </div>
    )
  }
}
