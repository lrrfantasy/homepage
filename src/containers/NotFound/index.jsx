import React, { Component } from 'react'
import { Link } from 'react-router'

import Navigation from '../../components/Navigation'

import style from './style.styl'

export default class NotFound extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <div className={style.container}>
          <div className={style.cover}></div>
          <div className={style.title}>
            <div>
              Error 404. You are lost. To the <Link to='/'>Homepage</Link>.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
