import React from 'react'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let navs = [
      {
        url: '/',
        title: 'Home',
        ref: 'home'
      },
      {
        url: '/read.html',
        title: 'Reading',
        ref: 'read'
      },
      {
        url: '/about.html',
        title: 'About',
        ref: 'about'
      }
    ]
    let navList = navs.map((nav, idx) => {
      return (
        <li className={`nav__item${this.props.active === nav.ref ? ' active' : ''}`} key={idx}>
          <a href={nav.url}>{nav.title}</a>
        </li>
      )
    })
    return (
      <nav className='nav'>
        <h1 className='nav__logo'>Satori</h1>
        <ul className='nav__items'>
          {navList}
        </ul>
      </nav>
    )
  }
}
