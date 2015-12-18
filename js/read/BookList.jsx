import React from 'react'

export default class BookList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { books } = this.props
    let bookItems = books
    .map(book => {
      return {
        image: book.book.images.small,
        title: book.book.title,
        author: book.book.author,
        status: book.status,
        rating: book.rating ? book.rating.value : 0,
        tags: book.tags ? book.tags : []
      }
    }).map((book, idx) => {
      let className =`book ${book.status} rating-${book.rating}`
      return (
        <div className={className} key={idx}>
          <img src={book.image} />
          <div className='book__info'>
            <h3 className='book__title'>{book.title}</h3>
            <p className='book__author'>{book.author.join(', ')}</p>
            <ul>
              {book.tags.map((tag, i) => {
                return <li key={i}>{tag}</li>
              })}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className='read__book-list'>
        {bookItems}
      </div>
    )
  }
}
