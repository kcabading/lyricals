import React from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {fetchSearch} from '../reducers/search'

const SearchForm = (props) => {
  console.log("rendering form");
  const {searchInput,fetchSearch} = props
  const handleInputChange = (evt) => {
    const val = evt.target.value    
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
  {fetchSearch}  
)(SearchForm)