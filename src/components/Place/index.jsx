import React, { Component } from 'react'
import { connect } from 'react-redux'
import d3 from 'd3'

import * as homeActions from '../../actions/home'

import MapWrapper from '../MapWrapper'

import CONST from '../../utils/const'

import style from './style.styl'

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: CONST.PALE_BLUE,
    highlightFillColor: 'rgba(0, 0, 0, 0.3)',
    highlightBorderColor: CONST.PALE_BLUE,
    popupTemplate: (geography, data) => {
      return `<div class='${style.tooltip}'>${geography.properties.name}</div>`
    },
  },
  fills: {
    defaultFill: 'transparent',
    city: CONST.INDIAN_RED
  }
}

const bubblesConfig = {
  borderWidth: 0,
  fillOpacity: 1,
  highlightFillColor: '#ff8f8f',
  highlightBorderWidth: 0,
  highlightFillOpacity: 1,
  animate: false,
  popupTemplate: (geography, data) => {
    return `<div class='${style.tooltip}'>${data.name}</div>`
  }
}

function zoom (center, scale) {
  return (element) => {
    let projection = d3.geo.mercator()
      .center(center)
      .scale(scale)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2])
    let path = d3.geo.path().projection(projection)
    return {path: path, projection: projection}
  }
}

function mapStateToProps (state) {
  return { }
}

@connect(mapStateToProps, homeActions)
export default class Place extends Component {
  static defaultProps = {
    places: []
  }

  openPlaceModal () {
    this.props.openPlaceModal(this.props.place)
  }

  drawCity (map) {
    const { places } = this.props.place
    const bubbles = places.map(place => {
      return {
        name: place.name,
        radius: 5,
        fillKey: 'city',
        latitude: place.latitude,
        longitude: place.longitude
      }
    })
    map.bubbles(bubbles, bubblesConfig)
  }

  render () {
    const { zoomCenter, scale, id, name, photoPlace, photoTime } = this.props.place
    const config = Object.assign({}, defaultConfig, {
      setProjection: zoom(zoomCenter, scale),
    })
    const bgStyle = {
      backgroundImage: `url(/assets/${id}/00.jpg)`
    }
    return (
      <div className={style.travel} onClick={::this.openPlaceModal}>
        <div className={style.cover}>
          <MapWrapper config={config} wrapperClass={style.map} onMapInit={::this.drawCity} />
        </div>
        <div className={style.background} style={bgStyle}></div>
        <hgroup className={style.titleGroup}>
          <h2 className={style.title}>{name}</h2>
          <h3 className={style.photoPlace}>{photoPlace}</h3>
          <h3>{photoTime}</h3>
        </hgroup>
      </div>
    )
  }
}
