import d3 from 'd3'
import _ from 'lodash'
import Datamap from './vendor/datamap'

const visited = ['GBR', 'THA', 'IND', 'JPN', 'AUS', 'RUS', 'FIN', 'SWE', 'NOR', 'DEN']

const config = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: '#79b6d2',
    popupOnHover: false,
    highlightOnHover: false
  },
  fills: {
    defaultFill: 'transparent',
    visited: '#cd5c5c'
  },
  data: visited.reduce((mem, cur) => {
    mem[cur] = { fillKey: 'visited' }
    return mem
  }, {}),
  responsive: true
}

class Overview {
  constructor(el) {
    config['element'] = el
    this.instance = new Datamap(config)
  }
}

export default Overview
