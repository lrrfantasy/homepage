import _ from 'lodash'
import Trip from './trip'

let japanMap = new Trip('japan', [140, 39], 1400)
japanMap.init()
japanMap.places([
  {
    name: 'Tokyo',
    latitude: 35.6833,
    longitude: 139.6833
  },
  {
    name: 'Nagoya',
    latitude: 35.1833,
    longitude: 136.9
  },
  {
    name: 'Osaka',
    latitude: 34.6939,
    longitude: 135.5022
  }
])
japanMap.routes([['Tokyo', 'Nagoya'], ['Nagoya', 'Osaka']])

let australiaMap = new Trip('australia', [135, -30], 600)
australiaMap.init()
australiaMap.places([
  {
    name: 'Sydney',
    latitude: -33.865,
    longitude: 151.2094
  },
  {
    name: 'Melbourne',
    latitude: -37.8136,
    longitude: 144.9631
  },
  {
    name: 'Brisbane',
    latitude: -27.4667,
    longitude: 153.0333
  }
])
australiaMap.routes([['Sydney', 'Melbourne'], ['Sydney', 'Brisbane']])

let swedenMap = new Trip('sweden', [18, 62], 1000)
swedenMap.init()
swedenMap.places([
  {
    name: 'Moscow',
    latitude: 55.75,
    longitude: 37.6167
  },
  {
    name: 'St Petersburg',
    latitude: 59.95,
    longitude: 30.3
  },
  {
    name: 'Helsinki',
    latitude: 60.1708,
    longitude: 24.9375
  },
  {
    name: 'Stockholm',
    latitude: 59.3294,
    longitude: 18.0686
  },
  {
    name: 'Oslo',
    latitude: 59.95,
    longitude: 10.75
  },
  {
    name: 'Copenhagen',
    latitude: 55.6761,
    longitude: 12.5683
  }
])
swedenMap.routes([['Moscow', 'St Petersburg'], ['St Petersburg', 'Helsinki'], ['Helsinki', 'Stockholm'], ['Stockholm', 'Oslo'], ['Oslo', 'Copenhagen']])

