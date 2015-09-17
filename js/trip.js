import d3 from 'd3'
import _ from 'lodash'
import Datamap from './vendor/datamap'
import CONST from './const'

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: CONST.PALE_BLUE,
    highlightFillColor: 'rgba(0, 0, 0, 0.3)',
    highlightBorderColor: CONST.PALE_BLUE,
    popupTemplate: (geography, data) => {
      return `<div class="travel__tooltip">${geography.properties.name}</div>`
    },
  },
  bubblesConfig: {
    borderWidth: 0,
    fillOpacity: 1,
    highlightFillColor: '#ff8f8f',
    highlightBorderWidth: 0,
    highlightFillOpacity: 1,
    popupTemplate: (geography, data) => {
      return `<div class="travel__tooltip">${data.name}</div>`
    }
  },
  fills: {
    defaultFill: 'transparent',
    city: CONST.INDIAN_RED
  }
}

function zoom(center, scale) {
  return (element) => {
    let projection = d3.geo.mercator()
      .center(center)
      .scale(scale)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2])
    let path = d3.geo.path().projection(projection)
    return {path: path, projection: projection}
  }
}

class Trip {
  constructor(name, zoomCenter, scale) {
    this.config = _.merge({
        element: document.getElementById(name),
        setProjection: zoom(zoomCenter, scale)
      }, defaultConfig)
  }

  init() {
    this.instance = new Datamap(this.config)
    return this
  }

  places(places) {
    this.places = places
    let bubbles = places.map(place => {
      return {
        name: place.name,
        radius: 5,
        fillKey: 'city',
        latitude: place.latitude,
        longitude: place.longitude
      }
    })
    this.instance.bubbles(bubbles)
    return this
  }
}

export default Trip
