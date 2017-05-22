import React, { Component } from 'react'
import R from 'ramda'
import moment from 'moment'

import style from './style.styl'

const Month = ({ start, length }) => {
  const weeks = R.splitEvery(
    7,
    R.concat(R.times(n => 0, start === 0 ? 6 : start - 1), R.range(1, length + 1))
  ).map((week, i) => (<Week week={week} key={i}/>))
  return (
    <tbody>{weeks}</tbody>
  )
}

const MonthHeader = props => (
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

const MonthWidget = props => {
  const month = moment().month(props.month)
  const start = month.startOf('month').day()
  const length = month.endOf('month').date()
  return (
    <div className={style.monthWidget}>
      <div className={style.bg} style={{ backgroundImage: `url(/assets/seasons/${props.month + 1}-1.jpg)` }}></div>
      <div className={style.month}>
        <h3>{month.format('MMMM')}</h3>
        <table className={style.monthCalendar}>
          <MonthHeader />
          <Month start={start} length={length} />
        </table>
      </div>
      <div className={style.bg} style={{ backgroundImage: `url(/assets/seasons/${props.month + 1}-2.jpg)` }}></div>
    </div>
  )
}

const Week = props => (
  <tr>
    {props.week.map((day, i) => (<td key={i}>{day || ''}</td>))}
  </tr>
)

const Year = props => (
  <div>
    {R.range(0, 12).map((month, i) => (<MonthWidget month={month} key={i} />))}
  </div>
)

export {
  Month,
  MonthHeader,
  MonthWidget,
  Week,
  Year
}
