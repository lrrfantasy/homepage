import React from 'react'
import Reflux from 'reflux'

import Hero from './Hero.jsx'
import Place from './Place.jsx'
import Modal from './Modal.jsx'
import Navigation from '../components/Navigation.jsx'

import HomepageStore from './HomepageStore'

import data from './data'

export default class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.unsubscribe = HomepageStore.listen(homepageState => {
      this.setState({
        homepage: homepageState
      })
    })
  }

  state = {
    homepage: {}
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    let { visited, places } = data
    let { homepage } = this.state
    let placeItems = places.map((place, idx) => {
      return <Place place={place} key={idx} />
    })
    return (
      <div className='main'>
        <Navigation active='home'/>
        <Hero visited={visited} />
        {placeItems}
        <Modal active={homepage.isModalActive} place={homepage.place}/>
      </div>
    )
  }
}
