import React from 'react'
import {Link} from 'react-router-dom'
export default class Book extends React.Component {
    render() {
        const { book, shelves, onChange } = this.props;
        const { imageLinks, title, authors, shelf } = book;

        //get Image from object which key is thumbnail
        const imageUrl = imageLinks ? imageLinks.thumbnail : "";

        console.log(
            "Check Shelves in Book.js " + shelves + "onChange=>" + onChange
        )

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${imageUrl})`
                        }}>
                            {/* where you can jump into the book you want */}
                            <Link className="book-detail-link" to={`book/${book.id}`}></Link>
                        </div>
                        
                        <div className="book-shelf-changer">
                            <select value={shelf || 'none'} onChange={(event) => onChange(book, event)}>
                                <option value="move" disabled>Move to...</option>
                                {/* {
                                    //[['currentlyReading',"Currently Reading"], [wantToRead, Want to read], [read, Read],...]
                                    Object.entries(shelves).map(([key, name], index) => (
                                        <option key={index} value={key}>
                                            {name}
                                        </option>
                                ))} */}
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{title}</div>

                    <div className="book-authors">
                        {authors ? authors.join(',') : 'No authors'} 
                        {/* expect appear  " author1,author2,author3"*/}
                    </div>

                </div>
            </li>
        )
    }
}