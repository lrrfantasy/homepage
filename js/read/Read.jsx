import React from 'react'

import BookList from './BookList.jsx'

import Navigation from '../components/Navigation.jsx'

import superagent from 'superagent'
import jsonp from 'superagent-jsonp'

export default class Read extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    books: []
  }

  componentDidMount() {
    superagent.get('http://api.douban.com/v2/book/user/lrrfantasy/collections?count=20')
      .use(jsonp)
      .end((err, res) => {
        let books = res.body.collections.filter(book => {
          return book.status === 'read' || book.status === 'reading'
        })
        this.setState({
          books: books
        })
      })
  }

  render() {
    return (
      <div className='main'>
        <Navigation active='read'/>
        <div className='read'>
          <BookList books={this.state.books} />
        </div>
      </div>
    )
  }
}
