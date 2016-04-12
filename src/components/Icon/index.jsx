import React, { Component } from 'react'

export default class Icon extends Component {
  static defaultProps = {
    icon: 'adjust'
  }

  render () {
    const className = `fa fa-${this.props.icon}`
    return (
      <i className={className}></i>
    )
  }
}
