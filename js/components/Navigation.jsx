import React from 'react'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className='nav'>
        <h1 className='nav__logo'>Satori</h1>
        <ul className='nav__items'>
          <li className='nav__item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav__item'>
            <a href='/about.html'>About</a>
          </li>
        </ul>
      </nav>
    )
  }
}
