import React from 'react'
import PropTypes from 'prop-types'
import * as BookApi from '../api/BooksAPI'
import Book from './Book'

export default class BookDetail extends React.Component {

    state = {
        book: null,
    };
    static propTypes = {
        bookId: PropTypes.string.isRequired
    }

    componentDidMount() {
        const { bookId } = this.props;
        BookApi.get(bookId).then((book) => {
            this.setState({ book: book })
        });
    }

    // book, shelves, onChange
    render() {
        const {onChange} = this.props;
        const { book } = this.state;
        console.log("<BookDetail.js> book => ", book);
        if(book!==undefined){
            return(
                <Book book={book} onChange={onChange}/>
            )
        }
        
    }
}