import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as readActions from '../../actions/read'

import Navigation from '../../components/Navigation'
import BookList from '../../components/BookList'

function mapStateToProps (state) {
  return {
    read: state.read
  }
}

@connect(mapStateToProps, readActions)
export default class Read extends Component {
  componentDidMount () {
    this.props.fetchReadList()
  }

  render () {
    const { list } = this.props.read
    const books = list.collections.filter(book => {
      return book.status === 'read' || book.status === 'reading'
    })

    return (
      <div>
        <Navigation active='read' />
        <BookList books={books} />
      </div>
    )
  }
}
