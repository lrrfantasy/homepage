import Reflux from 'reflux'

import HomepageActions from './HomepageActions'

export default Reflux.createStore({
  listenables: HomepageActions,

  onShowPlaceDetail(place) {
    this.trigger({
      isModalActive: true,
      place: place
    })
  },

  onDismissPlaceDetail() {
    this.trigger({
      isModalActive: false
    })
  }
})
