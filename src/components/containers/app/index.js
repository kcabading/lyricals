import React, { Component } from 'react'
import '../../../App.css'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

import {fetchSavedData} from '../../../actions/saved'
import {saveNewLyrics} from '../../../actions/create'
import {showAlert} from '../../../actions/global'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/footer'
import Alert from '../../common/alert'


class App extends Component {

  constructor(props) {
    super(props)
    // load initial data
    this.props.fetchSavedData();
  }

  onSaveNewLyrics() {
    // trigger save
    this.props.saveNewLyrics(this.props.create, (err, response) => {
      if (err) throw err;
      console.log('callback called')
      // show alert
      this.props.showAlert('success','Successfully Saved')
      // this.props.fetchSavedData()
    })
  }

  render() {

    console.log("APP RENDER")
    console.log(this.props)

    return (
      <MuiThemeProvider>   
        <div className="App">
          <Alert open={this.props.alert} message={this.props.alertMessage} />
          <Header {...this.props}  saveNewLyrics={this.onSaveNewLyrics.bind(this)}/>
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
      // initSearch: state.search.initSearch,
      // openNewLyrics: state.global.openNewLyrics,
      data: state.global.data,
      create: state.create,      
      loading: state.global.loading,
      loadingMessage: state.global.loadingMessage  
    }),
    {fetchSavedData, saveNewLyrics, showAlert}
)(App))