import React from 'react'

import Navigation from '../components/Navigation.jsx'
import Icon from '../components/Icon.jsx'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main'>
        <Navigation />
        <div className='about'>
          <h2 className='about__title'>About Me</h2>
          <p className='about__intro'>
            Hello, I'm Ruoran Liu. I am a front-end developer based in Chengdu, China. I'm now working for ThoughtWorks.
          </p>
          <p className='about__intro'>
            My friends and I also have an unofficial studio <a href='//lazurey.github.io/'>Black Hole</a> for doing interesting <span style={{ textDecoration: 'line-through' }}>and jiecaoless</span> stuff.
          </p>
          <p className='about__intro'>
            I like electronic music, especially Japanese Trance and Liquid Funk. I like drinking cocktail and Margarita is the best.
          </p>
          <ul className='about__list'>
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
            <li>
              <Icon icon='file-text-o' />
              <span><a href='/asset/other/cv.pdf'>Curriculum Vitae</a></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
