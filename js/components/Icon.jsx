import React from 'react'

export default class Icon extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    icon: React.PropTypes.string
  }

  static defaultProps = {
    icon: 'adjust'
  }

  render() {
    let className = `fa fa-${this.props.icon}`
    return (
      <i className={className}></i>
    )
  }
}
