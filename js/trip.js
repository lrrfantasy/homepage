import d3 from 'd3'
import _ from 'lodash'
import Datamap from './vendor/datamap'

const defaultConfig = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#79b6d2',
    highlightFillColor: 'rgba(0, 0, 0, 0.3)',
    highlightBorderColor: '#79b6d2'
  },
  bubblesConfig: {
    borderWidth: 0,
    fillOpacity: 1,
    highlightFillColor: '#ff8f8f',
    highlightBorderWidth: 0,
    highlightFillOpacity: 1
  },
  arcConfig: {
    strokeColor: '#cd5c5c',
    greatArc: true
  },
  fills: {
    defaultFill: 'transparent',
    city: '#cd5c5c'
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
    return this.instance
  }

  places(places) {
    this.places = places
    let bubbles = places.map((place) => {
      return {
        name: place.name,
        radius: 5,
        fillKey: 'city',
        latitude: place.latitude,
        longitude: place.longitude
      }
    })
    this.instance.bubbles(bubbles)
  }

  routes(routes) {
    this.routes = routes
    let arcs = routes.map((route) => {
      return [this.getPlaceByName(route[0]), this.getPlaceByName(route[1])]
    }).map((route) => {
      return {
        origin: route[0],
        destination: route[1]
      }
    })
    this.instance.arc(arcs)
  }

  getPlaceByName(name) {
    return this.places.filter((place) => {
      return place.name === name
    })[0]
  }
}

export default Trip
