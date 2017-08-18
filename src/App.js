import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AppBar from 'material-ui/AppBar'
import SearchForm from './components/SearchForm.js'
import MainDrawer from './components/MainDrawer.js'
import SearchResults from './components/SearchResults.js'

class App extends Component {

  constructor(props) {
    super(props);        
    this.state = {      
      open: false      
    };
  }

  toggleDrawer(open) {
    this.setState({open})
  }

  handleClose = () => this.setState({open: false});

  render() {   
    
    return (
      <div className="App">
        <AppBar
          title="Lyrics Finder"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
        <SearchForm />
        <SearchResults />
        <MainDrawer toggleDrawer={this.toggleDrawer.bind(this)} open={this.state.open}/>
      </div>
    );
  }
}
// export default App;
export default App