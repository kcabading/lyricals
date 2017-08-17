import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AppBar from 'material-ui/AppBar'
import SearchInput from './components/Search.js'
import MainDrawer from './components/MainDrawer.js'
import SearchResults from './components/SearchResults.js'


class App extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      searchInput: "",
      open: false
    };
  }

  toggleDrawer(open) {
    this.setState({open})
  }

  handleClose = () => this.setState({open: false});

  handleSearchInputChange(evt, val) {
    console.log("value" + val);

    this.setState({
      searchInput: val
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Lyrics Finder"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
        <SearchInput value={this.state.searchInput} onChange={this.handleSearchInputChange.bind(this)}/>
        <SearchResults results={this.props.results}/>
        <MainDrawer toggleDrawer={this.toggleDrawer.bind(this)} open={this.state.open}/>

      </div>
    );
  }
}

export default App;
