import React, { Component } from 'react'
import SearchForm from '../../SearchForm.js'
import SearchResults from '../../SearchResults.js'

class Home extends Component {
  
  render() {           
    return (
        <div>
          <SearchForm />
          <SearchResults />
        </div>      
    );
  }
}

export default Home