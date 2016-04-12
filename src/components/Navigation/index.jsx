import React, { Component } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import style from './style.scss'

export default class Navigation extends Component {
  render () {
    let navs = [
      {
        url: '/',
        title: 'Home',
        ref: 'home'
      },
      {
        url: '/read',
        title: 'Reading',
        ref: 'read'
      },
      {
        url: '/japanese-color',
        title: '和風色',
        ref: 'japanese-color'
      },
      {
        url: '/about',
        title: 'About',
        ref: 'about'
      }
    ]
    let navList = navs.map((nav, idx) => {
      const itemClass = classnames(style.item, {
        [`${style.itemActive}`]: this.props.active === nav.ref
      })
      return (
        <li className={itemClass} key={idx}>
          <Link to={nav.url}>{nav.title}</Link>
        </li>
      )
    })
    return (
      <nav className={style.nav}>
        <h1 className={style.logo}>Satori</h1>
        <ul>
          {navList}
        </ul>
      </nav>
    )
  }
}
