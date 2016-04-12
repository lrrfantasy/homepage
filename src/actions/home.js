import { createAction } from 'redux-actions'

export const fetchVisitedCountry = createAction('fetch visited country')
export const fetchPlaces = createAction('fetch places')
export const openPlaceModal = createAction('open place modal')
export const closePlaceModal = createAction('close place modal')
