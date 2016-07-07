import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as homeActions from '../../actions/home'

import Navigation from '../../components/Navigation'
import Hero from '../../components/Hero'
import Place from '../../components/Place'
import PlaceModal from '../../components/PlaceModal'

function mapStateToProps (state) {
  return {
    home: state.home
  }
}

@connect(mapStateToProps, homeActions)
export default class Homepage extends Component {
  componentDidMount () {
    this.props.fetchVisitedCountry()
    this.props.fetchPlaces()
  }

  render () {
    const { visited, places, modalPlace, isModalActive } = this.props.home
    const placeItems = places.map((place, idx) => (
      <Place place={place} key={idx}/>
    ))
    return (
      <div>
        <Navigation active='home' />
        <Hero visited={visited} />
        {placeItems}
        <PlaceModal place={modalPlace} isActive={isModalActive} />
      </div>
    )
  }
}
