import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from '../../components/Navigation'
import Icon from '../../components/Icon'

import style from './style.styl'

export default class About extends Component {
  render () {
    return (
      <div>
        <Navigation active='about' />
        <div className={style.about}>
          <h2 className={style.title}>About Me</h2>
          <p className={style.intro}>
            Hello, I'm Ruoran Liu. I am a front-end developer based in Chengdu, China.
            I'm now working for ThoughtWorks.
          </p>
          <p className={style.intro}>
            My friends and I also have an unofficial studio <a href='//the-blackhole.github.io/'>Black Hole</a> for doing interesting stuff.
          </p>
          <p className={style.intro}>
            I like electronic music, especially Japanese Trance and Liquid Funk. I like drinking cocktail and Margarita is the best.
          </p>
          <ul className={style.list}>
            <li>
              <Icon icon='map-marker' />
              <span>Chengdu, China</span>
            </li>
            <li>
              <Icon icon='github' />
              <span><a href='//github.com/lrrfantasy'>github.com/lrrfantasy</a></span>
            </li>
            <li>
              <Icon icon='envelope-o' />
              <span>lrr198737 _at_ gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
