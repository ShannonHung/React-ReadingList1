import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';


export default class SearchListShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array,
        onChange: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            searchBooks: props.book
        }
    }

    render() {
        //books = all books, shelves: all typs, onChange: book status change method, title: component title, filter: what we want
        const { searchBooks } = this.state;
        const {onChange} = this.props
        const shelves = 'Search List';
        console.log(searchBooks);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Search List</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                        {
                            searchBooks.map((book)=>(
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