import React from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {changeSearch} from '../reducers/search-results'
import {fetchSearch} from '../reducers/search-results'

const SearchForm = (props) => {
  console.log("rendering form");
  const {searchInput, changeSearch, fetchSearch} = props
  const handleInputChange = (evt) => {
    const val = evt.target.value
    changeSearch(val)
    fetchSearch(val)
  }
  return (
    <div>        
      <TextField
        hintText="Search for title, album and artist"
        floatingLabelText="Start here"
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>      
  )
}

export default connect(
  (state) => ({searchInput: state.searchInput}),
  {changeSearch, fetchSearch}  
)(SearchForm)