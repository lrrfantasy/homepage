import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Datamap from 'datamaps'

export default class MapWrapper extends Component {
  componentDidMount () {
    const { config, onMapInit } = this.props
    config.element = ReactDom.findDOMNode(this.refs.container)
    const map = new Datamap(config)
    if (onMapInit) {
      onMapInit(map)
    }
  }

  componentWillReceiveProps (nextProp) {
    const { config, onMapInit } = nextProp
    config.element = ReactDom.findDOMNode(this.refs.container)
    const map = new Datamap(config)
    if (onMapInit) {
      onMapInit(map)
    }
  }

  render () {
    return (
      <div ref='container' className={this.props.wrapperClass}></div>
    )
  }
}
