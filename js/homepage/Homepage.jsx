import React from 'react'

import Hero from './Hero.jsx'
import Place from './Place.jsx'
import Navigation from '../components/Navigation.jsx'

import data from './data'

export default class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { visited, places } = data
    let placeItems = places.map((place, idx) => {
      return <Place place={place} key={idx} />
    })
    return (
      <div className='main'>
        <Navigation />
        <Hero visited={visited}/>
        {placeItems}
      </div>
    )
  }
}
