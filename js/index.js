import _ from 'lodash'
import Trip from './trip'

let ukMap = new Trip('uk', [-5, 55], 1400)
ukMap.init().places([
  {
    name: 'London',
    latitude: 51.5072,
    longitude: 0.1275
  },
  {
    name: 'Sheffield',
    latitude: 53.5856,
    longitude: -1.4669
  },
  {
    name: 'Edinburgh',
    latitude: 55.9531,
    longitude: -3.1889
  },
  {
    name: 'Liverpool',
    latitude: 53.4,
    longitude: -3
  }
])

let thailandMap = new Trip('thailand', [98, 7], 1400)
thailandMap.init().places([
  {
    name: 'Phuket',
    latitude: 7.89,
    longitude: 98.3983
  }
])


let indiaMap = new Trip('india', [80, 20], 900)
indiaMap.init().places([
  {
    name: 'Bangalore',
    latitude: 12.9667,
    longitude: 77.5667
  }
])

let japanMap = new Trip('japan', [140, 39], 1400)
japanMap.init().places([
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

let australiaMap = new Trip('australia', [135, -30], 600)
australiaMap.init().places([
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

let swedenMap = new Trip('sweden', [18, 62], 1000)
swedenMap.init().places([
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
