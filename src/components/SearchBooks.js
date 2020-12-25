import React from 'react'
import { Link } from 'react-router-dom'
import * as BookApi from '../api/BooksAPI'
import Book from './Book'
import SearchListShelf from './SearchListShelf'

export default class SearchBooks extends React.Component {

  state = {
    bookList: [],
    searchQueryText: '',
    invalidQuery: false
  }

  searchBookList = (event) => {
    this.checkSearchText();
    let searchQuery = event.target.value;
    this.setState({
      bookList:[],
      searchQueryText: searchQuery,
      invalidQuery: false
    })

      if (searchQuery === '') {
        this.setState({
          bookList: [],
          searchQueryText: '',
          invalidQuery: false
        })
      } else {
        BookApi.search(searchQuery).then((result) => {
          if (Array.isArray(result)) {
            this.setState({
              bookList: this.searchResultwithShelf(result, this.props.books)
            })
          } else {
            this.setState({ bookList: [] })
          }
        })

        if (this.state.bookList.length === undefined || this.state.bookList.length === 0) {
          this.setState({
            invalidQuery: true
          })
        }
      }
  }
  checkSearchText=()=>{
    const text = this.state.searchQueryText;
    if(text==="" | text===undefined){
      this.setState(({
        bookList:[]
      }))
    }
  }


  searchResultwithShelf = (result, books) => {
    //we are going to change the state of books we search from the api depend on what we have on the bookShelf
    const bookList = (result).map(resultBook => {
      for (let bookWehave of books) {
        if (bookWehave.id === resultBook.id) {
          resultBook.shelf = bookWehave.shelf
          break;
        }
      }
      return resultBook
    })

    return bookList;

  }

  render() {
    const { changeBookStatus } = this.props;
    const { bookList, searchQueryText } = this.state;


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchQueryText}
              onChange={(event) => { this.searchBookList(event) }} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf">
              {
                // Mostly everything looks good. However, there's one discrepancy.
                // If I delete the search box input while the search request is still pending,
                // I can see the results of previous search input.
                (bookList.length > 0 && (searchQueryText!=="") && (
                  <SearchListShelf book={bookList} onChange={changeBookStatus} />
                ))
              }

              {
                ((bookList.length === 0 || (searchQueryText==="")) && (
                  <h2>Not Found</h2>
                ))
              }
            </div>
          </ol>
        </div>
      </div>

    )
  }
}