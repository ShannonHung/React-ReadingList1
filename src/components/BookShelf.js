import React from 'react'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import Read from './Read'

export default class BookShelf extends React.Component {

    render() {
        //get the props 
        const { shelves, books, onChange } = this.props;

        // console.log(
        //     "books : ", books,
        //     "shelves : ", shelves,
        //     "onchange : ", onChange
        // );


        const shelvesCondition =[
            {
                title: 'Currently Reading',
                shelf: 'currentlyReading'
            },{
                title: 'Want To Read',
                shelf: 'wantToRead',
            },{
                title: 'Read',
                shelf: 'read',
            }
        ];

        
        return (
            <div className="list-books-content">
                <CurrentlyReading 
                    books={books}
                    title={shelvesCondition[0].title}
                    shelves={shelves}
                    onChange={onChange}
                    filter={shelvesCondition[0].shelf}/>

                <WantToRead
                     books={books}
                     title={shelvesCondition[1].title}
                     shelves={shelves}
                     onChange={onChange}
                     filter={shelvesCondition[1].shelf}/>

                <Read
                     books={books}
                     title={shelvesCondition[2].title}
                     shelves={shelves}
                     onChange={onChange}
                     filter={shelvesCondition[2].shelf}/>
            </div>
        )
    }
}