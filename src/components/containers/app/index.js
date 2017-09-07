import React, { Component } from 'react'
import '../../../App.css'
import {connect} from 'react-redux'
import {toggleDrawer, createNew, closeCreate, fetchSavedData} from '../../../actions/global'
import {saveNewLyrics} from '../../../actions/create'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/footer'
import { withRouter } from 'react-router'
import Loading from '../../common/loading'

class App extends Component {

  componentDidMount() {
    // load initial data
    this.props.fetchSavedData();
  }  

  render() {           

    return (
      <MuiThemeProvider>   
        <div className="App">                 
          {this.props.loading ? <Loading /> : undefined}
          <Header {...this.props}  saveNewLyrics={this.props.saveNewLyrics.bind(this, this.props.create)}/>     
            <div style={{ paddingTop: 64 }}>
              {this.props.children}              
            </div>
          {/* <Footer /> */}
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
      create: state.create,
      loading: state.global.loading
    }),
    {toggleDrawer, fetchSavedData, createNew, closeCreate, saveNewLyrics}
)(App))