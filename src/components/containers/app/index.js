import React, { Component } from 'react'
import '../../../App.css'
import {connect} from 'react-redux'
import {toggleDrawer, createNew, fetchSavedData} from '../../../reducers/global'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/footer'
import { withRouter } from 'react-router'



class App extends Component {    

  componentDidMount() {
    // load initial data
    this.props.fetchSavedData();
  }  

  render() {    
    return (
      <MuiThemeProvider>        
        <div className="App">          
          <Header {...this.props} />          
          {this.props.children}          
          <Footer />
        </div>        
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(
    (state) => ({
      initSearch: state.search.initSearch,
      openDrawer: state.global.openDrawer,
      openNewLyrics: state.global.openNewLyrics
    }),
    {toggleDrawer, fetchSavedData, createNew}
)(App))