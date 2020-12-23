import React from 'react'
import Nav from './Nav';
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

class BookList extends React.Component {

    render() {
      const {shelves, changeBookStatus, books} = this.props;

        return (
          <div className="list-books">
            <Nav/>
            <BookShelf shelves={shelves} books={books} onChange={changeBookStatus} />
            <OpenSearch/>
          </div>
        )
    }
}
export default BookList