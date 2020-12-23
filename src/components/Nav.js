import React from 'react'
const Nav = ({add}) => {

    console.log(
      "Nav add : " + add
    );
  
    return (
      <div className="list-books-title">
          <h1>MyReads</h1>
      </div>
    )
  }
  
  export default Nav;