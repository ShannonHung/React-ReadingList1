import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class OpenSearch extends Component {
    render() {
        return (
            <div className="open-search">
                <Link className="btn-search" to="/search"> Add a Book </Link>
            </div>
        )
    }
}

export default OpenSearch;