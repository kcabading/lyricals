import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {fetchSearch} from '../actions/search'


class SearchForm extends Component {  
  onFormSubmit(evt) {
    // prevent default
    evt.preventDefault();        
    // if search input not empty
    if (this.searchInput.input.value) {      
      this.props.fetchSearch(this.searchInput.input.value)
    }    
  }
  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <TextField        
            floatingLabelText="Search for title, album and artist"           
            ref={el => this.searchInput = el}
          />
        </form>
      </div>
    )
  }
}

export default connect(
  (state) => ({searchInput: state.searchInput}),
  {fetchSearch}  
)(SearchForm)