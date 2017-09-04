import React, { Component } from 'react'
import '../../../App.css'
import {connect} from 'react-redux'
import {toggleDrawer, createNew, closeCreate, fetchSavedData} from '../../../actions/global'
import {saveNewLyrics} from '../../../actions/create'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/footer'
import { withRouter } from 'react-router'

class App extends Component {    

  componentDidMount() {
    // load initial data
    this.props.fetchSavedData();
  }  

  onSaveNewLyrics() {
    // initiate save action
    this.props.saveNewLyrics(this.props.create, () => {
      // reload data
      this.props.fetchSavedData();
    })
  }

  render() {    
    return (
      <MuiThemeProvider>        
        <div className="App">          
          <Header {...this.props}  saveNewLyrics={this.onSaveNewLyrics.bind(this)}/>     
            <div style={{ paddingTop: 64 }}>
              {this.props.children}          
            </div>
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
      openNewLyrics: state.global.openNewLyrics,
      create: state.create
    }),
    {toggleDrawer, fetchSavedData, createNew, closeCreate, saveNewLyrics}
)(App))