import React from 'react'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

class BookList extends React.Component {

  render() {
    const { shelves, changeBookStatus, books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads version3:</h1>
        </div>
        <BookShelf shelves={shelves} books={books} onChange={changeBookStatus} />
        <OpenSearch />
      </div>
    )
  }
}
export default BookList