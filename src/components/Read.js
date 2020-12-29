import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';


export default class Read extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        shelves: PropTypes.object.isRequired
    }

    render() {
        //books = all books, shelves: all typs, onChange: book status change method, title: component title, filter: what we want
        const { books, shelves, onChange, title, filter } = this.props;
        const currentlyReading = books.filter((book) => {
            //find out which book attribute key "shelf" equals to CurrentlyReading value
            return book.shelf === filter
        })

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            currentlyReading.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    shelves={shelves}
                                    onChange={onChange} />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}