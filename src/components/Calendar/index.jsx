import React, { Component } from 'react'
import R from 'ramda'
import moment from 'moment'

import style from './style.styl'

class Month extends Component {
  render () {
    const { start, length } = this.props
    const days = R.splitEvery(7, R.concat(R.times(n => 0, start === 0 ? 6 : start - 1), R.range(1, length + 1)))
    const weeks = days.map((week, i) => (<Week week={week} key={i}/>))
    return (
      <tbody>{weeks}</tbody>
    )
  }
}

class MonthHeader extends Component {
  render () {
    return (
      <thead>
        <tr>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
        </tr>
      </thead>
    )
  }
}

class MonthWidget extends Component {
  render () {
    const month = moment().month(this.props.month)
    const start = month.startOf('month').day()
    const length = month.endOf('month').date()
    return (
      <div className={style.monthWidget}>
        <div className={style.bg} style={{ backgroundImage: `url(/assets/seasons/${this.props.month + 1}-1.jpg)` }}></div>
        <div className={style.month}>
          <h3>{month.format('MMMM')}</h3>
          <table className={style.monthCalendar}>
            <MonthHeader />
            <Month start={start} length={length} />
          </table>
        </div>
        <div className={style.bg} style={{ backgroundImage: `url(/assets/seasons/${this.props.month + 1}-2.jpg)` }}></div>
      </div>
    )
  }
}

class Week extends Component {
  render () {
    const week = this.props.week.map((day, i) => (<td key={i}>{day || ''}</td>))
    return (
      <tr>{week}</tr>
    )
  }
}

class Year extends Component {
  render () {
    const months = R.range(0, 12).map((month, i) => (<MonthWidget month={month} key={i} />))
    return (
      <div>{months}</div>
    )
  }
}

export {
  Month,
  MonthHeader,
  MonthWidget,
  Week,
  Year
}
