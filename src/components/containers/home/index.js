import React, { Component } from 'react'
import {connect} from 'react-redux'

import SearchForm from './SearchForm.js'
import SearchResults from './SearchResults.js'
import {fetchDefault,fetchSearch} from '../../../actions/search'
import {fetchLyrics} from '../../../actions/lyrics'

class Home extends Component {
  
  render() {
    console.log("HOME PAGE RENDER");
    return (
      <div className="page home-page">
        <SearchForm {...this.props}/>
        <SearchResults {...this.props}/>
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    searchInput: state.search.searchInput,
    searchResults: state.search.searchResults,
    initLoadingLyrics: state.search.initLoadingLyrics
  }),
  {fetchSearch,fetchDefault,fetchLyrics}    
)(Home)