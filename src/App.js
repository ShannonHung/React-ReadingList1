import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import SearchBooks from './components/SearchBooks'
import BookDetail from './components/BookDetail'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  shelves = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to read",
    read: "Read",
    none: "None"
  }
  //get All Books, renew state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  changeBookStatus = (newBook, event) => {
    let newShelfValue = event.target.value;
    this.setState((previousState) => {
      BooksAPI.update(newBook, newShelfValue).then(response => {
    
        //update shelf state of new updates book
        newBook.shelf = newShelfValue;
        //we need to update this.state.books, remove the book which going to change state first
        const updateBooks = previousState.books.filter((b) => b.id !== newBook.id)
        //put the new status book into updateBooks
        updateBooks.push(newBook)
        //renew this.state
        this.setState({
          books: updateBooks
        })
      }
      )
    })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            {/* path to show the personal booklist */}
            <Route exact path="/"
              render={() => (
                <BookList
                  shelves={this.shelves}
                  books={this.state.books}
                  changeBookStatus={this.changeBookStatus} />
              )}>
            </Route>
            {/* path to show search View */}
            <Route exact path="/search"
              render={() => (
                <SearchBooks
                  shelves={this.shelves}
                  books={this.state.books}
                  changeBookStatus={this.changeBookStatus} />
              )}>
            </Route>
            {/* path to find bookId */}
            <Route
              path="/book/:bookId"
              render={props => {
                const {bookId} = props.match.params;
                return <BookDetail bookId={bookId} onChange={this.changeBookStatus}/>
              }}>
            </Route>
          
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
