import React, { Component } from 'react'
import classnames from 'classnames'

import style from './style.styl'

export default class BookList extends Component {
  render() {
    const { books } = this.props
    const bookItems = books.map(book => {
      return {
        image: book.book.images.small,
        title: book.book.title,
        author: book.book.author,
        status: book.status,
        rating: book.rating ? book.rating.value : 0,
        tags: book.tags || []
      }
    }).map((book, idx) => {
      const bookClass = classnames(style.book, style[book.status], style[`rating-${book.rating}`])
      return (
        <div className={bookClass} key={idx}>
          <img src={book.image} />
          <div className={style.info}>
            <h3 className={style.title}>{book.title}</h3>
            <p className={style.author}>{book.author.join(', ')}</p>
            <ul>
              {
                book.tags.map((tag, i) => (<li key={i}>{tag}</li>))
              }
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className={style.list}>
        {bookItems}
      </div>
    )
  }
}
