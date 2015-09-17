import d3 from 'd3'
import _ from 'lodash'
import Datamap from './vendor/datamap'
import CONST from './const'

const visited = ['IDN', 'GBR', 'THA', 'IND', 'JPN', 'AUS', 'RUS', 'FIN', 'SWE', 'NOR', 'DEN']

const config = {
  projection: 'mercator',
  geographyConfig: {
    borderColor: CONST.PALE_BLUE,
    popupOnHover: false,
    highlightOnHover: false
  },
  fills: {
    defaultFill: 'transparent',
    visited: CONST.INDIAN_RED
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
