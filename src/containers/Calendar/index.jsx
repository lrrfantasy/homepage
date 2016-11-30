import React, { Component } from 'react'

import Navigation from '../../components/Navigation'
import { Year } from '../../components/Calendar'

import style from './style.styl'

export default class Calendar extends Component {
  render () {
    return (
      <div>
        <Navigation active='calendar' />
        <div className={style.calendar}>
          <h2 className={style.title}>Calendar of 2016</h2>
          <Year />
        </div>
      </div>
    )
  }
}
