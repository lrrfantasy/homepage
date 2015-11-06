import Trip from './trip'
import Overview from './overview'

export default function () {
  new Overview(document.getElementById('overview'))

  new Trip('indonesia', [120, 0], 300).init().places([
    {
      name: 'Bali',
      latitude: -8.65,
      longitude: 115.2167
    }
  ])

  new Trip('uk', [0, 55], 600).init().places([
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

  new Trip('thailand', [98, 7], 600).init().places([
    {
      name: 'Phuket',
      latitude: 7.89,
      longitude: 98.3983
    }
  ])

  new Trip('india', [80, 20], 400).init().places([
    {
      name: 'Bangalore',
      latitude: 12.9667,
      longitude: 77.5667
    }
  ])

  new Trip('japan', [135, 40], 600).init().places([
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

  new Trip('australia', [135, -30], 300).init().places([
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

  new Trip('sweden', [22, 62], 400).init().places([
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

  new Trip('japan-2', [135, 40], 700).init().places([
    {
      name: 'Kyoto',
      latitude: 35.0117,
      longitude: 135.7683
    }
  ])

  new Trip('usa', [-100, 35], 200).init().places([
    {
      name: 'New York',
      latitude: 40.7127,
      longitude: -74.0059
    }
  ])
}